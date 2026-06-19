## 2.2 변분법의 몇 가지 기법 (SOME TECHNIQUES OF THE CALCULUS OF VARIATIONS)

라그랑주 방정식이 식 (2.2)로부터 유도된다는 것을 증명하기에 앞서, 우리는 먼저 변분법(calculus of variations)의 방법들을 살펴보아야 합니다. 이 미적분학의 주된 문제는 어떤 주어진 선적분(line integral)이 정지된 값(stationary value, 극대·극소 또는 변하지 않는 상태)을 갖도록 하는 곡선을 찾는 것이기 때문입니다.

먼저 문제를 본질적으로 1차원적인 형태로 고려해 보겠습니다. 우리에게는 두 값 $x_1$과 $x_2$ 사이의 경로 $y = y(x)$ 위에서 정의되는 함수 $f(y, \dot{y}, x)$가 있습니다. 여기서 $\dot{y}$는 $x$에 대한 $y$의 도함수를 의미합니다.

$$\dot{y} \equiv \frac{dy}{dx}$$

우리가 찾고자 하는 것은 $x_1$과 $x_2$ 사이에서 함수 $f$의 선적분 $J$가, 실제 올바른 함수 $y(x)$로부터 미소하게(infinitesimally) 벗어난 주변 경로들과 비교했을 때 정지된 값을 갖도록 하는 특정 경로 $y(x)$입니다.

$$J = \int_{x_1}^{x_2} f(y, \dot{y}, x) dx$$

여기서 변수 $x$는 매개변수 $t$와 같은 역할을 하며, 우리는 $y(x_1) = y_1$, $y(x_2) = y_2$를 만족하는 변형된 경로들만을 고려합니다. (그림 2.2 참조) 

<figure class="textbook-figure">
  <img src="../../_figure_primitive_svg_reconstruction/GM_02/fig_2_2/fig_2_2.svg" alt="그림 2.2: 일차원 극값 문제에서 y(x)의 변형 경로들" />
  <figcaption>그림 2.2. 일차원 극값 문제에서 y(x)의 변형 경로들.</figcaption>
</figure>

> 
> **[시각 자료 설명: 그림 2.2 1차원 극값 문제에서 함수 $y(x)$의 변형된 경로들]** 교재의 **그림 2.2**는 세로축을 $y$, 가로축을 $x$로 하는 2차원 평면 그래프입니다. 그래프 내부에는 왼쪽 아래의 고정된 시작점 $(x_1, y_1)$과 오른쪽 위의 고정된 끝점 $(x_2, y_2)$이 표시되어 있습니다.
> 이 두 점 사이를 연결하는 매끄러운 곡선 경로들이 그려져 있는데, 하나는 우리가 구하고자 하는 '실제 올바른 경로(correct path)'이고, 그 주변으로 이 경로에서 미세하게 위아래로 물결치듯 벗어난 '변형된 주변 경로들(varied paths)'이 함께 나타나 있습니다.
> 
> 
> 
> **※ 주의 (원문 주석):** 이 그림 2.2는 물리적인 '배형 공간(configuration space)'을 나타내는 것이 아닙니다. 만약 1차원 배형 공간으로만 생각한다면, 올바른 경로와 변형된 경로 모두 $y_1$과 $y_2$를 연결하는 직선 선분 상에 존재하게 되며, 단지 $y$와 $x$ 사이의 함수 관계(즉, 시간에 따라 그 선분 위를 움직이는 방식)만 달라질 뿐입니다. 본 문제에서 이것이 '1차원적'이라고 불리는 이유는 $y$가 독립적인 공간 좌표가 아니라, $x$에 종속된 하나의 함수이기 때문입니다.
> 
> 

---

우리는 이 문제를 함수에서 정지점(stationary points, 극점)을 찾을 때 사용하는 익숙한 미분적분학의 도구들을 활용할 수 있는 형태로 바꾸고자 합니다.

