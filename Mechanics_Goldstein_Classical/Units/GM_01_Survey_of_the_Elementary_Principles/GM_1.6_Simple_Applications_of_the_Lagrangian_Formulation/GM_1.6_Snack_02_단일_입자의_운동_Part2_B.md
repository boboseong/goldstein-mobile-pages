왜냐하면 도함수의 정의에 의해 $\theta$에 대한 $\mathbf{r}$의 미분은 $\boldsymbol{\hat{\theta}}$방향의 벡터이기 때문이다 (그림 1.6 참조). 두 개의 일반화 좌표가 있으므로 라그랑주 방정식도 두 개이다.$r$ 방정식에 나타나는 미분은 다음과 같다.

$$
\frac{\partial T}{\partial r} = m r \dot{\theta}^2, \quad \frac{\partial T}{\partial \dot{r}} = m \dot{r}, \quad \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{r}}\right) = m \ddot{r},
$$

이고, 방정식 자체는 다음과 같다.

$$
m \ddot{r} - m r \dot{\theta}^2 = F_r,
$$

여기서 두 번째 항은 구심 가속도 항이다. $\theta$ 방정식에 대해, 다음 미분들을 얻는다.

$$
\frac{\partial T}{\partial \theta} = 0, \quad \frac{\partial T}{\partial \dot{\theta}} = m r^2 \dot{\theta}, \quad \frac{d}{dt}\left(m r^2 \dot{\theta}\right) = m r^2 \ddot{\theta} + 2 m r \dot{r} \dot{\theta},
$$

따라서 방정식은 다음과 같이 된다.

$$
\frac{d}{dt}\left(m r^2 \dot{\theta}\right) = m r^2 \ddot{\theta} + 2 m r \dot{r} \dot{\theta} = r F_\theta.
$$

방정식의 좌변은 단순히 각운동량의 시간 미분이고 우변은 정확히 작용하는 토크이므로, 우리는 단지 토크 방정식 (1.26)을 다시 유도한 것임을 유의하라. 여기서 $L = m r^2 \dot{\theta}$이고$N^{(e)} = r F_\theta$이다.
($\frac{d\mathbf{L}}{dt} = \mathbf{N}^{(e)}$ 1.26)


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.6_Simple_Applications_of_the_Lagrangian_Formulation/GM_1.6_Snack_02_단일_입자의_운동_Part2_B.png)
