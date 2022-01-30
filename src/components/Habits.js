import React, {useState} from "react";
import Task from "./Task";

const Habits = () => {

    const [habits, setHabits] = useState([{text: "water the gnomes"}, {text: "plant seeds"}]);

    return (
        <div className="meow">
            {                
                habits.map((habit) => {
                    return <Task task={habit} key={habit.text}/>
                })
            }
        </div>
    )
}

export default Habits;