import csv
import json
import os
import re
import shutil
from html import unescape
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import unquote, urlsplit, urlunsplit


REPO_ROOT = Path(__file__).resolve().parents[1]
TARGET_SECTION_RE = re.compile(r"^GM_[12]\.\d+_")
IMAGE_EXTENSIONS = {".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}

SECTION_TITLES_KO = {
    "GM_1.0": "기본 원리의 개관",
    "GM_1.1": "입자의 역학",
    "GM_1.2": "입자계의 역학",
    "GM_1.3": "구속조건",
    "GM_1.4": "달랑베르의 원리와 라그랑주 방정식",
    "GM_1.5": "속도 의존 퍼텐셜과 흩어지기 함수",
    "GM_1.6": "라그랑지언 정식화의 간단한 응용",
    "GM_1.7": "유도 문제",
    "GM_1.8": "연습문제",
    "GM_2.0": "변분 원리와 라그랑주 방정식",
    "GM_2.1": "해밀턴의 원리",
    "GM_2.2": "변분법의 몇 가지 기법",
    "GM_2.3": "해밀턴의 원리로부터 라그랑주 방정식의 유도",
    "GM_2.4": "구속조건이 있는 계로의 해밀턴 원리 확장",
    "GM_2.5": "변분 원리 정식화의 장점",
    "GM_2.6": "보존 정리와 대칭성",
    "GM_2.7": "에너지 함수와 에너지 보존",
    "GM_2.8": "유도 문제",
    "GM_2.9": "연습문제",
}

ENTRY_LABELS_KO = {
    "GM_1.0": {
        "Survey_of_the_Elementary_Principles": "기본 원리의 개관",
    },
    "GM_1.1": {
        "Mechanics_of_a_Particle_part01_newtons_law_and_inertial_frames": "1부: 뉴턴 법칙과 관성계",
        "Mechanics_of_a_Particle_part02_linear_and_angular_momentum": "2부: 선운동량과 각운동량",
        "Mechanics_of_a_Particle_part03_work_energy_and_conservative_forces": "3부: 일, 에너지와 보존력",
        "Mechanics_of_a_Particle_part04_energy_conservation_and_time_dependent_potential": "4부: 에너지 보존과 시간 의존 퍼텐셜",
    },
    "GM_1.2": {
        "part01_Mechanics_of_a_System_of_Particles_center_of_mass_and_linear_momentum": "1부: 질량중심과 선운동량",
        "part02_Mechanics_of_a_System_of_Particles_total_angular_momentum_theorem": "2부: 전체 각운동량 정리",
        "part03_Mechanics_of_a_System_of_Particles_action_reaction_limits": "3부: 작용-반작용의 한계",
        "part04_Mechanics_of_a_System_of_Particles_angular_momentum_center_of_mass_decomposition": "4부: 각운동량의 질량중심 분해",
        "part05_Mechanics_of_a_System_of_Particles_work_and_kinetic_energy_decomposition": "5부: 일과 운동에너지의 분해",
        "part06_Mechanics_of_a_System_of_Particles_conservative_internal_and_external_forces": "6부: 보존적인 내력과 외력",
        "part07_Mechanics_of_a_System_of_Particles_total_energy_and_rigid_bodies": "7부: 전체 에너지와 강체",
    },
    "GM_1.3": {
        "part01_Constraints_constraint_classification": "1부: 구속조건의 분류",
        "part02_Constraints_generalized_coordinates_and_degrees_of_freedom": "2부: 일반화 좌표와 자유도",
        "part03_Constraints_nonholonomic_rolling_setup": "3부: 비홀로노믹 굴림의 설정",
        "part04_Constraints_disk_rolling_constraint_equations": "4부: 원판 굴림의 구속 방정식",
        "part05_Constraints_constraint_forces_and_scope": "5부: 구속력과 적용 범위",
    },
    "GM_1.4": {
        "part01_DAlemberts_Principle_and_Lagranges_Equations_virtual_displacements_and_virtual_work": "1부: 가상변위와 가상일",
        "part02_DAlemberts_Principle_and_Lagranges_Equations_dalemberts_principle_and_generalized_forces": "2부: 달랑베르의 원리와 일반화 힘",
        "part03_DAlemberts_Principle_and_Lagranges_Equations_kinetic_energy_form_of_lagranges_equations": "3부: 라그랑주 방정식의 운동에너지 형태",
        "part04_DAlemberts_Principle_and_Lagranges_Equations_potential_forces_and_lagrangian": "4부: 퍼텐셜 힘과 라그랑지언",
    },
    "GM_1.5": {
        "part01_Velocity-Dependent_Potentials_and_the_Dissipation_Function_velocity_dependent_potentials_and_lorentz_force": "1부: 속도 의존 퍼텐셜과 로런츠 힘",
        "part02_Velocity-Dependent_Potentials_and_the_Dissipation_Function_nonpotential_forces_and_rayleigh_dissipation": "2부: 비퍼텐셜 힘과 레일리 흩어지기 함수",
    },
    "GM_1.6": {
        "part01_Simple_Applications_of_the_Lagrangian_Formulation_setup_and_kinetic_energy_form": "1부: 설정과 운동에너지 형태",
        "part02_Simple_Applications_of_the_Lagrangian_Formulation_cartesian_and_plane_polar_coordinates": "2부: 직교좌표와 평면 극좌표",
        "part03_Simple_Applications_of_the_Lagrangian_Formulation_atwoods_machine_and_rotating_wire": "3부: 애트우드 기계와 회전하는 철사",
    },
    "GM_1.7": {
        "part01_Derivations_derivations_1_to_5": "1부: 유도 문제 1-5",
        "part02_Derivations_derivations_6_to_10": "2부: 유도 문제 6-10",
    },
    "GM_1.8": {
        "part01_Exercises_exercises_11_to_17": "1부: 연습문제 11-17",
        "part02_Exercises_exercises_18_to_21": "2부: 연습문제 18-21",
        "part03_Exercises_exercises_22_to_24": "3부: 연습문제 22-24",
    },
    "GM_2.0": {
        "part01_Variational_Principles_and_Lagranges_Equations_chapter_opener": "1부: 장 개요",
    },
    "GM_2.1": {
        "part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space": "1부: 해밀턴 원리와 배치 공간",
        "part02_Hamiltons_Principle_stationary_action_and_lagrange_equations": "2부: 정지 작용과 라그랑주 방정식",
    },
    "GM_2.2": {
        "part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths": "1부: 변분 문제와 매개변수화된 경로",
        "part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation": "2부: 기본 보조정리와 델타 표기",
        "part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples": "3부: 최단 경로와 최소 곡면 예시",
        "part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem": "4부: 최속강하선 문제",
    },
    "GM_2.3": {
        "part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle": "1부: 오일러-라그랑주 방정식과 해밀턴 원리",
    },
    "GM_2.4": {
        "part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers": "1부: 홀로노믹 구속조건과 라그랑주 승수",
        "part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup": "2부: 반구 예제와 세미홀로노믹 설정",
        "part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition": "3부: 구속력과 무일 조건",
        "part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example": "4부: 굴러가는 고리 예제",
    },
    "GM_2.5": {
        "part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy": "1부: 장점과 RL 항력 유비",
        "part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies": "2부: LC 및 결합 회로 유비",
        "part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization": "3부: 구조적 유비와 양자화",
    },
    "GM_2.6": {
        "part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates": "1부: 일반화 운동량과 순환 좌표",
        "part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope": "2부: 정준 운동량과 보존 범위",
        "part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum": "3부: 병진 대칭과 선운동량",
        "part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples": "4부: 회전 대칭과 보존 예제",
    },
    "GM_2.7": {
        "part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation": "1부: 에너지 함수의 유도",
        "part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions": "2부: 총에너지로서의 h 조건",
        "part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation": "3부: 보존의 구분과 흩어지기",
    },
    "GM_2.8": {
        "part01_Derivations_derivations": "1부: 유도 문제",
    },
    "GM_2.9": {
        "part01_Exercises_exercises_5_to_10": "1부: 연습문제 5-10",
        "part02_Exercises_exercises_11_to_16": "2부: 연습문제 11-16",
        "part03_Exercises_exercises_17_to_21": "3부: 연습문제 17-21",
        "part04_Exercises_exercises_22_to_27": "4부: 연습문제 22-27",
    },
}


def find_source_root():
    env_root = os.environ.get("GOLDSTEIN_SOURCE_ROOT")
    candidates = []
    if env_root:
        candidates.append(Path(env_root))
    candidates.extend(
        [
            REPO_ROOT.parent / "Mechanics_Goldstein_Classical",
            REPO_ROOT.parent.parent / "Mechanics_Goldstein_Classical",
            REPO_ROOT.parent / "physics_TTS" / "Mechanics_Goldstein_Classical",
        ]
    )
    for candidate in candidates:
        if (candidate / "TextBook" / "manifest.tsv").exists():
            return candidate
    raise SystemExit(
        "Source root not found. Set GOLDSTEIN_SOURCE_ROOT to Mechanics_Goldstein_Classical."
    )


def read_manifest(source_root: Path):
    manifest_path = source_root / "TextBook" / "manifest.tsv"
    with manifest_path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def entry_kind(path: Path):
    name = path.name
    if "Snack" in name and name.endswith(".md"):
        return "translation"
    if name.endswith("_Korean_Translation.md"):
        return "translation"
    if name.endswith("_KR_TTS.md"):
        return "tts"
    return None


def entry_content_stem(path: Path):
    stem = path.stem
    stem = stem.removesuffix("_Korean_Translation")
    stem = stem.removesuffix("_KR_TTS")
    return stem


def find_entry_image(path: Path):
    image_stem = f"{entry_content_stem(path)}_infographic"
    candidates = [
        candidate
        for candidate in path.parent.glob(f"{image_stem}.*")
        if candidate.is_file() and candidate.suffix.lower() in IMAGE_EXTENSIONS
    ]
    return sorted(candidates, key=lambda item: item.name.lower())[0] if candidates else None


def copy_entry_image(image_path: Path, source_root: Path):
    source_relative_path = image_path.relative_to(source_root)
    asset_relative_path = Path("assets") / "infographics" / image_path.name
    output_path = REPO_ROOT / asset_relative_path

    output_path.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(image_path, output_path)

    return {
        "src": asset_relative_path.as_posix(),
        "alt": image_path.stem.replace("_", " "),
        "sourcePath": source_relative_path.as_posix(),
    }


def is_local_asset_url(url: str):
    parsed = urlsplit(url)
    return not parsed.scheme and not parsed.netloc and parsed.path and not parsed.path.startswith("/")


def copy_inline_asset(url: str, md_path: Path, source_root: Path):
    if not is_local_asset_url(url):
        return url

    parsed = urlsplit(url)
    decoded_path = unquote(unescape(parsed.path))
    source_path = (md_path.parent / decoded_path).resolve()
    source_root_resolved = source_root.resolve()

    try:
        source_relative_path = source_path.relative_to(source_root_resolved)
    except ValueError:
        return url

    if not source_path.is_file() or source_path.suffix.lower() not in IMAGE_EXTENSIONS:
        return url

    asset_relative_path = Path("assets") / "figures" / source_relative_path
    output_path = REPO_ROOT / asset_relative_path
    output_path.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_path, output_path)

    rewritten = asset_relative_path.as_posix()
    if parsed.query or parsed.fragment:
        rewritten = urlunsplit(("", "", rewritten, parsed.query, parsed.fragment))
    return rewritten


