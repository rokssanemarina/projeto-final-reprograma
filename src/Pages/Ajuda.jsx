
import {useState} from 'react'
import { Header } from "../Components/Header";
import helpImg from "../assets/help-assist.svg";
import {database} from '../Service/firebase'
import { ref, push, set } from 'firebase/database'

import Style from "../Styles/Components/ajuda.module.css"

export function Ajuda() {
  const [nome, setName]=useState ('')
  const [endereco, setEndereco]=useState ('')
  const [contato, setContato]=useState ('')
  const [texto, setTexto]=useState ('')

  function handleInputValueNome (event){
    setName (event.target.value)

  }
  function handleInputValueEndereco (event){
    setEndereco (event.target.value)

  }
  function handleInputValueContato (event){
    setContato (event.target.value)

  }
  function handleInputValueTexto (event){
    setTexto (event.target.value)

  }
  

  function handleCreateMessage (event){
    event.preventDefault ()
    
    const mensagemListRef = ref (database, 'mensagens')
    const newMenssagemRef = push (mensagemListRef)

    set (newMenssagemRef, {
      nome: nome,
      endereço: endereco,
      telefone: contato,
      mensagem: texto,
    })

  }



  return (
    <div>
      <Header title="essa é a central de ajuda" image={helpImg} />
      <div className={Style.textContainer}>
        <h1 className={Style.helpTitle}>Ajude-nos a encontrar novos lugares</h1>
        <p className={Style.helpSubtitle}>Preencha o formulário com lugares que você conheça que ofereça atendimento gratuito ou até mesmo particular seja tanto online ou presencial</p>
      </div>
      <div className={Style.formContainer} 
      onSubmit={handleCreateMessage}>
        <form className={Style.form}>
            <input  className={Style.formInput} 
            placeholder="Coloque seu nome aqui " 
            onChange={handleInputValueNome}
            />
            <input  className={Style.formInput}  
             placeholder="Coloque o endereço do local "
             onChange={handleInputValueEndereco}
              />
            <input  className={Style.formInput} 
             placeholder="Contato + DDD "
             onSubmit={handleInputValueContato}
             />
            <textarea className={Style.formTextarea} 
             placeholder="Mande seu recadinho com mais informações" 
             onChange={handleInputValueTexto}/>
            <button type="submit" 
            className={Style.formButton}>enviar</button>
        </form>
      </div>
    </div>
  );
}
