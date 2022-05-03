import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
import img from '../../assets/uno_velho.png'
import { Modal } from "../../components/Modal";
import carro from '../../assets/carro.png'
import {mockBackend} from '../../../mockJson'


type Card = {
    title: string;
    subTitle: string;
    image: string;
    description: string;
    subDescription: string;
    value: string;
}
type Auth = {
  auth: string;
  name: string;
}

export default function Homepage(){  
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState <Card | null>(null); 
  const [auth, setAuth] = useState <Auth | null>(null)
  const [cardList, setCardList] = useState <Card[]>([]); 

  const navigate = useNavigate()
  
  

  useEffect(() => {
    const user:any = sessionStorage.getItem('auth')
    console.log(user)
    if (user){
      setAuth(JSON.parse(user));
    }

  },[])

  useEffect(() =>{
    const response = mockBackend
    if (response && response.length > 0){
      setCardList(response)
    }
  },[])
  

  function openModal(item:Card) {
    if (auth && auth.name){
      setCurrentCard(item)
      setShowModal(true)
    }else{
      navigate('/login')
    }
  }
  const changePageLogin = () =>{
    navigate('/login')
  }
  const changePageRegister = () =>{
    navigate('/register')
  }
  const signOut = () =>{
    sessionStorage.removeItem('auth')
    setAuth(null) 
  }


    return (
      <div className="home-container">
        <div className="home-title">
          <img id="imagem" src={carro} alt="Pesquisar Carro" />
         {!auth &&  <div className="btn-login">
            <button onClick={changePageLogin}>Login</button>
            <button onClick={changePageRegister}>Cadastre-se</button>
          </div> }
          {auth && auth.name &&  <div className="btn-login">
            <span>Bem vindo(a), {auth.name} </span>
            <button onClick={signOut}>Sign out</button>
          </div> }
        </div>
        <div className="header-select-input-class">
          <div className="header-select-inputs">
            <select size={1} className="select-header-one">
              <option selected>Unidade</option>
              <option>São Paulo</option>
              <option>São Paulo</option>
              <option>São Paulo</option>
            </select>
            <select size={1} className="select-header-two">
              <option selected>Localidade</option>
              <option>200km</option>
              <option>300km</option>
              <option>400km+</option>
            </select>
            <select size={1} className="select-header-three">
              <option selected>Modelo</option>
              <option>SUV</option>
              <option>SEDAN</option>
              <option>HATCH</option>
            </select>
          </div>
          <div className="header-select-inputs">
            <select size={1} className="select-header-four">
              <option selected>Ano do Veículo</option>
              <option>150.000km</option>
              <option>1.125.000km</option>
              <option>96.000km</option>
            </select>
            <select size={1} className="select-header-five">
              <option selected>Faixa de preço</option>
              <option>R$ 10.000,00</option>
              <option>R$ 9.000,00</option>
              <option>R$ 5.000,00</option>
            </select>
            <select size={1} className="select-header-six">
              <option selected>Estado do Veículo</option>
              <option>Marcas de uso</option>
              <option>Muitos detalhes</option>
              <option>Motor não funcional</option>
            </select>
          </div>
        </div>
        <div className="filter-button">
          <button> APLICAR FILTRO </button>
        </div>
        <div className="home-content">
          <div className="home-content-auction">
            {cardList && cardList.length > 0 && cardList.map((item:Card,key:number) => (
              <div key={key} onClick={() => openModal(item)} className="home-auction-card">
              <img src={img}></img>
              <h4>{item.subTitle}</h4>
              <span>
                {item.description}{" "}
              </span>
              <span>{item.value}</span>
            </div>
            ))}
          </div>
        </div>
        {showModal && currentCard && (
          <Modal
            header={currentCard?.title}
            setShowModal={setShowModal}
            cancelFunction={() => {}}
            confirmFunction={() => {}}
            loadingModal=""
            confirmText="Dar lance"
          >
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>{currentCard?.subTitle}</h4>
              <span>
                {currentCard.subDescription}{" "}
              </span>
              <span>{currentCard.value}</span>
              <a>
                {currentCard.description}{" "}
              </a>
            </div>
          </Modal>
        )}
      </div>
    );
}