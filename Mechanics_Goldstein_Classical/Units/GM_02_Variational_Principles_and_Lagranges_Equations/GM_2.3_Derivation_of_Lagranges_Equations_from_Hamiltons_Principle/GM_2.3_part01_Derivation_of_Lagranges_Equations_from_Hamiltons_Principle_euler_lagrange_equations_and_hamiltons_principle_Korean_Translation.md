## 2.3 해밀턴의 원리로부터 라그랑주 방정식의 유도

변분법(calculus of variations)의 기본 문제는 $f$가 여러 개의 독립 변수 $y_i$ 및 이들의 도함수 $\dot{y}_i$의 함수인 경우로 쉽게 일반화될 수 있습니다. (물론 이 모든 양은 매개변수 $x$의 함수로 간주됩니다.) 그러면 적분 $J$의 변분은 다음과 같습니다.

$$\delta J=\delta\int_{1}^{2}f(y_{1}(x), y_{2}(x),...,\dot{y}_{1}(x), \dot{y}_{2}(x),...,x)dx$$

 (2.14) 

이 변분은 이전과 마찬가지로, 가능한 곡선들의 집합 $y_i(x,\alpha)$를 분류하는 매개변수 $\alpha$의 함수로 $J$를 간주함으로써 얻어집니다.

따라서 다음과 같이 매개변수 $\alpha$를 도입할 수 있습니다.

$$y_{1}(x,\alpha)=y_{1}(x,0)+\alpha\eta_{1}(x)$$

$$y_{2}(x,\alpha)=y_{2}(x,0)+\alpha\eta_{2}(x)$$

$$\vdots$$

 (2.15) 

여기서 $y_{1}(x,0), y_{2}(x,0)$ 등은 우리가 구하고자 하는 극값 문제(extremum problem)의 해(정답 곡선)이며, $\eta_{1}, \eta_{2}$ 등은 양 끝점(시작점 1과 끝점 2)에서 $0$이 되고 2계 도함수까지 연속이지만 그 외에는 완전히 임의적인 $x$의 독립 함수들입니다.

> **[시각적 이해를 돕기 위한 설명: 매개변수 $\alpha$에 따른 경로의 변화]**
> 변분법에서 설정하는 곡선들의 기하학적 구조를 상상해 보면 이해하기 쉽습니다. 2차원 평면 위에 고정된 두 점 '시작점 1'과 '끝점 2'가 있습니다.
> * **최적의 경로 ($\alpha = 0$):** 우리가 찾고자 하는 실제 물리적 해(정답 곡선)인 $y_i(x,0)$입니다.
> * **임의의 경로 ($\alpha \neq 0$):** 정답 경로에 임의의 섭동 함수 $\eta_i(x)$를 변형 계수 $\alpha$만큼 곱해서 더한 곡선입니다. $\eta_i(x)$는 시작점과 끝점에서 반드시 $0$이 되므로, $\alpha$가 어떤 값을 갖더라도 모든 변형된 곡선들은 반드시 고정된 시작점 1과 끝점 2를 통과하게 됩니다. $\alpha$가 $0$에 가까워질수록 이 곡선들은 정답 곡선으로 수렴합니다.
> 
> 

계산은 이전 방식과 동일하게 진행됩니다. $J$의 변분은 다음과 같이 매개변수 $\alpha$에 대한 미분 형식으로 주어집니다.

$$\frac{\partial J}{\partial\alpha}d\alpha=\int_{1}^{2}\sum_{i}\left(\frac{\partial f}{\partial y_{i}}\frac{\partial y_{i}}{\partial\alpha}d\alpha+\frac{\partial f}{\partial\dot{y}_{i}}\frac{\partial\dot{y}_{i}}{\partial\alpha}d\alpha\right)dx$$

 (2.16) 

여기서 식 (2.16)의 두 번째 항에 포함된 적분을 다시 한번 부분적분(integration by parts)합니다.

$$\int_{1}^{2}\frac{\partial f}{\partial\dot{y}_{i}}\frac{\partial^{2}y_{i}}{\partial\alpha\partial x}dx=\left.\frac{\partial f}{\partial\dot{y}_{i}}\frac{\partial y_{i}}{\partial\alpha}\right|_{1}^{2}-\int_{1}^{2}\frac{\partial y_{i}}{\partial\alpha}\frac{d}{dx}\left(\frac{\partial f}{\partial\dot{y}_{i}}\right)dx$$

