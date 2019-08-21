import React from "react"
function Skills(props){
    const userText = props.userText;
    const listItems = userText.map((item) => {
        return (
            <div key={item.id} className="stamp-wrapper">
                <span className="stamp">{item.title}</span>
                <span>{item.text}</span>
            </div>
        )
    });
    return (
        <div>{listItems}</div>
    );
}
export default Skills