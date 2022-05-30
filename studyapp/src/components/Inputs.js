// 리액트 기초 2 세션 자료를 참고하세요.

// input을 작성하면 자동으로 글씨가 출력되도록 만드세요.
// onChange 함수는 1개만 구현하세요.
// useState로 만드는 state도 1개만 만들어주세요.

import React, { useState } from 'react';

const Inputs = () => {
  // 적절한 디폴트 값을 넣으세요
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  // input 값에서 username과 email을 추출하세요
  // 비구조화 할당을 통해 추출
  const { username, email } = inputs;
  //onChange 함수를 구현하세요
  const onChange = (e) => {
    const { value, name } = e.target; // e.target에서 name, value 추출
    // component의 불변성을 지킨다
    // 기존 객체를 수정 x, 새로운 객체 생성, 새 객체를 변화시킨다
    // 사실 이해 안된다... 왜 수정하면 안되지
    setInputs({
      ...inputs, // 기존의 inputs 객체 복사
      [name]: value, // name index를 가진 value로 대입
    });
  };

  return (
    <div>
      <input
        placeholder="이름"
        name="username"
        value={username} /*value 값 지정*/ // 여기는 input 태그 안이므로 주석처리시 {} 필요 x
        onChange={onChange}
      />
      <input
        placeholder="이메일"
        name="email"
        value={email} /*value 값 지정*/
        onChange={onChange}
      />
      <p>{username}</p> {/*print content*/}
      <p>{email}</p> {/*print content*/}
    </div>
  );
};

export default Inputs;
