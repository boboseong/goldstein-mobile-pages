# 1.2 입자계의 역학

이전 절의 아이디어를 많은 입자로 이루어진 계로 일반화할 때, 우리는 계 외부의 원인에 의해 입자에 작용하는 외력(external forces)과 계 내의 다른 모든 입자들에 의해 어떤 입자 $i$에 작용하는 내력(internal forces)을 구별해야 한다. 따라서, $i$번째 입자에 대한 운동 방정식(뉴턴의 제2법칙)은 다음과 같이 쓰인다.

$$
\sum_j \mathbf{F}_{ji} + \mathbf{F}_i^{(e)} = \dot{\mathbf{p}}_i, \quad (1.19)
$$

여기서 $\mathbf{F}_i^{(e)}$는 외력을 나타내며, $\mathbf{F}_{ji}$는 $j$번째 입자로 인해 $i$번째 입자에 작용하는 내력이다(당연히 $\mathbf{F}_{ii}$는 0이다). 우리는 ( $\mathbf{F}_i^{(e)}$와 마찬가지로) $\mathbf{F}_{ij}$가 원래 형태의 뉴턴 제3법칙을 따른다고 가정할 것이다. 즉, 두 입자가 서로에게 작용하는 힘은 크기가 같고 방향이 반대이다. (모든 종류의 힘에 대해 성립하지는 않는) 이 가정은 종종 작용과 반작용의 약한 법칙(weak law of action and reaction)이라고 불린다.

모든 입자에 대해 합을 구하면, 식 (1.19)는 다음과 같은 형태를 취한다.

$$
\frac{d^2}{dt^2} \sum_i m_i \mathbf{r}_i = \sum_i \mathbf{F}_i^{(e)} + \sum_{\substack{i,j \\ i \neq j}} \mathbf{F}_{ji}. \quad (1.20)
$$

우변의 첫 번째 합은 단순히 전체 외력 $\mathbf{F}^{(e)}$이며, 두 번째 항은 작용과 반작용의 법칙에 따라 각각의 쌍 $\mathbf{F}_{ij} + \mathbf{F}_{ji}$가 0이 되므로 사라진다. 좌변을 간단히 하기 위해, 입자들의 질량에 비례하여 가중치를 둔 위치 벡터(radii vectors)의 평균으로 벡터 $\mathbf{R}$을 정의한다.

$$
\mathbf{R} = \frac{\sum m_i \mathbf{r}_i}{\sum m_i} = \frac{\sum m_i \mathbf{r}_i}{M}. \quad (1.21)
$$

벡터 $\mathbf{R}$은 계의 질량 중심(center of mass), 혹은 더 넓은 의미로 무게 중심(center of gravity)으로 알려진 점을 정의한다(그림 1.1 참조). 이 정의를 사용하면 (1.20)은 다음과 같이 줄어든다.

$$
M \frac{d^2\mathbf{R}}{dt^2} = \sum_i \mathbf{F}_i^{(e)} \equiv \mathbf{F}^{(e)}, \quad (1.22)
$$

이는 질량 중심이 마치 전체 외력이 질량 중심에 집중된 계의 전체 질량에 작용하는 것처럼 움직인다는 것을 나타낸다. 순수한 내력은 그것이 뉴턴의 제3법칙을 따른다면, 질량 중심의 운동에 아무런 영향을 미치지 않는다. 자주 인용되는 예로 폭발하는 포탄의 운동이 있다. 파편들의 질량 중심은 (공기 저항을 무시할 때) 포탄이 여전히 하나의 조각인 것처럼 이동한다. 제트 및 로켓 추진에도 같은 원리가 적용된다. 질량 중심의 운동이 영향을 받지 않도록 하려면, 고속으로 배출되는 배기가스는 비행체의 더 느린 전진 운동으로 상쇄되어야 한다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_01_뉴턴제2법칙과질량중심.png)