$J$는 올바른 경로에 대해 임의의 이웃한 경로와 비교했을 때 정지된 값을 가져야 하므로, 무한소 매개변수 $\alpha$로 라벨을 붙인 특정 이웃 경로들의 집합에 대해 그 변분(variation)이 0이 되어야 합니다. 이러한 경로들의 집합을 $y(x, \alpha)$로 나타낼 수 있으며, $\alpha = 0$일 때의 $y(x, 0)$이 실제 올바른 경로를 나타내게 됩니다.

예를 들어, 양 끝점인 $x = x_1$과 $x = x_2$에서 $0$이 되는 임의의 함수 $\eta(x)$를 선택한다면, 변형된 경로들의 집합을 다음과 같이 표현할 수 있습니다.

$$y(x, \alpha) = y(x, 0) + \alpha \eta(x)$$

단순화를 위해, 실제 올바른 경로 $y(x)$와 보조 함수 $\eta(x)$는 모두 잘 정의된 함수(well-behaved functions)라고 가정합니다. 즉, $x_1$과 $x_2$ 사이에서 연속적이고 특이점(singularity)이 없으며, 같은 구간 내에서 연속적인 1계 및 2계 도함수를 가집니다.

이러한 매개변수적 곡선 가족(parametric family of curves)에 대하여, 식 (2.3)의 선적분 $J$ 역시 $\alpha$에 대한 함수가 됩니다.

$$J(\alpha) = \int_{x_1}^{x_2} f(y(x, \alpha), \dot{y}(x, \alpha), x) dx$$

따라서 정지점을 얻기 위한 조건은 우리가 잘 알고 있는 다음의 친숙한 식과 같습니다.

$$\left( \frac{dJ}{d\alpha} \right)_{\alpha=0} = 0$$

적분 기호 아래에서 미분하는 통상적인 방법을 사용하면, 우리는 다음을 얻을 수 있습니다.

$$\frac{dJ}{d\alpha} = \int_{x_1}^{x_2} \left( \frac{\partial f}{\partial y} \frac{\partial y}{\partial \alpha} + \frac{\partial f}{\partial \dot{y}} \frac{\partial \dot{y}}{\partial \alpha} \right) dx$$

이 중 두 번째 적분 항을 항별로 나누어 고려해 보겠습니다:

$$\int_{x_1}^{x_2} \frac{\partial f}{\partial \dot{y}} \frac{\partial \dot{y}}{\partial \alpha} dx = \int_{x_1}^{x_2} \frac{\partial f}{\partial \dot{y}} \frac{\partial^2 y}{\partial x \partial \alpha} dx$$

부분적분(integration by parts)을 시행하면, 이 적분식은 다음과 같이 변형됩니다.

$$\int_{x_1}^{x_2} \frac{\partial f}{\partial \dot{y}} \frac{\partial^2 y}{\partial x \partial \alpha} dx = \left. [cite_start]\frac{\partial f}{\partial \dot{y}} \frac{\partial y}{\partial \alpha} \right|_{x_1}^{x_2} - \int_{x_1}^{x_2} \frac{d}{dx} \left( \frac{\partial f}{\partial \dot{y}} \right) \frac{\partial y}{\partial \alpha} dx$$

모든 변형된 곡선들이 반드시 고정된 두 끝점 $(x_1, y_1)$과 $(x_2, y_2)$를 지나야 한다는 조건이 있으므로, $x_1$과 $x_2$에서 $\alpha$에 대한 $y$의 편미분 값은 반드시 $0$이 되어야 합니다.

따라서 식 (2.8)의 첫 번째 항(대괄호 항)은 사라지게 되며, 식 (2.7)은 다음과 같이 정리됩니다.

$$\frac{dJ}{d\alpha} = \int_{x_1}^{x_2} \left( \frac{\partial f}{\partial y} - \frac{d}{dx} \frac{\partial f}{\partial \dot{y}} \right) \frac{\partial y}{\partial \alpha} dx$$

그러므로 정지 값을 갖기 위한 조건인 식 (2.6)은 결과적으로 다음 방정식과 동등합니다.

$$\int_{x_1}^{x_2} \left( \frac{\partial f}{\partial y} - \frac{d}{dx} \frac{\partial f}{\partial \dot{y}} \right) \left( \frac{\partial y}{\partial \alpha} \right)_0 dx = 0$$
