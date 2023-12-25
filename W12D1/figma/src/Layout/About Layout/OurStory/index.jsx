import OurStoryImage from './../../../images/OurStory.png'
import React from 'react'
import './index.scss'

function OurStory() {
   return (
      <section id='OurStory'>

         <div className="ourStoryContainer">
            <div className="ourStoryTextContainer">
               <div className="ourStoryTextBox">
                  <h1 >Our Story</h1>

                  <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

                  <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
               </div>
            </div>
            <div className="ourStoryImageBox">
               <img src={OurStoryImage} alt="OurStory" />
            </div>
         </div>

      </section>
   )
}

export default OurStory