import React, { useEffect, useState } from "react";
import SearchBox from './components/SeachBox';
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import './App.css';

function App() {

  const [list, setList] = useState([])

  useEffect(()=>{
    
    setList([
      {tarefa: 'compras', done: false},
      {tarefa: 'levar cachorro no pet', done: true},
      {tarefa: 'atualizar banco de dados', done: false},
    ])

  },[])

  function addActiom(newItem){
 
    if(newItem == ''){
      return
    }
    
    let newList = [...list,{tarefa:newItem, done: false}]
    setList(newList)
  }

  const handleChek = (index)=>{
    
    let newList = [...list]

    if(newList[index].done === true){

      newList[index].done = !newList[index].done
      
    }else (newList[index].done = !newList[index].done)
    
      setList(newList)
  }

  return (


    <div className="App">
      <h1>lista de tarefas</h1>
      <SearchBox
        frasePadrao='Adicione um novo item'
        onEnter={addActiom}
      />

      <ul className="mainUl" >
        {list.map((item,index)=>(

          <li className="mainLI" key={index.toString()}  >
            
            {item.done && 
              <del>{item.tarefa}</del>
            }

            {!item.done &&
              item.tarefa
            }

            <div className="toggleButton" onClick={()=>{handleChek(index)}} >
              {item.done && <AiFillCloseCircle className="close"/> }
              {!item.done && <AiFillCheckCircle className="check" /> }
            </div>

          </li>

        ))}


      </ul>

    </div>
  );
}

export default App;