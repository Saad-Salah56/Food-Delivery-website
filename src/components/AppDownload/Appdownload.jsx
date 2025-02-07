import React from 'react'          //This line imports React from the 'react' library.
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {                         //This defines a functional component named Appdownload.
  return (                                           //Whatever is written inside this return will be rendered on the screen when this component is used.
    <div className='app-download' id='app-download'>
      <p>For Better Exprience Download <br /> Esay Food App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />                  
        <img src={assets.app_store} alt="" />
      </div>                                            
    </div>
  )
}                                                           //The src attribute points to the images, which are being accessed from the assets object.
                                                            //The alt attribute is empty, but it's typically used to provide alternative text in case the image fails to load or for accessibility purposes.

export default Appdownload                      //making it available for import and use in other parts of the application.
