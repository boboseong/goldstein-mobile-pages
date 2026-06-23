식 (1.23 $\mathbf{P} = \sum m_i \frac{d\mathbf{r}_i}{dt} = M \frac{d\mathbf{R}}{dt}$)은 계의 전체 선운동량이 마치 전체 질량이 질량 중심에 집중되어 질량 중심과 함께 움직이는 것과 같음을 나타낸다. 각운동량에 대한 유사한 정리는 이보다 더 복잡하다. 원점 $O$를 기준점으로 할 때, 계의 전체 각운동량은

$$
\mathbf{L} = \sum_i \mathbf{r}_i \times \mathbf{p}_i.
$$

$\mathbf{R}$을 원점 $O$에서 질량 중심으로 향하는 위치 벡터로, $\mathbf{r}'_i$를 질량 중심에서 $i$번째 입자로 향하는 위치 벡터로 두자. 그러면 다음을 얻는다(그림 1.3 참조).

$$
\mathbf{r}_i = \mathbf{r}'_i + \mathbf{R} \quad (1.27)
$$

그리고

$$
\mathbf{v}_i = \mathbf{v}'_i + \mathbf{v}
$$

여기서

$$
\mathbf{v} = \frac{d\mathbf{R}}{dt}
$$

는 $O$에 대한 질량 중심의 속도이며,

$$
\mathbf{v}'_i = \frac{d\mathbf{r}'_i}{dt}
$$

는 계의 질량 중심에 대한 $i$번째 입자의 속도이다. 식 (1.27)을 사용하면, 전체 각운동량은 다음과 같은 형태를 띤다.

$$
\mathbf{L} = \sum_i \mathbf{R} \times m_i \mathbf{v} + \sum_i \mathbf{r}'_i \times m_i \mathbf{v}'_i + \left( \sum_i m_i \mathbf{r}'_i \right) \times \mathbf{v} + \mathbf{R} \times \frac{d}{dt} \sum_i m_i \mathbf{r}'_i.
$$

이 식에서 마지막 두 항은 사라지는데, 둘 다 $\sum m_i \mathbf{r}'_i$라는 인수를 포함하기 때문이다. 이 인수는 알 수 있듯이 기원이 바로 질량 중심인 좌표계 내에서 질량 중심의 위치 벡터를 정의하므로 0벡터(null vector)이다. 남은 항들을 다시 쓰면, $O$에 대한 전체 각운동량은

$$
\mathbf{L} = \mathbf{R} \times M\mathbf{v} + \sum_i \mathbf{r}'_i \times \mathbf{p}'_i. \quad (1.28)
$$

말로 표현하자면, 식 (1.28)은 점 $O$에 대한 전체 각운동량이 질량 중심에 집중된 운동의 각운동량에, 질량 중심에 대한 운동의 각운동량을 더한 것과 같다는 것을 말해준다. 식 (1.28)의 형태는 일반적으로 $\mathbf{L}$이 벡터 $\mathbf{R}$을 통해 원점 $O$에 의존한다는 것을 강조한다. 질량 중심이 $O$에 대해 정지해 있을 때만 각운동량이 기준점과 무관하게 된다. 이 경우 (1.28)의 첫 번째 항은 사라지고, $\mathbf{L}$은 항상 질량 중심에 대해 취해진 각운동량으로 축소된다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.2_Mechanics_of_a_System_of_Particles/GM_1.2_Snack_03_질량중심에대한각운동량.png)
