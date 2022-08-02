import React, {useState} from "react";
import {api} from "../../Services/api";
import {useHistory} from "react-router";

export default function Register() {
const [name, setName] = useState();
const [email, setEmail] = useState();
const [companyName, setCompanyName] =  useState();
// const [phone, setPhone] = useState();
const [password, setPassword] = useState();
const history = useHistory();

function submit(e){
  e.preventDefault();
  //console.log(name, email, companyName, phone, password);
  api.post("/perfis/", {
    nome: name, 
    email: email, 
    senha: password, 
    nome_empresa: companyName
  }).then((resp) => {
    console.log(resp);
    history.push("/");
  })
  .catch((error) => console.log(error));
}

  return (
     <div className="form">
       <form onSubmit={submit}>
          <label>
             Name
             <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
          
          <label>
             email
             <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
             Company Name
             <input type="text" onChange={(e) => setCompanyName(e.target.value)} />
          </label>
          
          {/* <label>
             Phone
             <input type="text" onChange={(e) => setPhone(e.target.value)} />
          </label> */}
          
          <label>
             Password
             <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>      
          
          <button>Registrar</button>
       </form>
    </div>
   );
}
