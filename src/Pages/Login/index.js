import React, {useState} from "react";
//import styles from "./Login.css";
import "./Login.css";
import {api} from "../../Services/api";
import {login} from "../../Services/utils";
import {useHistory} from "react-router";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  console.log(username);
  console.log(password);

  function submit(e){
    e.preventDefault();
    //console.log(username, password);
    api.post("/login/", {username, password})
    .then((resp) => {
      console.log(resp);
      login(resp.data.token);
      history.push("/profiles");
    })
    .catch((error) => console.log(error));
  }
  
  return (
     <div className={"form"}>
       <form>
         <label>
             Username
             <input type="text" onChange={(e) => setUsername(e.target.value)} />
         </label>

         <label>
             Password
             <input type="password" onChange={(e) => setPassword(e.target.value)}/>
         </label>

         <button type="submit" onClick={submit}>Login</button>
      </form>
    </div>
  );
}
