import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

const CardFlipper = (props) => {
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

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(props.isFlipped);
      setRotation((c) => c + 180);
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

  const styles = {
    back: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'relative' : 'absolute',
      top: '0',
      transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
      transformStyle: 'preserve-3d',
      transition: `${flipSpeedFrontToBack}s`,
      width: '100%',
      ...back,
    },
    front: {
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        height: '100%',
        left: '0',
        position: isFlipped ? 'absolute' : 'relative',
        top: '0',
        transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
        transformStyle: 'preserve-3d',
        transition: `${flipSpeedBackToFront}s`,
        width: '100%',
        zIndex: '2',
        ...front,
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
            {props.children.map((c, index) => {(
                <div className="" style={styles.front}>
                    {getComponent(index)}
                </div>
            )})}
      </div>
    </div>
  );
};

CardFlipper.defaultProps = {
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

export default CardFlipper;

/**
 * Modified from https://www.npmjs.com/package/react-card-flip
 */