import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Specialist from "./pages/Specialists/Specialist";
import Appointments from "./pages/Appointments/Appointments";
import RootLayout from "./Layouts/RootLayout";
import Register from "./pages/Auth/Register";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RootLayout/>}>
      <Route index element = {<Home/>}/>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register/>} />
      <Route path="specialist" element={<Specialist />} />
      <Route path="appointments" element={<Appointments />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
