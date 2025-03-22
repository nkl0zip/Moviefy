import React from 'react'
import './deadpool.css'

const Deadpool = () => {
  return (
    <div className='home-page-body-deadpool'>
        <div className='text-message-first'>
            EXPLORE  A  WORLD WHERE  GAMES  
        </div>
        <div className='text-message-second'> 
            AREN’T JUST  FOR<br></br> FUN... THEY ARE  FOR  <br></br>
            <span>SURVIVAL!</span>
        </div>
       <div className='character-title'>
        <img className='character' src="/src/images/deadpoolcharacter.png" alt="" />
        <img className='title' src='/src/images/deadpooltitle.png'></img>
       </div>
      
    </div>
  )
}

export default Deadpool