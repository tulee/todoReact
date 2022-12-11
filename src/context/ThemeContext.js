import { createContext, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeContextProvider(props){
    const [lastedId, setLastedId] = useState(3)
    const [todos, setToDos] = useState([
        {
            id:1,
            name:"Read book",
            state:"active"
        },
        {
            id:2,
            name:"Learn React",
            state:"active"
        },
        {
            id:3,
            name:"Final Test",
            state:"completed"
        }
    ])

    return (
        <ThemeContext.Provider value={{todos, setToDos,lastedId, setLastedId}}>
            {props.children}
        </ThemeContext.Provider> 
    )
}