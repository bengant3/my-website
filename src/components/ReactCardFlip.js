import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

const NUM_CARDS = 5;

const ReactCardFlip = (props) => {
  const {
    // cardStyles: {
    //   back,
    //   front,
    // },
    cardZIndex,
    containerStyle,
    containerClassName,
    flipDirection,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,
    infinite,
  } = props;

  const [isFlipped, setFlipped] = useState(props.isFlipped);
  const [rotations, setRotations] = useState([]);

  const num = props.children.length;

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < num; ++i) {
      arr.push(-180);
      styles[`card${i}`] = {
        transform: `rotateY(${rotations[i]}deg)`,
        zIndex: isFlipped == i ? '2' : '1',
        ...cardStyleTemplate,
      }
    }
    arr[0] = 0;
    setRotations(arr);
  }, []);

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(props.isFlipped);

      let arr = rotations;
      arr[props.isFlipped] += 180;
      arr[(props.isFlipped + num - 1)%num] += 180;
      setRotations(arr);
    }
  }, [props.isFlipped]);

  const getContainerClassName = useMemo(() => {
    let className = 'react-card-flip';
    if (containerClassName) {
      className += ` ${containerClassName}`;
    }
    return className;
  }, [containerClassName]);

  const getComponent = (key) => {
    return props.children[key];
  };

  let cardStyleTemplate = {
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    height: '100%',
    left: '0',
    top: '0',
    transformStyle: 'preserve-3d',
    transition: `${flipSpeedFrontToBack}s`,
    width: '100%',
    position: 'absolute',
  }

  const styles = {
    //cardStyles: cs,
    one: {
      transform: `rotateY(${rotations[0]}deg)`,
      zIndex: isFlipped == 0 ? '2' : '1',
      ...cardStyleTemplate,
    },
    two: {
      transform: `rotateY(${rotations[1]}deg)`,
      zIndex: isFlipped == 1 ? '2' : '1',
      ...cardStyleTemplate,
    },
    three: {
      transform: `rotateY(${rotations[2]}deg)`,
      zIndex: isFlipped == 2 ? '2' : '1',
      ...cardStyleTemplate,
    },
    four: {
      transform: `rotateY(${rotations[3]}deg)`,
      zIndex: isFlipped == 3 ? '2' : '1',
      ...cardStyleTemplate,
    },
    five: {
      transform: `rotateY(${rotations[4]}deg)`,
      zIndex: isFlipped == 4 ? '2' : '1',
      ...cardStyleTemplate,
    },
    container: {
      perspective: '1000px',
      zIndex: `${cardZIndex}`,
    },
    flipper: {
      height: '100%',
      position: 'relative',
      width: '100%',
    },
  };

  return (
    <div
      className={getContainerClassName}
      style={{ ...styles.container, ...containerStyle }}
    >
      <div className="react-card-flipper" style={styles.flipper}>
        <div style={styles.one}>
          {getComponent(0)}
        </div>
        <div style={styles.two}>
          {getComponent(1)}
        </div>
        <div style={styles.three}>
          {getComponent(2)}
        </div>
        <div style={styles.four}>
          {getComponent(3)}
        </div>
        <div style={styles.five}>
          {getComponent(4)}
        </div>
      </div>
    </div>
  );
};

ReactCardFlip.defaultProps = {
  // cardStyles: {
  //   back: {},
  //   front: {},
  // },
  cardZIndex: 'auto',
  containerStyle: {},
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false,
};

export default ReactCardFlip;