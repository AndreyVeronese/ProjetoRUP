import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"



export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [fullName, setfullName] = useState("")
  const [confirmPassword, setConfirm] = useState("");
  const [document, setDocument] = useState("")
  const navigate = useNavigate()
  

  const trocaPagina = () =>{
    navigate('/home')
  }


  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          {/* <img src={jpIMG} alt="" /> */}
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Name *"></span>
        </div>
        <div className="wrap-input">
        <input
          className={fullName !== "" ? "has-val input" : "input"}
          type="fullName"
          value={fullName}
          onChange={(e) => setfullName(e.target.value)}/>
          <span className="focus-input" data-placeholder="Last Name *" ></span>
        </div>
        <div className="wrap-input">
          <input
          className={document !== "" ? "has-val input" : "input"}
          type="text"
          value={document}
          onChange={(e) => setDocument(e.target.value)} />
          <span className="focus-input" data-placeholder="Document *"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email *"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password *"></span>
        </div>

        <div className="wrap-input">
          <input
            className={confirmPassword !== "" ? "has-val input" : "input"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Confirm Password *"></span>
        </div>

        <div className="container-login-form-btn">
          <button onClick={trocaPagina} className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}