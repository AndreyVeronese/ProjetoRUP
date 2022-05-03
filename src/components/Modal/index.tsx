import { Children, ReactNode, useState } from "react";
import './styles.css';
import axios from "axios"

type Props = {
    header: string;
    cancelText?: string;
    confirmText: string;
    children: ReactNode;
    setShowModal: Function;
    confirmFunction: Function;
    cancelFunction: Function;
    loadingModal: string;
}


export const Modal = ({header, cancelText="voltar", confirmText, children, setShowModal, confirmFunction, cancelFunction, loadingModal}:Props) =>{

    const [bid, setBid] = useState('')
    const [from, setFrom] = useState('')


    function cancel() {
        if (cancelFunction){
            cancelFunction()
        }
        setShowModal(false)
    }
    function closeModal() {
        setShowModal(false)
    }
    window.onclick = (event) => {
        if (event.target === document.getElementById("myModal")){
            setShowModal(false)
        }
    }

    const addBid = (e:any) => {
        const json = {
            from,
            bid
        }

        e.preventDefault();
        axios.post("https://q5wq8ujfpg.execute-api.us-east-1.amazonaws.com/TesteInicialAPIRUP", json)
        //https://q5wq8ujfpg.execute-api.us-east-1.amazonaws.com/TesteInicialAPIRUP NOSSA API
        .then(() => {
            console.log("deu certo")
            console.log(json)
        })
        .catch (() => {
            console.log("deu erro")
            console.log(json)
        })

    }      
    

    return(
        <div className="modal" id="myModal">
            <div className="modalContent">
                <div className="modalHeader">
                    <span onClick={closeModal} className="close">&times;</span>
                    <h2>{header}</h2>
                </div>
                <div className="modalBody">
                    {children}
                </div>


                <form onSubmit={addBid}>
                <div className="bid">
                    <input
                    onChange={e => setBid(e.target.value)}
                    placeholder="bid"
                    type="text"
                    value={bid}
                    />
                </div>
                <div className="from">
                    <input
                    onChange={e => setFrom(e.target.value)}
                    placeholder="nome"
                    type="text"
                    value={from}
                    />
                </div>
                <div className="submit-button">
                <button >enviar</button>
                </div>
                </form>
               



                <div className="modalFooter">
                    {cancelFunction && <button className="btn-cancel" onClick={cancel} >{cancelText}</button>}
                    {!cancelFunction && <button className="btn-cancel" onClick={closeModal}>{cancelText}</button>}
                    {confirmFunction && !loadingModal && <button className="btn-sucess" onClick={()=> confirmFunction() }>{confirmText}</button>}
                    {confirmFunction && loadingModal && <button disabled>{loadingModal}</button>}
                </div>
            </div>
        </div>
    );
}
