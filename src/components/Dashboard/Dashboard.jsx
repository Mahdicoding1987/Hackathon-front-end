import { AuthedUserContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {
  const user = useContext(AuthedUserContext);
  return (
    <main className="dashboard-container">
      <h1>Welcome, {user.username}</h1>
      <h3>This is the dashboard page where you, Where you can buy the below products.</h3>

      {props.products.map((product) => (
        <Link key={product._id} to={`/${product._id}`}>
          <header className="product-header">
            <div>
              <ul>
                <li>{product.title}</li>
                <li>{product.description}</li>
                <li>{product.price}</li>
              </ul>
            </div>
          </header>
        </Link>
      ))}
    </main>
  );
};

export default Dashboard;
