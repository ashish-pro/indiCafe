import React from 'react';
import './Main.css';

const Main = (props) => {  
  const {children,title,background,backdrop} = props
  // Condition to check background and load background image Directly
  let cssClass = "main";
  if(background){
    cssClass = "main-background";
  }
return (
    <div className={cssClass}>
        <div className={backdrop ? "backdrop container-fluid":"container-fluid"}>
          <h2 className='main-title' style={{color: backdrop ? "var(--primary-white)": "var(--primary-brick-red)"}}>{title}</h2>
          {children}
        </div>
    </div>
  )
}

export default Main