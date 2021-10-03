## 목차

- [프로젝트 폴더 생성하기](https://www.notion.so/React-7e6bb330796d4d50a17131e199f50ac2)
- [폴더 구조 생성하기](https://www.notion.so/React-7e6bb330796d4d50a17131e199f50ac2)
- [router 페이지 나누기](https://www.notion.so/React-7e6bb330796d4d50a17131e199f50ac2)
- [scss 적용하기](https://www.notion.so/React-7e6bb330796d4d50a17131e199f50ac2)
- [redux 설정하기](https://www.notion.so/React-7e6bb330796d4d50a17131e199f50ac2)

---

사용할 대표 기술 `React`, `redux`, `scss`

### React 프로젝트(with redux) 폴더 생성하기

npx create-react-app 폴더명 --template redux

현재 디렉토리에 바로 생성하고 싶으면 폴더명에 `.` 넣으면 됨.

### 폴더 구조 생성하기

- app
    - redux store가 있는 폴더
- modules
    - redux state, action 담는 폴더
    - index.js에 RootReducer가 있을 예정
- containers
    - connect로 프레젠테이션 컴포넌트와 연결해주는 컨테이너
    - 리덕스와 의존되어도 상관없다면 굳이 컨테이너로 연결할 필요는 없음.
- components
    - 페이지에서 보일 컴포넌트들
- pages
    - 라우터와 연결될 페이지

css는 컴포넌트, 페이지 별로 폴더 내에서 사용할 예정

### Router로 페이지 나누기

npm install react-router-dom

기존에 app.js에 있는거 페이지로 빼기

app.js

```jsx
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ReduxTuTo from './pages/ReduxTuTo';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ReduxTuTo} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
```

pages>ReduxTuTo (폴더로 다시 뺄거임)

```jsx
import React from 'react'
import { Counter } from '../features/counter/Counter'

function ReduxTuTo() {
	return (
			<div className="App">
				<Counter />
    	</div>
	)
}

export default ReduxTuTo
```

### scss 적용하기

npm install node-sass@5.0.0

이제부터 .scss 쓸 수 있게 되어씀!

### redux 설정하기

1. store에 devtools 넣기

npm install redux-devtools-extension

```jsx
store = createStore(reducer,composeWithDevTools());
```

근데 configureStore을 쓰고 있으면 따로 설정하지 않아도 설정이 되어있음.

추가적으로 redux 변경사항은 레포를 참고하시길 바람