import React, { useState } from 'react';

function LoginCheck() {
  const [age, setAge] = useState('');

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      {age && age >= 18 ? (
        <p>You can login ✅</p>
      ) : age ? (
        <p>Login not allowed 🚫</p>
      ) : null}
    </div>
  );
}

export default LoginCheck;