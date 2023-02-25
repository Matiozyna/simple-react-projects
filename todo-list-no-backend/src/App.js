import "./App.css"
import MenuBar from "./components/MenuBar/MenuBar";
import Todos from "./components/Todos/Todos";
import {useState} from "react";
function App() {


    const [todos, setTodos] = useState([
        {id: 1, description: "Do something", done:false},
        {id: 2, description: "Eat", done:false},
        {id: 3, description: "Drink", done:false},
        {id: 4, description: "Sleep", done:false},
        {id: 5, description: "Running",done:false },
        {id: 6, description: "Do something again", done:false}
    ]);

    const [theme, setTheme] = useState("white");

    const changeTheme = () => {
        theme === "white" ? setTheme("black") : setTheme("white");
        console.log(theme);
    }
    const deleteHandler = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    }

    const markDoneHandler = (id) => {
        setTodos(todos.map(t => {
            if(t.id === id){
                t.done=true;
            }
            return t;
        }));
    }

  return (
    <div className="App">
        <MenuBar changeTheme = {changeTheme}/>
        <Todos onDone={markDoneHandler} onDelete={deleteHandler} todos={todos}/>
    </div>
  );
}

export default App;
