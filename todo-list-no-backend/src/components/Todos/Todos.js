import styles from "./Todos.module.css";
import Todo from "./Todo/Todo"

export default function Todos(props){
            console.log(props)
    return(
        <div className={styles.mainContainer}>
            {props.todos.map(p => <Todo key={p.id} todo={p} onDone = {props.onDone} onDelete={props.onDelete}/>)}
        </div>
    )
}