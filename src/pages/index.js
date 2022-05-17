import React, { useState } from "react"
import reactDom from "react-dom"
import * as styles from "../styles/indexStyles"
import * as data from "../data/textData"
import { Footer } from "antd/lib/layout/layout";

const NUM_CARDS = 5;

const Card = (cardNum, onPress, onEnd) => {
  const [cardType, setCardType] = useState(data[cardNum].type);
  const [title, setTitle] = useState(data[cardNum].title);
  const [data, setData] = useState(data[cardNum].data);

  return (
    <div>
      <p>{title}</p>
      {cardType == "ultext" && 
        <ul>
          {data.map(t => <li>{t}</li>)}
        </ul>
      }
      {cardType == "ulobject" &&
        <ul>
          {data.map(o => {
            <div>
              <p>{o.title}</p>
              <p>{o.description}</p>
            </div>
          })}
        </ul>
      }
      {cardType == "text" &&
        data.map(t => <p>{t}</p>)
      }
      {cardNum == 0 && 
        <p>Click!</p>
      }
    </div>
  )
}

// markup
const IndexPage = () => {
  const [card, setCard] = useState(0);

  const cycleCard = () => {
    //add animation
    setCard((card+1)%NUM_CARDS);
    //if last card, expand to show all cards?
  }

  return (
    <main style={pageStyles}>
      <title>Ben Gant</title>
      <h1 style={headingStyles}>
        <p style={mainHeaderStyles}>🐯 Ben Gant</p>
        <br />
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <div style={cardStyle} onPress={cycleCard}>
        <Card />
      </div>

      <ul style={listStyles}>
        {/* {links.map(link => (
          <li key={link.url} style={{ ...styles.listItemStyles, color: link.color }}>
            <span>
              <a
                style={styles.linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={styles.badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={styles.descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))} */}
      </ul>
      <Footer />
    </main>
  )
}

export default IndexPage

// styles

const mainHeaderStyles = {
  fontSize: 60, 
  letterSpacing: 15,
  backgroundColor: "red",
}
const cardStyle = {
  borderRadius: 5,
  backgroundColor: "gray",
}
const pageStyles = {
  color: "#232129",
  //maxWidth: "80%",
  padding: "5% 25%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "goldenrod"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}