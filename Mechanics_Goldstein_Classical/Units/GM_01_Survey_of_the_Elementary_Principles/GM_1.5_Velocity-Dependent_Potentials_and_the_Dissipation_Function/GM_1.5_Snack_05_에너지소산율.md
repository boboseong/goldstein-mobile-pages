소산 함수에 대한 물리적 해석도 가능하다. 계가 마찰에 *대항하여* 한 일(work)은 다음과 같다.

$$
dW_f = -\mathbf{F}_f \cdot d\mathbf{r} = -\mathbf{F}_f \cdot \mathbf{v} dt = \left( k_x v_x^2 + k_y v_y^2 + k_z v_z^2 \right) dt.
$$

따라서 $2\mathcal{F}$는 마찰로 인한 에너지 소산율(rate of energy dissipation)이다. 마찰력에 의해 발생하는 일반화된 힘의 성분은 다음과 같이 주어진다.

$$
Q_j = \sum_i \mathbf{F}_{fi} \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = -\sum_i \nabla_v \mathcal{F} \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}
$$

$$
= -\sum_i \nabla_v \mathcal{F} \cdot \frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j}, \quad (\text{식 } 1.51\text{에 의해}),
$$

$$
= -\frac{\partial \mathcal{F}}{\partial \dot{q}_j}. \quad (1.69)
$$

그 예로 스토크스 법칙(Stokes' law)을 들 수 있는데, 점성(viscosity) $\eta$인 매질에서 속력 $v$로 움직이는 반지름 $a$의 구(sphere)는 마찰 항력(frictional drag force) $\mathbf{F}_f = -6\pi\eta a\mathbf{v}$를 받는다. 소산을 포함하는 라그랑주 방정식은 다음과 같이 된다.

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} + \frac{\partial \mathcal{F}}{\partial \dot{q}_j} = 0, \quad (1.70)
$$

따라서 운동 방정식을 얻기 위해서는 두 개의 스칼라 함수 $L$과 $\mathcal{F}$가 지정되어야 한다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_05_에너지소산율.png)
