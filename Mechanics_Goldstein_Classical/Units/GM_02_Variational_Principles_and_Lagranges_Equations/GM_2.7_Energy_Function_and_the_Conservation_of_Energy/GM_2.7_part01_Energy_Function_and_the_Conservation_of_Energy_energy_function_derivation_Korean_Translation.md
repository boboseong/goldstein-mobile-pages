2.7 에너지 함수와 에너지 보존 법칙 

라그랑주 공식화에서 우리가 얻을 것으로 기대할 수 있는 또 다른 보존 정리 하나는, 힘이 오직 위치에만 의존하는 퍼텐셜로부터 유도되는 계에서의 총에너지 보존입니다. 실제로, 총에너지 보존이 단지 하나의 특수한 사례에 불과하다는 것을 보여주는 더 일반적인 보존 정리를 증명하는 것이 가능합니다.

일반적인 라그랑주 함수를 고려해 봅시다. 이 함수는 일반화 좌표 $q_{j}$와 일반화 속도 $\dot{q}_{j}$의 함수일 것이며, 시간 $t$에 명시적으로 의존할 수도 있습니다. (시간에 대한 명시적인 의존성은 외력 퍼텐셜이 시간 변화를 겪거나, 시간에 의존하는 구속 조건이 존재할 때 발생할 수 있습니다.) 이때 라그랑주 함수 $L$의 시간에 대한 전미분은 다음과 같습니다.

$$\frac{dL}{dt}=\sum_{j}\frac{\partial L}{\partial q_{j}}\frac{dq_{j}}{dt}+\sum_{j}\frac{\partial L}{\partial\dot{q}_{j}}\frac{d\dot{q}_{j}}{dt}+\frac{\partial L}{\partial t}$$

  *(식 2.51)* 

> **[식 2.51의 수식 흐름 설명]**
> 라그랑주 함수가 $L(q, \dot{q}, t)$의 형태를 가질 때, 이 함수가 시간에 따라 어떻게 변하는지(전미분)를 나타낸 식입니다.
> * **첫 번째 항($\sum$):** 좌표 $q_j$가 바뀜에 따른 $L$의 변화량
> * **두 번째 항($\sum$):** 속도 $\dot{q}_j$가 바뀜에 따른 $L$의 변화량
> * **세 번째 항:** 구속 조건이나 외력 등으로 인해 $L$이 시간에 직접(명시적으로) 영향을 받아 변하는 양을 모두 더해준 것입니다.
> 
> 

여기서 라그랑주 방정식(Lagrange's equations)을 적용하면 다음과 같은 관계를 얻습니다.

$$\frac{\partial L}{\partial q_{j}}=\frac{d}{dt}\left(\frac{\partial L}{\partial\dot{q}_{j}}\right)$$



이 관계식을 사용하면, 앞서 구한 식 (2.51)은 다음과 같이 다시 쓰일 수 있습니다.

$$\frac{dL}{dt}=\sum_{j}\frac{d}{dt}\left(\frac{\partial L}{\partial\dot{q}_{j}}\right)\dot{q}_{j}+\sum_{j}\frac{\partial L}{\partial\dot{q}_{j}}\frac{d\dot{q}_{j}}{dt}+\frac{\partial L}{\partial t}$$



> **[식 변환 과정 설명]**
> 식 2.51의 첫 번째 항에 있던 $\frac{\partial L}{\partial q_{j}}$ 자리에 라그랑주 방정식을 대입하여 편미분 기호를 시간에 대한 전미분 기호($\frac{d}{dt}$)로 변환한 단계입니다. 이렇게 하면 첫 번째 항과 두 번째 항의 형태가 유사해져 묶어낼 수 있는 기반이 마련됩니다.

따라서 다음의 결과가 결론적으로 도출됩니다.

$$\frac{dL}{dt}=\sum_{j}\frac{d}{dt}\left(\dot{q}_{j}\frac{\partial L}{\partial\dot{q}_{j}}\right)+\frac{\partial L}{\partial t}$$



또는 이 식을 한쪽으로 이항하여 정리하면 다음과 같습니다.

$$\frac{d}{dt}\left(\sum_{j}\dot{q}_{j}\frac{\partial L}{\partial\dot{q}_{j}}-L\right)+\frac{\partial L}{\partial t}=0$$

  *(식 2.52)* 

> **[식 2.52 도출을 위한 미분 연산 설명]**
> 미분의 곱의 공식인 $\frac{d}{dt}(f \cdot g) = \frac{df}{dt}g + f\frac{dg}{dt}$를 역으로 적용한 것입니다.
> 위 식에서 $\sum$ 내부의 두 항은 정확히 $\left(\dot{q}*{j}\frac{\partial L}{\partial\dot{q}*{j}}\right)$라는 하나의 덩어리를 시간에 대해 미분한 것과 같습니다. 최종적으로 좌변의 $\frac{dL}{dt}$까지 미분 기호 괄호 안으로 묶어 넣으면서 기호가 $-L$로 들어가게 되어, 식 (2.52)와 같은 깔끔한 형태가 완성됩니다.
> 이 식은 **"괄호 안의 물리량이 시간에 따라 변하는 비율"**과 **"라그랑주 함수가 시간에 직접 편미분되어 변하는 비율"**의 합이 항상 0이 됨을 보여주는 중요한 이정표입니다.
