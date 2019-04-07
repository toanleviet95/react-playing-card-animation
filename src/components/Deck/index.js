import React from 'react';
import PropTypes from 'prop-types';
import StackCards from '../StackCards';

const Deck = (props) => {
  let params = {...props};
  if (props.degreeAnimated || props.shuffleAnimated || props.drawAnimated) {
    params.stacked = false;
  }

  return <StackCards {...params} />
}

Deck.propTypes = {
  stacked: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  degreeAnimated: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  shuffleAnimated: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  drawAnimated: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

Deck.defaultProps = {
  stacked: { count: 4, margin: 2 },
  degreeAnimated: false, // { count: 52, deg: 360 },
  shuffleAnimated: false, // { count: 4 },
  drawAnimated: false // { count: 14 }
}

export default Deck
