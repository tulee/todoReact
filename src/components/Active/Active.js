import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import SearchBar from "../SearchBar/SearchBar"
import ToDoItem from "../ToDoItem/ToDoItem"
import './Active.css';

export default function Active(){
    const {todos, setToDos} = useContext(ThemeContext)
    return(
        <div className="activeContainer">
            <SearchBar />
            <div className="toDoList">
                <ul>
                    {
                        todos
                        .filter(item => (item.state == "active"))
                        .map(item => <ToDoItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        state={item.state}
                                    ></ToDoItem>)
                    }
                </ul>
            </div>
        </div>
    )
}