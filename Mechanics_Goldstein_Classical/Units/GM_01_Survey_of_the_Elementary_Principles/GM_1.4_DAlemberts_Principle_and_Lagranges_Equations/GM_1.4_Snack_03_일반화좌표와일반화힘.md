달랑베르 원리를 운동 방정식으로 유용하게 만들기 위해, 변수들을 직교 좌표 $\mathbf{r}_i$에서 일반화 좌표 $q_j$로 변환해야 한다. $\mathbf{r}_i$에서 $q_j$라는 언어로의 변환은 다음과 같은 변환 방정식 (1.38 $\vdots$)에서 출발한다.

$$
\mathbf{r}_i = \mathbf{r}_i(q_1, q_2, \ldots, q_n, t) \qquad (1.45')
$$

($n$개의 독립적인 좌표를 가정함). 그리고 편미분학의 일반적인 "연쇄 법칙(chain rules)"을 통해 변환이 수행된다. 따라서 $\mathbf{v}_i$는 $\dot{q}_k$를 사용하여 다음 공식으로 표현된다.

$$
\mathbf{v}_i \equiv \frac{d\mathbf{r}_i}{dt} = \sum_k \frac{\partial \mathbf{r}_i}{\partial q_k} \dot{q}_k + \frac{\partial \mathbf{r}_i}{\partial t}. \qquad (1.46)
$$

마찬가지로, 임의의 가상 변위 $\delta \mathbf{r}_i$는 다음을 통해 가상 변위 $\delta q_j$와 연결될 수 있다.

$$
\delta \mathbf{r}_i = \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j} \delta q_j. \qquad (1.47)
$$

가상 변위는 정의에 의해 좌표들의 변위만을 고려하기 때문에 시간의 변화인 $\delta t$가 여기에 포함되지 않음에 유의하라. (시간에 따라 구속 조건 자체가 변하는 경우, 오직 그래야만 가상 변위가 구속력에 수직이 된다.)

일반화 좌표로 표현하면, $\mathbf{F}_i$가 한 가상일은 다음과 같이 된다.

$$
\sum_i \mathbf{F}_i \cdot \delta \mathbf{r}_i = \sum_{i,j} \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} \delta q_j
$$

$$
= \sum_j Q_j \delta q_j, \qquad (1.48)
$$

여기서 $Q_j$는 일반화 힘(generalized force)의 성분이라 불리며, 다음과 같이 정의된다.

$$
Q_j = \sum_i \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}. \qquad (1.49)
$$

$q$가 길이의 차원을 가질 필요가 없듯이 $Q$또한 힘의 차원을 가질 필요는 없지만, $Q_j \delta q_j$는 항상 일의 차원을 가져야만 한다는 점에 주목하라. 예를 들어, $Q_j$가 토크 $N_j$이고 $dq_j$가 미소 각도 $d\theta_j$일 수 있으며, 이 경우 $N_j d\theta_j$는 미소 일이 된다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_03_일반화좌표와일반화힘.png)
