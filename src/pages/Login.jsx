import { useNavigate } from "react-router-dom";
import { login } from "../services/firebase";
import { email, password } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = function (e) {
    e.preventDefault();

    login();
    navigate("/");
  };

  return (
    // <section className="flex items-center justify-center bg-[#F5F9FC]">
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="flex flex-col items-center py-6 bg-[#F5F9FC] w-full md:w-[70%] lg:w-[50%] mx-auto space-y-10 rounded-xl">
        <h3 className="text-xl font-bold">Login Page</h3>

        <form onSubmit={handleLogin} className="flex flex-col space-y-6">
          <div className="flex flex-row">
            <label htmlFor="email" className="text-xl pr-2 lg:pr-12">
              Email:{" "}
            </label>
            <input
              type="text"
              id="email"
              //   placeholder="Enter your email"
              value={email}
              className="pl-3 py-1 lg:w-96 border outline-none rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-xl lg:pr-3">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              //   placeholder="Enter your password"
              className="pl-3 py-1 lg:w-96 border outline-none rounded-md"
            />
          </div>

          <button
            className="text-xl mx-auto bg-white w-[40%] py-1 rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
