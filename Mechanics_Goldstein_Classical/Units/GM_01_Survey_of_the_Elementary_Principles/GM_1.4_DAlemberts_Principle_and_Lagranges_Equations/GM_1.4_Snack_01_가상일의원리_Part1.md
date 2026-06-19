# 1.4 달랑베르 원리와 라그랑주 방정식 (D'Alembert's Principle and Lagrange's Equations)

계의 가상적(무한소) 변위란, 주어진 순간 $t$에 계에 가해진 힘과 구속에 모순되지 않도록 좌표를 임의의 무한소만큼 변화시킨 결과($\delta \mathbf{r}_i$)로 나타나는 계의 배열(configuration)의 변화를 의미한다. 이 변위는 시간 간격 $dt$ 동안 실제로 일어나는(그 동안 힘과 구속 조건이 변할 수 있는) 계의 실제 변위와 구별하기 위해 가상적(virtual)이라고 부른다. 계가 평형 상태에 있다고 가정하자. 즉, 각 입자에 작용하는 알짜힘이 영($\mathbf{F}_i = 0$)이다. 그러면 내적 $\mathbf{F}_i \cdot \delta \mathbf{r}_i$역시 명백히 영이 되는데, 이것은 변위$\delta \mathbf{r}_i$동안 힘$\mathbf{F}_i$가 한 가상일(virtual work)이다. 모든 입자에 대해 이 영이 되는 곱들을 합한 것 역시 영이어야만 한다.

$$
\sum_i \mathbf{F}_i \cdot \delta \mathbf{r}_i = 0. \qquad (1.40)
$$

여기까지는 어떤 새로운 물리적 내용도 언급되지 않았다. $\mathbf{F}_i$를 가해진 힘(applied force) $\mathbf{F}_i^{(a)}$와 구속력(force of constraint) $\mathbf{f}_i$로 분해하자.

$$
\mathbf{F}_i = \mathbf{F}_i^{(a)} + \mathbf{f}_i, \qquad (1.41)
$$

그러면 식 (1.40)은 다음과 같이 된다.

$$
\sum_i \mathbf{F}_i^{(a)} \cdot \delta \mathbf{r}_i + \sum_i \mathbf{f}_i \cdot \delta \mathbf{r}_i = 0. \qquad (1.42)
$$


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_01_가상일의원리_Part1.png)
