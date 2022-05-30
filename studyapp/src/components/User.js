// map 함수를 이용해 users 데이터를 하나씩 출력하세요.
// user 컴포넌트를 구현해 10번 출력하세요.

import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: '1번', score: 10 },
    { id: 2, name: '2번', score: 45 },
    { id: 3, name: '3번', score: 75 },
    { id: 4, name: '4번', score: 11 },
    { id: 5, name: '5번', score: 97 },
    { id: 6, name: '6번', score: 36 },
    { id: 7, name: '7번', score: 57 },
    { id: 8, name: '8번', score: 89 },
    { id: 9, name: '9번', score: 23 },
    { id: 10, name: '10번', score: 44 },
  ]);

  // map 함수로 user 컴포넌트 출력하는 부분
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

// user 컴포넌트 구현하기
const User = ({ user }) => {
  return (
    <div>
      <div
        style={{
          border: 'solid 3px green',
          padding: '10px',
          margin: '5px',
        }}
      >
        {user.id}: {user.name}의 점수는 {user.score}
      </div>
    </div>
  );
};

export default Users;
