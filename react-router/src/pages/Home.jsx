import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>My Home Page</h1>
      {/* <p>
        Go to <Link to="/products">the list of products</Link>
      </p> */}
      <button onClick={navHandler}>Navigate</button>
    </>
  );
};

export default HomePage;
