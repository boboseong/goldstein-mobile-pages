시간과 위치에 따라 달라질 수 있는 전기장(electric field) $\mathbf{E}$와 자기장(magnetic field) $\mathbf{B}$가 모두 존재하고 그 외에는 전하가 없는 영역에서, 속도 $\mathbf{v}$로 움직이는 질량 $m$, 전하량 $q$인 전하를 고려해 보자. 이 전하는 로런츠 힘(Lorentz force)이라고 불리는 힘을 받으며, 이는 다음과 같이 주어진다.

$$
\mathbf{F} = q [\mathbf{E} + (\mathbf{v} \times \mathbf{B})]. \quad (1.60)
$$

$\mathbf{E}(x, y, z, t)$와 $\mathbf{B}(x, y, z, t)$는 모두 시간과 위치의 연속 함수이며, 다음과 같이 스칼라 퍼텐셜(scalar potential) $\phi(x, y, z, t)$와 벡터 퍼텐셜(vector potential) $\mathbf{A}(x, y, z, t)$로부터 유도할 수 있다.

$$
\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t} \quad (1.61a)
$$

그리고

$$
\mathbf{B} = \nabla \times \mathbf{A}. \quad (1.61b)
$$

전하에 작용하는 힘은 다음의 속도 의존 퍼텐셜 에너지(velocity-dependent potential energy)로부터 유도될 수 있다.

$$
U = q\phi - q\mathbf{A} \cdot \mathbf{v}, \quad (1.62)
$$

따라서 라그랑지안 $L = T - U$는 다음과 같다.

$$
L = \frac{1}{2}mv^2 - q\phi + q\mathbf{A} \cdot \mathbf{v}. \quad (1.63)
$$


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_02_전자기장의라그랑지안.png)
