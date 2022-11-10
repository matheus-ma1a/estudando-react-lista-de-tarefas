import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcPlus } from "react-icons/fc";


const Div = styled.div`
  background-color: #27264D;
  border-radius: 30px;
  display: flex;
`

const InputText = styled.input`
  color: white;
  border: none;
  font-size: 30px;
  padding: 15px;
  outline: none;
  border-radius: 40px;
  background: transparent;
`

const Butao = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 35px;
  display: flex;
  align-items: center;
`

function SearchBox (props){

  const [texto, setTexto] = useState('')

  const handleKeyUp = (e)=>{

    if(e.keyCode == 13){
        props.onEnter( texto )
        setTexto('')
    }
    
  }

  return(
    <Div>
      <InputText
        className="inputText"
        type='text'
        value={texto}
        onChange={(e)=>{setTexto(e.target.value)}}
        onKeyUp={handleKeyUp}
        placeholder={props.frasePadrao}
      />
      <Butao><FcPlus/></Butao>
    </Div>
  )
}

export default SearchBox