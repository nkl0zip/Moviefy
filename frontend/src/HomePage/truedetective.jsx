import React from 'react'
import './truedetective.css'

const Truedetective = () => {
  return (
    <div className='home-page-body'>
        <div className='text-message-first'>
            EXPLORE  A  WORLD WHERE  GAMES  
        </div>
        <div className='text-message-second'> 
            AREN’T JUST  FOR<br></br> FUN... THEY ARE  FOR  <br></br>
            <span>SURVIVAL!</span>
        </div>
       <div className='character-title'>
        <img className='character' src="/src/images/truedetectivecharacter.png" alt="" />
        <img className='title' src='/src/images/truedetectivetitle.png'></img>
       </div>
      
    </div>
  )
}

export default Truedetective