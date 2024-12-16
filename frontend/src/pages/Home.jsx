import React from 'react'
import '../css/Home.css'


const Home = () => {
  return (
    <div className='mx-[17.7vw] h-[90vh] overflow-auto w-[80vw] p-3 flex flex-wrap gap-5 homecontainer '>
      <div className="vdeoitem mx-2">
        <div className="video relative">
          <img  src="https://i.ytimg.com/vi/5_tcuXADykU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBpg87sSLWzKxLR227b_dTAwNFIhQ" alt="" />
          <h4 className='absolute right-0 bottom-0 p-2 text-[12px] font-semibold'>20:00</h4>
        </div>
        <div className="userinfo mt-1">
          <div className="videoTitle flex items-center">
            <img  src="https://i.ytimg.com/vi/5_tcuXADykU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBpg87sSLWzKxLR227b_dTAwNFIhQ" alt="" />
            <h4 className='p-1 mx-2 font-semibold text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          </div>
          <div className="channelinfo">
            <h4 className='px-5 mx-7 text-[14px] font-semibold text-[#AAAA9B]'>Code with Harry</h4>
            <div className="videoDetails flex items-center mx-7">
              <h4 className='px-5 text-[13px] text-[#AAAA9B] '>71K Views</h4>
              <h4 className='text-[13px] text-[#AAAA9B] '>. 15 Days Ago</h4>
            </div>
          </div>
        </div>
      </div>
  


      
    </div>
  )
}

export default Home