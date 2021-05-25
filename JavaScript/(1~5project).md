# 1~5 Project 내용 정리

## 1.parseInt()

: 문자열을 정수로 바꾸는 함수

### 문법

```jsx
parseInt(string, n);
```

- string을 n진법일 때의 값으로 바꿉니다. n은 옵션으로 2부터 36까지 입력할 수 있다. 입력하지 않으면 10으로 처리한다.
- string의 처리는 parseFloat()와 거의 같다.
- 소수 부분은 버린다.
- 0x로 시작하면 16진법으로 처리한다.
- 문자를 파싱하여 정수 또는 Nan 값으로 리턴한다.

### 예제

- parseInt( '100', 2 ) : 100은 2진법으로 4 출력.
- parseInt( '0x100' ) : 100은 16진법으로 256출력.

```jsx
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>JavaScript</title>
		<style>
			body {
				font-family: Consolas, monospace;
			}
		</style>
	</head>
	<body>
		<script>
			document.write( "<p>parseInt( '12.68' ) : " + parseInt( '12.68' ) + "</p>" );
			document.write( "<p>parseInt( '100', 10 ) : " + parseInt( '100', 10 ) + "</p>" );
			document.write( "<p>parseInt( '100', 2 ) : " + parseInt( '100', 2 ) + "</p>" );
			document.write( "<p>parseInt( '0x100' ) : " + parseInt( '0x100' ) + "</p>" );
		</script>
	</body>
</html>
```

## 2. parseFloat()

: 문자열을 실수로 바꾸는 함수.

### 문법

```jsx
parseFloat(string);
```

- 수로 시작할 때 그 수를 실수로 바꾼다.
- 띄어 쓰기로 여러 개의 수가 있으면 첫번째 수만 바꾼다.
- 공백으로 시작하면 공백은 무시한다.
- 수가 아닌 문자로 시작하면 NaN을 반환한다.

<예제>

```jsx
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>JavaScript</title>
		<style>
			body {
				font-family: Consolas, monospace;
			}
		</style>
	</head>
	<body>
		<script>
			document.write( "<p>parseFloat( '12.34' ) : " + parseFloat( '12.34' ) + "</p>" );
			document.write( "<p>parseFloat( ' 12.34' ) : " + parseFloat( ' 12.34' ) + "</p>" );
			document.write( "<p>parseFloat( '12.34 56.78' ) : " + parseFloat( '12.34 56.78' ) + "</p>" );
			document.write( "<p>parseFloat( 'A 12.34' ) : " + parseFloat( 'A 12.34' ) + "</p>" );
		</script>
	</body>
</html>
```

## 3. Math.floor()

Math.floor()는 어떤 수보다 크지 않은 최대의 정수를 반환한다.

### **문법**

```jsx
Math.floor(Number);
```

### **예제**

```jsx
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
    <style>
      body {
        font-family: Consolas, monospace;
      }
    </style>
  </head>
  <body>
    <script>
      document.write( '<p>Math.floor( 1.6 ) : ' + Math.floor( 1.6 ) + '</p>' );
      document.write( '<p>Math.floor( 1.2 ) : ' + Math.floor( 1.2 ) + '</p>' );
      document.write( '<p>Math.floor( 1.0 ) : ' + Math.floor( 1.0 ) + '</p>' );
      document.write( '<p>Math.floor( -1.2 ) : ' + Math.floor( -1.2 ) + '</p>' );
      document.write( '<p>Math.floor( -1.6 ) : ' + Math.floor( -1.6 ) + '</p>' );
      document.write( '<p>Math.floor( -2.0 ) : ' + Math.floor( -2.0 ) + '</p>' );
    </script>
  </body>
</html>
```

## 3-1. Math.ceil()

Math.ceil()는 어떤 수보다 작지 않은 최소의 정수를 반환합니다.

### **문법**

```jsx
Math.ceil(Number);
```

### **문법**

```jsx
Math.ceil(Number);
```

Number에는 숫자가 들어갑니다.

### **예제**

```jsx
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
    <style>
      body {
        font-family: Consolas, monospace;
      }
    </style>
  </head>
  <body>
    <script>
      document.write( '<p>Math.ceil( 1.6 ) : ' + Math.ceil( 1.6 ) + '</p>' );
      document.write( '<p>Math.ceil( 1.2 ) : ' + Math.ceil( 1.2 ) + '</p>' );
      document.write( '<p>Math.ceil( 1.0 ) : ' + Math.ceil( 1.0 ) + '</p>' );
      document.write( '<p>Math.ceil( -1.2 ) : ' + Math.ceil( -1.2 ) + '</p>' );
      document.write( '<p>Math.ceil( -1.6 ) : ' + Math.ceil( -1.6 ) + '</p>' );
      document.write( '<p>Math.ceil( -2.0 ) : ' + Math.ceil( -2.0 ) + '</p>' );
    </script>
  </body>
</html>
```

## 4. textContent

:텍스트를 추가할 수 있는 property (innerText와 하는 역할은 같음. 단, textContent가 호환성이 더 높다고 알려져 있음)

### **문법**

```jsx
element.textContent = String;
```

## 5. ddEventListener

원하는 요소에 메서드로 함수에 등록하는 것.

**같은 요소에 같은 이벤트를 여러 개 등록할 수 있다는 것!**

**즉, 위의 두 방법보다는 이 방법이 가장 좋다고 할 수 있음**

## 6. preventDefault

html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 e.preventDefault 는 그 동작을 중단시킨다.

**※ stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단시킨다. (**e.preventDefault와 차이점)

## 7.**Element.classList.add**

: 명시된 클래스를 추가하는 메서드.

## 8. **Element.classList.remove**

: 명시된 클래스를 제거하는 메서드.

## 9. **Element.classList.toggle**

toggle, 전등 스위치를 껐다 켰다 하는 행위 처럼, 0과 1이 반복되는 행위를 의미한다. 즉, 기존 값이 0이었다면 1로 바뀌고 기존 값이 1이었다면, 0으로 바뀌게 된다.

그래서 toggle 메서드는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드다

```jsx
var element = document.getElementById("test");

function toggle() {
  element.classList.toggle("test-class");
}

function add() {
  element.classList.add("test-class");
}

function remove() {
  element.classList.remove("test-class");
}
```

위 소스에서 Toggle 버튼을 누르면 배경 색상이 변하고,

Add 버튼을 누르면 test-class 클래스가 추가되어 연두색으로 배경이 변경되고,

Remove 버튼을 누르면 test-class 클래스가 제거되어 빨간색 배경으로 돌아오는 것을 확인할 수 있다.

## 10. **forEach**

반복문 for를 대체할 수 있는 내장형 함수.

```jsx
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

superheroes.forEach((hero) => {
  console.log(hero);
});
```

forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다. 이 함수의 파라미터 hero는 각 원소를 가르키게 된다.

이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부른다. 함수를 등록해주면, forEach 가 실행한다.
