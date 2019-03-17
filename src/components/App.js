import React from 'react';
import StackCards from './StackCards';

const App = () => {
    return <div className="playingCards rotateHand" style={{height: '100vh', display: ' flex', alignItems: 'center', justifyContent: 'center'}}>
        <StackCards 
            // stacked={{count: 52, margin: 2}}
            // degreeAnimated={{count: 52, deg: 360}}
            // shuffleAnimated={{count: 4}}
            drawAnimated={{count: 14}}
        />
    </div>;
}

export default App;