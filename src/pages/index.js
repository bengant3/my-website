import React, { useEffect, useState } from "react"
import reactDom from "react-dom"
import * as styles from "../styles/indexStyles"
import data from "../data/textData"
import { Footer } from "antd/lib/layout/layout";
import Card from "../components/card"

const NUM_CARDS = 5;

const IndexPage = () => {
  const [cardNum, setCard] = useState(0);
  const [expanded, toggleExpand] = useState(false);

  useEffect(() => {
    if(cardNum >= NUM_CARDS) {
      setCard(0);
      toggleExpand(); 
      alert("Cards to unfold");
    }
  }, [cardNum])

  //useEffect(() => {alert(data); alert(JSON.stringify(data[0]))}, [])

  return (
    <main style={pageStyles}>
      <title>Ben Gant</title>
      <h1 style={headingStyles}>
        <p style={mainHeaderStyles}>🐯 Ben Gant</p>
        <br />
      </h1>
      <p>{cardNum}</p>
      <div style={cardContainerStyle}>
        <Card 
          click={() => {
            setCard(cardNum+1);
            alert("Card clicked");
          }}
          cardType={data[cardNum].type}
          cardTitle={data[cardNum].title}
          cardData={(() => {alert(data[cardNum].data);return data[cardNum].data;})}
          />
          {expanded &&
            (() => {let a = Array(NUM_CARDS); a.shift(); return a}).map(num => {
              <Card
                data={data[num]}
                />
            }
          )}
      </div>
    </main>
  )
}

export default IndexPage

// styles

const mainHeaderStyles = {
  fontSize: 60, 
  letterSpacing: 15,
  color: "indianred",
  fontFamily: "Trebuchet MS, sans-serif",
}
const cardContainerStyle = {
  flex: 1,
}
const pageStyles = {
  backgroundColor: "papayaWhip",
  padding: "5% 25%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}