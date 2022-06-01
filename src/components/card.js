import React, { useEffect, useState } from "react"

const Card = (click, cardType, cardTitle, cardData) => {
    const [type, setType] = useState(cardType);
    const [title, setTitle] = useState(cardTitle);
    const [data, setData] = useState(cardData);

    const color = (event, col) => {
        event.target.style.backgroundColor = col;
    }

    //useEffect(() => {alert("click = "+JSON.stringify(click)+"\ncdata = "+typeof(cardData))}, [])

    return (
        <div style={cardStyle} onClick={() => click()}>
            <p style={titleStyle}>{title}</p>
            <p>Helloooo from card</p>
            {type == "ultext" && 
                <ul>
                {data.map(t => <li>{t}</li>)}
                </ul>
            }
            {type == "ulobject" &&
                <ul>
                {data.map(o => {
                    <div>
                    <p>{o.title}</p>
                    <p>{o.description}</p>
                    </div>
                })}
                </ul>
            }
            {type == "text" &&
                data.map(t => <p>{t}</p>)
            }
            <button 
                style={buttonStyle}
                onMouseEnter={event => {event.target.style.backgroundColor = "lightblue";}}
                onMouseLeave={event => {event.target.style.backgroundColor = "indianred";}}>
                    Click me
            </button>
        </div>
    )
}

export default Card;

const cardStyle = {
    borderRadius: 15,
    backgroundColor: "navajoWhite",
    fontFamily: "Trebuchet MS, sans-serif",
    padding: 25,
}
const titleStyle = {
    fontSize: 24,
}
const textStyle = {

}
const objectTitleStyle = {

}
const buttonStyle = {
    backgroundColor: "indianred",
    border: "none",
    marginRight: 15,
    marginBottom: 15,
}

//Icon attricution
//<a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Roundicons - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>