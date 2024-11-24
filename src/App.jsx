import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Checkout from "./components/Checkout/Checkout";
import Details from "./components/Details/Details";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import * as authService from "../src/services/authService"; // import the authservice

export const AuthedUserContext = createContext(null);
const products = [
  {
    _id: "car",
    title: "car",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "dog",
    title: "dog",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "cat",
    title: "cat",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "pig",
    title: "pig",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "elephant",
    title: "elephant",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "zebra",
    title: "zebra",
    description: "test prod's description",
    price: 100,
  },
];
const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Dashboard user={user} products={products} />} />
              <Route path="/:productId" element={<Details user={user} products={products} />} />
              <Route path="/checkout" element={<Checkout />} />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
