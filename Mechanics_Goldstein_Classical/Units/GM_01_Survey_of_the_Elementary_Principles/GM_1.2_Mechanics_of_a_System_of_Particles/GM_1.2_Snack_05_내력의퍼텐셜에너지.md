이제 식 (1.29)의 우변을 살펴보자. 외력을 어떤 퍼텐셜의 그래디언트(gradient)로 도출할 수 있는 특수한 경우에, 첫 번째 항은 다음과 같이 쓸 수 있다.
($W_{12} = \sum_i \int_1^2 \mathbf{F}_i \cdot d\mathbf{s}_i = \sum_i \int_1^2 \mathbf{F}_i^{(e)} \cdot d\mathbf{s}_i + \sum_{\substack{i,j \\ i \neq j}} \int_1^2 \mathbf{F}_{ji} \cdot d\mathbf{s}_i$ 1.29)

$$
\sum_i \int_1^2 \mathbf{F}_i^{(e)} \cdot d\mathbf{s}_i = - \sum_i \int_1^2 \nabla_i V_i \cdot d\mathbf{s}_i = - \sum_i \left. V_i \right|_1^2,
$$

여기서 델 연산자(del operator)의 아래첨자 $i$는 미분이 $\mathbf{r}_i$의 성분들에 대한 것임을 나타낸다. 만약 내력도 보존력이라면, $i$번째와 $j$번째 입자 사이의 상호 작용력 $\mathbf{F}_{ij}$와 $\mathbf{F}_{ji}$는 퍼텐셜 함수 $V_{ij}$로부터 얻어질 수 있다. 작용과 반작용의 강한 법칙을 만족시키기 위해, $V_{ij}$는 입자들 사이의 거리에 대한 함수일 수밖에 없다.

$$
V_{ij} = V_{ij}(|\mathbf{r}_i - \mathbf{r}_j|). \quad (1.32)
$$

그러면 두 힘은 자동적으로 크기가 같고 반대 방향이 된다.

$$
\mathbf{F}_{ji} = -\nabla_i V_{ij} = +\nabla_j V_{ij} = -\mathbf{F}_{ij}, \quad (1.33)
$$

또한 두 입자를 잇는 선을 따라 놓이게 된다.

$$
\nabla V_{ij}(|\mathbf{r}_i - \mathbf{r}_j|) = (\mathbf{r}_i - \mathbf{r}_j)f, \quad (1.34)
$$

여기서 $f$는 어떤 스칼라 함수이다. 만약 $V_{ij}$가 속도나 (현대 물리학의 영역으로 넘어가서) 고유한 "스핀(spin)" 각운동량과 같이 입자들과 연관된 어떤 다른 벡터 쌍의 차이의 함수이기도 하다면, 힘은 여전히 크기가 같고 방향이 반대이겠지만 반드시 입자 사이의 방향을 따라 놓이지는 않을 것이다.

모든 힘이 보존력일 때, 식 (1.29)의 두 번째 항은 입자 쌍에 대한 합으로 다시 쓸 수 있으며, 각 쌍에 대한 항은 다음과 같은 형태가 된다.
($W_{12} = \sum_i \int_1^2 \mathbf{F}_i \cdot d\mathbf{s}_i = \sum_i \int_1^2 \mathbf{F}_i^{(e)} \cdot d\mathbf{s}_i + \sum_{\substack{i,j \\ i \neq j}} \int_1^2 \mathbf{F}_{ji} \cdot d\mathbf{s}_i$ 1.29)

$$
- \int_1^2 (\nabla_i V_{ij} \cdot d\mathbf{s}_i + \nabla_j V_{ij} \cdot d\mathbf{s}_j).
$$

차이 벡터 $\mathbf{r}_i - \mathbf{r}_j$를 $\mathbf{r}_{ij}$로 나타내고, $\nabla_{ij}$가 $\mathbf{r}_{ij}$에 대한 그래디언트를 의미한다면, 다음이 성립한다.

$$
\nabla_i V_{ij} = \nabla_{ij} V_{ij} = -\nabla_j V_{ij},
$$

그리고

$$
d\mathbf{s}_i - d\mathbf{s}_j = d\mathbf{r}_i - d\mathbf{r}_j = d\mathbf{r}_{ij},
$$

따라서 $ij$ 쌍에 대한 항은 다음과 같은 형태가 된다.

$$
- \int \nabla_{ij} V_{ij} \cdot d\mathbf{r}_{ij}.
$$

그러면 내력으로 인해 발생하는 총 일(work)은 다음과 같이 간단해진다.

$$
-\frac{1}{2} \sum_{\substack{i,j \\ i \neq j}} \int_1^2 \nabla_{ij} V_{ij} \cdot d\mathbf{r}_{ij} = -\frac{1}{2} \sum_{\substack{i,j \\ i \neq j}} \left. V_{ij} \right|_1^2. \quad (1.35)
$$

식 (1.35)에서 $\frac{1}{2}$이라는 계수가 나타나는 이유는, $i$와 $j$모두에 대해 합을 구할 때 주어진 쌍의 각 구성원이 한 번은$i$에 대한 합산에서, 그리고 다음에는 $j$에 대한 합산에서 총 두 번 포함되기 때문이다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_05_내력의퍼텐셜에너지.png)
