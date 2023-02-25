import styles from "./Todo.module.css"
export default function Todo(props){

    return(
        <div className={styles.todoContainer + " "+(props.todo.done ? styles.done: "")}>
            <p>{props.todo.description}</p>
            <div className={styles.buttons}>
                <button className={styles.finishButton} onClick={()=>props.onDone(props.todo.id)}>Finish</button>
                <button className={styles.deleteButton} onClick={()=>props.onDelete(props.todo.id)}>Delete</button>
            </div>
        </div>
    )
}