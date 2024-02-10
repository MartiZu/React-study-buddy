import Login from "../Components/Login";
import Register from "../Components/Register";

import { useState } from "react";

export default function UserPage() {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleRegister = () => {
    setIsRegistered(false);
  };

  const handleLogin = () => {
    setIsRegistered(true);
  };

  return (
    <section className="section userpage">
      <img src="/images/Logo.png" alt="logo" />
      {isRegistered ? (
        <Login  handleRegister={handleRegister}/>
      ) : (
        <Register handleLogin={handleLogin} />
      )}
    </section>
  );
}
