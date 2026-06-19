# 1.6 라그랑주 형식화의 간단한 응용: 애트우드 기계

**2. 애트우드 기계**—(그림 1.7 참조) 
홀로노믹, 스클레로노믹 구속 조건을 가진 보존계의 예이다 (도르래는 마찰이 없고 질량이 없다고 가정한다). 분명히 독립된 좌표는$x$하나뿐이며, 다른 추의 위치는 둘 사이의 밧줄 길이가$l$이라는 구속 조건에 의해 결정된다. 퍼텐셜 에너지는 다음과 같고,

$$
V = - M_1 g x - M_2 g (l - x),
$$

운동 에너지는 다음과 같다.

$$
T = \frac{1}{2} (M_1 + M_2) \dot{x}^2.
$$

이 둘을 결합하면 라그랑지안은 다음과 같은 형태를 갖는다.

$$
L = T - V = \frac{1}{2} (M_1 + M_2) \dot{x}^2 + M_1 g x + M_2 g (l - x).
$$

미분들을 포함하는 운동 방정식은 단 하나뿐이다.

$$
\frac{\partial L}{\partial x} = (M_1 - M_2) g,
$$

$$
\frac{\partial L}{\partial \dot{x}} = (M_1 + M_2) \dot{x},
$$

따라서 다음을 얻는다.

$$
(M_1 + M_2) \ddot{x} = (M_1 - M_2) g,
$$

또는

$$
\ddot{x} = \frac{M_1 - M_2}{M_1 + M_2} g,
$$

이는 더 기초적인 방법으로 얻은 익숙한 결과이다. 이 간단한 문제는 라그랑주 형식화에서 구속력—여기서는 밧줄의 장력—이 어디에도 나타나지 않는다는 점을 강조한다. 같은 이유로, 밧줄의 장력 역시 라그랑주 방법을 통해 직접적으로 찾을 수 없다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_03_애트우드_기계.png)
