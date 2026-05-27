import csv
import json
import re
from datetime import datetime, timezone
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE_ROOT = REPO_ROOT.parent / "physics_TTS" / "Mechanics_Goldstein_Classical"
TARGET_SECTION_RE = re.compile(r"^GM_1\.[0-3]_")


def read_manifest(source_root: Path):
    manifest_path = source_root / "TextBook" / "manifest.tsv"
    with manifest_path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def entry_kind(path: Path):
    name = path.name
    if name.endswith("_Korean_Translation.md"):
        return "translation"
    if name.endswith("_KR_TTS.md"):
        return "tts"
    return None


def file_label(path: Path, section_id: str):
    stem = path.stem
    label = stem
    label = label.replace("_Korean_Translation", "")
    label = label.replace("_KR_TTS", "")
    label = re.sub(rf"^{re.escape(section_id)}_?", "", label)
    label = label.replace("_", " ").strip()
    if not label:
        return section_id
    return f"{section_id} · {label}"


def file_version(path: Path):
    name = path.stem
    if "separate_session" in name:
        return "separate session"
    match = re.search(r"_part(\d+)_", name)
    if match:
        return f"part {match.group(1)}"
    return "main"


def section_id_from_dir(section_dir: Path):
    match = re.match(r"^(GM_1\.[0-3])_", section_dir.name)
    if not match:
        raise ValueError(f"Not a target section directory: {section_dir}")
    return match.group(1)


def build_data(source_root: Path):
    sections = []
    rows = read_manifest(source_root)

    for row in rows:
        pdf_path = Path(row["file"])
        section_dir_name = pdf_path.parent.name
        if not TARGET_SECTION_RE.match(section_dir_name):
            continue

        section_dir = source_root / pdf_path.parent
        section_id = section_id_from_dir(section_dir)
        entries = []

        for md_path in sorted(section_dir.glob("*.md"), key=lambda item: item.name.lower()):
            kind = entry_kind(md_path)
            if not kind:
                continue
            relative_path = md_path.relative_to(source_root).as_posix()
            entries.append(
                {
                    "id": re.sub(r"[^a-zA-Z0-9_-]+", "-", md_path.stem),
                    "kind": kind,
                    "version": file_version(md_path),
                    "label": file_label(md_path, section_id),
                    "fileName": md_path.name,
                    "sourcePath": relative_path,
                    "content": md_path.read_text(encoding="utf-8-sig").strip(),
                }
            )

        sections.append(
            {
                "id": section_id,
                "title": row["title"],
                "category": row["category"],
                "startPage": row["start_page"],
                "endPage": row["end_page"],
                "pageCount": row["page_count"],
                "pageLabelStart": row["page_label_start"],
                "pageLabelEnd": row["page_label_end"],
                "note": row["note"],
                "entries": entries,
            }
        )

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "source": "Mechanics_Goldstein_Classical 1.0-1.3, PDFs excluded",
        "sections": sections,
    }


def main():
    source_root = DEFAULT_SOURCE_ROOT
    if not source_root.exists():
      raise SystemExit(f"Source root does not exist: {source_root}")

    data = build_data(source_root)
    output_path = REPO_ROOT / "data" / "site-data.js"
    output_path.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    output_path.write_text(f"window.GOLDSTEIN_SITE_DATA = {payload};\n", encoding="utf-8")

    total_entries = sum(len(section["entries"]) for section in data["sections"])
    print(f"Wrote {output_path}")
    print(f"Sections: {len(data['sections'])}")
    print(f"Entries: {total_entries}")


if __name__ == "__main__":
    main()
