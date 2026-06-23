**(b) 단일 입자의 운동: 평면 극좌표계 사용.** 
여기서는 $T$를 $\dot{r}$과 $\dot{\theta}$로 표현해야 한다. 변환 방정식인 식 (1.38)은 다음과 같다.
($\vdots$ 1.38)

$$
x = r \cos \theta
$$

$$
y = r \sin \theta
$$

(1.46)과 유사하게, 속도는 다음과 같이 주어진다.
($\mathbf{v}_i \equiv \frac{d\mathbf{r}_i}{dt} = \sum_k \frac{\partial \mathbf{r}_i}{\partial q_k} \dot{q}_k + \frac{\partial \mathbf{r}_i}{\partial t}$ 1.46)

$$
\dot{x} = \dot{r} \cos \theta - r \dot{\theta} \sin \theta,
$$

$$
\dot{y} = \dot{r} \sin \theta + r \dot{\theta} \cos \theta.
$$

그러면 운동 에너지 $T = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2)$는 형식적으로 다음과 같이 간략화된다.

$$
T = \frac{1}{2}m \left[ \dot{r}^2 + (r\dot{\theta})^2 \right]. \quad (1.75)
$$

식 (1.75)의 대안적인 유도는 속도의 평면 극좌표 성분이 $\mathbf{r}$을 따르는 $\dot{r}$과 단위 벡터 $\boldsymbol{\hat{\theta}}$로 표시되는 $\mathbf{r}$에 수직인 방향을 따르는 $r\dot{\theta}$임을 인식하여 얻을 수 있다. 따라서 극좌표계로 표현된 속도의 제곱은 간단히 $\dot{r}^2 + (r\dot{\theta})^2$이 된다. 식 (1.49)의 정의로부터 일반화 힘의 성분을 얻을 수 있는데, $\hat{\mathbf{r}}$과 $\boldsymbol{\hat{\theta}}$가 각각 $\mathbf{r}$과 $\boldsymbol{\theta}$방향의 단위 벡터인$z=0$평면으로 제한된 원통 좌표계에서의 미소 위치 벡터$d\mathbf{r}$에 대한 다음 식의 도움을 받는다.
($Q_j = \sum_i \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}$ 1.49)

$$
d\mathbf{r} = \hat{\mathbf{r}} dr + r \boldsymbol{\hat{\theta}} d\theta + \hat{\mathbf{k}} dz
$$

$$
Q_r = \mathbf{F} \cdot \frac{\partial \mathbf{r}}{\partial r} = \mathbf{F} \cdot \hat{\mathbf{r}} = F_r,
$$

$$
Q_\theta = \mathbf{F} \cdot \frac{\partial \mathbf{r}}{\partial \theta} = \mathbf{F} \cdot r \boldsymbol{\hat{\theta}} = r F_\theta,
$$


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part2_A.png)
