import React, { useEffect, useState } from "react"
import reactDom from "react-dom"
//import * as styles from "../styles/indexStyles"
import data from "../data/textData"
import { Footer } from "antd/lib/layout/layout";
import Card from "../components/Card"
import CardFlipper from "../components/CardFlipper";
import ReactCardFlip from "../components/ReactCardFlip"
const NUM_CARDS = 5;

const IndexPage = () => {
  const [hint, showHint] = useState(true);
  const [initial, setInitial] = useState(true);
  const [currCard, flip] = useState(0);
  //const [expanded, toggleExpand] = useState(false);

  const handleClick = num => {
    setInitial(false);
    showHint(false);
    flip(num);
  }

  return (
    <main style={styles.page}>
      <title>Ben Gant</title>
      <h1 style={styles.mainHeader}>
        🐯 Ben Gant
      </h1>
      <div style={styles.linksContainer}>
        <a style={styles.link} href="https://www.linkedin.com/in/bengant/" target="_blank">LinkedIn</a>
        <b style={styles.linkDivider}>|</b>
        <a style={styles.link} href="https://github.com/bengant3" target="_blank">Github</a>
        <b style={styles.linkDivider}>|</b>
        <a style={styles.link} href="mailto:bengasetClickedflipnt3@gmail.com" target="_blank">bengant3@gmail.com</a>
      </div>
      <p>{currCard}</p>
      {hint && 
        <p style={styles.hint}>Click the cards to learn more about me</p>
      }
      <div style={styles.cardContainer}>
        <ReactCardFlip 
          isFlipped={currCard} 
          flipDirection={"horizontal"}
          expand
        >
          <Card
            click={() => handleClick(1)}
            card={data[0]}
          />
          <Card
            click={() => handleClick(2)}
            card={data[1]}
          />
          <Card
            click={() => handleClick(3)}
            card={data[2]}
          />
          <Card
            click={() => handleClick(4)}
            card={data[3]}
          />
          <Card
            click={() => handleClick(0)}
            card={data[4]}
          />
        </ReactCardFlip>
      </div>
    </main>
  )
}

export default IndexPage

// styles

const styles = {
  mainHeader: {
    fontSize: 44, 
    fontWeight: 800,
    letterSpacing: "1.5vw",
    color: "maroon",
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 20,
  },
  cardContainer: {
    height: 300,
  },
  page: {
    backgroundColor: "papayaWhip",
    padding: "5% 25%",
  },
  linksContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    margin: 20,
  },
  link: {
    color: "#36747D",
    fontSize: 16,
    fontWeight: 600,
    marginRight: 15,
  },
  linkDivider: {
    color: "indianred",
    marginRight: 15,
  },
  hint: {
    position: "absolute",
    color: "indianred",
    fontSize: 12,
    fontWeight: 400,
    marginTop: 290,
    marginLeft: 30,
    zIndex: 5,
  },
}