window.GOLDSTEIN_SITE_DATA = {
  "generatedAt": "2026-06-23T12:57:51.691896+00:00",
  "source": "Mechanics_Goldstein_Classical Chapters 1-2, PDFs excluded",
  "sections": [
    {
      "id": "GM_1.0",
      "title": "기본 원리의 개관",
      "category": "chapter_opener",
      "startPage": "20",
      "endPage": "20",
      "pageCount": "1",
      "pageLabelStart": "1",
      "pageLabelEnd": "1",
      "note": "boundary page duplicated with next unit",
      "entries": []
    },
    {
      "id": "GM_1.1",
      "title": "입자의 역학",
      "category": "minor_unit",
      "startPage": "20",
      "endPage": "24",
      "pageCount": "5",
      "pageLabelStart": "1",
      "pageLabelEnd": "5",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_1-1_Snack_01_-2-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · Snack 01 선운동량과뉴턴제2법칙",
          "fileName": "GM_1.1_Snack_01_선운동량과뉴턴제2법칙.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_01_선운동량과뉴턴제2법칙.md",
          "image": null,
          "content": "# 1.1 MECHANICS OF A PARTICLE (입자의 역학)\n\n어떤 주어진 원점에서 입자까지의 위치 벡터(radius vector)를 $\\mathbf{r}$, 속도 벡터를 $\\mathbf{v}$라고 하자.\n\n$$\n\\mathbf{v} = \\frac{d\\mathbf{r}}{dt}. \\quad (1.1)\n$$\n\n입자의 선운동량(linear momentum) $\\mathbf{p}$는 입자의 질량과 속도의 곱으로 정의된다.\n\n$$\n\\mathbf{p} = m\\mathbf{v}. \\quad (1.2)\n$$\n\n외부 물체 및 장(field)과의 상호작용의 결과로, 입자는 중력이나 전자기력 등 다양한 종류의 힘을 받을 수 있다. 입자에 작용하는 이러한 힘들의 벡터 합이 총 힘(알짜힘) $\\mathbf{F}$이다. 입자의 역학은 뉴턴의 운동 제2법칙에 포함되어 있으며, 이 법칙은 입자의 운동이 다음과 같은 미분 방정식으로 기술되는 기준계가 존재한다고 서술한다.\n\n$$\n\\mathbf{F} = \\frac{d\\mathbf{p}}{dt} \\equiv \\dot{\\mathbf{p}}, \\quad (1.3)\n$$\n\n또는\n\n$$\n\\mathbf{F} = \\frac{d}{dt}(m\\mathbf{v}). \\quad (1.4)\n$$\n\n대부분의 경우 입자의 질량은 일정하며, 식 (1.4)는 다음과 같이 간단해진다.\n\n$$\n\\mathbf{F} = m \\frac{d\\mathbf{v}}{dt} = m\\mathbf{a}, \\quad (1.5)\n$$\n\n여기서 $\\mathbf{a}$는 다음과 같이 정의된 입자의 가속도 벡터이다.\n\n$$\n\\mathbf{a} = \\frac{d^2\\mathbf{r}}{dt^2}. \\quad (1.6)\n$$\n\n따라서 $\\mathbf{F}$가 고계 미분값에 의존하지 않는다고 가정할 때, 운동 방정식은 2계 미분 방정식이 된다.\n\n식 (1.3)이 성립하는 기준계를 관성계(inertial system) 또는 갈릴레이계(Galilean system)라고 부른다. 고전 역학 내에서도 관성계라는 개념은 다소 이상적인 것이다. 그러나 실제로는 요구되는 성질에 필요한 만큼 충분히 근접한 좌표계를 설정하는 것이 대개 가능하다. 많은 목적에 있어서 지구에 고정된 기준계(\"실험실 좌표계\")는 관성계에 대한 충분한 근사치가 되지만, 일부 천문학적 목적을 위해서는 먼 은하들을 기준으로 관성계(또는 관성 기준계)를 구성해야 할 수도 있다.\n\n역학의 중요한 결론들 중 많은 것들은 보존 정리(conservation theorem)의 형태로 표현될 수 있는데, 이는 어떠한 조건 하에서 다양한 역학적 양들이 시간에 따라 일정하게 유지되는지를 나타낸다. 식 (1.3)은 이들 중 첫 번째인 다음을 즉각적으로 제공한다.\n\n**입자의 선운동량 보존 정리:** 총 힘 $\\mathbf{F}$가 0이면 $\\dot{\\mathbf{p}} = 0$이 되고, 선운동량 $\\mathbf{p}$는 보존된다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_01_선운동량과뉴턴제2법칙.png)"
        },
        {
          "id": "GM_1-1_Snack_02_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · Snack 02 각운동량과토크",
          "fileName": "GM_1.1_Snack_02_각운동량과토크.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_02_각운동량과토크.md",
          "image": null,
          "content": "점 $O$에 대한 입자의 각운동량(angular momentum)은 $\\mathbf{L}$로 표기하며, 다음과 같이 정의된다.\n\n$$\n\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}, \\quad (1.7)\n$$\n\n여기서 $\\mathbf{r}$은 $O$에서 입자까지의 위치 벡터이다. 인자들의 곱셈 순서가 중요하다는 점에 유의하라. 이제 $O$에 대한 힘의 모멘트(moment of force) 또는 토크(torque)를 다음과 같이 정의한다.\n\n$$\n\\mathbf{N} = \\mathbf{r} \\times \\mathbf{F}. \\quad (1.8)\n$$\n\n$\\mathbf{N}$에 대하여 식 (1.3 $\\mathbf{F} = \\frac{d\\mathbf{p}}{dt} \\equiv \\dot{\\mathbf{p}}$)과 유사한 방정식은 식 (1.4 $\\mathbf{F} = \\frac{d}{dt}(m\\mathbf{v})$)에 $\\mathbf{r}$의 외적(cross product)을 취하여 얻을 수 있다.\n\n$$\n\\mathbf{r} \\times \\mathbf{F} = \\mathbf{N} = \\mathbf{r} \\times \\frac{d}{dt}(m\\mathbf{v}). \\quad (1.9)\n$$\n\n벡터 항등식을 사용하면 식 (1.9)를 다른 형태로 쓸 수 있다.\n\n$$\n\\frac{d}{dt}(\\mathbf{r} \\times m\\mathbf{v}) = \\mathbf{v} \\times m\\mathbf{v} + \\mathbf{r} \\times \\frac{d}{dt}(m\\mathbf{v}), \\quad (1.10)\n$$\n\n여기서 우변의 첫 번째 항은 명백히 0이 된다. 이 항등식의 결과로, 식 (1.9)는 다음과 같은 형태를 취한다.\n\n$$\n\\mathbf{N} = \\frac{d}{dt}(\\mathbf{r} \\times m\\mathbf{v}) = \\frac{d\\mathbf{L}}{dt} \\equiv \\dot{\\mathbf{L}}. \\quad (1.11)\n$$\n\n$\\mathbf{N}$과 $\\mathbf{L}$모두 모멘트의 기준이 되는 점$O$에 의존한다는 점에 유의하라.\n\n식 (1.3 $\\mathbf{F} = \\frac{d\\mathbf{p}}{dt} \\equiv \\dot{\\mathbf{p}}$)의 경우와 마찬가지로, 토크 방정식 (1.11) 역시 즉각적인 보존 정리를 내놓는다. 이번에는 다음과 같다.\n\n**입자의 각운동량 보존 정리:** 총 토크 $\\mathbf{N}$이 0이면 $\\dot{\\mathbf{L}} = 0$이 되고, 각운동량 $\\mathbf{L}$은 보존된다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_02_각운동량과토크.png)"
        },
        {
          "id": "GM_1-1_Snack_03_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · Snack 03 일과운동에너지",
          "fileName": "GM_1.1_Snack_03_일과운동에너지.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_03_일과운동에너지.md",
          "image": null,
          "content": "다음으로 점 1에서 점 2로 이동할 때 외부의 힘 $\\mathbf{F}$가 입자에 한 일(work)을 고려해 보자. 정의에 따라 이 일은 다음과 같다.\n\n$$\nW_{12} = \\int_{1}^{2} \\mathbf{F} \\cdot d\\mathbf{s}. \\quad (1.12)\n$$\n\n질량이 일정할 경우(특별히 다르게 명시하지 않는 한 지금부터 그렇다고 가정할 것이다), 식 (1.12)의 적분은 다음과 같이 간단해진다.\n\n$$\n\\int \\mathbf{F} \\cdot d\\mathbf{s} = m \\int \\frac{d\\mathbf{v}}{dt} \\cdot \\mathbf{v} \\, dt = \\frac{m}{2} \\int \\frac{d}{dt}(v^2) \\, dt,\n$$\n\n그리고 따라서\n\n$$\nW_{12} = \\frac{m}{2} (v_2^2 - v_1^2). \\quad (1.13)\n$$\n\n스칼라양 $mv^2/2$은 입자의 운동 에너지(kinetic energy)라고 부르며 $T$로 표기한다. 따라서 한 일은 운동 에너지의 변화량과 같다.\n\n$$\nW_{12} = T_2 - T_1. \\quad (1.14)\n$$\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_03_일과운동에너지.png)"
        },
        {
          "id": "GM_1-1_Snack_04_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · Snack 04 보존력과에너지보존",
          "fileName": "GM_1.1_Snack_04_보존력과에너지보존.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_04_보존력과에너지보존.md",
          "image": null,
          "content": "힘의 장(force field)이 점 1과 2 사이의 물리적으로 가능한 어떠한 경로에 대해서도 한 일 $W_{12}$가 동일하게 나타난다면, 그 힘(그리고 그 계)을 보존적(conservative)이라고 한다. 보존계에 대한 대안적인 설명은 입자가 한 가능한 경로를 통해 점 1에서 점 2로 이동한 다음 다른 경로를 통해 점 1로 되돌아오는 것을 상상함으로써 얻어진다. 특정 경로에 대해 $W_{12}$가 독립적이라는 것은 그러한 폐회로(closed circuit)를 따라 한 일이 0임을 의미한다. 즉:\n\n$$\n\\oint \\mathbf{F} \\cdot d\\mathbf{s} = 0. \\quad (1.15)\n$$\n\n물리적으로 볼 때, 마찰력이나 다른 소산력(dissipation force)이 존재하는 경우 계는 보존계일 수 없음이 분명하다. 왜냐하면 마찰에 의한 $\\mathbf{F} \\cdot d\\mathbf{s}$는 항상 양수이며 적분값이 사라질 수 없기 때문이다.\n\n벡터 해석학의 잘 알려진 정리에 따르면, 일 $W_{12}$가 입자가 취하는 물리적 경로에 무관하기 위한 필요충분조건은 $\\mathbf{F}$가 위치에 대한 어떤 스칼라 함수의 그래디언트(gradient)가 되는 것이다.\n\n$$\n\\mathbf{F} = -\\nabla V(\\mathbf{r}), \\quad (1.16)\n$$\n\n여기서 $V$는 퍼텐셜(potential) 또는 퍼텐셜 에너지(potential energy)라고 부른다. $V$의 존재는 간단한 논증을 통해 직관적으로 추론할 수 있다. 끝점 1과 2 사이의 적분 경로에 대해 $W_{12}$가 독립적이라면, $W_{12}$를 양 끝점의 위치에만 의존하는 어떤 양의 변화로 표현하는 것이 가능해야 한다. 이 양을 $-V$로 지정할 수 있으며, 그러면 미소 경로 길이에 대해 다음과 같은 관계식을 얻는다.\n\n$$\n\\mathbf{F} \\cdot d\\mathbf{s} = -dV\n$$\n\n또는\n\n$$\nF_s = -\\frac{\\partial V}{\\partial s},\n$$\n\n이는 식 (1.16)과 동치이다. 식 (1.16)에서 결과에 영향을 주지 않고 $V$에 공간상 일정한 임의의 양을 더할 수 있다는 점에 유의하라. 따라서 $V$의 영점(zero level)은 임의적이다.\n\n보존계에서 힘이 한 일은 다음과 같다.\n\n$$\nW_{12} = V_1 - V_2. \\quad (1.17)\n$$\n\n식 (1.17)을 식 (1.14 $W_{12} = T_2 - T_1$)와 결합하면 다음의 결과를 얻는다.\n\n$$\nT_1 + V_1 = T_2 + V_2, \\quad (1.18)\n$$\n\n이는 기호로 다음을 진술하는 것이다.\n\n**입자의 에너지 보존 정리:** 입자에 작용하는 힘이 보존력이면 입자의 총 에너지 $T + V$는 보존된다.\n\n입자에 가해지는 힘이 어떤 상황에서는 입자의 위치와 시간에 모두 명시적으로 의존하는 스칼라 함수의 그래디언트로 주어질 수도 있다. 그러나, 입자가 거리 $ds$를 이동할 때 입자에 한 일은\n\n$$\n\\mathbf{F} \\cdot d\\mathbf{s} = -\\frac{\\partial V}{\\partial s} ds,\n$$\n\n가 되며, 이는 더 이상 변위 동안의 $-V$의 전체 변화량이 되지 않는데, 왜냐하면 입자가 움직임에 따라 $V$역시 시간에 대해 명시적으로 변하기 때문이다. 따라서, 입자가 점 1에서 점 2로 이동할 때 한 일은 더 이상 그 점들 사이의 함수$V$의 차이가 아니다. 총 에너지 $T + V$를 여전히 정의할 수는 있겠지만, 그것은 입자의 운동 과정 동안 보존되지 않는다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_04_보존력과에너지보존.png)"
        },
        {
          "id": "GM_1-7_Problem_01_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · 참고 문항 · 1.7 Problem 01",
          "fileName": "GM_1.7_Problem_01_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/Reference_Exercises/GM_1.7_Problem_01_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 01**\n\n1. 질량이 일정한 단일 입자의 경우 운동 방정식이 운동 에너지에 대한 다음 미분 방정식을 내포함을 보이시오.\n\n$$\n\\frac{dT}{dt} = \\mathbf{F} \\cdot \\mathbf{v},\n$$\n\n반면 질량이 시간에 따라 변하는 경우 해당하는 방정식은 다음과 같음을 보이시오.\n\n$$\n\\frac{d(mT)}{dt} = \\mathbf{F} \\cdot \\mathbf{p}.\n$$"
        },
        {
          "id": "GM_1-7_Problem_02_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · 참고 문항 · 1.7 Problem 02",
          "fileName": "GM_1.7_Problem_02_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/Reference_Exercises/GM_1.7_Problem_02_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 02**\n\n2. 임의의 원점에서 질량 중심까지의 위치 벡터의 크기 $R$이 다음 방정식으로 주어짐을 증명하시오.\n\n$$\nM^2 R^2 = M \\sum_i m_i r_i^2 - \\frac{1}{2} \\sum_{i \\neq j} m_i m_j r_{ij}^2.\n$$"
        },
        {
          "id": "GM_1-8_Problem_11_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.1 · 참고 문항 · 1.8 Problem 11",
          "fileName": "GM_1.8_Problem_11_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/Reference_Exercises/GM_1.8_Problem_11_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 11**\n\n**11.** 힘 $\\mathbf{F} = yz\\mathbf{\\hat{i}} + zx\\mathbf{\\hat{j}} + xy\\mathbf{\\hat{k}}$가 보존력인지 아닌지 확인하라."
        }
      ]
    },
    {
      "id": "GM_1.2",
      "title": "입자계의 역학",
      "category": "minor_unit",
      "startPage": "24",
      "endPage": "31",
      "pageCount": "8",
      "pageLabelStart": "5",
      "pageLabelEnd": "12",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_1-2_Snack_01_-2-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · Snack 01 뉴턴제2법칙과질량중심",
          "fileName": "GM_1.2_Snack_01_뉴턴제2법칙과질량중심.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_01_뉴턴제2법칙과질량중심.md",
          "image": null,
          "content": "# 1.2 입자계의 역학\n\n이전 절의 아이디어를 많은 입자로 이루어진 계로 일반화할 때, 우리는 계 외부의 원인에 의해 입자에 작용하는 외력(external forces)과 계 내의 다른 모든 입자들에 의해 어떤 입자 $i$에 작용하는 내력(internal forces)을 구별해야 한다. 따라서, $i$번째 입자에 대한 운동 방정식(뉴턴의 제2법칙)은 다음과 같이 쓰인다.\n\n$$\n\\sum_j \\mathbf{F}_{ji} + \\mathbf{F}_i^{(e)} = \\dot{\\mathbf{p}}_i, \\quad (1.19)\n$$\n\n여기서 $\\mathbf{F}_i^{(e)}$는 외력을 나타내며, $\\mathbf{F}_{ji}$는 $j$번째 입자로 인해 $i$번째 입자에 작용하는 내력이다(당연히 $\\mathbf{F}_{ii}$는 0이다). 우리는 ( $\\mathbf{F}_i^{(e)}$와 마찬가지로) $\\mathbf{F}_{ij}$가 원래 형태의 뉴턴 제3법칙을 따른다고 가정할 것이다. 즉, 두 입자가 서로에게 작용하는 힘은 크기가 같고 방향이 반대이다. (모든 종류의 힘에 대해 성립하지는 않는) 이 가정은 종종 작용과 반작용의 약한 법칙(weak law of action and reaction)이라고 불린다.\n\n모든 입자에 대해 합을 구하면, 식 (1.19)는 다음과 같은 형태를 취한다.\n\n$$\n\\frac{d^2}{dt^2} \\sum_i m_i \\mathbf{r}_i = \\sum_i \\mathbf{F}_i^{(e)} + \\sum_{\\substack{i,j \\\\ i \\neq j}} \\mathbf{F}_{ji}. \\quad (1.20)\n$$\n\n우변의 첫 번째 합은 단순히 전체 외력 $\\mathbf{F}^{(e)}$이며, 두 번째 항은 작용과 반작용의 법칙에 따라 각각의 쌍 $\\mathbf{F}_{ij} + \\mathbf{F}_{ji}$가 0이 되므로 사라진다. 좌변을 간단히 하기 위해, 입자들의 질량에 비례하여 가중치를 둔 위치 벡터(radii vectors)의 평균으로 벡터 $\\mathbf{R}$을 정의한다.\n\n$$\n\\mathbf{R} = \\frac{\\sum m_i \\mathbf{r}_i}{\\sum m_i} = \\frac{\\sum m_i \\mathbf{r}_i}{M}. \\quad (1.21)\n$$\n\n벡터 $\\mathbf{R}$은 계의 질량 중심(center of mass), 혹은 더 넓은 의미로 무게 중심(center of gravity)으로 알려진 점을 정의한다(그림 1.1 참조). 이 정의를 사용하면 (1.20)은 다음과 같이 줄어든다.\n\n$$\nM \\frac{d^2\\mathbf{R}}{dt^2} = \\sum_i \\mathbf{F}_i^{(e)} \\equiv \\mathbf{F}^{(e)}, \\quad (1.22)\n$$\n\n이는 질량 중심이 마치 전체 외력이 질량 중심에 집중된 계의 전체 질량에 작용하는 것처럼 움직인다는 것을 나타낸다. 순수한 내력은 그것이 뉴턴의 제3법칙을 따른다면, 질량 중심의 운동에 아무런 영향을 미치지 않는다. 자주 인용되는 예로 폭발하는 포탄의 운동이 있다. 파편들의 질량 중심은 (공기 저항을 무시할 때) 포탄이 여전히 하나의 조각인 것처럼 이동한다. 제트 및 로켓 추진에도 같은 원리가 적용된다. 질량 중심의 운동이 영향을 받지 않도록 하려면, 고속으로 배출되는 배기가스는 비행체의 더 느린 전진 운동으로 상쇄되어야 한다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_01_뉴턴제2법칙과질량중심.png)"
        },
        {
          "id": "GM_1-2_Snack_02_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · Snack 02 선운동량과각운동량보존",
          "fileName": "GM_1.2_Snack_02_선운동량과각운동량보존.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_02_선운동량과각운동량보존.md",
          "image": null,
          "content": "앞서 정의한 질량 중심 벡터 $\\mathbf{R}$에 의해 계의 전체 선운동량은 다음과 같이 쓸 수 있다.\n\n$$\n\\mathbf{P} = \\sum m_i \\frac{d\\mathbf{r}_i}{dt} = M \\frac{d\\mathbf{R}}{dt}, \\quad (1.23)\n$$\n\n즉, 계의 전체 질량에 질량 중심의 속도를 곱한 것이다. 결과적으로, 질량 중심에 대한 운동 방정식은 다음과 같이 다시 쓰일 수 있다.\n\n입자계의 선운동량 보존 정리: 전체 외력이 0이면, 전체 선운동량은 보존된다.\n\n외적 $\\mathbf{r}_i \\times \\mathbf{p}_i$를 취하고 $i$에 대해 합산함으로써 계의 전체 각운동량을 얻는다. 식 (1.19 $\\sum_j \\mathbf{F}_{ji} + \\mathbf{F}_i^{(e)} = \\dot{\\mathbf{p}}_i$)에서 이 연산을 수행하면 항등식의 도움으로 다음 결과를 얻는다.\n\n$$\n\\sum_i (\\mathbf{r}_i \\times \\dot{\\mathbf{p}}_i) = \\sum_i \\frac{d}{dt} (\\mathbf{r}_i \\times \\mathbf{p}_i) = \\dot{\\mathbf{L}} = \\sum_i \\mathbf{r}_i \\times \\mathbf{F}_i^{(e)} + \\sum_{\\substack{i,j \\\\ i \\neq j}} \\mathbf{r}_i \\times \\mathbf{F}_{ji}. \\quad (1.24)\n$$\n\n식 (1.24) 우변의 마지막 항은 다음과 같은 형태의 쌍의 합으로 생각할 수 있다.\n\n$$\n\\mathbf{r}_i \\times \\mathbf{F}_{ji} + \\mathbf{r}_j \\times \\mathbf{F}_{ij} = (\\mathbf{r}_i - \\mathbf{r}_j) \\times \\mathbf{F}_{ji}, \\quad (1.25)\n$$\n\n여기서 작용과 반작용의 동등성이 사용되었다. 그러나 $\\mathbf{r}_i - \\mathbf{r}_j$는 $j$에서 $i$로 향하는 벡터 $\\mathbf{r}_{ij}$와 동일하므로, 식 (1.25)의 우변은 $\\mathbf{r}_{ij} \\times \\mathbf{F}_{ji}$ 와 같이 쓸 수 있다.\n\n두 입자 사이의 내력이 크기가 같고 반대 방향일 뿐만 아니라, 입자들을 잇는 선분을 따라 놓여 있다면—작용과 반작용의 강한 법칙(strong law of action and reaction)으로 알려진 조건—이러한 외적은 모두 0이 되어 사라진다. 이 가정 하에서는 쌍에 대한 합이 0이 되며, 식 (1.24)는 다음과 같은 형태로 쓰일 수 있다.\n\n$$\n\\frac{d\\mathbf{L}}{dt} = \\mathbf{N}^{(e)}. \\quad (1.26)\n$$\n\n따라서 전체 각운동량의 시간 미분은 주어진 점에 대한 외력의 모멘트와 같다. 식 (1.26)에 대응하는 것은 다음과 같다.\n\n전체 각운동량 보존 정리: 가해진(외부) 토크가 0이면 $\\mathbf{L}$은 시간에 대해 일정하다.\n\n가해진 힘이 없을 때의 선운동량 보존은 내력에 대해 작용과 반작용의 약한 법칙이 유효하다고 가정한다는 것에 유의하라. 가해진 토크가 없을 때 계의 전체 각운동량 보존은 작용과 반작용의 강한 법칙의 유효성을 요구한다. 즉, 내력이 추가로 중심력(central force)이어야 한다는 것이다. 비오-사바르 법칙(Biot-Savart law)에 의해 예측되는 움직이는 전하 사이의 힘은 실제로 작용과 반작용의 법칙의 두 가지 형태를 모두 위반할 수 있다. 이런 경우 기계적 선운동량과 각운동량 보존 정리들은 적용할 수 없으며, 장(field)의 전자기적 운동량을 더한 일반화된 보존을 고려해야 한다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_02_선운동량과각운동량보존.png)"
        },
        {
          "id": "GM_1-2_Snack_03_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · Snack 03 질량중심에대한각운동량",
          "fileName": "GM_1.2_Snack_03_질량중심에대한각운동량.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_03_질량중심에대한각운동량.md",
          "image": null,
          "content": "식 (1.23 $\\mathbf{P} = \\sum m_i \\frac{d\\mathbf{r}_i}{dt} = M \\frac{d\\mathbf{R}}{dt}$)은 계의 전체 선운동량이 마치 전체 질량이 질량 중심에 집중되어 질량 중심과 함께 움직이는 것과 같음을 나타낸다. 각운동량에 대한 유사한 정리는 이보다 더 복잡하다. 원점 $O$를 기준점으로 할 때, 계의 전체 각운동량은\n\n$$\n\\mathbf{L} = \\sum_i \\mathbf{r}_i \\times \\mathbf{p}_i.\n$$\n\n$\\mathbf{R}$을 원점 $O$에서 질량 중심으로 향하는 위치 벡터로, $\\mathbf{r}'_i$를 질량 중심에서 $i$번째 입자로 향하는 위치 벡터로 두자. 그러면 다음을 얻는다(그림 1.3 참조).\n\n$$\n\\mathbf{r}_i = \\mathbf{r}'_i + \\mathbf{R} \\quad (1.27)\n$$\n\n그리고\n\n$$\n\\mathbf{v}_i = \\mathbf{v}'_i + \\mathbf{v}\n$$\n\n여기서\n\n$$\n\\mathbf{v} = \\frac{d\\mathbf{R}}{dt}\n$$\n\n는 $O$에 대한 질량 중심의 속도이며,\n\n$$\n\\mathbf{v}'_i = \\frac{d\\mathbf{r}'_i}{dt}\n$$\n\n는 계의 질량 중심에 대한 $i$번째 입자의 속도이다. 식 (1.27)을 사용하면, 전체 각운동량은 다음과 같은 형태를 띤다.\n\n$$\n\\mathbf{L} = \\sum_i \\mathbf{R} \\times m_i \\mathbf{v} + \\sum_i \\mathbf{r}'_i \\times m_i \\mathbf{v}'_i + \\left( \\sum_i m_i \\mathbf{r}'_i \\right) \\times \\mathbf{v} + \\mathbf{R} \\times \\frac{d}{dt} \\sum_i m_i \\mathbf{r}'_i.\n$$\n\n이 식에서 마지막 두 항은 사라지는데, 둘 다 $\\sum m_i \\mathbf{r}'_i$라는 인수를 포함하기 때문이다. 이 인수는 알 수 있듯이 기원이 바로 질량 중심인 좌표계 내에서 질량 중심의 위치 벡터를 정의하므로 0벡터(null vector)이다. 남은 항들을 다시 쓰면, $O$에 대한 전체 각운동량은\n\n$$\n\\mathbf{L} = \\mathbf{R} \\times M\\mathbf{v} + \\sum_i \\mathbf{r}'_i \\times \\mathbf{p}'_i. \\quad (1.28)\n$$\n\n말로 표현하자면, 식 (1.28)은 점 $O$에 대한 전체 각운동량이 질량 중심에 집중된 운동의 각운동량에, 질량 중심에 대한 운동의 각운동량을 더한 것과 같다는 것을 말해준다. 식 (1.28)의 형태는 일반적으로 $\\mathbf{L}$이 벡터 $\\mathbf{R}$을 통해 원점 $O$에 의존한다는 것을 강조한다. 질량 중심이 $O$에 대해 정지해 있을 때만 각운동량이 기준점과 무관하게 된다. 이 경우 (1.28)의 첫 번째 항은 사라지고, $\\mathbf{L}$은 항상 질량 중심에 대해 취해진 각운동량으로 축소된다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_03_질량중심에대한각운동량.png)"
        },
        {
          "id": "GM_1-2_Snack_04_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · Snack 04 계의운동에너지",
          "fileName": "GM_1.2_Snack_04_계의운동에너지.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_04_계의운동에너지.md",
          "image": null,
          "content": "마지막으로 에너지 방정식을 고려해 보자. 단일 입자의 경우에서와 마찬가지로, 계를 초기 배열 1에서 최종 배열 2로 이동시키는 데 모든 힘이 한 일(work)을 계산한다.\n\n$$\nW_{12} = \\sum_i \\int_1^2 \\mathbf{F}_i \\cdot d\\mathbf{s}_i = \\sum_i \\int_1^2 \\mathbf{F}_i^{(e)} \\cdot d\\mathbf{s}_i + \\sum_{\\substack{i,j \\\\ i \\neq j}} \\int_1^2 \\mathbf{F}_{ji} \\cdot d\\mathbf{s}_i. \\quad (1.29)\n$$\n\n마찬가지로 운동 방정식을 사용하여 적분을 다음과 같이 간단히 할 수 있다.\n\n$$\n\\sum_i \\int_1^2 \\mathbf{F}_i \\cdot d\\mathbf{s}_i = \\sum_i \\int_1^2 m_i \\dot{\\mathbf{v}}_i \\cdot \\mathbf{v}_i \\, dt = \\sum_i \\int_1^2 d\\left(\\frac{1}{2}m_i v_i^2\\right).\n$$\n\n따라서 행해진 일은 여전히 최종 운동 에너지와 초기 운동 에너지의 차이로 쓸 수 있다.\n\n$$\nW_{12} = T_2 - T_1,\n$$\n\n여기서 계의 전체 운동 에너지 $T$는\n\n$$\nT = \\frac{1}{2} \\sum_i m_i v_i^2. \\quad (1.30)\n$$\n\n식 (1.27 $\\mathbf{r}_i = \\mathbf{r}'_i + \\mathbf{R}$)에 주어진 질량 중심 좌표계로의 변환을 이용하면, $T$를 다음과 같이 쓸 수도 있다.\n\n$$\nT = \\frac{1}{2} \\sum_i m_i (\\mathbf{v} + \\mathbf{v}'_i) \\cdot (\\mathbf{v} + \\mathbf{v}'_i)\n$$\n\n$$\n= \\frac{1}{2} \\sum_i m_i v^2 + \\frac{1}{2} \\sum_i m_i {v'_i}^2 + \\mathbf{v} \\cdot \\frac{d}{dt} \\left( \\sum_i m_i \\mathbf{r}'_i \\right),\n$$\n\n그리고 각운동량을 계산할 때 이미 사용했던 논리에 의해 $\\sum m_i \\mathbf{r}'_i = 0$ 이 되어 마지막 항은 사라지며 다음이 남는다.\n\n$$\nT = \\frac{1}{2} Mv^2 + \\frac{1}{2} \\sum_i m_i {v'_i}^2 \\quad (1.31)\n$$\n\n따라서 각운동량과 마찬가지로 운동 에너지 역시 두 부분으로 구성된다. 모든 질량이 질량 중심에 집중되어 있을 때 얻어지는 운동 에너지에, 질량 중심에 대한 운동의 운동 에너지를 더한 것이다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_04_계의운동에너지.png)"
        },
        {
          "id": "GM_1-2_Snack_05_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · Snack 05 내력의퍼텐셜에너지",
          "fileName": "GM_1.2_Snack_05_내력의퍼텐셜에너지.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_05_내력의퍼텐셜에너지.md",
          "image": null,
          "content": "이제 식 (1.29 $W_{12} = \\sum_i \\int_1^2 \\mathbf{F}_i \\cdot d\\mathbf{s}_i = \\sum_i \\int_1^2 \\mathbf{F}_i^{(e)} \\cdot d\\mathbf{s}_i + \\sum_{\\substack{i,j \\\\ i \\neq j}} \\int_1^2 \\mathbf{F}_{ji} \\cdot d\\mathbf{s}_i$)의 우변을 살펴보자. 외력을 어떤 퍼텐셜의 그래디언트(gradient)로 도출할 수 있는 특수한 경우에, 첫 번째 항은 다음과 같이 쓸 수 있다.\n\n$$\n\\sum_i \\int_1^2 \\mathbf{F}_i^{(e)} \\cdot d\\mathbf{s}_i = - \\sum_i \\int_1^2 \\nabla_i V_i \\cdot d\\mathbf{s}_i = - \\sum_i \\left. V_i \\right|_1^2,\n$$\n\n여기서 델 연산자(del operator)의 아래첨자 $i$는 미분이 $\\mathbf{r}_i$의 성분들에 대한 것임을 나타낸다. 만약 내력도 보존력이라면, $i$번째와 $j$번째 입자 사이의 상호 작용력 $\\mathbf{F}_{ij}$와 $\\mathbf{F}_{ji}$는 퍼텐셜 함수 $V_{ij}$로부터 얻어질 수 있다. 작용과 반작용의 강한 법칙을 만족시키기 위해, $V_{ij}$는 입자들 사이의 거리에 대한 함수일 수밖에 없다.\n\n$$\nV_{ij} = V_{ij}(|\\mathbf{r}_i - \\mathbf{r}_j|). \\quad (1.32)\n$$\n\n그러면 두 힘은 자동적으로 크기가 같고 반대 방향이 된다.\n\n$$\n\\mathbf{F}_{ji} = -\\nabla_i V_{ij} = +\\nabla_j V_{ij} = -\\mathbf{F}_{ij}, \\quad (1.33)\n$$\n\n또한 두 입자를 잇는 선을 따라 놓이게 된다.\n\n$$\n\\nabla V_{ij}(|\\mathbf{r}_i - \\mathbf{r}_j|) = (\\mathbf{r}_i - \\mathbf{r}_j)f, \\quad (1.34)\n$$\n\n여기서 $f$는 어떤 스칼라 함수이다. 만약 $V_{ij}$가 속도나 (현대 물리학의 영역으로 넘어가서) 고유한 \"스핀(spin)\" 각운동량과 같이 입자들과 연관된 어떤 다른 벡터 쌍의 차이의 함수이기도 하다면, 힘은 여전히 크기가 같고 방향이 반대이겠지만 반드시 입자 사이의 방향을 따라 놓이지는 않을 것이다.\n\n모든 힘이 보존력일 때, 식 (1.29 $W_{12} = \\sum_i \\int_1^2 \\mathbf{F}_i \\cdot d\\mathbf{s}_i = \\sum_i \\int_1^2 \\mathbf{F}_i^{(e)} \\cdot d\\mathbf{s}_i + \\sum_{\\substack{i,j \\\\ i \\neq j}} \\int_1^2 \\mathbf{F}_{ji} \\cdot d\\mathbf{s}_i$)의 두 번째 항은 입자 쌍에 대한 합으로 다시 쓸 수 있으며, 각 쌍에 대한 항은 다음과 같은 형태가 된다.\n\n$$\n- \\int_1^2 (\\nabla_i V_{ij} \\cdot d\\mathbf{s}_i + \\nabla_j V_{ij} \\cdot d\\mathbf{s}_j).\n$$\n\n차이 벡터 $\\mathbf{r}_i - \\mathbf{r}_j$를 $\\mathbf{r}_{ij}$로 나타내고, $\\nabla_{ij}$가 $\\mathbf{r}_{ij}$에 대한 그래디언트를 의미한다면, 다음이 성립한다.\n\n$$\n\\nabla_i V_{ij} = \\nabla_{ij} V_{ij} = -\\nabla_j V_{ij},\n$$\n\n그리고\n\n$$\nd\\mathbf{s}_i - d\\mathbf{s}_j = d\\mathbf{r}_i - d\\mathbf{r}_j = d\\mathbf{r}_{ij},\n$$\n\n따라서 $ij$ 쌍에 대한 항은 다음과 같은 형태가 된다.\n\n$$\n- \\int \\nabla_{ij} V_{ij} \\cdot d\\mathbf{r}_{ij}.\n$$\n\n그러면 내력으로 인해 발생하는 총 일(work)은 다음과 같이 간단해진다.\n\n$$\n-\\frac{1}{2} \\sum_{\\substack{i,j \\\\ i \\neq j}} \\int_1^2 \\nabla_{ij} V_{ij} \\cdot d\\mathbf{r}_{ij} = -\\frac{1}{2} \\sum_{\\substack{i,j \\\\ i \\neq j}} \\left. V_{ij} \\right|_1^2. \\quad (1.35)\n$$\n\n식 (1.35)에서 $\\frac{1}{2}$이라는 계수가 나타나는 이유는, $i$와 $j$모두에 대해 합을 구할 때 주어진 쌍의 각 구성원이 한 번은$i$에 대한 합산에서, 그리고 다음에는 $j$에 대한 합산에서 총 두 번 포함되기 때문이다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_05_내력의퍼텐셜에너지.png)"
        },
        {
          "id": "GM_1-2_Snack_06_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · Snack 06 전체에너지와강체",
          "fileName": "GM_1.2_Snack_06_전체에너지와강체.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_06_전체에너지와강체.md",
          "image": null,
          "content": "이러한 고찰로부터, 외력과 내력이 모두 퍼텐셜로부터 도출될 수 있다면 계의 전체 퍼텐셜 에너지 $V$를 정의하는 것이 가능함이 분명해진다.\n\n$$\nV = \\sum_i V_i + \\frac{1}{2} \\sum_{\\substack{i,j \\\\ i \\neq j}} V_{ij}, \\quad (1.36)\n$$\n\n이 정의를 통해 전체 에너지 $T + V$가 보존되며, 이는 단일 입자에 대한 보존 정리 (1.18 $T_1 + V_1 = T_2 + V_2$)과 유사하다.\n\n식 (1.36)의 우변 두 번째 항은 계의 내부 퍼텐셜 에너지(internal potential energy)라고 불릴 것이다. 일반적으로 이것은 0일 필요가 없으며, 더 중요하게는 계가 시간에 따라 변함에 따라 함께 변할 수 있다. 오직 강체(rigid bodies)로 알려진 특정 부류의 계에 대해서만 내부 퍼텐셜이 항상 일정한 값을 갖는다.\n\n형식적으로, 강체는 거리 $r_{ij}$가 고정되어 시간에 따라 변할 수 없는 입자계로 정의할 수 있다. 그러한 경우에 벡터 $d\\mathbf{r}_{ij}$는 대응하는 $\\mathbf{r}_{ij}$에, 따라서 $\\mathbf{F}_{ij}$에 수직일 수밖에 없다. 그러므로 강체에서 내력은 일을 하지 않으며, 내부 퍼텐셜은 일정하게 유지되어야 한다. 어떤 경우든 전체 퍼텐셜은 더해지는 상수(additive constant)만큼의 불확실성을 가지므로, 변하지 않는 내부 퍼텐셜은 계의 운동을 논할 때 완전히 무시할 수 있다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_06_전체에너지와강체.png)"
        },
        {
          "id": "GM_1-7_Problem_03_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · 참고 문항 · 1.7 Problem 03",
          "fileName": "GM_1.7_Problem_03_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/Reference_Exercises/GM_1.7_Problem_03_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 03**\n\n3. 두 입자로 이루어진 계가 운동 방정식인 식 (1.22)와 (1.26)을 따른다고 가정하자. 개별 입자의 운동 방정식으로부터 입자들 사이의 내력이 작용과 반작용의 약한 법칙과 강한 법칙을 모두 만족함을 보이시오. 이 논증은 임의의 수의 입자를 가진 계로 일반화될 수 있으며, 따라서 식 (1.22)와 (1.26)을 도출했던 논증의 역을 증명할 수 있다."
        },
        {
          "id": "GM_1-8_Problem_13_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · 참고 문항 · 1.8 Problem 13",
          "fileName": "GM_1.8_Problem_13_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/Reference_Exercises/GM_1.8_Problem_13_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 13**\n\n**13.** 로켓은 꼬리에서 배출되는 배기가스의 운동량 반작용에 의해 추진된다. 이 가스들은 로켓에 탑재된 연료의 반응에서 발생하기 때문에, 로켓의 질량은 일정하지 않고 연료가 소비됨에 따라 감소한다. 대기 마찰을 무시할 때, 균일한 중력장 내에서 수직 위로 발사된 로켓의 운동 방정식이 다음과 같음을 보여라.\n\n$$\nm \\frac{dv}{dt} = -v' \\frac{dm}{dt} - mg,\n$$\n\n여기서 $m$은 로켓의 질량이고, $v'$는 로켓에 대한 배기가스의 상대 탈출 속도이다. 시간에 따른 질량 감소율이 일정하다고 가정하고, 이 방정식을 적분하여 $v$를 $m$의 함수로 구하라. 초기 정지 상태에서 출발하는 로켓에 대해 $v'$가 2.1 km/s이고 초당 질량 감소량이 초기 질량의 1/60과 같다고 할 때, 탈출 속도에 도달하기 위해서는 빈 로켓의 무게에 대한 연료 무게의 비가 거의 300이 되어야 함을 보여라!"
        },
        {
          "id": "GM_1-8_Problem_17_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.2 · 참고 문항 · 1.8 Problem 17",
          "fileName": "GM_1.8_Problem_17_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/Reference_Exercises/GM_1.8_Problem_17_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 17**\n\n**17.** 원래 정지해 있던 원자핵이 방사성 붕괴를 하여 1.73 MeV/$c$의 운동량을 가진 전자를 방출하고, 전자의 방향과 직각으로 1.00 MeV/$c$의 운동량을 가진 중성미자를 방출한다. (백만 전자볼트인 MeV는 현대 물리학에서 사용되는 에너지 단위로 $1.60 \\times 10^{-13}$ J과 같다. 이에 상응하여 MeV/$c$는 선운동량의 단위이며 $5.34 \\times 10^{-22}$kg$\\cdot$ m/s와 같다.) 원자핵은 어느 방향으로 반동하는가? 그 운동량은 몇 MeV/$c$인가? 남은 원자핵의 질량이 $3.90 \\times 10^{-25}$ kg이라면, 그 운동 에너지는 몇 전자볼트인가?"
        }
      ]
    },
    {
      "id": "GM_1.3",
      "title": "구속조건",
      "category": "minor_unit",
      "startPage": "31",
      "endPage": "35",
      "pageCount": "5",
      "pageLabelStart": "12",
      "pageLabelEnd": "16",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_1-3_Snack_01_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · Snack 01 구속의개요",
          "fileName": "GM_1.3_Snack_01_구속의개요.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_01_구속의개요.md",
          "image": null,
          "content": "# 1.3 구속 (Constraints)\n\n앞의 섹션들을 통해 고전 역학의 모든 문제들이 다음의 미분 방정식 (1.19 $\\sum_j \\mathbf{F}_{ji} + \\mathbf{F}_i^{(e)} = \\dot{\\mathbf{p}}_i$)의 세트를 푸는 것으로 환원되었다는 인상을 받을 수 있을 것이다.\n\n$$\nm_i \\ddot{\\mathbf{r}}_i = \\mathbf{F}_i^{(e)} + \\sum_j \\mathbf{F}_{ji}\n$$\n\n단지 계의 입자들에 작용하는 다양한 힘들을 대입하고, 수학적인 절차를 돌려 답을 얻어내기만 하면 될 것처럼 보인다! 그러나 순수하게 물리적인 관점에서 보더라도, 이러한 관점은 지나치게 단순화된 것이다. 예를 들어, 계의 운동을 제한하는 구속(constraints)을 고려해야 할 수도 있다. 우리는 이미 구속이 포함된 한 가지 유형의 계, 즉 입자들의 운동에 대한 구속이 거리 $r_{ij}$를 변하지 않게 유지하는 강체(rigid bodies)를 만난 적이 있다. 구속된 계의 다른 예시들도 쉽게 제시될 수 있다. 주판의 알들은 지지하는 철사에 의해 1차원 운동으로 구속되어 있다. 용기 안의 기체 분자들은 용기의 벽에 의해 구속되어 오직 용기 내부에서만 움직인다. 단단한 구의 표면에 놓인 입자는 표면 위에서만, 또는 구의 외부 영역에서만 움직일 수 있다는 구속 조건의 영향을 받는다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_01_구속의개요.png)"
        },
        {
          "id": "GM_1-3_Snack_02_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · Snack 02 홀로노믹과비홀로노믹구속",
          "fileName": "GM_1.3_Snack_02_홀로노믹과비홀로노믹구속.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_02_홀로노믹과비홀로노믹구속.md",
          "image": null,
          "content": "구속은 여러 가지 방법으로 분류될 수 있으며, 여기서는 다음의 체계를 따를 것이다. 만약 구속 조건이 입자들의 좌표(그리고 가능한 경우 시간)를 연결하는 방정식으로 표현될 수 있고 그 형태가 다음과 같다면,\n\n$$\nf(\\mathbf{r}_1, \\mathbf{r}_2, \\mathbf{r}_3, \\dots, t) = 0, \\quad (1.37)\n$$\n\n이러한 구속을 홀로노믹(holonomic)이라고 한다. 홀로노믹 구속의 아마도 가장 간단한 예는 강체일 텐데, 강체에서 구속 조건은 다음과 같은 형태의 방정식으로 표현된다.\n\n$$\n(\\mathbf{r}_i - \\mathbf{r}_j)^2 - c_{ij}^2 = 0\n$$\n\n임의의 곡선이나 주어진 표면을 따라 움직이도록 구속된 입자는 홀로노믹 구속의 또 다른 명백한 예시이며, 이 곡선이나 표면을 정의하는 방정식이 곧 구속 방정식으로 작용한다.\n\n이러한 방식으로 표현할 수 없는 구속을 비홀로노믹(nonholonomic)이라고 한다. 기체 용기의 벽은 비홀로노믹 구속을 구성한다. 구의 표면에 놓인 입자의 예에 관련된 구속 조건 역시 비홀로노믹인데, 이는 부등식\n\n$$\nr^2 - a^2 \\ge 0\n$$\n\n으로 표현될 수 있으며 (여기서 $a$는 구의 반지름), 이 형태는 식 (1.37)의 형태가 아니기 때문이다. 따라서, 중력장 안에서 구의 꼭대기에 놓인 입자는 일정 구간 표면을 따라 미끄러져 내려가겠지만 결국에는 표면에서 떨어져 나가게 된다.\n\n구속은 구속 방정식에 시간이 명시적인 변수로 포함되는지(레오노믹, rheonomous) 혹은 시간에 명시적으로 의존하지 않는지(스클레로노믹, scleronomous)에 따라 더 분류된다. 공간에 고정된 단단한 곡선 철사를 따라 미끄러지는 구슬은 명백하게 스클레로노믹 구속을 받는다. 만약 철사가 정해진 방식으로 움직이고 있다면, 그 구속은 레오노믹이다. 만약 철사가 구슬의 운동에 대한 반작용 등으로 움직인다면, 구속 조건의 시간 의존성은 (이제 계의 좌표 일부가 된) 굽은 철사의 좌표를 통해서만 구속 방정식에 들어가게 됨에 유의하라. 이 경우 전체적인 구속 조건은 스클레로노믹이 된다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_02_홀로노믹과비홀로노믹구속.png)"
        },
        {
          "id": "GM_1-3_Snack_03_-_Part1",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · Snack 03 일반화좌표 Part1",
          "fileName": "GM_1.3_Snack_03_일반화좌표_Part1.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_03_일반화좌표_Part1.md",
          "image": null,
          "content": "구속은 역학 문제의 풀이에 두 가지 유형의 어려움을 도입한다. 첫째, 좌표 $\\mathbf{r}_i$는 구속 방정식에 의해 연결되어 있기 때문에 더 이상 모두 독립적이지 않으며, 따라서 운동 방정식 또한 모두 독립적인 것은 아니다. 둘째, 구속력(forces of constraint), 예를 들어 철사가 구슬에 작용하는 힘(또는 벽이 기체 분자에 작용하는 힘)은 선험적으로(a priori) 주어지지 않는다. 이러한 구속력들은 문제의 미지수들에 포함되며 우리가 찾고자 하는 해로부터 얻어져야 한다. 사실, 계에 구속을 부여한다는 것은 단지 그 문제에 직접적으로 명시될 수 없고 계의 운동에 미치는 효과라는 관점에서만 알려진 힘들이 존재한다고 말하는 또 다른 방법에 불과하다.\n\n홀로노믹 구속의 경우, 첫 번째 어려움은 일반화 좌표(generalized coordinates)를 도입함으로써 해결된다. 지금까지 우리는 암묵적으로 데카르트 좌표계를 기준으로 생각해왔다. 구속이 없는 $N$개의 입자로 이루어진 계는 $3N$개의 독립적인 좌표 혹은 자유도(degrees of freedom)를 가진다. 만약 $f=0$형태의$k$개의 방정식으로 표현되는 홀로노믹 구속 조건이 존재한다면, 이 방정식들을 사용하여 $3N$개의 좌표 중 $k$개를 제거할 수 있으며, 결국 $3N - k$개의 독립적인 좌표만 남게 되고, 이 계는 $3N - k$의 자유도를 가진다고 말한다. 종속된 좌표들을 이렇게 제거하는 방법은 또 다른 방식으로 표현될 수 있는데, 이는 새로운 $3N - k$개의 독립 변수 $q_1, q_2, \\dots, q_{3N-k}$를 도입하여 옛 좌표 $\\mathbf{r}_1, \\mathbf{r}_2, \\dots, \\mathbf{r}_N$를 그 변수들로 표현하는 다음과 같은 형태의 방정식들이다.\n\n$$\n\\mathbf{r}_1 = \\mathbf{r}_1(q_1, q_2, \\dots, q_{3N-k}, t)\n$$\n\n$$\n\\vdots \\quad (1.38)\n$$\n\n$$\n\\mathbf{r}_N = \\mathbf{r}_N(q_1, q_2, \\dots, q_{3N-k}, t)\n$$\n\n이 방정식들은 그 안에 구속 조건을 암묵적으로 포함하고 있다. 이들은 변수들의 집합 ($\\mathbf{r}_l$)에서 변수들의 집합 ($q_l$)로 가는 변환 방정식(transformation equations)이며, 대안적으로 식 (1.38)은 ($\\mathbf{r}_l$) 변수들의 매개변수 표현으로 간주할 수도 있다. 항상 변수들의 집합 ($q_l$)에서 다시 변수들의 집합 ($\\mathbf{r}_l$)로 역변환을 할 수 있다고 가정한다. 즉, 식 (1.38)과 $k$개의 구속 방정식들을 결합하면 이를 역전시켜 임의의 $q_i$를 변수 ($\\mathbf{r}_l$)와 시간의 함수로 얻을 수 있다는 것이다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_03_일반화좌표_Part1.png)"
        },
        {
          "id": "GM_1-3_Snack_03_-_Part2",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · Snack 03 일반화좌표 Part2",
          "fileName": "GM_1.3_Snack_03_일반화좌표_Part2.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_03_일반화좌표_Part2.md",
          "image": null,
          "content": "일반적으로 일반화 좌표 $q_l$은 데카르트 좌표계와 달리 함께 묶여 벡터를 형성할 수 있는 편리한 세 개짜리 그룹으로 나뉘지 않을 것이다. 따라서 구의 표면을 따라 움직이도록 구속된 입자의 경우, 구 위에서의 위치를 나타내는 두 각도, 예를 들어 위도와 경도는 사용할 수 있는 명백한 일반화 좌표이다. 혹은 평면상에서 움직이는 이중 진자(늘어나지 않는 가벼운 막대로 연결된 두 입자이며, 한 입자에 고정된 비슷한 막대에 의해 매달려 있는)의 예에서, 만족스러운 일반화 좌표는 두 각도 $\\theta_1, \\theta_2$가 된다 (그림 1.4 참고). 일반화 좌표는 데카르트 좌표계 이외의 좌표라는 의미에서 구속이 없는 계에서도 종종 유용하게 사용된다. 따라서 외부 중심력장($V = V(r)$) 안에서 움직이는 입자의 문제에서는 포함된 구속이 전혀 없지만 데카르트 좌표계보다 구면 극좌표계를 사용하는 것이 분명히 더 편리하다. 그러나 일반화 좌표를 통상적인 직교 위치 좌표의 개념으로만 생각해서는 안 된다. 모든 종류의 물리량이 일반화 좌표의 역할을 하도록 동원될 수 있다. 따라서 $\\mathbf{r}_j$의 푸리에 전개에서 진폭이 일반화 좌표로 사용될 수도 있고, 에너지나 각운동량의 차원을 갖는 양을 사용하는 것이 편리하다는 사실을 발견할 수도 있다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_03_일반화좌표_Part2.png)"
        },
        {
          "id": "GM_1-3_Snack_04_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · Snack 04 비홀로노믹구속의예",
          "fileName": "GM_1.3_Snack_04_비홀로노믹구속의예.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_04_비홀로노믹구속의예.md",
          "image": null,
          "content": "구속이 비홀로노믹인 경우, 그 구속을 표현하는 방정식들을 종속적인 좌표들을 제거하는 데 사용할 수 없다. 비홀로노믹 구속의 자주 인용되는 예는 미끄러짐 없이 거친 표면 위를 구르는 물체이다. 계를 묘사하는 데 사용되는 좌표들은 일반적으로 물체의 방향을 명시하기 위한 각도 좌표들과, 더불어 표면 위 접촉점의 위치를 묘사하는 한 세트의 좌표들을 포함할 것이다. \"구름(rolling)\"의 구속 조건은 이 두 세트의 좌표들을 서로 연결해주며, 이들은 독립적이지 않다. 접촉점의 위치 변화는 필연적으로 방향의 변화를 의미한다. 그러나 우리는 좌표의 개수를 줄일 수 없는데, 이는 \"구름\" 조건이 좌표들 사이의 대수적 방정식으로 표현될 수 없기 때문이다. 오히려 그것은 속도에 대한 조건(즉, 접촉점이 정지해 있다는 것)이며, 오직 문제가 풀린 뒤에야 적분된 형태로 주어질 수 있는 미분 조건(differential condition)이다.\n\n간단한 예시 하나가 이 점을 설명해줄 것이다. 디스크의 평면이 항상 수직을 유지하도록 구속된 채 수평 $xy$평면 위를 구르는 디스크를 생각해 보자. 운동을 기술하는 데 사용되는 좌표들은 아마도 디스크 중심의 $x, y$좌표, 디스크의 축에 대한 회전각 $\\phi$, 그리고 디스크의 축과 이를테면 $x$축 사이의 각도 $\\theta$일 것이다 (그림 1.5 참고). 구속의 결과로 디스크 중심의 속도 $\\mathbf{v}$의 크기는 $\\dot{\\phi}$에 비례하게 되며,\n\n$$\nv = a\\dot{\\phi}\n$$\n\n여기서 $a$는 디스크의 반지름이고, 속도의 방향은 디스크의 축과 수직을 이룬다.\n\n$$\n\\dot{x} = v \\sin \\theta\n$$\n\n$$\n\\dot{y} = -v \\cos \\theta\n$$\n\n이 조건들을 결합하면 두 개의 미분 구속 방정식을 얻는다.\n\n$$\ndx - a \\sin \\theta \\, d\\phi = 0\n$$\n\n$$\ndy + a \\cos \\theta \\, d\\phi = 0 \\quad (1.39)\n$$\n\n식 (1.39)의 어느 쪽도 실제로 문제를 풀지 않고는 적분될 수 없다. 즉, 두 방정식 중 어느 하나라도 완전 미분(exact differentials)으로 바꾸어 줄 적분 인자(integrating factor) $f(x, y, \\theta, \\phi)$를 찾을 수 없다 (파생 4 참고).* 따라서 구속 조건은 비홀로노믹이다. 물리적인 관점에서도 경로상의 어떤 지점에서든 디스크를 경로에 접하는 임의의 반지름의 원을 따라 구르게 할 수 있음에 유의하면 $\\phi$와 나머지 좌표들 $x, y, \\theta$사이에 어떠한 직접적인 함수 관계도 있을 수 없다는 것을 알 수 있다. 원을 따라 굴러 제자리로 돌아온 과정의 끝에서,$x, y, \\theta$는 원래의 값으로 돌아오지만 $\\phi$는 굴러간 원의 반지름에 의존하는 양만큼 변화해 있기 때문이다.\n\n*원칙적으로 단지 두 개의 좌표만이 포함된 계에서 1계 미분 구속 방정식에 대한 적분 인자는 항상 찾을 수 있으며, 따라서 그러한 구속 조건은 홀로노믹이다. 익숙한 예로 빗면 위를 구르는 원의 2차원 운동이 있다.\n\n식 (1.39) 형태의 적분 불가능한 미분 구속들이 비홀로노믹 구속의 유일한 유형은 물론 아니다. 우리가 이미 보았듯이 구속 조건들은 고계 도함수를 포함할 수도 있고 부등식의 형태로 나타날 수도 있다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_04_비홀로노믹구속의예.png)"
        },
        {
          "id": "GM_1-3_Snack_05_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · Snack 05 구속의처리",
          "fileName": "GM_1.3_Snack_05_구속의처리.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_05_구속의처리.md",
          "image": null,
          "content": "부분적으로는 종속적인 좌표들을 제거할 수 있기 때문에, 홀로노믹 구속들을 포함하는 문제들은 언제나 형식적인 해법으로 다루어질 수 있다. 하지만 비홀로노믹 예제들을 공략할 일반적인 방법은 존재하지 않는다. 물론 구속이 적분 불가능한 경우, 구속의 미분 방정식을 운동의 미분 방정식과 함께 문제 안으로 끌어들여 결과적으로 라그랑주 승수법(method of Lagrange multipliers)을 통해 종속 방정식들을 제거할 수는 있다.\n\n우리는 나중에 이 방법으로 다시 돌아올 것이다. 그러나 더 악랄한 형태의 비홀로노믹 구속 문제들은 개별적으로 대처되어야만 하며, 결과적으로 고전 역학의 형식적인 측면들을 전개할 때는 거의 변함없이, 만일 구속이 존재한다면 그것은 홀로노믹이라고 가정하게 된다. 일상생활에서 접하는 많은 구속들이 비홀로노믹이라는 사실에도 불구하고, 이러한 제약이 역학 이론의 적용 가능성을 크게 제한하지는 않는다. 그 이유는 철사나 표면, 혹은 벽 등의 매개체를 통해 계에 부여되는 구속이라는 전체적인 개념이 특히 거시적이거나 대규모의 문제에서만 적절하기 때문이다. 그러나 오늘날 물리학자들은 원자나 원자핵 문제에 더 큰 관심을 두고 있다. 이러한 미시적인 규모에서는 계의 안팎을 막론하고 모든 대상들이 한결같이 분자, 원자, 혹은 더 작은 입자들로 구성되어 명확한 힘을 가하고 있으며, 구속이라는 개념은 인위적인 것이 되어 거의 나타나지 않는다. 이때 구속 조건은 실제 물리적 상황에 대한 수학적 이상화(mathematical idealizations)로 사용되거나, \"스핀(spin)\"에 대한 강체 회전의 예처럼 양자 역학적 성질에 대한 고전적인 근사로만 쓰이게 된다. 그러한 구속들은 항상 홀로노믹이며, 역학 이론의 체계 안에 매끄럽게 잘 들어맞는다.\n\n두 번째 어려움, 즉 구속력이 선험적으로 알려져 있지 않다는 점을 극복하기 위해, 우리는 구속력이 사라지도록 역학을 공식화하고자 강구한다. 그렇게 되면 우리는 오직 이미 알려진 가해진 힘(applied forces)만을 다루면 된다. 이러한 절차에 대한 힌트는 구속이 있는 특정 계, 즉 강체에서 내부의 힘(여기서는 구속력)이 한 일(work)이 사라진다는 사실로부터 제공된다. 이어지는 섹션들에서 우리는 이러한 단서를 좇아 그 안에 포함된 아이디어들을 일반화할 것이다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/GM_1.3_Snack_05_구속의처리.png)"
        },
        {
          "id": "GM_1-7_Problem_04_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · 참고 문항 · 1.7 Problem 04",
          "fileName": "GM_1.7_Problem_04_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/Reference_Exercises/GM_1.7_Problem_04_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 04**\n\n4. 구르는 원판에 대한 구속 방정식인 식 (1.39)는 다음과 같은 형태의 일반적인 선형 미분 구속 방정식의 특수한 경우이다.\n\n$$\n\\sum_{i=1}^{n} g_i(x_1, \\dots, x_n) dx_i = 0.\n$$\n\n이러한 형태의 구속 조건은 이것을 완전 미분으로 바꾸어주는 적분 함수 $f(x_1, \\dots, x_n)$를 찾을 수 있을 때만 홀로노믹(holonomic)이다. 분명히 이 함수는 모든 $i \\neq j$에 대하여\n\n$$\n\\frac{\\partial (fg_i)}{\\partial x_j} = \\frac{\\partial (fg_j)}{\\partial x_i}\n$$\n\n를 만족해야 한다. 식 (1.39)의 어느 것에 대해서도 이러한 적분 인자를 찾을 수 없음을 보이시오."
        },
        {
          "id": "GM_1-7_Problem_05_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · 참고 문항 · 1.7 Problem 05",
          "fileName": "GM_1.7_Problem_05_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/Reference_Exercises/GM_1.7_Problem_05_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 05**\n\n5. 반지름이 $a$인 두 바퀴가 길이가 $b$인 공통 축의 양 끝에 장착되어 바퀴들이 독립적으로 회전할 수 있다. 이 결합체 전체가 평면 위에서 미끄러지지 않고 구른다. 두 개의 비홀로노믹 구속 방정식,\n\n$$\n\\cos \\theta dx + \\sin \\theta dy = 0\n$$\n\n$$\n\\sin \\theta dx - \\cos \\theta dy = \\frac{1}{2} a \\left( d\\phi + d\\phi' \\right),\n$$\n\n(여기서 $\\theta$, $\\phi$, 그리고 $\\phi'$은 단일 수직 원판 문제에서와 비슷한 의미를 가지며, $(x, y)$는 두 바퀴 사이의 축 중앙에 있는 점의 좌표이다)과 하나의 홀로노믹 구속 방정식,\n\n$$\n\\theta = C - \\frac{a}{b} (\\phi - \\phi'),\n$$\n\n이 존재함을 보이시오. 여기서 $C$는 상수이다."
        },
        {
          "id": "GM_1-7_Problem_06_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.3 · 참고 문항 · 1.7 Problem 06",
          "fileName": "GM_1.7_Problem_06_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.3_Constraints/Reference_Exercises/GM_1.7_Problem_06_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 06**\n\n6. 한 입자가 $xy$평면에서 속도 벡터가 항상$x$축 위의 한 점을 향하도록 하는 구속 조건 하에 운동하고 있으며, 이 점의 가로좌표(abscissa)는 시간에 대한 어떤 주어진 함수 $f(t)$이다. $f(t)$가 미분 가능하지만 그 외에는 임의의 함수일 때, 이 구속이 비홀로노믹임을 보이시오."
        }
      ]
    },
    {
      "id": "GM_1.4",
      "title": "달랑베르의 원리와 라그랑주 방정식",
      "category": "minor_unit",
      "startPage": "35",
      "endPage": "40",
      "pageCount": "6",
      "pageLabelStart": "16",
      "pageLabelEnd": "21",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_1-4_Snack_01_-_Part1",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 01 가상일의원리 Part1",
          "fileName": "GM_1.4_Snack_01_가상일의원리_Part1.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_01_가상일의원리_Part1.md",
          "image": null,
          "content": "# 1.4 달랑베르 원리와 라그랑주 방정식 (D'Alembert's Principle and Lagrange's Equations)\n\n계의 가상적(무한소) 변위란, 주어진 순간 $t$에 계에 가해진 힘과 구속에 모순되지 않도록 좌표를 임의의 무한소만큼 변화시킨 결과($\\delta \\mathbf{r}_i$)로 나타나는 계의 배열(configuration)의 변화를 의미한다. 이 변위는 시간 간격 $dt$ 동안 실제로 일어나는(그 동안 힘과 구속 조건이 변할 수 있는) 계의 실제 변위와 구별하기 위해 가상적(virtual)이라고 부른다. 계가 평형 상태에 있다고 가정하자. 즉, 각 입자에 작용하는 알짜힘이 영($\\mathbf{F}_i = 0$)이다. 그러면 내적 $\\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i$역시 명백히 영이 되는데, 이것은 변위$\\delta \\mathbf{r}_i$동안 힘$\\mathbf{F}_i$가 한 가상일(virtual work)이다. 모든 입자에 대해 이 영이 되는 곱들을 합한 것 역시 영이어야만 한다.\n\n$$\n\\sum_i \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = 0. \\qquad (1.40)\n$$\n\n여기까지는 어떤 새로운 물리적 내용도 언급되지 않았다. $\\mathbf{F}_i$를 가해진 힘(applied force) $\\mathbf{F}_i^{(a)}$와 구속력(force of constraint) $\\mathbf{f}_i$로 분해하자.\n\n$$\n\\mathbf{F}_i = \\mathbf{F}_i^{(a)} + \\mathbf{f}_i, \\qquad (1.41)\n$$\n\n그러면 식 (1.40)은 다음과 같이 된다.\n\n$$\n\\sum_i \\mathbf{F}_i^{(a)} \\cdot \\delta \\mathbf{r}_i + \\sum_i \\mathbf{f}_i \\cdot \\delta \\mathbf{r}_i = 0. \\qquad (1.42)\n$$\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_01_가상일의원리_Part1.png)"
        },
        {
          "id": "GM_1-4_Snack_01_-_Part2",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 01 가상일의원리 Part2",
          "fileName": "GM_1.4_Snack_01_가상일의원리_Part2.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_01_가상일의원리_Part2.md",
          "image": null,
          "content": "이제 우리는 구속력이 한 알짜 가상일이 영이 되는 계로 국한하여 생각하기로 한다. 우리는 이 조건이 강체에 대해 참이며 그 밖의 많은 구속 조건에 대해서도 유효함을 본 바 있다. 예를 들어, 어떤 입자가 표면 위에서만 움직이도록 구속되어 있다면 구속력은 표면에 수직인 반면 가상 변위는 표면에 접해야 하므로 가상일은 영이 된다. 미끄럼 마찰력이 존재하는 경우에는 이것이 더 이상 참이 아니며, 이러한 계는 우리의 공식화에서 제외해야 한다. 마찰은 본질적으로 거시적인 현상이므로, 이러한 제한이 부당하게 방해가 되지는 않는다. 반면에 구름 마찰력은 이 조건을 위배하지 않는데, 그 힘이 순간적으로 정지해 있는 점에 작용하여 구름 구속(rolling constraint)을 만족하는 무한소 변위에서 어떤 일도 할 수 없기 때문이다. 입자가 시간에 따라 움직이는 표면에 구속되어 있는 경우, 구속력은 순간적으로 그 표면에 수직이며 시간 $dt$ 동안의 실제 변위 과정에서 한 일이 반드시 영이 되는 것은 아닐지라도 가상 변위 동안 한 일은 여전히 영이라는 점에 유의하라.\n\n그러므로 가해진 힘이 한 가상일이 영이 된다는 것이 계의 평형 조건이 된다.\n\n$$\n\\sum_i \\mathbf{F}_i^{(a)} \\cdot \\delta \\mathbf{r}_i = 0. \\qquad (1.43)\n$$\n\n식 (1.43)은 종종 가상일의 원리(principle of virtual work)라 불린다. 여기서 $\\delta \\mathbf{r}_i$들이 완전히 독립적인 것이 아니라 구속 조건에 의해 연결되어 있기 때문에, $\\delta \\mathbf{r}_i$의 계수들을 더 이상 0으로 둘 수 없다. 즉, 일반적으로 $\\mathbf{F}_i^{(a)} \\neq 0$이다. 그 계수들을 0으로 두기 위해, 우리는 이 원리를 서로 독립적인 $q_i$의 가상 변위를 포함하는 형태로 변환해야만 한다. 식 (1.43)은 $\\mathbf{f}_i$를 포함하지 않는다는 점에서는 우리의 요구를 충족시키지만, 정역학(statics)만을 다루고 있다. 우리가 원하는 것은 계의 일반적인 운동을 포함하는 조건이다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_01_가상일의원리_Part2.png)"
        },
        {
          "id": "GM_1-4_Snack_02_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 02 달랑베르원리",
          "fileName": "GM_1.4_Snack_02_달랑베르원리.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_02_달랑베르원리.md",
          "image": null,
          "content": "앞서 다룬 가상일의 원리는 정역학만을 다루고 있다. 우리가 원하는 계의 일반적인 운동을 포함하는 원리를 얻기 위해, 제임스 베르누이(James Bernoulli)가 처음 고안하고 달랑베르(D'Alembert)가 발전시킨 방식을 사용한다. 운동 방정식,\n\n$$\n\\mathbf{F}_i = \\dot{\\mathbf{p}}_i,\n$$\n\n는 다음과 같이 쓸 수 있다.\n\n$$\n\\mathbf{F}_i - \\dot{\\mathbf{p}}_i = 0,\n$$\n\n이는 계 안의 입자들이 실제 힘에 \"역유효력(reversed effective force)\"인 $-\\dot{\\mathbf{p}}_i$를 더한 힘 아래에서 평형 상태에 있을 것임을 뜻한다. (1.40 $\\sum_i \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = 0$) 대신에, 즉시 다음과 같이 쓸 수 있다.\n\n$$\n\\sum_i (\\mathbf{F}_i - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0, \\qquad (1.44)\n$$\n\n그리고 앞서와 같이 가해진 힘과 구속력으로 분해하면 다음의 결과를 얻는다.\n\n$$\n\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i + \\sum_i \\mathbf{f}_i \\cdot \\delta \\mathbf{r}_i = 0.\n$$\n\n우리는 구속력이 한 가상일이 영이 되는 계로 다시 국한시켜 다음과 같은 결과를 얻는다.\n\n$$\n\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0, \\qquad (1.45)\n$$\n\n이것을 흔히 달랑베르 원리(D'Alembert's principle)라 부른다. 구속력이 더 이상 나타나지 않는다는 점에서 우리는 목적을 달성하였으며, 이제 첨자 $(a)$는 혼동 없이 생략할 수 있다. 하지만 이것은 아직 계의 운동 방정식을 제공하는 데 유용한 형태는 아니다. 이제 우리는 이 원리를 일반화 좌표의 가상 변위를 포함하는 식으로 변환해야 한다. 일반화 좌표들은 서로 독립적이므로(홀로노믹 구속의 경우), 이를 통해 $\\delta q_i$의 계수들이 각각 0이 되도록 둘 수 있다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_02_달랑베르원리.png)"
        },
        {
          "id": "GM_1-4_Snack_03_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 03 일반화좌표와일반화힘",
          "fileName": "GM_1.4_Snack_03_일반화좌표와일반화힘.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_03_일반화좌표와일반화힘.md",
          "image": null,
          "content": "달랑베르 원리를 운동 방정식으로 유용하게 만들기 위해, 변수들을 직교 좌표 $\\mathbf{r}_i$에서 일반화 좌표 $q_j$로 변환해야 한다. $\\mathbf{r}_i$에서 $q_j$라는 언어로의 변환은 다음과 같은 변환 방정식 (1.38 $\\vdots$)에서 출발한다.\n\n$$\n\\mathbf{r}_i = \\mathbf{r}_i(q_1, q_2, \\ldots, q_n, t) \\qquad (1.45')\n$$\n\n($n$개의 독립적인 좌표를 가정함). 그리고 편미분학의 일반적인 \"연쇄 법칙(chain rules)\"을 통해 변환이 수행된다. 따라서 $\\mathbf{v}_i$는 $\\dot{q}_k$를 사용하여 다음 공식으로 표현된다.\n\n$$\n\\mathbf{v}_i \\equiv \\frac{d\\mathbf{r}_i}{dt} = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k} \\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}. \\qquad (1.46)\n$$\n\n마찬가지로, 임의의 가상 변위 $\\delta \\mathbf{r}_i$는 다음을 통해 가상 변위 $\\delta q_j$와 연결될 수 있다.\n\n$$\n\\delta \\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\delta q_j. \\qquad (1.47)\n$$\n\n가상 변위는 정의에 의해 좌표들의 변위만을 고려하기 때문에 시간의 변화인 $\\delta t$가 여기에 포함되지 않음에 유의하라. (시간에 따라 구속 조건 자체가 변하는 경우, 오직 그래야만 가상 변위가 구속력에 수직이 된다.)\n\n일반화 좌표로 표현하면, $\\mathbf{F}_i$가 한 가상일은 다음과 같이 된다.\n\n$$\n\\sum_i \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = \\sum_{i,j} \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\delta q_j\n$$\n\n$$\n= \\sum_j Q_j \\delta q_j, \\qquad (1.48)\n$$\n\n여기서 $Q_j$는 일반화 힘(generalized force)의 성분이라 불리며, 다음과 같이 정의된다.\n\n$$\nQ_j = \\sum_i \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}. \\qquad (1.49)\n$$\n\n$q$가 길이의 차원을 가질 필요가 없듯이 $Q$또한 힘의 차원을 가질 필요는 없지만, $Q_j \\delta q_j$는 항상 일의 차원을 가져야만 한다는 점에 주목하라. 예를 들어, $Q_j$가 토크 $N_j$이고 $dq_j$가 미소 각도 $d\\theta_j$일 수 있으며, 이 경우 $N_j d\\theta_j$는 미소 일이 된다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_03_일반화좌표와일반화힘.png)"
        },
        {
          "id": "GM_1-4_Snack_04_-_Part1",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 04 운동에너지와운동방정식 Part1",
          "fileName": "GM_1.4_Snack_04_운동에너지와운동방정식_Part1.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part1.md",
          "image": null,
          "content": "이제 일반화 좌표를 사용한 달랑베르 원리의 식 (1.45 $\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0$)에 포함된 다른 항인 $\\sum_i \\dot{\\mathbf{p}}_i \\cdot \\delta \\mathbf{r}_i$로 넘어가 보자. 이 항은 다음과 같이 쓸 수 있다.\n\n$$\n\\sum_i \\dot{\\mathbf{p}}_i \\cdot \\delta \\mathbf{r}_i = \\sum_i m_i \\ddot{\\mathbf{r}}_i \\cdot \\delta \\mathbf{r}_i.\n$$\n\n(1.47 $\\delta \\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\delta q_j$)을 이용하여 $\\delta \\mathbf{r}_i$를 나타내면, 이것은 다음과 같이 된다.\n\n$$\n\\sum_{i,j} m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\delta q_j.\n$$\n\n이제 다음 관계식을 고려하자.\n\n$$\n\\sum_i m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\sum_i \\left[ \\frac{d}{dt} \\left( m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\right) - m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{d}{dt} \\left( \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\right) \\right]. \\qquad (1.50)\n$$\n\n식 (1.50)의 마지막 항에서 $t$에 대한 미분과 $q_j$에 대한 미분 순서를 바꿀 수 있는데, 이는 (1.46 $\\mathbf{v}_i \\equiv \\frac{d\\mathbf{r}_i}{dt} = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k} \\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$)과 유사하게 다음과 같이 전개되기 때문이다.\n\n$$\n\\frac{d}{dt} \\left( \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\right) = \\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial q_j} = \\sum_k \\frac{\\partial^2 \\mathbf{r}_i}{\\partial q_j \\partial q_k} \\dot{q}_k + \\frac{\\partial^2 \\mathbf{r}_i}{\\partial q_j \\partial t},\n$$\n\n$$\n= \\frac{\\partial \\mathbf{v}_i}{\\partial q_j},\n$$\n\n이는 식 (1.46 $\\mathbf{v}_i \\equiv \\frac{d\\mathbf{r}_i}{dt} = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k} \\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$)에 의한 것이다. 나아가 식 (1.46 $\\mathbf{v}_i \\equiv \\frac{d\\mathbf{r}_i}{dt} = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k} \\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$)으로부터 다음 식도 알 수 있다.\n\n$$\n\\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j} = \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}. \\qquad (1.51)\n$$\n\n이러한 변화들을 (1.50)에 대입하면 다음 결과를 얻는다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part1.png)"
        },
        {
          "id": "GM_1-4_Snack_04_-_Part2",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 04 운동에너지와운동방정식 Part2",
          "fileName": "GM_1.4_Snack_04_운동에너지와운동방정식_Part2.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part2.md",
          "image": null,
          "content": "$$\n\\sum_i m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\sum_i \\left[ \\frac{d}{dt} \\left( m_i \\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j} \\right) - m_i \\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial q_j} \\right],\n$$\n\n그리고 달랑베르 원리의 좌변 두 번째 항은 다음과 같이 전개할 수 있다.\n\n$$\n\\sum_j \\left\\{ \\frac{d}{dt} \\left[ \\frac{\\partial}{\\partial \\dot{q}_j} \\left( \\sum_i \\frac{1}{2} m_i v_i^2 \\right) \\right] - \\frac{\\partial}{\\partial q_j} \\left( \\sum_i \\frac{1}{2} m_i v_i^2 \\right) - Q_j \\right\\} \\delta q_j.\n$$\n\n$\\sum_i \\frac{1}{2} m_i v_i^2$를 계의 운동 에너지 $T$와 동일시하면, 달랑베르 원리(식 (1.45 $\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0$) 참조)는 다음과 같이 된다.\n\n$$\n\\sum_j \\left\\{ \\left[ \\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial T}{\\partial q_j} \\right] - Q_j \\right\\} \\delta q_j = 0. \\qquad (1.52)\n$$\n\n데카르트 좌표계에서 $q_j$에 대한 $T$의 편미분은 영이 된다는 점에 유의하라. 따라서 미분 기하학의 언어로 말하자면, 이 항은 좌표 $q_j$의 곡률로부터 비롯된다. 예를 들어 극좌표계에서는, 각 좌표에 대한 $T$의 편미분 부분에 구심 가속도 항이 나타나게 된다.\n\n지금까지 구속 조건의 특성에 대해서는 가상 변위에서 일이 영이 되어야 한다는 점 외에 어떠한 제한도 두지 않았다. 변수 $q_j$는 계의 운동을 기술하는 데 사용되는 어떠한 좌표들의 집합이라도 될 수 있다. 그러나 만약 구속 조건이 홀로노믹하다면, 변환 방정식 (1.38 $\\vdots$) 내에 암묵적으로 구속 조건을 포함하는 독립적인 좌표 $q_j$의 집합을 찾는 것이 가능하다. 그러면 임의의 가상 변위 $\\delta q_j$는 $\\delta q_k$와 서로 독립적이 되며, 따라서 (1.52)가 성립하기 위한 유일한 방법은 각각의 계수들이 영이 되는 것뿐이다.\n\n$$\n\\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial T}{\\partial q_j} = Q_j. \\qquad (1.53)\n$$\n\n이러한 방정식은 모두 $n$개가 존재한다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part2.png)"
        },
        {
          "id": "GM_1-4_Snack_05_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · Snack 05 라그랑주방정식",
          "fileName": "GM_1.4_Snack_05_라그랑주방정식.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_05_라그랑주방정식.md",
          "image": null,
          "content": "달랑베르 원리와 일반화 좌표를 통해 얻은 운동 에너지 관계식을 보존계에 적용해 보자. 힘들이 어떤 스칼라 퍼텐셜 함수 $V$로부터 유도될 수 있을 때,\n\n$$\n\\mathbf{F}_i = -\\nabla_i V.\n$$\n\n일반화 힘은 다음과 같이 쓸 수 있다.\n\n$$\nQ_j = \\sum_i \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = - \\sum_i \\nabla_i V \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j},\n$$\n\n이는 함수 $-V(\\mathbf{r}_1, \\mathbf{r}_2, \\ldots, \\mathbf{r}_N, t)$를 $q_j$에 대해 편미분한 식과 정확히 같다.\n\n$$\nQ_j \\equiv -\\frac{\\partial V}{\\partial q_j}. \\qquad (1.54)\n$$\n\n식 (1.47 $\\delta \\mathbf{r}_i = \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\delta q_j$)을 참조하라. 그러면 식 (1.53 $\\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial T}{\\partial q_j} = Q_j$)의 결과는 다음과 같이 다시 쓸 수 있다.\n\n$$\n\\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial (T - V)}{\\partial q_j} = 0. \\qquad (1.55)\n$$\n\n형태가 (1.55)인 운동 방정식은 보존계(conservative systems)에만 반드시 국한되는 것은 아니다. 오직 $V$가 시간에 대한 명시적인 함수가 아닐 때만 그 계가 보존계가 된다(4페이지 참조). 여기서 정의된 바와 같이, 퍼텐셜 $V$는 일반화 속도(generalized velocities)에 의존하지 않는다. 따라서 우리는 $\\dot{q}_j$에 대한 편미분 부분에 $V$ 항을 포함시킬 수 있다.\n\n$$\n\\frac{d}{dt} \\left( \\frac{\\partial (T - V)}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial (T - V)}{\\partial q_j} = 0.\n$$\n\n또는 라그랑지안(Lagrangian) $L$이라는 새로운 함수를 다음과 같이 정의하면,\n\n$$\nL = T - V, \\qquad (1.56)\n$$\n\n식 (1.53 $\\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial T}{\\partial q_j} = Q_j$)은 다음과 같이 된다.\n\n$$\n\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial L}{\\partial q_j} = 0, \\qquad (1.57)\n$$\n\n이 수식들을 \"라그랑주 방정식(Lagrange's equations)\"이라고 부른다.\n\n특정한 운동 방정식의 집합에 대하여, 식 (1.57)이 주어진 일반화 좌표에서의 운동 방정식으로 유도되도록 하는 라그랑지안의 선택이 유일한 것은 아님에 주의하라. 따라서 유도(Derivations) 8과 10에서 볼 수 있듯이, 만약 $L(q, \\dot{q}, t)$가 적절한 라그랑지안이고 $F(q, t)$가 일반화 좌표와 시간에 대한 임의의 미분 가능한 함수라면,\n\n$$\nL'(q, \\dot{q}, t) = L(q, \\dot{q}, t) + \\frac{dF}{dt} \\qquad (1.57')\n$$\n\n또한 동일한 운동 방정식을 도출하는 라그랑지안이 된다. 이러한 처방에 의해 구성된 것 외에도 대안적인 라그랑지안들을 찾는 것이 종종 가능하다(연습문제 20 참조). 식 (1.56)은 보존계에 대한 라그랑지안을 구성하는 항상 적절한 방법이기는 하지만, 주어진 계에 적합한 유일한 라그랑지안을 제공하는 것은 아니다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_05_라그랑주방정식.png)"
        },
        {
          "id": "GM_1-7_Problem_07_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · 참고 문항 · 1.7 Problem 07",
          "fileName": "GM_1.7_Problem_07_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/Reference_Exercises/GM_1.7_Problem_07_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 07**\n\n7. 식 (1.53)의 형태인 라그랑주 방정식(Lagrange's equations)을 다음과 같이 쓸 수도 있음을 보이시오.\n\n$$\n\\frac{\\partial \\dot{T}}{\\partial \\dot{q}_j} - 2 \\frac{\\partial T}{\\partial q_j} = Q_j.\n$$\n\n이는 때때로 라그랑주 방정식의 닐센 형태(Nielsen form)로 알려져 있다."
        },
        {
          "id": "GM_1-7_Problem_08_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · 참고 문항 · 1.7 Problem 08",
          "fileName": "GM_1.7_Problem_08_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/Reference_Exercises/GM_1.7_Problem_08_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 08**\n\n8. $L$이 라그랑주 방정식을 만족하는 자유도 $n$인 계의 라그랑지안(Lagrangian)일 때, 직접 대입하여\n\n$$\nL' = L + \\frac{dF(q_1, \\dots, q_n, t)}{dt}\n$$\n\n또한 라그랑주 방정식을 만족함을 보이시오. 여기서 $F$는 그 변수들에 대한 임의의 미분 가능한 함수이다."
        },
        {
          "id": "GM_1-7_Problem_10_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · 참고 문항 · 1.7 Problem 10",
          "fileName": "GM_1.7_Problem_10_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/Reference_Exercises/GM_1.7_Problem_10_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 10**\n\n10. $q_1, \\dots, q_n$이 라그랑지안 $L(q, \\dot{q}, t)$를 가지는 자유도 $n$인 계의 독립적인 일반화 좌표의 집합이라 하자. 다음 변환 방정식을 통해 또 다른 독립적인 좌표 집합 $s_1, \\dots, s_n$으로 변환한다고 가정하자.\n\n$$\nq_i = q_i(s_1, \\dots, s_n, t), \\quad i = 1, \\dots, n.\n$$\n\n(이러한 변환을 점 변환(point transformation)이라 부른다.) 만약 변환 방정식을 통해 라그랑지안 함수가 $s_j, \\dot{s}_j$, 그리고 $t$의 함수로 표현된다면, $L$이 $s$ 좌표계에 대해서도 라그랑주 방정식을 만족함을 보이시오.\n\n$$\n\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{s}_j} \\right) - \\frac{\\partial L}{\\partial s_j} = 0.\n$$\n\n다시 말해서, 라그랑주 방정식의 형태는 점 변환 아래에서 불변이다."
        },
        {
          "id": "GM_1-8_Problem_20_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.4 · 참고 문항 · 1.8 Problem 20",
          "fileName": "GM_1.8_Problem_20_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/Reference_Exercises/GM_1.8_Problem_20_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 20**\n\n**20.** 질량이 $m$인 입자가 1차원에서 운동하며 다음과 같은 라그랑지안을 갖는다.\n\n$$\nL = \\frac{m^2\\dot{x}^4}{12} + m\\dot{x}^2V(x) - V^2(x),\n$$\n\n여기서 $V$는 $x$에 대한 어떤 미분 가능한 함수이다. $x(t)$에 대한 운동 방정식을 구하고, 이 방정식을 바탕으로 계의 물리적 특성을 설명하라."
        }
      ]
    },
    {
      "id": "GM_1.5",
      "title": "속도 의존 퍼텐셜과 흩어지기 함수",
      "category": "minor_unit",
      "startPage": "40",
      "endPage": "43",
      "pageCount": "4",
      "pageLabelStart": "21",
      "pageLabelEnd": "24",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_1-5_Snack_01_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · Snack 01 속도의존퍼텐셜",
          "fileName": "GM_1.5_Snack_01_속도의존퍼텐셜.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_01_속도의존퍼텐셜.md",
          "image": null,
          "content": "**1.5 속도 의존 퍼텐셜과 소산 함수**\n\n일반화된 힘(generalized forces)이 다음과 같은 처방에 따라 함수 $U(q_j, \\dot{q}_j)$로부터 얻어진다면, 일반적인 의미의 퍼텐셜 함수 $V$가 존재하지 않더라도 라그랑주 방정식(Lagrange's equations)을 식 (1.57 $\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial L}{\\partial q_j} = 0$)의 형태로 나타낼 수 있다.\n\n$$\nQ_j = -\\frac{\\partial U}{\\partial q_j} + \\frac{d}{dt} \\left( \\frac{\\partial U}{\\partial \\dot{q}_j} \\right). \\quad (1.58)\n$$\n\n이 경우, 식 (1.57 $\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial L}{\\partial q_j} = 0$)은 다음과 같이 주어지는 라그랑지안(Lagrangian)을 사용한 식 (1.53 $\\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial T}{\\partial q_j} = Q_j$)으로부터 여전히 도출된다.\n\n$$\nL = T - U. \\quad (1.59)\n$$\n\n여기서 $U$는 \"일반화된 퍼텐셜(generalized potential)\" 또는 \"속도 의존 퍼텐셜(velocity-dependent potential)\"이라고 부를 수 있다. 이러한 \"퍼텐셜\"을 사용할 수 있는 가능성은 단지 이론적인 호기심에 불과한 것이 아니다. 이는 매우 중요한 한 가지 형태의 힘의 장, 즉 움직이는 전하에 작용하는 전자기력(electromagnetic forces)에 적용된다. 그 중요성을 고려할 때, 이 주제에 대해 잠시 살펴보는 것은 충분히 가치가 있다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_01_속도의존퍼텐셜.png)"
        },
        {
          "id": "GM_1-5_Snack_02_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · Snack 02 전자기장의라그랑지안",
          "fileName": "GM_1.5_Snack_02_전자기장의라그랑지안.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_02_전자기장의라그랑지안.md",
          "image": null,
          "content": "시간과 위치에 따라 달라질 수 있는 전기장(electric field) $\\mathbf{E}$와 자기장(magnetic field) $\\mathbf{B}$가 모두 존재하고 그 외에는 전하가 없는 영역에서, 속도 $\\mathbf{v}$로 움직이는 질량 $m$, 전하량 $q$인 전하를 고려해 보자. 이 전하는 로런츠 힘(Lorentz force)이라고 불리는 힘을 받으며, 이는 다음과 같이 주어진다.\n\n$$\n\\mathbf{F} = q [\\mathbf{E} + (\\mathbf{v} \\times \\mathbf{B})]. \\quad (1.60)\n$$\n\n$\\mathbf{E}(x, y, z, t)$와 $\\mathbf{B}(x, y, z, t)$는 모두 시간과 위치의 연속 함수이며, 다음과 같이 스칼라 퍼텐셜(scalar potential) $\\phi(x, y, z, t)$와 벡터 퍼텐셜(vector potential) $\\mathbf{A}(x, y, z, t)$로부터 유도할 수 있다.\n\n$$\n\\mathbf{E} = -\\nabla \\phi - \\frac{\\partial \\mathbf{A}}{\\partial t} \\quad (1.61a)\n$$\n\n그리고\n\n$$\n\\mathbf{B} = \\nabla \\times \\mathbf{A}. \\quad (1.61b)\n$$\n\n전하에 작용하는 힘은 다음의 속도 의존 퍼텐셜 에너지(velocity-dependent potential energy)로부터 유도될 수 있다.\n\n$$\nU = q\\phi - q\\mathbf{A} \\cdot \\mathbf{v}, \\quad (1.62)\n$$\n\n따라서 라그랑지안 $L = T - U$는 다음과 같다.\n\n$$\nL = \\frac{1}{2}mv^2 - q\\phi + q\\mathbf{A} \\cdot \\mathbf{v}. \\quad (1.63)\n$$\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_02_전자기장의라그랑지안.png)"
        },
        {
          "id": "GM_1-5_Snack_03_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · Snack 03 로런츠힘방정식",
          "fileName": "GM_1.5_Snack_03_로런츠힘방정식.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_03_로런츠힘방정식.md",
          "image": null,
          "content": "전자기장 내 전하의 운동에 대한 라그랑주 방정식의 $x$-성분만 고려하면 다음과 같다.\n\n$$\nm\\ddot{x} = q\\left(v_x \\frac{\\partial A_x}{\\partial x} + v_y \\frac{\\partial A_y}{\\partial x} + v_z \\frac{\\partial A_z}{\\partial x}\\right) - q\\left(\\frac{\\partial \\phi}{\\partial x} + \\frac{dA_x}{dt}\\right). \\quad (1.64)\n$$\n\n$A_x$의 전시간 미분(total time derivative)은 편미분(partial time derivative)과 다음의 관계를 갖는다.\n\n$$\n\\frac{dA_x}{dt} = \\frac{\\partial A_x}{\\partial t} + \\mathbf{v} \\cdot \\nabla A_x\n$$\n\n$$\n= \\frac{\\partial A_x}{\\partial t} + v_x \\frac{\\partial A_x}{\\partial x} + v_y \\frac{\\partial A_x}{\\partial y} + v_z \\frac{\\partial A_x}{\\partial z}. \\quad (1.65)\n$$\n\n식 (1.61b $\\mathbf{B} = \\nabla \\times \\mathbf{A}$)는 다음을 제공한다.\n\n$$\n(\\mathbf{v} \\times \\mathbf{B})_x = v_y\\left(\\frac{\\partial A_y}{\\partial x} - \\frac{\\partial A_x}{\\partial y}\\right) + v_z\\left(\\frac{\\partial A_z}{\\partial x} - \\frac{\\partial A_x}{\\partial z}\\right).\n$$\n\n이 식들을 결합하면 $x$-방향의 운동 방정식이 얻어진다.\n\n$$\nm\\ddot{x} = q [E_x + (\\mathbf{v} \\times \\mathbf{B})_x]. \\quad (1.66)\n$$\n\n성분별로 비교해 보면, 식 (1.66)과 식 (1.60 $\\mathbf{F} = q [\\mathbf{E} + (\\mathbf{v} \\times \\mathbf{B})]$)은 동일하며, 이는 로런츠 힘 방정식이 식 (1.61 $\\mathbf{E} = -\\nabla \\phi - \\frac{\\partial \\mathbf{A}}{\\partial t}, \\ \\mathbf{B} = \\nabla \\times \\mathbf{A}$)과 (1.62 $U = q\\phi - q\\mathbf{A} \\cdot \\mathbf{v}$)로부터 유도될 수 있음을 보여준다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_03_로런츠힘방정식.png)"
        },
        {
          "id": "GM_1-5_Snack_04_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · Snack 04 레일리소산함수",
          "fileName": "GM_1.5_Snack_04_레일리소산함수.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_04_레일리소산함수.md",
          "image": null,
          "content": "계에 작용하는 모든 힘을 퍼텐셜로부터 유도할 수 있는 것은 아닌 경우, 라그랑주 방정식은 항상 다음과 같은 형태로 쓸 수 있음에 유의하라.\n\n$$\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial L}{\\partial q_j} = Q_j,\n$$\n\n여기서 $L$은 이전과 같이 보존력(conservative forces)의 퍼텐셜을 포함하고, $Q_j$는 퍼텐셜에서 기인하지 *않는* 힘을 나타낸다. 이러한 상황은 마찰력(frictional forces)이 존재할 때 종종 발생한다. 마찰력은 입자의 속도에 비례하는 경우가 많으며, 이 때 마찰력의 $x$-성분은 다음과 같은 형태를 갖는다.\n\n$$\nF_{fx} = -k_x v_x.\n$$\n\n이러한 종류의 마찰력은 *레일리 소산 함수(Rayleigh's dissipation function)*라고 알려진 함수 $\\mathcal{F}$의 항으로 유도될 수 있으며, 이는 다음과 같이 정의된다.\n\n$$\n\\mathcal{F} = \\frac{1}{2}\\sum_i \\left( k_x v_{ix}^2 + k_y v_{iy}^2 + k_z v_{iz}^2 \\right), \\quad (1.67)\n$$\n\n여기서 합은 계의 입자들에 대한 것이다. 이 정의로부터 다음이 명확해진다.\n\n$$\nF_{f x_i} = -\\frac{\\partial \\mathcal{F}}{\\partial v_{x_i}},\n$$\n\n또는 기호로 나타내면,\n\n$$\n\\mathbf{F}_f = -\\nabla_v \\mathcal{F}. \\quad (1.68)\n$$\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_04_레일리소산함수.png)"
        },
        {
          "id": "GM_1-5_Snack_05_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · Snack 05 에너지소산율",
          "fileName": "GM_1.5_Snack_05_에너지소산율.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_05_에너지소산율.md",
          "image": null,
          "content": "소산 함수에 대한 물리적 해석도 가능하다. 계가 마찰에 *대항하여* 한 일(work)은 다음과 같다.\n\n$$\ndW_f = -\\mathbf{F}_f \\cdot d\\mathbf{r} = -\\mathbf{F}_f \\cdot \\mathbf{v} dt = \\left( k_x v_x^2 + k_y v_y^2 + k_z v_z^2 \\right) dt.\n$$\n\n따라서 $2\\mathcal{F}$는 마찰로 인한 에너지 소산율(rate of energy dissipation)이다. 마찰력에 의해 발생하는 일반화된 힘의 성분은 다음과 같이 주어진다.\n\n$$\nQ_j = \\sum_i \\mathbf{F}_{fi} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = -\\sum_i \\nabla_v \\mathcal{F} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\n$$\n\n$$\n= -\\sum_i \\nabla_v \\mathcal{F} \\cdot \\frac{\\partial \\dot{\\mathbf{r}}_i}{\\partial \\dot{q}_j}, \\quad (\\text{식 } 1.51\\text{에 의해}),\n$$\n\n$$\n= -\\frac{\\partial \\mathcal{F}}{\\partial \\dot{q}_j}. \\quad (1.69)\n$$\n\n그 예로 스토크스 법칙(Stokes' law)을 들 수 있는데, 점성(viscosity) $\\eta$인 매질에서 속력 $v$로 움직이는 반지름 $a$의 구(sphere)는 마찰 항력(frictional drag force) $\\mathbf{F}_f = -6\\pi\\eta a\\mathbf{v}$를 받는다. 소산을 포함하는 라그랑주 방정식은 다음과 같이 된다.\n\n$$\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial L}{\\partial q_j} + \\frac{\\partial \\mathcal{F}}{\\partial \\dot{q}_j} = 0, \\quad (1.70)\n$$\n\n따라서 운동 방정식을 얻기 위해서는 두 개의 스칼라 함수 $L$과 $\\mathcal{F}$가 지정되어야 한다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_05_에너지소산율.png)"
        },
        {
          "id": "GM_1-7_Problem_09_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · 참고 문항 · 1.7 Problem 09",
          "fileName": "GM_1.7_Problem_09_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/Reference_Exercises/GM_1.7_Problem_09_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.7 Problem 09**\n\n9. 전자기장은 스칼라 및 벡터 퍼텐셜의 다음과 같은 게이지 변환(gauge transformation)에 대해 불변이다.\n\n$$\n\\mathbf{A} \\rightarrow \\mathbf{A} + \\nabla \\psi(\\mathbf{r}, t),\n$$\n\n$$\n\\phi \\rightarrow \\phi - \\frac{1}{c} \\frac{\\partial \\psi}{\\partial t},\n$$\n\n여기서 $\\psi$는 임의의 (단, 미분 가능한) 함수이다. 이 게이지 변환이 전자기장 속을 운동하는 입자의 라그랑지안에 어떤 영향을 미치는가? 운동이 영향을 받는가?"
        },
        {
          "id": "GM_1-8_Problem_15_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · 참고 문항 · 1.8 Problem 15",
          "fileName": "GM_1.8_Problem_15_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/Reference_Exercises/GM_1.8_Problem_15_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 15**\n\n**15.** 점 입자가 다음과 같은 형태의 일반화 퍼텐셜에서 유도될 수 있는 힘의 영향을 받아 공간에서 운동하고 있다.\n\n$$\nU(\\mathbf{r}, \\mathbf{v}) = V(r) + \\boldsymbol{\\sigma} \\cdot \\mathbf{L},\n$$\n\n여기서 $\\mathbf{r}$은 고정점으로부터의 반경 벡터이고, $\\mathbf{L}$은 그 점에 대한 각운동량이며, $\\boldsymbol{\\sigma}$는 공간 내의 고정된 벡터이다.\n(a) 식 (1.58)을 바탕으로 입자에 작용하는 힘의 성분을 데카르트 좌표계와 구면 극좌표계 모두에서 구하라.\n(b) 두 좌표계에서의 성분들이 식 (1.49)에서와 같이 서로 연관되어 있음을 보여라.\n(c) 구면 극좌표계에서의 운동 방정식을 구하라."
        },
        {
          "id": "GM_1-8_Problem_16_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.5 · 참고 문항 · 1.8 Problem 16",
          "fileName": "GM_1.8_Problem_16_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/Reference_Exercises/GM_1.8_Problem_16_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 16**\n\n**16.** 입자가 힘의 중심을 향해 작용하는 힘의 영향을 받아 평면에서 운동하고 있으며, 그 힘의 크기는 다음과 같다.\n\n$$\nF = \\frac{1}{r^2} \\left( 1 - \\frac{\\dot{r}^2 - 2r\\ddot{r}}{c^2} \\right),\n$$\n\n여기서 $r$은 힘의 중심에서 입자까지의 거리이다. 이러한 힘을 발생시키는 일반화 퍼텐셜을 찾고, 그로부터 평면 내 운동에 대한 라그랑지안을 구하라. ($F$에 대한 표현은 베버(Weber)의 전기동역학에서 두 전하 사이의 힘을 나타낸다.)"
        }
      ]
    },
    {
      "id": "GM_1.6",
      "title": "라그랑지언 정식화의 간단한 응용",
      "category": "minor_unit",
      "startPage": "43",
      "endPage": "48",
      "pageCount": "6",
      "pageLabelStart": "24",
      "pageLabelEnd": "29",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_1-6_Snack_01_-_-_-_-_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · Snack 01 라그랑주 형식화의 개요와 운동 에너지",
          "fileName": "GM_1.6_Snack_01_라그랑주_형식화의_개요와_운동_에너지.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_01_라그랑주_형식화의_개요와_운동_에너지.md",
          "image": null,
          "content": "# 1.6 라그랑주 형식화의 간단한 응용: 개요와 운동 에너지\n\n이전 절들에서는 라그랑지안을 정의할 수 있는 계, 즉 작용하는 힘이 일반적인 퍼텐셜 또는 일반화 퍼텐셜로부터 유도될 수 있고 구속 조건이 일을 하지 않는 홀로노믹 계의 경우, 운동 방정식을 세우는 매우 편리한 방법을 얻게 됨을 보여준다. 우리는 운동 방정식에서 구속력을 제거하고자 하는 바람에서 라그랑주 형식화를 도입하게 되었으며, 이 목표를 달성하는 과정에서 많은 다른 이점들을 얻었다. 운동 방정식의 원래 형태인 식 (1.19 $\\sum_j \\mathbf{F}_{ji} + \\mathbf{F}_i^{(e)} = \\dot{\\mathbf{p}}_i$)를 세울 때, 많은 벡터 힘들과 가속도들을 다루어야만 한다. 라그랑주 방법을 사용하면 두 개의 스칼라 함수 $T$와 $V$만을 다루게 되므로 문제가 크게 단순화된다.\n\n이제 라그랑주 형식화가 적용될 수 있는 역학의 모든 문제에 대해 간단하고 판에 박힌 절차를 확립할 수 있다. 단지 $T$와 $V$를 일반화 좌표로 쓰고, 이들로부터 $L$을 구성한 다음, 이를 식 (1.57 $\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial L}{\\partial q_j} = 0$)에 대입하여 운동 방정식을 얻기만 하면 된다. 데카르트 좌표계에서 일반화 좌표계로 $T$와 $V$를 변환하는 데 필요한 변환은 변환 방정식 (1.38 $\\vdots$)과 (1.45')를 적용하여 얻는다. 따라서 일반적으로 $T$는 다음과 같이 주어진다.\n\n$$\nT = \\sum_i \\frac{1}{2} m_i v_i^2 = \\sum_i \\frac{1}{2} m_i \\left( \\sum_j \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\dot{q}_j + \\frac{\\partial \\mathbf{r}_i}{\\partial t} \\right)^2\n$$\n\n전개를 수행하면 일반화 좌표에서 $T$에 대한 표현식이 다음 형태를 가질 것임이 분명하다.\n\n$$\nT = M_0 + \\sum_j M_j \\dot{q}_j + \\frac{1}{2} \\sum_{j,k} M_{jk} \\dot{q}_j \\dot{q}_k, \\quad (1.71)\n$$\n\n여기서 $M_0$, $M_j$, $M_{jk}$는 $\\mathbf{r}$들과 $t$의, 따라서 $q$들과 $t$의 명확한 함수이다. 사실, 비교해 보면 다음과 같다.\n\n$$\nM_0 = \\sum_i \\frac{1}{2} m_i \\left(\\frac{\\partial \\mathbf{r}_i}{\\partial t}\\right)^2,\n$$\n\n$$\nM_j = \\sum_i m_i \\frac{\\partial \\mathbf{r}_i}{\\partial t} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}, \\quad (1.72)\n$$\n\n그리고\n\n$$\nM_{jk} = \\sum_i m_i \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_k}.\n$$\n\n따라서 계의 운동 에너지는 일반화 속도들에 대한 세 개의 동차(homogeneous) 함수의 합으로 항상 쓸 수 있다.\n\n$$\nT = T_0 + T_1 + T_2, \\quad (1.73)\n$$\n\n여기서 $T_0$는 일반화 속도들과 무관하며, $T_1$은 속도들에 대해 1차식이고, $T_2$는 속도들에 대해 2차식이다. 구속 조건이 시간에 무관할 때(스클레로노믹) 나타날 수 있는 것처럼, 만약 변환 방정식에 시간이 명시적으로 포함되지 않는다면 식 (1.71)에서 마지막 항만이 0이 아니게 되며, $T$는 일반화 속도들에 대해 항상 동차 2차 형식을 갖는다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_01_라그랑주_형식화의_개요와_운동_에너지.png)"
        },
        {
          "id": "GM_1-6_Snack_02_-_-_-_Part1",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · Snack 02 단일 입자의 운동 Part1",
          "fileName": "GM_1.6_Snack_02_단일_입자의_운동_Part1.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part1.md",
          "image": null,
          "content": "# 1.6 라그랑주 형식화의 간단한 응용: 단일 입자의 운동\n\n이제 라그랑주 형식화 절차에 대한 간단한 예제들을 고려해 보자.\n1. 공간상의 단일 입자\n   (a) 데카르트 좌표계\n   (b) 평면 극좌표계\n\n**1. (a) 단일 입자의 운동: 데카르트 좌표계 사용.**\n식 (1.53 $\\frac{d}{dt} \\left( \\frac{\\partial T}{\\partial \\dot{q}_j} \\right) - \\frac{\\partial T}{\\partial q_j} = Q_j$)에 필요한 일반화 힘은 명백히 $F_x$, $F_y$, $F_z$이다. 그러면\n\n$$\nT = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2),\n$$\n\n$$\n\\frac{\\partial T}{\\partial x} = \\frac{\\partial T}{\\partial y} = \\frac{\\partial T}{\\partial z} = 0,\n$$\n\n$$\n\\frac{\\partial T}{\\partial \\dot{x}} = m\\dot{x}, \\quad \\frac{\\partial T}{\\partial \\dot{y}} = m\\dot{y}, \\quad \\frac{\\partial T}{\\partial \\dot{z}} = m\\dot{z},\n$$\n\n이고, 운동 방정식은 다음과 같다.\n\n$$\n\\frac{d}{dt}(m\\dot{x}) = F_x, \\quad \\frac{d}{dt}(m\\dot{y}) = F_y, \\quad \\frac{d}{dt}(m\\dot{z}) = F_z. \\quad (1.74)\n$$\n\n따라서 원래의 뉴턴의 운동 방정식으로 다시 되돌아오게 된다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part1.png)"
        },
        {
          "id": "GM_1-6_Snack_02_-_-_-_Part2_A",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · Snack 02 단일 입자의 운동 Part2 A",
          "fileName": "GM_1.6_Snack_02_단일_입자의_운동_Part2_A.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part2_A.md",
          "image": null,
          "content": "**(b) 단일 입자의 운동: 평면 극좌표계 사용.** \n여기서는 $T$를 $\\dot{r}$과 $\\dot{\\theta}$로 표현해야 한다. 변환 방정식인 식 (1.38 $\\vdots$)은 다음과 같다.\n\n$$\nx = r \\cos \\theta\n$$\n\n$$\ny = r \\sin \\theta\n$$\n\n(1.46 $\\mathbf{v}_i \\equiv \\frac{d\\mathbf{r}_i}{dt} = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k} \\dot{q}_k + \\frac{\\partial \\mathbf{r}_i}{\\partial t}$)과 유사하게, 속도는 다음과 같이 주어진다.\n\n$$\n\\dot{x} = \\dot{r} \\cos \\theta - r \\dot{\\theta} \\sin \\theta,\n$$\n\n$$\n\\dot{y} = \\dot{r} \\sin \\theta + r \\dot{\\theta} \\cos \\theta.\n$$\n\n그러면 운동 에너지 $T = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2)$는 형식적으로 다음과 같이 간략화된다.\n\n$$\nT = \\frac{1}{2}m \\left[ \\dot{r}^2 + (r\\dot{\\theta})^2 \\right]. \\quad (1.75)\n$$\n\n식 (1.75)의 대안적인 유도는 속도의 평면 극좌표 성분이 $\\mathbf{r}$을 따르는 $\\dot{r}$과 단위 벡터 $\\boldsymbol{\\hat{\\theta}}$로 표시되는 $\\mathbf{r}$에 수직인 방향을 따르는 $r\\dot{\\theta}$임을 인식하여 얻을 수 있다. 따라서 극좌표계로 표현된 속도의 제곱은 간단히 $\\dot{r}^2 + (r\\dot{\\theta})^2$이 된다. 식 (1.49 $Q_j = \\sum_i \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}$)의 정의로부터 일반화 힘의 성분을 얻을 수 있는데, $\\hat{\\mathbf{r}}$과 $\\boldsymbol{\\hat{\\theta}}$가 각각 $\\mathbf{r}$과 $\\boldsymbol{\\theta}$방향의 단위 벡터인$z=0$평면으로 제한된 원통 좌표계에서의 미소 위치 벡터$d\\mathbf{r}$에 대한 다음 식의 도움을 받는다.\n\n$$\nd\\mathbf{r} = \\hat{\\mathbf{r}} dr + r \\boldsymbol{\\hat{\\theta}} d\\theta + \\hat{\\mathbf{k}} dz\n$$\n\n$$\nQ_r = \\mathbf{F} \\cdot \\frac{\\partial \\mathbf{r}}{\\partial r} = \\mathbf{F} \\cdot \\hat{\\mathbf{r}} = F_r,\n$$\n\n$$\nQ_\\theta = \\mathbf{F} \\cdot \\frac{\\partial \\mathbf{r}}{\\partial \\theta} = \\mathbf{F} \\cdot r \\boldsymbol{\\hat{\\theta}} = r F_\\theta,\n$$\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part2_A.png)"
        },
        {
          "id": "GM_1-6_Snack_02_-_-_-_Part2_B",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · Snack 02 단일 입자의 운동 Part2 B",
          "fileName": "GM_1.6_Snack_02_단일_입자의_운동_Part2_B.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part2_B.md",
          "image": null,
          "content": "왜냐하면 도함수의 정의에 의해 $\\theta$에 대한 $\\mathbf{r}$의 미분은 $\\boldsymbol{\\hat{\\theta}}$방향의 벡터이기 때문이다 (그림 1.6 참조). 두 개의 일반화 좌표가 있으므로 라그랑주 방정식도 두 개이다.$r$ 방정식에 나타나는 미분은 다음과 같다.\n\n$$\n\\frac{\\partial T}{\\partial r} = m r \\dot{\\theta}^2, \\quad \\frac{\\partial T}{\\partial \\dot{r}} = m \\dot{r}, \\quad \\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{r}}\\right) = m \\ddot{r},\n$$\n\n이고, 방정식 자체는 다음과 같다.\n\n$$\nm \\ddot{r} - m r \\dot{\\theta}^2 = F_r,\n$$\n\n여기서 두 번째 항은 구심 가속도 항이다. $\\theta$ 방정식에 대해, 다음 미분들을 얻는다.\n\n$$\n\\frac{\\partial T}{\\partial \\theta} = 0, \\quad \\frac{\\partial T}{\\partial \\dot{\\theta}} = m r^2 \\dot{\\theta}, \\quad \\frac{d}{dt}\\left(m r^2 \\dot{\\theta}\\right) = m r^2 \\ddot{\\theta} + 2 m r \\dot{r} \\dot{\\theta},\n$$\n\n따라서 방정식은 다음과 같이 된다.\n\n$$\n\\frac{d}{dt}\\left(m r^2 \\dot{\\theta}\\right) = m r^2 \\ddot{\\theta} + 2 m r \\dot{r} \\dot{\\theta} = r F_\\theta.\n$$\n\n방정식의 좌변은 단순히 각운동량의 시간 미분이고 우변은 정확히 작용하는 토크이므로, 우리는 단지 토크 방정식 (1.26 $\\frac{d\\mathbf{L}}{dt} = \\mathbf{N}^{(e)}$)을 다시 유도한 것임을 유의하라. 여기서 $L = m r^2 \\dot{\\theta}$이고$N^{(e)} = r F_\\theta$이다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part2_B.png)"
        },
        {
          "id": "GM_1-6_Snack_03_-_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · Snack 03 애트우드 기계",
          "fileName": "GM_1.6_Snack_03_애트우드_기계.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_03_애트우드_기계.md",
          "image": null,
          "content": "# 1.6 라그랑주 형식화의 간단한 응용: 애트우드 기계\n\n**2. 애트우드 기계**—(그림 1.7 참조) \n홀로노믹, 스클레로노믹 구속 조건을 가진 보존계의 예이다 (도르래는 마찰이 없고 질량이 없다고 가정한다). 분명히 독립된 좌표는$x$하나뿐이며, 다른 추의 위치는 둘 사이의 밧줄 길이가$l$이라는 구속 조건에 의해 결정된다. 퍼텐셜 에너지는 다음과 같고,\n\n$$\nV = - M_1 g x - M_2 g (l - x),\n$$\n\n운동 에너지는 다음과 같다.\n\n$$\nT = \\frac{1}{2} (M_1 + M_2) \\dot{x}^2.\n$$\n\n이 둘을 결합하면 라그랑지안은 다음과 같은 형태를 갖는다.\n\n$$\nL = T - V = \\frac{1}{2} (M_1 + M_2) \\dot{x}^2 + M_1 g x + M_2 g (l - x).\n$$\n\n미분들을 포함하는 운동 방정식은 단 하나뿐이다.\n\n$$\n\\frac{\\partial L}{\\partial x} = (M_1 - M_2) g,\n$$\n\n$$\n\\frac{\\partial L}{\\partial \\dot{x}} = (M_1 + M_2) \\dot{x},\n$$\n\n따라서 다음을 얻는다.\n\n$$\n(M_1 + M_2) \\ddot{x} = (M_1 - M_2) g,\n$$\n\n또는\n\n$$\n\\ddot{x} = \\frac{M_1 - M_2}{M_1 + M_2} g,\n$$\n\n이는 더 기초적인 방법으로 얻은 익숙한 결과이다. 이 간단한 문제는 라그랑주 형식화에서 구속력—여기서는 밧줄의 장력—이 어디에도 나타나지 않는다는 점을 강조한다. 같은 이유로, 밧줄의 장력 역시 라그랑주 방법을 통해 직접적으로 찾을 수 없다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_03_애트우드_기계.png)"
        },
        {
          "id": "GM_1-6_Snack_04_-_-_-_-",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · Snack 04 회전하는 철사 위의 구슬",
          "fileName": "GM_1.6_Snack_04_회전하는_철사_위의_구슬.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_04_회전하는_철사_위의_구슬.md",
          "image": null,
          "content": "# 1.6 라그랑주 형식화의 간단한 응용: 회전하는 철사 위의 구슬\n\n**3. 시간에 의존하는 구속 조건: 회전하는 철사를 따라 미끄러지는 구슬**\n힘이 없는 공간에서 균일하게 회전하는 철사를 따라 미끄러지는 구슬(또는 고리). 철사는 곧고, 철사에 수직인 고정축을 중심으로 균일하게 회전한다. 이 예제는 회전축이 $z$축이고 철사가 $xy$ 평면에 있는, 시간에 의존하는 구속 조건의 간단한 예시로 선택되었다. 변환 방정식은 명시적으로 시간을 포함한다.\n\n$$\nx = r \\cos \\omega t, \\quad (\\omega = \\text{회전 각속도})\n$$\n\n$$\ny = r \\sin \\omega t. \\quad (r = \\text{회전축으로부터 철사를 따라 측정한 거리})\n$$\n\n그러면 (1.71 $T = M_0 + \\sum_j M_j \\dot{q}_j + \\frac{1}{2} \\sum_{j,k} M_{jk} \\dot{q}_j \\dot{q}_k$)을 얻는 데 사용된 것과 같은 절차로 $T$(여기서는$L$과 같음)를 찾을 수 있지만, 구속 조건을 $\\dot{\\theta} = \\omega$ 관계로 표현하여 (1.75 $T = \\frac{1}{2}m \\left[ \\dot{r}^2 + (r\\dot{\\theta})^2 \\right]$)를 직접 가져다 쓰는 것이 더 간단하다.\n\n$$\nT = \\frac{1}{2} m (\\dot{r}^2 + r^2 \\omega^2).\n$$\n\n이제 $\\dot{r}$을 포함하지 않는 항이 있으므로, $T$는 일반화 속도들에 대한 동차 2차 함수가 아님에 유의하라. 그러면 운동 방정식은 다음과 같다.\n\n$$\nm \\ddot{r} - m r \\omega^2 = 0\n$$\n\n또는\n\n$$\n\\ddot{r} = r \\omega^2,\n$$\n\n이는 부호가 바뀐 익숙한 단순 조화 진동자 방정식이다. 철사 위에서 처음에 정지해 있던 구슬에 대한 해 $r = e^{\\omega t}$는 구슬이 지수함수적으로 바깥쪽으로 움직임을 보여준다. 다시 한번 말하지만, 이 방법은 구슬을 철사 위에 머물게 하는 구속력을 제공할 수 없다. 각운동량 $L = m r^2 \\omega = m \\omega r_0^2 e^{2 \\omega t}$를 포함하는 식 (1.26 $\\frac{d\\mathbf{L}}{dt} = \\mathbf{N}^{(e)}$)은 힘 $F = N/r$을 제공하며, 이는 철사와 회전축에 수직으로 작용하는 구속력 $F = 2 m r_0 \\omega^2 e^{\\omega t}$를 만들어낸다.\n\n\n![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_04_회전하는_철사_위의_구슬.png)"
        },
        {
          "id": "GM_1-8_Problem_12_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 12",
          "fileName": "GM_1.8_Problem_12_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_12_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 12**\n\n**12.** 고도 720 km에서 지구 주위를 도는 위성의 궤도 주기와 궤도 각속도를 계산하라. [주어진 값: 지구의 반지름 $R = 6000$km,$g = 9.83 \\text{ m/s}^2$.]"
        },
        {
          "id": "GM_1-8_Problem_14_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 14",
          "fileName": "GM_1.8_Problem_14_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_14_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 14**\n\n**14.** 질량이 $m$인 두 질점이 길이가 $l$인 질량이 없는 강체 막대로 연결되어 있으며, 이 막대의 중심은 반지름 $a$인 원 위를 움직이도록 구속되어 있다. 운동 에너지를 일반화 좌표로 나타내어라."
        },
        {
          "id": "GM_1-8_Problem_18_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 18",
          "fileName": "GM_1.8_Problem_18_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_18_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 18**\n\n**18.** 특정 물리계에 대한 라그랑지안은 다음과 같이 쓸 수 있다.\n\n$$\nL' = \\frac{m}{2} \\left( a\\dot{x}^2 + 2b\\dot{x}\\dot{y} + c\\dot{y}^2 \\right) - \\frac{K}{2} \\left( ax^2 + 2bxy + cy^2 \\right),\n$$\n\n여기서 $a, b, c$는 임의의 상수이지만 $b^2 - ac \\neq 0$이라는 조건을 만족해야 한다. 운동 방정식은 무엇인가? 특히 $a = 0 = c$인 경우와 $b = 0, c = -a$인 두 가지 경우를 조사하라. 위의 라그랑지안이 설명하는 물리계는 무엇인가? 식 (1.56)으로 정의되는 이 계의 일반적인 라그랑지안이 점 변환(유도 10 참조)에 의해 $L'$과 관련되어 있음을 보여라. $b^2 - ac$의 값에 대한 조건이 갖는 의미는 무엇인가?"
        },
        {
          "id": "GM_1-8_Problem_19_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 19",
          "fileName": "GM_1.8_Problem_19_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_19_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 19**\n\n**19.** 구면 진자, 즉 질량이 없는 강체 막대에 매달린 질점의 라그랑주 운동 방정식을 구하라."
        },
        {
          "id": "GM_1-8_Problem_21_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 21",
          "fileName": "GM_1.8_Problem_21_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_21_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 21**\n\n**21.** 질량이 $m_1$과 $m_2$인 두 질점이 매끄러운 탁자의 구멍을 통과하는 끈으로 연결되어, $m_1$은 탁자 표면에 놓여 있고 $m_2$는 매달려 있다. $m_2$가 수직선상에서만 움직인다고 가정할 때, 이 계의 일반화 좌표는 무엇인가? 계의 라그랑주 방정식을 쓰고, 가능하다면 그 방정식들 중 어느 것이든 가질 수 있는 물리적 의미에 대해 논의하라. 이 문제를 하나의 2계 미분 방정식으로 단순화하고 방정식의 제1적분(first integral)을 구하라. 그것의 물리적 의미는 무엇인가? (운동은 $m_1$이 구멍에 도달할 때까지만 고려하라.)"
        },
        {
          "id": "GM_1-8_Problem_22_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 22",
          "fileName": "GM_1.8_Problem_22_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_22_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 22**\n\n**22.** 그림 1.4에 그려진 이중 진자의 라그랑지안과 운동 방정식을 구하라. 여기서 진자의 길이는 $l_1$과 $l_2$이고 해당 질량은 $m_1$과 $m_2$이다."
        },
        {
          "id": "GM_1-8_Problem_23_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 23",
          "fileName": "GM_1.8_Problem_23_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_23_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 23**\n\n**23.** 각각 2 kg과 3 kg인 두 질량이 매끄러운 도르래를 지나는 질량이 없고 늘어나지 않는 끈의 양끝에 묶여 있다. 계를 가만히 놓았을 때, 질량들의 가속도와 끈의 장력을 계산하라."
        },
        {
          "id": "GM_1-8_Problem_24_KR_TTS",
          "kind": "translation",
          "version": "main",
          "label": "GM_1.6 · 참고 문항 · 1.8 Problem 24",
          "fileName": "GM_1.8_Problem_24_KR_TTS.md",
          "sourcePath": "Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/Reference_Exercises/GM_1.8_Problem_24_KR_TTS.md",
          "image": null,
          "content": "**[참고 문항] 1.8 Problem 24**\n\n**24.** 정지 길이(장력이 없을 때)가 $L_a$인 용수철이 한쪽 끝은 지지대에 연결되어 있고 다른 쪽 끝에는 질량 $M$이 매달려 있다. 용수철의 질량과 질량 $M$의 크기는 무시하고, 운동은 수직 평면 내로 제한된다고 가정하라. 또한 용수철은 구부러지지 않고 늘어나기만 하지만 평면 내에서 흔들릴 수 있다고 가정하라.\n(a) 수직선으로부터 질량의 각변위와 끈이 정지 길이(질량 $m$이 매달려 있을 때)로부터 늘어난 길이를 사용하여 라그랑주 방정식을 구하라.\n(b) 작은 늘어남과 각변위에 대해 이 방정식들을 풀어라.\n(c) 늘어남과 각변위 모두에 대해 다음 차수(next order)까지 부분 (a)의 방정식들을 풀어라. 이 부분은 손으로 계산하기에 적합하다. 용수철 상수, 질량, 정지 길이에 대한 몇 가지 합리적인 가정들을 사용하여 운동을 논의하라. 문제에 명시된 가정 하에서 공명이 발생할 가능성이 있는가?\n(d) (해석적 컴퓨터 프로그램의 경우.) 용수철의 전체 질량이 $m \\ll M$이라고 생각하자. 용수철의 구부러짐을 무시하고, $m$과 각변위 및 선형 변위에 대해 1차(first order)까지 라그랑주 방정식을 올바르게 세워라.\n(e) (수치적 컴퓨터 분석의 경우.) 부분 (a)의 상수들에 대한 합리적인 가정들의 집합을 만들고 시간에 따른 두 좌표의 단일 그래프를 그려라."
        }
      ]
    },
    {
      "id": "GM_1.7",
      "title": "유도 문제",
      "category": "derivations",
      "startPage": "48",
      "endPage": "50",
      "pageCount": "3",
      "pageLabelStart": "29",
      "pageLabelEnd": "31",
      "note": "boundary page duplicated with next unit",
      "entries": []
    },
    {
      "id": "GM_1.8",
      "title": "연습문제",
      "category": "exercises",
      "startPage": "50",
      "endPage": "53",
      "pageCount": "4",
      "pageLabelStart": "31",
      "pageLabelEnd": "34",
      "note": "boundary page duplicated with next unit",
      "entries": []
    },
    {
      "id": "GM_2.0",
      "title": "변분 원리와 라그랑주 방정식",
      "category": "chapter_opener",
      "startPage": "53",
      "endPage": "53",
      "pageCount": "1",
      "pageLabelStart": "34",
      "pageLabelEnd": "34",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.0 · 1부: 장 개요",
          "fileName": "GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.0_Variational_Principles_and_Lagranges_Equations/GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_infographic.png",
            "alt": "GM 2.0 part01 Variational Principles and Lagranges Equations chapter opener infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.0_Variational_Principles_and_Lagranges_Equations/GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_infographic.png"
          },
          "content": "## 제2장 변분 원리와 라그랑주 방정식"
        },
        {
          "id": "GM_2-0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.0 · 1부: 장 개요",
          "fileName": "GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.0_Variational_Principles_and_Lagranges_Equations/GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_infographic.png",
            "alt": "GM 2.0 part01 Variational Principles and Lagranges Equations chapter opener infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.0_Variational_Principles_and_Lagranges_Equations/GM_2.0_part01_Variational_Principles_and_Lagranges_Equations_chapter_opener_infographic.png"
          },
          "content": "제2장 변분 원리와 라그랑주 방정식입니다."
        }
      ]
    },
    {
      "id": "GM_2.1",
      "title": "해밀턴의 원리",
      "category": "minor_unit",
      "startPage": "53",
      "endPage": "55",
      "pageCount": "3",
      "pageLabelStart": "34",
      "pageLabelEnd": "36",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.1 · 1부: 해밀턴 원리와 배치 공간",
          "fileName": "GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_infographic.png",
            "alt": "GM 2.1 part01 Hamiltons Principle hamiltons principle and configuration space infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_infographic.png"
          },
          "content": "## 2.1 해밀턴의 원리 (HAMILTON'S PRINCIPLE)\n\n1장에서 소개된 라그랑주 방정식의 유도 과정은 계의 순간적인 상태와 그 순간 상태 주변의 미소 가상 변위, 즉 달랑베르의 원리와 같은 \"미분 원리\"를 고려하는 것에서 출발했습니다. 하지만 시간 $t_1$과 $t_2$ 사이에서 계가 나타내는 전체 운동과, 이 실제 운동으로부터 일어나는 미소 가상 변화를 고려하는 원리로부터도 라그랑주 방정식을 얻을 수 있습니다. 이러한 성격을 지닌 원리를 \"적분 원리\"라고 부릅니다.\n\n이 적분 원리를 제시하기에 앞서, \"시간 $t_1$과 $t_2$ 사이에서 계의 운동\"이라는 표현이 가지는 의미를 더 정확한 언어로 정의해야 합니다. 어떤 계의 순간적인 배치는 $n$개의 일반화 좌표 $q_1, ..., q_n$의 값으로 기술되며, 이는 $q$들이 $n$개의 좌표축을 이루는 데카르트 초공간(Cartesian hyperspace) 내의 한 특정 점에 대응합니다. 따라서 이 $n$차원 공간을 배치 공간(configuration space)이라고 부릅니다.\n\n시간이 흐름에 따라 계의 상태가 변하면, 배치 공간 안에서 계를 나타내는 점(계점)이 이동하며 하나의 곡선을 그리게 되는데, 이를 \"계의 운동 경로\"라고 합니다. 여기서 시간은 곡선의 매개변수로 공식화할 수 있으며, 경로 상의 각 점에는 하나 이상의 시간 값이 대응됩니다. 일반화 좌표가 반드시 일반적인 위치 좌표일 필요는 없는 것처럼, 배치 공간 역시 실제의 물리적인 3차원 공간과 필연적인 연결 고리가 없다는 점에 유의해야 합니다. 배치 공간에서의 운동 경로는 실제 입자가 공간에서 그리는 경로와 아무런 유사성이 없으며, 경로 위의 각 점은 어떤 주어진 순간에 계 전체가 가지는 배치를 나타냅니다.\n\n> **[그림 2.1 시각 자료 설명]** > 교재의 그림 2.1(35페이지)은 가로축을 $x$, 세로축을 $y$로 하는 2차원 평면 형태로 배치 공간을 단순화하여 시각화하고 있습니다. 그래프 안에는 시간 $t_1$에서의 계의 위치(시작점)와 시간 $t_2$에서의 계의 위치(끝점)를 잇는 굵고 매끄러운 곡선이 그려져 있는데, 이것이 바로 계점이 배치 공간에서 실제로 그리며 나아가는 '실제 운동 경로'입니다. 그리고 이 실제 경로의 $t_1$과 $t_2$ 지점 사이를 마치 물방울이나 주머니 모양처럼 위아래로 둘러싸며 비선형으로 구부러져 있는 평행한 선들이 존재합니다. 이는 실제 경로에서 미세하게 벗어난 수많은 '가상적인 대안 경로(이웃하는 경로)'들을 시각적으로 보여줍니다. 모든 경로는 반드시 고정된 두 시작점($t_1$)과 끝점($t_2$)을 공유한다는 점이 시각적으로 강조되어 있습니다.\n> \n> \n\n적분 형태의 해밀턴 원리는 (구속력을 제외한) 모든 힘이 좌표, 속도 및 시간의 함수일 수 있는 일반화된 스칼라 퍼텐셜로부터 유도될 수 있는 역학계의 운동을 기술합니다. 이러한 계를 단성계(monogenic system)라고 정의합니다. 만약 퍼텐셜이 오직 위치 좌표만의 명시적인 함수라면, 이 단성계는 보존계(conservative system)이기도 합니다(1.2절 참조).\n\n단성계에 대한 해밀턴의 원리는 다음과 같이 정의할 수 있습니다.\n\n> 시간 $t_1$에서 시간 $t_2$까지 계의 운동은 다음과 같은 선적분(작용 또는 작용 적분이라 불림)이 실제 운동 경로에 대해 정지값(stationary value)을 갖도록 일어납니다.\n> \n> \n\n$$I = \\int_{t_1}^{t_2} L \\, dt$$\n\n> 여기서 $L = T - V$ (라그랑지안) 입니다.\n> \n>"
        },
        {
          "id": "GM_2-1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.1 · 1부: 해밀턴 원리와 배치 공간",
          "fileName": "GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_infographic.png",
            "alt": "GM 2.1 part01 Hamiltons Principle hamiltons principle and configuration space infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part01_Hamiltons_Principle_hamiltons_principle_and_configuration_space_infographic.png"
          },
          "content": "여러분 안녕하세요. 오늘 강의에서는 제2장 변분 원리와 라그랑주 방정식의 첫 번째 주제인 해밀턴의 원리에 대해 알아보겠습니다.\n\n우리가 지난 1장에서 배웠던 라그랑주 방정식의 유도 과정은 계의 순간적인 상태와, 그 순간 상태 주변에서 일어나는 아주 미세한 가상 변위를 고려하는 것에서 출발했습니다. 다시 말해 달랑베르의 원리처럼 아주 짧은 한 순간을 다루는 미분 원리를 바탕으로 삼았었죠. 하지만 라그랑주 방정식을 얻을 수 있는 또 다른 길이 있습니다. 바로 처음 시간과 나중 시간 사이에서 물리계가 나타내는 전체 운동을 바라보고, 이 실제 운동으로부터 아주 미세하게 변화한 가상 운동들을 함께 고려하는 방법입니다. 이처럼 전체 과정을 아우르는 성격을 지닌 원리를 우리는 적분 원리라고 부릅니다.\n\n이 적분 원리를 본격적으로 설명하기 전에, 우리가 무심코 쓰는 처음 시간과 나중 시간 사이에서 물리계가 운동한다는 표현이 어떤 물리적 의미를 갖는지 훨씬 더 정확한 언어로 정리할 필요가 있습니다. 어떤 물리계가 특정한 한 순간에 어떤 상태로 배치되어 있는지는 여러 개의 일반화 좌표 값들을 이용해 나타낼 수 있습니다. 이 좌표들의 개수를 엔 개라고 해 봅시다. 이 엔 개의 일반화 좌표들은 각각 하나의 독립된 좌표축이 될 수 있습니다. 따라서 이 좌표축들이 모이면 엔 차원의 데카르트 초공간을 이루게 되고, 계의 순간적인 배치는 이 공간 안의 특정한 점 하나로 표현할 수 있습니다. 우리는 이 엔 차원의 가상 공간을 배치 공간이라고 부릅니다.\n\n시간이 흐름에 따라 물리계의 상태가 변하면, 배치 공간 안에서 계를 나타내는 점인 계점도 함께 이동하게 됩니다. 이 점이 연속적으로 움직이면서 공간 속에 하나의 선을 그리게 되는데, 이를 계의 운동 경로라고 부릅니다. 여기서 시간은 이 곡선의 형태를 결정하는 하나의 매개변수 역할을 합니다. 즉, 경로 위에 놓인 각각의 점들은 저마다 하나 이상의 시간 값과 짝을 이루고 있는 셈입니다. 한 가지 주의할 점은, 우리가 사용하는 일반화 좌표가 반드시 우리가 눈으로 보는 일반적인 위치 좌표일 필요는 없다는 것입니다. 마찬가지로 이 배치 공간 역시 우리가 살아가는 실제 물리적인 삼차원 공간과 직접적인 연결 고리가 없습니다. 따라서 배치 공간 안에서 점이 그리는 운동 경로는 실제 입자가 삼차원 공간에서 움직이는 궤적과 아무런 상관이 없으며, 그 곡선 위에 찍힌 점 하나하나가 특정 순간에 계 전체가 어떤 배치 상태에 있는지를 통째로 대변할 뿐입니다.\n\n이 배치 공간을 머릿속으로 시각화해 볼까요? 가로축과 세로축이 있는 평면 형태의 이차원 배치 공간이 있다고 상상해 보세요. 그래프 안에는 처음 시간에서의 계의 위치인 시작점과, 나중 시간에서의 계의 위치인 끝점이 점으로 찍혀 있고, 이 두 점을 매끄럽게 연결하는 굵은 곡선이 하나 있습니다. 이것이 바로 계를 나타내는 점이 배치 공간 속에서 실제로 움직인 실제 운동 경로입니다. 그리고 이 실제 경로의 시작점과 끝점 사이를 마치 물방울이나 주머니 모양처럼 위아래로 둘러싸며 불룩하게 구부러져 있는 평행한 선들이 존재합니다. 이것들은 실제 경로에서 미세하게 벗어난 수많은 가상적인 대안 경로들, 즉 이웃하는 경로들을 의미합니다. 여기서 중요한 점은 어떤 경로를 선택하든 처음 시간의 시작점과 나중 시간의 끝점만큼은 모두가 똑같이 공유하고 있다는 사실입니다.\n\n이제 해밀턴의 원리가 적용되는 대상을 좁혀 보겠습니다. 적분 형태의 해밀턴 원리는 물리계에 작용하는 힘 중에서 구속력을 제외한 모든 힘이 좌표와 속도, 그리고 시간의 함수로 표현되는 일반화된 스칼라 퍼텐셜로부터 유도될 수 있는 역학계의 운동을 다룹니다. 우리는 이러한 역학계를 단성계라고 정의합니다. 만약 이 퍼텐셜이 속도나 시간과는 무관하게 오직 위치 좌표만의 함수로만 이루어져 있다면, 이 단성계는 우리가 잘 아는 에너지 보존 법칙이 성립하는 보존계가 됩니다.\n\n그럼 단성계에 적용되는 해밀턴의 원리를 말로 정의해 보겠습니다. 처음 시간에서 나중 시간까지 물리계가 운동할 때, 계가 실제로 이동하는 경로는 작용 또는 작용 적분이라고 불리는 선적분 값이 정지값을 갖도록 하는 경로입니다. 여기서 정지값을 갖는다는 것은 수학적으로 첫 번째 도함수가 영이 되는 것과 같은 의미로, 실제 경로를 따라 계산한 적분 값이 그 주변의 미세한 가상 경로들을 따라 계산한 값들과 일차 미소량 수준까지 완벽하게 일치한다는 뜻입니다.\n\n이 작용 적분을 물리량으로 설명하자면, 작용 적분은 처음 시간부터 나중 시간까지 라그랑지안을 시간에 대해 적분한 값입니다. 여기서 피적분 함수인 라그랑지안은 계의 전체 운동에너지에서 전체 퍼텐셜에너지를 뺀 값으로 정의됩니다. 결론적으로 해밀턴의 원리란, 물리계가 수많은 가상 경로 중에서 운동에너지와 퍼텐셜에너지의 차이를 시간에 대해 누적한 작용 적분 값을 정지상태로 만드는 단 하나의 실제 경로를 선택해 운동한다는 위대한 원리입니다."
        },
        {
          "id": "GM_2-1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.1 · 2부: 정지 작용과 라그랑주 방정식",
          "fileName": "GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_infographic.png",
            "alt": "GM 2.1 part02 Hamiltons Principle stationary action and lagrange equations infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_infographic.png"
          },
          "content": "즉, 계의 점(system point)이 시간 $t_{1}$에서의 위치로부터 시간 $t_{2}$에서의 위치로 이동할 수 있는 모든 가능한 경로들 중에서, 실제로는 식 (2.1)의 적분 값이 정지(stationary, 변분이 0인 상태) 값을 갖게 되는 그러한 경로를 따라 실제로 이동하게 됩니다. 선적분(line integral)이 '정지 값'을 갖는다는 단어의 의미는, 주어진 경로를 따라 계산한 적분 값이 그 주변의 다른 경로들(즉, 원래 경로로부터 미소 변위만큼 차이가 나는 경로들)을 따라 계산한 적분 값과 1차 미소량(first-order infinitesimals)의 범위 내에서 서로 같은 값을 가짐을 뜻합니다.\n\n> **[그림 2.1: 배위 공간에서 계의 점이 이동하는 경로에 대한 시각적 설명]**\n> 원문에서 언급된 그림 2.1은 가로축을 $x$, 세로축을 $y$로 하는 2차원 평면(배위 공간을 시각적으로 단순화하여 표현한 평면)을 보여줍니다.\n> * 평면 위에는 시간 $t_{1}$에 해당하는 출발점과 시간 $t_{2}$에 해당하는 도착점이 명확하게 점으로 표시되어 있습니다.\n> * 이 두 정점($t_{1}$과 $t_{2}$) 사이를  곧게 연결하는 중심 곡선이 존재하는데, 이것이 바로 계가 실제로 선택하여 이동하는 **'실제 경로'*입니다.\n>  이 실제 경로의 주변으로는 출발점 $t_{1}$과 도착점 $t_{2}$를 공유하면서 양옆으로 유연하게 물결치듯 불룩하게 부풀어 오른 양 모양의 곡선들이 그려져 있습니다. 이 곡선들은 실제 경로에서 미소하게 벗어난 **'가능한 주변 경로(변이된 경로)'*들을 시각적으로 보여줍니다.\n>  즉, 어떤 주변 경로를 선택하더라도 출발점과 도착점의 위치와 시간($t_{1}$, $t_{2}$)은 단단히 고정되어 있으며, 실제 경로와 주변 경로들 간의 적분 값 차이가 1차 미소량 수준에서 사라진다는 '정지 값'의 개념을 기하학적으로 형상화하고 있습니다.\n> \n> \n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_1/fig_2_1.svg\" alt=\"그림 2.1: 배치 공간에서 계점의 경로\" />\n  <figcaption>그림 2.1. 배치 공간에서 계점의 경로.</figcaption>\n</figure>\n\n선적분이 이처럼 정지 값을 가진다는 개념은 일반적인 함수론에서 첫 번째 도함수(1계 도함수)가 0이 되는 것(즉, 극대·극소·변곡점에서 기울기가 0이 되는 것)과 대응됩니다.\n\n우리는 고정된 시간 $t_{1}$과 $t_{2}$에 대하여 선적분 $I$의 변분(variation)이 0이 된다고 표현함으로써 해밀턴의 원리를 다음과 같이 요약할 수 있습니다.\n\n$$\\delta I = \\delta \\int_{t_{1}}^{t_{2}} L(q_{1}, ..., q_{n}, \\dot{q}_{1}, ..., \\dot{q}_{n}, t) \\, dt = 0 \\tag{2.2}$$\n\n계의 구속 조건이 홀로노믹(holonomic)할 때, 식 (2.2)의 해밀턴의 원리는 라그랑주 방정식(식 1.57)이 성립하기 위한 필요충분조건이 됩니다. 따라서 해밀턴의 원리가 라그랑주 방정식으로부터 직접 유도된다는 것을 보일 수 있습니다.\n\n그러나 우리는 그 역, 즉 해밀턴의 원리로부터 라그랑주 방정식이 유도된다는 것을 증명할 것이며, 이것이 훨씬 더 중요한 정리입니다. 해밀턴의 원리가 운동 방정식을 유도하기 위한 충분조건이 된다는 점 덕분에, 우리는 뉴턴의 운동 법칙 대신 해밀턴의 원리를 기본 가설로 삼아 모노제닉(monogenic) 계의 역학을 구축할 수 있게 됩니다.\n\n이러한 정식화는 여러 장점을 가집니다. 예를 들어, 적분 $I$는 $L$을 표현하는 데 어떤 일반화 좌표계를 사용하더라도 명백하게 불변(invariant)이므로, 일반화 좌표가 어떻게 변환되든 관계없이 운동 방정식은 항상 라그랑주 형태를 유지해야만 합니다. 더 중요한 점은, 이와 같은 변분 원리(variational principle) 형식의 정식화는 장의 이론(theory of fields)에서처럼 표면적으로는 비역학적인 계를 고전 역학의 수학적 옷을 입혀 기술하고자 할 때 일반적으로 따르게 되는 경로라는 사실입니다.\n\n### [번역 끝]"
        },
        {
          "id": "GM_2-1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.1 · 2부: 정지 작용과 라그랑주 방정식",
          "fileName": "GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_infographic.png",
            "alt": "GM 2.1 part02 Hamiltons Principle stationary action and lagrange equations infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.1_Hamiltons_Principle/GM_2.1_part02_Hamiltons_Principle_stationary_action_and_lagrange_equations_infographic.png"
          },
          "content": "자, 여러분, 지금부터 우리가 다룰 주제를 머릿속으로 상상하면서 귀로만 들어보세요.\n\n물리학에서 전체 물리적인 계의 상태를 하나의 점으로 나타낸 것을 계의 점이라고 부릅니다. 이 계의 점이 처음 시작하는 시간에서의 위치로부터 나중 끝나는 시간에서의 위치로 이동한다고 생각해 봅시다. 이 두 지점 사이를 이동할 수 있는 경로는 무수히 많을 텐데요, 실제 자연계에서 이 계의 점은 여러 가지 가능한 경로들 중에서도 아주 특별한 경로를 따라 이동하게 됩니다. 그 특별한 경로가 바로 어떤 특정한 선적분 값이 정지 값을 갖게 되는 경로입니다. 여기서 정지 값을 갖는다는 건 변분이 영이 된다는 뜻인데요, 조금 더 쉽게 설명해 드릴게요.\n\n우리가 어떤 하나의 경로를 선택해서 그 경로를 따라 선적분을 계산했다고 해봅시다. 그리고 그 경로와 아주 미세한 차이만 나는, 즉 원래 경로에서 아주 살짝만 벗어난 주변의 다른 경로들을 생각하는 거죠. 선적분이 정지 값을 갖는다는 단어의 의미는, 원래 경로를 따라 계산한 적분 값과 그 주변의 미세하게 차이 나는 경로들을 따라 계산한 적분 값을 비교했을 때, 그 차이가 일차 미소량 범위 내에서 서로 같아져서 완전히 사라짐을 뜻합니다.\n\n이 상황을 그림으로 한번 그려볼까요? 가로축과 세로축이 있는 2차원 평면이 있다고 상상해 보세요. 이 평면 위에 처음 시작하는 시간의 출발점과 나중 끝나는 시간의 도착점이 각각 점으로 콕 찍혀 있습니다. 이 두 정점 사이를 곧게 연결하며 지나가는 중심 곡선이 하나 보이실 텐데요, 이것이 바로 우리 물리계가 실제로 선택해서 이동하는 실제 경로입니다. 그리고 이 실제 경로의 양옆을 보시면, 출발점과 도착점은 똑같이 공유하면서 마치 물결치듯이 유연하게 불룩 솟아오른 여러 개의 곡선들이 함께 그려져 있습니다. 이 곡선들이 바로 실제 경로에서 아주 미세하게 벗어난, 변이된 주변 경로들을 시각적으로 보여주는 것입니다. 즉, 어떤 주변 경로를 마음대로 선택하더라도 출발점과 도착점의 위치와 시간은 단단하게 고정되어 있고, 실제 경로와 주변 경로들 간의 선적분 값 차이가 일차 미소량 수준에서 완전히 사라진다는 기하학적인 개념을 설명하고 있는 그림입니다.\n\n선적분이 이처럼 정지 값을 가진다는 개념은, 우리가 일반적인 수학의 함수론에서 배운 내용과 똑같습니다. 바로 일계 도함수, 즉 첫 번째 도함수가 영이 되는 것과 대응됩니다. 우리가 함수의 그래프에서 극대점이나 극소점, 혹은 변곡점에서 접선의 기울기가 영이 되는 것을 떠올리시면 이해하기 쉬우실 겁니다.\n\n이제 이 개념을 바탕으로 해밀턴의 원리를 수학적으로 요약해 보겠습니다. 처음 시작 시간과 나중 끝나는 시간을 단단히 고정해 둔 상태에서, 라그랑지안이라는 물리량을 시간에 대해 적분한 값, 즉 액션 인테그랄의 변분을 취하면 그 값이 영이 됩니다. 여기서 라그랑지안은 여러 개의 일반화 좌표와 이 일반화 좌표를 시간에 대해 미분한 일반화 속도, 그리고 시간의 함수로 이루어져 있는데요, 이 라그랑지안을 처음 시간부터 나중 시간까지 선적분해 준 전체 값의 미세한 변화량인 변분이 결국 영과 같아진다는 뜻입니다. 이것이 바로 해밀턴의 원리입니다.\n\n만약 우리 물리계에 가해지는 구속 조건들이 홀로노믹하다면, 방금 말씀드린 변분 값이 영이 된다는 해밀턴의 원리는 라그랑주 방정식이 성립하기 위한 필요충분조건이 됩니다. 그렇기 때문에 해밀턴의 원리가 라그랑주 방정식으로부터 직접 유도된다는 것을 수학적으로 증명할 수 있습니다.\n\n하지만 우리는 그 반대 방향, 즉 변분 값이 영이라는 해밀턴의 원리로부터 거꾸로 라그랑주 방정식을 유도해 낼 것입니다. 물리학에서는 이 방향이 훨씬 더 중요한 정리로 취급됩니다. 왜냐하면 해밀턴의 원리가 운동 방정식을 유도하기 위한 충분조건이 되어 주기 때문에, 우리는 그동안 익숙했던 뉴턴의 운동 법칙을 쓰지 않고도, 이 해밀턴의 원리 자체를 가장 기초적인 기본 가설로 삼아서 모노제닉 계의 거대한 역학 체계를 완전히 새로 구축할 수 있기 때문입니다.\n\n이렇게 해밀턴의 원리를 중심으로 역학을 정식화하면 아주 강력한 장점들이 생깁니다. 예를 들어서, 라그랑지안을 표현할 때 어떤 형태의 일반화 좌표계를 선택해서 사용하든지 간에, 이를 시간에 대해 적분한 전체 변분 값은 수학적으로 명백하게 변하지 않고 항상 일정하게 유지됩니다. 따라서 우리가 좌표계를 어떻게 바꾸고 변환하든 상관없이, 최종적으로 얻어지는 운동 방정식은 언제나 변함없는 라그랑주 방정식의 형태를 유지하게 됩니다.\n\n그리고 이보다 훨씬 더 중요한 점이 있습니다. 이와 같이 변분 원리 형식으로 역학을 기술하는 방법은, 겉보기에는 전혀 역학적이지 않아 보이는 계들, 예를 들어 전자기장이나 양자장 같은 장의 이론을 다룰 때도 아주 유용합니다. 즉, 비역학적인 대상에 고전 역학이라는 세련된 수학적 옷을 입혀서 깔끔하게 기술하고자 할 때, 물리학자들이 언제나 예외 없이 선택하고 걸어가는 가장 표준적인 경로가 바로 이 변분 원리이기 때문입니다."
        }
      ]
    },
    {
      "id": "GM_2.2",
      "title": "변분법의 몇 가지 기법",
      "category": "minor_unit",
      "startPage": "55",
      "endPage": "63",
      "pageCount": "9",
      "pageLabelStart": "36",
      "pageLabelEnd": "44",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.2 · 1부: 변분 문제와 매개변수화된 경로",
          "fileName": "GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_infographic.png",
            "alt": "GM 2.2 part01 Some Techniques of the Calculus of Variations variational problem and parametric paths infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_infographic.png"
          },
          "content": "## 2.2 변분법의 몇 가지 기법 (SOME TECHNIQUES OF THE CALCULUS OF VARIATIONS)\n\n라그랑주 방정식이 식 (2.2)로부터 유도된다는 것을 증명하기에 앞서, 우리는 먼저 변분법(calculus of variations)의 방법들을 살펴보아야 합니다. 이 미적분학의 주된 문제는 어떤 주어진 선적분(line integral)이 정지된 값(stationary value, 극대·극소 또는 변하지 않는 상태)을 갖도록 하는 곡선을 찾는 것이기 때문입니다.\n\n먼저 문제를 본질적으로 1차원적인 형태로 고려해 보겠습니다. 우리에게는 두 값 $x_1$과 $x_2$ 사이의 경로 $y = y(x)$ 위에서 정의되는 함수 $f(y, \\dot{y}, x)$가 있습니다. 여기서 $\\dot{y}$는 $x$에 대한 $y$의 도함수를 의미합니다.\n\n$$\\dot{y} \\equiv \\frac{dy}{dx}$$\n\n우리가 찾고자 하는 것은 $x_1$과 $x_2$ 사이에서 함수 $f$의 선적분 $J$가, 실제 올바른 함수 $y(x)$로부터 미소하게(infinitesimally) 벗어난 주변 경로들과 비교했을 때 정지된 값을 갖도록 하는 특정 경로 $y(x)$입니다.\n\n$$J = \\int_{x_1}^{x_2} f(y, \\dot{y}, x) dx$$\n\n여기서 변수 $x$는 매개변수 $t$와 같은 역할을 하며, 우리는 $y(x_1) = y_1$, $y(x_2) = y_2$를 만족하는 변형된 경로들만을 고려합니다. (그림 2.2 참조) \n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_2/fig_2_2.svg\" alt=\"그림 2.2: 일차원 극값 문제에서 y(x)의 변형 경로들\" />\n  <figcaption>그림 2.2. 일차원 극값 문제에서 y(x)의 변형 경로들.</figcaption>\n</figure>\n\n> \n> **[시각 자료 설명: 그림 2.2 1차원 극값 문제에서 함수 $y(x)$의 변형된 경로들]** 교재의 **그림 2.2**는 세로축을 $y$, 가로축을 $x$로 하는 2차원 평면 그래프입니다. 그래프 내부에는 왼쪽 아래의 고정된 시작점 $(x_1, y_1)$과 오른쪽 위의 고정된 끝점 $(x_2, y_2)$이 표시되어 있습니다.\n> 이 두 점 사이를 연결하는 매끄러운 곡선 경로들이 그려져 있는데, 하나는 우리가 구하고자 하는 '실제 올바른 경로(correct path)'이고, 그 주변으로 이 경로에서 미세하게 위아래로 물결치듯 벗어난 '변형된 주변 경로들(varied paths)'이 함께 나타나 있습니다.\n> \n> \n> \n> **※ 주의 (원문 주석):** 이 그림 2.2는 물리적인 '배형 공간(configuration space)'을 나타내는 것이 아닙니다. 만약 1차원 배형 공간으로만 생각한다면, 올바른 경로와 변형된 경로 모두 $y_1$과 $y_2$를 연결하는 직선 선분 상에 존재하게 되며, 단지 $y$와 $x$ 사이의 함수 관계(즉, 시간에 따라 그 선분 위를 움직이는 방식)만 달라질 뿐입니다. 본 문제에서 이것이 '1차원적'이라고 불리는 이유는 $y$가 독립적인 공간 좌표가 아니라, $x$에 종속된 하나의 함수이기 때문입니다.\n> \n> \n\n---\n\n우리는 이 문제를 함수에서 정지점(stationary points, 극점)을 찾을 때 사용하는 익숙한 미분적분학의 도구들을 활용할 수 있는 형태로 바꾸고자 합니다.\n\n$J$는 올바른 경로에 대해 임의의 이웃한 경로와 비교했을 때 정지된 값을 가져야 하므로, 무한소 매개변수 $\\alpha$로 라벨을 붙인 특정 이웃 경로들의 집합에 대해 그 변분(variation)이 0이 되어야 합니다. 이러한 경로들의 집합을 $y(x, \\alpha)$로 나타낼 수 있으며, $\\alpha = 0$일 때의 $y(x, 0)$이 실제 올바른 경로를 나타내게 됩니다.\n\n예를 들어, 양 끝점인 $x = x_1$과 $x = x_2$에서 $0$이 되는 임의의 함수 $\\eta(x)$를 선택한다면, 변형된 경로들의 집합을 다음과 같이 표현할 수 있습니다.\n\n$$y(x, \\alpha) = y(x, 0) + \\alpha \\eta(x)$$\n\n단순화를 위해, 실제 올바른 경로 $y(x)$와 보조 함수 $\\eta(x)$는 모두 잘 정의된 함수(well-behaved functions)라고 가정합니다. 즉, $x_1$과 $x_2$ 사이에서 연속적이고 특이점(singularity)이 없으며, 같은 구간 내에서 연속적인 1계 및 2계 도함수를 가집니다.\n\n이러한 매개변수적 곡선 가족(parametric family of curves)에 대하여, 식 (2.3)의 선적분 $J$ 역시 $\\alpha$에 대한 함수가 됩니다.\n\n$$J(\\alpha) = \\int_{x_1}^{x_2} f(y(x, \\alpha), \\dot{y}(x, \\alpha), x) dx$$\n\n따라서 정지점을 얻기 위한 조건은 우리가 잘 알고 있는 다음의 친숙한 식과 같습니다.\n\n$$\\left( \\frac{dJ}{d\\alpha} \\right)_{\\alpha=0} = 0$$\n\n적분 기호 아래에서 미분하는 통상적인 방법을 사용하면, 우리는 다음을 얻을 수 있습니다.\n\n$$\\frac{dJ}{d\\alpha} = \\int_{x_1}^{x_2} \\left( \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial \\alpha} + \\frac{\\partial f}{\\partial \\dot{y}} \\frac{\\partial \\dot{y}}{\\partial \\alpha} \\right) dx$$\n\n이 중 두 번째 적분 항을 항별로 나누어 고려해 보겠습니다:\n\n$$\\int_{x_1}^{x_2} \\frac{\\partial f}{\\partial \\dot{y}} \\frac{\\partial \\dot{y}}{\\partial \\alpha} dx = \\int_{x_1}^{x_2} \\frac{\\partial f}{\\partial \\dot{y}} \\frac{\\partial^2 y}{\\partial x \\partial \\alpha} dx$$\n\n부분적분(integration by parts)을 시행하면, 이 적분식은 다음과 같이 변형됩니다.\n\n$$\\int_{x_1}^{x_2} \\frac{\\partial f}{\\partial \\dot{y}} \\frac{\\partial^2 y}{\\partial x \\partial \\alpha} dx = \\left. [cite_start]\\frac{\\partial f}{\\partial \\dot{y}} \\frac{\\partial y}{\\partial \\alpha} \\right|_{x_1}^{x_2} - \\int_{x_1}^{x_2} \\frac{d}{dx} \\left( \\frac{\\partial f}{\\partial \\dot{y}} \\right) \\frac{\\partial y}{\\partial \\alpha} dx$$\n\n모든 변형된 곡선들이 반드시 고정된 두 끝점 $(x_1, y_1)$과 $(x_2, y_2)$를 지나야 한다는 조건이 있으므로, $x_1$과 $x_2$에서 $\\alpha$에 대한 $y$의 편미분 값은 반드시 $0$이 되어야 합니다.\n\n따라서 식 (2.8)의 첫 번째 항(대괄호 항)은 사라지게 되며, 식 (2.7)은 다음과 같이 정리됩니다.\n\n$$\\frac{dJ}{d\\alpha} = \\int_{x_1}^{x_2} \\left( \\frac{\\partial f}{\\partial y} - \\frac{d}{dx} \\frac{\\partial f}{\\partial \\dot{y}} \\right) \\frac{\\partial y}{\\partial \\alpha} dx$$\n\n그러므로 정지 값을 갖기 위한 조건인 식 (2.6)은 결과적으로 다음 방정식과 동등합니다.\n\n$$\\int_{x_1}^{x_2} \\left( \\frac{\\partial f}{\\partial y} - \\frac{d}{dx} \\frac{\\partial f}{\\partial \\dot{y}} \\right) \\left( \\frac{\\partial y}{\\partial \\alpha} \\right)_0 dx = 0$$"
        },
        {
          "id": "GM_2-2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.2 · 1부: 변분 문제와 매개변수화된 경로",
          "fileName": "GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_infographic.png",
            "alt": "GM 2.2 part01 Some Techniques of the Calculus of Variations variational problem and parametric paths infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part01_Some_Techniques_of_the_Calculus_of_Variations_variational_problem_and_parametric_paths_infographic.png"
          },
          "content": "반갑습니다 여러분. 이번 시간에는 2.2절, 변분법의 몇 가지 기법에 대해 알아보겠습니다.\n\n우리가 앞으로 라그랑주 방정식이 해밀턴의 원리로부터 어떻게 유도되는지 증명할 텐데요, 그전에 먼저 변분법이라는 수학적 도구를 자세히 살펴봐야 합니다. 왜냐하면 변분법의 핵심적인 목표가 바로 어떤 주어진 선적분 값이 정지된 값, 즉 극대나 극소 혹은 변하지 않는 상태를 유지하도록 만드는 곡선 경로를 찾아내는 것이기 때문입니다.\n\n이 문제를 이해하기 위해, 우선 상황을 단순화해서 본질적으로 일차원적인 형태로 고려해 보겠습니다. 우리에게 어떤 함수가 하나 주어져 있다고 상상해 봅시다. 이 함수는 첫 번째 독립변수 값과 두 번째 독립변수 값 사이의 경로 위에서 정의됩니다. 이 함수는 세 가지 요소에 의존하는데요, 바로 종속변수 값, 독립변수에 대한 종속변수의 도함수 값, 그리고 독립변수 자체입니다. 여기서 종속변수의 도함수라는 것은 독립변수의 변화량에 대한 종속변수의 변화량 비율, 즉 미분 값을 뜻합니다.\n\n우리가 최종적으로 찾고자 하는 목적은 명확합니다. 첫 번째 독립변수 지점과 두 번째 독립변수 지점 사이에서 이 함수의 선적분 값을 계산했을 때, 이 적분 값이 정지된 상태가 되도록 만드는 특별한 실제 경로를 찾는 것입니다. 여기서 정지된 상태란, 우리가 찾은 실제 올바른 함수 경로에서 아주 미세하게 벗어난 주변의 다른 이웃 경로들과 비교했을 때, 적분 값의 변화가 없는 상태를 말합니다. 이 선적분은 주어진 함수를 첫 번째 독립변수부터 두 번째 독립변수까지 독립변수에 대해 모두 누적하여 더한 값과 같습니다.\n\n이때 독립변수는 우리가 역학에서 자주 쓰는 시간 매개변수와 아주 유사한 역할을 합니다. 그리고 우리가 비교할 수 있는 변형된 경로들은 아무렇게나 생기면 안 되고, 반드시 시작점에서는 첫 번째 고정된 종속변수 값을 가져야 하고 끝점에서는 두 번째 고정된 종속변수 값을 가져야 합니다. 즉, 양 끝점이 단단히 고정된 경로들만 비교 대상으로 삼는 것이죠.\n\n이 상황을 머릿속으로 시각화해 볼까요? 가로축이 독립변수이고 세로축이 종속변수인 이차원 평면 그래프를 떠올려 보십시오. 그래프의 왼쪽 아래에는 첫 번째 독립변수와 첫 번째 종속변수로 이루어진 고정된 시작점이 있고, 오른쪽 위에는 두 번째 독립변수와 두 번째 종속변수로 이루어진 고정된 끝점이 점으로 찍혀 있습니다. 이 두 고정된 점을 연결하는 매끄러운 곡선들이 여러 개 지나가고 있는데, 그중 단 하나가 우리가 구하고자 하는 실제 올바른 경로입니다. 그리고 그 실제 경로의 위아래로 미세하게 물결치듯 파형을 그리며 벗어나 있는 곡선들이 바로 변형된 주변 경로들입니다. 듣기만 하셔도 어떤 그림인지 상상이 되시죠?\n\n여기서 한 가지 중요한 주의점을 말씀드리겠습니다. 방금 설명해 드린 그래프는 우리가 일장 등에서 다루었던 물체의 물리적인 위치들을 나타내는 배형 공간이 아닙니다. 만약 이것을 일차원 실제 배형 공간으로만 생각한다면, 올바른 경로든 변형된 경로든 모두 시작점과 끝점을 연결하는 하나의 직선 선분 위를 움직여야 합니다. 단지 그 선분 위를 시간에 따라 어떤 방식으로 속도를 바꾸며 움직이는가 하는 함수 관계만 달라질 뿐이죠. 이 문제에서 일차원적이라는 표현을 쓰는 이유는, 세로축의 변수가 독립적인 공간 좌표가 아니라 단순히 가로축 변수에 종속되어 있는 하나의 함수 관계이기 때문입니다.\n\n자, 이제 우리는 이 문제를 해결하기 위해, 함수에서 극대나 극소 같은 정지점을 찾을 때 사용하는 아주 익숙한 미분적분학의 도구들을 활용할 수 있는 형태로 변형해 보려고 합니다.\n\n우리가 찾은 올바른 경로에서 적분 값이 정지된 상태를 유지하려면, 주변의 이웃한 경로와 비교했을 때 그 적분 값의 변화량이 완전히 영이 되어야 합니다. 이를 수학적으로 다루기 위해, 무한히 작은 크기를 표현하는 매개변수를 하나 도입해서 주변 경로들을 체계적으로 표시해 보겠습니다. 이 매개변수의 크기가 완전히 영일 때가 바로 우리가 원하는 실제 올바른 경로가 되고, 매개변수 값이 커질수록 실제 경로에서 더 많이 벗어나는 경로들의 집합을 만드는 것입니다.\n\n예를 들어, 시작하는 독립변수 지점과 끝나는 독립변수 지점, 즉 양 끝점에서는 값이 완전히 영이 되지만 그 사이 구간에서는 자유롭게 변하는 임의의 보조 함수를 하나 선택해 봅시다. 그렇다면 변형된 경로들의 집합은 다음과 같이 표현할 수 있습니다. 임의의 매개변수 경로 함수는 실제 올바른 경로 함수에다가, 방금 말한 매개변수와 양 끝점이 영인 보조 함수를 서로 곱한 값을 더해준 것과 같습니다. 이렇게 하면 매개변수가 영일 때는 정확히 올바른 경로만 남고, 양 끝점에서는 보조 함수가 영이 되니까 항상 고정된 끝점을 지나게 됩니다. 아주 영리한 설정이죠.\n\n계산을 단순하게 만들기 위해서, 우리가 다루는 실제 올바른 경로와 보조 함수는 모두 수학적으로 아주 얌전하고 잘 정의된 함수라고 가정하겠습니다. 즉, 시작점과 끝점 사이에서 끊어지지 않고 연속적이어야 하며, 무한대로 발산하는 특이점이 없어야 합니다. 또한 부드럽게 이어져야 하므로 한 번 미분한 일계 도함수와 두 번 미분한 이계 도함수 역시 해당 구간에서 모두 끊어짐 없이 연속이어야 합니다.\n\n이렇게 매개변수가 포함된 곡선 집합을 이용하면, 우리가 처음에 정의했던 선적분 값 역시 매개변수의 크기에 따라 값이 변하는 매개변수의 함수로 바라볼 수 있게 됩니다. 즉, 이 적분은 매개변수 경로 함수와 그 도함수 함수, 그리고 독립변수로 이루어진 전체 함수를 시작 독립변수부터 끝 독립변수까지 누적해서 적분한 값이 됩니다.\n\n따라서 이 적분 함수가 정지된 극값을 갖기 위한 조건은, 우리가 미적분학에서 결론을 낼 때 쓰는 아주 친숙한 조건과 완벽히 같습니다. 바로 이 선적분 함수를 매개변수에 대해 미분한 뒤, 매개변수 값에 영을 대입했을 때 그 미분 계수가 완전히 영이 되어야 한다는 조건입니다.\n\n그럼 적분 기호 내부를 미분하는 통상적인 규칙에 따라서, 선적분 함수를 매개변수로 직접 미분해 보겠습니다. 미분을 수행하면 적분 기호 안쪽은 두 개의 항으로 나뉩니다. 첫 번째 항은 전체 함수를 종속변수로 편미분한 것에 종속변수를 매개변수로 편미분한 값을 곱한 형태입니다. 두 번째 항은 전체 함수를 종속변수의 도함수로 편미분한 것에 종속변수의 도함수를 매개변수로 편미분한 값을 곱한 형태입니다. 이 두 항을 더한 전체 식을 독립변수에 대해 처음부터 끝까지 적분해 주는 것이죠.\n\n여기서 적분 기호 안의 두 번째 항을 집중해서 따로 떼어놓고 생각해 보겠습니다. 두 번째 항에 들어있는 형태는, 전체 함수를 종속변수의 도함수로 편미분한 것에다가 종속변수를 독립변수와 매개변수로 각각 한 번씩 순서대로 편미분한 이계 편미분 값을 곱해서 독립변수에 대해 적분하는 모양입니다.\n\n이 적분식의 형태를 바꾸기 위해 고등학교 때 배운 부분적분법을 적용해 보겠습니다. 미분할 함수와 적분할 함수를 나누어 정리하면 이 식은 두 부분으로 쪼개집니다. 첫 번째 부분은 전체 함수를 종속변수의 도함수로 편미분한 것과 종속변수를 매개변수로 편미분한 것을 서로 곱한 뒤, 시작 독립변수 지점과 끝 독립변수 지점의 값을 대입하여 차이를 구하는 경계 항입니다. 그리고 두 번째 부분은 빼기 기호 뒤에 오는 새로운 적분 항인데, 전체 함수를 종속변수의 도함수로 편미분한 식을 독립변수로 한 번 더 미분하고, 여기에 종속변수를 매개변수로 편미분한 값을 곱해서 처음부터 끝까지 독립변수로 적분하는 형태가 됩니다.\n\n그런데 여기서 아주 기분 좋은 일이 일어납니다. 우리가 애초에 설정하기를, 모든 변형된 곡선들은 아무리 변형되더라도 고정된 시작점과 끝점을 반드시 지나야 한다고 강제했었죠? 그 말은 독립변수가 시작점일 때와 끝점일 때, 매개변수가 아무리 변해도 종속변수의 값은 고정되어 있어서 변하지 않는다는 뜻입니다. 따라서 독립변수의 시작 지점과 끝 지점에서는 매개변수에 대한 종속변수의 편미분 값이 무조건 영이 될 수밖에 없습니다.\n\n이 성질 덕분에 방금 부분적분으로 만들어진 첫 번째 경계 항, 즉 값을 대입해서 빼주어야 했던 대괄호 항은 통째로 영이 되어 깨끗하게 사라집니다. 결과적으로 두 번째 적분 항만 남게 되므로, 전체 선적분의 매개변수 미분 식은 다음과 같이 아주 깔끔하게 정리됩니다.\n\n시작 독립변수부터 끝 독립변수까지 적분을 해 주는데, 적분 기호 안의 알맹이는 대괄호로 묶여 있습니다. 대괄호 안을 보시면, 전체 함수를 종속변수로 편미분한 값에서, 전체 함수를 종속변수의 도함수로 편미분한 식을 다시 독립변수로 미분한 값을 빼준 형태입니다. 그리고 이 대괄호 전체 식에다가 종속변수를 매개변수로 편미분한 값을 곱해준 형태가 됩니다.\n\n그러므로 최종적으로 이 선적분 함수가 극값을 가져서 정지 상태가 되기 위한 조건은, 방금 구한 미분 식에 매개변수 영을 대입했을 때 영이 되어야 하므로 다음의 최종 방정식과 완전히 동등해집니다.\n\n적분 기호 안에서 전체 함수를 종속변수로 편미분한 값 빼기, 전체 함수를 종속변수의 도함수로 편미분한 것을 독립변수로 미분한 값, 이 대괄호 뭉치에다가 매개변수가 영일 때의 종속변수의 매개변수 편미분 값을 곱해줍니다. 이 전체를 시작 독립변수부터 끝 독립변수까지 누적하여 적분한 총합이 완전히 영이 되어야 한다는 결론에 도달하게 됩니다."
        },
        {
          "id": "GM_2-2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.2 · 2부: 기본 보조정리와 델타 표기",
          "fileName": "GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_infographic.png",
            "alt": "GM 2.2 part02 Some Techniques of the Calculus of Variations fundamental lemma and delta notation infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_infographic.png"
          },
          "content": "이제, 식 (2.9)에 등장하는 $\\alpha$에 대한 $y$의 편미분은 연속성과 양 끝점 조건을 만족한다는 점을 제외하면 완전히 임의적인 $x$의 함수입니다. 예를 들어, 식 (2.4)로 주어지는 변형된 경로들의 특정한 매개변수 가문(family)에 대해서, 이 편미분은 곧 임의의 함수 $\\eta(x)$가 됩니다. (여기서 '변형된 경로들의 가문'이란, [그림 2.2]에서 볼 수 있듯이 양 끝점 $(x_1, y_1)$과 $(x_2, y_2)$를 단단히 고정해 둔 채, 그 사이를 지나는 실제 올바른 경로 $y(x,0)$ 주위로 매개변수 $\\alpha$의 변화에 따라 수없이 다양하게 그려지는 주변 곡선들의 모임을 시각적으로 나타낸 것입니다.) \n\n따라서 우리는 식 (2.9)에 변분법의 이른바 '기본 보조정리(fundamental lemma)'를 적용할 수 있습니다. 이 보조정리에 따르면, 2계 도함수까지 연속인 모든 임의의 함수 $\\eta(x)$에 대하여 \n\n$$\\int_{x_{1}}^{x_{2}}M(x)\\eta(x)dx=0$$\n\n이 성립한다면, 함수 $M(x)$는 구간 $(x_1, x_2)$ 전체에서 반드시 완전히 zero(0)가 되어야 합니다. 이 보조정리의 엄밀한 수학적 증명은 변분법 교과서에서 찾아볼 수 있지만, 그 타당성은 직관적으로도 쉽게 이해할 수 있습니다. 우리가 임의로 선택한 어떤 지점의 아주 가까운 주변에서만 양(+)의 값을 갖고, 그 외의 모든 곳에서는 0이 되는 함수 $\\eta(x)$를 시각적으로 구상해 볼 수 있습니다. (마치 평평한 바닥 위에서 특정 위치만 슥 솟아오른 작은 언덕 모양의 그래프를 상상하시면 됩니다.) 이러한 함수에 대해 식 (2.10)이 성립하려면, $M(x)$ 역시 우리가 (임의로) 선택한 바로 그 지점에서 0이 되어야만 하며, 결과적으로 구간 전체에서 $M(x)$가 0이어야 함을 보여줍니다.\n\n그러므로 식 (2.9)와 이 기본 보조정리로부터, 적분식 $J$가 정지(stationary) 값을 갖기 위해서는 오직 다음 조건을 만족할 때뿐이라는 결론을 얻을 수 있습니다.\n\n$$\\frac{\\partial f}{\\partial y}-\\frac{d}{dx}\\left(\\frac{\\partial f}{\\partial \\dot{y}}\\right)=0$$\n\n이때 다음과 같이 정의되는 미분량은,\n\n$$\\left(\\frac{\\partial y}{\\partial\\alpha}\\right)_{0}d\\alpha\\equiv\\delta y$$\n\n실제 경로 $y(x)$로부터 변형된 경로가 각 지점 $x$에서 벗어난 무한소만큼의 차이를 나타내며, 이는 1장에서 도입했던 '가상 변위(virtual displacement)'에 대응합니다 (그렇기에 기호 $\\delta y$를 사용합니다). 이 개념 역시 [그림 2.2]를 통해 시각적으로 명확히 이해할 수 있습니다. 그래프 상에서 고정된 어느 한 위치 $x$를 잡고 수직 방향으로 선을 그었을 때, 기준이 되는 실제 경로의 높이와 변형된 경로의 높이 사이에 생기는 미세한 세로축 방향의 격차(화살표로 표현할 수 있는 변위)가 바로 $\\delta y$입니다.\n\n마찬가지로, 실제 경로 주변에서 일어나는 $J$의 무한소 변분은 다음과 같이 지정할 수 있습니다.\n\n$$\\left(\\frac{dJ}{d\\alpha}\\right)_{0}d\\alpha\\equiv\\delta J$$\n\n따라서 실제 경로에 대해 $J$가 정지 상태(stationary)를 유지한다는 주장은 다음과 같이 쓸 수 있으며,\n\n$$\\delta J=\\int_{x_{1}}^{x_{2}}\\left(\\frac{\\partial f}{\\partial y}-\\frac{d}{dx}\\frac{\\partial f}{\\partial\\dot{y}}\\right)\\delta y~dx=0$$\n\n이는 함수 $y(x)$가 미분방정식 (2.11)을 만족해야 함을 요구합니다. 식 (2.12)와 (2.13)을 통해 도입된 이 $\\delta$-표기법(변분 표기법)은 적분의 변분을 다룰 때 매우 편리한 속기법으로 사용할 수 있습니다. 다만, 이 표기법이 언제나 식 (2.4)와 같이 매개변수화된 변형 경로들의 가문을 수학적으로 조작하는 것을 의미한다는 점을 항상 기억해야 합니다."
        },
        {
          "id": "GM_2-2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.2 · 2부: 기본 보조정리와 델타 표기",
          "fileName": "GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_infographic.png",
            "alt": "GM 2.2 part02 Some Techniques of the Calculus of Variations fundamental lemma and delta notation infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part02_Some_Techniques_of_the_Calculus_of_Variations_fundamental_lemma_and_delta_notation_infographic.png"
          },
          "content": "이제 이 수식을 정리하는 단계에서 등장하는 변환 과정을 살펴보겠습니다. 변분법적 경로 변형을 나타내는 매개변수에 대한 함수값의 편미분은, 함수의 연속성과 양 끝점이 고정되어 있다는 조건을 만족한다면 독립변수에 대한 완전히 임의의 함수가 됩니다. 예를 들어 앞서 우리가 정의했던 변형된 경로들의 특정한 가문을 생각해보면, 이 편미분 값은 곧 양 끝점에서 영이 되는 임의의 도함수 연속 함수가 됩니다.\n\n여기서 눈으로 보지 못하시는 분들을 위해 변형된 경로들의 가문을 말로 설명해 드리겠습니다. 가로축과 세로축이 있는 평면 위에 양 끝점을 단단히 고정해 둔 상태를 상상해 보세요. 그 두 점 사이를 지나는 실제 올바른 경로가 중심에 있고, 그 주변으로 매개변수가 변함에 따라 수없이 다양하게 모양이 바뀌며 그려지는 주변 곡선들의 모임이 바로 경로들의 가문입니다.\n\n따라서 우리는 이 적분 관계식에 변분법의 이른바 기본 보조정리를 적용할 수 있습니다. 이 보조정리가 뜻하는 바는 이렇습니다. 이계 도함수까지 연속이면서 양 끝점에서 영이 되는 임의의 함수와, 또 다른 어떤 함수의 곱을 전체 구간에 대해 정적분한 값이 항상 영이 된다면, 그 곱해진 또 다른 함수는 정적분 구간 전체에서 반드시 완전한 영이 되어야 한다는 정리입니다.\n\n이 보조정리의 엄밀한 수학적 증명은 변분법 교과서에 나오지만, 직관적으로도 쉽게 이해할 수 있습니다. 우리가 임의로 선택한 어떤 아주 작은 지점의 주변에서만 볼록하게 솟아오른 양의 값을 갖고, 그 외의 모든 곳에서는 영이 되는 함수를 상상해 보는 것입니다. 마치 평평한 바닥 위에서 특정 위치만 슥 솟아오른 작은 언덕 모양의 그래프처럼 말이죠. 이러한 함수와의 정적분 값이 항상 영이 되려면, 상대방 함수 역시 우리가 선택한 바로 그 지점에서 영이 될 수밖에 없고, 이 선택은 임의의 지점 어디나 가능하므로 결국 구간 전체에서 항상 영이 되어야 함을 의미합니다.\n\n그러므로 처음에 유도했던 식과 이 기본 보조정리를 결합하면, 우리가 구하고자 하는 선적분 함수가 정지값을 갖기 위한 핵심 조건을 얻게 됩니다. 그 조건은 바로 피적분 함수를 원래 함수로 편미분한 값과, 피적분 함수를 원래 함수의 도함수로 편미분한 뒤 이를 다시 독립변수로 전미분한 값이 서로 정확히 같아야 한다는 것입니다. 즉, 전자의 편미분 값에서 후자의 미분 값을 빼면 항상 영이 되어야 합니다.\n\n이때 매개변수가 영인 기준 상태에서의 편미분 계수에 매개변수의 미세한 변화량을 곱해준 미분량은 변분 기호로 새롭게 정의됩니다. 이 값은 실제 경로로부터 변형된 경로가 각각의 독립변수 위치에서 벗어난 무한소만큼의 차이를 나타내며, 역학에서 다루는 가상 변위에 대응하므로 가상 변위 기호를 사용하여 표현합니다. 이 개념 역시 말로 풀어보면, 그래프 상에서 고정된 어느 한 가로축 위치를 잡고 세로 방향으로 선을 그었을 때, 기준이 되는 실제 경로의 높이와 변형된 경로의 높이 사이에 생기는 미세한 세로축 방향의 격차를 뜻합니다.\n\n마찬가지로, 실제 경로 주변에서 일어나는 전체 선적분 함수의 무한소 변화량인 변분은, 매개변수가 영일 때의 전체 적분 함수 미분계수에 매개변수의 미세한 변화량을 곱한 것으로 정의할 수 있습니다.\n\n따라서 실제 경로에 대해 전체 선적분 함수가 정지 상태를 유지한다는 기술은 다음과 같이 표현됩니다. 앞서 말한 피적분 함수를 원래 함수로 편미분한 값에서, 도함수 편미분의 전미분 값을 뺀 뒤, 여기에 가상 변위를 곱하여 전체 구간에 대해 정적분한 총합이 항상 영이 되어야 한다는 것입니다.\n\n이것은 결과적으로 변형된 함수가 우리가 방금 유도한 미분방정식을 완벽히 만족해야 함을 요구하는 것입니다. 이 가상 변위 기호를 도입한 변분 표기법은 적분의 미세한 변화를 다룰 때 매우 편리한 속기법으로 사용할 수 있습니다. 다만, 이 표기법이 겉보기에는 단순해 보여도 실제로는 언제나 양 끝점이 고정된 채 매개변수에 의해 부드럽게 변화하는 변형 경로들의 모임을 수학적으로 치밀하게 조작하고 있는 것이라는 점을 항상 머릿속에 기억해 두셔야 합니다."
        },
        {
          "id": "GM_2-2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_Korean_Translation",
          "kind": "translation",
          "version": "part 03",
          "label": "GM_2.2 · 3부: 최단 경로와 최소 곡면 예시",
          "fileName": "GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_infographic.png",
            "alt": "GM 2.2 part03 Some Techniques of the Calculus of Variations shortest path and minimum surface examples infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_infographic.png"
          },
          "content": "## 식 (2.11)의 몇 가지 간단한 적용 예시\n\n(이 방정식은 라그랑주 방정식과 명확하게 닮아 있습니다)를 이제 살펴보겠습니다.\n\n### 1. 평면 상의 두 점 사이의 최단 거리\n\n평면에서 길이의 미소 성분(element of length)은 다음과 같습니다.\n\n$$ds = \\sqrt{dx^2 + dy^2}$$\n\n그리고 점 1과 점 2 사이를 잇는 임의의 곡선의 총 길이는 다음과 같이 주어집니다.\n\n$$I = \\int_{1}^{2} ds = \\int_{x_1}^{x_2} \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} dx$$\n\n이 곡선이 최단 경로가 되기 위한 조건은 $I$가 최소가 되는 것입니다. 이는 식 (2.3)으로 표현된 극값 문제(extremum problem)의 한 예이며, 이때 함수 $f$는 다음과 같이 정의됩니다.\n\n$$f = \\sqrt{1 + \\dot{y}^2}$$\n\n이를 식 (2.11)에 대입하기 위해 편미분을 구하면 다음과 같습니다.\n\n$$\\frac{\\partial f}{\\partial y} = 0, \\quad \\frac{\\partial f}{\\partial \\dot{y}} = \\frac{\\dot{y}}{\\sqrt{1 + \\dot{y}^2}}$$\n\n따라서 식 (2.11)은 다음과 같이 정리됩니다.\n\n$$\\frac{d}{dx}\\left( \\frac{\\dot{y}}{\\sqrt{1 + \\dot{y}^2}} \\right) = 0$$\n\n또는 양변을 적분하여 다음과 같이 나타낼 수 있습니다.\n\n$$\\frac{\\dot{y}}{\\sqrt{1 + \\dot{y}^2}} = c$$\n\n여기서 $c$는 상수입니다. 이 해가 유효하려면 다음 조건을 만족해야 합니다.\n\n$$\\dot{y} = a$$\n\n여기서 $a$는 다음과 같이 $c$와 관련된 상수입니다.\n\n$$a = \\frac{c}{\\sqrt{1 - c^2}}$$\n\n하지만 $\\dot{y} = a$는 명백하게 다음과 같은 직선의 방정식입니다.\n\n$$y = ax + b$$\n\n여기서 $b$는 또 다른 적분 상수입니다. 엄밀히 말하면, 이 직선은 극값 경로(extremum path)라는 것만 증명된 것이지만, 이 문제의 특성상 명백히 최소 경로(minimum)에 해당합니다. 적분 상수 $a$와 $b$는 이 곡선이 두 끝점 $(x_1, y_1)$과 $(x_2, y_2)$를 통과해야 한다는 조건에 의해 결정됩니다.\n\n이와 유사한 방식으로 구면 위의 두 점 사이의 위치 각좌표를 이용해 호의 길이(arc length)를 설정함으로써, 구면 상의 두 점 사이의 최단 거리를 구할 수 있습니다. 일반적으로 주어진 곡면 위에서 두 점 사이의 최단 거리를 주는 곡선을 그 곡면의 측지선(geodesics)이라고 부릅니다.\n\n---\n\n### 2. 최소 회전면\n\n$xy$ 평면 상에 정의된 두 고정된 끝점 $(x_1, y_1)$과 $(x_2, y_2)$ 사이를 지나는 임의의 곡선을 잡고, 이를 $y$축을 중심으로 회전시켜 회전면을 만든다고 가정해 봅시다.\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_3a/fig_2_3a.svg\" alt=\"그림 2.3a: 최소 회전면\" />\n  <figcaption>그림 2.3a. 최소 회전면.</figcaption>\n</figure>\n\n> **[시각 자료 설명: 회전면의 입체적 구조 - 그림 2.3a]**\n> 이를 입체적으로 시각화하면, $x, y, z$축으로 이루어진 3차원 공간에서 $y$축이 수직 방향으로 곧게 뻗어 있고, $x$축과 $z$축이 수평 바닥면을 형성하고 있습니다. $xy$ 평면 상의 하단에 위치한 한 점 $(x_1, y_1)$에서 시작하여 상단의 점 $(x_2, y_2)$까지 완만하게 바깥쪽으로 퍼지며 올라가는 곡선이 존재합니다. 이 곡선을 중심축인 $y$축을 기준으로 한 바퀴 둥글게 회전시키면, 위가 넓고 아래가 좁은 깔때기나 대접 모양의 매끄러운 3차원 회전면이 생성됩니다. 이 회전면의 표면 위에는 $y$축을 중심으로 하는 수평 방향의 얇은 원형 띠(strip)들이 겹겹이 쌓여 있는 구조를 보게 되며, 이 미소 원형 띠의 반지름은 해당 높이에서의 $x$ 좌표값이 됩니다. 그림 2.3a는 회전축을 기준으로 $x_1$과 $x_2$가 같은 부호를 가진 경우(즉, 곡선 전체가 회전축 한쪽에만 있는 경우)를 가정한 예시이나, 일반적인 수학적 해법에서는 이러한 부호 제한을 두지 않습니다.\n> \n> \n\n이 문제의 목적은 이 회전면의 겉넓이를 최소로 만드는 곡선을 찾는 것입니다. 표면을 이루는 미소 원형 띠 하나의 넓이는 반지름이 $x$이고 폭이 $ds$이므로 $2\\pi x \\, ds = 2\\pi x \\sqrt{1 + \\dot{y}^2} dx$가 되며, 따라서 총 표면적은 다음과 같습니다.\n\n$$2\\pi \\int_{1}^{2} x \\sqrt{1 + \\dot{y}^2} dx$$\n\n이 적분의 극값 또한 식 (2.11)에 의해 주어지며, 이때 함수 $f$는 다음과 같습니다.\n\n$$f = x \\sqrt{1 + \\dot{y}^2}$$\n\n이를 편미분하면 각각 다음과 같습니다.\n\n$$\\frac{\\partial f}{\\partial y} = 0, \\quad \\frac{\\partial f}{\\partial \\dot{y}} = \\frac{x\\dot{y}}{\\sqrt{1 + \\dot{y}^2}}$$\n\n이 경우 식 (2.11)은 다음과 같이 바뀝니다.\n\n$$\\frac{d}{dx}\\left( \\frac{x\\dot{y}}{\\sqrt{1 + \\dot{y}^2}} \\right) = 0$$\n\n또는 적분하여 다음과 같이 쓸 수 있습니다.\n\n$$\\frac{x\\dot{y}}{\\sqrt{1 + \\dot{y}^2}} = a$$\n\n여기서 $a$는 $x$의 최솟값보다 분명히 더 작은 어떤 적분 상수입니다. 위 방정식의 양변을 제곱하고 항들을 정리하면 다음과 같습니다.\n\n$$\\dot{y}^2 (x^2 - a^2) = a^2$$\n\n이를 $\\frac{dy}{dx}$에 대해 풀면 다음과 같습니다.\n\n$$\\frac{dy}{dx} = \\frac{a}{\\sqrt{x^2 - a^2}}$$\n\n상수 $a$의 성질을 고려할 때, 이 미분방정식의 일반해는 다음과 같이 주어집니다.\n\n$$y = a \\int \\frac{dx}{\\sqrt{x^2 - a^2}} + b = a \\cdot \\text{arc cosh} \\frac{x}{a} + b$$\n\n이를 $x$에 대한 식으로 역함수를 취해 정리하면 다음과 같습니다.\n\n$$x = a \\cdot \\cosh \\frac{y - b}{a}$$\n\n이 방정식은 바로 현수선(catenary)의 방정식입니다.\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_3b/fig_2_3b.svg\" alt=\"그림 2.3b: 최소 회전면의 일반 현수선 해\" />\n  <figcaption>그림 2.3b. 최소 회전면의 일반 현수선 해.</figcaption>\n</figure>\n\n> **[시각 자료 설명: 2차원 평면 상의 현수선 해 - 그림 2.3b]**\n> 앞서 3차원으로 회전시켰던 단면 곡선을 다시 $xy$ 2차원 평면 상에 그래프로 나타내면 현수선의 기하학적 특징이 뚜렷하게 보입니다. 세로축 $y$, 가로축 $x$인 평면에서, $y$축으로부터 오른쪽으로 $a$만큼 떨어진 지점($x=a$)이 이 곡선이 회전축에 가장 가깝게 접근하는 정점(vertex)이 됩니다. 또한 이 정점의 높이는 $y$축 상에서 $b$로 표시됩니다. 곡선은 이 점 $(a, b)$를 중심으로 하여 마치 느슨하게 늘어진 줄처럼 부드러운 하트의 반쪽 모양 혹은 둥근 곡선 형태로 휘어지며, 아래쪽 끝점 $(x_1, y_1)$과 위쪽 끝점 $(x_2, y_2)$를 차례로 매끄럽게 통과합니다.\n\n원칙적으로 두 적분 상수 $a$와 $b$는 이 곡선이 지정된 두 끝점을 통과해야 한다는 조건에 의해 결정됩니다. 위 방정식을 만족하는 모든 곡선은 $b/a$라는 하나의 독립된 매개변수를 바탕으로 $x/a$ 및 $y/a$ 비율에 따라 크기(scale)가 조절되는 특성을 가집니다.\n\n이 사실은 해를 세부적으로 검토했을 때, 문제가 처음에 생각했던 것보다 훨씬 더 복잡해진다는 것을 암시합니다. 어떤 끝점 쌍에 대해서는 유일한 적분 상수 $a$와 $b$를 찾을 수 있습니다. 그러나 또 다른 끝점 쌍에 대해서는 동일한 두 끝점을 지나가는 서로 다른 두 개의 현수선 곡선을 그리는 것이 가능한 반면, 심지어 $a$와 $b$의 유효한 값을 전혀 찾을 수 없는 경우도 존재합니다.\n\n더 나아가, 식 (2.11)은 적분 값을 고정(stationary)되게 만드는 '2계 도함수까지 연속인 곡선 $y(x)$'를 찾기 위한 조건임을 상기해야 합니다. 따라서 이 현수선 해들이 항상 표면적의 '최솟값'을 나타내는 것은 아니며, 표면적의 변화율은 0이지만 최소는 아닌 '변곡점(inflection points)'을 나타낼 수도 있습니다.\n\n특정한 끝점 조합(예를 들어, $x_1$과 $x_2$가 모두 양수이면서 두 점의 높이 차이 $y_2 - y_1$에 비해 회전축으로부터의 거리 $x_1, x_2$가 모두 훨씬 작은 경우)에서는, 회전면의 절대적인 최소 넓이가 불연속적인 직선 선분들로 이루어진 경로를 통해 나타나게 됩니다. 구체적으로 이 경로는 첫 번째 끝점에서 시작해 $x$축과 평행하게 회전축($y$축)에 도달할 때까지 직선으로 이동한 후, 고정축인 $y$축을 따라 점 $(0, y_2)$까지 수직으로 이동하고, 다시 그곳에서 두 번째 끝점을 향해 직선으로 뻗어 나가는 형태를 취합니다. 이때의 최소 넓이는 두 끝점이 회전하며 만드는 원판의 넓이 합인 $\\pi(x_1^2 + x_2^2)$가 됩니다.\n\n이 꺾인 선 경로(곡선)는 $a=0$일 때 발생하며, 이 경우 $x=0$이거나 $y=\\text{상수}$가 되어야만 합니다. 그러나 이 경로는 모서리에서 도함수가 불연속적이기 때문에(discontinuous first derivatives), 미분 가능한 함수를 전제로 하는 식 (2.11)의 정상적인 해로서는 도출되기를 기대할 수 없습니다. 이 예시는 변분법의 정지 조건(stationary condition)이 내포하고 있는 수학적 유도 과정의 제한점과 그 물리적 의미를 파악하는 데 매우 가치 있는 지표가 됩니다. 이에 대한 대칭적 예시에서의 병리적 거동(pathological behavior)은 연습문제 7과 8에서 다루어집니다. 더욱 자세한 정보는 변분법을 다루는 여러 교재에서 찾아볼 수 있습니다."
        },
        {
          "id": "GM_2-2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_KR_TTS",
          "kind": "tts",
          "version": "part 03",
          "label": "GM_2.2 · 3부: 최단 경로와 최소 곡면 예시",
          "fileName": "GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_infographic.png",
            "alt": "GM 2.2 part03 Some Techniques of the Calculus of Variations shortest path and minimum surface examples infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part03_Some_Techniques_of_the_Calculus_of_Variations_shortest_path_and_minimum_surface_examples_infographic.png"
          },
          "content": "여러분, 반갑습니다. 오늘 이 시간에는 변분법의 정지 조건을 나타내는 지배 방정식의 몇 가지 간단한 적용 예시를 살펴보겠습니다. 이 방정식은 우리가 역학에서 다루었던 라그랑주 방정식과 형태가 명확하게 닮아 있죠. 그럼 어떻게 적용되는지 하나씩 알아봅시다.\n\n첫 번째로 살펴볼 예시는 평면 상의 두 점 사이의 최단 거리를 구하는 문제입니다.\n\n평면에서 길이의 미소 성분은 수평 변화량의 제곱과 수직 변화량의 제곱을 더한 뒤 루트를 씌운 것과 같습니다. 그리고 1번 점과 2번 점 사이를 잇는 임의의 곡선의 총 길이는 이 미소 성분을 처음 위치부터 나중 위치까지 누적하여 적분한 값으로 주어집니다. 이 식은 독립 변수에 대한 종속 변수의 변화율, 즉 기울기의 제곱에 1을 더하고 루트를 씌운 값을 처음 수평 위치부터 나중 수평 위치까지 적분한 형태로 바꾸어 쓸 수 있습니다.\n\n이 곡선이 최단 경로가 되기 위한 조건은 방금 말한 총 길이 적분 값이 최소가 되는 것입니다. 이것은 이전에 다루었던 극값 문제의 전형적인 예시입니다. 여기서 피적분 함수는 루트 안에 1 더하기 기울기의 제곱이 들어간 형태로 정의됩니다.\n\n이 피적분 함수를 지배 방정식에 대입하기 위해 편미분을 구해보겠습니다. 먼저 피적분 함수를 종속 변수 자체로 편미분하면, 식 안에 종속 변수가 직접 드러나지 않으므로 그 값은 영이 됩니다. 다음으로 기울기에 대해 편미분하면, 분모에는 루트 안에 1 더하기 기울기의 제곱이 들어가고, 분자에는 기울기가 위치하는 형태가 됩니다.\n\n따라서 우리의 지배 방정식은 이 기울기 관련 분수식을 수평 위치에 대해 미분한 값이 영이 된다는 식으로 정리됩니다.\n\n이 식의 양변을 수평 위치에 대해 적분하면, 미분하기 전의 분수식 자체가 어떤 상수가 되어야 함을 알 수 있습니다.\n\n이 해가 수학적으로 유효하려면 결국 종속 변수의 변화율, 즉 곡선의 기울기 자체가 하나의 일정한 상수가 되어야 합니다. 이 새로운 상수는 방금 구한 적분 상수를 바탕으로 계산되는 값입니다.\n\n기울기가 일정하다는 것은 이 곡선이 명백하게 직선의 방정식임을 의미합니다. 즉, 종속 변수는 수평 위치에 기울기 상수를 곱하고, 여기에 또 다른 적분 상수를 더한 형태가 됩니다.\n\n엄밀히 말하면 이 과정은 직선이 극값 경로라는 것만 증명한 것이지만, 이 문제의 기하학적 특성상 명백히 최단 경로인 최소 조건에 해당합니다. 여기서 등장한 두 개의 적분 상수는 이 직선 곡선이 지정된 두 끝점, 즉 처음 위치 좌표와 나중 위치 좌표를 반드시 통과해야 한다는 경계 조건에 의해 최종적으로 결정됩니다.\n\n이와 유사한 방식으로 구면 위의 두 점 사이에서도 위치를 나타내는 각좌표를 활용해 미소 호의 길이를 설정해 주면, 구면 상의 두 점을 잇는 최단 거리를 구할 수 있습니다. 일반적으로 이처럼 주어진 임의의 곡면 위에서 두 점 사이의 최단 거리를 만들어내는 곡선을 우리는 그 곡면의 측지선이라고 부릅니다.\n\n두 번째로 살펴볼 예시는 최소 회전면 문제입니다.\n\n수평축과 수직축으로 이루어진 평면 상에 정의된 두 고정된 끝점 사이를 지나는 임의의 곡선을 하나 잡고, 이를 수직축을 중심으로 회전시켜서 3차원 회전면을 만든다고 가정해 봅시다.\n\n이 구조를 머릿속으로 입체적으로 시각화해 보겠습니다. 3차원 공간에서 수직축이 위로 곧게 뻗어 있고, 나머지 두 축이 수평 바닥면을 형성하고 있습니다. 수평-수직 평면의 하단에 위치한 첫 번째 끝점에서 시작해서 상단의 두 번째 끝점까지 완만하게 바깥쪽으로 퍼지며 올라가는 곡선이 하나 있습니다. 이 곡선을 중심축인 수직축을 기준으로 한 바퀴 둥글게 회전시키면, 위쪽은 넓고 아래쪽은 좁은 깔때기나 대접 모양의 매끄러운 3차원 표면이 만들어집니다. 이 회전면의 표면 위를 가만히 들여다보면, 수직축을 중심으로 하는 수평 방향의 얇은 원형 띠들이 겹겹이 쌓여 있는 구조를 상상할 수 있습니다. 이때 이 미소 원형 띠의 반지름은 해당 높이에서의 수평 거리 좌표값이 됩니다. 우리가 다루는 단면 곡선은 일반적으로 이 수직 회전축 한쪽에만 존재한다고 가정하지만, 수학적 해법 자체는 회전축 반대편으로 넘어가는 경우까지 모두 포괄합니다.\n\n이 문제의 목적은 이렇게 만들어진 회전면의 전체 겉넓이를 최소로 만드는 단면 곡선을 찾는 것입니다. 표면을 구성하는 얇은 원형 띠 하나의 넓이는 원둘레에 미소 길이를 곱한 것이므로, 원주율의 두 배와 수평 위치, 그리고 앞서 구한 루트 형태의 미소 길이를 모두 곱한 값이 됩니다. 따라서 총 표면적은 원주율의 두 배를 적분 기호 밖으로 빼내고, 수평 위치와 루트 식을 곱한 피적분 함수를 처음 위치부터 나중 위치까지 적분한 형태로 나타납니다.\n\n이 적분 값이 극값이 되는 조건 역시 우리의 지배 방정식으로 구할 수 있습니다. 이번에 다루어야 할 피적분 함수는 수평 위치에 루트 1 더하기 기울기 제곱을 곱한 형태입니다.\n\n이 함수를 편미분해보겠습니다. 종속 변수 자체로 편미분한 값은 이번에도 영이 됩니다. 그리고 기울기에 대해 편미분하면, 분모에는 루트 1 더하기 기울기 제곱이 오고, 분자에는 수평 위치와 기울기를 곱한 값이 위치하게 됩니다.\n\n따라서 이번에 지배 방정식은 이 복잡한 분수식을 수평 위치에 대해 전체 미분한 값이 영이 된다는 형태로 바뀝니다.\n\n이 식을 수평 위치에 대해 적분하면, 미분하기 전의 분수식 자체가 어떤 적분 상수가 된다고 쓸 수 있습니다. 여기서 이 상수는 수평 위치의 최솟값보다 분명히 더 작은 값을 가집니다.\n\n이 방정식의 양변을 제곱하고 항들을 분리하여 정리하면, 기울기의 제곱에 수평 위치의 제곱과 상수 제곱의 차이를 곱한 값이 상수 제곱과 같다는 식을 얻습니다.\n\n이를 다시 기울기에 대한 식으로 풀면, 기울기는 상수 나누기 루트 수평 위치 제곱 빼기 상수 제곱의 형태가 됩니다.\n\n상수의 성질을 고려할 때, 이 미분방정식의 일반해는 하이퍼볼릭 아크코사인, 즉 역쌍곡선코사인 함수를 이용하여 표현됩니다. 수직 위치는 상수에 역쌍곡선코사인 함수를 곱하고 또 다른 상수를 더한 값으로 나타납니다.\n\n이 식을 수평 위치에 대한 식으로 역함수를 취해 정리하면, 수평 위치는 상수의 쌍곡선코사인 함수 형태로 표현됩니다. 이때 함수 내부에는 수직 위치에서 두 번째 상수를 빼고 첫 번째 상수로 나눈 값이 들어갑니다. 이 방정식이 나타내는 곡선이 바로 그 유명한 현수선, 즉 느슨하게 늘어진 줄이 만드는 곡선입니다.\n\n이 단면 곡선을 다시 2차원 평면 상에 그래프로 그려보면 현수선의 기하학적 특징을 쉽게 이해할 수 있습니다. 수직축과 수평축이 있는 평면에서, 수직축으로부터 오른쪽으로 첫 번째 상수만큼 떨어진 지점이 이 곡선이 회전축에 가장 가깝게 접근하는 정점이 됩니다. 또한 이 정점의 높이는 수직축 상에서 두 번째 상수의 위치로 표시됩니다. 곡선은 이 정점을 중심으로 하여 마치 매끄러운 하트의 반쪽 모양이나 둥근 대접의 단면처럼 위로 휘어지며, 아래쪽 끝점과 위쪽 끝점을 차례로 통과하게 됩니다.\n\n원칙적으로 이 두 개의 적분 상수는 곡선이 지정된 두 끝점을 통과해야 한다는 경계 조건에 의해 결정됩니다. 이 방정식을 만족하는 모든 현수선 곡선들은 두 상수의 비율을 바탕으로 전체적인 크기가 조절되는 닮은꼴 특성을 가집니다.\n\n이 사실은 해를 세부적으로 검토했을 때, 이 문제가 처음에 직관적으로 생각했던 것보다 훨씬 더 까다롭고 복잡해질 수 있음을 보여줍니다. 어떤 끝점 쌍에 대해서는 유일한 적분 상수들을 찾을 수 있지만, 또 다른 끝점 쌍에 대해서는 동일한 두 끝점을 지나가는 서로 다른 두 개의 현수선 곡선이 동시에 존재할 수도 있습니다. 심지어 두 끝점의 위치에 따라서는 조건을 만족하는 유효한 상수 값을 전혀 찾을 수 없는 경우도 있습니다.\n\n더 나아가서, 우리가 사용하는 지배 방정식은 적분 값을 정지 상태로 만드는 '2계 도함수까지 매끄럽게 연속인 곡선'을 찾기 위한 조건이라는 점을 상기해야 합니다. 따라서 우리가 구한 현수선 해들이 언제나 표면적을 최소로 만드는 절대적인 해를 보장하는 것은 아닙니다. 때로는 표면적의 변화율만 영이 될 뿐, 최소 조건은 만족하지 못하는 수학적인 변곡점을 나타낼 수도 있습니다.\n\n예를 들어, 두 끝점의 수평 위치가 모두 양수이면서 동시에 두 점의 높이 차이에 비해 회전축으로부터의 수평 거리가 극단적으로 짧은 특정한 끝점 조합을 생각해 봅시다. 이 경우 회전면의 표면적을 절대적으로 최소로 만드는 실제 경로는 매끄러운 곡선이 아니라, 뚝뚝 끊어진 직선 선분들로 이루어진 형태를 취하게 됩니다. 구체적으로 설명하자면, 첫 번째 끝점에서 시작해 수평 방향으로 회전축에 도달할 때까지 직선으로 수평 이동한 다음, 수직 회전축을 타고 그대로 위로 올라가서 두 번째 끝점의 높이에 도달한 뒤, 다시 그곳에서 두 번째 끝점을 향해 수평으로 곧게 뻗어 나가는 디귿자 형태의 꺾인 경로가 됩니다. 이때의 최소 넓이는 두 끝점이 회전하며 축 상에 만드는 두 원판의 넓이 합으로 나타납니다.\n\n이러한 꺾인 선 경로는 첫 번째 상수가 영이 될 때 발생하며, 기하학적으로는 수평축이 영이 되거나 수직 위치가 상수가 되는 구간들로 조립됩니다. 그러나 이 경로는 모서리 꺾이는 부분에서 도함수가 불연속적이기 때문에, 미분 가능한 함수만을 찾아내는 우리의 지배 방정식의 정상적인 해로서는 도출되지 않습니다. 이 예시는 변분법의 정지 조건이 내포하고 있는 수학적 유도 과정의 한계와 그 물리적 의미를 올바르게 파악하는 데 매우 중요한 지표가 됩니다. 이와 관련된 독특한 물리적 거동과 경계 조건들은 교재의 연습문제에서 더 자세히 다루고 있으니, 깊이 있는 학습을 원하는 분들은 변분법 관련 참고 서적들을 더 찾아보시기 바랍니다."
        },
        {
          "id": "GM_2-2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_Korean_Translation",
          "kind": "translation",
          "version": "part 04",
          "label": "GM_2.2 · 4부: 최속강하선 문제",
          "fileName": "GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_infographic.png",
            "alt": "GM 2.2 part04 Some Techniques of the Calculus of Variations brachistochrone problem infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_infographic.png"
          },
          "content": "### 3. 최속강하선 문제 (The brachistochrone problem)\n\n**(그림 2.4a 설명)**\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_4a/final.svg\" alt=\"그림 2.4a: 최속강하선 문제\" />\n  <figcaption>그림 2.4a. 최속강하선 문제.</figcaption>\n</figure>\n\n> 최속강하선 문제를 시각화하기 위해, 수평 방향을 $x$축, 아래로 내려가는 연직 방향을 $y$축으로 하는 2차원 평면 좌표계를 설정합니다. 출발점인 ‘점 1’은 원점 근처의 높은 위치에 있고, 도착점인 ‘점 2’는 우측 아래의 낮은 위치에 있습니다. 점 1에서 점 2까지 부드러운 곡선 경로가 아래를 향해 이어지며, 중력의 영향을 받아 이 곡선을 타고 미끄러져 내려오는 입자의 속도 벡터는 곡선의 접선 방향(화살표 $v$)을 향합니다.\n\n이 유명한 문제는 중력의 영향만을 받아 정지 상태에서 출발하여 낙하하는 입자가, 가장 높은 곳에 있는 점(출발점)에서 가장 낮은 곳에 있는 점(도착점)까지 가장 짧은 시간 내에 도달할 수 있는 두 점 사이의 곡선 경로를 찾는 것입니다. 만약 곡선을 따라 이동하는 입자의 속력을 $v$라고 한다면, 미소 호의 길이 $ds$를 낙하하는 데 걸리는 시간은 $ds/v$가 되므로, 우리가 해결해야 할 문제는 다음 선적분의 최솟값을 찾는 것입니다:\n\n$$t_{12} = \\int_{1}^{2} \\frac{ds}{v}$$\n\n입자가 처음 방출되어 떨어지기 시작한 최초의 지점(출발점)으로부터 아래쪽 방향으로 변위 $y$를 측정한다면, 이 입자에 대한 에너지 보존 법칙은 다음과 같이 쓸 수 있습니다:\n\n$$\\frac{1}{2}mv^2 = mgy$$\n\n또는 속력 $v$에 대해 정리하면 다음과 같습니다:\n\n$$v = \\sqrt{2gy}$$\n\n이에 따라 총 이동 시간 $t_{12}$에 대한 표현식은 다음과 같이 변형됩니다:\n\n$$t_{12} = \\int_{1}^{2} \\frac{\\sqrt{1+\\dot{y}^2}}{\\sqrt{2gy}} dx$$\n\n여기서 피적분 함수 $f$는 다음과 같이 정의됩니다:\n\n$$f = \\sqrt{\\frac{1+\\dot{y}^2}{2gy}}$$\n\n이 함수 $f$의 형태를 오일러-라그랑주 방정식(식 2.11)에 대입하여 적분하는 과정은 직관적이고 명확하므로, 구체적인 계산은 연습문제로 남겨두겠습니다. 단일 매개변수 $a$를 사용하여 나타낸 이 문제의 매개변수 해는 다음과 같습니다:\n\n$$x = a(\\phi - \\sin\\phi), \\quad y = a(1 - \\cos\\phi)$$\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_4b/final.svg\" alt=\"그림 2.4b: 최속강하선의 사이클로이드 해\" />\n  <figcaption>그림 2.4b. 최속강하선의 사이클로이드 해.</figcaption>\n</figure>\n\n**(그림 2.4b 설명)**\n\n> 위 매개변수 방정식이 그리는 궤적은 원이 직선 위를 굴러갈 때 원주 위의 한 점이 그리는 자취인 '사이클로이드(Cycloid)' 곡선입니다. 수평축인 $x$축 상에는 $0$, $\\pi a$, $2\\pi a$ 지점이 표시되어 있고, 연직 아래 방향인 $y$축 상에는 $a$, $2a$, $3a$ 깊이가 표시되어 있습니다. 곡선은 원점 $(x_1, y_1)$에서 수직에 가깝게 아래로 떨어지기 시작하여, 수평 거리 $x = \\pi a$이자 깊이 $y = 2a$인 최저점에서 완만한 골을 형성한 뒤, 다시 위로 완만하게 올라가 $x = 2\\pi a$ 지점에서 뾰족한 첨점(Cusp)을 만들며 첫 번째 주기를 끝내고 두 번째 주기로 이어집니다.\n> 이 그래프에는 도착점 $(x_2, y_2)$의 위치에 따라 나타날 수 있는 세 가지 대표적인 해의 케이스가 곡선 위에 점으로 플로팅되어 있습니다.\n> 1. **첫 번째 케이스 ($x_2 \\ll y_2$):** 도착점이 출발점과 수평 거리는 매우 가깝지만 아주 깊은 곳에 있는 경우입니다. 곡선이 급격하게 아래로 떨어지는 초기 하강 구간에 도착점이 위치합니다.\n> 2. **두 번째 케이스 ($x_2 = \\frac{\\pi}{2}y_2$):** 곡선의 역학적 최저점($y = 2a$)에 정확히 도착점이 위치하는 경우입니다.\n> 3. **세 번째 케이스 ($x_2 \\gg y_2$):** 도착점이 수평 방향으로 아주 멀리 떨어져 있는 경우입니다. 곡선이 최저점을 지나 다시 위쪽 첨점을 향해 상승하는 구간에 도착점이 위치합니다.\n> \n> \n\n이 해의 궤적인 사이클로이드 곡선은 첫 번째 주기($0 \\le x \\le 2\\pi a$)와 두 번째 주기의 시작 부분에 걸쳐 그림 2.4b에 스케치되어 있습니다. 여기에는 앞서 설명한 세 가지 형태의 해가 시각적으로 표시되어 있습니다. 깊이 $y$가 매개변수 크기 $a$보다 훨씬 작은 한계($y \\ll a$)에 대해 이 해를 거듭제곱 급수 전개(Power-series expansion)하면 다음과 같은 근사식을 얻을 수 있습니다:\n\n$$y = a \\sqrt[3]{\\frac{9}{2}(x/a)^2}$$\n\n최속강하선 문제는 수학사에서 매우 유명한 사건인데, 요한 베르누이(John Bernoulli)가 이 문제를 분석하는 과정에서 변분법(Calculus of variations)의 공식적인 기틀이 마련되었기 때문입니다."
        },
        {
          "id": "GM_2-2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_KR_TTS",
          "kind": "tts",
          "version": "part 04",
          "label": "GM_2.2 · 4부: 최속강하선 문제",
          "fileName": "GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_infographic.png",
            "alt": "GM 2.2 part04 Some Techniques of the Calculus of Variations brachistochrone problem infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.2_Some_Techniques_of_the_Calculus_of_Variations/GM_2.2_part04_Some_Techniques_of_the_Calculus_of_Variations_brachistochrone_problem_infographic.png"
          },
          "content": "세 번째 주제로 다뤄볼 내용은 바로 최속강하선 문제입니다. 영어로는 브라키스토크론 문제라고 부르죠.\n\n이 최속강하선 문제를 머릿속으로 시각화해 볼까요? 먼저 눈앞에 가상의 2차원 평면 좌표계를 그려보세요. 수평 방향을 엑스축으로 잡고, 특이하게 아래로 내려가는 연직 방향을 와이축으로 설정하겠습니다. 출발점인 일 번 점은 원점 근처의 높은 위치에 있고, 도착점인 이 번 점은 오른쪽 아래의 낮은 위치에 있습니다. 이 일 번 점에서 이 번 점까지 부드러운 곡선 경로가 아래를 향해 이어져 있습니다. 이때 중력의 영향을 받아 이 곡선을 타고 미끄러져 내려오는 입자가 있을 겁니다. 이 입자의 속도 방향은 매 순간 곡선의 접선 방향을 향하게 됩니다.\n\n이 유명한 문제는 중력의 영향만을 받아 정지 상태에서 출발하여 낙하하는 입자가, 가장 높은 곳에 있는 출발점부터 가장 낮은 곳에 있는 도착점까지 가장 짧은 시간 내에 도달할 수 있는 곡선 경로를 찾는 것입니다. 만약 곡선을 따라 이동하는 입자의 속력을 생각하고, 아주 미세한 호의 길이를 낙하하는 데 걸리는 시간을 계산해 보면, 이 미세한 시간은 미세한 호의 길이를 속력으로 나눈 값이 됩니다. 따라서 우리가 해결해야 할 문제는 일 번 지점부터 이 번 지점까지, 미세한 호의 길이를 속력으로 나눈 값을 모두 더한 이 선적분의 최솟값을 찾는 것입니다.\n\n이때 입자가 처음 방출되어 떨어지기 시작한 최초의 출발점으로부터 아래쪽 방향으로의 위치 변화인 변위를 측정해 보겠습니다. 그러면 이 입자에 대한 에너지 보존 법칙을 세울 수 있는데요. 입자의 운동에너지인 질량 곱하기 속도의 제곱을 이로 나눈 값은, 입자의 위치에너지인 질량 곱하기 중력가속도 곱하기 와이축 방향의 변위와 정확히 같습니다.\n\n이 식을 속력에 대해 다시 정리해 보면, 속력은 중력가속도와 와이축 방향 변위, 그리고 숫자 이의 곱에 루트를 씌운 값과 같습니다.\n\n이에 따라 우리가 처음에 구하고자 했던 일 번 지점부터 이 번 지점까지의 총 이동 시간 표현식은 다음과 같이 변형됩니다. 총 이동 시간은 일 번 지점부터 이 번 지점까지의 정적분으로 나타나는데, 피적분 함수는 분자와 분모로 나뉩니다. 분모는 방금 구한 속력, 즉 이 곱하기 중력가속도 곱하기 와이축 변위의 루트 값이고, 분자는 미세한 호의 길이를 엑스축 성분으로 바꾸어 표현한 루트 일 더하기 와이의 엑스에 대한 미분값의 제곱입니다. 이 피적분 함수를 엑스에 대해 적분하면 총 이동 시간이 됩니다.\n\n여기서 적분 기호 안에 들어가는 피적분 함수는 방금 말씀드린 대로, 분모에는 이 곱하기 중력가속도 곱하기 와이축 변위의 루트 값이 들어가고, 분자에는 일 더하기 와이의 엑스에 대한 미분값의 제곱을 더한 것의 루트 값이 들어가는 형태로 정의됩니다.\n\n이 피적분 함수의 형태를 역학의 기본 방정식인 오일러-라그랑주 방정식에 대입하여 적분하는 과정은 수학적으로 아주 직관적이고 명확합니다. 따라서 구체적인 적분 계산은 여러분의 연습문제로 남겨두겠습니다. 단일 매개변수를 사용해서 나타낸 이 최속강하선 문제의 최종 매개변수 해는 다음과 같이 주어집니다. 우선 엑스축 위치는 매개변수 상수에 각도를 뜻하는 매개변수와 그 매개변수의 사인 값을 뺀 것을 곱한 형태가 되고, 와이축 위치는 동일한 매개변수 상수에 일에서 매개변수의 코사인 값을 뺀 것을 곱한 형태가 됩니다.\n\n이 매개변수 방정식이 그리는 궤적은 원이 직선 위를 굴러갈 때 원주 위의 한 점이 그리는 자취인 사이클로이드 곡선입니다. 이 그래프의 형태를 머릿속으로 그려보겠습니다. 수평축인 엑스축 상에는 영, 파이 곱하기 매개변수 상수, 이 파이 곱하기 매개변수 상수 지점이 표시되어 있고, 연직 아래 방향인 와이축 상에는 매개변수 상수, 이 곱하기 매개변수 상수, 삼 곱하기 매개변수 상수의 깊이가 표시되어 있습니다. 곡선은 원점인 일 번 지점에서 수직에 가깝게 아래로 떨어지기 시작합니다. 그러다가 수평 거리가 파이 곱하기 매개변수 상수이고 깊이가 이 곱하기 매개변수 상인 최저점에서 완만한 골을 형성한 뒤, 다시 위로 완만하게 올라갑니다. 결국 수평 거리가 이 파이 곱하기 매개변수 상수인 지점에서 뾰족한 첨점을 만들며 첫 번째 주기를 끝내고 두 번째 주기로 이어지게 되죠.\n\n이 그래프에는 도착점인 이 번 점의 위치에 따라 나타날 수 있는 세 가지 대표적인 해의 케이스가 곡선 위에 점으로 표현되어 있습니다.\n\n첫 번째 케이스는 도착점의 엑스축 좌표가 와이축 좌표보다 훨씬 작은 경우입니다. 즉, 도착점이 출발점과 수평 거리는 매우 가깝지만 아주 깊은 곳에 있는 경우를 말합니다. 이때는 곡선이 급격하게 아래로 떨어지는 초기 하강 구간에 도착점이 위치하게 됩니다.\n\n두 번째 케이스는 도착점의 엑스축 좌표가 와이축 좌표에 이 분의 파이를 곱한 값과 정확히 같은 경우입니다. 이 지점은 곡선의 역학적 최저점, 즉 깊이가 이 곱하기 매개변수 상수가 되는 곳에 정확히 도착점이 위치하는 경우입니다.\n\n세 번째 케이스는 도착점의 엑스축 좌표가 와이축 좌표보다 훨씬 큰 경우입니다. 도착점이 수평 방향으로 아주 멀리 떨어져 있는 경우를 뜻하죠. 이때는 곡선이 최저점을 지나 다시 위쪽의 뾰족한 첨점을 향해 상승하는 구간에 도착점이 위치하게 됩니다.\n\n이 해의 궤적인 사이클로이드 곡선은 영부터 이 파이 곱하기 매개변수 상수까지의 첫 번째 주기와, 그 뒤 이어지는 두 번째 주기의 시작 부분에 걸쳐 나타나며, 방금 설명해 드린 세 가지 형태의 해가 이 곡선 위에 시각적으로 표시되어 있습니다. 여기서 입자의 하강 깊이가 매개변수 상수의 크기보다 훨씬 작은 한계 상황을 가정해 보겠습니다. 이 조건에서 해를 거듭제곱 급수 전개로 근사해 보면 다음과 같은 식을 얻을 수 있습니다. 와이축 위치는 매개변수 상수에, 숫자 구를 이로 나눈 값과 엑스를 매개변수 상수로 나눈 값의 제곱을 곱한 뒤, 이 전체 값에 세제곱근을 씌운 것을 곱한 값으로 근사됩니다.\n\n이 최속강하선 문제는 수학사에서 매우 유명한 사건입니다. 당대 최고의 수학자였던 요한 베르누이가 이 문제를 분석하고 해결하는 과정에서, 현대 물리학의 강력한 도구인 변분법의 공식적인 기틀이 마련되었기 때문입니다."
        }
      ]
    },
    {
      "id": "GM_2.3",
      "title": "해밀턴의 원리로부터 라그랑주 방정식의 유도",
      "category": "minor_unit",
      "startPage": "63",
      "endPage": "64",
      "pageCount": "2",
      "pageLabelStart": "44",
      "pageLabelEnd": "45",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.3 · 1부: 오일러-라그랑주 방정식과 해밀턴 원리",
          "fileName": "GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.3_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle/GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_infographic.png",
            "alt": "GM 2.3 part01 Derivation of Lagranges Equations from Hamiltons Principle euler lagrange equations and hamiltons principle infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.3_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle/GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_infographic.png"
          },
          "content": "## 2.3 해밀턴의 원리로부터 라그랑주 방정식의 유도\n\n변분법(calculus of variations)의 기본 문제는 $f$가 여러 개의 독립 변수 $y_i$ 및 이들의 도함수 $\\dot{y}_i$의 함수인 경우로 쉽게 일반화될 수 있습니다. (물론 이 모든 양은 매개변수 $x$의 함수로 간주됩니다.) 그러면 적분 $J$의 변분은 다음과 같습니다.\n\n$$\\delta J=\\delta\\int_{1}^{2}f(y_{1}(x), y_{2}(x),...,\\dot{y}_{1}(x), \\dot{y}_{2}(x),...,x)dx$$\n\n (2.14) \n\n이 변분은 이전과 마찬가지로, 가능한 곡선들의 집합 $y_i(x,\\alpha)$를 분류하는 매개변수 $\\alpha$의 함수로 $J$를 간주함으로써 얻어집니다.\n\n따라서 다음과 같이 매개변수 $\\alpha$를 도입할 수 있습니다.\n\n$$y_{1}(x,\\alpha)=y_{1}(x,0)+\\alpha\\eta_{1}(x)$$\n\n$$y_{2}(x,\\alpha)=y_{2}(x,0)+\\alpha\\eta_{2}(x)$$\n\n$$\\vdots$$\n\n (2.15) \n\n여기서 $y_{1}(x,0), y_{2}(x,0)$ 등은 우리가 구하고자 하는 극값 문제(extremum problem)의 해(정답 곡선)이며, $\\eta_{1}, \\eta_{2}$ 등은 양 끝점(시작점 1과 끝점 2)에서 $0$이 되고 2계 도함수까지 연속이지만 그 외에는 완전히 임의적인 $x$의 독립 함수들입니다.\n\n> **[시각적 이해를 돕기 위한 설명: 매개변수 $\\alpha$에 따른 경로의 변화]**\n> 변분법에서 설정하는 곡선들의 기하학적 구조를 상상해 보면 이해하기 쉽습니다. 2차원 평면 위에 고정된 두 점 '시작점 1'과 '끝점 2'가 있습니다.\n> * **최적의 경로 ($\\alpha = 0$):** 우리가 찾고자 하는 실제 물리적 해(정답 곡선)인 $y_i(x,0)$입니다.\n> * **임의의 경로 ($\\alpha \\neq 0$):** 정답 경로에 임의의 섭동 함수 $\\eta_i(x)$를 변형 계수 $\\alpha$만큼 곱해서 더한 곡선입니다. $\\eta_i(x)$는 시작점과 끝점에서 반드시 $0$이 되므로, $\\alpha$가 어떤 값을 갖더라도 모든 변형된 곡선들은 반드시 고정된 시작점 1과 끝점 2를 통과하게 됩니다. $\\alpha$가 $0$에 가까워질수록 이 곡선들은 정답 곡선으로 수렴합니다.\n> \n> \n\n계산은 이전 방식과 동일하게 진행됩니다. $J$의 변분은 다음과 같이 매개변수 $\\alpha$에 대한 미분 형식으로 주어집니다.\n\n$$\\frac{\\partial J}{\\partial\\alpha}d\\alpha=\\int_{1}^{2}\\sum_{i}\\left(\\frac{\\partial f}{\\partial y_{i}}\\frac{\\partial y_{i}}{\\partial\\alpha}d\\alpha+\\frac{\\partial f}{\\partial\\dot{y}_{i}}\\frac{\\partial\\dot{y}_{i}}{\\partial\\alpha}d\\alpha\\right)dx$$\n\n (2.16) \n\n여기서 식 (2.16)의 두 번째 항에 포함된 적분을 다시 한번 부분적분(integration by parts)합니다.\n\n$$\\int_{1}^{2}\\frac{\\partial f}{\\partial\\dot{y}_{i}}\\frac{\\partial^{2}y_{i}}{\\partial\\alpha\\partial x}dx=\\left.\\frac{\\partial f}{\\partial\\dot{y}_{i}}\\frac{\\partial y_{i}}{\\partial\\alpha}\\right|_{1}^{2}-\\int_{1}^{2}\\frac{\\partial y_{i}}{\\partial\\alpha}\\frac{d}{dx}\\left(\\frac{\\partial f}{\\partial\\dot{y}_{i}}\\right)dx$$\n\n이때 우변의 첫 번째 항(경계항)은 모든 곡선이 고정된 양 끝점을 통과하기 때문에($\\alpha$의 변화에 영향을 받지 않으므로 끝점에서의 미분값이 $0$이 되어) 사라집니다. 이를 식 (2.16)에 다시 대입하면, 변분 $\\delta J$는 다음과 같이 정리됩니다.\n\n$$\\delta J=\\int_{1}^{2}\\sum_{i}\\left(\\frac{\\partial f}{\\partial y_{i}}-\\frac{d}{dx}\\frac{\\partial f}{\\partial\\dot{y}_{i}}\\right)\\delta y_{i}dx$$\n\n (2.17) \n\n여기서 식 (2.12)와 유사하게, 변분 $\\delta y_i$는 다음과 같이 정의됩니다.\n\n$$\\delta y_{i}=\\left(\\frac{\\partial y_{i}}{\\partial\\alpha}\\right)_{0}d\\alpha$$\n\n변수 $y_i$들이 서로 독립적이므로, 이들의 변분 $\\delta y_i$ 역시 독립적입니다. (예를 들어, 함수 $\\eta_i(x)$들은 서로 독립적일 것입니다.) 따라서 변분법의 기본 보조정리(fundamental lemma, 식 (2.10) 참조)를 명백하게 확장 적용하면, $\\delta J$가 $0$이 되어야 한다는 조건은 $\\delta y_i$의 각 계수들이 개별적으로 $0$이 될 것을 요구합니다.\n\n$$\\frac{\\partial f}{\\partial y_{i}}-\\frac{d}{dx}\\frac{\\partial f}{\\partial\\dot{y}_{i}}=0, \\quad i=1,2,...,n$$\n\n (2.18) \n\n식 (2.18)은 단일 변수 방정식(2.11)을 여러 개의 변수로 적절하게 확장한 것이며, 오일러-라그랑주 미분 방정식(Euler-Lagrange differential equations)으로 잘 알려져 있습니다. 이 방정식의 해는 식 (2.14)에 주어진 형태의 적분 변분이 $0$이 되도록 하는 곡선들을 나타냅니다.\n\n기본적인 변분 문제는 한층 더 다양하게 일반화될 수 있습니다. 예를 들어, $f$를 고계 도함수 $\\ddot{y}, \\dddot{y}$ 등의 함수로 취할 수도 있으며, 이는 식 (2.18)과는 다른 형태의 방정식으로 이어집니다. 또는 매개변수가 여러 개($x_j$)여서 다중적분이 되고, $f$가 각 매개변수 $x_j$에 대한 $y_i$의 편도함수들을 변수로 포함하는 경우로 확장할 수도 있습니다. 마지막으로, 양 끝점이 고정되지 않고 움직이는 변분을 고려하는 것도 가능합니다.\n\n현재 우리의 목적에는 지금까지 유도한 내용만으로도 충분합니다. 해밀턴의 원리에 등장하는 적분 $I$는 다음과 같기 때문입니다.\n\n$$I=\\int_{1}^{2}L(q_{i},\\dot{q}_{i},t)dt$$\n\n (2.19) \n\n이 적분은 아래와 같은 기호의 치환(대응 관계)을 거치면 정확히 식 (2.14)에서 규정한 형태가 됩니다.\n\n> **[수식 기호의 대응 관계 일람]**\n> 수학적 변분법의 추상적인 기호들이 물리학의 역학계 변수들과 어떻게 매칭되는지 보여주는 흐름입니다.\n> * 독립 변수(적분 축): $x \\longrightarrow t$ (시간) * 종속 변수(좌표 축): $y_i \\longrightarrow q_i$ (일반화 좌표) * 적분 대상 함수: $f(y_i, \\dot{y}_i, x) \\longrightarrow L(q_i, \\dot{q}_i, t)$ (라그랑지안) \n> \n> \n\n식 (2.18)을 유도할 때, 우리는 변수 $y_i$들이 서로 독립적이라고 가정했습니다. 해밀턴의 원리와 관련하여 이와 상응하는 조건은 일반화 좌표 $q_i$들이 서로 독립적이어야 한다는 것이며, 이를 위해서는 계의 구속 조건이 홀로노믹(holonomic, 가적분 상태)이어야 합니다.\n\n이 경우 적분 $I$에 대응하는 오일러-라그랑주 방정식은 다름 아닌 운동의 라그랑주 방정식(Lagrange's equations of motion)이 됩니다.\n\n$$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{q}_{i}}-\\frac{\\partial L}{\\partial q_{i}}=0, \\quad i=1,2,...,n$$\n\n (2.20) \n\n이로써 우리는 홀로노믹 구속 조건을 가진 단일원 계(monogenic systems)에 대해, 해밀턴의 원리로부터 라그랑주 방정식이 도출된다는 것을 보여주려는 원래의 목적을 달성하였습니다."
        },
        {
          "id": "GM_2-3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.3 · 1부: 오일러-라그랑주 방정식과 해밀턴 원리",
          "fileName": "GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.3_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle/GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_infographic.png",
            "alt": "GM 2.3 part01 Derivation of Lagranges Equations from Hamiltons Principle euler lagrange equations and hamiltons principle infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.3_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle/GM_2.3_part01_Derivation_of_Lagranges_Equations_from_Hamiltons_Principle_euler_lagrange_equations_and_hamiltons_principle_infographic.png"
          },
          "content": "안녕하세요, 여러분. 오늘은 교재의 제 2장 3절, 해밀턴의 원리로부터 라그랑주 방정식을 유도하는 과정에 대해 강의를 진행하겠습니다.\n\n변분법의 가장 기본적인 문제는, 어떤 함수가 여러 개의 독립 변수들과 이들의 도함수들로 이루어진 경우로 쉽게 확장해서 생각할 수 있습니다. 물론 여기서 다루는 모든 변수와 도함수들은 하나의 독립적인 매개변수의 함수로 생각해야 합니다. 이렇게 보면, 우리가 구하고자 하는 전체 적분값의 변화량, 즉 변분은 다음과 같이 나타낼 수 있습니다. 독립 매개변수의 시작점부터 끝점까지에 대하여, 여러 독립 변수들과 이들의 도함수들, 그리고 독립 매개변수 자체를 변수로 갖는 함수를 모두 적분한 것의 전체 변분 형태로 표현되는 것이죠. 이것이 식 2.14의 내용입니다.\n\n이 적분값의 변분은, 이전 방식과 마찬가지로 가능한 여러 경로의 곡선 집합을 구분해 주는 하나의 변형 계수의 함수로 전체 적분값을 간주함으로써 얻을 수 있습니다.\n\n따라서 우리는 이 변형 계수를 도입해서 여러 경로들을 식으로 세울 수 있습니다. 첫 번째 변수의 경로는 최적의 경로에 변형 계수와 임의의 첫 번째 섭동 함수를 곱한 것을 더해준 것이 되고, 두 번째 변수의 경로 역시 최적의 경로에 변형 계수와 임의의 두 번째 섭동 함수를 곱해서 더해준 양이 됩니다. 이런 방식으로 모든 변수의 경로를 표현하는 것이 식 2.15의 내용입니다.\n\n여기서 변형 계수가 영일 때의 변수들은 우리가 최종적으로 구하고자 하는 극값 문제의 해, 즉 실제 정답 곡선을 의미합니다. 그리고 함께 더해진 여러 섭동 함수들은 시작점과 끝점에서는 모두 영이 되고, 두 번 미분한 도함수까지 연속성을 유지해야 하지만, 그 외의 구간에서는 완전히 자유롭게 바뀔 수 있는 독립 함수들입니다.\n\n자, 이 상황을 머릿속으로 시각화해 볼까요? 2차원 평면 위에 고정된 두 점인 시작점 1과 끝점 2가 있다고 상상해 보세요. 우리가 찾고자 하는 실제 물리적인 정답 경로는 변형 계수가 영인 상태의 곡선입니다. 반면에 변형 계수가 영이 아닌 임의의 경로들은, 이 정답 경로에 임의의 섭동 함수를 변형 계수만큼 곱해서 더해준 형태가 됩니다. 이 섭동 함수들은 시작점과 끝점에서 반드시 영이 되도록 설정되어 있기 때문에, 변형 계수가 어떤 값을 갖더라도 변형된 모든 곡선들은 반드시 고정된 시작점 1과 끝점 2를 똑같이 통과하게 됩니다. 그리고 변형 계수가 점차 영에 가까워질수록, 이 임의의 곡선들은 우리가 찾고자 하는 정답 곡선으로 점점 수렴하게 되는 구조입니다.\n\n이제 계산을 계속 진행해 보겠습니다. 계산 방식은 이전과 같습니다. 전체 적분값의 변화량은 변형 계수에 대한 미분 형식으로 표현할 수 있는데요. 시작점부터 끝점까지의 범위에서, 함수를 각 변수로 편미분한 값에 해당 변수의 변화량을 곱한 항과, 함수를 각 변수의 도함수로 편미분한 값에 해당 도함수의 변화량을 곱한 항을 모두 더해준 뒤, 이를 독립 매개변수에 대해 적분한 형태로 나타납니다. 이것이 식 2.16입니다.\n\n여기서 식 2.16의 두 번째 항인 도함수의 편미분이 포함된 적분을 다시 한번 부분적분해 주겠습니다. 함수를 변수의 도함수로 편미분한 값과, 변수를 변형 계수와 독립 매개변수로 각각 편미분한 2계 편도함수의 곱을 적분하는 식인데요. 이를 부분적분하면, 함수를 변수의 도함수로 편미분한 값과 변수를 변형 계수로 편미분한 값의 곱을 끝점과 시작점에서 계산해 차이를 구한 경계항이 먼저 나오고, 여기에서 변수를 변형 계수로 편미분한 값과 함수의 도함수 편미분 값을 독립 매개변수로 전미분한 값의 곱을 시작점부터 끝점까지 적분한 항을 빼주는 형태가 됩니다.\n\n이때 우변의 첫 번째 항인 경계항은 사라지게 됩니다. 왜냐하면 앞서 설명해 드렸듯이 모든 임의의 곡선들이 고정된 양 끝점을 반드시 통과하기 때문에, 양 끝점에서는 변형 계수가 바뀌어도 좌표의 변화가 전혀 없어서 미분값이 영이 되기 때문입니다. 이 결과를 다시 식 2.16에 대입하여 정리하면, 전체 적분값의 변분은 다음과 같이 깔끔하게 정리됩니다. 시작점부터 끝점까지의 범위에서, 함수를 변수로 편미분한 값에서 함수의 도함수 편미분 값을 독립 매개변수로 전미분한 값을 뺀 뒤, 여기에 각 변수의 변분량을 곱해준 항들을 모두 더하여 독립 매개변수에 대해 적분한 형태가 됩니다. 이것이 식 2.17입니다.\n\n여기서 각 변수의 변분량은, 식 2.12와 유사하게 변수를 변형 계수로 편미분한 값에 변형 계수의 미소 변화량을 곱한 것으로 정의됩니다.\n\n우리가 다루는 변수들은 서로 독립적이기 때문에, 이 변수들의 변분량 역시 서로에게 영향을 주지 않는 독립적인 값들입니다. 예를 들어 임의로 설정했던 섭동 함수들도 서로 독립적이겠죠. 따라서 우리가 이전에 배웠던 변분법의 기본 보조정리를 여러 변수 체계로 확장하여 적용하면, 전체 적분값의 변분이 최종적으로 영이 되기 위해서는 각 변수의 변분량 앞에 곱해진 계수들이 개별적으로 모두 영이 되어야만 합니다.\n\n즉, 함수를 각 변수로 편미분한 값에서, 함수의 도함수 편미분 값을 독립 매개변수로 전미분한 값을 뺀 결과가 모든 변수에 대해 각각 영이 되어야 한다는 것이죠. 이것이 식 2.18입니다.\n\n이 식 2.18은 단일 변수일 때의 방정식을 여러 개의 변수를 가진 체계로 적절하게 확장한 것이며, 물리와 수학에서 매우 중요한 오일러-라그랑주 미분 방정식으로 잘 알려져 있습니다. 이 방정식의 해를 구하면, 식 2.14에서 우리가 설정했던 형태의 적분 변화량이 영이 되도록 만드는 최적의 곡선들을 찾아낼 수 있습니다.\n\n이러한 기본적인 변분 문제는 상황에 따라 훨씬 더 다양하게 일반화할 수 있습니다. 예를 들어, 대상을 두 번 미분한 가속도나 세 번 미분한 양과 같은 고계 도함수들의 함수로 취할 수도 있으며, 이 경우에는 식 2.18과는 또 다른 형태의 방정식이 도출됩니다. 또는 기준이 되는 매개변수가 여러 개여서 1중 적분이 아닌 다중적분이 되고, 대상 함수가 각 매개변수들에 대한 변수들의 편도함수들을 변수로 포함하는 경우로 확장할 수도 있습니다. 마지막으로, 양 끝점이 고정되어 있지 않고 자유롭게 움직이는 물리적 변분을 고려하는 것도 가능합니다.\n\n하지만 현재 우리가 역학 문제를 해결하는 목적에는 지금까지 유도한 내용만으로도 아주 충분합니다. 왜냐하면 우리가 다루고자 하는 해밀턴의 원리에 등장하는 적분식인 작용 적분은 다음과 같은 형태를 가지기 때문입니다. 시작 시간부터 끝 시간까지 시간 범위에 대해, 일반화 좌표와 일반화 속도, 그리고 시간의 함수인 라그랑지안을 시간으로 적분한 형태이죠. 이것이 식 2.19입니다.\n\n이 작용 적분식은 기호만 알맞게 바꾸어 주면, 우리가 앞서 유도했던 수학적 변분식인 식 2.14와 완벽하게 일치합니다.\n\n그 대응 관계를 매칭해 보면 이렇습니다. 수학적 변분법에서의 독립 매개변수는 물리학에서의 시간으로 대응되고, 수학에서의 종속 변수들은 물리학의 일반화 좌표들로 대응됩니다. 그리고 수학에서 적분해 주었던 대상 함수는 물리학에서 역학계를 정의하는 라그랑지안 함수로 그대로 치환되는 흐름입니다.\n\n우리가 오일러-라그랑주 방정식을 유도할 때, 수학적 변수들이 서로 독립적이라고 가정했던 것을 기억하시나요? 이 조건을 해밀턴의 원리에 그대로 적용하면, 물리학에서의 일반화 좌표들이 서로 독립적이어야 한다는 조건이 됩니다. 그리고 일반화 좌표들이 서로 완벽하게 독립적이기 위해서는, 이 역학계에 주어지는 구속 조건들이 반드시 가적분 상태인 홀로노믹 구속 조건이어야만 합니다.\n\n이 조건이 만족된다면, 작용 적분에 대응하는 오일러-라그랑주 방정식은 다름 아닌 우리가 역학에서 계속 사용하게 될 운동의 라그랑주 방정식이 됩니다.\n\n그 형태는 라그랑지안을 일반화 속도로 편미분한 값을 시간에 대해 전미분한 것에서, 라그랑지안을 일반화 좌표로 편미분한 값을 뺀 결과가 모든 좌표 성분에 대해 각각 영이 되는 방정식입니다. 이것이 식 2.20입니다.\n\n이로써 우리는 홀로노믹 구속 조건을 가지며 힘을 적절한 퍼텐셜로 표현할 수 있는 단일원 계에 대해, 역학의 가장 근본적인 해밀턴의 원리로부터 운동 방정식인 라그랑주 방정식이 자연스럽게 따라나온다는 것을 보여주었습니다. 오늘 강의는 여기서 마치겠습니다. 수고하셨습니다."
        }
      ]
    },
    {
      "id": "GM_2.4",
      "title": "구속조건이 있는 계로의 해밀턴 원리 확장",
      "category": "minor_unit",
      "startPage": "64",
      "endPage": "70",
      "pageCount": "7",
      "pageLabelStart": "45",
      "pageLabelEnd": "51",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.4 · 1부: 홀로노믹 구속조건과 라그랑주 승수",
          "fileName": "GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_infographic.png",
            "alt": "GM 2.4 part01 Extending Hamiltons Principle to Systems with Constraints holonomic constraints and lagrange multipliers infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_infographic.png"
          },
          "content": "## 2.4 제약조건이 있는 계로의 해밀턴 원리 확장\n\n1.3절에서는 제약조건 방정식들을 $0=0$이라는 당연한 수식들로 만들어 버리는 적절한 좌표계를 선택함으로써, 홀로노믹(holonomic) 제약조건이 있는 문제들을 해결했습니다. 이번 절에서는 홀로노믹 제약조건이 있는 계뿐만 아니라 특정 유형의 비홀로노믹(non-holonomic) 계를 해결하는 데도 해밀턴의 원리가 어떻게 적용될 수 있는지 보여 주고자 합니다.\n\n먼저 홀로노믹 제약조건을 살펴보겠습니다. 해밀턴의 원리나 달랑베르의 원리로부터 라그랑주 방정식을 유도할 때, 홀로노믹 제약조건은 마지막 단계인 일반화 좌표 $q_i$의 변분(variations)들을 서로 독립적인 것으로 취급하는 과정에서 나타납니다. 하지만 가상 변위(virtual displacements) $\\delta q_i$는 제약조건과 일치하지 않을 수 있습니다. 만약 변수가 $n$개이고 다음과 같은 형태의 제약조건 방정식이 $m$개 존재한다면, 이 여분의 가상 변위들은 라그랑주 미정 계수법(method of Lagrange undetermined multipliers)을 통해 제거됩니다.\n\n$$f_{\\alpha}(q_1, \\dots, q_n, t) = 0 \\quad (\\alpha = 1, \\dots, m)$$\n\n이에 따라 기존의 해밀턴 적분 식을 다음과 같이 수정합니다.\n\n$$I = \\int_{1}^{2} \\left( L + \\sum_{\\alpha=1}^{m} \\lambda_{\\alpha} f_{\\alpha} \\right) dt$$\n\n여기서 $q_i$와 라그랑주 미정 계수 $\\lambda_{\\alpha}$가 서로 독립적으로 변한다고 가정하면 총 $n+m$개의 방정식을 얻을 수 있습니다. 이때 $\\lambda_{\\alpha}$의 변분은 $m$개의 제약조건 방정식을 그대로 나누어 주며, $q_i$의 변분은 다음과 같은 식을 이끌어 냅니다.\n\n$$\\delta I = \\int_{1}^{2} dt \\left( \\sum_{i=1}^{n} \\left( \\frac{d}{dt} \\frac{\\partial L}{\\partial \\dot{q}_i} - \\frac{\\partial L}{\\partial q_i} + \\sum_{\\alpha=1}^{m} \\lambda_{\\alpha} \\frac{\\partial f_{\\alpha}}{\\partial q_i} \\right) \\delta q_i \\right) = 0$$\n\n그러나 앞서 언급했듯이 $\\delta q_i$들은 서로 독립적이지 않습니다. 따라서 우리는 우선 임의의 $\\delta q_i$에 대해 방정식 중 $m$개가 만족되도록 $\\lambda_{\\alpha}$를 영리하게 선택합니다. 그런 다음 나머지 $n-m$개의 방정식에 대해서는 $\\delta q_i$의 변분들을 독립적으로 선택합니다.\n\n이러한 과정을 거치면 $k = 1, \\dots, m$에 대해 다음과 같은 형태의 방정식 $m$개를 얻게 됩니다.\n\n$$\\frac{d}{dt} \\frac{\\partial L}{\\partial \\dot{q}_k} - \\frac{\\partial L}{\\partial q_k} + \\sum_{\\alpha=1}^{m} \\lambda_{\\alpha} \\frac{\\partial f_{\\alpha}}{\\partial q_k} = 0$$\n\n이 등식은 우리가 $\\lambda_{\\alpha}$를 조율하여 선택했기 때문에 성립합니다. 아울러 $k = m+1, \\dots, n$인 나머지 변수들에 대해서도 위의 식과 동일한 표현식을 얻을 수 있는데, 이 경우에는 가상 변분 $\\delta q_i$가 독립적이라는 사실로부터 등식이 자연스럽게 유도됩니다.\n\n이 방법은 비록 $m$개의 새로운 함수 $\\lambda_{\\alpha}$를 도입해야 한다는 대가가 따르지만, 계의 문제를 완벽하게 해결해 줍니다. 이를 물리적으로 이해하기 위해 $k = 1, \\dots, n$ 전체에 대한 위의 방정식을 다음과 같이 바꾸어 써 볼 수 있습니다.\n\n$$\\frac{d}{dt} \\frac{\\partial L}{\\partial \\dot{q}_k} - \\frac{\\partial L}{\\partial q_k} = -\\sum_{\\alpha=1}^{m} \\lambda_{\\alpha} \\frac{\\partial f_{\\alpha}}{\\partial q_k} = Q_k$$\n\n여기서 $Q_k$는 일반화 힘(generalized forces)을 나타냅니다. 이 함수 $Q_k$는 각각의 제약조건을 유지하는 데 필요한 '실제 힘의 크기'를 의미합니다. 다만, 수식을 전개할 때 세 번째 항의 부호($+$)를 어떻게 잡을지는 임의로 정하는 것이기 때문에, 수학적인 계산만으로는 이 일반화 힘의 '크기'만을 알아낼 수 있습니다. 힘이 작용하는 정확한 '방향'까지 판단하기 위해서는 계의 물리적인 상황을 직접 이해하고 분석해야 합니다."
        },
        {
          "id": "GM_2-4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.4 · 1부: 홀로노믹 구속조건과 라그랑주 승수",
          "fileName": "GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_infographic.png",
            "alt": "GM 2.4 part01 Extending Hamiltons Principle to Systems with Constraints holonomic constraints and lagrange multipliers infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part01_Extending_Hamiltons_Principle_to_Systems_with_Constraints_holonomic_constraints_and_lagrange_multipliers_infographic.png"
          },
          "content": "안녕하세요, 여러분. 오늘은 제약조건이 있는 계로 해밀턴 원리를 확장하는 방법에 대해 알아보겠습니다.\n\n우리는 이전에 1.3절에서 제약조건 방정식들을 영은 영이라는 당연한 수식들로 만들어 버리는 적절한 좌표계를 선택해서, 홀로노믹 제약조건이 있는 문제들을 해결했었습니다. 이번 절에서는 이러한 홀로노믹 제약조건이 있는 계뿐만 아니라, 특정 유형의 비홀로노믹 계를 해결하는 데도 해밀턴의 원리가 어떻게 적용될 수 있는지 보여 주고자 합니다.\n\n먼저 홀로노믹 제약조건을 살펴보겠습니다. 해밀턴의 원리나 달랑베르의 원리로부터 라그랑주 방정식을 유도할 때, 이 홀로노믹 제약조건은 마지막 단계에서 나타나게 됩니다. 바로 일반화 좌표의 변분들을 서로 독립적인 것으로 취급하는 과정에서 말이죠. 하지만 우리가 임의로 가정한 가상 변위는 실제 제약조건과 일치하지 않을 수 있습니다. 만약 다루어야 할 변수가 엔 개이고, 여기에 대응하는 제약조건 방정식이 엠 개 존재한다면 어떻게 해야 할까요? 이 경우에는 제약조건 함수들이 모두 영이 된다는 등식을 만족해야 합니다. 이때 발생하는 여분의 가상 변위들은 라그랑주 미정 계수법을 통해 깔끔하게 제거할 수 있습니다.\n\n이에 따라 우리는 기존의 해밀턴 적분 식을 수정해야 합니다. 새로운 적분 식은 기존 라그랑지안에, 각 제약조건 함수와 라그랑주 미정 계수를 곱한 값들을 모두 더해준 뒤, 이를 시간 축에 대해 처음부터 끝까지 적분한 형태가 됩니다.\n\n여기서 일반화 좌표들과 라그랑주 미정 계수들이 서로 독립적으로 변한다고 가정하면, 우리는 총 엔 더하기 엠 개의 방정식을 얻을 수 있습니다. 이때 라그랑주 미정 계수들의 변분은 엠 개의 제약조건 방정식을 그대로 나누어 주게 됩니다. 그리고 일반화 좌표의 변분은 전체 적분 값을 영으로 만드는 식을 이끌어 내는데, 그 구조를 풀어서 설명해 드리겠습니다. 이 식은 시간에 대한 적분 기호 안에 커다란 덩어리가 들어있는 형태입니다. 그 안을 보면, 라그랑지안을 일반화 속도로 편미분한 값을 다시 시간에 대해 미분하고, 여기에 라그랑지안을 일반화 좌표로 편미분한 값을 빼줍니다. 그리고 각 제약조건 함수를 일반화 좌표로 편미분한 것에 라그랑주 미정 계수를 곱하고 이를 모두 더해준 값을 앞의 덩어리에 더해줍니다. 마지막으로 이 전체 합에 일반화 좌표의 가상 변위를 곱해서 모든 성분에 대해 더해준 뒤 시간 적분을 취한 값이 최종적으로 영이 된다는 의미입니다.\n\n그러나 앞서 언급했듯이 이 일반화 좌표의 가상 변위들은 서로 독립적이지 않습니다. 따라서 우리는 우선 임의의 가상 변위에 대해서 방정식 중 엠 개가 만족되도록 라그랑주 미정 계수들을 영리하게 선택해야 합니다. 그런 다음 나머지 엔 빼기 엠 개의 방정식에 대해서는 일반화 좌표의 변분들을 독립적으로 선택합니다.\n\n이러한 과정을 거치면 첫 번째부터 엠 번째까지의 인덱스에 대해 다음과 같은 형태의 방정식 엠 개를 얻게 됩니다. 라그랑지안을 일반화 속도로 편미분한 뒤 시간 미분한 값에서, 라그랑지안을 일반화 좌표로 편미분한 값을 빼고, 여기에 각 제약조건 함수를 일반화 좌표로 편미분한 것에 라그랑주 미정 계수를 곱해 모두 더한 값이 영이 된다는 식입니다.\n\n이 등식은 우리가 라그랑주 미정 계수를 조율하여 선택했기 때문에 성립합니다. 아울러 엠 플러스 일 번째부터 엔 번째까지의 나머지 변수들에 대해서도 방금 말씀드린 것과 완전히 동일한 표현식을 얻을 수 있습니다. 이 경우에는 가상 변위가 독립적이라는 사실로부터 등식이 자연스럽게 유도됩니다.\n\n이 방법은 비록 엠 개의 새로운 미정 계수 함수들을 도입해야 한다는 대가가 따르지만, 제약조건이 얽힌 계의 문제를 완벽하게 해결해 줍니다. 이를 물리적으로 조금 더 쉽게 이해하기 위해, 전체 엔 개의 변수 모두에 대해 위의 방정식을 다음과 같이 바꾸어 써 보겠습니다.\n\n왼쪽 변에는 기존 라그랑주 방정식의 형태인, 라그랑지안을 일반화 속도로 편미분하여 시간 미분한 값에서 라그랑지안의 일반화 좌표 편미분 값을 뺀 덩어리를 둡니다. 그리고 우측 변에는 각 제약조건 함수의 일반화 좌표 편미분에 라그랑주 미정 계수를 곱해 모두 더한 뒤, 마이너스 부호를 붙인 덩어리를 둡니다. 우리는 이 우측 변의 전체 덩어리를 일반화 힘이라고 정의하겠습니다.\n\n여기서 나타난 일반화 힘 함수는 각각의 제약조건을 유지하는 데 필요한 실제 외력의 크기를 의미합니다. 다만 수식을 전개할 때 미정 계수 더하기 항의 부호를 플러스로 잡을지 마이너스로 잡을지는 수학적으로 임의로 정하는 것이기 때문에, 수식 계산만으로는 이 일반화 힘의 크기만을 알아낼 수 있습니다. 힘이 작용하는 정확한 방향까지 판단하기 위해서는, 우리가 다루고 있는 계의 물리적인 상황을 직접 이해하고 분석해야만 합니다."
        },
        {
          "id": "GM_2-4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.4 · 2부: 반구 예제와 세미홀로노믹 설정",
          "fileName": "GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_infographic.png",
            "alt": "GM 2.4 part02 Extending Hamiltons Principle to Systems with Constraints hemisphere example and semiholonomic setup infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_infographic.png"
          },
          "content": "예를 들어, 반지름이 $a$인 매끄러운 고체 반구가 평평한 바닥을 아래로 한 채 중력가속도가 $g$인 지구에 고정되어 있다고 가정해 보겠습니다. 이 반구의 꼭대기에 질량이 $M$인 작은 물체를 중심에서 미세하게 벗어나도록 놓으면, 물체는 마찰 없이 아래로 미끄러져 내려갑니다. 좌표계 $x, y, z$의 원점은 반구의 바닥 중심에 두고, $z$축은 연직 윗방향으로 잡으며, 물체의 초기 운동은 $x\\text{-}z$ 평면 내에 포함되도록 설정합니다.\n\n> **시각적 이해를 돕기 위한 보충 설명**\n> 연직 방향인 $z$축과 수평 방향인 $x$축이 이루는 2차원 평면(반구의 단면) 상에서 물체가 움직이는 상황을 머릿속으로 그려볼 수 있습니다. 반구의 중심(원점)에서 꼭대기까지의 거리는 반지름 $a$와 같으며, 물체가 미끄러져 내려감에 따라 원점과 물체를 연결한 선분(동경 벡터)은 $z$축(꼭대기 방향)으로부터 점점 멀어지게 됩니다.\n\n이때 반구의 꼭대기에서 물체까지의 각도를 $\\theta$라고 합시다. 계의 라그랑지안(Lagrangian)은 다음과 같습니다.\n\n$$L = \\frac{1}{2}M(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2) - mgz$$\n\n초기 조건에 따라 우리는 $y$ 좌표를 무시할 수 있으므로, 제약 조건식은 다음과 같이 주어집니다.\n\n$$a - \\sqrt{x^2 + z^2} = 0$$\n\n이 문제를 $r^2 = x^2 + z^2$ 및 $\\frac{x}{z} = \\cos\\theta$의 관계를 이용하여 표현하면 , 라그랑주 방정식은 $Ma\\dot{\\theta}^2 - Mg\\cos\\theta + \\lambda = 0$ 및 $Ma^2\\ddot{\\theta} + Mga\\sin\\theta = 0$이 됩니다. 두 번째 방정식을 먼저 풀고 그 결과를 첫 번째 방정식에 대입하여 풀면 다음을 얻을 수 있습니다.\n\n$$\\dot{\\theta}^2 = -\\frac{2g}{a}\\cos\\theta + \\frac{2g}{a} \\quad \\text{및} \\quad \\lambda = Mg(3\\cos\\theta - 2)$$\n\n여기서 $\\lambda$는 물체가 구면 위에 붙어 있도록 유지해 주는 힘의 크기입니다. $\\theta = \\cos^{-1}(\\frac{2}{3})$일 때 $\\lambda = 0$이 되므로, 물체는 바로 그 각도에서 구면을 떠나 이탈하게 됩니다.\n\n일반적으로 비홀로노믹(nonholonomic, 비적분형) 제약 조건은 변분 원리로 표현할 수 없습니다. 예외 중 하나는 제약 조건들을 다음과 같은 형태의 함수 집합으로 나타낼 수 있는 세미홀로노믹(semi-holonomic) 제약 조건입니다.\n\n$$f_{\\alpha}(q_1, \\dots, q_n; \\dot{q}_1, \\dots, \\dot{q}_n; t) = 0$$\n\n여기서 $\\alpha = 1, 2, \\dots, m$입니다. 방정식 (2.24)는 보통 다음과 같은 제한된 형태로 자주 나타납니다.\n\n$$f_{\\alpha} = \\sum_{k=1}^n a_{\\alpha k}\\dot{q}_k + a_0 = 0$$\n\n여기서 $f_{\\alpha}$는 적분 불가능한 미분식들의 집합이며, $a_{\\alpha k}$와 $a_0$는 $q_i$와 $t$의 함수입니다. 이러한 경우에는 제약 조건을 적분할 수 없기 때문에, 변수의 개수가 방정식의 개수보다 더 많아지게 됩니다.\n\n그럼에도 불구하고, 우리는 다음과 같이 변분을 취함으로써 이전과 동일한 방식으로 변분들을 다룰 수 있습니다.\n\n$$\\delta \\int_{t_1}^{t_2} \\left( L + \\sum_{\\alpha=1}^m \\mu_{\\alpha} f_{\\alpha} \\right) dt = 0$$\n\n여기서 기호 $\\mu$는 이 승수들을 홀로노믹 라그랑주 승수와 구별하기 위해 사용되었습니다. 만약 $\\mu_{\\alpha} = \\mu_{\\alpha}(t)$라고 가정한다면, 가상 변위(virtual displacement)로 인해 도출되는 방정식은 다음과 같습니다.\n\n$$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{q}_k} - \\frac{\\partial L}{\\partial q_k} = Q_k = -\\sum_{\\alpha=1}^m \\mu_{\\alpha} \\frac{\\partial f_{\\alpha}}{\\partial \\dot{q}_k}$$\n\n그리고 $\\delta \\mu_{\\alpha}$에 대한 변분은 제약 조건 방정식 (2.25)를 제공합니다. 이 두 집합(식 (2.26)과 식 (2.27))을 합치면 $n+m$개의 미지수에 대한 $n+m$개의 방정식이 구성됩니다. 따라서 이 식들은 일반화된 힘 $Q_k$를 갖는 $n+m$개의 홀로노믹 계와 동등한 것으로 해석할 수 있습니다. 이를 더 일반적인 형태인 $\\mu_{\\alpha} = \\mu_{\\alpha}(q_1, \\dots, q_n; \\dot{q}_1, \\dots, \\dot{q}_n; t)$로 확장하는 것은 간단합니다.\n\n하나의 예시로, 다음과 같은 라그랑지안을 가진 입자를 생각해 봅시다.\n\n$$L = \\frac{1}{2}m(\\dot{x}^2 + \\dot{y}^2 + \\dot{z}^2) - V(x,y,z)$$\n\n이 입자는 다음과 같은 비홀로노믹 제약 조건을 따릅니다.\n\n$$f(x, \\dot{x}, y, \\dot{y}, z) = \\dot{x}y^2 + x\\dot{y} + kz = 0$$\n\n여기서 $k$는 상수입니다. 이로 인해 유도되는 운동 방정식들은 다음과 같습니다.\n\n$$m\\ddot{x} + \\mu y^2 - \\frac{\\partial V}{\\partial x} = 0$$\n\n$$m\\ddot{y} + \\mu x - \\frac{\\partial V}{\\partial y} = 0$$\n\n그리고,\n\n$$m\\ddot{z} - \\frac{\\partial V}{\\partial z} = 0$$\n\n이제 우리는 이 네 개의 방정식(식 (2.29)와 식 (2.30a, b, c))을 풀어 $x(t)$, $y(t)$, $z(t)$ 및 승수 $\\mu(t)$를 구합니다."
        },
        {
          "id": "GM_2-4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.4 · 2부: 반구 예제와 세미홀로노믹 설정",
          "fileName": "GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_infographic.png",
            "alt": "GM 2.4 part02 Extending Hamiltons Principle to Systems with Constraints hemisphere example and semiholonomic setup infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part02_Extending_Hamiltons_Principle_to_Systems_with_Constraints_hemisphere_example_and_semiholonomic_setup_infographic.png"
          },
          "content": "예를 들어, 반지름이 어떤 상수인 매끄러운 고체 반구가 평평한 바닥을 아래로 한 채 일정한 중력가속도를 가진 지구에 고정되어 있다고 가정해 보겠습니다. 이 반구의 꼭대기에 특정 질량을 가진 작은 물체를 중심에서 미세하게 벗어나도록 놓으면, 물체는 마찰 없이 아래로 미끄러져 내려갑니다. 좌표계의 원점은 반구의 바닥 중심에 두고, 수직 축은 연직 윗방향으로 잡으며, 물체의 초기 운동은 수평 축과 수직 축이 이루는 2차원 평면 내에 포함되도록 설정합니다.\n\n연직 방향인 수직 축과 수평 방향인 축이 이루는 2차원 평면, 즉 반구의 단면 상에서 물체가 움직이는 상황을 머릿속으로 그려볼 수 있습니다. 반구의 중심인 원점에서 꼭대기까지의 거리는 반지름과 같으며, 물체가 미끄러져 내려감에 따라 원점과 물체를 연결한 선분은 꼭대기 방향인 수직 축으로부터 점점 멀어지게 됩니다.\n\n이때 반구의 꼭대기에서 물체까지의 각도를 설정합시다. 계의 라그랑지안은 속도의 제곱 합에 질량과 2분의 1을 곱한 값인 운동에너지에서, 질량과 중력가속도와 수직 높이를 곱한 값인 위치에너지를 뺀 것과 같습니다.\n\n초기 조건에 따라 우리는 수평면 상의 나머지 하나의 좌표축을 무시할 수 있으므로, 제약 조건식은 반지름에서 두 좌표의 제곱의 합에 루트를 씌운 거리를 뺀 값이 영이 된다는 식으로 주어집니다.\n\n이 문제를 원점으로부터의 거리 제곱이 두 좌표의 제곱 합과 같다는 관계, 그리고 두 좌표의 비율이 각도의 코사인 값과 같다는 관계를 이용하여 표현하면, 라그랑주 방정식은 두 개의 식으로 나타납니다. 첫 번째 식은 질량과 반지름과 각속도 제곱의 곱에서 질량과 중력가속도와 각도의 코사인 값을 곱한 것을 빼고 여기에 라그랑주 승수를 더하면 영이 된다는 식입니다. 두 번째 식은 질량과 반지름 제곱과 각가속도의 곱에 질량과 중력가속도와 반지름과 각도의 사인 값을 곱한 것을 더하면 영이 된다는 식입니다. 두 번째 방정식을 먼저 풀고 그 결과를 첫 번째 방정식에 대입하여 풀면 다음을 얻을 수 있습니다.\n\n각속도의 제곱은 반지름 분의 중력가속도의 두 배에 각도의 코사인 값을 곱한 것에 음의 부호를 붙이고, 여기에 다시 반지름 분의 중력가속도의 두 배를 더한 것과 같습니다. 그리고 제약 조건을 나타내는 라그랑주 승수는 질량과 중력가속도의 곱에, 각도의 코사인 값의 세 배에서 이롤 뺀 값을 곱한 것과 같습니다.\n\n여기서 라그랑주 승수는 물체가 구면 위에 붙어 있도록 유지해 주는 힘의 크기입니다. 각도의 코사인 값이 3분의 2가 되어 라그랑주 승수가 영이 될 때, 물체는 바로 그 각도에서 구면을 떠나 이탈하게 됩니다.\n\n일반적으로 비홀로노믹, 즉 비적분형 제약 조건은 변분 원리로 표현할 수 없습니다. 예외 중 하나는 제약 조건들을 일반화 좌표와 일반화 속도, 그리고 시간의 함수들로 이루어진 집합이 영이 된다는 형태로 나타낼 수 있는 세미홀로노믹 제약 조건입니다.\n\n이 제약 조건 방정식은 보통 제한된 형태로 자주 나타나는데, 각 성분의 속도에 좌표와 시간의 함수인 계수를 곱해 모두 더한 뒤, 여기에 시간만의 함수를 더한 값이 영이 된다는 일차 결합의 형태를 가집니다.\n\n여기서 제약 조건식들은 적분 불가능한 미분식들의 집합이며, 앞서 말한 계수들은 일반화 좌표와 시간의 함수입니다. 이러한 경우에는 제약 조건을 적분할 수 없기 때문에, 변수의 개수가 방정식의 개수보다 더 많아지게 됩니다.\n\n그럼에도 불구하고, 우리는 라그랑지안에 제약 조건식들과 새로운 미지의 승수들을 각각 곱해 모두 더한 뒤, 이 전체 식의 시간 적분에 변분을 취한 값이 영이 된다고 설정함으로써 이전과 동일한 방식으로 변분들을 다룰 수 있습니다.\n\n여기서 새로운 승수 기호는 이 승수들을 홀로노믹 라그랑주 승수와 구별하기 위해 사용되었습니다. 만약 이 승수들이 시간만의 함수라고 가정한다면, 가상 변위로 인해 도출되는 라그랑주 방정식은 다음과 같습니다. 라그랑지안을 일반화 속도로 편미분한 값의 시간 변화율에서 라그랑지안을 일반화 좌표로 편미분한 값을 뺀 것은 일반화된 힘과 같은데, 이는 각 제약 조건식을 일반화 속도로 편미분한 것에 시간의 함수인 승수를 곱해 모든 제약 조건에 대해 더한 뒤 음의 부호를 붙인 것과 같습니다.\n\n그리고 승수들의 미소한 변화에 대한 변분은 조금 전 말씀드린 일차 결합 형태의 제약 조건 방정식을 그대로 제공합니다. 일반화된 힘에 대한 방정식들과 이 제약 조건 방정식들을 합치면 좌표와 승수라는 모든 미지수의 개수만큼 방정식이 구성됩니다. 따라서 이 식들은 일반화된 힘을 갖는 홀로노믹 계와 동등한 것으로 해석할 수 있습니다. 이를 승수가 좌표와 속도, 그리고 시간 모두의 함수인 더 일반적인 형태로 확장하는 것은 간단합니다.\n\n하나의 예시로, 세 좌표축 방향의 속도 제곱 합에 질량과 2분의 1을 곱한 운동에너지에서 위치에너지를 뺀 라그랑지안을 가진 입자를 생각해 봅시다.\n\n이 입자는 다음과 같은 비홀로노믹 제약 조건을 따릅니다. 첫 번째 좌표의 속도에 두 번째 좌표의 제곱을 곱한 값, 첫 번째 좌표와 두 번째 좌표 속도의 곱, 그리고 어떤 상수가 곱해진 세 번째 좌표의 값을 모두 더하면 영이 된다는 조건입니다.\n\n이로 인해 유도되는 운동 방정식들은 다음과 같이 세 축 방향으로 나타납니다. 첫 번째 식은 질량과 첫 번째 좌표의 가속도 곱에, 승수와 두 번째 좌표 제곱의 곱을 더하고, 여기서 위치에너지를 첫 번째 좌표로 편미분한 값을 빼면 영이 된다는 식입니다. 두 번째 식은 질량과 두 번째 좌표의 가속도 곱에, 승수와 첫 번째 좌표의 곱을 더하고, 여기서 위치에너지를 두 번째 좌표로 편미분한 값을 빼면 영이 된다는 식입니다. 마지막 세 번째 식은 질량과 세 번째 좌표의 가속도 곱에서 위치에너지를 세 번째 좌표로 편미분한 값을 빼면 영이 된다는 식입니다.\n\n이제 우리는 제약 조건식과 이 세 개의 운동 방정식을 포함한 총 네 개의 방정식을 연립하여 풀어 각 좌표의 시간 함수와 미지의 승수 함수를 구합니다."
        },
        {
          "id": "GM_2-4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_Korean_Translation",
          "kind": "translation",
          "version": "part 03",
          "label": "GM_2.4 · 3부: 구속력과 무일 조건",
          "fileName": "GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_infographic.png",
            "alt": "GM 2.4 part03 Extending Hamiltons Principle to Systems with Constraints constraint forces and workless condition infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_infographic.png"
          },
          "content": "이 과정에서 우리는 원래 구하고자 했던 것보다 더 많은 정보를 얻었습니다. 우리가 처음에 찾으려고 했던 일반화 좌표 $q_k$뿐만 아니라, $m$개의 라그랑주 승수 $\\lambda_l$도 함께 얻게 되기 때문입니다.\n\n그렇다면 이 $\\lambda$들의 물리적 의미는 무엇일까요? 계에 걸려 있는 구속 조건들을 제거하는 대신, 계의 운동이 변하지 않도록 외력 $Q_k^\\prime$을 가한다고 가정해 봅시다. 이 경우 운동 방정식은 여전히 동일하게 유지됩니다. 이러한 추가 외력들은 구속 조건을 만족하기 위해 계에 가해지는 힘이므로, 당연히 '구속력'과 같아야 합니다. 이러한 힘 $Q_k^\\prime$의 영향 아래에서 운동 방정식은 다음과 같이 쓰여집니다.\n\n$$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{q}_{k}}-\\frac{\\partial L}{\\partial q_{k}}=Q_{k}^{\\prime}$$\n\n하지만 이 방정식은 식 (2.24)와 반드시 일치해야 합니다. 따라서 우리는 $Q_k^\\prime$을 일반화된 구속력으로 식별할 수 있습니다. 이러한 유형의 문제에서는 공식화 과정에서 구속력이 실제로 소거되지 않습니다. 오히려 구속력이 정답의 일부로써 직접 주어지게 됩니다.\n\n명백하게 드러나지는 않지만, 여기에서 준홀로노믹(semiholonomic) 계에 적용된 해밀턴의 원리 버전 역시 '가상 변위 동안 구속력이 일을 하지 않는다'는 조건을 필요로 합니다. 이는 해밀턴의 원리를 다음과 같은 형태로 다시 작성해 보면 가장 쉽게 이해할 수 있습니다.\n\n$$\\delta\\int_{t_{1}}^{t_{2}}L~dt=\\delta\\int_{t_{1}}^{t_{2}}T~dt-\\delta\\int_{t_{1}}^{t_{2}}U~dt=0$$\n\n만약 일반화 퍼텐셜에 대한 적분의 변분을 2.3절의 절차에 따라 수행하면, 이 원리는 다음과 같은 형태를 취하게 됩니다.\n\n$$\\delta\\int_{t_{1}}^{t_{2}}T~dt=\\int_{t_{1}}^{t_{2}}\\sum_{k}\\left[\\frac{\\partial U}{\\partial q_{k}}-\\frac{d}{dt}\\left(\\frac{\\partial U}{\\partial\\dot{q}_{k}}\\right)\\right]\\delta q_{k}dt$$\n\n또는 식 (1.58)에 의해 다음과 같이 나타낼 수 있습니다.\n\n$$\\delta\\int_{t_{1}}^{t_{2}}T~dt=-\\int_{t_{1}}^{t_{2}}\\sum_{k}Q_{k}\\delta q_{k}dt$$\n\n이러한 표현 방식에서 해밀턴의 원리가 말하고자 하는 바는 다음과 같습니다. 두 이웃한 경로 사이의 '운동 에너지 시간 적분 차이'는, 두 경로 사이의 가상 변위 동안 '행해진 일의 시간 적분'에 음의 부호를 붙인 것과 같다는 것입니다. 여기서 포함되는 일은 오직 일반화 퍼텐셜로부터 유도될 수 있는 힘에 의해서만 행해진 일입니다. 동일한 해밀턴의 원리가 홀로노믹 계와 준홀로노믹 계 모두에 성립하려면, 준홀로노믹 구속에 의한 추가적인 힘이 변위 $\\delta q_{k}$ 동안 일을 하지 않아야 한다는 조건이 반드시 요구됩니다.\n\n이러한 제한 조건은 홀로노믹 구속력의 가상 일 또한 0이어야 한다는 앞서의 조건(1.4절 참조)과 평행을 이룹니다. 실제 적용에서 이 제한 조건은 큰 걸림돌이 되지 않는데, 준홀로노믹 정식화가 사용되는 많은 문제들이 '미끄러짐 없이 구르는 운동(rolling without slipping)'과 관련되어 있으며, 이 경우 구속 조건이 일을 하지 않는다는 것이 명백하기 때문입니다.\n\n참고로 식 (2.20)은 가장 일반적인 형태의 비홀로노믹 구속 조건은 아닙니다. 예를 들어, 부등식 형태로 주어지는 구속 방정식은 여기에 포함되지 않습니다. 반면에, 이 식은 홀로노믹 구속 조건은 포함할 수 있습니다. 다음과 같은 홀로노믹 구속 방정식은,\n\n$$f(q_{1},q_{2},q_{3},...,q_{n},t)=0$$\n\n$\\dot{q}_k$에 대한 의존성이 없는 식 (2.20)과 동일합니다. 따라서 라그랑주 승수법은 (1) 모든 좌표 $q$를 독립적인 좌표로 축소하는 것이 불편하거나, (2) 구속력을 직접 구하고자 할 때 홀로노믹 구속 조건에 대해서도 유용하게 사용될 수 있습니다."
        },
        {
          "id": "GM_2-4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_KR_TTS",
          "kind": "tts",
          "version": "part 03",
          "label": "GM_2.4 · 3부: 구속력과 무일 조건",
          "fileName": "GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_infographic.png",
            "alt": "GM 2.4 part03 Extending Hamiltons Principle to Systems with Constraints constraint forces and workless condition infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part03_Extending_Hamiltons_Principle_to_Systems_with_Constraints_constraint_forces_and_workless_condition_infographic.png"
          },
          "content": "이 과정에서 우리는 원래 구하고자 했던 것보다 더 많은 정보를 얻었습니다. 우리가 처음에 찾으려고 했던 여러 개의 일반화 좌표뿐만 아니라, 제약 조건의 개수만큼 존재하는 라그랑주 승수도 함께 얻게 되기 때문입니다.\n\n그렇다면 이 라그랑주 승수들의 물리적 의미는 무엇일까요? 계에 걸려 있는 구속 조건들을 제거하는 대신, 계의 운동이 변하지 않도록 외력을 가한다고 가정해 봅시다. 이 경우 운동 방정식은 여전히 동일하게 유지됩니다. 이러한 추가 외력들은 구속 조건을 만족하기 위해 계에 가해지는 힘이므로, 당연히 구속력과 같아야 합니다. 이 구속력의 영향 아래에서 운동 방정식은 다음과 같이 표현할 수 있습니다.\n\n시간에 따른 일반화 속도별 라그랑지안의 편미분 값의 총변화량에서, 일반화 좌표에 대한 라그랑지안의 편미분 값을 뺀 것은 외력과 같습니다.\n\n하지만 이 방정식은 이전에 다룬 비홀로노믹 구속력 방정식과 반드시 일치해야 합니다. 따라서 우리는 이 외력을 일반화된 구속력으로 정의할 수 있습니다. 이러한 유형의 문제에서는 공식을 만드는 과정에서 구속력이 실제로 소거되지 않습니다. 오히려 구속력이 우리가 구하는 정답의 일부로서 직접 주어지게 됩니다.\n\n명백하게 드러나지는 않지만, 여기에서 준홀로노믹 계에 적용된 해밀턴의 원리 역시 가상 변위가 일어나는 동안 구속력이 일을 하지 않는다는 조건을 필요로 합니다. 이는 해밀턴의 원리를 다음과 같은 형태로 다시 풀어보면 가장 쉽게 이해할 수 있습니다.\n\n처음 시각부터 나중 시각까지 라그랑지안을 시간 적분한 값의 변분은, 운동 에너지를 시간 적분한 값의 변분에서 퍼텐셜 에너지를 시간 적분한 값의 변분을 뺀 것과 같으며 이 전체 값은 영이 됩니다.\n\n만약 일반화 퍼텐셜에 대한 적분의 변분을 이전 절차에 따라 수행하면, 해밀턴의 원리는 다음과 같은 형태를 취하게 됩니다.\n\n운동 에너지를 시간 적분한 값의 변분은, 일반화 퍼텐셜을 일반화 좌표로 편미분한 값에서 일반화 속도별 일반화 퍼텐셜의 편미분 값의 시간 변화량을 빼고, 여기에 가상 변위를 곱하여 모든 성분에 대해 더한 값을 처음 시각부터 나중 시각까지 시간 적분한 것과 같습니다.\n\n이 식은 다른 정리를 이용하면 더 간결하게 나타낼 수 있습니다.\n\n운동 에너지를 시간 적분한 값의 변분은, 일반화 구속력과 가상 변위를 곱하여 모든 성분에 대해 더한 값을 처음 시각부터 나중 시각까지 시간 적분한 뒤, 여기에 음의 부호를 붙인 것과 같습니다.\n\n이러한 표현 방식에서 해밀턴의 원리가 말하고자 하는 바는 다음과 같습니다. 두 이웃한 경로 사이의 운동 에너지 시간 적분 차이는, 두 경로 사이의 가상 변위 동안 행해진 일의 시간 적분에 음의 부호를 붙인 것과 같다는 것입니다. 여기서 포함되는 일은 오직 일반화 퍼텐셜로부터 유도될 수 있는 힘에 의해서만 행해진 일입니다. 동일한 해밀턴의 원리가 홀로노믹 계와 준홀로노믹 계 모두에 성립하려면, 준홀로노믹 구속에 의해 추가되는 힘이 가상 변위 동안 일을 하지 않아야 한다는 조건이 반드시 요구됩니다.\n\n이러한 제한 조건은 홀로노믹 구속력이 만드는 가상 일 또한 영이어야 한다는 이전의 조건과 평행을 이룹니다. 실제 문제를 풀 때 이 제한 조건은 큰 걸림돌이 되지 않는데, 준홀로노믹 정식화가 사용되는 많은 문제들이 미끄러짐 없이 구르는 운동과 관련되어 있으며, 이 경우 구속 조건이 일을 하지 않는다는 것이 물리적으로 명백하기 때문입니다.\n\n참고로 우리가 앞에서 다룬 제약 식은 가장 일반적인 형태의 비홀로노믹 구속 조건은 아닙니다. 예를 들어 부등식 형태로 주어지는 구속 방정식은 여기에 포함되지 않습니다. 반면에 이 식은 홀로노믹 구속 조건은 포함할 수 있습니다. 다음과 같이 여러 일반화 좌표와 시간으로 이루어진 홀로노믹 구속 방정식 함수가 영이라는 식은 , 일반화 속도에 대한 의존성이 없는 비홀로노믹 구속 식과 본질적으로 동일합니다. 따라서 라그랑주 승수법은 모든 좌표를 독립적인 좌표로 축소하는 것이 정역학적이나 기하학적으로 불편할 때, 또는 우리가 구속력을 직접 구하고자 할 때 홀로노믹 구속 조건에 대해서도 유용하게 사용될 수 있습니다."
        },
        {
          "id": "GM_2-4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_Korean_Translation",
          "kind": "translation",
          "version": "part 04",
          "label": "GM_2.4 · 4부: 굴러가는 고리 예제",
          "fileName": "GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_infographic.png",
            "alt": "GM 2.4 part04 Extending Hamiltons Principle to Systems with Constraints rolling hoop example infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_infographic.png"
          },
          "content": "이 방법의 또 다른 예로, 다소 단순한 예시인 경사면을 따라 미끄러짐 없이 굴러 내려가는 고리(hoop)를 생각해 봅시다. 이 예시에서 \"구르기(rolling)\"라는 제약 조건은 사실 홀로노믹(holonomic) 제약 조건이지만, 이 사실은 우리의 논의에서 중요하지 않습니다. 반면, 고리가 경사면 위에 있어야 한다는 홀로노믹 제약 조건은 우리가 선택할 일반화 좌표계 안에 암묵적으로 포함될 것입니다.\n\n---\n\n> **[교재 그림 2.5: 경사면을 굴러 내려가는 고리의 기하학적 구성 설명]**\n> 본문의 역학적 상황을 이해하기 위해 시각적 구조를 설명하겠습니다. 경사각이 $\\phi$인 직각삼각형 모양의 경사면이 바닥에 놓여 있습니다. 이 경사면의 빗면을 따라 반지름이 $r$이고 질량이 $M$인 원형 고리가 아래쪽으로 굴러 내려가고 있습니다.\n> 고리의 운동을 기술하기 위해 두 가지 일반화 좌표를 사용합니다. 첫 번째는 경사면의 꼭대기(시작점)로부터 고리의 질량 중심(원 중심)까지 빗면을 따라 측정거리인 $x$입니다. 고리가 아래로 내려갈수록 이 $x$ 값은 증가하며 화살표는 빗면 아래 방향을 향합니다. 두 번째는 고리의 회전 운동을 나타내는 각도 $\\theta$입니다. 고리의 중심에서 경사면과의 접점까지 내린 반지름 선을 기준으로, 고리가 회전함에 따라 회전한 각도를 $\\theta$로 정의하며 화살표로 회전 방향을 표시하고 있습니다.\n> \n> \n\n---\n\n[그림 2.5]에서 볼 수 있듯이 두 개의 일반화 좌표는 $x$와 $\\theta$이며, 미끄러짐 없는 구르기 운동의 제약 조건식은 다음과 같습니다.\n\n$$r \\, d\\theta = dx$$\n\n계의 전체 운동 에너지는 질량 중심의 병진 운동 에너지와 질량 중심을 축으로 하는 회전 운동 에너지의 합으로 다음과 같이 분해하여 나타낼 수 있습니다.\n\n$$T = \\frac{1}{2}M\\dot{x}^2 + \\frac{1}{2}Mr^2\\dot{\\theta}^2$$\n\n경사면의 전체 길이를 $l$이라고 할 때, 고리의 위치 에너지는 다음과 같습니다.\n\n$$V = Mg(l-x)\\sin\\phi$$\n\n따라서 라그랑지안($L = T - V$)은 다음과 같이 주어집니다.\n\n$$L = \\frac{M\\dot{x}^2}{2} + \\frac{Mr^2\\dot{\\theta}^2}{2} - Mg(l-x)\\sin\\phi$$\n\n제약 조건식이 하나이므로, 오직 하나의 라그랑주 미정계수 $\\lambda$만 필요합니다. 제약 조건식에서 각 미분 항 앞에 붙는 계수들은 다음과 같습니다.\n\n$$a_{\\theta} = r$$\n\n$$a_{x} = -1$$\n\n이에 따라 유도되는 두 개의 라그랑주 방정식은 다음과 같습니다.\n\n$$M\\ddot{x} - Mg\\sin\\phi + \\lambda = 0$$\n\n$$Mr^2\\ddot{\\theta} - \\lambda r = 0$$\n\n여기에 제약 조건식을 시간으로 미분한 형태인 다음 식을 결합하면,\n\n$$r\\dot{\\theta} = \\dot{x}$$\n\n우리가 구하고자 하는 세 개의 미지수 $\\theta, x, \\lambda$에 대한 세 개의 방정식이 구성됩니다.\n\n식 (2.39)를 시간에 대해 한 번 더 미분하면 다음과 같습니다.\n\n$$r\\ddot{\\theta} = \\ddot{x}$$\n\n따라서 식 (2.38)로부터 다음 관계를 얻을 수 있고,\n\n$$M\\ddot{x} = \\lambda$$\n\n이를 식 (2.37)에 대입하여 정리하면 고리의 가속도는 다음과 같이 구해집니다.\n\n$$\\ddot{x} = \\frac{g\\sin\\phi}{2}$$\n\n이와 함께 라그랑주 미정계수 $\\lambda$와 각가속도 $\\ddot{\\theta}$는 각각 다음과 같이 계산됩니다.\n\n$$\\lambda = \\frac{Mg\\sin\\phi}{2}$$\n\n$$\\ddot{\\theta} = \\frac{g\\sin\\phi}{2r}$$\n\n결과적으로, 구르는 고리는 마찰이 없는 평면을 미끄러져 내려갈 때 마찰이 없어 얻게 될 가속도($g\\sin\\phi$)의 정확히 절반의 가속도로 경사면을 굴러 내려가며, 이때 구르기 제약 조건을 만족시키기 위해 작용하는 마찰력(제약력)의 크기는 $\\lambda = \\frac{Mg\\sin\\phi}{2}$가 됨을 알 수 있습니다."
        },
        {
          "id": "GM_2-4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_KR_TTS",
          "kind": "tts",
          "version": "part 04",
          "label": "GM_2.4 · 4부: 굴러가는 고리 예제",
          "fileName": "GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_infographic.png",
            "alt": "GM 2.4 part04 Extending Hamiltons Principle to Systems with Constraints rolling hoop example infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.4_Extending_Hamiltons_Principle_to_Systems_with_Constraints/GM_2.4_part04_Extending_Hamiltons_Principle_to_Systems_with_Constraints_rolling_hoop_example_infographic.png"
          },
          "content": "이 방법의 또 다른 예로, 다소 단순한 예시인 경사면을 따라 미끄러짐 없이 굴러 내려가는 원형 고리의 운동을 생각해 봅시다. 이 예시에서 미끄러짐 없이 구른다는 제약 조건은 사실 적분이 가능한 홀로노믹 제약 조건이지만, 이 사실은 지금 우리의 논의에서 그리 중요하지 않습니다. 반면에 고리가 경사면을 벗어나지 않고 항상 그 위에 서 있어야 한다는 홀로노믹 제약 조건은, 우리가 앞으로 선택할 일반화 좌표계 안에 이미 암묵적으로 포함되어 있습니다.\n\n이 역학적 상황을 시각적으로 상상해 보실 수 있도록 구조를 먼저 설명해 드릴게요. 바닥에 경사각이 파이인 직각삼각형 모양의 경사면이 놓여 있습니다. 이 경사면의 빗면을 따라서 반지름이 아르고 질량이 대문자 엠인 원형 고리가 아래쪽으로 굴러 내려가는 모습을 머릿속으로 그려보세요.\n\n이 고리의 운동을 명확하게 표현하기 위해 우리는 두 가지 일반화 좌표를 사용할 것입니다. 첫 번째 좌표는 경사면의 꼭대기인 시작점으로부터 고리의 질량 중심, 즉 원의 중심까지 빗면을 따라 측정한 거리인 엑스입니다. 고리가 아래로 내려갈수록 이 엑스 값은 점점 증가하게 됩니다. 두 번째 좌표는 고리가 회전한 운동을 나타내는 각도 세타입니다. 고리의 중심에서 경사면과 맞닿은 접점까지 내린 반지름 선을 기준으로 삼아서, 고리가 굴러감에 따라 회전한 각도를 세타라고 정의하겠습니다.\n\n이 상황에서 두 개의 일반화 좌표인 엑스와 세타가 정해졌으니, 미끄러짐 없이 구르는 운동을 만족하기 위한 제약 조건식을 세울 수 있습니다. 이 제약 조건은 고리의 반지름과 회전각의 미소 변화량인 디세타를 곱한 값이, 빗면을 따라 이동한 미소 거리인 디엑스와 항상 같아야 한다는 것을 의미합니다. 즉, 반지름과 회전각 미분량의 곱은 이동 거리 미분량과 같습니다.\n\n이제 계의 에너지를 살펴볼텐데, 고리의 전체 운동 에너지는 질량 중심이 직선으로 이동하는 병진 운동 에너지와, 질량 중심을 축으로 하여 뱅글뱅글 도는 회전 운동 에너지의 합으로 분해할 수 있습니다. 병진 운동 에너지는 질량에 속도의 제곱을 곱한 뒤 이로 나눈 값이고, 회전 운동 에너지는 질량에 반지름의 제곱과 각속도의 제곱을 모두 곱한 뒤 이로 나눈 값입니다. 전체 운동 에너지는 이 두 값을 더한 것과 같습니다.\n\n다음으로 고리의 위치 에너지를 구해 보겠습니다. 경사면의 전체 길이를 엘이라고 하면, 현재 고리의 높이를 반영한 위치 에너지는 질량과 중력가속도, 그리고 전체 길이에서 이동 거리 엑스를 뺀 값에 경사각 파이의 사인 값을 모두 곱한 형태로 주어집니다.\n\n따라서 역학적 계를 기술하는 라그랑지안은 운동 에너지에서 위치 에너지를 뺀 값으로 정의됩니다. 구체적으로 풀어서 말씀드리면, 질량과 속도 제곱의 곱을 이로 나눈 값에, 질량과 반지름 제곱과 각속도 제곱의 곱을 이로 나눈 값을 더해준 뒤, 여기서 방금 구한 위치 에너지인 질량, 중력가속도, 전체 길이 마이너스 이동 거리에 경사각 사인 값을 곱한 식을 통째로 빼 주면 됩니다.\n\n여기서 제약 조건식이 단 하나뿐이므로, 제약력을 나타내기 위한 라그랑주 미정계수 람다도 오직 하나만 도입하면 됩니다. 제약 조건식에서 각 좌표의 미분 항 앞에 결합되는 계수들을 살펴보면, 회전각 성분의 계수는 고리의 반지름 아르가 되고, 이동 거리 엑스 성분의 계수는 마이너스 일이 됩니다.\n\n이 계수들을 사용해서 최종적으로 유도되는 두 개의 라그랑주 방정식은 다음과 같습니다. 첫 번째 방정식은 질량과 가속도의 곱에서, 질량과 중력가속도와 경사각 사인 값의 곱을 빼고, 여기에 라그랑주 미정계수 람다를 더하면 영이 된다는 식입니다. 두 번째 방정식은 질량에 반지름 제곱과 각가속도를 모두 곱한 값에서, 라그랑주 미정계수 람다와 반지름 아르의 곱을 빼면 영이 된다는 식입니다.\n\n여기에 처음에 구했던 제약 조건식을 시간으로 한 번 미분해서 얻은 관계식, 즉 반지름과 각속도의 곱은 선속도와 같다는 식을 결합해 줍니다. 이렇게 하면 우리가 최종적으로 알고 싶어 하는 세 개의 미지수인 회전각 세타, 이동 거리 엑스, 그리고 미정계수 람다를 모두 구해낼 수 있는 세 개의 방정식이 완벽하게 구성됩니다.\n\n그럼 방정식을 차근차근 풀어보겠습니다. 방금 말씀드린 제약 조건식을 시간에 대해 한 번 더 미분하면, 반지름과 각가속도의 곱은 선가속도와 같다는 결론을 얻습니다. 이 관계를 두 번째 라그랑주 방정식에 대입하여 정리하면, 질량과 선가속도의 곱은 곧 라그랑주 미정계수 람다와 같다는 아주 단순한 식을 유도할 수 있습니다.\n\n이제 이 결론을 첫 번째 라그랑주 방정식에 대입해서 식을 깨끗하게 정리해 보겠습니다. 그러면 우리가 최종적으로 구하고자 했던 고리의 선가속도를 얻을 수 있는데요 , 고리의 선가속도는 중력가속도와 경사각 사인 값을 곱한 것을 이로 나눈 값과 정확히 일치하게 됩니다.\n\n이 선가속도 값을 바탕으로 제약력을 의미하는 라그랑주 미정계수 람다와 고리의 회전 각가속도 역시 각각 계산할 수 있습니다. 라그랑주 미정계수 람다는 질량과 중력가속도와 경사각 사인 값을 모두 곱한 뒤 이로 나눈 값이 되고 , 각가속도는 중력가속도와 경사각 사인 값의 곱을 반지름 아르의 두 배로 나눈 값으로 계산됩니다.\n\n물리학적으로 이 결과가 뜻하는 바를 정리해 드리겠습니다. 굴러 내려가는 원형 고리는 마찰이 전혀 없는 깨끗한 경사면을 그냥 미끄러져 내려갈 때 얻게 될 가속도 크기와 비교했을 때, 정확히 절반밖에 안 되는 가속도를 가지며 천천히 굴러 내려가게 됩니다. 그리고 고리가 미끄러지지 않고 온전히 구를 수 있도록 방해하며 지탱해 주는 실제 마찰력, 즉 제약력의 크기는 방금 구한 미정계수 람다의 값인, 질량 곱하기 중력가속도 곱하기 경사각 사인 값을 이로 나눈 만큼의 크기가 됨을 명확하게 확인할 수 있습니다."
        }
      ]
    },
    {
      "id": "GM_2.5",
      "title": "변분 원리 정식화의 장점",
      "category": "minor_unit",
      "startPage": "70",
      "endPage": "74",
      "pageCount": "5",
      "pageLabelStart": "51",
      "pageLabelEnd": "55",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.5 · 1부: 장점과 RL 항력 유비",
          "fileName": "GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_infographic.png",
            "alt": "GM 2.5 part01 Advantages of a Variational Principle Formulation advantages and rl drag analogy infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_infographic.png"
          },
          "content": "## 2.5 변분 원리 공식화의 장점 (ADVANTAGES OF A VARIATIONAL PRINCIPLE FORMULATION)\n\n해밀턴 원리의 원래 공식(2.2)을 몇 가지 비홀로노믹(nonholonomic) 구속 조건까지 포함하도록 확장할 수는 있지만, 실제적으로 이 역학 공식은 계에 대한 독립 좌표의 라그랑지안을 설정할 수 있을 때 가장 유용합니다. 변분 원리 공식은 흔히 \"우아하다\"고 묘사되어 왔는데, 왜냐하면 압축된 해밀턴 원리 안에 퍼텐셜로부터 유도 가능한 힘을 가진 홀로노믹 계의 모든 역학이 포함되어 있기 때문입니다.\n\n또한 이 원리는 특정 일반화 좌표계를 참조하지 않고도 정의할 수 있는 물리량, 즉 운동 에너지와 퍼텐셜 에너지만을 포함한다는 장점을 가집니다. 따라서 이 공식화는 계의 좌표 선택에 관계없이 자동으로 불변(invariant)성을 유지합니다.\n\n변분 해밀턴 원리를 보면, 섹션 1.4의 끝에서 언급했듯이 라그랑지안이 좌표와 시간의 임의 함수에 대한 '전미분(total time derivative)'만큼 항상 불확실한(상수만큼의 자유도가 있는) 이유를 명확히 알 수 있습니다. 시작점 1과 끝점 2 사이에서 이러한 전미분의 시간 적분 값은 오직 끝점에서의 임의 함수의 값에만 의존합니다. 끝점에서의 변분(variation)은 0이므로, 라그랑지안에 임의의 시간 미분 항을 더하더라도 적분 전체의 변분 동작에는 아무런 영향을 미치지 않습니다.\n\n또 다른 장점은 라그랑지안 공식이 탄성장, 전자기장, 소립자의 장 특성과 같이 보통 역학에서 다루지 않는 계를 설명하는 데도 쉽게 확장될 수 있다는 점입니다. 이러한 일반화 중 일부는 나중에 다루겠지만, 일반적인 역학의 틀을 벗어난 적용의 세 가지 간단한 예로 RL 회로, LC 회로, 그리고 결합 회로(coupled circuits)의 경우를 살펴보겠습니다.\n\n우선 전압 $V$인 배터리가 인덕턴스 $L$ 및 저항 $R$과 직렬로 연결된 물리적 계를 고려해 보고, 전기 전하 $q$를 동역학적 변수로 선택하겠습니다. 인덕터(유도자)는 전류의 시간 변화율에 의존하므로 역학의 **'운동 에너지(kinetic energy)'** 항과 같은 역할을 합니다. 저항은 에너지를 소모하는 **'소산(dissipative)'** 항을 제공하며, '퍼텐셜 에너지(potential energy)'는 $qV$가 됩니다. 소산이 존재하는 라그랑주 방정식(1.70)의 동역학 항들은 다음과 같습니다.\n\n$$T=\\frac{1}{2}L\\dot{q}^{2}, \\quad \\mathcal{F}=\\frac{1}{2}R\\dot{q}^{2}$$\n\n그리고 퍼텐셜 에너지는 $qV$입니다. 이에 따른 운동 방정식은 다음과 같이 유도됩니다.\n\n$$V=L\\ddot{q}+R\\dot{q}=L\\dot{I}+RI \\quad (2.40)$$\n\n여기서 $I=\\dot{q}$는 전류를 의미합니다. 시간 $t=0$에 배터리가 회로에 연결되었을 때의 해는 다음과 같습니다.\n\n$$I=I_{0}(1-e^{-Rt/L})$$\n\n여기서 $I_{0}=V/R$은 최종 정상 상태(steady-state)의 전류 흐름입니다.\n\n이 전기 회로와 대응하는 기계적 아날로그(역학적 모형)는 다음과 같습니다.\n\n> **기계적 대응 모형 시각화 설명:**\n> 일정 밀도와 점성 계수 $\\eta$를 가진 점성 유체 속에서, 반지름이 $a$이고 유효 질량이 $m^{\\prime}$인 구체가 중력의 영향을 받아 $y$축 방향을 따라 아래로 떨어지는 상황을 상상해 볼 수 있습니다. 이때 유효 질량 $m^{\\prime}$은 구체의 실제 질량에서 구체가 밀어낸 유체의 질량(부력)을 뺀 값입니다.\n> \n> \n\n이 역학계의 공식은 다음과 같습니다.\n\n$$T=\\frac{1}{2}m^{\\prime}\\dot{y}^{2}, \\quad \\mathcal{F}=3\\pi\\eta a\\dot{y}^{2}$$\n\n그리고 퍼텐셜 에너지는 $m^{\\prime}gy$이며, 마찰 항력은 섹션 1.5 끝에서 소개된 스토크스의 법칙(Stokes' law)에 따라 $F_{f}=6\\pi\\eta a\\dot{y}$가 됩니다. 라그랑주 방정식(1.70)에 의해 운동 방정식은 다음과 같이 주어집니다.\n\n$$m^{\\prime}g=m^{\\prime}\\ddot{y}+6\\pi\\eta a\\dot{y}$$\n\n속도를 $v=\\dot{y}$로 두고, 시간 $t=0$에 정지 상태에서 운동이 시작되었다고 할 때의 해는 다음과 같습니다.\n\n$$v=v_{o}(1-e^{-t/\\tau})$$\n\n여기서 시간 상수 $\\tau=m^{\\prime}/(6\\pi\\eta a)$는 구체가 종단 속도 $v_{0}=m^{\\prime}g/6\\pi\\eta a$의 $1/e$만큼에 도달하는 데 걸리는 시간의 척도가 됩니다. 이 식의 구조는 앞서 살펴본 RL 회로의 전류 방정식(2.40)과 완벽하게 일치합니다."
        },
        {
          "id": "GM_2-5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.5 · 1부: 장점과 RL 항력 유비",
          "fileName": "GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_infographic.png",
            "alt": "GM 2.5 part01 Advantages of a Variational Principle Formulation advantages and rl drag analogy infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part01_Advantages_of_a_Variational_Principle_Formulation_advantages_and_rl_drag_analogy_infographic.png"
          },
          "content": "이어서 2장 5절, 변분 원리 공식화의 장점에 대해 알아보겠습니다. \n\n해밀턴 원리의 원래 공식을 몇 가지 비홀로노믹 구속 조건까지 포함하도록 확장할 수는 있지만, 실제적으로 이 역학 공식은 계에 대한 독립 좌표의 라그랑지안을 설정할 수 있을 때 가장 유용합니다. 변분 원리 공식은 흔히 우아하다고 묘사되어 왔는데요. 왜냐하면 압축된 해밀턴 원리 안에 포텐셜로부터 유도 가능한 힘을 가진 홀로노믹 계의 모든 역학이 포함되어 있기 때문입니다. \n\n또한 이 원리는 특정 일반화 좌표계를 참조하지 않고도 정의할 수 있는 물리량, 즉 운동 에너지와 포텐셜 에너지만을 포함한다는 장점을 가집니다. 따라서 이 공식화는 계의 좌표 선택에 관계없이 자동으로 불변성을 유지하게 됩니다. \n\n변분 해밀턴 원리를 보면, 예전에 언급했듯이 라그랑지안이 좌표와 시간의 임의 함수에 대한 전미분만큼 항상 불확실한, 즉 상수만큼의 자유도가 있는 이유를 명확히 알 수 있습니다. 시작점과 끝점 사이에서 이러한 전미분의 시간 적분 값은 오직 끝점에서의 임의 함수의 값에만 의존합니다. 끝점에서의 변분은 0이므로, 라그랑지안에 임의의 시간 미분 항을 더하더라도 적분 전체의 변분 동작에는 아무런 영향을 미치지 않습니다. \n\n또 다른 장점은 라그랑지안 공식이 탄성장, 전자기장, 소립자의 장 특성과 같이 보통 역학에서 다루지 않는 계를 설명하는 데도 쉽게 확장될 수 있다는 점입니다. 이러한 일반화 중 일부는 나중에 다루겠지만, 일반적인 역학의 틀을 벗어난 적용의 세 가지 간단한 예로 알엘 회로, 엘씨 회로, 그리고 결합 회로의 경우를 살펴보겠습니다. \n\n우선 전압을 가진 배터리가 인덕턴스 및 저항과 직렬로 연결된 물리적 계를 고려해 보고, 전기 전하를 동역학적 변수로 선택하겠습니다. 인덕터, 즉 유도자는 전류의 시간 변화율에 의존하므로 역학의 운동 에너지 항과 같은 역할을 합니다. 저항은 에너지를 소모하는 소산 항을 제공하며, 퍼텐셜 에너지는 전기 전하와 전압의 곱이 됩니다. 소산이 존재하는 라그랑주 방정식의 동역학 항들을 살펴보면 다음과 같습니다. \n\n운동 에너지는 인덕턴스와 전하의 시간 미분 즉, 전류의 제곱을 곱한 뒤 2로 나눈 값과 같고, 소산 함수는 저항과 전류의 제곱을 곱한 뒤 2로 나눈 값과 같습니다. \n\n그리고 포텐셜 에너지는 전기 전하와 전압의 곱입니다. 이에 따른 운동 방정식은 다음과 같이 유도됩니다. \n\n배터리의 전압은 인덕턴스 곱하기 전하의 2계 시간 미분에 저항 곱하기 전하의 1계 시간 미분을 더한 것과 같습니다. 이는 다시 인덕턴스 곱하기 전류의 1계 시간 미분에 저항 곱하기 전류를 더한 것과도 같습니다. \n\n여기서 전하의 1계 시간 미분은 전류를 의미합니다. 시간 가 0일 때 배터리가 회로에 연결되었을 때의 해는 다음과 같습니다. \n\n전류는 최종 정상 상태의 전류 흐름에, 1에서 자연상수의 마이너스 저항 곱하기 시간 나누기 인덕턴스 승을 뺀 값을 곱한 것과 같습니다. \n\n여기서 최종 정상 상태의 전류 흐름은 전압을 저항으로 나눈 값입니다. \n\n이 전기 회로와 대응하는 기계적 아날로그, 즉 역학적 모형은 다음과 같습니다. \n\n눈을 감고 정지된 유체를 머릿속으로 그려보세요. 일정 밀도와 점성 계수를 가진 점성 유체 속에서, 반지름이 가 이고 유효 질량이인 구체가 중력의 영향을 받아 와이축 방향을 따라 아래로 떨어지는 상황을 상상해 볼 수 있습니다. 이때 유효 질량은 구체의 실제 질량에서 구체가 밀어낸 유체의 질량, 즉 부력을 뺀 값입니다. \n\n이 역학 계의 공식은 다음과 같습니다. \n\n운동 에너지는 유효 질량과 와이 방향 속도의 제곱을 곱한 뒤 2로 나눈 값과 같고, 소산 함수는 3 곱하기 원주율 곱하기 점성 계수 곱하기 구체의 반지름 곱하기 와이 방향 속도의 제곱과 같습니다. \n\n그리고 포텐셜 에너지는 유효 질량 곱하기 중력가속도 곱하기 와이 방향의 위치이며, 마찰 항력은 예전에 소개된 스토크스의 법칙에 따라 6 곱하기 원주율 곱하기 점성 계수 곱하기 구체의 반지름 곱하기 와이 방향 속도가 됩니다. 라그랑주 방정식에 의해 운동 방정식은 다음과 같이 주어집니다. \n\n유효 질량과 중력가속도의 곱은 유효 질량과 와이 방향 가속도의 곱에, 6 곱하기 원주율 곱하기 점성 계수 곱하기 구체의 반지름 곱하기 와이 방향 속도를 더한 것과 같습니다. \n\n속도를 와이 방향의 1계 시간 미분으로 두고, 시간이 0일 때 정지 상태에서 운동이 시작되었다고 할 때의 해는 다음과 같습니다. \n\n속도는 종단 속도에, 1에서 자연상수의 마이너스 시간 나누기 타우 승을 뺀 값을 곱한 것과 같습니다. \n\n여기서 시간 상수 타우는 유효 질량을 6 곱하기 원주율 곱하기 점성 계수 곱하기 구체의 반지름으로 나눈 값인데요. 이는 구체가 종단 속도의 자연상수 분의 1 만큼에 도달하는 데 걸리는 시간의 척도가 됩니다. 이때 종단 속도는 유효 질량과 중력가속도의 곱을 6 곱하기 원주율 곱하기 점성 계수 곱하기 구체의 반지름으로 나눈 값입니다.  이 식의 구조는 앞서 살펴본 알엘 회로의 전류 방정식과 완벽하게 일치합니다."
        },
        {
          "id": "GM_2-5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.5 · 2부: LC 및 결합 회로 유비",
          "fileName": "GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_infographic.png",
            "alt": "GM 2.5 part02 Advantages of a Variational Principle Formulation lc and coupled circuit analogies infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_infographic.png"
          },
          "content": "전기 회로에서 볼 수 있는 또 다른 예는 인덕턴스 $L$과 커패시턴스 $C$가 직렬로 연결된 회로입니다. 이 회로에서 커패시터는 다음과 같이 주어지는 전위 에너지를 저장하는 역할을 합니다.\n\n$$\\frac{q^{2}}{C}$$\n\n여기서 $q$는 전하량입니다. 이에 따른 라그랑주 방정식은 다음과 같은 운동 방정식을 도출합니다.\n\n$$L\\ddot{q}+\\frac{q}{C}=0$$\n\n이 방정식의 해는 다음과 같습니다.\n\n$$q=q_{0}\\cos\\omega_{0}t$$\n\n여기서 $q_{0}$는 시간 $t=0$일 때 커패시터에 저장된 초기 전하량이며, $t=0$일 때 흐르는 전류는 없다고 가정합니다. 이때 다음의 물리량 $\\omega_{0}$는 시스템의 공명 주파수를 나타냅니다.\n\n$$\\omega_{0}=\\frac{1}{\\sqrt{LC}}$$\n\n이 계의 역학적 아날로그(대응물)는 라그랑지안 $L=\\frac{1}{2}m\\dot{x}^{2}-\\frac{1}{2}kx^{2}$로 기술되는 단순 조화 진동자입니다. 이 진동자의 운동 방정식은 다음과 같습니다.\n\n$$m\\ddot{x}+kx=0$$\n\n이 방정식의 해에 동일한 경계 조건을 적용하면 다음과 같이 얻어집니다.\n\n$$x=x_{0}\\cos\\omega_{0}t \\quad \\left(\\omega_{0}=\\sqrt{\\frac{k}{m}}\\right)$$\n\n이 두 가지 예시를 통해 우리는 인덕턴스가 역학에서의 질량에 해당하는 전기적 아날로그, 즉 '관성 항'이라는 것을 알 수 있습니다. 저항은 스토크스의 법칙에서 다루는 마찰 항력과 같은 역할을 하며, 커패시턴스의 역수 항인 $1/C$은 훅의 법칙에 등장하는 용수철 상수를 나타냅니다.\n\n이러한 배경 지식을 바탕으로, 본문에 제시된 교재의 [그림 2.6]과 같은 상호 결합된 전기 회로 시스템을 살펴볼 수 있습니다.\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_6/fig_2_6.svg\" alt=\"그림 2.6: 라그랑주 정식화가 적용되는 결합 회로계\" />\n  <figcaption>그림 2.6. 라그랑주 정식화가 적용되는 결합 회로계.</figcaption>\n</figure>\n\n> ### 💡 [그림 2.6] 결합 회로 다이어그램의 상세 시각적 해설\n> \n> \n> 본문의 이해를 돕기 위해 교재에 수록된 삽화를 글로 풀어서 상세히 설명합니다. 이 다이어그램은 상호 인덕턴스를 통해 서로 자기적으로 결합된 **세 개의 독립된 단일 루프 전기 회로**가 삼각형 구조로 배치된 모습을 보여줍니다.\n> \n> \n> * **위쪽 첫 번째 회로 루프:**\n> * 루프 상단에 커패시터 $C_1$과 저항 $R_1$이 직렬로 배치되어 있습니다.\n> * 오른쪽에는 교류 전원 기호인 사인파 모양과 함께 외부 기전력 $E_1$이 표시되어 있습니다.\n> * 왼쪽에는 자체 인덕턴스 코일 $L_1$이 수직으로 감겨 있습니다.\n> \n> \n> * 루프의 하단 변은 두 개의 인덕터 코일이 가로로 나란히 이어져 있으며, 이 코일들은 각각 아래에 배치된 다른 두 회로와 자기적으로 결합되는 통로가 됩니다.\n> \n> \n> * **왼쪽 아래 두 번째 회로 루프:**\n> * 루프 왼쪽에 기전력 $E_2$가 있고, 아래쪽에 커패시터 $C_2$와 저항 $R_2$가 배치되어 있습니다.\n> * 루프의 오른쪽 수직 변에는 인덕터 $L_2$가 있습니다.\n> \n> \n> * **오른쪽 아래 세 번째 회로 루프:**\n> * 루프 오른쪽에 기전력 $E_3$이 있고, 아래쪽에 저항 $R_3$과 커패시터 $C_3$이 배치되어 있습니다.\n> * 루프의 왼쪽 수직 변에는 인덕터 $L_3$이 있습니다.\n> \n> \n> * **회로 간의 상호 결합 (Mutual Inductance):**\n> * 각 회로의 인덕터 코일들은 서로 마주 보며 점선이나 물리적 연결 없이 공간적으로 배치되어, 자기장으로 연결되어 있음을 뜻하는 **상호 인덕턴스 $M$** 기호가 표시되어 있습니다.\n> * 첫 번째 회로와 두 번째 회로 사이에는 $M_{12}$가, 첫 번째 회로와 세 번째 회로 사이에는 $M_{13}$이, 그리고 아래쪽의 두 번째 회로와 세 번째 회로 사이에는 $M_{23}$이 정의되어 서로에게 미치는 전자기적 유도 영향을 나타냅니다.\n> \n> \n> \n> \n\n이와 같이 결합된 회로계의 라그랑지안은 다음과 같은 형태를 띱니다.\n\n$$L=\\frac{1}{2}\\sum_{j}L_{j}\\dot{q}_{j}^{2}+\\frac{1}{2}\\sum_{jk}M_{jk}\\dot{q}_{j}\\dot{q}_{k}-\\sum_{j}\\frac{q_{j}^{2}}{2C_{j}}+\\sum_{j}e_{j}(t)q_{j}$$\n\n그리고 소산 함수(Dissipation function)는 다음과 같이 주어집니다.\n\n$$\\mathcal{F}=\\frac{1}{2}\\sum_{j}R_{j}\\dot{q}_{j}^{2}$$\n\n여기서 인덕터들 사이의 결합 효과를 고려하기 위해 상호 인덕턴스 항인 $M_{jk}\\dot{q}_{j}\\dot{q}_{k}$가 추가되었습니다. 이를 통해 유도되는 라그랑주 방정식은 다음과 같습니다.\n\n$$L_{j}\\frac{d^{2}q_{j}}{dt^{2}}+\\sum_{j\\ne k}M_{jk}\\frac{d^{2}q_{k}}{dt^{2}}+R_{j}\\frac{dq_{j}}{dt}+\\frac{q_{j}}{C_{j}}=E_{j}(t)$$\n\n이 식에서 $E_{j}(t)$ 항들은 외부에 인가된 기전력을 의미합니다."
        },
        {
          "id": "GM_2-5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.5 · 2부: LC 및 결합 회로 유비",
          "fileName": "GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_infographic.png",
            "alt": "GM 2.5 part02 Advantages of a Variational Principle Formulation lc and coupled circuit analogies infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part02_Advantages_of_a_Variational_Principle_Formulation_lc_and_coupled_circuit_analogies_infographic.png"
          },
          "content": "전기 회로에서 볼 수 있는 또 다른 예는 인덕턴스와 커패시턴스가 직렬로 연결된 회로입니다. 이 회로에서 커패시터는 전위 에너지를 저장하는 역할을 하는데요. 이때 저장되는 전위 에너지는 전하량의 제곱을 커패시턴스로 나눈 값과 같습니다.\n\n여기서 전하량을 기준으로 이에 따른 라그랑주 방정식을 세워보면 하나의 운동 방정식을 도출할 수 있습니다. 인덕턴스에 전하량의 시간당 2차 미분값, 즉 전류의 시간 변화율을 곱한 항과, 전하량을 커패시턴스로 나눈 항, 이 두 항을 서로 더하면 0이 된다는 식입니다.\n\n이 미분 방정식의 해를 구해보면 다음과 같은 결과를 얻을 수 있습니다. 임의의 시간에서의 전하량은, 초기 전하량에 각공명주파수와 시간의 곱에 대한 코사인 함수 값을 곱한 것과 같습니다.\n\n여기서 초기 전하량은 시간이 0일 때 커패시터에 저장된 전하의 양을 의미하며, 이 시작점에서는 회로에 흐르는 전류가 없다고 가정합니다. 이때 계의 공명 주파수는 인덕턴스와 커패시턴스를 곱한 값에 루트를 씌우고, 이를 다시 역수로 취한 값과 같습니다.\n\n이 전기 회로계를 역학적인 물리계로 바꾸어 생각해보면, 그 대응물은 바로 단순 조화 진동자입니다. 역학계에서 라그랑지안은 속도의 제곱에 질량을 곱하고 2로 나눈 운동 에너지 항에서, 위치의 제곱에 용수철 상수를 곱하고 2로 나눈 위치 에너지 항을 뺀 형태로 기술되는데요. 이 진동자의 운동 방정식은 질량 곱하기 가속도에 용수철 상수 곱하기 위치를 더하면 0이 된다는 식으로 나타납니다.\n\n이 역학 방정식의 해에 전기 회로와 동일한 경계 조건을 적용하면 다음과 같이 얻어집니다. 임의의 시간에서의 위치는, 초기 위치에 각진동수와 시간의 곱에 대한 코사인 함수 값을 곱한 것과 같습니다. 이때 계의 고유 각진동수는 용수철 상수를 질량으로 나눈 값에 루트를 씌운 것과 같습니다.\n\n이 두 가지 예시를 비교해보면 아주 흥미로운 사실을 알 수 있습니다. 인덕턴스는 역학에서의 질량에 해당하는 전기적 대응물, 즉 움직임의 변화에 저항하려는 관성 항이라는 점입니다. 저항은 유체 속에서 물체가 받는 마찰 항력과 같은 역할을 하며, 커패시턴스의 역수는 훅의 법칙에 등장하는 복원력의 원인인 용수철 상수를 나타냅니다.\n\n이러한 배경 지식을 바탕으로, 이제 교재에 제시된 그림을 통해 상호 결합된 전기 회로계를 살펴보겠습니다. 눈으로 보지 못하시는 분들을 위해 이 다이어그램의 구조를 말로 자세히 설명해 드릴게요.\n\n이 그림은 상호 인덕턴스를 통해 서로 자기적으로 결합된 세 개의 독립된 단일 루프 전기 회로가 삼각형 구조로 배치된 모습을 보여주고 있습니다.\n\n먼저 삼각형의 위쪽에 자리 잡은 첫 번째 회로 루프를 상상해 보세요. 이 루프의 윗변에는 커패시터와 저항이 직렬로 나란히 배치되어 있고, 오른쪽 변에는 교류 전원을 뜻하는 사인파 기호와 함께 첫 번째 외부 기전력이 표시되어 있습니다. 그리고 왼쪽 변에는 첫 번째 자체 인덕턴스 코일이 수직으로 감겨 있습니다. 이 루프의 아랫변에는 두 개의 인덕터 코일이 가로로 나란히 이어져 있는데요. 이 코일들은 각각 아래쪽에 있는 다른 두 회로와 자기적으로 결합하여 신호를 주고받는 통로가 됩니다.\n\n다음으로 왼쪽 아래에 있는 두 번째 회로 루프를 보겠습니다. 이 루프의 왼쪽 변에는 두 번째 외부 기전력이 있고, 아랫변에는 커패시터와 저항이 나란히 배치되어 있습니다. 그리고 오른쪽 수직 변에는 두 번째 자체 인덕턴스 코일이 위치합니다.\n\n마지막으로 오른쪽 아래에 배치된 세 번째 회로 루프입니다. 이 루프의 오른쪽 변에는 세 번째 외부 기전력이 표시되어 있고, 아랫변에는 저항과 커패시터가 차례로 연결되어 있습니다. 그리고 왼쪽 수직 변에는 세 번째 자체 인덕턴스 코일이 자리 잡고 있습니다.\n\n이제 이 회로들이 어떻게 서로 연결되어 있는지 그 결합 상태를 설명해 드릴게요. 각 회로의 인덕터 코일들은 서로 마주 보고 있지만, 선으로 직접 연결되어 있지는 않습니다. 대신 공간적으로 떨어져서 자기장을 통해 유도 결합되어 있는데, 이를 상호 인덕턴스라고 부릅니다. 그림에서는 첫 번째 회로와 두 번째 회로 사이에 첫 번째 상호 인덕턴스가, 첫 번째 회로와 세 번째 회로 사이에 두 번째 상호 인덕턴스가 정의되어 있습니다. 그리고 아래쪽에 나란히 있는 두 번째 회로와 세 번째 회로 사이에도 세 번째 상호 인덕턴스가 정의되어 있어서, 서로가 서로에게 미치는 전자기적 유도 영향을 나타내고 있습니다.\n\n이렇게 복잡하게 결합된 전체 회로 계의 라그랑지안은 네 가지 항의 합과 차로 구성됩니다. 첫 번째는 각 회로의 인덕턴스에 전하량의 시간당 1차 미분값, 즉 전류의 제곱을 곱하고 2로 나눈 값들을 모든 회로에 대해 더한 총 자체 인덕션 에너지 항입니다. 두 번째는 회로 간의 결합 효과를 고려하기 위해 두 회로 간의 상호 인덕턴스에 각각의 전류 성분을 곱한 값들을 모두 더하고 2로 나눈 총 상호 인덕션 에너지 항입니다. 세 번째는 각 회로의 전하량 제곱을 두 배의 커패시턴스로 나눈 값들을 모두 합한 총 전위 에너지 항으로, 이 항은 전체 식에서 빼주게 됩니다. 마지막 네 번째는 각 회로의 시간 가변적 외부 기전력과 전하량을 곱한 값들을 모두 합한 외부 에너지 공급 항입니다.\n\n그리고 계에서 에너지가 열로 소실되는 비율을 나타내는 소산 함수는 다음과 같이 주어집니다. 각 회로 저항값에 전류의 제곱을 곱하고 2로 나눈 값들을 모든 회로에 대해 합산한 형태입니다.\n\n여기서 인덕터들 사이의 전자기적 결합 효과를 완벽하게 반영하기 위해, 앞서 설명해 드린 상호 인덕턴스 에너지 항이 라그랑지안에 추가된 것입니다. 이를 통해 최종적으로 유도되는 각 회로의 라그랑주 방정식, 즉 운동 방정식은 다음과 같은 형태를 가집니다.\n\n특정 번호의 회로 입장에서 보면, 자신의 인덕턴스에 전류 변화율을 곱한 값과, 이웃한 다른 회로들과의 상호 인덕턴스에 해당 회로들의 전류 변화율을 곱해서 모두 더한 값을 합산합니다. 여기에 자신의 저항과 전류를 곱한 값, 그리고 자신의 전하량을 커패시턴스로 나눈 값을 모두 더해줍니다. 이 모든 물리량들의 합은 최종적으로 그 회로에 외부에서 인가된 기전력의 시간별 함수 값과 정확히 같아지게 됩니다."
        },
        {
          "id": "GM_2-5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_Korean_Translation",
          "kind": "translation",
          "version": "part 03",
          "label": "GM_2.5 · 3부: 구조적 유비와 양자화",
          "fileName": "GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_infographic.png",
            "alt": "GM 2.5 part03 Advantages of a Variational Principle Formulation structural analogies and quantization infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_infographic.png"
          },
          "content": "이처럼 서로 다른 두 물리계를 동일한 형태의 라그랑지안으로 기술할 수 있다는 것은, 한 계를 연구하기 위해 고안된 모든 결과와 기술을 다른 계에 즉시 가져와 그대로 적용할 수 있음을 의미합니다. 이 특정한 경우를 살펴보면, 전기 회로의 거동에 관한 연구는 매우 집중적으로 이루어져 왔으며 그 과정에서 몇 가지 특수한 기술들이 개발되었습니다. 따라서 이러한 기술들을 그에 대응하는 기계계에 직접 적용할 수 있습니다. 역으로 기계계나 음향계에 대응하는 등가 전기 문제를 구성하는 연구도 많이 이루어졌습니다. 그 결과 기존에는 전기 회로에서만 사용되던 용어들(리액턴스, 서셉턴스 등)을 이제는 기계계의 진동 이론을 다루는 논문이나 저서에서도 흔하게 찾아볼 수 있습니다.\n\n또한, 역학의 일반화 중 한 가지 유형은 이보다 더 미묘한 형태의 등가성(동등성)에서 기인합니다. 우리는 라그랑지안과 해밀턴의 원리가 결합하여 기계적인 운동 방정식을 얻는 콤팩트(간결)하고 불변하는 방법을 형성한다는 것을 보았습니다. 이러한 가능성은 오직 역학 분야에만 국한되지 않습니다. 물리학의 거의 모든 분야에서 뉴턴 방정식이든, 맥스웰 방정식이든, 혹은 슈뢰딩거 방정식이든 관계없이 \"운동 방정식\"을 표현하는 데 변분 원리를 사용할 수 있습니다.\n\n결과적으로, 변분 원리를 정식화(수식화)의 기초로 삼을 때, 이 모든 물리적 분야들은 적어도 어느 정도는 구조적 유사성(구조적 아날로그)을 보이게 됩니다. 실험 결과로 인해 한 분야의 이론에서 물리적 내용을 수정해야 할 필요성이 생겼을 때, 이러한 구조적 유사성은 종종 다른 분야에서도 유사한 수정을 어떻게 수행할 수 있는지 그 방향을 제시해 주었습니다.\n\n예를 들어, 20세기 초에 수행된 실험들은 전자기 복사와 기본 입자 모두를 양자화해야 할 필요성을 보여주었습니다. 그러나 양자화 방법은 본질적으로 고전역학의 라그랑주 정식화에서 출발하여, 입자 역학에 대해 먼저 개발되었습니다. 따라서 전자기장을 라그랑지안과 그에 대응하는 해밀턴의 변분 원리로 기술함으로써, 입자 양자화 방법을 그대로 가져와 양자 전자기학을 구축하는 것이 가능해졌습니다 (13.5절 및 13.6절 참조).\n\n---"
        },
        {
          "id": "GM_2-5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_KR_TTS",
          "kind": "tts",
          "version": "part 03",
          "label": "GM_2.5 · 3부: 구조적 유비와 양자화",
          "fileName": "GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_infographic.png",
            "alt": "GM 2.5 part03 Advantages of a Variational Principle Formulation structural analogies and quantization infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.5_Advantages_of_a_Variational_Principle_Formulation/GM_2.5_part03_Advantages_of_a_Variational_Principle_Formulation_structural_analogies_and_quantization_infographic.png"
          },
          "content": "이처럼 서로 다른 두 물리계를 동일한 형태의 라그랑지안으로 기술할 수 있다는 것은, 한 계를 연구하기 위해 고안된 모든 결과와 기술을 다른 계에 즉시 가져와 그대로 적용할 수 있음을 의미합니다. 이 특정한 경우를 살펴보면, 전기 회로의 거동에 관한 연구는 매우 집중적으로 이루어져 왔으며 그 과정에서 몇 가지 특수한 기술들이 개발되었습니다. 따라서 이러한 기술들을 그에 대응하는 기계적 계에 직접 적용할 수 있습니다. 역으로 기계계나 음향계에 대응하는 등가 전기 문제를 구성하는 연구도 많이 이루어졌습니다. 그 결과 기존에는 전기 회로에서만 사용되던 리액턴스나 서셉턴스 같은 용어들을 이제는 기계계의 진동 이론을 다루는 논문이나 저서에서도 흔하게 찾아볼 수 있습니다.\n\n또한, 역학을 더 넓은 범위로 확장하는 일반화 방법 중 한 가지 유형은 이보다 더 미묘한 형태의 동등성에서 기인합니다. 우리는 라그랑지안과 해밀턴의 원리가 결합하여 기계적인 운동 방정식을 아주 간결하고 불변하는 방식으로 얻을 수 있다는 것을 확인했습니다. 이러한 가능성은 오직 역학 분야에만 국한되지 않습니다. 물리학의 거의 모든 분야에서 그것이 뉴턴 방정식이든, 전자기학의 맥스웰 방정식이든, 혹은 양자역학의 슈뢰딩거 방정식이든 관계없이 이 운동 방정식을 표현하는 데 변분 원리를 사용할 수 있습니다.\n\n결과적으로, 변분 원리를 수식화의 기초로 삼을 때, 이 모든 물리적 분야들은 적어도 어느 정도는 구조적인 유사성을 보이게 됩니다. 실험 결과로 인해 어느 한 분야의 이론에서 물리적인 내용을 수정해야 할 필요성이 생겼을 때, 이러한 구조적 유사성은 종종 다른 분야에서도 유사한 수정을 어떻게 수행할 수 있는지 그 올바른 방향을 제시해 주었습니다.\n\n예를 들어, 20세기 초에 수행된 실험들은 전자기 복사와 기본 입자 모두를 연속적인 값이 아닌 불연속적인 덩어리로 다루는 양자화를 해야 할 필요성을 보여주었습니다. 하지만 이 양자화 방법은 본질적으로 고전역학의 라그랑주 수식화에서 출발하여, 입자 역학에 대해 먼저 개발되었습니다. 따라서 전자기장을 라그랑지안과 그에 대응하는 해밀턴의 변분 원리로 기술함으로써, 입자를 양자화하던 방법을 그대로 가져와 양자 전자기학을 성공적으로 구축하는 것이 가능해졌습니다."
        }
      ]
    },
    {
      "id": "GM_2.6",
      "title": "보존 정리와 대칭성",
      "category": "minor_unit",
      "startPage": "74",
      "endPage": "80",
      "pageCount": "7",
      "pageLabelStart": "55",
      "pageLabelEnd": "61",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.6 · 1부: 일반화 운동량과 순환 좌표",
          "fileName": "GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_infographic.png",
            "alt": "GM 2.6 part01 Conservation Theorems and Symmetry Properties generalized momentum and cyclic coordinates infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_infographic.png"
          },
          "content": "2.6 보존 정리와 대칭성 성질 (Conservation Theorems and Symmetry Properties) \n\n지금까지 우리는 주로 운동방정식을 유도하는 데만 집중했을 뿐, 방정식이 얻어진 다음에 특정 문제에 대해 이를 어떻게 풀어야 하는지에 대해서는 거의 언급하지 않았습니다.\n\n일반적으로 이것은 수학의 문제입니다. $n$개의 자유도를 가진 계는 시간에 대한 2계 미분방정식 $n$개를 갖게 됩니다. 각 방정식을 풀려면 두 번의 적분이 필요하므로, 결과적으로 총 $2n$개의 적분 상수가 생깁니다. 구체적인 문제에서 이러한 상수들은 초기 조건, 즉 $n$개의 $q_j$ 초기치와 $n$개의 $\\dot{q}_j$ 초기치에 의해 결정됩니다.\n\n때로는 운동방정식이 우리가 잘 아는 기지의 함수들로 적분될 수도 있지만, 항상 그런 것은 아닙니다. 사실 대부분의 문제는 완전히 적분 가능하지 않습니다. 그러나 완전한 해를 구할 수 없을 때조차도, 계 운동의 물리적 본질에 대한 수많은 정보를 이끌어내는 것이 가능할 때가 많습니다. 실제로 물리학자에게는 이러한 정보가 일반화 좌표를 시간에 대한 함수로 나타낸 완전한 해보다 훨씬 더 큰 관심사일 수 있습니다. 따라서 문제에 대한 완전한 적분을 수행하지 않고도, 주어진 계의 운동에 대해 얼마나 많은 것을 진술할 수 있는지 살펴보는 것은 매우 중요합니다.\n\n많은 문제에서 운동방정식의 '첫 번째 적분(first integrals)'을 즉시 얻을 수 있습니다. 여기서 첫 번째 적분이란 다음과 같은 형태의 관계식을 의미하며,\n\n$$f(q_1, q_2, \\dots, \\dot{q}_1, \\dot{q}_2, \\dots, t) = \\text{constant}$$\n\n이는 1계 미분방정식에 해당합니다. 이러한 첫 번째 적분들은 계에 대한 물리적인 무언가를 알려주기 때문에 흥미롭습니다. 실제로 여기에는 제1장에서 얻었던 보존 법칙들이 포함됩니다.\n\n예를 들어, 위치에만 의존하는 퍼텐셜로부터 유도되는 힘의 영향을 받는 질점 계(system of mass points)를 생각해 봅시다. 그러면 다음과 성립합니다.\n\n$$\\frac{\\partial L}{\\partial\\dot{x}_{i}}\\equiv\\frac{\\partial T}{\\partial\\dot{x}_{i}}-\\frac{\\partial V}{\\partial\\dot{x}_{i}}=\\frac{\\partial T}{\\partial\\dot{x}_{i}}=\\frac{\\partial}{\\partial\\dot{x}_{i}}\\sum\\frac{1}{2}m_{i}(\\dot{x}_{i}^{2}+\\dot{y}_{i}^{2}+\\dot{z}_{i}^{2}) = m_i \\dot{x}_i = p_{ix}$$\n\n이것은 $i$번째 입자와 관련된 선운동량(linear momentum)의 $x$ 성분입니다. 이 결과는 운동량 개념을 자연스럽게 확장할 수 있도록 제안해 줍니다. 좌표 $q_j$와 관련된 일반화 운동량(generalized momentum)은 다음과 같이 정의됩니다.\n\n$$p_j = \\frac{\\partial L}{\\partial \\dot{q}_j}$$\n\n$p_j$에 대해서는 정준 운동량(canonical momentum)이나 공액 운동량(conjugate momentum)이라는 용어도 자주 사용됩니다. 만약 $q_j$가 데카르트 좌표(Cartesian coordinate)가 아니라면, $p_j$가 반드시 선운동량의 차원을 가질 필요는 없다는 점에 유의해야 합니다. 더 나아가 속도 의존성 퍼텐셜이 존재한다면, $q_j$가 데카르트 좌표라 할지라도 그와 관련된 일반화 운동량은 통상적인 역학적 운동량과 일치하지 않게 됩니다.\n\n따라서 전자기장 내에 있는 입자 집단의 경우, 라그랑지안은 다음과 같고 \n\n$$L=\\sum_{i}\\frac{1}{2}m_{i}\\dot{r}_{i}^{2}-\\sum_{i}q_{i}\\phi(x_{i})+\\sum_{i}q_{i}A(x_{i})\\cdot\\dot{r}_{i}$$\n\n(여기서 $q_i$는 전하를 나타냄) $x_i$에 공액인 일반화 운동량은 다음과 같습니다.\n\n$$p_{ix}=\\frac{\\partial L}{\\partial\\dot{x}_{i}}=m_{i}\\dot{x}_{i}+q_{i}A_{x}$$\n\n즉, 역학적 운동량에 추가적인 항이 더해진 형태가 됩니다.\n\n만약 어떤 계의 라그랑지안이 주어진 좌표 $q_j$를 포함하지 않는다면(비록 그에 대응하는 속도 $\\dot{q}_j$는 포함할지라도), 그 좌표를 **순환 좌표(cyclic coordinate)** 또는 소거 가능한 좌표(ignorable coordinate)라고 부릅니다. 이 정의가 보편적인 것은 아니지만, 가장 관례적인 정의이므로 여기에서도 사용하도록 하겠습니다.\n\n라그랑주 운동방정식은,\n\n$$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{q}_{j}}-\\frac{\\partial L}{\\partial q_{j}}=0$$\n\n순환 좌표에 대해서는 $\\frac{\\partial L}{\\partial q_j} = 0$이 되므로 다음과 같이 축소됩니다.\n\n$$\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot{q}_{j}}=0$$\n\n또는\n\n$$\\frac{dp_j}{dt}=0$$\n\n이것이 의미하는 바는 다음과 같습니다.\n\n$$p_j = \\text{constant}$$\n\n따라서 우리는 다음과 같은 일반적인 보존 정리를 서술할 수 있습니다. **\"순환 좌표에 공액인 일반화 운동량은 보존된다.\"** \n\n식 (2.46)의 유도는 $q_j$가 일반화 좌표, 즉 다른 모든 좌표들과 선형 독립인 좌표임을 가정하고 있다는 점에 주목해야 합니다. 구속 방정식이 존재할 때는 모든 좌표가 선형 독립인 것은 아닙니다. 예를 들어, 앞서 논의했던 '수평면 위에서 미끄러짐 없이 구르는 훌라후프'의 라그랑지안에는 각좌표 $\\theta$가 나타나지 않지만, 이 각도는 $r d\\theta = dx$라는 구속 방정식에 등장합니다. 그 결과, 각운동량 $p_{\\theta} = mr^2 \\dot{\\theta}$는 운동의 상수가 되지 못합니다.\n\n식 (2.46)은 운동방정식에 대해 식 (2.43)과 같은 형태의 첫 번째 적분을 구성합니다. 이는 문제에서 순환 좌표를 형식적으로 소거하는 데 사용될 수 있으며, 이를 통해 문제는 나머지 일반화 좌표들만으로 완전히 풀릴 수 있게 됩니다. 라우스(Routh)가 고안한 이 절차를 간략히 설명하면, 라그랑지안을 수정하여 그것이 순환 좌표에 대응하는 일반화 속도의 함수가 아니라, 오직 그에 공액인 운동량에만 연관되도록 만드는 것입니다."
        },
        {
          "id": "GM_2-6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.6 · 1부: 일반화 운동량과 순환 좌표",
          "fileName": "GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_infographic.png",
            "alt": "GM 2.6 part01 Conservation Theorems and Symmetry Properties generalized momentum and cyclic coordinates infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part01_Conservation_Theorems_and_Symmetry_Properties_generalized_momentum_and_cyclic_coordinates_infographic.png"
          },
          "content": "안녕하세요, 여러분. 이번 시간에는 '보존 정리와 대칭성 성질'에 대해 이야기해 보겠습니다.\n\n지금까지 우리는 주로 운동방정식을 유도하는 데만 집중해 왔습니다. 하지만 방정식이 얻어진 다음에, 정작 특정 문제에 대해 이 방정식을 어떻게 풀어야 하는지에 대해서는 거의 언급하지 않았죠.\n\n일반적으로 이것은 수학의 영역입니다. 임의의 개수만큼 자유도를 가진 계은 시간에 대한 2계 미분방정식을 그 자유도 개수만큼 갖게 됩니다. 각 방정식을 풀려면 두 번의 적분이 필요하므로, 결과적으로 자유도 개수의 두 배에 달하는 총 적분 상수가 생겨나게 되죠. 구체적인 문제에서 이러한 상수들은 초기 조건, 그러니까 계의 초기 위치를 나타내는 일반화 좌표의 초기치와, 초기 속도를 나타내는 일반화 속도의 초기치에 의해 결정됩니다.\n\n때로는 운동방정식이 우리가 잘 아는 함수들로 적분될 수도 있지만, 항상 그런 것은 아닙니다. 사실 대부분의 물리학 문제는 완전히 적분 가능하지 않습니다. 하지만 완전한 해를 구할 수 없을 때조차도, 계 운동이 가진 물리적 본질에 대해 아주 수많은 정보를 이끌어내는 것이 가능할 때가 많습니다. 실제로 물리학자에게는 이러한 정보가 일반화 좌표를 시간에 대한 함수로 나타낸 완전한 해보다 훨씬 더 큰 관심사일 수 있습니다. 따라서 문제에 대한 완전한 적분을 수행하지 않고도, 주어진 계의 운동에 대해 얼마나 많은 것을 이야기할 수 있는지 살펴보는 것은 매우 중요합니다.\n\n많은 문제에서 운동방정식의 이른바 '첫 번째 적분'을 즉시 얻을 수 있습니다. 여기서 첫 번째 적분이란, 여러 일반화 좌표와 일반화 속도, 그리고 시간의 함수 관계가 항상 일정한 상수가 된다는 형태의 식을 의미하며, 이는 1계 미분방정식에 해당합니다. 이러한 첫 번째 적분들은 계의 물리적인 상태나 특징을 직관적으로 알려주기 때문에 매우 흥미롭습니다. 실제로 여기에는 우리가 지난 장에서 얻었던 여러 보존 법칙들이 포함되어 있습니다.\n\n예를 들어, 위치에만 의존하는 퍼텐셜로부터 유도되는 힘의 영향을 받는 질점 계를 생각해 봅시다. 이 계에서 라그랑지안을 특정 입자의 일반화 속도로 편미분하면, 라그랑지안이 운동에너지와 위치에너지의 차이이기 때문에, 위치에너지는 속도와 무관하여 결국 운동에너지를 속도로 편미분한 것과 같아집니다. 운동에너지는 각 입자의 질량에 속도의 제곱을 곱하고 2로 나눈 값들의 총합이므로, 이를 특정 입자의 속도로 편미분하면 최종적으로 그 입자의 질량과 속도를 곱한 값이 남게 됩니다. 이것은 우리에게 익숙한 그 입자의 선운동량 성분이 됩니다.\n\n이 결과는 운동량이라는 개념을 더 넓은 범위로 확장할 수 있도록 제안해 줍니다. 즉, 어떤 임의의 일반화 좌표와 관련된 일반화 운동량은, 계의 라그랑지안을 그 좌표의 변화율인 일반화 속도로 편미분한 것으로 정의할 수 있습니다. 이 일반화 운동량에 대해서는 정준 운동량이나 공액 운동량이라는 용어도 자주 사용합니다. 여기서 한 가지 주의할 점은, 만약 우리가 선택한 일반화 좌표가 일반적인 공간 좌표가 아니라면, 그에 대응하는 일반화 운동량이 반드시 일반적인 선운동량과 같은 물리적 단위를 가질 필요는 없다는 것입니다. 더 나아가 만약 계에 속도에 의존하는 퍼텐셜이 존재한다면, 공간 좌표를 사용하더라도 그와 관련된 일반화 운동량은 통상적인 역학적 운동량과 일치하지 않게 됩니다.\n\n전자기장 내에 있는 입자 집단의 경우가 바로 그렇습니다. 이때 라그랑지안은 모든 입자의 운동에너지 총합에서, 전하와 전기 퍼텐셜의 곱을 빼고, 다시 전하와 자기 벡터 퍼텐셜 및 입자 속도의 내적을 모두 더한 형태가 됩니다. 이 라그랑지안을 공간 속도로 편미분하여 얻는 일반화 운동량은, 입자의 질량과 속도를 곱한 통상적인 역학적 운동량에다가, 전하와 자기 벡터 퍼텐셜의 곱을 더한 형태가 됩니다. 즉, 순수한 역학적 운동량에 전자기장으로 인한 추가적인 항이 더해지는 것이죠.\n\n만약 어떤 계의 라그랑지안에 특정한 일반화 좌표가 직접적으로 나타나지 않는다면, 비록 그 좌표의 시간 변화율인 일반화 속도는 라그랑지안에 포함되어 있을지라도, 우리는 그 좌표를 순환 좌표 또는 소거 가능한 좌표라고 부릅니다. 이 정의가 모든 곳에서 똑같이 쓰이는 것은 아니지만, 물리학에서 가장 관례적인 정의이므로 우리도 이 표현을 사용하겠습니다.\n\n이때 라그랑주 운동방정식을 떠올려 보면, 라그랑지안을 일반화 속도로 편미분한 것을 시간으로 미분한 값에서, 라그랑지안을 일반화 좌표로 편미분한 값을 뺀 것이 영이 되어야 합니다. 그런데 순환 좌표의 정의상 라그랑지안을 좌표로 편미분한 값은 영이 되므로, 방정식은 라그랑지안을 일반화 속도로 편미분한 값의 시간 변화율이 영이라는 식으로 아주 간단하게 줄어듭니다. 라그랑지안을 일반화 속도로 편미분한 것이 바로 일반화 운동량이라고 했으니, 결국 일반화 운동량의 시간 변화율이 영이라는 뜻이 됩니다.\n\n이것이 의미하는 바는 명확합니다. 그 일반화 운동량이 시간이 지나도 변하지 않는 일정한 상수, 즉 보존되는 양이라는 것입니다. 따라서 우리는 다음과 같은 매우 일반적이고 강력한 보존 정리를 선언할 수 있습니다. \"순환 좌표에 대응하는 일반화 운동량은 언제나 보존됩니다.\" \n\n다만 이 유도 과정에서는 우리가 다루는 일반화 좌표가 다른 모든 좌표들과 서로 완전히 독립적이라는 가정이 깔려 있다는 점을 기억해야 합니다. 계에 구속 조건이 존재해서 좌표들이 서로 얽혀 있을 때는 모든 좌표가 독립적이지 못합니다. 예를 들어, 수평면 위에서 미끄러짐 없이 구르는 훌라후프 문제를 생각해 보면, 라그랑지안 자체에는 회전각 좌표가 나타나지 않지만, 이 각도는 훌라후프의 반지름과 각도의 미소 변화를 곱한 것이 이동 거리의 미소 변화와 같다는 구속 방정식에 명시적으로 등장합니다. 이런 상황에서는 회전각 좌표가 라그랑지안에 없다고 해서 그에 대응하는 각운동량이 상수가 되지 못하고, 운동 중에 변하게 됩니다.\n\n이 일반화 운동량이 상수가 된다는 식은 운동방정식의 훌륭한 첫 번째 적분이 되어 줍니다. 우리는 이 성질을 형식적으로 이용하여 문제에서 순환 좌표를 아예 없애버릴 수 있고, 그 결과 남아있는 다른 일반화 좌표들만 가지고 문제를 완벽하게 해결할 수 있습니다. 라우스라는 학자가 고안한 이 절차를 간략히 설명하자면, 기존의 라그랑지안을 수학적으로 조금 변형하는 것입니다. 어떻게 변형하느냐면, 라그랑지안이 순환 좌표의 일반화 속도에 의존하는 것이 아니라, 대신 그 좌표에 대응하는 일반화 운동량에만 의존하도록 함수 형태를 바꾸는 것이죠. 이렇게 하면 보존되는 일반화 운동량을 하나의 고정된 상수로 취급할 수 있기 때문에, 남아있는 골치 아픈 적분 계산들을 순환 좌표가 아닌 다른 좌표들에 대해서만 집중해서 수행할 수 있다는 엄청난 장점이 생깁니다."
        },
        {
          "id": "GM_2-6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.6 · 2부: 정준 운동량과 보존 범위",
          "fileName": "GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_infographic.png",
            "alt": "GM 2.6 part02 Conservation Theorems and Symmetry Properties canonical momentum and conservation scope infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_infographic.png"
          },
          "content": "일반화 운동량이 보존될 조건은 앞서 도출했던 두 가지 운동량 보존 정리보다 훨씬 더 일반적입니다. 예를 들어, 이 조건들은 전자기력이 존재하여 작용-반작용 법칙이 성립하지 않는 경우에도 운동량 보존 정리를 제공해 줍니다. 단일 입자가 $\\phi$와 $\\mathbf{A}$ 모두 $x$에 의존하지 않는 장(field) 내에 있다고 가정해 봅시다. 이 경우 $x$는 라그랑지안 $L$의 어느 곳에도 나타나지 않으므로 순환(cyclic) 좌표가 됩니다. 따라서 그에 대응하는 정준(캐노니컬) 운동량 $p_x$는 반드시 보존되어야 합니다. 제1장의 식 (1.63)에 따라, 이 운동량은 현재 다음과 같은 형태를 가집니다.\n\n$$p_{x}=m\\dot{x}+qA_{x}=\\text{constant}$$\n\n이 경우 보존되는 것은 역학적 선운동량인 $m\\dot{x}$가 아니라, 역학적 선운동량과 $qA_{x}$의 합입니다 .* 그럼에도 불구하고 제1장의 보존 정리들은 순환 좌표에 대한 이 일반적인 규칙 내에 포함되어 있어야 합니다. 적절한 제한 조건을 가하면 식 (2.46)은 제1.2절의 정리들로 환원될 것입니다.\n\n---\n\n> \n> **원문 각주 설명:** > 고전 전자기학에 따르면, $\\mathbf{A}$와 $\\phi$가 모두 $x$에 의존하지 않는 조건 하에서 $qA_{x}$는 전하 $q$와 결합된 전자기장(field)의 선운동량 중 $x$ 성분과 정확히 일치함을 보일 수 있습니다.\n> \n>"
        },
        {
          "id": "GM_2-6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.6 · 2부: 정준 운동량과 보존 범위",
          "fileName": "GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_infographic.png",
            "alt": "GM 2.6 part02 Conservation Theorems and Symmetry Properties canonical momentum and conservation scope infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part02_Conservation_Theorems_and_Symmetry_Properties_canonical_momentum_and_conservation_scope_infographic.png"
          },
          "content": "여러분, 안녕하세요. 오늘 강의에서는 일반화 운동량이 보존될 조건에 대해 알아보겠습니다. 이 조건은 우리가 이전에 유도했던 두 가지 운동량 보존 정리보다 훨씬 더 넓은 범위에서 적용되는 일반적인 법칙입니다.\n\n이해를 돕기 위해 예를 하나 들어볼까요? 전자기력이 작용하는 상황처럼 뉴턴의 작용-반작용 법칙이 성립하지 않는 물리계에서도, 이 조건을 이용하면 운동량 보존 정리를 명쾌하게 이끌어낼 수 있습니다.\n\n어떤 단일 입자가 공간에 놓여 있는 상황을 상상해 봅시다. 이 입자는 스칼라 퍼텐셜과 벡터 퍼텐셜이 만들어내는 전자기장 안에 부드럽게 놓여 있습니다. 여기서 중요한 가정이 하나 있는데요, 이 두 퍼텐셜이 세 가지 공간 방향 중 특정 축, 그러니까 엑스 축의 위치 변화에는 전혀 영향을 받지 않는 장이라고 가정해 보겠습니다.\n\n이렇게 되면 계의 역학적 상태를 나타내는 함수인 라그랑지안 안에는 엑스라는 위치 좌표가 어디에도 나타나지 않게 됩니다. 이처럼 라그랑지안에 직접적으로 드러나지 않는 좌표를 우리는 순환 좌표, 또는 무시 가능한 좌표라고 부릅니다. 위치 좌표가 순환 좌표가 되면, 이에 대응하는 정준 운동량, 즉 캐노니컬 운동량의 엑스 성분은 시간이 흘러도 항상 일정하게 유지되는 보존량이 됩니다.\n\n우리가 교재 제 일 장에서 배웠던 전자기장 속 입자의 역학을 떠올려 보면, 이 캐노니컬 운동량은 다음과 같은 아주 흥미로운 형태를 가집니다.\n\n이 캐노니컬 운동량의 엑스 성분은, 입자의 질량과 엑스 축 방향 속도를 곱한 일반적인 역학적 선운동량에다가, 입자의 전하량과 벡터 퍼텐셜의 엑스 성분을 곱한 값을 더한 것과 같습니다. 그리고 이 전체 합이 시간의 변화에 상관없이 상수가 되어 보존된다는 뜻입니다.\n\n여기서 여러분이 꼭 주목하셔야 할 점이 있습니다. 지금 이 계에서 보존되는 것은 우리가 흔히 아는 질량 곱하기 속도라는 순수한 역학적 선운동량이 아니라는 사실입니다. 보존되는 진짜 물리량은 방금 말씀드린 역학적 선운동량에 전하량과 벡터 퍼텐셜 엑스 성분의 곱을 더해준 전체 값입니다.\n\n이 대목에서 고전 전자기학의 관점을 덧붙여 설명해 드리자면, 여기서 더해진 값, 즉 전하량과 벡터 퍼텐셜의 엑스 성분을 곱한 양은 전하를 띤 입자 주변의 전자기장 자체가 가지는 전자기적 선운동량의 엑스 성분과 정확하게 일치합니다. 결국 입자의 운동량과 전자기장의 운동량을 모두 합친 총 운동량이 보존된다는 물리적 의미를 담고 있는 것이죠.\n\n비록 형태는 복잡해 보이지만, 우리가 일 장에서 배웠던 고전적인 운동량 보존 정리들 역시 순환 좌표에 관한 이 대원칙 속에 전부 포함되어 있습니다. 이 일반적인 식에 전자기장을 없애는 등의 적절한 제약 조건을 가해주면, 식은 자연스럽게 우리가 이미 잘 알고 있는 일 장의 선운동량 보존 정리들로 다시 되돌아가게 됩니다."
        },
        {
          "id": "GM_2-6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_Korean_Translation",
          "kind": "translation",
          "version": "part 03",
          "label": "GM_2.6 · 3부: 병진 대칭과 선운동량",
          "fileName": "GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_infographic.png",
            "alt": "GM 2.6 part03 Conservation Theorems and Symmetry Properties translation symmetry and linear momentum infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_infographic.png"
          },
          "content": "우리는 먼저 일반화 좌표 $q_j$의 변화량 $dq_j$가 계 전체를 어떤 주어진 방향으로 평행이동시키는 경우를 고려해 보겠습니다. 이러한 예로는 계의 질량 중심을 나타내는 데 쓰이는 데카르트 좌표(직교 좌표) 중 하나를 들 수 있습니다. 속도는 원점의 이동에 영향을 받지 않으므로, 이 경우 $q_j$가 운동에너지 $T$에 나타날 수 없음이 자명하며, 따라서 $q_j$에 대한 $T$의 편미분 값은 반드시 0이 되어야 합니다. 나아가, 전자기력과 같은 복잡한 요소를 배제하기 위해 퍼텐셜 에너지 $V$가 속도의 함수가 아닌 보존계를 가정하겠습니다. 이처럼 정의된 좌표에 대한 라그랑주 운동 방정식은 다음과 같이 정리됩니다.\n\n$$\\frac{d}{dt}\\frac{\\partial T}{\\partial\\dot{q}_j}\\equiv\\dot{p}_j=-\\frac{\\partial V}{\\partial q_j}\\equiv Q_j$$\n\n이제 이 식(2.48)이 총 선운동량에 대한 운동 방정식임을 증명해 보이겠습니다. 즉, 일반화된 힘 $Q_j$는 $q_j$가 평행이동하는 방향을 따르는 총 힘의 성분을 나타내고, $p_j$는 이 방향을 따르는 총 선운동량의 성분임을 보이려는 것입니다. 일반적으로 일반화된 힘 $Q_j$는 식(1.49)에 의해 다음과 같이 주어집니다.\n\n$$Q_j=\\sum_{i}F_i\\cdot\\frac{\\partial r_i}{\\partial q_j}$$\n\n변화량 $dq_j$는 특정 축을 따르는 계의 평행이동에 대응하므로, 변위가 일어나기 전의 위치 벡터 $r_i(q_j)$와 $dq_j$만큼 평행이동한 후의 위치 벡터 $r_i(q_j+dq_j)$ 사이에는 긴밀한 기하학적 관계가 성립합니다.\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_7/fig_2_7.svg\" alt=\"그림 2.7: 계의 병진에 따른 위치 벡터 변화\" />\n  <figcaption>그림 2.7. 계의 병진에 따른 위치 벡터 변화.</figcaption>\n</figure>\n\n> **[시각 자료(Figure 2.7)의 상세한 공간적 설명]**\n> 이를 3차원 좌표계상에 시각화해 보면 다음과 같습니다. 원점에서 시작하여 $i$번째 입자를 가리키는 기존의 위치 벡터 $r_i(q_j)$가 있습니다. 이 상황에서 계 전체가 평행이동 방향의 단위 벡터 $n$을 따라 $dq_j$만큼 미소 이동하게 되면, 이 입자의 위치 역시 동일한 방향과 크기만큼 위치 변화를 겪게 됩니다. 즉, 기존 위치 벡터의 끝점에서 시작하여 $n$ 방향으로 뻗어나가는 미소 변위 벡터 $dq_j n$이 더해지는 형태입니다. 결과적으로 평행이동한 후의 새로운 위치 벡터 $r_i(q_j+dq_j)$는 기존 벡터 $r_i(q_j)$와 미소 변위 벡터 $dq_j n$을 두 변으로 하는 삼각형의 나머지 한 변(합벡터)이 됩니다.\n> \n> \n\n이러한 기하학적 관계를 바탕으로 미분의 정의를 적용하면 다음을 얻을 수 있습니다.\n\n$$\\frac{\\partial r_i}{\\partial q_j}=\\lim_{dq_j\\rightarrow0}\\frac{r_i(q_j+dq_j)-r_i(q_j)}{dq_j}=\\frac{dq_j}{dq_j}n=n$$\n\n여기서 $n$은 평행이동 방향의 단위 벡터입니다. 따라서 일반화된 힘 $Q_j$는 다음과 같이 정리됩니다.\n\n$$Q_j=\\sum F_i\\cdot n=n\\cdot F$$\n\n이 결과는 앞서 언급했던 것처럼, 총 힘 $F$ 중 단위 벡터 $n$ 방향으로 작용하는 성분을 의미합니다.\n\n나머지 절반의 주장도 증명하기 위해, 운동에너지를 다음의 형태로 두고 공액 운동량(일반화 운동량)을 구해보겠습니다.\n\n$$T=\\frac{1}{2}\\sum m_i\\dot{r}_i^2$$\n\n식(1.51)을 이용하여 공액 운동량 $p_j$를 구하면 다음과 같습니다.\n\n$$p_j=\\frac{\\partial T}{\\partial\\dot{q}_j}=\\sum_{i}m_i\\dot{r}_i\\cdot\\frac{\\partial r_i}{\\partial\\dot{q}_j}=\\sum_{i}m_iv_i\\cdot\\frac{\\partial r_i}{\\partial q_j}$$\n\n여기에 앞서 유도한 식(2.49)의 결과($\\frac{\\partial r_i}{\\partial q_j}=n$)를 대입하면 다음 식을 얻게 됩니다.\n\n$$p_j=n\\cdot\\sum_{i}m_iv_i$$\n\n이 역시 예상했던 대로, 계의 총 선운동량 중 단위 벡터 $n$ 방향의 성분을 나타냅니다.\n\n이제 우리가 논의해 온 평행이동 좌표 $q_j$가 순환 좌표(cyclic coordinate)라고 가정해 봅시다. 그렇다면 $q_j$는 퍼텐셜 에너지 $V$에 나타날 수 없으므로 다음이 성립합니다.\n\n$$-\\frac{\\partial V}{\\partial q_j}\\equiv Q_j=0$$\n\n이는 우리가 잘 알고 있는 선운동량 보존 법칙, 즉 '주어진 방향으로 계에 가해진 총 외력의 성분이 0이면, 그 방향의 선운동량 성분은 보존된다'는 정리와 정확히 일치합니다."
        },
        {
          "id": "GM_2-6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_KR_TTS",
          "kind": "tts",
          "version": "part 03",
          "label": "GM_2.6 · 3부: 병진 대칭과 선운동량",
          "fileName": "GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_infographic.png",
            "alt": "GM 2.6 part03 Conservation Theorems and Symmetry Properties translation symmetry and linear momentum infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part03_Conservation_Theorems_and_Symmetry_Properties_translation_symmetry_and_linear_momentum_infographic.png"
          },
          "content": "여러분, 반갑습니다. 오늘 수업에서는 일반화 좌표의 변화가 계 전체를 어떤 주어진 방향으로 평행이동시키는 경우를 먼저 고려해 보겠습니다. 이런 예로는 계의 질량 중심을 나타낼 때 사용하는 직교 좌표 중 하나를 들 수 있습니다. 계 전체가 평행이동하더라도 입자들의 속도는 원점의 이동에 아무런 영향을 받지 않습니다. 그렇기 때문에 운동에너지에는 이 평행이동을 나타내는 일반화 좌표가 포함되지 않는다는 것이 자명합니다. 즉, 운동에너지를 이 일반화 좌표로 편미분한 값은 반드시 0이 됩니다. 나아가 전자기력과 같이 속도에 의존하는 복잡한 요소를 배제하기 위해서, 퍼텐셜 에너지가 속도와는 무관하고 오직 위치에만 의존하는 보존계를 가정하겠습니다. 이렇게 정의된 좌표에 대해 라그랑주 운동 방정식을 세워보면 아주 흥미로운 관계를 얻을 수 있습니다. 운동에너지를 일반화 속도로 편미분한 값을 시간에 대해 미분한 결과는, 퍼텐셜 에너지를 일반화 좌표로 편미분한 값에 마이너스 부호를 붙인 것과 같습니다. 그런데 이 식은 각각 물리적으로 중요한 의미를 지닙니다. 운동에너지를 일반화 속도로 편미분한 것은 일반화 운동량이 되므로, 이를 시간에 대해 미분한 값은 곧 일반화 운동량의 시간 변화율이 됩니다. 그리고 퍼텐셜 에너지를 일반화 좌표로 편미분하여 마이너스를 붙인 값은 일반화된 힘과 같습니다. 결과적으로 이 방정식은 일반화 운동량의 시간 변화율이 일반화된 힘과 같다는 것을 보여줍니다.\n\n이제 이 식의 의미가 결국 총 선운동량에 대한 운동 방정식이라는 것을 증명해 보이겠습니다. 다시 말해, 일반화된 힘은 좌표가 평행이동하는 방향을 따르는 총 힘의 성분을 나타내고, 일반화 운동량은 이 방향을 따르는 총 선운동량의 성분임을 증명하려는 것입니다. 일반적으로 일반화된 힘은 각 입자에 작용하는 힘과, 그 입자의 위치 벡터를 해당 일반화 좌표로 편미분한 벡터를 내적한 뒤 모든 입자에 대해 합산한 값으로 정의됩니다.\n\n여기서 일반화 좌표의 미소 변화량은 특정 축을 따르는 계 전체의 평행이동에 대응합니다. 그렇기 때문에 변위가 일어나기 전 어떤 입자의 기존 위치 벡터와, 미소 변화량만큼 평행이동한 후의 새로운 위치 벡터 사이에는 긴밀한 기하학적 관계가 성립합니다. 머릿속으로 3차원 공간을 한번 상상해 보세요. 공간의 원점에서 시작해서 어떤 특정 입자를 가리키는 기존의 위치 벡터가 있습니다. 이때 계 전체가 평행이동 방향을 나타내는 단위 벡터를 따라 미소량만큼 이동하게 되면, 그 입자 역시 똑같은 방향으로 동일한 미소량만큼 위치가 바뀝니다. 즉, 기존 위치 벡터의 끝점에서 시작해서 평행이동 방향의 단위 벡터 방향으로 뻗어나가는 미소 변위 벡터가 더해지는 꼴입니다. 결과적으로 평행이동한 후의 새로운 위치 벡터는, 기존의 위치 벡터와 이 미소 변위 벡터를 두 변으로 하는 삼각형에서 나머지 한 변, 즉 두 벡터의 합벡터가 됩니다.\n\n이러한 기하학적 구조를 바탕으로 미분의 정의를 적용해 보면 수학적으로 아주 깔끔해집니다. 새로운 위치 벡터에서 기존 위치 벡터를 뺀 변위 벡터를 미소 변화량으로 나누고, 이 변화량을 0으로 보내는 극한을 취하면 결국 평행이동 방향의 단위 벡터만 남게 됩니다. 즉, 각 입자의 위치 벡터를 일반화 좌표로 편미분한 결과는 모든 입자에서 동일하게 평행이동 방향의 단위 벡터가 됩니다. 이 결과를 일반화된 힘의 정의에 대입하면, 일반화된 힘은 각 입자에 가해지는 힘들을 모두 더한 총 힘에 평행이동 방향의 단위 벡터를 내적한 것과 같아집니다. 이것은 앞서 말씀드린 대로, 계에 작용하는 총 힘 중 평행이동 방향의 성분을 의미합니다.\n\n이제 나머지 절반인 운동량 부분도 증명해 보겠습니다. 이를 위해 계의 총 운동에너지를 각 입자의 질량에 속도의 제곱을 곱하고 이를 모두 더한 뒤 2로 나눈 일반적인 형태로 두겠습니다. 그리고 이 운동에너지를 일반화 속도로 편미분하여 공액 운동량, 즉 일반화 운동량을 구해보겠습니다. 미분을 수행하면 각 입자의 질량과 속도를 곱한 벡터에, 해당 입자의 위치 벡터를 일반화 좌표로 편미분한 벡터를 내적하고 이를 모두 더한 식이 됩니다. 그런데 조금 전에 우리는 위치 벡터를 일반화 좌표로 편미분한 결과가 평행이동 방향의 단위 벡터라는 것을 밝혀냈습니다. 따라서 이 단위 벡터를 대입하면, 일반화 운동량은 각 입자의 질량과 속도를 곱한 선운동량을 모두 더한 총 선운동량에 평행이동 방향의 단위 벡터를 내적한 값과 같아집니다. 이 결과 역시 우리가 예상했던 대로, 계의 총 선운동량 중 평행이동 방향의 성분을 정확히 나타냅니다.\n\n자, 이제 마지막 단계입니다. 우리가 지금까지 논의해 온 평행이동 좌표가 라그랑주 함수에 직접 나타나지 않는 순환 좌표라고 가정해 보겠습니다. 이 좌표가 순환 좌표라면 퍼텐셜 에너지 역시 이 좌표의 영향을 받지 않으므로, 퍼텐셜 에너지를 이 일반화 좌표로 편미분한 값은 0이 됩니다. 이 말은 곧 해당 방향으로 작용하는 일반화된 힘이 0이라는 뜻입니다. 운동 방정식에 의해 일반화된 힘이 0이면 일반화 운동량의 시간 변화율도 0이 되므로, 이 방향의 일반화 운동량은 시간이 흘러도 변하지 않고 일정하게 유지됩니다. 이 결론은 우리가 잘 알고 있는 선운동량 보존 법칙, 즉 주어진 방향으로 계에 가해진 총 외력의 성분이 0이면, 그 방향의 선운동량 성분은 보존된다는 물리적 정리와 완벽하게 일치합니다."
        },
        {
          "id": "GM_2-6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_Korean_Translation",
          "kind": "translation",
          "version": "part 04",
          "label": "GM_2.6 · 4부: 회전 대칭과 보존 예제",
          "fileName": "GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_infographic.png",
            "alt": "GM 2.6 part04 Conservation Theorems and Symmetry Properties rotation symmetry and conservation examples infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_infographic.png"
          },
          "content": "이와 유사한 방식으로, 만약 어떤 순환(cyclic, 혹은 무시 가능한) 좌표 $q_j$의 변화 $dq_j$가 계에 속한 입자들의 어떤 축에 대한 회전에 대응한다면, 이 좌표에 공액인 운동량의 보존은 곧 각운동량 보존 법칙에 대응한다는 것을 보일 수 있습니다. 앞서 사용했던 것과 동일한 논리를 적용하면, 좌표계의 회전은 속도의 크기에 영향을 미치지 않으므로 운동 에너지 $T$는 $q_j$를 포함할 수 없습니다. 따라서 $q_j$에 대한 $T$의 편미분은 당연히 0이 되어야 하며, 퍼텐셜 에너지 $V$ 역시 $q_j$에 독립적이므로 우리는 다시 한번 식 (2.48)을 얻게 됩니다.\n\n$$\\frac{d}{dt}\\frac{\\partial T}{\\partial\\dot{q}_{j}}\\equiv\\dot{p}_{j}=-\\frac{\\partial V}{\\partial q_{j}}\\equiv Q_{j}$$\n\n하지만 이번에는 $q_j$가 회전 좌표일 때, 일반화된 힘 $Q_j$가 회전축에 대한 총 인가 토크(돌림힘)의 성분이 되고, 공액 운동량 $p_j$는 동일한 회전축 방향의 총 각운동량 성분이 된다는 것을 증명하고자 합니다.\n\n일반화된 힘 $Q_j$는 다시 식 (1.49)에 의해 다음과 같이 주어집니다.\n\n$$Q_{j}=\\sum_{i}F_{i}\\cdot\\frac{\\partial r_{i}}{\\partial q_{j}}$$\n\n다만, 여기서의 미분은 앞서 선형 변위(병진 운동)를 다루었을 때와는 다른 물리적 의미를 지닙니다. 여기서 $q_j$의 미소 변화 $dq_j$는 위치 벡터 $r_i$의 크기를 일정하게 유지하면서 진행되는 미소 회전에 대응해야 합니다.\n\n<figure class=\"textbook-figure\">\n  <img src=\"assets/figures/Units/_figure_primitive_svg_reconstruction/GM_02/fig_2_8/fig_2_8.svg\" alt=\"그림 2.8: 계의 회전에 따른 위치 벡터 변화\" />\n  <figcaption>그림 2.8. 계의 회전에 따른 위치 벡터 변화.</figcaption>\n</figure>\n\n> **[원문 그림 2.8의 시각적 구조와 원리 설명]**\n> 교재의 그림 2.8에서는 원점을 시작점으로 하여 어떤 회전축 방향의 unit vector(단위 벡터) $n$이 수직으로 뻗어 있는 3차원 공간을 보여줍니다. 이 회전축으로부터 비스듬히 뻗어나간 위치 벡터 $r_i(q_j)$가 있으며, 이 벡터와 회전축 $n$이 이루는 사이각은 $\\theta$입니다.\n> 이때 회전축 $n$을 중심으로 계가 미소 각도 $dq_j$만큼 회전하면, 위치 벡터 $r_i(q_j)$의 끝점은 회전축을 중심으로 하는 원의 원주를 따라 미소 변위 벡터 $dr_i$만큼 이동하여 새로운 위치 벡터 $r_i(q_j + dq_j)$가 됩니다. 기하학적으로 이 미소 변화 벡터 $dr_i$는 반지름이 $r_i \\sin\\theta$이고 중심각이 $dq_j$인 부채꼴의 호의 길이와 같으므로, 그 크기는 $|dr_i| = r_i \\sin\\theta \\, dq_j$가 됩니다. 방향은 회전축 $n$과 원래의 위치 벡터 $r_i$ 모두에 수직인 접선 방향을 향하게 됩니다.\n\n이 기하학적 관계(그림 2.8)로부터 미분 성분의 크기를 쉽게 얻을 수 있습니다.\n\n$$|dr_{i}|=r_{i}\\sin\\theta \\, dq_{j} \\quad \\text{이므로} \\quad \\left|\\frac{\\partial r_{i}}{\\partial q_{j}}\\right|=r_{i}\\sin\\theta$$\n\n이 미분 벡터의 방향은 $r_i$와 $n$ 모두에 수직입니다. 따라서 이 미분 항목은 다음과 같이 벡터의 외적(cross product) 형태로 표현할 수 있습니다.\n\n$$\\frac{\\partial r_{i}}{\\partial q_{j}}=n\\times r_{i}$$\n\n이 결과를 대입하면 일반화된 힘은 다음과 같이 변형됩니다.\n\n$$Q_{j}=\\sum_{i}F_{i}\\cdot (n\\times r_{i}) = \\sum_{i}n\\cdot (r_{i}\\times F_{i})$$\n\n벡터 삼중적의 순환 대칭 성질을 이용해 정리하면 다음과 같이 단순화됩니다.\n\n$$Q_{j}=n\\cdot\\sum_{i}N_{i}=n\\cdot N$$\n\n여기서 $N_i = r_i \\times F_i$는 각 입자에 작용하는 토크이므로, 이 식은 일반화된 힘 $Q_j$가 회전축 $n$ 방향의 총 토크 성분임을 증명합니다. 식 (2.50)을 사용하여 공액 운동량 $p_j$에 대해서도 유사한 수학적 조작을 거치면, 명제의 두 번째 부분 역시 증명할 수 있습니다.\n\n$$p_{j}=\\frac{\\partial T}{\\partial\\dot{q}_{j}}=\\sum_{i}m_{i}v_{i}\\cdot\\frac{\\partial r_{i}}{\\partial q_{j}}=\\sum_{i}n\\cdot (r_{i}\\times m_{i}v_{i})=n\\cdot\\sum_{i}L_{i}=n\\cdot L$$\n\n이 결과들을 요약하면, 만약 회전 좌표 $q_j$가 순환(cyclic) 좌표라면, 회전축 $n$ 방향의 인가된 총 토크 성분인 $Q_j$가 0이 되며, 이에 따라 $n$ 방향의 총 각운동량 성분 $L$이 상수가 됩니다. 이로써 우리는 순환 좌표와 관련된 일반적인 보존 정리로부터 각운동량 보존 법칙을 다시 이끌어내게 되었습니다.\n\n계의 물리적 성질과 관련하여, 순환 병진 좌표나 순환 회전 좌표가 가지는 의의에 대해 여기서 짚고 넘어갈 필요가 있습니다. 변위에 대응하는 일반화 좌표가 순환 좌표라는 것은, 계를 하나의 강체처럼 통째로 병진 이동시키더라도 문제에 아무런 영향을 주지 않는다는 것을 의미합니다. 다시 말해, **계가 특정 방향으로의 병진 이동에 대해 불변(invariant)이라면, 그 방향의 선형 운동량이 보존됩니다**. 마찬가지로, 일반화된 회전 좌표가 순환 좌표라는 사실(따라서 그에 공액인 각운동량이 보존된다는 것)은 **계가 주어진 축에 대한 회전에 대해 불변함**을 나타냅니다.\n\n이처럼 **운동량 보존 법칙은 계의 대칭성(symmetry properties)과 밀접하게 연결되어 있습니다**. 만약 계가 완전한 구형 대칭(spherical symmetric)을 이룬다면, 우리는 별도의 복잡한 계산 없이도 각운동량의 모든 성분이 보존된다고 단언할 수 있습니다. 혹은 계가 오직 $z$축에 대해서만 대칭적이라면 오직 $L_z$만이 보존될 것이며, 다른 축들에 대해서도 동일한 논리가 적용됩니다. 이러한 대칭성 고려를 활용하면, 비교적 복잡한 문제에서도 운동의 상수(constants of the motion)가 존재하는지 여부를 직관적으로 파악할 수 있는 경우가 많습니다. (섹션 13.7의 뇌터 정리(Noether's theorem) 참조.)\n\n예를 들어, 무한한 평면(가령 $z=0$ 평면) 위에 균일하게 분포된 고정된 소스(원천)들에 의해 생성된 퍼텐셜 필드 안에서 한 세트의 질점들이 운동하는 계를 생각해 봅시다. (이 소스들은 중력장의 경우에는 질량 분포가 될 것이고, 정전기장의 경우에는 전하 분포가 될 것입니다 .) 이 문제의 대칭성을 살펴보면, 라그랑지안은 입자계를 $x$ 또는 $y$ 방향으로 병진 이동시켜도 불변이며($z$ 방향은 제외), $z$ 축에 대해 회전시켜도 불변입니다. 따라서 총 선형 운동량의 $x$ 및 $y$ 성분인 $P_x$와 $P_y$, 그리고 총 각운동량의 $z$ 성분인 $L_z$가 운동의 상수가 된다는 결론이 즉각 도출됩니다.\n\n그러나 만약 소스들이 $x \\ge 0$인 반평면으로만 제한된다면, $x$ 축 방향의 병진 대칭성과 $z$ 축에 대한 회전 대칭성이 깨지게 됩니다. 이 경우 $P_x$와 $L_z$는 더 이상 보존될 수 없지만, $y$ 축 방향의 대칭성은 여전히 유지되므로 $P_y$는 계속해서 운동의 상수로 남게 됩니다. 우리는 앞으로 이어지는 장들에서 운동의 상수와 계의 대칭성 사이의 이러한 연결 고리를 여러 차례 마주하게 될 것입니다."
        },
        {
          "id": "GM_2-6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_KR_TTS",
          "kind": "tts",
          "version": "part 04",
          "label": "GM_2.6 · 4부: 회전 대칭과 보존 예제",
          "fileName": "GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_infographic.png",
            "alt": "GM 2.6 part04 Conservation Theorems and Symmetry Properties rotation symmetry and conservation examples infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.6_Conservation_Theorems_and_Symmetry_Properties/GM_2.6_part04_Conservation_Theorems_and_Symmetry_Properties_rotation_symmetry_and_conservation_examples_infographic.png"
          },
          "content": "이와 유사한 방식으로, 만약 어떤 순환 좌표, 즉 라그랑지안에 명시적으로 나타나지 않는 무시 가능한 좌표의 미소 변화가 계에 속한 입자들이 특정 축을 중심으로 회전하는 운동에 대응한다면, 이 좌표에 공액인 일반화 운동량의 보존은 곧 각운동량 보존 법칙에 대응한다는 것을 보일 수 있습니다. 앞서 선형 병진 운동에서 사용했던 것과 동일한 논리를 적용해 보겠습니다. 좌표계를 회전하더라도 속도의 크기 자체는 전혀 변하지 않으므로, 입자계의 총 운동 에너지는 회전 각도 좌표를 함수로 가질 수 없습니다. 따라서 회전 각도 좌표에 대한 운동 에너지의 편미분 값은 당연히 영이 되어야 합니다. 게다가 우리가 다루는 퍼텐셜 에너지 역시 이 회전 각도 좌표와 독립적이므로, 우리는 다시 한번 일반화 운동량의 시간 변화율이 일반화된 힘과 같다는 역학의 기본 방정식을 얻게 됩니다. 이 식을 말로 풀어보면, 회전 각도 좌표에 대한 공액 운동량을 시간에 대해 미분한 값은, 퍼텐셜 에너지를 회전 각도 좌표로 편미분한 뒤 마이너스 부호를 붙인 일반화된 힘과 일치한다는 뜻입니다.\n\n하지만 이번에는 이 좌표가 회전 운동을 나타낼 때, 일반화된 힘이 회전축에 대한 총 인가 토크, 즉 돌림힘의 성분이 되고, 공액 운동량은 동일한 회전축 방향의 총 각운동량 성분이 된다는 것을 수학적으로 명확히 증명해 보고자 합니다.\n\n기본적으로 일반화된 힘은 각 입자에 작용하는 실제 힘과, 일반화 좌표에 대한 입자의 위치 벡터 편미분 값을 내적하여 모든 입자에 대해 더한 값으로 주어집니다.\n\n다만, 여기서 위치 벡터를 일반화 좌표로 미분하는 것은 앞서 선형 병진 운동을 다루었을 때와는 물리적 의미가 완전히 다릅니다. 여기서 회전 각도 좌표의 미소 변화는 위치 벡터의 크기를 일정하게 유지하면서 진행되는 미소 회전 운동에 대응해야 합니다.\n\n이해를 돕기 위해 3차원 공간의 시각적 구조를 머릿속으로 한 번 그려보겠습니다. 원점을 시작점으로 삼고, 수직 위쪽 방향으로 뻗어 나가는 회전축 방향의 단위 벡터를 설정합니다. 이 회전축으로부터 비스듬한 방향으로 어떤 입자의 위치 벡터가 뻗어 나가고 있고, 회전축과 이 위치 벡터가 이루는 사이각을 세타라고 해 봅시다. 이제 이 수직 회전축을 중심으로 계 전체가 미소 각도만큼 회전하면, 위치 벡터의 끝점은 회전축을 중심축으로 하는 원의 둘레를 따라 미소하게 이동하여 새로운 위치 벡터를 형성하게 됩니다. 기하학적으로 이 미소하게 변한 위치 벡터의 크기는, 회전축으로부터의 수직 거리인 위치 벡터 크기 곱하기 사인 세타에다가 미소 회전 각도를 곱한 부채꼴의 호의 길이와 정확히 같습니다. 그리고 이 미소 변화 벡터의 방향은 회전축과 원래의 위치 벡터 모두에 수직인 접선 방향을 향하게 됩니다.\n\n이러한 기하학적 관계를 바탕으로, 회전 각도 좌표의 변화에 따른 위치 벡터의 미분 성분을 크기와 방향을 모두 고려한 벡터 형태로 나타내면, 회전축 방향의 단위 벡터와 원래 위치 벡터의 외적으로 깔끔하게 표현할 수 있습니다.\n\n이 결과를 일반화된 힘을 구하는 식에 대입해 보겠습니다. 그러면 일반화된 힘은 각 입자에 작용하는 실제 힘과, 회전축 단위 벡터와 위치 벡터의 외적 항목을 내적하여 모두 더한 형태가 됩니다. 벡터 삼중적의 순환 대칭 성질을 이용하여 이 식의 연산 순서를 바꾸어 정리하면, 회전축 방향의 단위 벡터와, 각 입자의 위치 벡터와 실제 힘을 외적한 토크 항목들의 총합을 내적하는 형태로 단순화됩니다. 위치 벡터와 힘의 외적은 곧 그 입자가 받는 토크이므로, 최종적으로 일반화된 힘은 회전축 방향의 단위 벡터와 계 전체가 받는 총 토크의 내적과 같아집니다. 즉, 일반화된 힘이 회전축 방향의 총 토크 성분이라는 점이 완벽하게 증명되는 것입니다. 이와 아주 유사한 방식으로, 공액 운동량에 대해서도 위치 벡터의 미분 자리에 회전축 단위 벡터와 위치 벡터의 외적을 대입하고 연산 순서를 바꾸어 줄 수 있습니다. 이렇게 정리하면 공액 운동량은 회전축 방향의 단위 벡터와, 각 입자의 위치 벡터와 선운동량을 외적한 각운동량 항목들의 총합을 내적한 결과가 됩니다. 결과적으로 회전 좌표에 공액인 일반화 운동량은 회전축 방향의 총 각운동량 성분과 일치한다는 명제의 두 번째 부분 역시 증명됩니다.\n\n이 결과들을 다시 한번 요약해 보겠습니다. 만약 계의 라그랑지안에 회전 각도 좌표가 직접 나타나지 않는 순환 좌표라면, 이 좌표에 대응하는 일반화된 힘, 즉 회전축 방향의 총 토크 성분이 영이 됩니다. 이에 따라 회전축 방향의 총 각운동량 성분은 시간이 흘러도 변하지 않는 상수가 됩니다. 우리는 복잡한 계산 없이, 순환 좌표에 대한 일반적인 역학 법칙으로부터 각운동량 보존 법칙을 이끌어낸 것입니다.\n\n그렇다면 라그랑지안에서 병진 이동이나 회전 운동을 나타내는 일반화 좌표가 나타나지 않는다는 것, 즉 순환 좌표가 된다는 것은 계의 성질과 관련하여 어떤 물리적 의미를 담고 있을까요? 변위를 나타내는 좌표가 라그랑지안에 없다는 것은, 계를 하나의 단단한 덩어리처럼 통째로 평행 이동시키더라도 우리가 풀어야 하는 물리적 상황에 아무런 영향을 주지 않는다는 뜻입니다. 다시 말해, 계가 특정 방향으로의 평행 이동에 대해 불변하는 성질을 가질 때, 그 방향의 선형 운동량이 보존된다는 법칙이 성립합니다. 마찬가지로, 어떤 회전 각도 좌표가 라그랑지안에 나타나지 않는다는 것은, 계가 주어진 축을 중심으로 회전하더라도 계의 성질이 전혀 변하지 않는다는 것을 나타냅니다.\n\n결과적으로, 우리가 잘 알고 있는 운동량 보존 법칙들은 계가 물리적으로 어떤 대칭성을 가지고 있느냐와 아주 긴밀하게 연결되어 있습니다. 만약 어떤 물리계가 모든 방향으로 대칭을 이루는 구형 대칭 구조를 가지고 있다면, 우리는 긴 계산을 해보지 않고도 각운동량의 모든 방향 성분이 보존된다고 단언할 수 있습니다. 혹은 계가 오직 제트 축에 대해서만 회전 대칭성을 가지고 있다면, 오직 제트 축 방향의 각운동량 성분만이 보존될 것이며, 다른 축들에 대해서도 이와 똑같은 논리가 적용됩니다. 이러한 대칭성 관점을 다방면으로 활용하면, 아무리 복잡해 보이는 물리 문제라도 복잡한 미분방정식을 풀지 않고 오직 눈으로 성질을 파악하는 것만으로 운동의 상수, 즉 보존되는 물리량이 존재하는지 곧바로 찾아낼 수 있습니다. 이 원리는 향후 더 깊이 배우게 될 역학의 핵심인 뇌터 정리와도 일맥상통합니다.\n\n구체적인 예를 하나 들어보겠습니다. 질점들이 무한히 넓은 제트가 영인 평면 위에 균일하게 퍼져 있는 고정된 소스들에 의해 만들어진 퍼텐셜 필드 속에서 운동하고 있다고 가정해 봅시다. 만약 중력장 문제라면 이 소스들은 질량이 골고루 퍼진 평면일 것이고, 전자기학 문제라면 전하가 균일하게 퍼진 평면이 되겠지요. 이 문제의 공간적 대칭성을 살펴보면, 입자들을 엑스 축 방향이나 와이 축 방향으로 평행 이동시키더라도 무한한 평면 위에서는 상황이 완전히 똑같으므로 라그랑지안은 변하지 않습니다. 또한 제트 축을 중심으로 계을 회전시키더라도 대칭 평면의 성질상 라그랑지안은 전혀 영향을 받지 않습니다. 따라서 대칭성에 의해, 총 선형 운동량의 엑스 성분과 와이 성분, 그리고 제트 축 방향의 총 각운동량 성분이 운동 중에 절대 변하지 않는 상수가 된다는 결론을 즉각 내릴 수 있습니다.\n\n반면에, 이 소스들이 무한하지 않고 엑스가 영보다 크거나 같은 반평면 영역에만 제한적으로 분포되어 있다고 상황을 바꾸어 보겠습니다. 이렇게 되면 계을 엑스 축 방향으로 이동하거나 제트 축을 중심으로 회전시킬 때 평면의 경계선 때문에 대칭성이 완전히 깨지게 됩니다. 결과적으로 총 선형 운동량의 엑스 성분과 제트 방향의 총 각운동량 성분은 더 이상 보존되지 않습니다. 하지만 와이 축 방향의 평행 이동 대칭성은 여전히 유효하므로, 오직 총 선형 운동량의 와이 성분만이 변하지 않는 운동의 상수로 여전히 유지됩니다. 우리는 앞으로 물리학을 계속 공부하면서, 운동의 상수와 계의 대칭성 사이에 존재하는 이 아름다운 연결 고리를 끊임없이 마주하게 될 것입니다."
        }
      ]
    },
    {
      "id": "GM_2.7",
      "title": "에너지 함수와 에너지 보존",
      "category": "minor_unit",
      "startPage": "80",
      "endPage": "83",
      "pageCount": "4",
      "pageLabelStart": "61",
      "pageLabelEnd": "64",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.7 · 1부: 에너지 함수의 유도",
          "fileName": "GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_infographic.png",
            "alt": "GM 2.7 part01 Energy Function and the Conservation of Energy energy function derivation infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_infographic.png"
          },
          "content": "2.7 에너지 함수와 에너지 보존 법칙 \n\n라그랑주 공식화에서 우리가 얻을 것으로 기대할 수 있는 또 다른 보존 정리 하나는, 힘이 오직 위치에만 의존하는 퍼텐셜로부터 유도되는 계에서의 총에너지 보존입니다. 실제로, 총에너지 보존이 단지 하나의 특수한 사례에 불과하다는 것을 보여주는 더 일반적인 보존 정리를 증명하는 것이 가능합니다.\n\n일반적인 라그랑주 함수를 고려해 봅시다. 이 함수는 일반화 좌표 $q_{j}$와 일반화 속도 $\\dot{q}_{j}$의 함수일 것이며, 시간 $t$에 명시적으로 의존할 수도 있습니다. (시간에 대한 명시적인 의존성은 외력 퍼텐셜이 시간 변화를 겪거나, 시간에 의존하는 구속 조건이 존재할 때 발생할 수 있습니다.) 이때 라그랑주 함수 $L$의 시간에 대한 전미분은 다음과 같습니다.\n\n$$\\frac{dL}{dt}=\\sum_{j}\\frac{\\partial L}{\\partial q_{j}}\\frac{dq_{j}}{dt}+\\sum_{j}\\frac{\\partial L}{\\partial\\dot{q}_{j}}\\frac{d\\dot{q}_{j}}{dt}+\\frac{\\partial L}{\\partial t}$$\n\n  *(식 2.51)* \n\n> **[식 2.51의 수식 흐름 설명]**\n> 라그랑주 함수가 $L(q, \\dot{q}, t)$의 형태를 가질 때, 이 함수가 시간에 따라 어떻게 변하는지(전미분)를 나타낸 식입니다.\n> * **첫 번째 항($\\sum$):** 좌표 $q_j$가 바뀜에 따른 $L$의 변화량\n> * **두 번째 항($\\sum$):** 속도 $\\dot{q}_j$가 바뀜에 따른 $L$의 변화량\n> * **세 번째 항:** 구속 조건이나 외력 등으로 인해 $L$이 시간에 직접(명시적으로) 영향을 받아 변하는 양을 모두 더해준 것입니다.\n> \n> \n\n여기서 라그랑주 방정식(Lagrange's equations)을 적용하면 다음과 같은 관계를 얻습니다.\n\n$$\\frac{\\partial L}{\\partial q_{j}}=\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot{q}_{j}}\\right)$$\n\n\n\n이 관계식을 사용하면, 앞서 구한 식 (2.51)은 다음과 같이 다시 쓰일 수 있습니다.\n\n$$\\frac{dL}{dt}=\\sum_{j}\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot{q}_{j}}\\right)\\dot{q}_{j}+\\sum_{j}\\frac{\\partial L}{\\partial\\dot{q}_{j}}\\frac{d\\dot{q}_{j}}{dt}+\\frac{\\partial L}{\\partial t}$$\n\n\n\n> **[식 변환 과정 설명]**\n> 식 2.51의 첫 번째 항에 있던 $\\frac{\\partial L}{\\partial q_{j}}$ 자리에 라그랑주 방정식을 대입하여 편미분 기호를 시간에 대한 전미분 기호($\\frac{d}{dt}$)로 변환한 단계입니다. 이렇게 하면 첫 번째 항과 두 번째 항의 형태가 유사해져 묶어낼 수 있는 기반이 마련됩니다.\n\n따라서 다음의 결과가 결론적으로 도출됩니다.\n\n$$\\frac{dL}{dt}=\\sum_{j}\\frac{d}{dt}\\left(\\dot{q}_{j}\\frac{\\partial L}{\\partial\\dot{q}_{j}}\\right)+\\frac{\\partial L}{\\partial t}$$\n\n\n\n또는 이 식을 한쪽으로 이항하여 정리하면 다음과 같습니다.\n\n$$\\frac{d}{dt}\\left(\\sum_{j}\\dot{q}_{j}\\frac{\\partial L}{\\partial\\dot{q}_{j}}-L\\right)+\\frac{\\partial L}{\\partial t}=0$$\n\n  *(식 2.52)* \n\n> **[식 2.52 도출을 위한 미분 연산 설명]**\n> 미분의 곱의 공식인 $\\frac{d}{dt}(f \\cdot g) = \\frac{df}{dt}g + f\\frac{dg}{dt}$를 역으로 적용한 것입니다.\n> 위 식에서 $\\sum$ 내부의 두 항은 정확히 $\\left(\\dot{q}*{j}\\frac{\\partial L}{\\partial\\dot{q}*{j}}\\right)$라는 하나의 덩어리를 시간에 대해 미분한 것과 같습니다. 최종적으로 좌변의 $\\frac{dL}{dt}$까지 미분 기호 괄호 안으로 묶어 넣으면서 기호가 $-L$로 들어가게 되어, 식 (2.52)와 같은 깔끔한 형태가 완성됩니다.\n> 이 식은 **\"괄호 안의 물리량이 시간에 따라 변하는 비율\"**과 **\"라그랑주 함수가 시간에 직접 편미분되어 변하는 비율\"**의 합이 항상 0이 됨을 보여주는 중요한 이정표입니다."
        },
        {
          "id": "GM_2-7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.7 · 1부: 에너지 함수의 유도",
          "fileName": "GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_infographic.png",
            "alt": "GM 2.7 part01 Energy Function and the Conservation of Energy energy function derivation infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part01_Energy_Function_and_the_Conservation_of_Energy_energy_function_derivation_infographic.png"
          },
          "content": "이어서 이 장의 핵심인 이점 칠 단원, 에너지 함수와 에너지 보존 법칙에 대해 알아보겠습니다.\n\n우리가 라그랑주 공식화에서 얻을 것으로 기대할 수 있는 또 다른 보존 정리 하나는, 계의 힘이 오직 위치에만 의존하는 퍼텐셜로부터 유도될 때 나타나는 총에너지 보존 법칙입니다. 하지만 실제로 우리가 증명하려는 보존 정리는, 총에너지 보존이 단지 하나의 특수한 사례에 불과하다는 것을 보여주는 훨씬 더 일반적인 정리입니다.\n\n그럼 먼저 일반적인 라그랑주 함수를 고려해 봅시다. 이 함수는 기본적으로 모든 독립된 일반화 좌표들과 이들의 시간 변화율인 일반화 속도들의 함수일 텐데요, 이뿐만 아니라 시간에도 명시적으로 의존할 수가 있습니다. 여기서 시간에 명시적으로 의존한다는 건, 외력이 만드는 퍼텐셜 자체가 시간에 따라 변하거나, 혹은 시간에 따라 변하는 구속 조건이 계에 존재할 때 발생할 수 있는 상황을 말합니다.\n\n자, 이제 이 라그랑주 함수가 시간에 따라 전체적으로 어떻게 변하는지 알아보기 위해 시간에 대한 전미분을 구해 보겠습니다. 라그랑주 함수의 전미분은 세 가지 성분의 합으로 표현되는데요. 첫 번째 성분은 각 일반화 좌표가 바뀜에 따른 라그랑주 함수의 변화율에 일반화 속도를 곱해서 모든 좌표에 대해 더한 값입니다. 두 번째 성분은 일반화 속도가 바뀜에 따른 라그랑주 함수의 변화율에 일반화 가속도를 곱해서 모두 더한 값이고요. 마지막 세 번째 성분은 구속 조건이나 외력의 변화 때문에 라그랑주 함수가 시간에 직접 영향을 받아 변하는 편미분 값입니다. 이 세 가지를 모두 더해준 것이 바로 라그랑주 함수의 시간 전미분입니다.\n\n여기서 우리가 잘 알고 있는 라그랑주 방정식을 적용해 볼까요? 라그랑주 방정식에 따르면, 어떤 일반화 좌표에 대한 라그랑주 함수의 편미분 값은, 그 좌표의 일반화 속도에 대한 라그랑주 함수의 편미분 값을 시간에 대해 전미분한 것과 정확히 같습니다.\n\n이 관계식을 방금 말씀드린 전미분 식에 대입하면, 식을 아주 흥미롭게 다시 쓸 수 있습니다. 전미분 식의 첫 번째 성분에 있던 좌표에 대한 편미분 자리에, 방금 유도한 속도 편미분의 시간 전미분 항을 그대로 집어넣는 것이죠. 이렇게 하면 첫 번째 성분은 속도 편미분의 시간 전미분 곱하기 일반화 속도들을 모두 더한 형태가 되고, 두 번째 성분은 속도 편미분 곱하기 일반화 가속도들을 모두 더한 형태가 되며, 여기에 마지막으로 시간에 대한 편미분 항이 더해진 형태가 됩니다. 이렇게 식을 변형하면 첫 번째 성분과 두 번째 성분의 모양이 매우 유사해져서 하나로 묶어낼 수 있는 멋진 기반이 마련됩니다.\n\n수학에서 두 함수의 곱을 미분하는 공식을 떠올려 보시면, 첫 번째 함수를 미분하고 두 번째 함수를 곱한 것에, 첫 번째 함수는 그대로 두고 두 번째 함수를 미분해서 곱한 것을 더하게 되죠. 지금 우리 식의 첫 번째 성분과 두 번째 성분의 합이 정확히 이 곱의 미분 공식 형태를 띠고 있습니다. 따라서 이 두 성분은 일반화 속도와 라그랑주 함수의 속도 편미분을 곱한 하나의 덩어리를 시간에 대해 전미분한 것으로 깔끔하게 묶을 수 있습니다. 결과적으로 라그랑주 함수의 시간 전미분은, 이 묶어낸 덩어리의 시간 전미분에 라그랑주 함수의 시간 편미분을 더한 것과 같아집니다.\n\n이제 이 식의 모든 항을 좌변으로 이항해서 미분 기호 안으로 한꺼번에 정리해 보겠습니다. 그러면 식은 어떤 괄호 안의 양을 시간에 대해 전미분한 것에, 라그랑주 함수의 시간 편미분을 더하면 항상 영이 된다는 형태로 바뀝니다. 이때 미분 기호 괄호 안에 들어가는 물리량은, 모든 일반화 속도와 그에 대응하는 속도 편미분을 곱해서 더한 값에서, 라그랑주 함수 자체를 빼준 값이 됩니다.\n\n결론적으로 이 식은, 방금 말씀드린 괄호 안의 특별한 물리량이 시간에 따라 변하는 비율과, 라그랑주 함수가 시간에 직접 편미분되어 변하는 비율의 합이 언제나 영이 된다는 것을 명확하게 보여줍니다. 이 괄호 안에 정의된 물리량이 앞으로 우리 논의에서 아주 중요한 이정표가 될 것입니다."
        },
        {
          "id": "GM_2-7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.7 · 2부: 총에너지로서의 h 조건",
          "fileName": "GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_infographic.png",
            "alt": "GM 2.7 part02 Energy Function and the Conservation of Energy h as total energy conditions infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_infographic.png"
          },
          "content": "## [번역] 에너지 함수와 에너지 보존\n\n괄호 안의 양은 종종 에너지 함수(energy function)라고 불리며 , 기호 $h$로 나타냅니다.\n\n$$h(q_{1},...,q_{n}, t)=\\sum_{j}\\dot{q}_{j}\\frac{\\partial L}{\\partial\\dot{q}_{j}}-L$$\n\n\n\n그리고 식 (2.52)는 이 $h$의 시간에 대한 전미분(total time derivative)을 나타내는 것으로 볼 수 있습니다.\n\n$$\\frac{dh}{dt}=-\\frac{\\partial L}{\\partial t}$$\n\n\n\n만약 라그랑지안이 시간의 명시적인 함수가 아니라면, 즉 시간 $t$가 라그랑지안 $L$에 직접적으로 나타나지 않고 일반화 좌표 $q$와 일반화 속도 $\\dot{q}$의 시간 변화를 통해서만 간접적으로 포함되어 있다면, 식 (2.54)에 의해 **$h$는 보존됩니다**. 이때 $h$는 운동의 첫 번째 적분 중 하나가 되며, 때로는 야코비 적분이라고도 불립니다.\n\n### 에너지 함수 $h$가 총에너지가 되는 조건\n\n특정 상황에서 이 함수 $h$는 시스템의 총에너지(total energy)와 같아집니다. 이러한 상황이 어떤 경우인지 알아보기 위해, 시스템의 총 운동에너지 $T$가 항상 다음과 같이 세 가지 항의 합으로 나누어 기술될 수 있다는 점을 상기해 봅시다.\n\n$$T=T_{0}+T_{1}+T_{2}$$\n\n\n\n* \n**$T_{0}$**: 일반화 좌표에만 의존하는 함수입니다.\n\n\n* \n**$T_{1}(q,\\dot{q})$**: 일반화 속도에 대해 선형(1차)인 함수입니다.\n\n\n* \n**$T_{2}(q,\\dot{q})$**: 일반화 속도에 대한 2차 함수입니다.\n\n\n\n매우 광범위한 시스템과 일반화 좌표계에서, 라그랑지안 변수들의 함수적 거동 역시 이와 유사하게 다음과 같이 분해할 수 있습니다.\n\n$$L(q,\\dot{q},t)=L_{0}(q,t)+L_{1}(q,\\dot{q},t)+L_{2}(q,\\dot{q},t)$$\n\n\n\n여기서 $L_{2}$는 일반화 속도에 대해 (단순히 2차가 아니라) 2차 동차 함수(homogeneous function of the second degree)이며, $L_{1}$은 일반화 속도에 대해 **1차 동차 함수**입니다.\n\n역학 자체의 본질적인 법칙이 라그랑지안에게 반드시 식 (2.55)의 형태를 따르도록 강제하는 것은 아닙니다. 하지만 우리가 관심을 가지는 대부분의 문제에서 라그랑지안은 실제로 이 형태를 만족합니다.\n\n특히 힘이 속도와 무관한 퍼텐셜(위치에너지)로부터 유도될 때, 라그랑지안은 명백히 이 형태를 가집니다. 나아가 속도에 의존하는 퍼텐셜을 가지는 경우라 할지라도, 전자기장 내에 있는 대전 입자의 라그랑지안(식 1.63)은 이 식 (2.55)의 형태를 만족하는 것을 확인할 수 있습니다.\n\n---\n\n### 오일러 정리의 적용과 수식 전개 이해\n\n여기서 오일러 정리(Euler's theorem)를 적용해 보겠습니다. 오일러 정리에 따르면, 만약 어떤 함수 $f$가 변수 $x_{i}$들에 대해 $n$차 동차 함수라면 다음 관계가 성립합니다.\n\n$$\\sum_{i}x_{i}\\frac{\\partial f}{\\partial x_{i}}=nf$$\n\n\n\n이 정리를 식 (2.55) 형태의 라그랑지안을 가진 에너지 함수 $h$(식 2.53)에 적용하면, 속도의 차수에 따라 다음과 같은 변환이 일어납니다.\n\n* $L_{2}$ 항은 속도에 대해 2차 동차 함수이므로 오일러 정리에 의해 $2L_{2}$가 됩니다.\n* $L_{1}$ 항은 속도에 대해 1차 동차 함수이므로 오일러 정리에 의해 $1L_{1}$이 됩니다.\n* $L_{0}$ 항은 속도와 무관하므로(0차) 사라집니다.\n\n이를 정의식($h = \\sum \\dot{q}_j \\frac{\\partial L}{\\partial \\dot{q}_j} - L$)에 대입하여 정리하면 다음과 같은 결론을 얻을 수 있습니다.\n\n$$h = (2L_{2} + L_{1}) - L$$\n\n\n\n$$h = (2L_{2} + L_{1}) - (L_{0} + L_{1} + L_{2})$$\n\n$$h = L_{2} - L_{0}$$\n\n\n\n만약 일반화 좌표를 정의하는 변환 공식(식 1.38)에 시간이 명시적으로 포함되어 있지 않다면, 식 (1.73)에 의해 운동에너지는 $T = T_{2}$가 됩니다. 여기에 더해, 퍼텐셜 에너지가 일반화 속도에 의존하지 않는다면 $L_{2} = T$가 되고 $L_{0} = -V$가 성립하므로, 에너지 함수 $h$는 다음과 같이 전개됩니다.\n\n$$h = T - (-V) = T + V = E$$\n\n\n\n즉, 이 조건하에서 **에너지 함수는 실제로 시스템의 총에너지 $E$와 일치하게 됩니다**. 이러한 상황에서 퍼텐셜 $V$가 시간을 명시적으로 포함하지 않는다면 라그랑지안 $L$ 역시 시간을 명시적으로 포함하지 않을 것이므로, 식 (2.54)에 의해 $h$(여기서는 총에너지)는 보존될 것입니다.\n\n---\n\n### 원문 각주 (Footnotes)\n\n* \n**에너지 함수 $h$와 해밀토니안 $H$의 관계**: 에너지 함수 $h$는 그 값에 있어서 해밀토니안 $H$와 완전히 동일합니다(제8장 참조). 여기서 굳이 다른 이름과 기호를 사용하는 이유는, $h$는 $n$개의 독립된 변수 $q_{j}$와 그것의 시간 미분인 $\\dot{q}_{j}$(그리고 시간)의 함수로 취급하는 반면, 해밀토니안 $H$는 $2n$개의 독립된 변수 $q_{j}$, $p_{j}$(그리고 필요에 따라 시간)의 함수로 다루어짐을 강조하기 위함입니다.\n\n\n* \n**야코비 적분 명칭의 역사적 배경**: '야코비 적분'이라는 명칭은 대개 제한 3체 문제(restricted three-body problem)에서의 첫 번째 적분에 국한되어 자주 사용됩니다. 하지만 그 문제에서의 적분 역시 에너지 함수 $h$의 아주 특수한 사례일 뿐이며, 이보다 더 일반적인 상황에 대해서도 야코비 적분이라는 이름을 적용하는 역사적 선례들이 존재합니다."
        },
        {
          "id": "GM_2-7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.7 · 2부: 총에너지로서의 h 조건",
          "fileName": "GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_infographic.png",
            "alt": "GM 2.7 part02 Energy Function and the Conservation of Energy h as total energy conditions infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part02_Energy_Function_and_the_Conservation_of_Energy_h_as_total_energy_conditions_infographic.png"
          },
          "content": "안녕하세요, 여러분. 오늘은 라그랑주 역학에서 매우 중요한 개념인 에너지 함수와 에너지 보존에 대해 이야기해 보려고 합니다. 듣기만 하셔도 머릿속으로 수식의 관계가 그려질 수 있도록 차근차근 설명해 드릴 테니 잘 따라와 주세요.\n\n먼저 우리가 라그랑지안을 다룰 때 괄호 묶음으로 자주 보게 되는 특정한 양이 있습니다. 물리에서는 이 양을 종종 에너지 함수라고 부릅니다. 이 에너지 함수는 모든 일반화 좌표에 대해, 각 일반화 속도와, 라그랑지안을 그 일반화 속도로 편미분한 값을 먼저 곱해줍니다. 그리고 이 곱한 값들을 모든 좌표에 대해 다 더해준 다음에, 최종적으로 시스템의 라그랑지안을 빼주는 형태로 정의됩니다.\n\n이 에너지 함수를 시간으로 전미분하면 아주 흥미로운 결과가 나오는데요. 식 이 점 오 이의 유도 과정을 거치면, 에너지 함수의 시간에 대한 전미분은 라그랑지안을 시간으로 편미분한 값에 마이너스 부호를 붙인 것과 같아집니다. 즉, 에너지 함수의 시간 변화율은 라그랑지안의 명시적인 시간 변화율과 크기는 같고 방향은 반대라는 뜻입니다.\n\n여기서 아주 중요한 가정 하나를 해볼게요. 만약 라그랑지안이 시간의 명시적인 함수가 아니라면 어떨까요? 다시 말해, 시간이라는 변수가 라그랑지안에 직접 겉으로러나지 않고, 오직 일반화 좌표나 일반화 속도가 시간이 흐름에 따라 변화하는 과정을 통해서만 간접적으로 영향을 주는 경우를 말합니다. 이럴 때는 라그랑지안을 시간으로 편미분한 값이 영이 되기 때문에, 방금 말씀드린 식 이 점 오 사에 의해 에너지 함수가 시간의 흐름에 상관없이 항상 일정하게 유지됩니다. 즉, 에너지 함수가 보존되는 것이죠. 물리학에서는 이를 운동의 첫 번째 적분 중 하나라고 부르며, 때로는 야코비 적분이라는 이름으로 부르기도 합니다.\n\n그렇다면 이 에너지 함수가 우리가 잘 알고 있는 시스템의 총에너지와는 어떤 관계가 있을까요? 특정 상황이 만족되면 이 에너지 함수는 시스템의 총에너지와 완벽하게 같아집니다. 그 조건이 무엇인지 알아보기 위해, 우선 시스템의 총 운동에너지를 세 가지 성분으로 나누어 생각해보겠습니다. 식 일 점 치 삼에 따르면, 총 운동에너지는 일반화 속도가 전혀 포함되지 않고 일반화 좌표에만 의존하는 영차 함수 성분과, 일반화 속도에 대해 일차식 형태로 선형 비례하는 일차 함수 성분, 그리고 일반화 속도의 제곱이나 두 속도의 곱 형태로 표현되는 이차 함수 성분의 합으로 나타낼 수 있습니다.\n\n그런데 역학에서 다루는 아주 넓은 범위의 시스템과 일반화 좌표계에서는, 라그랑지안 역시 이 운동에너지와 매우 유사한 형태로 분해할 수 있습니다. 즉, 전체 라그랑지안을 속도가 포함되지 않는 영차 함수 성분, 속도에 대해 일차 동차 함수인 성분, 그리고 속도에 대해 이차 동차 함수인 성분의 합으로 쪼갤 수 있다는 것이죠. 여기서 동차 함수라는 말이 조금 어렵게 느껴지실 수 있는데, 일차 동차 함수는 속도를 두 배로 만들면 함수 전체 값도 두 배가 되는 함수이고, 이차 동차 함수는 속도를 두 배로 만들면 함수 전체 값은 네 배, 즉 제곱으로 증가하는 함수를 의미합니다. 역학의 근본 법칙이 모든 라그랑지안에게 반드시 이런 형태를 가지라고 강제하는 것은 아니지만, 다행히도 우리가 관심을 가지는 대부분의 물리 문제에서는 이 형태가 잘 만족됩니다.\n\n특히 물체에 작용하는 힘이 속도와는 무관하고 오직 위치에만 의존하는 퍼텐셜, 즉 위치에너지로부터 유도될 때 라그랑지안은 명백히 이 형태를 따르게 됩니다. 더 나아가 속도에 의존하는 퍼텐셜을 가지는 특이한 경우, 예를 들면 전자기장 속에서 움직이는 대전 입자의 문제 같은 경우라도, 식 일 점 육 삼을 통해 확인해보면 이 라그랑지안 분해 형태를 여전히 만족하는 것을 알 수 있습니다.\n\n이제 여기에 수학에서 유명한 오일러 정리를 적용해 보겠습니다. 오일러 정리의 핵심은, 어떤 함수가 변수들에 대해 엔차 동차 함수일 때, 각 변수에 그 변수로 함수를 편미분한 값을 곱해서 모두 더해주면, 원래 함수에 차수 엔을 곱한 것과 같아진다는 것입니다.\n\n이 오일러 정리를 방금 분해했던 라그랑지안 성분들에 하나씩 적용해서 에너지 함수의 정의식에 대입해 보겠습니다. 에너지 함수 정의식의 앞부분은 라그랑지안을 속도로 편미분한 것에 속도를 곱해 모두 더한 형태이므로 정확히 오일러 정리를 쓸 수 있는 모양입니다.\n먼저 속도에 대한 이차 동차 함수 성분은 차수가 이이므로 두 배의 이차 성분이 됩니다. 그리고 일차 동차 함수 성분은 차수가 일이므로 그대로 일차 성분이 되죠. 속도가 없는 영차 성분은 미분하면 사라집니다. 결국 정의식의 앞부분은 두 배의 이차 성분 더하기 일차 성분이 됩니다. 여기서 라그랑지안 전체, 즉 영차 성분과 일차 성분과 이차 성분을 모두 더한 값을 빼주는 것입니다.\n천천히 계산 결과를 머릿속으로 짚어보면, 일차 성분은 서로 빼져서 사라지고, 두 배의 이차 성분에서 한 배의 이차 성분을 빼니까 결국 한 배의 이차 성분만 남게 됩니다. 그리고 빼지는 라그랑지안 항에 있던 영차 성분에는 마이너스가 붙게 되죠. 결과적으로 에너지 함수는 라그랑지안의 속도에 대한 이차 동차 함수 성분에서 속도에 무관한 영차 함수 성분을 뺀 것과 같다는 심플한 결론을 얻게 됩니다.\n\n이 결론을 바탕으로 조건을 조금 더 제한해 보겠습니다. 만약 우리가 선택한 일반화 좌표의 변환 공식에 시간이 직접적으로 관여하지 않는다면, 식 일 점 치 삼에 의해 운동에너지에서 영차 성분과 일차 성분은 모두 사라지고 오직 속도에 대한 이차 함수 성분만 남게 됩니다. 여기에 더해서, 퍼텐셜 에너지가 일반화 속도에는 전혀 의존하지 않고 오직 위치에만 의존한다고 가정해 봅시다. 이 두 가지 조건이 만족되면, 라그랑지안의 속도 이차 성분은 곧 총 운동에너지가 되고, 속도 영차 성분은 마이너스 퍼텐셜 에너지가 됩니다.\n\n이것을 방금 유도한 에너지 함수 식에 대입해보면 어떻게 될까요? 이차 성분인 운동에너지에서, 영차 성분인 마이너스 퍼텐셜 에너지를 빼주는 것이 되므로, 마이너스와 마이너스가 만나 플러스가 됩니다. 즉, 에너지 함수는 운동에너지와 퍼텐셜 에너지를 더한 값이 됩니다. 이것이 바로 우리가 잘 알고 있는 시스템의 총에너지입니다. 이 조건 속에서 퍼텐셜 에너지마저 시간을 명시적으로 포함하지 않는다면, 전체 라그랑지안도 시간에 따라 직접 변하지 않으므로 식 이 점 오 사에 의해 이 에너지 함수, 즉 시스템의 총에너지는 항상 일정하게 보존됩니다.\n\n마지막으로 책의 아래쪽에 적힌 작은 주석 두 가지를 설명해 드리면서 강의를 마무리하겠습니다. 첫 번째는 에너지 함수와 해밀토니안의 관계에 대한 이야기입니다. 사실 오늘 배운 에너지 함수는 그 수치적인 값만 놓고 보면 나중에 제 팔장에서 배우게 될 해밀토니안이라는 양과 완벽하게 동일합니다. 그런데도 여기서 굳이 에너지 함수라는 다른 이름과 기호를 사용하는 이유가 있습니다. 바로 역학을 기술할 때 독립변수를 무엇으로 보느냐의 차이 때문인데요. 지금 다루는 에너지 함수는 엔 개의 일반화 좌표와 엔 개의 일반화 속도, 그리고 시간을 독립적인 변수로 취급합니다. 반면에 앞으로 배울 해밀토니안은 일반화 속도 대신 일반화 운동량을 사용해서, 엔 개의 일반화 좌표와 엔 개의 일반화 운동량이라는 총 이엔 개의 독립된 변수들의 함수로 다루기 때문입니다. 물리적인 값은 같지만 수학적으로 바라보는 관점이 다르다는 점을 기억해 두시면 좋습니다.\n\n두 번째 주석은 야코비 적분이라는 명칭의 역사적 배경입니다. 사실 천체물리학이나 고전역학에서 야코비 적분이라는 표현은 주로 태양과 지구, 달의 운동을 다루는 '제한 3체 문제'에서 나타나는 첫 번째 적분을 가리킬 때 아주 자주 쓰입니다. 하지만 구조적으로 보면 제한 3체 문제의 야코비 적분 역시 오늘 우리가 배운 일반적인 에너지 함수의 한 가지 특수한 사례에 불과합니다. 그래서 학계에서는 이처럼 더 일반적인 역학계에서 유도되는 에너지 함수 보존식에 대해서도 야코비 적분이라는 이름을 넓은 의미로 적용해 온 역사적 선례가 존재합니다.\n\n오늘 강의를 통해 에너지 함수가 어떻게 정의되고, 어떤 과정을 거쳐 시스템의 총에너지로 연결되며, 언제 보존되는지 그 흐름을 잘 정리해 두시기 바랍니다. 들어주셔서 감사합니다."
        },
        {
          "id": "GM_2-7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_Korean_Translation",
          "kind": "translation",
          "version": "part 03",
          "label": "GM_2.7 · 3부: 보존의 구분과 흩어지기",
          "fileName": "GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_infographic.png",
            "alt": "GM 2.7 part03 Energy Function and the Conservation of Energy conservation distinctions and dissipation infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_infographic.png"
          },
          "content": "## 2.7 에너지 함수와 에너지 보존 (계속)\n\n$h$가 보존되기 위한 조건은, $h$를 총에너지로 식별하기 위한 조건과 원칙적으로 완전히 별개라는 점에 유의해야 합니다. 우리는 어떤 특정 문제에서 $h$가 보존되지만 총에너지는 아닌 일반화 좌표계를 설정할 수 있습니다. 반대로, $h$가 $T+V$ 형태의 총에너지이기는 하지만 보존되지 않을 수도 있습니다.\n\n또한, 라그랑지안은 일반화 좌표를 어떻게 선택하느냐에 관계없이 $L = T - U$라는 규정에 의해 각 시스템마다 고유하게 결정되는 반면, 에너지 함수 $h$는 구체적인 일반화 좌표계의 선택에 따라 그 크기와 함수적 형태가 달라진다는 점도 주목해야 합니다. 동일한 시스템이라 하더라도 일반화 좌표를 어떻게 선택하느냐에 따라 서로 다른 물리적 내용을 가진 다양한 에너지 함수 $h$가 생성될 수 있습니다.\n\n고전역학에서 가장 흔하게 발생하는 경우는 운동에너지 항들이 모두 $m\\dot{q}_{i}^{2}/2$ 또는 $p_{i}^{2}/2m$의 형태를 띠고, 퍼텐셜 에너지가 오직 좌표에만 의존하는 경우입니다. 이러한 조건 하에서는 에너지 함수가 보존될 뿐만 아니라 총에너지와도 일치하게 됩니다.\n\n마지막으로, 시스템이 보존계가 아니지만 마찰력이 소산 함수 $\\mathcal{F}$로부터 유도될 수 있는 경우, $\\mathcal{F}$가 $h$의 감소율(감쇄 속도)과 연관되어 있음을 쉽게 보일 수 있습니다. 소산을 포함하는 운동 방정식(식 1.70)이 주어지면, 앞서 다룬 식 (2.52)는 다음과 같은 형태를 갖게 됩니다.\n\n$$\\frac{dh}{dt}+\\frac{\\partial L}{\\partial t}=\\sum_{j}\\frac{\\partial\\mathcal{F}}{\\partial\\dot{q}_{j}}\\dot{q}_{j}$$\n\n\n\n소산 함수 $\\mathcal{F}$의 정의(식 1.67)에 따르면, 이는 속도 $\\dot{q}_j$에 대한 2차 동차 함수(homogeneous function)입니다. 따라서 오일러 정리(Euler's theorem)를 다시 적용하면 다음을 얻습니다.\n\n$$\\frac{dh}{dt}=-2\\mathcal{F}-\\frac{\\partial L}{\\partial t}$$\n\n\n\n만약 라그랑지안 $L$이 시간을 명시적으로 포함하지 않고($\\partial L / \\partial t = 0$), 시스템의 $h$가 에너지 $E$와 같은 상황이라면, 식 (2.59)는 $2\\mathcal{F}$가 바로 에너지 소산율이라는 것을 나타냅니다.\n\n$$\\frac{dE}{dt}=-2\\mathcal{F}$$\n\n\n\n이는 앞서(섹션 1.5 참조) 이보다 덜 일반적인(제한적인) 상황에서 증명했던 서술과 일치합니다.\n\n---\n\n### 💡 개념 이해를 돕기 위한 보충 설명\n\n본문에서 설명하는 **시간에 따른 에너지 변화의 흐름**을 시각적인 다이어그램 구조로 요약하면 다음과 같이 이해할 수 있습니다.\n\n* **시간 독립적 시스템 (일반적인 보존계)**\n\n$$\\text{라그랑지안에 시간이 명시적으로 없음 } \\left(\\frac{\\partial L}{\\partial t} = 0\\right) \\longrightarrow \\text{에너지 함수 } h \\text{ 보존 } \\left(\\frac{dh}{dt} = 0\\right)$$\n\n\n* **마찰이 있는 비보존계 (소산 함수 $\\mathcal{F}$ 존재)**\n\n$$\\text{시스템 내 마찰/저항 발생} \\longrightarrow \\text{소산 함수 } \\mathcal{F} \\text{ 작동} \\longrightarrow \\text{전체 에너지 감소율: } \\frac{dE}{dt} = -2\\mathcal{F}$$\n\n\n\n즉, 소산 함수 값의 2배만큼의 비율로 시스템의 총에너지가 열이나 외부 요인으로 빠져나가며 감소하게 됨을 논리적으로 연결하여 보여주고 있습니다."
        },
        {
          "id": "GM_2-7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_KR_TTS",
          "kind": "tts",
          "version": "part 03",
          "label": "GM_2.7 · 3부: 보존의 구분과 흩어지기",
          "fileName": "GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_infographic.png",
            "alt": "GM 2.7 part03 Energy Function and the Conservation of Energy conservation distinctions and dissipation infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.7_Energy_Function_and_the_Conservation_of_Energy/GM_2.7_part03_Energy_Function_and_the_Conservation_of_Energy_conservation_distinctions_and_dissipation_infographic.png"
          },
          "content": "여러분, 안녕하세요. 오늘 강의에서는 에너지 함수와 에너지 보존 법칙의 관계에 대해 살펴보겠습니다.\n\n우선 꼭 기억하셔야 할 점은, 에너지 함수가 시간의 흐름에 따라 변하지 않고 보존되기 위한 조건과, 이 에너지 함수를 시스템의 총에너지로 부를 수 있는 조건은 원칙적으로 완전히 별개라는 사실입니다.\n\n우리가 어떤 물리 문제를 풀 때, 일반화 좌표계를 어떻게 설정하느냐에 따라서 아주 흥미로운 현상이 일어납니다. 에너지 함수가 일정하게 보존은 되지만 물체의 실제 총에너지를 나타내지는 않는 좌표계를 만들 수도 있고요 , 반대로 에너지 함수가 운동에너지와 퍼텐셜 에너지의 합인 총에너지를 정확하게 나타내지만, 정작 그 에너지가 시간의 흐름에 따라 보존되지는 않는 좌표계를 설정할 수도 있습니다.\n\n게다가 우리가 물리를 분석할 때 자주 쓰는 라그랑지안은, 일반화 좌표를 어떻게 선택하든 관계없이 항상 운동에너지에서 퍼텐셜 에너지를 뺀 값으로 물리계마다 단 하나로 고유하게 결정됩니다. 하지만 이 에너지 함수는 어떤 구체적인 일반화 좌표계를 선택하느냐에 따라서 그 크기와 함수의 형태가 완전히 달라지게 됩니다. 즉, 하나의 똑같은 물리 시스템을 분석하더라도, 우리가 좌표계를 어떻게 잡느냐에 따라 서로 다른 물리적 의미를 담은 다양한 에너지 함수들이 만들어질 수 있다는 뜻입니다.\n\n고전역학을 공부하면서 우리가 가장 흔하게 마주치는 상황은 이렇습니다. 운동에너지 항들이 모두 질량과 일반화 속도의 제곱을 곱한 뒤 이로 나눈 형태이거나, 혹은 운동량의 제곱을 질량의 두 배로 나눈 형태를 띠고, 퍼텐셜 에너지는 오직 물체의 위치 좌표에만 의존하는 경우입니다. 이런 보편적인 조건이 만족될 때 비로소, 에너지 함수는 시간의 흐름에 따라 일정하게 보존되면서 동시에 우리가 잘 아는 시스템의 총에너지와도 완벽하게 일치하게 됩니다.\n\n이번에는 시스템에 마찰이나 저항 같은 힘이 작용하는 경우를 생각해 보겠습니다. 물체의 역학적 에너지가 닳아 없어지는 비보존계라 하더라도, 이 마찰력이 속도에 의존하는 소산 함수로부터 유도될 수 있다면, 이 소산 함수가 에너지 함수의 감소율, 그러니까 에너지가 얼마나 빨리 줄어드는지와 깊은 연관이 있다는 걸 쉽게 증명할 수 있습니다.\n\n소산 항이 포함된 운동 방정식을 바탕으로 수식을 정리해 보면 아주 흥미로운 관계식이 나옵니다. 에너지 함수의 총 시간 미분량, 즉 에너지 함수가 시간당 변화하는 양에다가, 라그랑지안을 시간으로 편미분한 값을 더해준 결과는, 소산 함수를 일반화 속도로 편미분한 값에 다시 일반화 속도를 곱해서 모든 자유도에 대해 합산한 값과 완벽하게 같아집니다.\n\n그런데 소산 함수의 정의를 가만히 들여다보면, 이 함수는 일반화 속도에 대해서 정확히 2차 동차 함수라는 성질을 가집니다. 2차 동차 함수라는 건 변수를 두 배로 키우면 함수 전체 값은 네 배가 된다는 뜻인데요, 여기에 동차 함수에 관한 오일러 정리를 적용하면 방금 말씀드린 복잡한 수식을 아주 깔끔하게 바꿀 수 있습니다.\n\n그 결과는 바로 이렇습니다. 에너지 함수의 시간당 변화량은, 소산 함수에 두 배를 곱한 값에 음의 부호를 붙인 것에서, 라그랑지안의 시간 편미분 값을 추가로 빼준 것과 같습니다.\n\n이 식을 조금 더 쉽게 이해하기 위해서 두 가지 가정을 해보겠습니다. 만약 우리가 다루는 라그랑지안에 시간이 명시적으로 포함되어 있지 않아서 라그랑지안의 시간 편미분 값이 영이 되고, 동시에 이 에너지 함수가 시스템의 총에너지와 정확히 일치하는 상황이라면 방금 보신 식은 아주 직관적인 물리적 의미를 갖게 됩니다.\n\n바로, 총에너지의 시간 미분량, 즉 시스템의 전체 에너지가 시간당 변화하는 비율은 소산 함수 값에 두 배를 곱한 뒤 음의 부호를 붙인 것과 같아집니다. 이 음의 부호는 에너지가 감소한다는 뜻이니까, 결국 소산 함수를 두 배 한 값이 곧 시스템에서 에너지가 열이나 저항으로 빠져나가는 에너지 소산율 그 자체가 된다는 의미입니다.\n\n이는 우리가 예전에 조금 더 제한적인 상황에서 증명했던 물리적 사실이, 보다 일반적인 라그랑주 역학의 틀 안에서도 여전히 완벽하게 성립한다는 것을 아주 아름답게 보여주는 결과라고 할 수 있습니다."
        }
      ]
    },
    {
      "id": "GM_2.8",
      "title": "유도 문제",
      "category": "derivations",
      "startPage": "83",
      "endPage": "83",
      "pageCount": "1",
      "pageLabelStart": "64",
      "pageLabelEnd": "64",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-8_part01_Derivations_derivations_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.8 · 1부: 유도 문제",
          "fileName": "GM_2.8_part01_Derivations_derivations_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.8_Derivations/GM_2.8_part01_Derivations_derivations_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.8_part01_Derivations_derivations_infographic.png",
            "alt": "GM 2.8 part01 Derivations derivations infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.8_Derivations/GM_2.8_part01_Derivations_derivations_infographic.png"
          },
          "content": "## 유도 (DERIVATIONS)\n\n**1.** 2.2절에서 시작한 최속강하선(brachistochrone) 문제의 풀이를 완성하고, 구하고자 하는 곡선이 입자가 방출되는 초기 지점에서 첨점(cusp, 뾰족한 모양의 점)을 갖는 사이클로이드(cycloid)임을 보이시오. 또한, 만약 입자가 초기 운동 에너지 $\\frac{1}{2}mv_{0}^{2}$을 가진 채 투사되더라도 최속강하선은 여전히 두 점을 지나며, $v_{0}^{2}=2gz$로 주어지는 초기 지점으로부터의 높이 $z$에서 첨점을 갖는 사이클로이드가 됨을 보이시오. \n\n**2.** 라그랑지안(Lagrangian)의 퍼텐셜에 속도 의존성 항들이 포함되어 있다면, 전체 계의 회전 좌표에 대응하는 정중운동량(canonical momentum)은 더 이상 기계적 각운동량 $L_{\\theta}$가 아니라 다음과 같이 주어짐을 보이시오. \n\n$$p_{\\theta}=L_{\\theta}-\\sum_{i}n\\cdot r_{i}\\times\\nabla_{v_{i}}U,$$\n\n여기서 $\\nabla_{v}$는 속도 성분들에 대해 미분을 수행하는 그레이디언트(gradient, 구배) 연산자이며, $n$은 회전 방향을 나타내는 단위 벡터이다. 따라서 힘의 특성이 전자기적이라면, 정중운동량은 다음과 같다. \n\n$$p_{\\theta}=L_{\\theta}+\\sum_{i}n\\cdot r_{i}\\times\\frac{q_{i}}{c}A_{i}$$\n\n\n\n**3.** 공간 상에서 두 점 사이의 최단 거리는 직선임을 증명하시오. \n\n**4.** 구면의 측지선(geodesic)은 대원(great circle), 즉 구의 중심과 그 중심이 일치하는 원임을 보이시오."
        },
        {
          "id": "GM_2-8_part01_Derivations_derivations_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.8 · 1부: 유도 문제",
          "fileName": "GM_2.8_part01_Derivations_derivations_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.8_Derivations/GM_2.8_part01_Derivations_derivations_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.8_part01_Derivations_derivations_infographic.png",
            "alt": "GM 2.8 part01 Derivations derivations infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.8_Derivations/GM_2.8_part01_Derivations_derivations_infographic.png"
          },
          "content": "이번 시간에는 교재에 나오는 몇 가지 중요한 물리학적 유도 문제들을 살펴보겠습니다. 오직 귀로만 들으면서도 머릿속으로 수식과 물리적 의미를 선명하게 그릴 수 있도록 자세히 설명해 드릴 테니 잘 따라와 보시기 바랍니다.\n\n첫 번째는 최속강하선 문제입니다. 우리는 앞선 이 점 이 절에서 이 문제를 풀기 시작했는데요, 이번 과제는 그 풀이를 끝까지 완성하는 것입니다. 중력장 안에서 입자가 가장 빠른 시간 내에 아래로 내려오는 곡선을 찾아보면, 그 결과는 입자가 처음 놓여서 출발하는 초기 지점에서 뾰족한 모양의 점, 즉 첨점을 갖는 사이클로이드 곡선이 된다는 것을 증명해야 합니다.\n여기에 한 걸음 더 나아가 볼까요? 만약 입자가 처음부터 멈춰있지 않고, 이 분의 일 곱하기 질량 곱하기 초기 속도의 제곱만큼의 초기 운동 에너지를 가진 상태로 던져진다고 해봅시다. 이 경우에도 최속강하선은 여전히 두 점을 잇는 사이클로이드 곡선이 됩니다. 다만 한 가지 차이점이 있다면, 첨점이 생기는 위치가 달라집니다. 이때 첨점이 생기는 높이는, 초기 속도의 제곱을 이 곱하기 중력가속도로 나눈 값만큼, 초기 위치보다 위쪽으로 물리적인 높이가 치우친 곳에 형성된다는 것을 보여주면 됩니다.\n\n두 번째는 라그랑지안 역학에서 퍼텐셜이 속도에 의존할 때의 유도 문제입니다. 일반적으로 계의 퍼텐셜 에너지는 위치에만 의존하지만, 만약 속도에 의존하는 항들이 퍼텐셜에 포함되어 있다면 아주 흥미로운 변화가 생깁니다. 전체 계의 회전 각도 좌표에 대응하는 정중운동량은, 우리가 흔히 알고 있는 물리적인 기계적 각운동량과 더 이상 같지 않게 됩니다.\n이때의 정중운동량은 기계적 각운동량에서 특정 보정 항을 뺀 값으로 주어지는데요, 그 보정 항은 모든 입자에 대해 각각의 회전축 방향 단위 벡터와, 회전 중심에서 입자까지의 위치 벡터, 그리고 퍼텐셜 에너지를 속도 성분으로 미분한 속도 그레이디언트 벡터를 외적한 값을 모두 더해준 형태입니다. 여기서 속도 그레이디언트는 속도의 각 성분들에 대해 미분을 수행하는 연산자이고, 단위 벡터는 회전 방향을 가리킵니다.\n이 원리를 전자기학에 적용해 볼까요? 만약 입자가 받는 힘이 전자기적 특성을 가진다면, 속도 의존성 퍼텐셜로 인해 정중운동량은 한층 더 구체적인 형태를 띱니다. 이때의 정중운동량은 기계적 각운동량에 새로운 전자기적 항을 더한 값이 됩니다. 이 더해지는 항은 모든 입자에 대해, 회전 방향 단위 벡터와 위치 벡터, 그리고 입자의 전하량을 빛의 속도로 나눈 값에 벡터 퍼텐셜을 곱한 벡터를 서로 외적하여 모두 합산한 형태가 됩니다. 속도 의존성 퍼텐셜이 정중운동량을 어떻게 변화시키는지 그 구조를 잘 비교해 보시기 바랍니다.\n\n세 번째는 아주 직관적이고도 근본적인 기하학 문제입니다. 평평한 공간 상에서 임의의 두 점이 주어졌을 때, 이 두 점을 연결하는 수많은 경로 중 가장 거리가 짧은 최단 경로가 결국 우리가 잘 아는 곧은 직선이 된다는 것을 변분법을 통해 증명하는 과제입니다.\n\n마지막 네 번째는 평면이 아닌 휜 공간에서의 경로 문제입니다. 둥근 구의 표면 위에서 두 점을 잇는 최단 거리 곡선을 측지선이라고 부릅니다. 이 구면 위의 측지선을 수학적으로 유도해 보면, 그 결과가 항상 대원이 된다는 것을 보여야 합니다. 여기서 대원이란, 구 표면에 그려지는 여러 원들 중에서 그 원의 중심이 구 자체의 중심과 정확하게 일치하는 가장 큰 원을 의미합니다. 지구로 치면 적도나 경도선들이 바로 이에 해당하겠죠.\n\n이렇게 네 가지 유도 문제의 핵심 맥락을 짚어보았습니다. 수식의 형태 속에서 물리량이 가지는 의미를 가만히 음미해 보시기 바랍니다."
        }
      ]
    },
    {
      "id": "GM_2.9",
      "title": "연습문제",
      "category": "exercises",
      "startPage": "83",
      "endPage": "89",
      "pageCount": "7",
      "pageLabelStart": "64",
      "pageLabelEnd": "70",
      "note": "boundary page duplicated with next unit",
      "entries": [
        {
          "id": "GM_2-9_part01_Exercises_exercises_5_to_10_Korean_Translation",
          "kind": "translation",
          "version": "part 01",
          "label": "GM_2.9 · 1부: 연습문제 5-10",
          "fileName": "GM_2.9_part01_Exercises_exercises_5_to_10_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part01_Exercises_exercises_5_to_10_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part01_Exercises_exercises_5_to_10_infographic.png",
            "alt": "GM 2.9 part01 Exercises exercises 5 to 10 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part01_Exercises_exercises_5_to_10_infographic.png"
          },
          "content": "연습문제 (EXERCISES) \n\n### 5번 문제\n\n어떤 입자가 다음과 같은 퍼텐셜의 영향을 받고 있습니다:\n\n\n$$V(x) = -Fx$$\n\n여기서 $F$는 상수입니다. 이 입자는 시간 간격 $t_0$ 동안 $x = 0$에서 $x = a$까지 이동합니다. 입자의 운동이 다음과 같은 형태의 함수로 표현될 수 있다고 가정해 봅시다.\n\n\n$$x(t) = A + Bt + Ct^2$$\n\n이때 작용(action) 지시적분 값이 최소가 되도록 하는 $A, B, C$의 값을 구하세요.\n\n### 6번 문제\n\n질량 밀도가 균일한 구형 지구의 내부에서 운동하는 입자에 대해, 최속강하선(brachistochrone) 곡선을 기술하는 오일러-라그랑주 방정식을 구하세요. 야코비 적분 $h$와의 유사성을 이용해 이 미분방정식의 첫 번째 적분(first integral)을 구하세요. 이 적분을 활용하여, 구하고자 하는 곡선이 하이포사이클로이드(hypocycloid, 큰 원의 내부를 따라 구르는 작은 원 위의 한 점이 그리는 곡선)임을 보이세요.\n\n지구 표면 위의 두 지점 사이를 이 최속강하선 경로를 따라 이동할 때 걸리는 시간에 대한 표현식을 구하세요. (마찰이 없다고 가정할 때) 이 최속강하선 터널을 통해 표면 거리가 4,800 km 떨어진 뉴욕에서 로스앤젤레스까지 가는데 걸리는 시간은 얼마이며, 이 터널의 가장 깊은 지점은 지구 표면으로부터 얼마나 깊은 곳에 위치하겠습니까? \n\n### 7번 문제\n\n2.1 절의 예제 2에서는 회전면의 최소 면적 문제를 다루었습니다. 대칭인 경우인 $x_1 = x_2$, $y_2 = -y_1 > 0$ 조건을 검토하고, 매개변수 $a$에 대한 조건을 차원이 없는 양인 $k = x_2/a$ 및 $\\alpha = y_2/x_2$를 사용하여 초월방정식 형태로 표현하세요.\n\n$\\alpha$가 특정 값 $\\alpha_0$보다 클 때는 $k$의 값이 두 개 존재할 수 있고, $\\alpha = \\alpha_0$일 때는 단 하나의 $k$ 값만 가능하며, $\\alpha < \\alpha_0$일 때는 $k$(또는 $a$)의 실수 해를 찾을 수 없어 이 영역에서는 현수선(catenary) 해가 존재하지 않음을 보이세요. 수치 계산을 포함하여 $\\alpha_0$의 값을 구하세요.\n\n\n### 8번 문제\n\n본문(42쪽 참고)에서 설명한 분절된 직선 형태의 해(broken-segment solution)—즉, 회전체의 표면적이 각각 반지름이 $y_1$과 $y_2$인 양 끝 원의 면적의 합으로만 주어지는 해—는 골드슈미트 해(Goldschmidt solution)로 알려져 있습니다.\n\n연습문제 7에서 다룬 대칭적인 상황에 대해, 현수선 해에 의해 생성된 면적과 골드슈미트 해에 의해 주어진 면적의 비율에 대한 표현식을 구하세요. 결과는 오직 매개변수 $k$와 $\\alpha$만의 함수로 나타나야 합니다. $\\alpha$의 값이 충분히 클 때, 현수선 해 중 적어도 하나는 골드슈미트 해보다 작은 면적을 가짐을 보이세요. 반면에 $\\alpha = \\alpha_0$이면 골드슈미트 해가 현수선 해보다 더 작은 면적을 가짐을 보이세요.\n\n### 9번 문제\n\n길이가 무한한 체인 또는 로프가 지구 표면으로부터 각각 $y_1$과 $y_2$ 높이에 있는 풀리(도래)를 자유롭게 통과하고 있으며, 두 풀리 사이의 수평 거리는 $x_2 - x_1$입니다. 체인 또는 로프의 선질량 밀도가 균일할 때, 두 풀리 사이에서 처진 곡선의 형태를 찾는 문제가 회전면의 최소 면적 문제와 완전히 동일함을 보이세요. (풀리의 높이 $y_1, y_2$를 변화시킴에 따라 골드슈미트 해로 전이되는 현상은 매우 인상적인 강의용 시연 강의가 됩니다. 연습문제 8을 참고하세요.) \n\n### 10번 문제\n\n어떤 입자가 $t_0 = \\sqrt{2y_0/g}$의 시간 동안 주어진 거리 $y_0$만큼 낙하했다는 사실이 실험적으로 알려져 있다고 가정해 봅시다. $y_0$ 이외의 거리에 대한 낙하 시간은 알지 못합니다.\n\n나아가 이 문제의 라그랑지안은 알고 있지만, $t$에 대한 함수로서 $y$의 운동방정식을 정석대로 푸는 대신, 그 함수 형태가 다음과 같을 것이라고 추측했다고 합시다.\n\n\n$$y = at + bt^2$$\n\n$y_0$만큼 낙하하는 데 걸리는 시간이 항상 $t_0$로 올바르게 주어지도록 상수 $a$와 $b$를 계속 조정해 나간다면, 다음 정적분 공식이 오직 계수가 $a = 0$ 및 $b = g/2$인 실수 값을 가질 때만 극값(extremum)이 됨을 직접 보이세요.\n\n\n$$\\int_{0}^{t_0} L \\, dt$$"
        },
        {
          "id": "GM_2-9_part01_Exercises_exercises_5_to_10_KR_TTS",
          "kind": "tts",
          "version": "part 01",
          "label": "GM_2.9 · 1부: 연습문제 5-10",
          "fileName": "GM_2.9_part01_Exercises_exercises_5_to_10_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part01_Exercises_exercises_5_to_10_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part01_Exercises_exercises_5_to_10_infographic.png",
            "alt": "GM 2.9 part01 Exercises exercises 5 to 10 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part01_Exercises_exercises_5_to_10_infographic.png"
          },
          "content": "연습문제 (EXERCISES) \n5번 문제\n\n어떤 입자가 다음과 같은 퍼텐셜의 영향을 받고 있습니다:\n\nV(x) = -Fx\n\n여기서 F는 상수입니다. 이 입자는 시간 간격 t 아래첨자 0 동안 x = 0에서 x = a까지 이동합니다. 입자의 운동이 다음과 같은 형태의 함수로 표현될 수 있다고 가정해 봅시다.\n\nx(t) = A + Bt + Ct의 2제곱\n\n이때 작용(action) 지시적분 값이 최소가 되도록 하는 A, B, C의 값을 구하세요.\n6번 문제\n\n질량 밀도가 균일한 구형 지구의 내부에서 운동하는 입자에 대해, 최속강하선(brachistochrone) 곡선을 기술하는 오일러-라그랑주 방정식을 구하세요. 야코비 적분 h와의 유사성을 이용해 이 미분방정식의 첫 번째 적분(first integral)을 구하세요. 이 적분을 활용하여, 구하고자 하는 곡선이 하이포사이클로이드(hypocycloid, 큰 원의 내부를 따라 구르는 작은 원 위의 한 점이 그리는 곡선)임을 보이세요.\n\n지구 표면 위의 두 지점 사이를 이 최속강하선 경로를 따라 이동할 때 걸리는 시간에 대한 표현식을 구하세요. (마찰이 없다고 가정할 때) 이 최속강하선 터널을 통해 표면 거리가 4,800 km 떨어진 뉴욕에서 로스앤젤레스까지 가는데 걸리는 시간은 얼마이며, 이 터널의 가장 깊은 지점은 지구 표면으로부터 얼마나 깊은 곳에 위치하겠습니까? \n7번 문제\n\n2.1 절의 예제 2에서는 회전면의 최소 면적 문제를 다루었습니다. 대칭인 경우인 x 아래첨자 1 = x 아래첨자 2, y 아래첨자 2 = -y 아래첨자 1 > 0 조건을 검토하고, 매개변수 a에 대한 조건을 차원이 없는 양인 k = x 아래첨자 2/a 및 알파 = y 아래첨자 2/x 아래첨자 2를 사용하여 초월방정식 형태로 표현하세요.\n\n알파가 특정 값 알파 아래첨자 0보다 클 때는 k의 값이 두 개 존재할 수 있고, 알파 = 알파 아래첨자 0일 때는 단 하나의 k 값만 가능하며, 알파 < 알파 아래첨자 0일 때는 k(또는 a)의 실수 해를 찾을 수 없어 이 영역에서는 현수선(catenary) 해가 존재하지 않음을 보이세요. 수치 계산을 포함하여 알파 아래첨자 0의 값을 구하세요.\n\n8번 문제\n\n본문(42쪽 참고)에서 설명한 분절된 직선 형태의 해(broken-segment solution)—즉, 회전체의 표면적이 각각 반지름이 y 아래첨자 1과 y 아래첨자 2인 양 끝 원의 면적의 합으로만 주어지는 해—는 골드슈미트 해(Goldschmidt solution)로 알려져 있습니다.\n\n연습문제 7에서 다룬 대칭적인 상황에 대해, 현수선 해에 의해 생성된 면적과 골드슈미트 해에 의해 주어진 면적의 비율에 대한 표현식을 구하세요. 결과는 오직 매개변수 k와 알파만의 함수로 나타나야 합니다. 알파의 값이 충분히 클 때, 현수선 해 중 적어도 하나는 골드슈미트 해보다 작은 면적을 가짐을 보이세요. 반면에 알파 = 알파 아래첨자 0이면 골드슈미트 해가 현수선 해보다 더 작은 면적을 가짐을 보이세요.\n9번 문제\n\n길이가 무한한 체인 또는 로프가 지구 표면으로부터 각각 y 아래첨자 1과 y 아래첨자 2 높이에 있는 풀리(도래)를 자유롭게 통과하고 있으며, 두 풀리 사이의 수평 거리는 x 아래첨자 2 - x 아래첨자 1입니다. 체인 또는 로프의 선질량 밀도가 균일할 때, 두 풀리 사이에서 처진 곡선의 형태를 찾는 문제가 회전면의 최소 면적 문제와 완전히 동일함을 보이세요. (풀리의 높이 y 아래첨자 1, y 아래첨자 2를 변화시킴에 따라 골드슈미트 해로 전이되는 현상은 매우 인상적인 강의용 시연 강의가 됩니다. 연습문제 8을 참고하세요.) \n10번 문제\n\n어떤 입자가 t 아래첨자 0 = 2y 아래첨자 0/g의 시간 동안 주어진 거리 y 아래첨자 0만큼 낙하했다는 사실이 실험적으로 알려져 있다고 가정해 봅시다. y 아래첨자 0 이외의 거리에 대한 낙하 시간은 알지 못합니다.\n\n나아가 이 문제의 라그랑지안은 알고 있지만, t에 대한 함수로서 y의 운동방정식을 정석대로 푸는 대신, 그 함수 형태가 다음과 같을 것이라고 추측했다고 합시다.\n\ny = at + bt의 2제곱\n\ny 아래첨자 0만큼 낙하하는 데 걸리는 시간이 항상 t 아래첨자 0로 올바르게 주어지도록 상수 a와 b를 계속 조정해 나간다면, 다음 정적분 공식이 오직 계수가 a = 0 및 b = g/2인 실수 값을 가질 때만 극값(extremum)이 됨을 직접 보이세요.\n\n적분 아래첨자 0의 t 아래첨자 0제곱 L   dt\n\n[본문 삽입 시각 자료 설명]"
        },
        {
          "id": "GM_2-9_part02_Exercises_exercises_11_to_16_Korean_Translation",
          "kind": "translation",
          "version": "part 02",
          "label": "GM_2.9 · 2부: 연습문제 11-16",
          "fileName": "GM_2.9_part02_Exercises_exercises_11_to_16_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part02_Exercises_exercises_11_to_16_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part02_Exercises_exercises_11_to_16_infographic.png",
            "alt": "GM 2.9 part02 Exercises exercises 11 to 16 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part02_Exercises_exercises_11_to_16_infographic.png"
          },
          "content": "## 번역 및 시각 자료 설명\n\n**11.** 두 당구공이 충돌할 때, 공들 사이에 작용하는 순간적인 힘은 매우 크지만 $\\Delta t$라는 극히 짧은 시간 동안만 작용하며, 그 결과 $\\int_{\\Delta t}F\\ dt$라는 양은 유한한 값으로 남게 됩니다. 이러한 힘을 충격력(impulsive forces)이라고 부르며, $\\Delta t$에 대한 이 적분 값을 힘의 충격량(impulse)이라고 합니다. 충격력이 존재할 때, 라그랑주 방정식은 다음과 같은 형태로 변형될 수 있음을 보이세요.\n\n$$\\left( \\frac{\\partial L}{\\partial \\dot{q}_j} \\right)_f - \\left( \\frac{\\partial L}{\\partial \\dot{q}_j} \\right)_i = S_j$$\n\n여기서 하첨자 $i$와 $f$는 충격 전(initial)과 충격 후(final)의 계의 상태를 나타내고, $S_j$는 generalized coordinate $q_j$에 대응하는 일반화 충격력의 충격량이며, $L$은 충격력을 제외한 모든 비충격력을 포함하는 라그랑지안입니다.\n\n**12.** '일반화 역학(generalized mechanics)'이라는 용어는 라그랑지안이 $q_i$의 1계 시간 미분보다 더 높은 계수의 시간 미분을 포함하는 다양한 고전 역학의 형태를 가리키게 되었습니다. $\\ddot{x}=f(x,\\dot{x},\\ddot{x},t)$ 형태를 갖는 문제들은 '저키 역학(jerky mechanics, 급가속 역학)'으로 불리기도 했습니다. 이러한 운동 방정식들은 카오스 이론(제11장 참조)에서 흥미로운 응용 분야를 가집니다. 변분법의 방법들을 적용하여, 만약 $L(q_i, \\dot{q}_i, \\ddot{q}_i, t)$ 형태의 라그랑지안이 존재하고 양 끝점에서 $q_i$와 $\\dot{q}_i$의 변분이 모두 0이라는 조건 하에 해밀턴의 원리가 성립한다면, 이에 대응하는 오일러-라그랑주 방정식은 다음과 같음을 보이세요.\n\n$$\\frac{d^2}{dt^2}\\left(\\frac{\\partial L}{\\partial \\ddot{q}_i}\\right) - \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right) + \\frac{\\partial L}{\\partial q_i} = 0 \\quad (i=1,2,...,n)$$\n\n이 결과를 다음 라그랑지안에 적용해 보세요.\n\n$$L = -\\frac{m}{2}q\\ddot{q} - \\frac{k}{2}q^2$$\n\n이로부터 유도되는 운동 방정식이 무엇인지 알아보시겠습니까?\n\n**13.** 무거운 입자가 수직 바퀴(hoop)의 꼭대기에 놓여 있습니다. 라그랑주의 미정 계수법과 라그랑주 방정식을 사용하여 바퀴가 입자에 미치는 법선 항력(반작용)을 계산하세요. 그리고 입자가 떨어지는 높이를 구하세요.\n\n**14.** 질량이 $m$이고 반지름이 $r$인 균일한 바퀴(hoop)가, 아래 그림에 제시된 것과 같이 반지름이 $R$로 고정된 실린더 위에서 미끄러짐 없이 구릅니다.\n\n> **[교재 수록 그림 설명]**\n> 해당 문제의 이해를 돕기 위해 교재에 수록된 그림은 수평 바닥 위에 놓인 반지름 $R$의 커다란 고정 실린더와, 그 꼭대기에 접촉해 있는 반지름 $r$의 작은 바퀴를 보여줍니다.\n> * 아래쪽의 큰 원(반지름 $R$)은 바닥에 고정되어 움직이지 않는 실린더의 단면입니다. 중심에서 원주를 향해 화살표로 반지름 $R$이 표시되어 있습니다.\n> * 위쪽의 작은 원(반지름 $r$)은 큰 원의 가장 꼭대기(정점)에 맞닿은 채 올려져 있는 링 형태의 바퀴입니다. 이 작은 원의 중심에서도 원주를 향하는 화살표로 반지름 $r$이 표시되어 있습니다.\n> * 이 계에 작용하는 유일한 외력은 연직 아래 방향으로 작용하는 중력입니다.\n> \n> \n\n이 작은 실린더(바퀴)가 큰 실린더의 꼭대기에서 정지 상태로부터 구르기 시작할 때, 라그랑주 미정 계수법을 사용하여 바퀴가 실린더에서 떨어지는 지점을 구하세요.\n\n**15.** 휘트스톤 임피던스 브리지의 한 형태는 통상적인 4개의 저항 외에도, 한쪽 팔(arm)에는 인덕턴스가 있고 그 맞은편 팔에는 커패시턴스가 추가되어 있습니다. 각 소자에 대전된 전하량을 좌표로 삼아, 평형이 깨진(unbalanced) 브리지 회로에 대한 $L$(라그랑지안)과 $\\mathcal{F}$(레이 Rayleigh 소실 함수)를 설정하세요. 키르히호프의 분기점 법칙을 전류에 대한 구속 조건으로 사용하여 라그랑주 운동 방정식을 구하고, 미정 계수 $\\lambda$들을 소거하면 이 방정식들이 통상적인 회로 방정식으로 축소됨을 보이세요.\n\n**16.** 어떤 상황들, 특히 1차원 계에서는 소실 함수를 도입하지 않고도 마찰 효과를 라그랑지안에 포함시키는 것이 가능합니다. 한 예로, 다음 라그랑지안에 대한 운동 방정식을 구하세요.\n\n$$L = e^{\\gamma t} \\left( \\frac{m\\dot{q}^2}{2} - \\frac{kq^2}{2} \\right)$$\n\n이 계를 어떻게 설명하시겠습니까? 보존되는 운동의 상수가 존재합니까?\n만약 다음과 같은 형태의 점 변환(point transformation)이 이루어진다고 가정해 봅시다.\n\n$$s = e^{\\gamma t / 2} q$$\n\n$s$로 표현된 유효 라그랑지안(effective Lagrangian)은 무엇입니까? $s$에 대한 운동 방정식을 구하세요. 이러한 결과들은 계의 보존량에 대해 무엇을 말해줍니까?"
        },
        {
          "id": "GM_2-9_part02_Exercises_exercises_11_to_16_KR_TTS",
          "kind": "tts",
          "version": "part 02",
          "label": "GM_2.9 · 2부: 연습문제 11-16",
          "fileName": "GM_2.9_part02_Exercises_exercises_11_to_16_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part02_Exercises_exercises_11_to_16_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part02_Exercises_exercises_11_to_16_infographic.png",
            "alt": "GM 2.9 part02 Exercises exercises 11 to 16 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part02_Exercises_exercises_11_to_16_infographic.png"
          },
          "content": "11. 두 당구공이 충돌할 때, 공들 사이에 작용하는 순간적인 힘은 매우 크지만 델타 t라는 극히 짧은 시간 동안만 작용하며, 그 결과 적분 아래첨자 델타 tF dt라는 양은 유한한 값으로 남게 됩니다. 이러한 힘을 충격력(impulsive forces)이라고 부르며, 델타 t에 대한 이 적분 값을 힘의 충격량(impulse)이라고 합니다. 충격력이 존재할 때, 라그랑주 방정식은 다음과 같은 형태로 변형될 수 있음을 보이세요.\n\n ( 편미분 L 나누기 편미분 q의 시간 미분 아래첨자 j  ) 아래첨자 f -  ( 편미분 L 나누기 편미분 q의 시간 미분 아래첨자 j  ) 아래첨자 i = S 아래첨자 j\n\n여기서 하첨자 i와 f는 충격 전(initial)과 충격 후(final)의 계의 상태를 나타내고, S 아래첨자 j는 generalized coordinate q 아래첨자 j에 대응하는 일반화 충격력의 충격량이며, L은 충격력을 제외한 모든 비충격력을 포함하는 라그랑지안입니다.\n\n12. '일반화 역학(generalized mechanics)'이라는 용어는 라그랑지안이 q 아래첨자 i의 1계 시간 미분보다 더 높은 계수의 시간 미분을 포함하는 다양한 고전 역학의 형태를 가리키게 되었습니다. x의 두 번째 시간 미분=f(x,x의 시간 미분,x의 두 번째 시간 미분,t) 형태를 갖는 문제들은 '저키 역학(jerky mechanics, 급가속 역학)'으로 불리기도 했습니다. 이러한 운동 방정식들은 카오스 이론(제11장 참조)에서 흥미로운 응용 분야를 가집니다. 변분법의 방법들을 적용하여, 만약 L(q 아래첨자 i, q의 시간 미분 아래첨자 i, q의 두 번째 시간 미분 아래첨자 i, t) 형태의 라그랑지안이 존재하고 양 끝점에서 q 아래첨자 i와 q의 시간 미분 아래첨자 i의 변분이 모두 0이라는 조건 하에 해밀턴의 원리가 성립한다면, 이에 대응하는 오일러-라그랑주 방정식은 다음과 같음을 보이세요.\n\nd의 2제곱 나누기 dt의 2제곱 (편미분 L 나누기 편미분 q의 두 번째 시간 미분 아래첨자 i ) - d 나누기 dt (편미분 L 나누기 편미분 q의 시간 미분 아래첨자 i ) + 편미분 L 나누기 편미분 q 아래첨자 i = 0   (i=1,2,...,n)\n\n이 결과를 다음 라그랑지안에 적용해 보세요.\n\nL = -m 나누기 2qq의 두 번째 시간 미분 - k 나누기 2q의 2제곱\n\n이로부터 유도되는 운동 방정식이 무엇인지 알아보시겠습니까?\n\n13. 무거운 입자가 수직 바퀴(hoop)의 꼭대기에 놓여 있습니다. 라그랑주의 미정 계수법과 라그랑주 방정식을 사용하여 바퀴가 입자에 미치는 법선 항력(반작용)을 계산하세요. 그리고 입자가 떨어지는 높이를 구하세요.\n\n14. 질량이 m이고 반지름이 r인 균일한 바퀴(hoop)가, 아래 그림에 제시된 것과 같이 반지름이 R로 고정된 실린더 위에서 미끄러짐 없이 구릅니다.\n\n[교재 수록 그림 설명]\n해당 문제의 이해를 돕기 위해 교재에 수록된 그림은 수평 바닥 위에 놓인 반지름 R의 커다란 고정 실린더와, 그 꼭대기에 접촉해 있는 반지름 r의 작은 바퀴를 보여줍니다.\n아래쪽의 큰 원(반지름 R)은 바닥에 고정되어 움직이지 않는 실린더의 단면입니다. 중심에서 원주를 향해 화살표로 반지름 R이 표시되어 있습니다.\n위쪽의 작은 원(반지름 r)은 큰 원의 가장 꼭대기(정점)에 맞닿은 채 올려져 있는 링 형태의 바퀴입니다. 이 작은 원의 중심에서도 원주를 향하는 화살표로 반지름 r이 표시되어 있습니다.\n이 계에 작용하는 유일한 외력은 연직 아래 방향으로 작용하는 중력입니다.\n이 작은 실린더(바퀴)가 큰 실린더의 꼭대기에서 정지 상태로부터 구르기 시작할 때, 라그랑주 미정 계수법을 사용하여 바퀴가 실린더에서 떨어지는 지점을 구하세요.\n\n15. 휘트스톤 임피던스 브리지의 한 형태는 통상적인 4개의 저항 외에도, 한쪽 팔(arm)에는 인덕턴스가 있고 그 맞은편 팔에는 커패시턴스가 추가되어 있습니다. 각 소자에 대전된 전하량을 좌표로 삼아, 평형이 깨진(unbalanced) 브리지 회로에 대한 L(라그랑지안)과 소산 함수(레이 Rayleigh 소실 함수)를 설정하세요. 키르히호프의 분기점 법칙을 전류에 대한 구속 조건으로 사용하여 라그랑주 운동 방정식을 구하고, 미정 계수 람다들을 소거하면 이 방정식들이 통상적인 회로 방정식으로 축소됨을 보이세요.\n\n16. 어떤 상황들, 특히 1차원 계에서는 소실 함수를 도입하지 않고도 마찰 효과를 라그랑지안에 포함시키는 것이 가능합니다. 한 예로, 다음 라그랑지안에 대한 운동 방정식을 구하세요.\n\nL = e의 감마제곱 t  ( mq의 시간 미분의 2제곱 나누기 2 - kq의 2제곱 나누기 2  )\n\n이 계를 어떻게 설명하시겠습니까? 보존되는 운동의 상수가 존재합니까?\n만약 다음과 같은 형태의 점 변환(point transformation)이 이루어진다고 가정해 봅시다.\n\ns = e의 감마제곱 t / 2 q\n\ns로 표현된 유효 라그랑지안(effective Lagrangian)은 무엇입니까? s에 대한 운동 방정식을 구하세요. 이러한 결과들은 계의 보존량에 대해 무엇을 말해줍니까?"
        },
        {
          "id": "GM_2-9_part03_Exercises_exercises_17_to_21_Korean_Translation",
          "kind": "translation",
          "version": "part 03",
          "label": "GM_2.9 · 3부: 연습문제 17-21",
          "fileName": "GM_2.9_part03_Exercises_exercises_17_to_21_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part03_Exercises_exercises_17_to_21_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part03_Exercises_exercises_17_to_21_infographic.png",
            "alt": "GM 2.9 part03 Exercises exercises 17 to 21 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part03_Exercises_exercises_17_to_21_infographic.png"
          },
          "content": "**17.** 때때로 일반화 좌표들이 운동 에너지와 퍼텐셜 에너지에 각각 분리되어 나타나, $T$와 $V$를 다음과 같은 형태로 쓸 수 있는 경우가 있습니다:\n\n\n$$T = \\sum_{i} f_{i}(q_{i})\\dot{q}_{i}^{2} \\quad \\text{및} \\quad V = \\sum_{i} V_{i}(q_{i}) [cite: 83, 84]$$\n\n이 경우 라그랑주 방정식이 각 좌표별로 분리됨을 보이고, 이 문제는 항상 구적법(quadratures, 적분)으로 귀착될 수 있음을 증명하세요.\n\n**18.** 하나의 질점이 질량이 없고 반지름이 $a$인 연직 평면 상의 고리(hoop) 위를 움직이도록 구속되어 있습니다. 이 고리는 자신의 연직 대칭축을 중심으로 일정한 각속도 $\\omega$로 회전합니다. 외력은 중력만 작용한다고 가정하고 라그랑주 운동 방정식을 구하세요. 이 시스템의 보존량은 무엇인가요?\n또한, $\\omega$가 어떤 임계값 $\\omega_{0}$보다 크면 입자가 고리의 최하점이 아닌 다른 지점에서 정지해 있을 수 있는 해가 존재하지만, $\\omega < \\omega_{0}$이면 입자가 정지해 있을 수 있는 유일한 지점은 고리의 최하점뿐임을 보이세요[cite: 88]. [cite_start]$\\omega_{0}$의 값은 얼마인가요?\n\n**19.** 하나의 입자가 다양한 질량 분포에 의해 생성되는 보존력장 안에서 마찰 없이 움직이고 있습니다. 각각의 경우에, 질량 분포의 부피 요소(volume element)에 의해 발생하는 힘은 그 부피 요소의 질량에 비례하고 부피 요소로부터의 스칼라 거리에만 의존하는 퍼텐셜로부터 유도됩니다. 고정된 균일한 질량 분포를 가진 다음의 각 경우에 대해, 입자 운동에서 보존되는 양들을 서술하세요:\n\n* (a) 질량이 평면 $z=0$에 균일하게 분포되어 있는 경우.\n\n\n* (b) 질량이 반평면(half-plane) $z=0, y>0$에 균일하게 분포되어 있는 경우.\n\n\n* (c) 질량이 $z$축을 중심축으로 하는 무한한 길이의 원기둥에 균일하게 분포되어 있는 경우.\n\n\n* (d) 질량이 $z$축을 중심축으로 하는 유한한 길이의 원기둥에 균일하게 분포되어 있는 경우.\n\n\n* (e) 질량이 $z$축을 중심축으로 하고 타원형 단면을 가진 무한한 길이의 직원기둥(right cylinder)에 균일하게 분포되어 있는 경우.\n\n\n* (f) 축이 $z$축을 따라 정렬되어 있는 균일한 덤벨(dumbbell) 형태인 경우.\n\n\n* (g) 질량이 $z$축을 중심축으로 하는 무한한 나선형 솔레노이드(helical solenoid) 기하학 구조로 감긴 균일한 도선 형태인 경우.\n\n\n\n**20.** 질량이 $M$이고 경사각이 $\\alpha$인 쐐기(wedge)가 매끄러운 수평면 위를 마찰 없이 움직일 수 있으며, 그 위에 질량이 $m$인 입자가 쐐기 사면을 따라 마찰 없이 미끄러집니다.\n\n> **[시스템 구조 시각 자료 설명]**\n> 해당 문제의 이해를 돕기 위해 교재 5페이지 상단에 배치된 그림은 다음과 같은 물리적 상황을 나타내고 있습니다.\n> 빗금으로 표시된 단단하고 매끄러운 수평 바닥 위에, 단면이 직각삼각형 형태인 거대한 쐐기(질량 $M$)가 놓여 있습니다. 이 쐐기의 사면은 수평면과 $\\alpha$라는 경사각을 이루고 있습니다. 그리고 이 경사진 사면 위에 하나의 작은 점 입자(질량 $m$)가 올려져 있어, 쐐기가 수평으로 움직임에 따라 입자도 사면을 타고 미끄러져 내려올 수 있는 구조입니다.\n> \n> \n\n라그랑주 승수법을 사용하여 입자가 쐐기 위에 구속되어 있는 조건을 취급하고, 입자와 쐐기에 대한 운동 방정식을 구하세요. 또한 구속력(forces of constraint)에 대한 표현식을 얻으세요. 시간 $t$ 동안 구속력이 입자와 쐐기에 각각 행한 일을 계산하세요. 이 시스템의 보존량은 무엇인가요? 여기서 구한 결과들을 쐐기가 고정되어 있는 경우의 상황과 대조해 보세요.\n[힌트: 입자에 대해 연직 방향을 $y$축으로 잡는 직교 좌표계를 사용하거나, 쐐기 사면에 수직한 방향을 $y$축으로 잡는 좌표계를 사용할 수 있습니다. 두 좌표계 모두에서 풀어보는 것이 가장 교육적입니다.] \n\n**21.** 단단한 빔(beam) 위에 설치된 레일을 따라 캐리지(carriage)가 움직입니다. 이 캐리지는 고유 길이(equilibrium length)가 $r_{0}$이고 용수철 상수가 $k$인 용수철의 한쪽 끝에 연결되어 있으며, 용수철의 반대쪽 끝은 빔의 한 지점에 고정되어 있습니다. 캐리지 위에는 첫 번째 레일과 수직을 이루는 또 다른 레일 세트가 설치되어 있으며, 이 레일을 따라 질량 $m$인 입자가 움직입니다. 이 입자는 빔에 고정되어 있고 용수철 상수가 $K$이며 고유 길이가 0인 용수철에 의해 붙잡혀 있습니다.\n\n> **[시스템 구조 시각 자료 설명]**\n> 교재 5페이지 하단에 수록된 입체 다이어그램은 이 복잡한 회전 장치의 메커니즘을 시각적으로 명확하게 보여줍니다.\n> 축을 중심으로 일정하게 회전(각속도 $\\omega$)하는 긴 회전축 빔이 바닥에 놓여 있고, 그 중심 고정 핀에 굵은 용수철(용수철 상수 $K$)이 연결되어 길게 뻗어 있습니다. 이 빔 위를 앞뒤로 미끄러져 움직이는 직사각형 모양의 캐리지(받침대)가 있으며, 이 캐리지는 또 다른 용수철(용수철 상수 $k$)을 통해 빔의 한쪽 끝과 연결되어 있습니다.\n> 특히 이 캐리지 위에는 원래 빔의 방향과 정수직(90도)을 이루는 교차 빔 레일이 십자 형태로 얹혀 있습니다. 이 교차 레일 위에 작은 검은색 알갱이 형태의 입자 $m$이 놓여 있으며, 이 입자는 아까 중심 고정 핀에서부터 길게 뻗어 나온 굵은 용수철($K$)의 끝에 연결되어 있습니다. 즉, 전체 장치가 빙글빙글 회전하는 동시에, 캐리지는 주 축 방향으로 진동하고, 입자는 그에 수직한 방향으로 상호 작용하며 진동하는 입체적인 구조입니다.\n> \n> \n\n빔, 레일, 용수철, 캐리지의 질량은 모두 0이라고 가정합니다. 전체 시스템은 첫 번째 용수철이 고정된 부착점을 중심으로 일정한 각속도 $\\omega$로 한 평면 상에서 강제로 회전 운동을 합니다. 두 번째 용수철의 길이는 항상 $r_{0}$에 비해 매우 작다고 간주합니다.\n\n* (a) 이 시스템의 에너지는 얼마인가요? 에너지는 보존되나요?\n\n\n* (b) 실험실(정지) 좌표계에서의 일반화 좌표를 사용할 때, 이 시스템의 야코비 일당량(Jacobi integral)은 무엇인가요? 그것은 보존되나요?\n\n\n* (c) 각속도 $\\omega$로 회전하는 회전 좌표계에 대한 일반화 좌표로 나타내었을 때, 라그랑지안은 무엇인가요? 이때의 야코비 일당량은 무엇인가요? 그것은 보존되나요? 앞서 구한 두 야코비 일당량 사이의 관계를 논하세요."
        },
        {
          "id": "GM_2-9_part03_Exercises_exercises_17_to_21_KR_TTS",
          "kind": "tts",
          "version": "part 03",
          "label": "GM_2.9 · 3부: 연습문제 17-21",
          "fileName": "GM_2.9_part03_Exercises_exercises_17_to_21_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part03_Exercises_exercises_17_to_21_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part03_Exercises_exercises_17_to_21_infographic.png",
            "alt": "GM 2.9 part03 Exercises exercises 17 to 21 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part03_Exercises_exercises_17_to_21_infographic.png"
          },
          "content": "안녕하세요, 여러분. 오늘은 고전역학의 변분 원리와 라그랑주 방정식에 관한 몇 가지 연습문제를 함께 살펴보겠습니다. 귀로만 들으셔도 물리학적 개념과 수식의 의미를 충분히 이해하실 수 있도록 차근차근 설명해 드릴 테니 잘 따라와 주세요.\n\n먼저 17번 문제입니다.\n역학 문제를 풀다 보면 때때로 일반화 좌표들이 운동 에너지와 퍼텐셜 에너지에 각각 완전히 분리되어 나타나는 흥미로운 경우가 있습니다. 즉, 전체 운동 에너지는 각 일반화 좌표에 대한 함수와 해당 좌표의 시간 미분, 즉 속도 성분의 제곱을 곱한 값들을 모두 더한 형태가 됩니다. 그리고 전체 퍼텐셜 에너지는 각 일반화 좌표들만의 함수를 단순히 모두 더한 형태가 되죠. 이렇게 운동 에너지와 퍼텐셜 에너지가 각 좌표별로 독립적인 항들의 합으로만 구성될 때, 시스템을 기술하는 라그랑주 방정식 역시 각 좌표별로 완전히 분리되어 독립적인 방정식들로 나누어짐을 보여야 합니다. 그리고 결과적으로 이 문제가 언제나 단순한 적분 계산, 즉 구적법만으로 해결될 수 있음을 증명하는 것이 첫 번째 과제입니다.\n\n이어서 18번 문제를 보겠습니다.\n이번에는 고리 위를 움직이는 입자의 운동입니다. 질량이 없고 반지름이 임의의 상수인 하나의 고리가 연직 평면 상에 세워져 있습니다. 이 고리는 자신의 연직 대칭축을 중심으로 일정한 각속도로 회전하고 있고, 고리 위에는 하나의 질점이 구속되어 마찰 없이 움직이고 있습니다. 시스템에 작용하는 외력은 오직 중력뿐이라고 가정할 때, 이 시스템의 라그랑주 운동 방정식을 유도해 보세요. 그리고 이 회전하는 시스템에서 에너지를 비롯해 어떤 양이 일정하게 유지되는지, 즉 보존량이 무엇인지 찾아내야 합니다.\n여기서 한 걸음 더 나아가 보겠습니다. 고리가 회전하는 각속도가 어떤 특정한 임계값보다 클 경우를 생각해 봅시다. 이때는 입자가 고리의 맨 아래인 최하점이 아니라, 옆으로 치우친 어떤 다른 지점에서 가만히 정지해 있을 수 있는 물리적인 해가 존재함을 보일 수 있습니다. 반대로 각속도가 그 임계값보다 작다면 입자가 정지해 있을 수 있는 안정적인 지점은 오직 고리의 최하점뿐임을 증명해야 합니다. 과연 이 현상을 가르는 기준이 되는 임계 각속도의 값은 물리적으로 어떻게 정의될지 유도해 보시기 바랍니다.\n\n다음으로 19번 문제입니다.\n마찰이 없는 보존력장 안에서 움직이는 입자가 있습니다. 이 힘을 만들어내는 근원은 공간에 고정된 다양한 형태의 균일한 질량 분포들입니다. 공간의 아주 미세한 부피 요소가 입자에 미치는 힘은 그 부피 요소의 질량에 비례하고, 그곳으로부터 입자까지의 스칼라 거리에만 의존하는 퍼텐셜로부터 유도된다고 합니다. 질량이 균일하게 분포된 고정된 소스들이 다음과 같이 주어질 때, 입자의 운동에서 어떤 물리량들이 보존되는지 각각 서술해 보세요.\n첫 번째는 질량이 3차원 공간에서 제트 기역이 0인 무한한 평면에 균일하게 퍼져 있는 경우입니다.\n두 번째는 질량이 제트 기역이 0이면서 와이 기역이 0보다 큰 영역, 즉 공간의 딱 절반인 반평면에만 균일하게 분포된 경우입니다.\n세 번째는 질량이 제트 축을 중심축으로 삼아 사방으로 뻗어 나가는 무한한 길이의 원기둥에 균일하게 채워진 경우입니다.\n네 번째는 역시 제트 축을 중심축으로 하지만, 이번에는 위아래 길이가 유한하게 제한된 원기둥인 경우입니다.\n다섯 번째는 제트 축을 중심축으로 하면서 단면이 원이 아니라 타원 모양을 가진 무한한 길이의 기둥에 균일하게 분포된 경우입니다.\n여섯 번째는 두 개의 거대한 질량이 제트 축 방향을 따라 나란히 연결된, 균일한 아령 혹은 덤벨 형태의 분포입니다.\n마지막 일곱 번째는 질량이 제트 축을 중심축으로 삼아 무한히 길게 감겨 있는 나선형 도선 형태, 즉 솔레노이드 구조를 띠고 있는 경우입니다. 각 질량 분포가 가진 대칭성을 생각하면 어떤 운동량이나 에너지가 보존될지 예측할 수 있을 것입니다.\n\n이제 20번 문제를 살펴보겠습니다.\n여기 거대한 쐐기 모양의 물체가 있고 그 위에 작은 입자가 있습니다. 쐐기의 질량은 대문자 엠이고, 수평면과 이루는 경사각은 알파입니다. 이 쐐기는 매끄러운 수평 바닥 위에 놓여 있어서 마찰 없이 좌우로 움직일 수 있습니다. 그리고 그 경사진 사면 위에는 질량이 소문자 엠인 작은 점 입자가 하나 올려져 있어서, 쐐기가 움직임에 따라 입자도 사면을 타고 마찰 없이 미끄러져 내릴 수 있는 구조입니다.\n우리는 라그랑주 승수법을 사용하여 입자가 쐐기 사면이라는 제약 조건 위에 묶여 있는 구속 조건을 수식으로 취급할 것입니다. 이를 통해 입자와 쐐기 각각에 대한 운동 방정식을 구하고, 입자가 사면을 누르거나 사면이 입자를 떠받치는 구속력에 대한 구체적인 표현식을 찾아내야 합니다. 그런 다음, 일정 시간 동안 이 구속력이 입자에 행한 일과 쐐기에 행한 일을 각각 계산해 보세요. 또한 이 전체 시스템에서 변하지 않고 일정하게 유지되는 보존량은 무엇인지 찾아보고, 마지막으로 이 결과들을 쐐기가 바닥에 단단히 고정되어 움직일 수 없는 일반적인 상황과 비교하여 어떤 차이가 있는지 대조해 보시기 바랍니다. 문제를 풀 때 입자의 위치를 기술하기 위해 수직 방향을 와이 축으로 잡는 일반적인 직교 좌표계를 쓰거나, 혹은 쐐기 사면에 완전히 수직인 방향을 새로운 와이 축으로 잡는 좌표계를 쓸 수 있는데, 공부하는 입장에서는 두 방법 모두로 풀어보는 것이 아주 큰 도움이 됩니다.\n\n마지막으로 21번 문제입니다.\n매우 복잡하게 얽혀서 회전하는 용수철 시스템을 상상해 보겠습니다. 중심 축 역할을 하는 단단하고 긴 빔이 있고, 그 위에 레일이 깔려 있어 캐리지가 미끄러져 움직일 수 있습니다. 이 캐리지는 평형 상태의 고유 길이가 알 제로이고 용수철 상수가 소문자 케이인 첫 번째 용수철의 한쪽 끝에 연결되어 있으며, 이 용수철의 반대쪽 끝은 빔의 중심에 고정되어 있습니다.\n그런데 이 캐리지 위에는 원래 빔의 방향과 정확히 90도 전수직을 이루는 또 다른 레일 세트가 십자 모양으로 얹혀 있습니다. 그리고 이 교차 레일을 따라서 질량이 소문자 엠인 작은 입자가 움직입니다. 이 입자는 다시 시스템의 중심 고정 핀으로부터 길게 연결된, 용수철 상수가 대문자 케이이고 고유 길이가 0인 두 번째 용수철에 의해 붙잡혀 있습니다. 여기서 빔과 레일, 용수철, 그리고 캐리지 자체의 질량은 모두 0이라고 가정하여 무시합니다. 이 전체 장치는 첫 번째 용수철이 고정된 중심점을 축으로 삼아, 일정한 각속도로 한 평면 상에서 강제로 빙글빙글 회전 운동을 하고 있습니다. 이때 두 번째 용수철의 길이는 회전하는 내내 첫 번째 용수철의 고유 길이에 비해 항상 무시할 수 있을 정도로 매우 작다고 가정합니다.\n\n이 조건에서 세 가지 질문에 답해야 합니다.\n첫째, 이 시스템의 전체 에너지는 얼마이며, 이 에너지는 시간이 흘러도 변하지 않고 보존되는지 판단해 보세요.\n둘째, 우리가 실험실에 가만히 서서 이 장치를 바라보는 정지 좌표계, 즉 실험실 좌표계의 일반화 좌표를 사용할 때, 이 시스템의 야코비 일당량은 어떻게 표현되며 물리적으로 보존되는지 확인해 보세요.\n셋째, 이번에는 장치와 함께 각속도로 똑같이 회전하는 회전 좌표계의 관점에서 일반화 좌표를 설정해 봅시다. 이때 시스템의 라그랑지안은 어떻게 유도되는지, 그리고 이 회전 좌표계에서의 야코비 일당량은 무엇이며 보존되는지 계산해 보세요. 마지막으로 정지 좌표계에서 구한 야코비 일당량과 회전 좌표계에서 구한 야코비 일당량 사이에 어떤 물리적 관계가 성립하는지 서로 비교하며 논해 보시기 바랍니다."
        },
        {
          "id": "GM_2-9_part04_Exercises_exercises_22_to_27_Korean_Translation",
          "kind": "translation",
          "version": "part 04",
          "label": "GM_2.9 · 4부: 연습문제 22-27",
          "fileName": "GM_2.9_part04_Exercises_exercises_22_to_27_Korean_Translation.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part04_Exercises_exercises_22_to_27_Korean_Translation.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part04_Exercises_exercises_22_to_27_infographic.png",
            "alt": "GM 2.9 part04 Exercises exercises 22 to 27 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part04_Exercises_exercises_22_to_27_infographic.png"
          },
          "content": "**22.** 어떤 입자가 보존적인 퍼텐셜 $V(r)$의 영향을 받으며 공간 상에서 운동하고 있지만, 항상 $\\sigma(r,t)=0$이라는 방정식을 만족하는 표면 위에서만 움직이도록 제한되어 있다고 가정해 봅시다. (시간 $t$가 명시적으로 포함되어 있다는 것은 이 표면이 시간에 따라 움직일 수 있음을 나타냅니다.) 이때 가해지는 순간적인 구속력은 항상 표면에 수직한 방향이라고 가정합니다. 표면이 시간에 따라 움직이는 경우, 입자의 에너지가 보존되지 않음을 해석학적으로 증명하세요. 이러한 상황에서 에너지가 보존되지 않는 물리적인 이유는 무엇입니까?\n\n**23.** 질량이 각각 $m_{1}$과 $m_{2}$인 두 입자를 고려해 봅시다. $m_{1}$은 $x=y=0$을 중심으로 하는 $z=0$ 평면 위의 반지름이 $a$인 원 위에서만 움직이도록 제한되어 있습니다. $m_{2}$는 $x=y=0$을 중심으로 하는 $z=c$ 평면 위의 반지름이 $b$인 원 위에서만 움직이도록 제한되어 있습니다. 이 두 입자 사이에는 용수철 상수가 $k$인 가벼운(질량이 없는) 용수철이 연결되어 있습니다.\n\n* (a) 이 시스템의 라그랑지안(Lagrangian)을 구하세요.\n* (b) 라그랑주 승수법(Lagrange multipliers)을 사용하여 이 문제를 풀고, 각각의 승수가 가지는 물리적 의미를 설명하세요.\n\n**24.** 1차원 조화 진동자의 라그랑지안은 $L = \\frac{1}{2}m\\dot{x}^{2} - \\frac{1}{2}kx^{2}$입니다. 여러분이 이 운동의 해를 모르지만, 운동이 주기적이어야 하므로 다음과 같은 형태의 푸리에 급수로 표현될 수 있음을 깨달았다고 가정해 봅시다.\n\n\n$$x(t)=\\sum_{j=0}a_{j}\\cos j\\omega t$$\n\n\n(여기서 운동의 반환점, 즉 속도가 0이 되어 방향이 바뀌는 지점을 $t=0$으로 잡습니다.) 이때 $\\omega$는 운동의 (알려지지 않은) 각진동수입니다. 이러한 $x(t)$의 표현 방식은 구성 공간(configuration space)에서 시스템 경로의 궤적을 결정하는 여러 개의 매개변수($a_j$)를 정의하게 됩니다. 주기 $T = 2\\pi/\\omega$만큼 떨어진 두 지점 $t_{1}$과 $t_{2}$ 사이의 작용 적분(action integral) $I$를 고려해 보세요. 시스템의 경로가 이와 같은 형태를 가질 때, $x$가 0으로 사라지지 않으면서 작용 $I$가 극값(extremum)을 갖기 위한 조건은 오직 $j \\ne 1$일 때 $a_{j} = 0$이고, 동시에 $\\omega^{2} = k/m$일 때뿐임을 증명하세요.\n\n**25.** 반지름이 $R$인 디스크(원판)가 고정된 포물선 $y = ax^{2}$의 안쪽 표면을 따라 미끄러짐 없이 구르고 있습니다. 이 운동의 구속 방정식(equations of constraint)을 구하세요. 디스크가 포물선과 만날 때, 디스크의 위치와 관계없이 오직 하나의 점에서만 접하며 구르기 위해서 디스크의 반지름 $R$과 포물선의 계수 $a$ 사이에 만족해야 하는 기하학적 조건은 무엇입니까?\n\n**26.** 질량이 $m$인 입자가 길이 $L$인 질량이 없는 줄(또는 용수철)에 매달려 있습니다. 이 입자는 처음에 아무런 초기 운동 없이 중력장(중력 가속도 $g$) 안에서 수직으로 늘어져 있습니다. 이때 입자가 수평 방향으로 순간적인 충격(impulsive blow)을 받아 각속도 $\\omega$를 얻게 됩니다. 만약 $\\omega$가 충분히 작다면 이 질량은 단순한 단진자처럼 운동할 것이 명백합니다. 반대로 $\\omega$가 충분히 크다면 수직 지지점을 중심으로 한 바퀴 회전하게 될 것입니다. 라그랑주 승수를 사용하여 운동 과정 중 어느 시점에서 줄이 느슨해져 팽팽함을 잃게 되는(slack) 조건을 결정하세요.\n\n**27.** * (a) 식 (2.29)의 구속 조건이 홀로노믹(holonomic) 형태로 적분될 수 없음을 보여줌으로써, 이 구속 조건이 진정한 비홀로노믹(nonholonomic) 조건임을 증명하세요.\n\n* (b) 이에 대응하는 구속력들이 가상 일(virtual work)을 하지 않음을 증명하세요.\n* (c) $V = 0$인 경우에 대하여 식 (2.29)와 (2.30)을 만족하는 하나 이상의 해를 찾고, 이 해들이 에너지를 보존함을 보여주세요."
        },
        {
          "id": "GM_2-9_part04_Exercises_exercises_22_to_27_KR_TTS",
          "kind": "tts",
          "version": "part 04",
          "label": "GM_2.9 · 4부: 연습문제 22-27",
          "fileName": "GM_2.9_part04_Exercises_exercises_22_to_27_KR_TTS.md",
          "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part04_Exercises_exercises_22_to_27_KR_TTS.md",
          "image": {
            "src": "assets/infographics/GM_2.9_part04_Exercises_exercises_22_to_27_infographic.png",
            "alt": "GM 2.9 part04 Exercises exercises 22 to 27 infographic",
            "sourcePath": "Units/GM_02_Variational_Principles_and_Lagranges_Equations/GM_2.9_Exercises/GM_2.9_part04_Exercises_exercises_22_to_27_infographic.png"
          },
          "content": "22. 어떤 입자가 보존적인 퍼텐셜 V(r)의 영향을 받으며 공간 상에서 운동하고 있지만, 항상 시그마(r,t)=0이라는 방정식을 만족하는 표면 위에서만 움직이도록 제한되어 있다고 가정해 봅시다. (시간 t가 명시적으로 포함되어 있다는 것은 이 표면이 시간에 따라 움직일 수 있음을 나타냅니다.) 이때 가해지는 순간적인 구속력은 항상 표면에 수직한 방향이라고 가정합니다. 표면이 시간에 따라 움직이는 경우, 입자의 에너지가 보존되지 않음을 해석학적으로 증명하세요. 이러한 상황에서 에너지가 보존되지 않는 물리적인 이유는 무엇입니까?\n\n23. 질량이 각각 m 아래첨자 1과 m 아래첨자 2인 두 입자를 고려해 봅시다. m 아래첨자 1은 x=y=0을 중심으로 하는 z=0 평면 위의 반지름이 a인 원 위에서만 움직이도록 제한되어 있습니다. m 아래첨자 2는 x=y=0을 중심으로 하는 z=c 평면 위의 반지름이 b인 원 위에서만 움직이도록 제한되어 있습니다. 이 두 입자 사이에는 용수철 상수가 k인 가벼운(질량이 없는) 용수철이 연결되어 있습니다.\n(a) 이 시스템의 라그랑지안(Lagrangian)을 구하세요.\n(b) 라그랑주 승수법(Lagrange multipliers)을 사용하여 이 문제를 풀고, 각각의 승수가 가지는 물리적 의미를 설명하세요.\n\n24. 1차원 조화 진동자의 라그랑지안은 L = 1 나누기 2mx의 시간 미분의 2제곱 - 1 나누기 2kx의 2입니다.제곱 여러분이 이 운동의 해를 모르지만, 운동이 주기적이어야 하므로 다음과 같은 형태의 푸리에 급수로 표현될 수 있음을 깨달았다고 가정해 봅시다.\n\nx(t)=합 아래첨자 j=0a 아래첨자 j코사인 j오메가 t\n\n(여기서 운동의 반환점, 즉 속도가 0이 되어 방향이 바뀌는 지점을 t=0으로 잡습니다.) 이때 오메가는 운동의 (알려지지 않은) 각진동수입니다. 이러한 x(t)의 표현 방식은 구성 공간(configuration space)에서 시스템 경로의 궤적을 결정하는 여러 개의 매개변수(a 아래첨자 j)를 정의하게 됩니다. 주기 T = 2파이/오메가만큼 떨어진 두 지점 t 아래첨자 1과 t 아래첨자 2 사이의 작용 적분(action integral) I를 고려해 보세요. 시스템의 경로가 이와 같은 형태를 가질 때, x가 0으로 사라지지 않으면서 작용 I가 극값(extremum)을 갖기 위한 조건은 오직 j  1일 때 a 아래첨자 j = 0이고, 동시에 오메가의 2제곱 = k/m일 때뿐임을 증명하세요.\n\n25. 반지름이 R인 디스크(원판)가 고정된 포물선 y = ax의 2의제곱 안쪽 표면을 따라 미끄러짐 없이 구르고 있습니다. 이 운동의 구속 방정식(equations of constraint)을 구하세요. 디스크가 포물선과 만날 때, 디스크의 위치와 관계없이 오직 하나의 점에서만 접하며 구르기 위해서 디스크의 반지름 R과 포물선의 계수 a 사이에 만족해야 하는 기하학적 조건은 무엇입니까?\n\n26. 질량이 m인 입자가 길이 L인 질량이 없는 줄(또는 용수철)에 매달려 있습니다. 이 입자는 처음에 아무런 초기 운동 없이 중력장(중력 가속도 g) 안에서 수직으로 늘어져 있습니다. 이때 입자가 수평 방향으로 순간적인 충격(impulsive blow)을 받아 각속도 오메가를 얻게 됩니다. 만약 오메가가 충분히 작다면 이 질량은 단순한 단진자처럼 운동할 것이 명백합니다. 반대로 오메가가 충분히 크다면 수직 지지점을 중심으로 한 바퀴 회전하게 될 것입니다. 라그랑주 승수를 사용하여 운동 과정 중 어느 시점에서 줄이 느슨해져 팽팽함을 잃게 되는(slack) 조건을 결정하세요.\n\n27. (a) 식 (2.29)의 구속 조건이 홀로노믹(holonomic) 형태로 적분될 수 없음을 보여줌으로써, 이 구속 조건이 진정한 비홀로노믹(nonholonomic) 조건임을 증명하세요.\n(b) 이에 대응하는 구속력들이 가상 일(virtual work)을 하지 않음을 증명하세요.\n(c) V = 0인 경우에 대하여 식 (2.29)와 (2.30)을 만족하는 하나 이상의 해를 찾고, 이 해들이 에너지를 보존함을 보여주세요."
        }
      ]
    }
  ]
};
