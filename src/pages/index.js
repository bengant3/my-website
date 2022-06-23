import React, { useEffect, useState } from "react"
import reactDom from "react-dom"
import * as styles from "../styles/indexStyles"
import data from "../data/textData"
import { Footer } from "antd/lib/layout/layout";
import Card from "../components/Card"
import CardFlipper from "../components/CardFlipper";
import ReactCardFlip from "../components/ReactCardFlip"
const NUM_CARDS = 5;

const IndexPage = () => {
  const [cardNum, setCard] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [expanded, toggleExpand] = useState(false);
  const [currCard, setCurrCard] = useState(data[cardNum] || {});
  
  const [flipped, flip] = useState(0);

  useEffect(() => {
    setCurrCard(data[cardNum]);
  }, [cardNum])

  useEffect(() => {
    if(clicked) {
      if(cardNum+1 >= NUM_CARDS) {
        setCard(0);
        toggleExpand(); 
        alert("Cards to unfold");
      } else {
        setCard(cardNum+1);
      }
    }
    setClicked(false);
  }, [clicked])

  //useEffect(() => {alert(data); alert(JSON.stringify(data[0]))}, [])

  return (
    <main style={pageStyles}>
      <title>Ben Gant</title>
      <h1 style={headingStyles}>
        <p style={mainHeaderStyles}>🐯 Ben Gant</p>
        <br />
      </h1>
      <div style={cardContainerStyle}>
        <ReactCardFlip 
          isFlipped={flipped} 
          flipDirection={"horizontal"}
          infinite
        >
          <Card
            click={() => flip(1)}
            card={data[0]}
          />
          <Card
            click={() => flip(2)}
            card={data[1]}
          />
          <Card
            click={() => flip(3)}
            card={data[2]}
          />
          <Card
            click={() => flip(4)}
            card={data[3]}
          />
          <Card
            click={() => flip(0)}
            card={data[4]}
          />
        </ReactCardFlip>
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
  display: "flex",
  flexDirection: "column",
}
const pageStyles = {
  backgroundColor: "papayaWhip",
  padding: "5% 25%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 10,
}