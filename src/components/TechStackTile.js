import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group';

function TechStackTile({logo, title}) {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <CSSTransition in={isFlipped} timeout={400} classNames="flip-tile">
      <div className="tile">
        <div className={`tile-face ${isFlipped ? 'back' : 'front'}`} onClick={handleClick}>
          {isFlipped ? <h5> {title} </h5> : <img src={logo} alt="Logo" />}
        </div>
      </div>
    </CSSTransition>
  )
}

export default TechStackTile