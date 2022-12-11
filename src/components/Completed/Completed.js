import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import ToDoItem from "../ToDoItem/ToDoItem"
import './Completed.css';

export default function Completed(){
    const {todos, setToDos} = useContext(ThemeContext)
    function handleDeleteAll(){
        const newTodos = todos
                    .map(item => {
                        if(item.state == "completed"){
                            return{...item,state:"deleted"}
                        }
                        return item
                    })

        setToDos(newTodos)
    }
    
    return(
        <div className="completedContainer">
            <div className="toDoList">
                <ul>
                    {
                        todos
                        .filter(item => (item.state == "completed"))
                        .map(item => <ToDoItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        state={item.state}
                                    ></ToDoItem>)
                    }
                </ul>
            </div>
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}