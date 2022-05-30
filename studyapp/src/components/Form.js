// form을 입력하면, text가 출력되는 input을 만들어주세요.
// 엔터를 누르면 폼이 제출됩니다.
// 폼을 제출해도 페이지가 새로고침 되지 않도록 합니다.
// state는 2개를 사용합니다.
// form에 적용할 onSubmit 이벤트 함수를 구현하세요
// input에 적용할 onChange 이벤트 함수를 구현하세요

import React, { useState } from 'react';

const Form = () => {
  // useState로 state 2개 만들기
  // input 내부의 state, print되는 곳의 state
  const [text, setText] = useState('');
  const [print, setPrint] = useState('');
  // onSubmit 함수 만들기
  const onSubmit = (e) => {
    e.preventDefault(); // 이벤트 발생했을 때 초기화 안되도록 한다
    setPrint(text); // input의 text를 print의 text로 받아오기
    setText(''); // text 부분 공백으로 초기화
  };
  // onChange 함수 만들기
  const onChange = (e) => {
    setText(e.target.value); // text를 value의 값으로 변경
  };

  // jsx 코드 수정
  return (
    <div>
      <form onSubmit={onSubmit}>
        {' '}
        {/*submit시 onSubmit 함수 실행*/}
        <input onChange={onChange} value={text} />
        <button type="submit">제출</button> {/*버튼 클릭시 submit 작동?*/}
      </form>

      <p>{print}</p>
    </div>
  );
};

export default Form;
