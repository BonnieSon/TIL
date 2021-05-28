# JavaScript 용어정리

## 1. IIFE (Immediately Invoked Function Expression)

: 즉시 실행 함수 표현

- **사용하는 이유**

1. 괄호(`()`, Grouping Operator)로 둘러싸인 익명함수(Anonymous Function)이다. 이는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이다.
2. 즉시 실행 함수를 생성하는 괄호`()`이다. 이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다.

- **예시**

```jsx
(function () {
  var aName = "Barry";
})();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
aName; // throws "Uncaught ReferenceError: aName is not defined"
```

## 2. HTMLElement.dataset

: dataset 속성 자체는 읽기 전용이다.

1. 속성들은 `element.dataset.keyname`*과 같이* dataset의 객체 속성처럼 camelCase 이름(키)을 사용해서 설정하거나 읽을 수 있다.
2. 속성들은 또한 `element.dataset[keyname]`과 같이 객체 속성의 괄호 신택스로 설정하거나 읽을 수 있다.
3. dataset 속성 은 요소에 설정된 HTMLElement모든 사용자 지정 데이터 속성 ( data-\*)에 대한 읽기 / 쓰기를 반환한다 .

" 즉, JavaScript를 사용하여 속성이있는 HTML 요소를 검색 data-user = "hello"하려면 HTMLElement.dataset.user라고 호출하면 "hello"문자열을 반환한다.

- 예시

```jsx
//HTML

<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>
  John Doe
</div>;

// JavaScript

const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// set the data attribute
el.dataset.dateOfBirth = "1960-10-03";
// Result: el.dataset.dateOfBirth === 1960-10-03

delete el.dataset.dateOfBirth;
// Result: el.dataset.dateOfBirth === undefined

// 'someDataAttr' in el.dataset === false
el.dataset.someDataAttr = "mydata";
// Result: 'someDataAttr' in el.dataset === true
```

[HTMLElement.dataset - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/HTMLOrForeignElement/dataset)

## 3. eval() 내장 함수

: eval(code)를 호출하면 문자열 형태의 code가 실행되는데 이때 마지막 구문의 결과가 반환된다.

- 주의 사항

1. 모던 자바스크립트엔 eval을 대체할 수 있는 문법이 많기 때문에, 모던 자바스크립트를 사용하는 코드에선 eval을 잘 사용하지 않는다.
2. eval을 이용해 만든 코드는 외부 지역 변수에 접근할 수 있는데, 이는 좋지 않은 방법이다.
3. 전역 스코프에서 eval을 사용하지 말고, **window.eval(code)**을 이용해야 한다.
4. 외부 스코프에 있는 데이터가 필요하다면 **new Function**의 인수에 코드를 전달해 사용해야 한다.

## 4. 실수를 정수로 변환할 때, parseInt() VS Math.floor() 비교

양수만 변환할 경우에는 두 함수의 결과에 차이가 없으나, 음수를 변환할 경우 서로 다른 결과가 반환되기 때문에 주의해야한다.

- parseInt(-6.3) === -6
- Math.floor(-6.3) === -7
