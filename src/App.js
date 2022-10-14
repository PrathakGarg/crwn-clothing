import { Routes, Route } from 'react-router-dom'

import Home from "./routes/home/home.component";
import Navbar from './routes/navbar/navbar.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';
// import SignUp from './routes/sign-up/sign-up.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
        {/* <Route path='signup' element={<SignUp />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
