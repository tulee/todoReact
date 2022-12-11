import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import SearchBar from "../SearchBar/SearchBar"
import ToDoItem from "../ToDoItem/ToDoItem"
import './All.css';

export default function All(){
    const {todos, setToDos} = useContext(ThemeContext)
    return(
        <div className="allContainer">
            <SearchBar />
            <div className="toDoList">
                <ul>
                    {
                        todos
                        .filter(item => (item.state !== "deleted"))
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