import React from "react";
import styles from "./MenuBar.module.css"
import ThemeButton from "./ThemeButton/ThemeButton";

export default function MenuBar(props){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.menuOption}>Menu</div>
            <div className={styles.menuOption}>Add</div>
            <div className={styles.menuOption}><ThemeButton changeTheme = {props.changeTheme}/></div>
        </div>
    )
}