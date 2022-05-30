// 버튼을 누르면 숫자가 1씩 증가됩니다.
// useState를 사용하세요.

import React, { useState } from 'react';
// useState; React의 Hooks 중 하나인 함수, 함수형 컴포넌트에서도 상태를 관리할 수 있게 함

/*
const numberState = useState(0);
const number = numberState[0]; // 현재 상태
const setNumber = numberState[1]; // Setter 함수
-> 배열 비구조화 할당
const[number, setNumber] = useState(0);
*/

// State 함수
const State = () => {
  const [number, setNumber] = useState(0); // 배열 비구조화 할당

  const onIncrease = () => {
    // onIncrease 함수; 버튼을 클릭하면 number 값 +1 (setNumber 이용)
    setNumber(number + 1);
  };
  // return 내부: JSX 코드 영역
  // JSX 내부에서 js 문법을 사용할 경우, {}를 이용해 감싸줘야 한다
  // JSX 밖에서 작성한 onIncrease 함수를 사용하려면 {onIncrease} 이렇게 감싸주면 된다
  return (
    <div>
      {/* JSX 내부에서 주석처리 -> JS 문법 사용 + {} */}
      <h1>이름 : {number} </h1>
      <button onClick={onIncrease}>+</button>
      {/* 
      <button onClick = {() => setNumber(number + 1)}+</button>
      한번만 사용하니까, 따로 빼지 않고 일회용 함수 작성 가능
       */}
    </div>
  );
};

export default State;
