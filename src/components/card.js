import React, { useEffect, useState } from "react"

const Card = ({card, click}) => {
    const [type, setType] = useState(card.type);
    const [title, setTitle] = useState(card.title);
    const [data, setData] = useState(card.data);

    const color = (event, col) => {
        event.target.style.backgroundColor = col;
    }

    //useEffect(() => {alert("cdata = "+JSON.stringify(card.data))}, [])

    return (
        <div 
            style={cardStyle} 
            onClick={() => click()} 
            onKeyDown={ev => {if(ev.key === " " || ev.key === "Enter") click();}}
            role="button">
            <p style={titleStyle}>{title}</p>
            {type === "ultext" && 
                <ul>
                {data.map(t => <li style={textStyle}>{t}</li>)}
                </ul>
            }
            {type === "ulobject" &&
                <ul>
                {data.map(o => {
                    <div>
                    <p style={objectTitleStyle}>{o.title}</p>
                    <p style={textStyle}>{o.description}</p>
                    </div>
                })}
                </ul>
            }
            {type === "text" &&
                data.map(t => <p style={textStyle}>{t}</p>)
            }
            <button 
                style={buttonStyle}
                onMouseEnter={event => {event.target.style.backgroundColor = "lightblue";}}
                onMouseLeave={event => {event.target.style.backgroundColor = "indianred";}}>
                    {"Click me"}
            </button>
        </div>
    )
}

export default Card;

const cardStyle = {
    borderRadius: 25,
    backgroundColor: "navajoWhite",
    fontFamily: "Trebuchet MS, sans-serif",
    padding: 20,
    height: 300,
}
const titleStyle = {
    fontSize: 24,
    color: "maroon"
}
const textStyle = {
    color: "#520000"
}
const objectTitleStyle = {

}
const buttonStyle = {
    backgroundColor: "indianred",
    border: "none",
    marginRight: 15,
    marginBottom: 15,
    color: "navajowhite"
}

//Icon attricution
//<a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Roundicons - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>