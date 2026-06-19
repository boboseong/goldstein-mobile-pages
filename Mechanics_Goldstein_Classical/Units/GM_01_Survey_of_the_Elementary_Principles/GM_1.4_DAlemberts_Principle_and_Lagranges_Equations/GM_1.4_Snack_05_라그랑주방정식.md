달랑베르 원리와 일반화 좌표를 통해 얻은 운동 에너지 관계식을 보존계에 적용해 보자. 힘들이 어떤 스칼라 퍼텐셜 함수 $V$로부터 유도될 수 있을 때,

$$
\mathbf{F}_i = -\nabla_i V.
$$

일반화 힘은 다음과 같이 쓸 수 있다.

$$
Q_j = \sum_i \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = - \sum_i \nabla_i V \cdot \frac{\partial \mathbf{r}_i}{\partial q_j},
$$

이는 함수 $-V(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N, t)$를 $q_j$에 대해 편미분한 식과 정확히 같다.

$$
Q_j \equiv -\frac{\partial V}{\partial q_j}. \qquad (1.54)
$$

식 (1.47)을 참조하라. 그러면 식 (1.53)의 결과는 다음과 같이 다시 쓸 수 있다.

$$
\frac{d}{dt} \left( \frac{\partial T}{\partial \dot{q}_j} \right) - \frac{\partial (T - V)}{\partial q_j} = 0. \qquad (1.55)
$$

형태가 (1.55)인 운동 방정식은 보존계(conservative systems)에만 반드시 국한되는 것은 아니다. 오직 $V$가 시간에 대한 명시적인 함수가 아닐 때만 그 계가 보존계가 된다(4페이지 참조). 여기서 정의된 바와 같이, 퍼텐셜 $V$는 일반화 속도(generalized velocities)에 의존하지 않는다. 따라서 우리는 $\dot{q}_j$에 대한 편미분 부분에 $V$ 항을 포함시킬 수 있다.

$$
\frac{d}{dt} \left( \frac{\partial (T - V)}{\partial \dot{q}_j} \right) - \frac{\partial (T - V)}{\partial q_j} = 0.
$$

또는 라그랑지안(Lagrangian) $L$이라는 새로운 함수를 다음과 같이 정의하면,

$$
L = T - V, \qquad (1.56)
$$

식 (1.53)은 다음과 같이 된다.

$$
\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_j} \right) - \frac{\partial L}{\partial q_j} = 0, \qquad (1.57)
$$

이 수식들을 "라그랑주 방정식(Lagrange's equations)"이라고 부른다.

특정한 운동 방정식의 집합에 대하여, 식 (1.57)이 주어진 일반화 좌표에서의 운동 방정식으로 유도되도록 하는 라그랑지안의 선택이 유일한 것은 아님에 주의하라. 따라서 유도(Derivations) 8과 10에서 볼 수 있듯이, 만약 $L(q, \dot{q}, t)$가 적절한 라그랑지안이고 $F(q, t)$가 일반화 좌표와 시간에 대한 임의의 미분 가능한 함수라면,

$$
L'(q, \dot{q}, t) = L(q, \dot{q}, t) + \frac{dF}{dt} \qquad (1.57')
$$

또한 동일한 운동 방정식을 도출하는 라그랑지안이 된다. 이러한 처방에 의해 구성된 것 외에도 대안적인 라그랑지안들을 찾는 것이 종종 가능하다(연습문제 20 참조). 식 (1.56)은 보존계에 대한 라그랑지안을 구성하는 항상 적절한 방법이기는 하지만, 주어진 계에 적합한 유일한 라그랑지안을 제공하는 것은 아니다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.4_DAlemberts_Principle_and_Lagranges_Equations/GM_1.4_Snack_05_라그랑주방정식.png)
