import styles from "./Register.module.css";

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import AlertInfo from "../../componets/Alerts/AlertInfo";
import AlertDanger from "../../componets/Alerts/AlertDanger";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <div>
        {!error && <AlertInfo msg={"Faça seu cadastro para postar"} />}
        {error && <AlertDanger msg={error} />}

        <div className="grid justify-items-center">
          <div className="card w-full">
            <form
              className="flex flex-col items-center gap-3"
              onSubmit={handleSubmit}
            >
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
                {!loading && (
                  <button type="submit" className="btn-dark">
                    Cadastrar
                  </button>
                )}
                {loading && (
                  <button className="btn-dark" disabled>
                    Aguarde...
                  </button>
                )}
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
