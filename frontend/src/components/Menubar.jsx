import React from 'react'
import '../css/Menu.css'

const Menubar = () => {
  return (
   <>
   
   <div className='h-[90vh] w-[16.5vw] bg-gray-800 menubar'>

</div>

<div className="MobileMenubar">
  <div className="icon">
  <i class="fa-solid fa-house"></i>
  <h4 className='text-[12px] mt-1'>Home</h4>
  </div>

  <div className="icon">
  <i class="fa-solid fa-video"></i>
  <h4 className='text-[12px] mt-1'>Shorts</h4>
  </div>

  <div className="icon">
  <i class="fa-solid fa-plus    "></i>
  </div>

  <div className="icon">
  <i class="fa-solid fa-tv"></i>
  <h4 className='text-[12px] mt-1'>Subscriptions</h4>
  </div>

  <div className="icon">
  <i class="fa-solid fa-circle-user"></i>
  <h4 className='text-[12px] mt-1'>You</h4>
  </div>
</div>
   </>

    
  )
}

export default Menubar