import React, { useState } from 'react';
import './styles.scss';

const Card = ({ style, number, type, suit, isBack, shuffle, drawAnimated }) => {
	const [back, setBack] = useState(isBack || false);

	const handleFlip = () => {
		setBack(!back);
	}
	return (
		drawAnimated ? <div className={`card back ${drawAnimated}`} style={style}>*</div> :
		shuffle ? <div className={`card back ${shuffle === 'odd' ? 'shuffleOdd' : 'shuffleEven'}`} style={style}>*</div> :
		back ? <div onClick={handleFlip} className="card back" style={style}>*</div> : 
		<div onClick={handleFlip} className={`card rank-${number} ${type}`} style={style}>
			<span className="rank">{number}</span>
			{suit}
		</div>)
}

export default Card;
