마지막으로 에너지 방정식을 고려해 보자. 단일 입자의 경우에서와 마찬가지로, 계를 초기 배열 1에서 최종 배열 2로 이동시키는 데 모든 힘이 한 일(work)을 계산한다.

$$
W_{12} = \sum_i \int_1^2 \mathbf{F}_i \cdot d\mathbf{s}_i = \sum_i \int_1^2 \mathbf{F}_i^{(e)} \cdot d\mathbf{s}_i + \sum_{\substack{i,j \\ i \neq j}} \int_1^2 \mathbf{F}_{ji} \cdot d\mathbf{s}_i. \quad (1.29)
$$

마찬가지로 운동 방정식을 사용하여 적분을 다음과 같이 간단히 할 수 있다.

$$
\sum_i \int_1^2 \mathbf{F}_i \cdot d\mathbf{s}_i = \sum_i \int_1^2 m_i \dot{\mathbf{v}}_i \cdot \mathbf{v}_i \, dt = \sum_i \int_1^2 d\left(\frac{1}{2}m_i v_i^2\right).
$$

따라서 행해진 일은 여전히 최종 운동 에너지와 초기 운동 에너지의 차이로 쓸 수 있다.

$$
W_{12} = T_2 - T_1,
$$

여기서 계의 전체 운동 에너지 $T$는

$$
T = \frac{1}{2} \sum_i m_i v_i^2. \quad (1.30)
$$

식 (1.27)에 주어진 질량 중심 좌표계로의 변환을 이용하면, $T$를 다음과 같이 쓸 수도 있다.
($\mathbf{r}_i = \mathbf{r}'_i + \mathbf{R}$ 1.27)

$$
T = \frac{1}{2} \sum_i m_i (\mathbf{v} + \mathbf{v}'_i) \cdot (\mathbf{v} + \mathbf{v}'_i)
$$

$$
= \frac{1}{2} \sum_i m_i v^2 + \frac{1}{2} \sum_i m_i {v'_i}^2 + \mathbf{v} \cdot \frac{d}{dt} \left( \sum_i m_i \mathbf{r}'_i \right),
$$

그리고 각운동량을 계산할 때 이미 사용했던 논리에 의해 $\sum m_i \mathbf{r}'_i = 0$ 이 되어 마지막 항은 사라지며 다음이 남는다.

$$
T = \frac{1}{2} Mv^2 + \frac{1}{2} \sum_i m_i {v'_i}^2 \quad (1.31)
$$

따라서 각운동량과 마찬가지로 운동 에너지 역시 두 부분으로 구성된다. 모든 질량이 질량 중심에 집중되어 있을 때 얻어지는 운동 에너지에, 질량 중심에 대한 운동의 운동 에너지를 더한 것이다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_04_계의운동에너지.png)
