계에 작용하는 모든 힘을 퍼텐셜로부터 유도할 수 있는 것은 아닌 경우, 라그랑주 방정식은 항상 다음과 같은 형태로 쓸 수 있음에 유의하라.

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = Q_j,
$$

여기서 $L$은 이전과 같이 보존력(conservative forces)의 퍼텐셜을 포함하고, $Q_j$는 퍼텐셜에서 기인하지 *않는* 힘을 나타낸다. 이러한 상황은 마찰력(frictional forces)이 존재할 때 종종 발생한다. 마찰력은 입자의 속도에 비례하는 경우가 많으며, 이 때 마찰력의 $x$-성분은 다음과 같은 형태를 갖는다.

$$
F_{fx} = -k_x v_x.
$$

이러한 종류의 마찰력은 *레일리 소산 함수(Rayleigh's dissipation function)*라고 알려진 함수 $\mathcal{F}$의 항으로 유도될 수 있으며, 이는 다음과 같이 정의된다.

$$
\mathcal{F} = \frac{1}{2}\sum_i \left( k_x v_{ix}^2 + k_y v_{iy}^2 + k_z v_{iz}^2 \right), \quad (1.67)
$$

여기서 합은 계의 입자들에 대한 것이다. 이 정의로부터 다음이 명확해진다.

$$
F_{f x_i} = -\frac{\partial \mathcal{F}}{\partial v_{x_i}},
$$

또는 기호로 나타내면,

$$
\mathbf{F}_f = -\nabla_v \mathcal{F}. \quad (1.68)
$$


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.5_Velocity-Dependent_Potentials_and_the_Dissipation_Function/GM_1.5_Snack_04_레일리소산함수.png)
