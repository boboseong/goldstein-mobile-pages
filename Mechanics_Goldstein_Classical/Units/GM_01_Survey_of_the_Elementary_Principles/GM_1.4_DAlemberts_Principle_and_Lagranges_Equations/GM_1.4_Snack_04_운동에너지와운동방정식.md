이제 일반화 좌표를 사용한 달랑베르 원리의 식 (1.45 $\sum_i (\mathbf{F}_i^{(a)} - \dot{\mathbf{p}}_i) \cdot \delta \mathbf{r}_i = 0$)에 포함된 다른 항인 $\sum_i \dot{\mathbf{p}}_i \cdot \delta \mathbf{r}_i$로 넘어가 보자. 이 항은 다음과 같이 쓸 수 있다.

$$
\sum_i \dot{\mathbf{p}}_i \cdot \delta \mathbf{r}_i = \sum_i m_i \ddot{\mathbf{r}}_i \cdot \delta \mathbf{r}_i.
$$

(1.47 $\delta \mathbf{r}_i = \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j} \delta q_j$)을 이용하여 $\delta \mathbf{r}_i$를 나타내면, 이것은 다음과 같이 된다.

$$
\sum_{i,j} m_i \ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} \delta q_j.
$$

이제 다음 관계식을 고려하자.

$$
\sum_i m_i \ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \sum_i \left[ \frac{d}{dt} \left( m_i \dot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} \right) - m_i \dot{\mathbf{r}}_i \cdot \frac{d}{dt} \left( \frac{\partial \mathbf{r}_i}{\partial q_j} \right) \right]. \qquad (1.50)
$$

식 (1.50)의 마지막 항에서 $t$에 대한 미분과 $q_j$에 대한 미분 순서를 바꿀 수 있는데, 이는 (1.46 $\mathbf{v}_i \equiv \frac{d\mathbf{r}_i}{dt} = \sum_k \frac{\partial \mathbf{r}_i}{\partial q_k} \dot{q}_k + \frac{\partial \mathbf{r}_i}{\partial t}$)과 유사하게 다음과 같이 전개되기 때문이다.

$$
\frac{d}{dt} \left( \frac{\partial \mathbf{r}_i}{\partial q_j} \right) = \frac{\partial \dot{\mathbf{r}}_i}{\partial q_j} = \sum_k \frac{\partial^2 \mathbf{r}_i}{\partial q_j \partial q_k} \dot{q}_k + \frac{\partial^2 \mathbf{r}_i}{\partial q_j \partial t},
$$

$$
= \frac{\partial \mathbf{v}_i}{\partial q_j},
$$

이는 식 (1.46 $\mathbf{v}_i \equiv \frac{d\mathbf{r}_i}{dt} = \sum_k \frac{\partial \mathbf{r}_i}{\partial q_k} \dot{q}_k + \frac{\partial \mathbf{r}_i}{\partial t}$)에 의한 것이다. 나아가 식 (1.46 $\mathbf{v}_i \equiv \frac{d\mathbf{r}_i}{dt} = \sum_k \frac{\partial \mathbf{r}_i}{\partial q_k} \dot{q}_k + \frac{\partial \mathbf{r}_i}{\partial t}$)으로부터 다음 식도 알 수 있다.

$$
\frac{\partial \mathbf{v}_i}{\partial \dot{q}_j} = \frac{\partial \mathbf{r}_i}{\partial q_j}. \qquad (1.51)
$$

이러한 변화들을 (1.50)에 대입하면 다음 결과를 얻는다.

$$
\sum_i m_i \ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \sum_i \left[ \frac{d}{dt} \left( m_i \mathbf{v}_i \cdot \frac{\partial \mathbf{v}_i}{\partial \dot{q}_j} \right) - m_i \mathbf{v}_i \cdot \frac{\partial \mathbf{v}_i}{\partial q_j} \right],
$$

![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part1.png)

그리고 달랑베르 원리의 좌변 두 번째 항은 다음과 같이 전개할 수 있다.

$$
\sum_j \left\{ \frac{d}{dt} \left[ \frac{\partial}{\partial \dot{q}_j} \left( \sum_i \frac{1}{2} m_i v_i^2 \right) \right] - \frac{\partial}{\partial q_j} \left( \sum_i \frac{1}{2} m_i v_i^2 \right) - Q_j \right\} \delta q_j.
$$

$\sum_i \frac{1}{2} m_i v_i^2$를 계의 운동 에너지 $T$와 동일시하면, 달랑베르 원리(식 (1.45 $\sum_i (\mathbf{F}_i^{(a)} - \dot{\mathbf{p}}_i) \cdot \delta \mathbf{r}_i = 0$) 참조)는 다음과 같이 된다.

$$
\sum_j \left\{ \left[ \frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_j} \right) - \frac{\partial T}{\partial q_j} \right] - Q_j \right\} \delta q_j = 0. \qquad (1.52)
$$

데카르트 좌표계에서 $q_j$에 대한 $T$의 편미분은 영이 된다는 점에 유의하라. 따라서 미분 기하학의 언어로 말하자면, 이 항은 좌표 $q_j$의 곡률로부터 비롯된다. 예를 들어 극좌표계에서는, 각 좌표에 대한 $T$의 편미분 부분에 구심 가속도 항이 나타나게 된다.

지금까지 구속 조건의 특성에 대해서는 가상 변위에서 일이 영이 되어야 한다는 점 외에 어떠한 제한도 두지 않았다. 변수 $q_j$는 계의 운동을 기술하는 데 사용되는 어떠한 좌표들의 집합이라도 될 수 있다. 그러나 만약 구속 조건이 홀로노믹하다면, 변환 방정식 (1.38 $\vdots$) 내에 암묵적으로 구속 조건을 포함하는 독립적인 좌표 $q_j$의 집합을 찾는 것이 가능하다. 그러면 임의의 가상 변위 $\delta q_j$는 $\delta q_k$와 서로 독립적이 되며, 따라서 (1.52)가 성립하기 위한 유일한 방법은 각각의 계수들이 영이 되는 것뿐이다.

$$
\frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_j} \right) - \frac{\partial T}{\partial q_j} = Q_j. \qquad (1.53)
$$

이러한 방정식은 모두 $n$개가 존재한다.

![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part2.png)
