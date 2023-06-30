import styles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <div>
        <div class="alert-info" role="alert">
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <span class="font-medium">Atenção</span> Faça seu cadastro para
            postar
          </div>
        </div>

        <div class="grid justify-items-center">
          <div className="card w-full">
            <form class="flex flex-col items-center gap-3">
              <div className="w-full">
                <label className="mb-5">
                  <span>Nome:</span>
                  <input
                    className="input"
                    type="text"
                    required
                    name="displayName"
                    placeholder="Nome do usúario"
                  />
                </label>
              </div>

              <div className="w-full">
                <label className="mb-5">
                  <span>E-mail:</span>
                  <input
                    className="input"
                    type="password"
                    required
                    name="email"
                    placeholder="Email do usúario"
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
                  />
                </label>
              </div>

              <button className="btn-dark">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>

      {/* <div class="flex-none bg-red-300 w-full h-14">01</div>
        
        <div class="flex-initial bg-blue-500 w-full h-14">03</div> */}
    </>
  );
};

export default Register;
