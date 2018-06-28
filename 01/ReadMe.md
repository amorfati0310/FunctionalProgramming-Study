### 함수형으로 사고 하기 

객체지향은 가동부를 캡슐화하여 코드의 이해를 돕는다. 
함수형 프로그래밍 (FP)는 가동부를 최소화하여 코드의 이해를 돕는다. 

## 설계 할 떄 이런 부분을 고려합시다 

확장성: 추가 기능을 지원하기 위해 계속 코드를 리팩토링 해야 하는가? 확장이 용이한가?
모듈화 용이성 : 파일 하나를 고치면 다른 파일도 영향을 받는가? 
재사용성: 중복이 많은가?
테스트성: 함수를 단위 테스트하기 어려운가?
가독성: 체계+ 이해하기 좋은 코드인가?

### 불변성 & 순수함수 

### 상태관리 


### 함수형 코드 예제 

```js
document.querySelector('#msg').innertHTML = `<h1>Hello World</h1>`

function printMessage(selector, format, message){
  document.querySelector(selector).innertHTML = `<${format}>${message}</${format}>`
}
printMessage('#msg', 'h1', 'Hello World')

-> var printMessage = run(addToDom('msg'), h1, echo)
printMessage('hello World v')

```

함수형 프로그래밍은 외부에서 관찰 가능한 부수 효과가 제거된 불변 프로그램을 작성하기 위해 순수함수를 선언적으로 평가하는 것입니다. 

* 특징 !!! 

Composition 합성들을 해서 나타낸다. 

단위함수 순수한 그 기능만 하는 함수 
불변성 

