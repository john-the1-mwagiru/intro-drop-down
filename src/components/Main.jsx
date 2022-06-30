

const Main = () => {
  return (
    <div className='main-cont'>
        
        <div className="cont-left">
           <div className="cont-left-wrapper">
             <h1> Make remote work</h1>
              <div className="bio">
                <p> Get your team in sync, no matter your location. Streamline processes, 
                  create team rituals, and watch productivity soar.
                </p>
                <button className="lrn">Learn more</button>
                 
                 <div className="sponsors">
                  
                    <img  src="./assets/images/client-databiz.svg" alt="databiz"/>
                    <img src="./assets/images/client-audiophile.svg" alt="audiophile"/>
                    <img src="./assets/images/client-maker.svg" alt="client-maker"/>
                    <img src="./assets/images/client-meet.svg"  alt="meet"/>
                  
                  </div>
               </div>
            </div>
         </div>
         <div className="cont-right">
             <div className="cont-right-wrapper">
                
                <img src="./assets/images/image-hero-desktop.png" alt="desktop" className="img-right"/>
             </div>
         </div>
    </div>
  )
}

export default Main
