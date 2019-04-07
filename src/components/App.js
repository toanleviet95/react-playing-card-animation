import React from 'react';
import Deck from './Deck';

const App = () => {
    return <div className="playingCards rotateHand"
    style={{height: '100vh', display: ' flex', alignItems: 'center', justifyContent: 'center'}}
    >
        <Deck 
          // degreeAnimated={{count: 52, deg: 360}}
          // shuffleAnimated={{count: 4}}
          // drawAnimated={{count: 14}}
        />
    </div>;
}

export default App;