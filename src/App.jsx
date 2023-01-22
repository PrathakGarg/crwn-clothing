import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Support from "./routes/support/support.component";

import { checkUserSession } from "./store/user/user.action";

// import SignUp from './routes/sign-up/sign-up.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="support" element={<Support />} />
        {/* <Route path='signup' element={<SignUp />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
