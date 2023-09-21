import { useNavigate } from "react-router-dom";
// import Button from "./Button";

/* eslint-disable react/prop-types */
const ErrorPage = ({ message }) => {
  const goBack = function () {
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-lg text-red-500 h-screen">
      {message}
      <button type="primary" onClick={goBack}>
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