이때 우변의 첫 번째 항(경계항)은 모든 곡선이 고정된 양 끝점을 통과하기 때문에($\alpha$의 변화에 영향을 받지 않으므로 끝점에서의 미분값이 $0$이 되어) 사라집니다. 이를 식 (2.16)에 다시 대입하면, 변분 $\delta J$는 다음과 같이 정리됩니다.

$$\delta J=\int_{1}^{2}\sum_{i}\left(\frac{\partial f}{\partial y_{i}}-\frac{d}{dx}\frac{\partial f}{\partial\dot{y}_{i}}\right)\delta y_{i}dx$$

 (2.17) 

여기서 식 (2.12)와 유사하게, 변분 $\delta y_i$는 다음과 같이 정의됩니다.

$$\delta y_{i}=\left(\frac{\partial y_{i}}{\partial\alpha}\right)_{0}d\alpha$$

변수 $y_i$들이 서로 독립적이므로, 이들의 변분 $\delta y_i$ 역시 독립적입니다. (예를 들어, 함수 $\eta_i(x)$들은 서로 독립적일 것입니다.) 따라서 변분법의 기본 보조정리(fundamental lemma, 식 (2.10) 참조)를 명백하게 확장 적용하면, $\delta J$가 $0$이 되어야 한다는 조건은 $\delta y_i$의 각 계수들이 개별적으로 $0$이 될 것을 요구합니다.

$$\frac{\partial f}{\partial y_{i}}-\frac{d}{dx}\frac{\partial f}{\partial\dot{y}_{i}}=0, \quad i=1,2,...,n$$

 (2.18) 

식 (2.18)은 단일 변수 방정식(2.11)을 여러 개의 변수로 적절하게 확장한 것이며, 오일러-라그랑주 미분 방정식(Euler-Lagrange differential equations)으로 잘 알려져 있습니다. 이 방정식의 해는 식 (2.14)에 주어진 형태의 적분 변분이 $0$이 되도록 하는 곡선들을 나타냅니다.

기본적인 변분 문제는 한층 더 다양하게 일반화될 수 있습니다. 예를 들어, $f$를 고계 도함수 $\ddot{y}, \dddot{y}$ 등의 함수로 취할 수도 있으며, 이는 식 (2.18)과는 다른 형태의 방정식으로 이어집니다. 또는 매개변수가 여러 개($x_j$)여서 다중적분이 되고, $f$가 각 매개변수 $x_j$에 대한 $y_i$의 편도함수들을 변수로 포함하는 경우로 확장할 수도 있습니다. 마지막으로, 양 끝점이 고정되지 않고 움직이는 변분을 고려하는 것도 가능합니다.

현재 우리의 목적에는 지금까지 유도한 내용만으로도 충분합니다. 해밀턴의 원리에 등장하는 적분 $I$는 다음과 같기 때문입니다.

$$I=\int_{1}^{2}L(q_{i},\dot{q}_{i},t)dt$$

 (2.19) 

이 적분은 아래와 같은 기호의 치환(대응 관계)을 거치면 정확히 식 (2.14)에서 규정한 형태가 됩니다.

> **[수식 기호의 대응 관계 일람]**
> 수학적 변분법의 추상적인 기호들이 물리학의 역학계 변수들과 어떻게 매칭되는지 보여주는 흐름입니다.
> * 독립 변수(적분 축): $x \longrightarrow t$ (시간) * 종속 변수(좌표 축): $y_i \longrightarrow q_i$ (일반화 좌표) * 적분 대상 함수: $f(y_i, \dot{y}_i, x) \longrightarrow L(q_i, \dot{q}_i, t)$ (라그랑지안) 
> 
> 

식 (2.18)을 유도할 때, 우리는 변수 $y_i$들이 서로 독립적이라고 가정했습니다. 해밀턴의 원리와 관련하여 이와 상응하는 조건은 일반화 좌표 $q_i$들이 서로 독립적이어야 한다는 것이며, 이를 위해서는 계의 구속 조건이 홀로노믹(holonomic, 가적분 상태)이어야 합니다.

이 경우 적분 $I$에 대응하는 오일러-라그랑주 방정식은 다름 아닌 운동의 라그랑주 방정식(Lagrange's equations of motion)이 됩니다.

$$\frac{d}{dt}\frac{\partial L}{\partial\dot{q}_{i}}-\frac{\partial L}{\partial q_{i}}=0, \quad i=1,2,...,n$$

 (2.20) 

이로써 우리는 홀로노믹 구속 조건을 가진 단일원 계(monogenic systems)에 대해, 해밀턴의 원리로부터 라그랑주 방정식이 도출된다는 것을 보여주려는 원래의 목적을 달성하였습니다.
