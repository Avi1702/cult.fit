import React from 'react'
import "./Fintess.css"
import FreeTrial from './Slider/FreeTrial'
const Fintess = () => {
  return (
    <>
        <div className="container">
            <div id='tag' className="tag">
             
             <div className='price_main'>
             <div className='try'>try for free</div>
              
              <div className='cultpass_main'>
                 
                  <div className='cultpass'>
                    <h2>cultpass</h2>
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="" />
                    <h3>Starting at $1042/month</h3>
                  </div>

                  <div className='cultpass'>
                    <h2>cultpass</h2>
                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" alt="" />
                    <h3>Starting at $678/month</h3>
                  </div>

                  <div className='cultpass'>
                    <h2>cultpass</h2>
                    <img src=" https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png" alt="" />
                    <h3>Starting at $117/month</h3>
                  </div>
              </div>
             </div>
              
            </div>
           
            <img id='img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,ar_1.67,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/60446bae-890d-407b-b7b5-9896cc60b372.png" alt="" />   
        
        </div>

        <div>
          slider
        </div>
{/* near center */}
        <div className='center_near_flex'>
            <div className='center_near'>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_540,ar_1.77,c_fit/dpr_2/image/diy/b9d18552-d333-4efa-af24-91d6da55f338" alt="" />
              <div className='near_info'>
                <div>
                    <h1>CUIT LOKHANDWALA</h1>
                    <p>lokhandawala Group Classs</p>
                </div>
                <h3>TRY FOR FREE</h3>
              </div>
            </div>


            <div className='center_near'>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,ar_1.77,q_auto:eco,dpr_1,f_auto,fl_progressive//image/diy/8fa604cb-d187-4871-99a8-25a32294b0ab" alt="" />
              <div className='near_info'>
                <div>
                    <h1>MORE LOKHANDWALA</h1>
                    <p>lokhandawala Group Classs</p>
                </div>
                <h3>SEE MORE</h3>
              </div>
            </div>
        </div>

        {/* free trial */}
        <FreeTrial/>
  
  
    </>
  )
}

export default Fintess