import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './SearchBar.css';

export default function SearchBar(){
    const {todos, setToDos,lastedId, setLastedId} = useContext(ThemeContext)
    const [newToDo, setNewToDo] = useState('')

    function handleInputToDo(e){
        setNewToDo(e.target.value)
    }

    function handleAddToDo(){
        let newToDoList = todos
        newToDoList.push({
            id:lastedId + 1,
            name:newToDo,
            state:"active"
        })
        setNewToDo('')
        setLastedId(lastedId+1)
    }
    return(
        <div className="searchBar">
            <input className="searchInput" type={"text"} value={newToDo} placeholder="add details" onChange={handleInputToDo}/>
            <button onClick={handleAddToDo}>Add</button>
        </div>
    )
}