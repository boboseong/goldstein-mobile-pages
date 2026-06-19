## 2.4 제약조건이 있는 계로의 해밀턴 원리 확장

1.3절에서는 제약조건 방정식들을 $0=0$이라는 당연한 수식들로 만들어 버리는 적절한 좌표계를 선택함으로써, 홀로노믹(holonomic) 제약조건이 있는 문제들을 해결했습니다. 이번 절에서는 홀로노믹 제약조건이 있는 계뿐만 아니라 특정 유형의 비홀로노믹(non-holonomic) 계를 해결하는 데도 해밀턴의 원리가 어떻게 적용될 수 있는지 보여 주고자 합니다.

먼저 홀로노믹 제약조건을 살펴보겠습니다. 해밀턴의 원리나 달랑베르의 원리로부터 라그랑주 방정식을 유도할 때, 홀로노믹 제약조건은 마지막 단계인 일반화 좌표 $q_i$의 변분(variations)들을 서로 독립적인 것으로 취급하는 과정에서 나타납니다. 하지만 가상 변위(virtual displacements) $\delta q_i$는 제약조건과 일치하지 않을 수 있습니다. 만약 변수가 $n$개이고 다음과 같은 형태의 제약조건 방정식이 $m$개 존재한다면, 이 여분의 가상 변위들은 라그랑주 미정 계수법(method of Lagrange undetermined multipliers)을 통해 제거됩니다.

$$f_{\alpha}(q_1, \dots, q_n, t) = 0 \quad (\alpha = 1, \dots, m)$$

이에 따라 기존의 해밀턴 적분 식을 다음과 같이 수정합니다.

$$I = \int_{1}^{2} \left( L + \sum_{\alpha=1}^{m} \lambda_{\alpha} f_{\alpha} \right) dt$$

여기서 $q_i$와 라그랑주 미정 계수 $\lambda_{\alpha}$가 서로 독립적으로 변한다고 가정하면 총 $n+m$개의 방정식을 얻을 수 있습니다. 이때 $\lambda_{\alpha}$의 변분은 $m$개의 제약조건 방정식을 그대로 나누어 주며, $q_i$의 변분은 다음과 같은 식을 이끌어 냅니다.

$$\delta I = \int_{1}^{2} dt \left( \sum_{i=1}^{n} \left( \frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} + \sum_{\alpha=1}^{m} \lambda_{\alpha} \frac{\partial f_{\alpha}}{\partial q_i} \right) \delta q_i \right) = 0$$

그러나 앞서 언급했듯이 $\delta q_i$들은 서로 독립적이지 않습니다. 따라서 우리는 우선 임의의 $\delta q_i$에 대해 방정식 중 $m$개가 만족되도록 $\lambda_{\alpha}$를 영리하게 선택합니다. 그런 다음 나머지 $n-m$개의 방정식에 대해서는 $\delta q_i$의 변분들을 독립적으로 선택합니다.

이러한 과정을 거치면 $k = 1, \dots, m$에 대해 다음과 같은 형태의 방정식 $m$개를 얻게 됩니다.

$$\frac{d}{dt} \frac{\partial L}{\partial \dot{q}_k} - \frac{\partial L}{\partial q_k} + \sum_{\alpha=1}^{m} \lambda_{\alpha} \frac{\partial f_{\alpha}}{\partial q_k} = 0$$

이 등식은 우리가 $\lambda_{\alpha}$를 조율하여 선택했기 때문에 성립합니다. 아울러 $k = m+1, \dots, n$인 나머지 변수들에 대해서도 위의 식과 동일한 표현식을 얻을 수 있는데, 이 경우에는 가상 변분 $\delta q_i$가 독립적이라는 사실로부터 등식이 자연스럽게 유도됩니다.

이 방법은 비록 $m$개의 새로운 함수 $\lambda_{\alpha}$를 도입해야 한다는 대가가 따르지만, 계의 문제를 완벽하게 해결해 줍니다. 이를 물리적으로 이해하기 위해 $k = 1, \dots, n$ 전체에 대한 위의 방정식을 다음과 같이 바꾸어 써 볼 수 있습니다.

$$\frac{d}{dt} \frac{\partial L}{\partial \dot{q}_k} - \frac{\partial L}{\partial q_k} = -\sum_{\alpha=1}^{m} \lambda_{\alpha} \frac{\partial f_{\alpha}}{\partial q_k} = Q_k$$

여기서 $Q_k$는 일반화 힘(generalized forces)을 나타냅니다. 이 함수 $Q_k$는 각각의 제약조건을 유지하는 데 필요한 '실제 힘의 크기'를 의미합니다. 다만, 수식을 전개할 때 세 번째 항의 부호($+$)를 어떻게 잡을지는 임의로 정하는 것이기 때문에, 수학적인 계산만으로는 이 일반화 힘의 '크기'만을 알아낼 수 있습니다. 힘이 작용하는 정확한 '방향'까지 판단하기 위해서는 계의 물리적인 상황을 직접 이해하고 분석해야 합니다.
