// 닫기 버튼을 누르면 '닫힘'이 출력되고
// 열기 버튼을 누르면 '열림'이 출력되도록 만드세요
// 3항 연산자를 두 번 사용하세요.

import React, { useState } from "react";

const Ternary = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState(false);

  //onClick 이벤트를 구현하세요
  const onClick = () => {};

  return (
    <div>
      <button>3항 연산자 넣기</button>
      <p>3항 연산자 넣기</p>
    </div>
  );
};

export default Ternary;
