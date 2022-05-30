// 닫기 버튼을 누르면 '닫힘'이 출력되고
// 열기 버튼을 누르면 '열림'이 출력되도록 만드세요
// 3항 연산자를 두 번 사용하세요.

import React, { useState } from 'react';

const Ternary = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState(false);

  //onClick 이벤트를 구현하세요
  const onClick = () => {
    {
      open ? setOpen(false) : setOpen(true); // click event 발생 시 open의 값 변경
    }
    {
      text ? setText(false) : setText(true); // click event 발생 시 text의 값 변경
    }
    // setOpen(!open);
    // setText(!text);

    // 반성하게 된다...ㅎ 이렇게 짧게 쓸 수 있는 코드를 ㅠㅠ
  };

  return (
    <div
    /*JSX 내부에서는 if/for문 사용이 불가능하다 -> {} 안에서 삼항연산자를 사용 OR JSX 주변에서 if문 작성 */
    >
      <button onClick={onClick}>
        {open ? <span>열기</span> : <span>닫기</span>}
      </button>
      <p>{text ? <span>열림</span> : <span>닫힘</span>}</p>
    </div>
  );
};

export default Ternary;
