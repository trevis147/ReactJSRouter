import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
export default Home;
