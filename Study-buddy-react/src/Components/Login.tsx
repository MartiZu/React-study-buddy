import React, { FormEvent } from "react";

interface LoginFormProps {
  register: () => void;
}

export default function Login({ handleLogin, handleRegister }): React.FC<LoginFormProps> {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className="section login-container">
      <form id="logInData" autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          aria-label="Username"
          type="text"
          placeholder="Enter username"
        />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Enter password" />
        <button type="submit" className="logInbtn">
          Login
        </button>
        <button type="button" className="register" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}
