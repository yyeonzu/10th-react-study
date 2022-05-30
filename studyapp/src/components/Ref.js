// 3초 뒤 input이 focus되도록 만드세요
// useRef를 사용하세요
//
import React, { useRef } from 'react';

const Ref = () => {
  // Ref 객체를 1개 생성하세요.
  const input = useRef();
  // setTimeout 함수를 구현하세요.

  // 익명 함수를 이용한 구현(맞나??)
  setTimeout(() => input.current.focus(), 3000);

  // const onFocus = () => {
  //   input.current.focus();
  // }

  // setTimeout(onFocus, 3000);

  //jsx 코드를 수정하세요.
  return (
    <div className="App">
      <div>3초 후 포커스!</div>
      <input ref={input} placeholder="작성하시오" />
    </div>
  );
};
export default Ref;
