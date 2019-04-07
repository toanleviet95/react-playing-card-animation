import React from 'react'
import Card from '../Card';
import PropTypes from 'prop-types';

import './styles.scss';

const StackCards = ({ stacked, degreeAnimated, shuffleAnimated, drawAnimated }) => {

  const renderStack = () => {
    let element = [];
    if (stacked) {
      let left = 0;
      let step = stacked.margin;
      for (let i = 0; i < stacked.count; i++) {
        element = [...element, <Card isBack style={{ zIndex: i, marginLeft: `${left * 1}px`, marginTop: 0, boxShadow: 'none' }} key={i} />];
        left = left + step;
      }
    } else if (degreeAnimated) {
      let step = degreeAnimated.deg/degreeAnimated.count;
      let angle = 0;
      for (let i = 0; i < degreeAnimated.count; i++) {
        element = [...element, <Card number={7} type='spades' suit={<span className="suit">&spades;</span>} style={{ transform: `rotate(${angle * 1}deg)`, boxShadow: 'none', transformOrigin: '20% 80%' }} key={i} />];
        angle += step;
      }
    } else if (shuffleAnimated) {
      for (let i = 0; i < shuffleAnimated.count; i++) {
        if (i % 2 === 0) {
          element = [
            ...element,
            <Card key={i} isBack shuffle='even' />
          ];
        } else {
          element = [
            ...element,
            <Card key={i} isBack shuffle='odd' />
          ];
        }
      }
    } else if (drawAnimated) {
      let left = 0;
      let step = 10;
      for (let i = 1; i <= drawAnimated.count; i++) {
        element = [
          ...element,
          <Card key={i} drawAnimated={`direction-${i}`} />
        ];
        left = left + step;
      }
    }
    return element;
  }

  return <React.Fragment>
    {renderStack()}
    {/* <ul className="hand">
      <li>
        <Card number={7} type='spades' suit={<span className="suit">&spades;</span>} />
      </li>
      <li>
      <Card number={7} type='spades' suit={<span className="suit">&spades;</span>} />

      </li>
      <li>
      <Card number={7} type='spades' suit={<span className="suit">&spades;</span>} />

      </li>
    </ul> */}
  </React.Fragment>
}


StackCards.propTypes = {
  stacked: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  degreeAnimated: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  shuffleAnimated: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  drawAnimated: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

StackCards.defaultProps = {
  stacked: { count: 4, margin: 2 },
  degreeAnimated: false, // { count: 52, deg: 360 },
  shuffleAnimated: false, // { count: 4 },
  drawAnimated: false // { count: 14 }
}

export default StackCards
