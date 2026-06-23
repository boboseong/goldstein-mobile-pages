앞서 다룬 가상일의 원리는 정역학만을 다루고 있다. 우리가 원하는 계의 일반적인 운동을 포함하는 원리를 얻기 위해, 제임스 베르누이(James Bernoulli)가 처음 고안하고 달랑베르(D'Alembert)가 발전시킨 방식을 사용한다. 운동 방정식,

$$
\mathbf{F}_i = \dot{\mathbf{p}}_i,
$$

는 다음과 같이 쓸 수 있다.

$$
\mathbf{F}_i - \dot{\mathbf{p}}_i = 0,
$$

이는 계 안의 입자들이 실제 힘에 "역유효력(reversed effective force)"인 $-\dot{\mathbf{p}}_i$를 더한 힘 아래에서 평형 상태에 있을 것임을 뜻한다. (1.40) 대신에, 즉시 다음과 같이 쓸 수 있다.
($\sum_i \mathbf{F}_i \cdot \delta \mathbf{r}_i = 0$ 1.40)

$$
\sum_i (\mathbf{F}_i - \dot{\mathbf{p}}_i) \cdot \delta \mathbf{r}_i = 0, \qquad (1.44)
$$

그리고 앞서와 같이 가해진 힘과 구속력으로 분해하면 다음의 결과를 얻는다.

$$
\sum_i (\mathbf{F}_i^{(a)} - \dot{\mathbf{p}}_i) \cdot \delta \mathbf{r}_i + \sum_i \mathbf{f}_i \cdot \delta \mathbf{r}_i = 0.
$$

우리는 구속력이 한 가상일이 영이 되는 계로 다시 국한시켜 다음과 같은 결과를 얻는다.

$$
\sum_i (\mathbf{F}_i^{(a)} - \dot{\mathbf{p}}_i) \cdot \delta \mathbf{r}_i = 0, \qquad (1.45)
$$

이것을 흔히 달랑베르 원리(D'Alembert's principle)라 부른다. 구속력이 더 이상 나타나지 않는다는 점에서 우리는 목적을 달성하였으며, 이제 첨자 $(a)$는 혼동 없이 생략할 수 있다. 하지만 이것은 아직 계의 운동 방정식을 제공하는 데 유용한 형태는 아니다. 이제 우리는 이 원리를 일반화 좌표의 가상 변위를 포함하는 식으로 변환해야 한다. 일반화 좌표들은 서로 독립적이므로(홀로노믹 구속의 경우), 이를 통해 $\delta q_i$의 계수들이 각각 0이 되도록 둘 수 있다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_02_달랑베르원리.png)
