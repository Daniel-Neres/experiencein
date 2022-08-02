import './App.css';
import Routes from './routes';
import {NavLink, useHistory} from "react-router-dom";
import {logout} from "./Services/utils";

function App() {
  const history = useHistory();

  function handleLogout(){
    logout();
    history.push("/");
  }

  return (
   <div className="App">
     <header>
       <nav>
         <ul>
           {/* <li>
             <NavLink exact to="/">Home</NavLink>
           </li> */}

           <li>
             <NavLink exact to="/">Login</NavLink>
           </li>

           <li>
             <NavLink exact to="/register">Register</NavLink>
           </li>

           <li>
             <button onClick={handleLogout}> Logout</button>
           </li>
         </ul>
       </nav>
     </header>     
     
     <Routes />
   </div>
  );
}

export default App;