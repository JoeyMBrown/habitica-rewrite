import React from "react";

const CharacterInfo = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <img src="" alt="pfp"></img>
            </div>
            <div>
                <div>{props.user.given_name}  @username * level 1</div>
                <div>HP</div>
                <div>EXP</div>
                <div>Mana</div>
            </div>
        </div>
    )
}

export default CharacterInfo;