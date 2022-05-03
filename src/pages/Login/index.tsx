import { Fragment, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents'
import Swal from 'sweetalert2'



export const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const trocaPagina = () =>{
    if (email === "j4_manu@hotmail.com" && password === "1234"){
      sessionStorage.setItem('auth', JSON.stringify({
        auth: '9876aaa',
        name: 'Emmanuel',
      }) )
      navigate('/home')
    }else{
      /* Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Dados invalidos',
        showConfirmButton: true,
        confirmButtonText: "concordo",
      }) */
      alert("Dados invalidos")
    }
  }


  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title"> Bem vindo ao RUP! </span>

        <span className="login-form-title">
          {/* <img src={jpIMG} alt="" /> */}
        </span>

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

        <div className="container-login-form-btn">
          <button onClick={trocaPagina} className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
}