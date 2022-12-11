import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './ToDoItem.css';

export default function ToDoItem(props){
    const {todos, setToDos} = useContext(ThemeContext)
    const [isChecked, setIsChecked] = useState(props.state == "completed"?true:false)

    function handleDelete(){
        const newToDoList = todos.map(item =>{
            if(item.id == props.id){
                return{...item,state:"deleted"}
            }
            return item
        })

        setToDos(newToDoList)
    }

    function handlleCheckbox(){
        if(props.state == "active"){
            const newToDoList = todos.map(item =>{
                if(item.id == props.id){
                    return{...item,state:"completed"}
                }
                return item
            }) 
            setToDos(newToDoList)   
        }else{
            const newToDoList = todos.map(item =>{
                if(item.id == props.id){
                    return{...item,state:"active"}
                }
                return item
            }) 
            setToDos(newToDoList)
        }
        
        setIsChecked(!isChecked)
    }

    return(
        <li className="itemToDo">
            <input type={"checkbox"} onChange={handlleCheckbox} checked={isChecked} />
            <div>{props.name}</div>
            <i className="fa fa-trash-o" onClick={handleDelete}></i>
        </li>
    )
}