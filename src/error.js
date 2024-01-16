import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1>OOPS.....</h1>
      <h3>Something Went Wrong</h3>
      <h3>{err.status}</h3>
    </div>
  );
};

export default Error;