def rewrite_inline_image_urls(content: str, md_path: Path, source_root: Path):
    def replace_markdown_image(match):
        alt, url = match.groups()
        return f"![{alt}]({copy_inline_asset(url.strip(), md_path, source_root)})"

    def replace_html_image_src(match):
        prefix, url, suffix = match.groups()
        return f"{prefix}{copy_inline_asset(url, md_path, source_root)}{suffix}"

    content = re.sub(r"!\[([^\]]*)\]\(([^)\s]+)\)", replace_markdown_image, content)
    content = re.sub(
        r"(<img\b[^>]*?\bsrc=[\"'])([^\"']+)([\"'][^>]*>)",
        replace_html_image_src,
        content,
        flags=re.IGNORECASE,
    )
    return content


def file_label_key(path: Path, section_id: str):
    stem = path.stem
    label = stem
    label = label.replace("_Korean_Translation", "")
    label = label.replace("_KR_TTS", "")
    label = re.sub(rf"^{re.escape(section_id)}_?", "", label)
    return label.strip()


def file_label(path: Path, section_id: str):
    key = file_label_key(path, section_id)
    separate_session = key.endswith("_separate_session")
    base_key = key.removesuffix("_separate_session") if separate_session else key
    label = ENTRY_LABELS_KO.get(section_id, {}).get(base_key)
    if label:
        if separate_session:
            label = f"{label} (별도 세션)"
        return f"{section_id} · {label}"

    fallback = key.replace("_", " ").strip()
    if not fallback:
        fallback = SECTION_TITLES_KO.get(section_id, section_id)
    return f"{section_id} · {fallback}"


def file_version(path: Path):
    name = path.stem
    if "separate_session" in name:
        return "separate session"
    match = re.search(r"_part(\d+)_", name)
    if match:
        return f"part {match.group(1)}"
    return "main"


def section_id_from_dir(section_dir: Path):
    match = re.match(r"^(GM_[12]\.\d+)_", section_dir.name)
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
            image_path = find_entry_image(md_path)
            entries.append(
                {
                    "id": re.sub(r"[^a-zA-Z0-9_-]+", "-", md_path.stem),
                    "kind": kind,
                    "version": file_version(md_path),
                    "label": file_label(md_path, section_id),
                    "fileName": md_path.name,
                    "sourcePath": relative_path,
                    "image": copy_entry_image(image_path, source_root) if image_path else None,
                    "content": rewrite_inline_image_urls(
                        md_path.read_text(encoding="utf-8-sig").strip(),
                        md_path,
                        source_root,
                    ),
                }
            )

        sections.append(
            {
                "id": section_id,
                "title": SECTION_TITLES_KO.get(section_id, row["title"]),
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
        "source": "Mechanics_Goldstein_Classical Chapters 1-2, PDFs excluded",
        "sections": sections,
    }


def main():
    source_root = find_source_root()
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
