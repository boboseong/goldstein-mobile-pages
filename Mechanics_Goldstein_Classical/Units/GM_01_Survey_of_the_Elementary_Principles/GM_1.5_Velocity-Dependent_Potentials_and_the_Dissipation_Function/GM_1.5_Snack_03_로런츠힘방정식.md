전자기장 내 전하의 운동에 대한 라그랑주 방정식의 $x$-성분만 고려하면 다음과 같다.

$$
m\ddot{x} = q\left(v_x \frac{\partial A_x}{\partial x} + v_y \frac{\partial A_y}{\partial x} + v_z \frac{\partial A_z}{\partial x}\right) - q\left(\frac{\partial \phi}{\partial x} + \frac{dA_x}{dt}\right). \quad (1.64)
$$

$A_x$의 전시간 미분(total time derivative)은 편미분(partial time derivative)과 다음의 관계를 갖는다.

$$
\frac{dA_x}{dt} = \frac{\partial A_x}{\partial t} + \mathbf{v} \cdot \nabla A_x
$$

$$
= \frac{\partial A_x}{\partial t} + v_x \frac{\partial A_x}{\partial x} + v_y \frac{\partial A_x}{\partial y} + v_z \frac{\partial A_x}{\partial z}. \quad (1.65)
$$

식 (1.61b)는 다음을 제공한다.
($\mathbf{B} = \nabla \times \mathbf{A}$ 1.61b)

$$
(\mathbf{v} \times \mathbf{B})_x = v_y\left(\frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y}\right) + v_z\left(\frac{\partial A_z}{\partial x} - \frac{\partial A_x}{\partial z}\right).
$$

이 식들을 결합하면 $x$-방향의 운동 방정식이 얻어진다.

$$
m\ddot{x} = q [E_x + (\mathbf{v} \times \mathbf{B})_x]. \quad (1.66)
$$

성분별로 비교해 보면, 식 (1.66)과 식 (1.60)은 동일하며, 이는 로런츠 힘 방정식이 식 (1.61)과 (1.62)로부터 유도될 수 있음을 보여준다.
($\mathbf{F} = q [\mathbf{E} + (\mathbf{v} \times \mathbf{B})]$ 1.60)
($\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}, \ \mathbf{B} = \nabla \times \mathbf{A}$ 1.61)
($U = q\phi - q\mathbf{A} \cdot \mathbf{v}$ 1.62)


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_03_로런츠힘방정식.png)
