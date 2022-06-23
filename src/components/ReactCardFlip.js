import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
//import data from '../data/textData';

//import { ReactFlipCardProps } from '../types/index';

const ReactCardFlip = (props) => {
  const {
    cardStyles: {
      back,
      front,
    },
    cardZIndex,
    containerStyle,
    containerClassName,
    flipDirection,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,
    infinite,
  } = props;

  const [isFlipped, setFlipped] = useState(props.isFlipped);
  const [rotation, setRotation] = useState(0);
  const [rotations, setRotations] = useState([]);

  const num = props.children.length;

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < num; ++i) arr.push(-180);
    arr[0] = 0;
    setRotations(arr);
  }, []);

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(props.isFlipped);
      setRotation((c) => c + 180);

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
    // if (props.children.length !== 2) {
    //   throw new Error(
    //     'Component ReactCardFlip requires 2 children to function',
    //   );
    // }
    return props.children[key];
  };

  const frontRotateY = `rotateY(${
    infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
  const backRotateY = `rotateY(${
    infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;
  const frontRotateX = `rotateX(${
    infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
  const backRotateX = `rotateX(${
    infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;

  let cardStyleTemplate = {
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    height: '100%',
    left: '0',
    top: '0',
    transformStyle: 'preserve-3d',
    transition: `${flipSpeedFrontToBack}s`,
    width: '100%',
  }

  const styles = {
    back: {
      position: 'absolute',
      transform: `rotateY(${rotations[2]}deg)`,
      zIndex: isFlipped == 2 ? '2' : '1',
      ...cardStyleTemplate,
      //...back,

      //absolute = zindex wins

    },
    middle: {
      position: 'absolute',
      transform: `rotateY(${rotations[1]}deg)`,
      zIndex: isFlipped == 1 ? '2' : '1',
      ...cardStyleTemplate,
      //...middle,
    },
    front: {
      position: 'absolute',
      transform: `rotateY(${rotations[0]}deg)`,
      zIndex: isFlipped == 0 ? '2' : '1',
      ...cardStyleTemplate,
      //...front,
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
        <div className="react-card-front" style={styles.front}>
          {getComponent(0)}
        </div>

        <div className="react-card-middle" style={styles.middle}>
          {getComponent(1)}
        </div>

        <div className="react-card-back" style={styles.back}>
          {getComponent(2)}
        </div>
      </div>
    </div>
  );
};

ReactCardFlip.defaultProps = {
  cardStyles: {
    back: {},
    front: {},
  },
  cardZIndex: 'auto',
  containerStyle: {},
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false,
};

export default ReactCardFlip;