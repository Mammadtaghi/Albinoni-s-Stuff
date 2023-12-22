import LoginRegister from "./../../../images/LoginRegister.png";
import React from 'react'
import "./index.scss";

function StaticPartLR({children}) {
  return (
    <section id='LR'>
        <div className="LRContainer">
            <div className="LRImgBox">
                <img src={LoginRegister} alt="" />
            </div>

            <div className="LRFormBox">
                {children}
            </div>
        </div>
    </section>
  )
}

export default StaticPartLR