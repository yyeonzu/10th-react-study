// 리액트 기초 2 세션 자료를 참고하세요.

// input을 작성하면 자동으로 글씨가 출력되도록 만드세요.
// onChange 함수는 1개만 구현하세요.
// useState로 만드는 state도 1개만 만들어주세요.

import React, { useState } from "react";

const Inputs = () => {
  // 적절한 디폴트 값을 넣으세요
  const [inputs, setInputs] = useState();

  // input 값에서 username과 email을 추출하세요

  //onChange 함수를 구현하세요
  const onChange = (e) => {};

  return (
    <div>
      <input
        placeholder="이름"
        name="username"
        // value={username}
        onChange={onChange}
      />
      <input
        placeholder="이메일"
        name="email"
        //value={email}
        onChange={onChange}
      />

      <p>유저 이름 출력 </p>
      <p>이메일 출력</p>
    </div>
  );
};

export default Inputs;
