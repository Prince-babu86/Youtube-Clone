import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=''>
        <div className="left-nav flex items-center mx-2">
        <i class="fa-solid fa-bars  mx-2"></i>
        <img src="https://www.gstatic.com/youtube/img/promos/growth/7ca1e2516034f9edcdbe30fa11a61f120645479ac2318782d45eac26a8b70bb8_122x56.webp" alt="" />
        </div>


        <div className="center-nav flex">
          <div className="search">
            <form action="">
              <input type="text" placeholder='Search' />
            </form>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>


        <div className="bottom-nav">
         <div className="create bg-[#3F3F3F] p-2 ">
         <i class="fa-solid fa-plus mx-2"></i>
         <button className='mr-2'>Create</button>
         </div>
         <i class="fa-regular fa-bell"></i>
         <button className='signin p-2 bg-slate-950 '>Sign in</button>
        </div>

        <div className="mobileView">
        <i class="fa-solid fa-tv"></i>
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-magnifying-glass"></i>


        </div>
      </nav>
    </div>
  )
}

export default Navbar