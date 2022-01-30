import React from "react";

const Task = (props) => {

    return (
        <div>
            <span>+</span>
            <span>{props.task.text}</span>
            <span>-</span>
        </div>
    )
}

export default Task;