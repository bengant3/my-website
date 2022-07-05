import React, { useEffect, useState } from "react"

const Card = ({card, click}) => {
    const [type, setType] = useState(card.type);
    const [title, setTitle] = useState(card.title);
    const [data, setData] = useState(card.data);

    const generateObjectList = data => {
        let arr = [];
        for (let i = 0; i/2 < data.length; i += 2) {
            //using index instead of for/of so that title is always guaranteed before desc
            arr[i] = <dt style={{...styles.text, color: "indianred"}}>{data[i/2].title}</dt>;
            arr[i+1] = <dd style={styles.text}>{"\t"+data[i/2].description}</dd>;
        }
        return arr;
    }

    return (
        <div 
            style={styles.card} 
            onClick={() => click()} 
            onKeyDown={ev => {if(ev.key === " " || ev.key === "Enter") click();}}
            role="button"
        >
            <p style={styles.title}>{title}</p>
            {type === "ultext" && 
                <ul>
                    {data.map(t => <li style={styles.text}>{t}</li>)}
                </ul>
            }
            {type === "ulobject" &&
                <dl style={styles.objectList}>
                    {generateObjectList(data)}
                </dl>
            }
            {type === "ullink" &&
                <ul style= {styles.linkList}>
                    {data.map(o => 
                        <li style={styles.text}>
                            <a
                                style={styles.link} 
                                href={o.link} 
                                target="_blank" 
                                onClick={e => {
                                    e.stopPropagation()
                                }}
                            >
                                {o.title}
                            </a>
                            {o.description}
                        </li>
                    )}
                </ul>            
            }
            {type === "text" &&
                <ul style={{listStyleType: "emoji-list"}}>
                    {data.map(t => <li style={{...styles.text, marginBottom: 20}}>{t}</li>)}
                </ul>
                
            }
        </div>
    )
}

export default Card;

const styles = {
    card: {
        borderRadius: 25,
        backgroundColor: "navajoWhite",
        fontFamily: "Trebuchet MS, sans-serif",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        height: 320,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "maroon",
    },
    text: {
        fontSize: 15,
        color: "maroon",
    },
    link: {
        color: "#36747D",
    },
    linkList: {
        listStyleType: "none", 
        paddingLeft: 40,
        textIndent: -40,
    },
    objectList: {
        listStyleType: "circle",
    },
    button: {
        backgroundColor: "indianred",
        border: "none",
        marginRight: 15,
        marginBottom: 15,
        color: "navajowhite"
    },
}