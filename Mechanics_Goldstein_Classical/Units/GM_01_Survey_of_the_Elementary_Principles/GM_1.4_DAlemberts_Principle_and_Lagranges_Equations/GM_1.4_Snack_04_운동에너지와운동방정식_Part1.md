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
\sum_i m_i \ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \sum_i \left[ \frac{d}{dt} \left( m_i \mathbf{v}_i \cdot \frac{\partial \mathbf{v}_i}{\partial \dot{q}_j} ight) - m_i \mathbf{v}_i \cdot \frac{\partial \mathbf{v}_i}{\partial q_j} \right],
$$


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_04_운동에너지와운동방정식_Part1.png)
