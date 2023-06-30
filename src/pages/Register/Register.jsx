// import styles
import styles from "./Register.module.css";

// import state
import { useState, useEffect } from "react";

// import components
import AlertInfo from "../../componets/Alerts/AlertInfo";
import AlertDanger from "../../componets/Alerts/AlertDanger";

const Register = () => {
  // states dos inputs, valor default vazio
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =  useState('');
  const [error, setError] = useState('');

  // metodos
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submittado');

    // checando senhas iguais
    if (password !== confirmPassword) {       
        setError("As senhas são diferentes.");
        return;
    }

    console.log(user);

    // limpando valores
    setError('');
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  // criando obejto de user
  const user = {
    displayName, email, password
  }

  return (
    <>
      <div>
        { !error && <AlertInfo msg={"Faça seu cadastro para postar"} /> }
        {error && <AlertDanger msg={error} /> } 

        <div className="grid justify-items-center">
          <div className="card w-full">
            <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
              <div className="w-full">
                <label className="mb-5">
                  <span>Nome:</span>
                  <input
                    className="input"
                    type="text"
                    required
                    name="displayName"
                    placeholder="Nome do usúario"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full">
                <label className="mb-5">
                  <span>E-mail:</span>
                  <input
                    className="input"
                    type="email"
                    required
                    name="email"
                    placeholder="Email do usúario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full">
                <label className="mb-5">
                  <span>Password:</span>
                  <input
                    className="input"
                    type="password"
                    required
                    name="password"
                    placeholder="Password do usúario"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-full">
                <label className="mb-5">
                  <span>Confirm Password:</span>
                  <input
                    className="input"
                    type="password"
                    required
                    name="confirmPassword"
                    placeholder="Confirme Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
              </div>

            <div className="flex justify-center">
            <button className="btn-dark">Cadastrar</button>
              <button className="btn-default">Login</button>
            </div>             
            </form>
          </div>
        </div>
      </div>

      {/* <div className="flex-none bg-red-300 w-full h-14">01</div>
        
        <div className="flex-initial bg-blue-500 w-full h-14">03</div> */}
    </>
  );
};

export default Register;
