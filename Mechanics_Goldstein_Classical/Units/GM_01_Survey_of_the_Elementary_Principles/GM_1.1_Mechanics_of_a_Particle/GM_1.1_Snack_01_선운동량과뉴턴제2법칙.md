# 1.1 MECHANICS OF A PARTICLE (입자의 역학)

어떤 주어진 원점에서 입자까지의 위치 벡터(radius vector)를 $\mathbf{r}$, 속도 벡터를 $\mathbf{v}$라고 하자.

$$
\mathbf{v} = \frac{d\mathbf{r}}{dt}. \quad (1.1)
$$

입자의 선운동량(linear momentum) $\mathbf{p}$는 입자의 질량과 속도의 곱으로 정의된다.

$$
\mathbf{p} = m\mathbf{v}. \quad (1.2)
$$

외부 물체 및 장(field)과의 상호작용의 결과로, 입자는 중력이나 전자기력 등 다양한 종류의 힘을 받을 수 있다. 입자에 작용하는 이러한 힘들의 벡터 합이 총 힘(알짜힘) $\mathbf{F}$이다. 입자의 역학은 뉴턴의 운동 제2법칙에 포함되어 있으며, 이 법칙은 입자의 운동이 다음과 같은 미분 방정식으로 기술되는 기준계가 존재한다고 서술한다.

$$
\mathbf{F} = \frac{d\mathbf{p}}{dt} \equiv \dot{\mathbf{p}}, \quad (1.3)
$$

또는

$$
\mathbf{F} = \frac{d}{dt}(m\mathbf{v}). \quad (1.4)
$$

대부분의 경우 입자의 질량은 일정하며, 식 (1.4)는 다음과 같이 간단해진다.

$$
\mathbf{F} = m \frac{d\mathbf{v}}{dt} = m\mathbf{a}, \quad (1.5)
$$

여기서 $\mathbf{a}$는 다음과 같이 정의된 입자의 가속도 벡터이다.

$$
\mathbf{a} = \frac{d^2\mathbf{r}}{dt^2}. \quad (1.6)
$$

따라서 $\mathbf{F}$가 고계 미분값에 의존하지 않는다고 가정할 때, 운동 방정식은 2계 미분 방정식이 된다.

식 (1.3)이 성립하는 기준계를 관성계(inertial system) 또는 갈릴레이계(Galilean system)라고 부른다. 고전 역학 내에서도 관성계라는 개념은 다소 이상적인 것이다. 그러나 실제로는 요구되는 성질에 필요한 만큼 충분히 근접한 좌표계를 설정하는 것이 대개 가능하다. 많은 목적에 있어서 지구에 고정된 기준계("실험실 좌표계")는 관성계에 대한 충분한 근사치가 되지만, 일부 천문학적 목적을 위해서는 먼 은하들을 기준으로 관성계(또는 관성 기준계)를 구성해야 할 수도 있다.

역학의 중요한 결론들 중 많은 것들은 보존 정리(conservation theorem)의 형태로 표현될 수 있는데, 이는 어떠한 조건 하에서 다양한 역학적 양들이 시간에 따라 일정하게 유지되는지를 나타낸다. 식 (1.3)은 이들 중 첫 번째인 다음을 즉각적으로 제공한다.

**입자의 선운동량 보존 정리:** 총 힘 $\mathbf{F}$가 0이면 $\dot{\mathbf{p}} = 0$이 되고, 선운동량 $\mathbf{p}$는 보존된다.


![인포그래픽](Mechanics_Goldstein_Classical/Units/GM_01_Survey_of_the_Elementary_Principles/GM_1.1_Mechanics_of_a_Particle/GM_1.1_Snack_01_선운동량과뉴턴제2법칙.png)
