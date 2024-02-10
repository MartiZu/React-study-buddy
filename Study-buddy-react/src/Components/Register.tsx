interface RegisterProps {
  register: () => void;
}

export default function Register({handleLogin}): React.FC<RegisterProps> {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
        <div className="section register-container">
      <form id="newUser" className="newUserHide" autocomplete="off">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName"></input>
        <label for="email">Email</label>
        <input type="text" id="email"></input>
        <label for="userNameIn">User Name</label>
        <input type="text" id="userNameIn" ></input>
        <label for="passwordIn">Password</label>
        <input type="password" id="passwordIn"></input>
        <label for="imgLink">Profile image link </label>
        <input type="text" id="imgLink"></input>
        <button type="submit" className="newUser">Submit</button>
        <button type="button" onclick={handleLogin}>Cancel</button>
    </form>
    </div>
  );
}
