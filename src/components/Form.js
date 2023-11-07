import React, { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';
import  './Form.css'

export default function Form() {

    const [dataArr,setDataArr]=useState([
        {txt:'React',id:uuidv4(),completed:false},
        {txt:'Figma',id:uuidv4(),completed:false},
        {txt:'Sport',id:uuidv4(),completed:false}
        ])

    const [valtxt,setvaltxt]=useState('');

const modifytext=(e)=>{

setvaltxt(e.target.value);
console.log(valtxt);

}

const addTodo = e => {        
    e.preventDefault(); 

    
    const newArr = [...dataArr]      
    const newTodo = {};       
    newTodo.txt = valtxt;    
    newTodo.id = uuidv4();       
    newArr.push(newTodo);    
    setDataArr(newArr);       
    setvaltxt('')    ;
}

const deleteelement=id=>{

    let  newArr = [...dataArr]
    newArr=newArr.filter(element=>{
    return element.id!=id;
    })
 setDataArr(newArr);
    }


    const toggleTodo = (id) => {
        const newArr = dataArr.map((item) => {
            if (item.id === id) {
                return {...item, completed: !item.completed };
            }
            return item;
        });
        setDataArr(newArr);
    }
    return (
    
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6 w-100">
<form onSubmit={e => addTodo(e)} className="mb-3">
<label className="form-label mt-3 d-block display-5">Things To do </label>
<input type="text" className="todo-input form-control" id="todo" value={valtxt} onChange={(e)=>modifytext(e)} />
<button className="todo-btn">Envoyer</button>
    </form>



    <ul>
     {
     dataArr.map(element => {
      return <Item completed={element.completed} txt={element.txt} key={element.id}  toggleTodo={() => toggleTodo(element.id)}  delFunc={()=>deleteelement(element.id)}  />
     })
     
     }
     </ul>

</div>
    );
    
}