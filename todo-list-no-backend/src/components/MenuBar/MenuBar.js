import React from "react";
import styles from "./MenuBar.module.css"

export default function MenuBar(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.menuOption}>Menu</div>
            <div className={styles.menuOption}>Add</div>
            <div className={styles.menuOption}>Account</div>
        </div>
    )
}