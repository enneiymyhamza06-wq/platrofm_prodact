import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPaintBrush, faBolt, faAtom } from '@fortawesome/free-solid-svg-icons'
import { FaCss3,FaHtml5 ,FaJs,FaReact } from "react-icons/fa";
import Courses_list from '../Courses_List/Courses_List'
import { Link } from 'react-router-dom'




function Dashboard() {
    return (
        <>
         <nav className='bg-[#070708] w-full h-25 text-white flex items-center justify-between px-10 top-0 fixed z-50'>
            <a href="" className='font-bold text-2xl'>ONcourse</a>

            <div className="menu flex items-center justify-around" id="menu">
                <ul className="gap-5 flex pr-8">
                    <li className="text-1xl">
                        <a href="" className="menu-link">Home</a>
                    </li>
                    <li className="text-1xl"><a href="#courses" className="menu-link">Courses</a></li>
                    <li className="text-1xl"><a href="" className="menu-link">About</a></li>
                    <li className="text-1xl"><a href="" className="menu-link">Contact</a></li>
                </ul>
                <button type="button" className="rounded-3xl font-medium bg-white p-3 px-4 *:text-black">
                    <a href="#" className="btn btn-neutral">Explore Courses</a>
                </button>
            </div>
        </nav>

   <main>
    <section
        className='relative w-[100%] h-[100vh] flex bg-cover bg-center' style={{backgroundImage: "url('src/imags/pexels-negativespace-97077.jpg')"}}>
        <div   className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div>
        <div className='relative z-10 w-[50%] h-[85%] flex items-center pl-15'>
            <div  className='w-[80%] flex flex-col gap-4 text-white'>
                <h1 className='text-7xl font-semibold'>
                    Master Web Development From Scratch
                </h1>
                <p className='text-2xl'>
                    Learn HTML, CSS, JavaScript & React to build modern, 
                    responsive websites with hands-on projects and real-world experience
                </p>
           <Link to="/courses"> 
            <button  className='bg-gradient-to-r from-purple-400 to-blue-950 text-white font-semibold py-3 px-8 rounded-lg w-fit mt-4 transition-all shadow-lg'>
    Start Learning Now
</button>
           </Link> 
                      {/* <button onClick={() => {
                Navigate("/course")
               }} className='bg-gradient-to-r from-purple-400 to-blue-950 text-white font-semibold py-3 px-8 rounded-lg w-fit mt-4 transition-all shadow-lg'>
    Start Learning Now
</button>  */}

</div>
        </div>
        
    <div className='relative z-10 w-[50%] h-[85%] flex items-center justify-center'>
        <div className='grid grid-cols-2 gap-6 p-10'>
            <div className='bg-white/10 border border-gray-500 p-8 rounded-2xl cursor-pointer items-center flex flex-col'>
                <div className='text-6xl text-center mb-3'><FaHtml5 className='text-amber-500'/></div>
                <h3 className='text-white text-2xl font-bold text-center'>
                    HTML5
                    </h3>
                <p className='text-gray-300 text-center text-sm mt-2'>
                    Structure
                    </p>
            </div>
             <div className='bg-white/10 border border-gray-500 p-8 rounded-2xl cursor-pointer items-center flex flex-col'>
                <div className='text-6xl text-center mb-3'><FaCss3 className='bg-blue-900'/></div>
                <h3
                 className='text-white text-2xl font-bold text-center'>CSS
                 </h3>
                <p className='text-gray-300 text-center text-sm mt-2'>
                    Styling
                </p>
            </div>

             <div className='bg-white/10 border border-gray-500 p-8 rounded-2xl cursor-pointer items-center flex flex-col'>
                <div className='text-6xl text-center mb-3'><FaJs className='text-yellow-400'/></div>
                <h3 className='text-white text-2xl font-bold text-center'>
                    JavaScript
                    </h3>
                <p className='text-gray-300 text-center text-sm mt-2'>Logic

                </p>
                </div>
            <div className='bg-white/10 border border-gray-500 p-8 rounded-2xl cursor-pointer items-center flex flex-col'>
                <div className='text-6xl text-center mb-3'><FaReact className='text-blue-400'/></div>
                <h3 className='text-white text-2xl font-bold text-center'>
                    React

                </h3>
                <p className='text-gray-300 text-center text-sm mt-2'>
                    Framework

                </p>
                </div>
            </div>
        </div>
    </section>
    <section  id="courses">
        <Courses_list/>
    </section>
  
   </main>
        </>  
    )
}

export default Dashboard
