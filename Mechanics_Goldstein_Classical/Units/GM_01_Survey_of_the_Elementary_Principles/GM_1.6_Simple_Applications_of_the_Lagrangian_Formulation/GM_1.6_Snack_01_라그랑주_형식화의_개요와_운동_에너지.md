# 1.6 라그랑주 형식화의 간단한 응용: 개요와 운동 에너지

이전 절들에서는 라그랑지안을 정의할 수 있는 계, 즉 작용하는 힘이 일반적인 퍼텐셜 또는 일반화 퍼텐셜로부터 유도될 수 있고 구속 조건이 일을 하지 않는 홀로노믹 계의 경우, 운동 방정식을 세우는 매우 편리한 방법을 얻게 됨을 보여준다. 우리는 운동 방정식에서 구속력을 제거하고자 하는 바람에서 라그랑주 형식화를 도입하게 되었으며, 이 목표를 달성하는 과정에서 많은 다른 이점들을 얻었다. 운동 방정식의 원래 형태인 식 (1.19)를 세울 때, 많은 벡터 힘들과 가속도들을 다루어야만 한다. 라그랑주 방법을 사용하면 두 개의 스칼라 함수 $T$와 $V$만을 다루게 되므로 문제가 크게 단순화된다.
($\sum_j \mathbf{F}_{ji} + \mathbf{F}_i^{(e)} = \dot{\mathbf{p}}_i$ 1.19)

이제 라그랑주 형식화가 적용될 수 있는 역학의 모든 문제에 대해 간단하고 판에 박힌 절차를 확립할 수 있다. 단지 $T$와 $V$를 일반화 좌표로 쓰고, 이들로부터 $L$을 구성한 다음, 이를 식 (1.57)에 대입하여 운동 방정식을 얻기만 하면 된다. 데카르트 좌표계에서 일반화 좌표계로 $T$와 $V$를 변환하는 데 필요한 변환은 변환 방정식 (1.38)과 (1.45')를 적용하여 얻는다. 따라서 일반적으로 $T$는 다음과 같이 주어진다.
($\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_j} \right) - \frac{\partial L}{\partial q_j} = 0$ 1.57)
($\vdots$ 1.38)

$$
T = \sum_i \frac{1}{2} m_i v_i^2 = \sum_i \frac{1}{2} m_i \left( \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j} \dot{q}_j + \frac{\partial \mathbf{r}_i}{\partial t} \right)^2
$$

전개를 수행하면 일반화 좌표에서 $T$에 대한 표현식이 다음 형태를 가질 것임이 분명하다.

$$
T = M_0 + \sum_j M_j \dot{q}_j + \frac{1}{2} \sum_{j,k} M_{jk} \dot{q}_j \dot{q}_k, \quad (1.71)
$$

여기서 $M_0$, $M_j$, $M_{jk}$는 $\mathbf{r}$들과 $t$의, 따라서 $q$들과 $t$의 명확한 함수이다. 사실, 비교해 보면 다음과 같다.

$$
M_0 = \sum_i \frac{1}{2} m_i \left(\frac{\partial \mathbf{r}_i}{\partial t}\right)^2,
$$

$$
M_j = \sum_i m_i \frac{\partial \mathbf{r}_i}{\partial t} \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}, \quad (1.72)
$$

그리고

$$
M_{jk} = \sum_i m_i \frac{\partial \mathbf{r}_i}{\partial q_j} \cdot \frac{\partial \mathbf{r}_i}{\partial q_k}.
$$

따라서 계의 운동 에너지는 일반화 속도들에 대한 세 개의 동차(homogeneous) 함수의 합으로 항상 쓸 수 있다.

$$
T = T_0 + T_1 + T_2, \quad (1.73)
$$

여기서 $T_0$는 일반화 속도들과 무관하며, $T_1$은 속도들에 대해 1차식이고, $T_2$는 속도들에 대해 2차식이다. 구속 조건이 시간에 무관할 때(스클레로노믹) 나타날 수 있는 것처럼, 만약 변환 방정식에 시간이 명시적으로 포함되지 않는다면 식 (1.71)에서 마지막 항만이 0이 아니게 되며, $T$는 일반화 속도들에 대해 항상 동차 2차 형식을 갖는다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_01_라그랑주_형식화의_개요와_운동_에너지.png)
