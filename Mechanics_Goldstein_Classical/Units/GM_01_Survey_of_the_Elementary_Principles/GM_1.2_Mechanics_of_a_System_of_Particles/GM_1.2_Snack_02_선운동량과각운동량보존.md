앞서 정의한 질량 중심 벡터 $\mathbf{R}$에 의해 계의 전체 선운동량은 다음과 같이 쓸 수 있다.

$$
\mathbf{P} = \sum m_i \frac{d\mathbf{r}_i}{dt} = M \frac{d\mathbf{R}}{dt}, \quad (1.23)
$$

즉, 계의 전체 질량에 질량 중심의 속도를 곱한 것이다. 결과적으로, 질량 중심에 대한 운동 방정식은 다음과 같이 다시 쓰일 수 있다.

입자계의 선운동량 보존 정리: 전체 외력이 0이면, 전체 선운동량은 보존된다.

외적 $\mathbf{r}_i \times \mathbf{p}_i$를 취하고 $i$에 대해 합산함으로써 계의 전체 각운동량을 얻는다. 식 (1.19 $\sum_j \mathbf{F}_{ji} + \mathbf{F}_i^{(e)} = \dot{\mathbf{p}}_i$)에서 이 연산을 수행하면 항등식의 도움으로 다음 결과를 얻는다.

$$
\sum_i (\mathbf{r}_i \times \dot{\mathbf{p}}_i) = \sum_i \frac{d}{dt} (\mathbf{r}_i \times \mathbf{p}_i) = \dot{\mathbf{L}} = \sum_i \mathbf{r}_i \times \mathbf{F}_i^{(e)} + \sum_{\substack{i,j \\ i \neq j}} \mathbf{r}_i \times \mathbf{F}_{ji}. \quad (1.24)
$$

식 (1.24) 우변의 마지막 항은 다음과 같은 형태의 쌍의 합으로 생각할 수 있다.

$$
\mathbf{r}_i \times \mathbf{F}_{ji} + \mathbf{r}_j \times \mathbf{F}_{ij} = (\mathbf{r}_i - \mathbf{r}_j) \times \mathbf{F}_{ji}, \quad (1.25)
$$

여기서 작용과 반작용의 동등성이 사용되었다. 그러나 $\mathbf{r}_i - \mathbf{r}_j$는 $j$에서 $i$로 향하는 벡터 $\mathbf{r}_{ij}$와 동일하므로, 식 (1.25)의 우변은 $\mathbf{r}_{ij} \times \mathbf{F}_{ji}$ 와 같이 쓸 수 있다.

두 입자 사이의 내력이 크기가 같고 반대 방향일 뿐만 아니라, 입자들을 잇는 선분을 따라 놓여 있다면—작용과 반작용의 강한 법칙(strong law of action and reaction)으로 알려진 조건—이러한 외적은 모두 0이 되어 사라진다. 이 가정 하에서는 쌍에 대한 합이 0이 되며, 식 (1.24)는 다음과 같은 형태로 쓰일 수 있다.

$$
\frac{d\mathbf{L}}{dt} = \mathbf{N}^{(e)}. \quad (1.26)
$$

따라서 전체 각운동량의 시간 미분은 주어진 점에 대한 외력의 모멘트와 같다. 식 (1.26)에 대응하는 것은 다음과 같다.

전체 각운동량 보존 정리: 가해진(외부) 토크가 0이면 $\mathbf{L}$은 시간에 대해 일정하다.

가해진 힘이 없을 때의 선운동량 보존은 내력에 대해 작용과 반작용의 약한 법칙이 유효하다고 가정한다는 것에 유의하라. 가해진 토크가 없을 때 계의 전체 각운동량 보존은 작용과 반작용의 강한 법칙의 유효성을 요구한다. 즉, 내력이 추가로 중심력(central force)이어야 한다는 것이다. 비오-사바르 법칙(Biot-Savart law)에 의해 예측되는 움직이는 전하 사이의 힘은 실제로 작용과 반작용의 법칙의 두 가지 형태를 모두 위반할 수 있다. 이런 경우 기계적 선운동량과 각운동량 보존 정리들은 적용할 수 없으며, 장(field)의 전자기적 운동량을 더한 일반화된 보존을 고려해야 한다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_02_선운동량과각운동량보존.png)
