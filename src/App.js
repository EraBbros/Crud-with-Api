import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from "./pages/Home";
import { CreateUser } from './components/CreateUser';
import { EditUser } from './components/EditUser';


function App() {
  return (
    <div className='text-center'>
      React Js Crud
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/create" element={<CreateUser />}></Route>
          <Route path="/user/edit/:userid" element={<EditUser/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
