import React, { useEffect } from 'react'
import { GiDuration } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { useNavigate} from 'react-router-dom'   

import img1 from '../../imags/prt1.jpg'
import img2 from '../../imags/par2.jpg'
import img3 from '../../imags/par3.png'
import img4 from '../../imags/par4.jpeg'
import img5 from '../../imags/par5.png'
import img6 from '../../imags/par6.png'



function Course_Details() {
const coursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript and React from scratch to build modern websites. This comprehensive course covers everything you need to become a professional web developer.",
        level: "Beginner",
        duration: "12 weeks",
        lessons: 85,
        image: img1,
        language: "English",
        lastUpdated: "January 2026",
        objectives: [
            "Build responsive websites with HTML & CSS",
            "Master JavaScript fundamentals",
            "Create interactive UIs with React",
            "Deploy projects to production"
        ],
        modules: [
            "HTML Fundamentals",
            "CSS & Responsive Design",
            "JavaScript Essentials",
            "React & Hooks",
            "Final Projects"
        ],
        instructor: {
            name: "Ahmed Hassan",
            bio: "Senior Web Developer with 10+ years experience"
        }
    },
    {
        id: 2,
        title: "Advanced React & Redux",
        description: "Master React Hooks, Context API, Redux and build scalable applications. Learn advanced patterns, performance optimization, and state management best practices for production-ready apps.",
        level: "Advanced",
        duration: "8 weeks",
        lessons: 62,
        image: img2,
        language: "English",
        lastUpdated: "December 2025",
        objectives: [
            "Master React Hooks and custom hooks",
            "Implement Redux for state management",
            "Build scalable React applications",
            "Optimize React app performance"
        ],
        modules: [
            "Advanced Hooks Deep Dive",
            "Redux Toolkit",
            "Performance Optimization",
            "Testing React Apps",
            "Production Deployment"
        ],
        instructor: {
            name: "Sara Ali",
            bio: "React Expert and Tech Lead at major tech company"
        }
    },
    {
        id: 3,
        title: "Modern CSS & SASS",
        description: "Create beautiful, responsive designs with CSS Grid, Flexbox and SASS. Learn modern CSS techniques, animations, and how to build professional layouts from scratch.",
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 48,
        image: img3,
        language: "English",
        lastUpdated: "January 2026",
        objectives: [
            "Master CSS Grid and Flexbox",
            "Write maintainable code with SASS",
            "Create smooth animations and transitions",
            "Build responsive layouts for all devices"
        ],
        modules: [
            "CSS Grid Mastery",
            "Flexbox Layouts",
            "SASS & CSS Architecture",
            "Animations & Transitions",
            "Responsive Design Patterns"
        ],
        instructor: {
            name: "Omar Khalil",
            bio: "UI/UX Designer and CSS specialist with 8 years experience"
        }
    },
    {
        id: 4,
        title: "JavaScript Fundamentals",
        description: "Master JavaScript ES6+ features and build interactive web applications. Learn the core concepts, async programming, DOM manipulation, and modern JavaScript best practices.",
        level: "Beginner",
        duration: "10 weeks",
        lessons: 72,
        image: img4,
        language: "English",
        lastUpdated: "November 2025",
        objectives: [
            "Understand JavaScript fundamentals deeply",
            "Work with ES6+ features confidently",
            "Master asynchronous JavaScript",
            "Build interactive web applications"
        ],
        modules: [
            "JavaScript Basics",
            "Functions & Scope",
            "Objects & Arrays",
            "Async JavaScript & Promises",
            "DOM Manipulation"
        ],
        instructor: {
            name: "Youssef Mansour",
            bio: "JavaScript instructor and Full Stack developer"
        }
    },
    {
        id: 5,
        title: "Full Stack Development",
        description: "Build complete web applications with Node.js, Express and MongoDB. Learn backend development, RESTful APIs, database design, and deploy full-stack applications to production.",
        level: "Advanced",
        duration: "16 weeks",
        lessons: 120,
        image: img5,
        language: "English",
        lastUpdated: "January 2026",
        objectives: [
            "Build RESTful APIs with Node.js & Express",
            "Design and work with MongoDB databases",
            "Implement authentication and authorization",
            "Deploy full-stack apps to cloud platforms"
        ],
        modules: [
            "Node.js Fundamentals",
            "Express & RESTful APIs",
            "MongoDB & Database Design",
            "Authentication & Security",
            "Deployment & DevOps"
        ],
        instructor: {
            name: "Layla Ibrahim",
            bio: "Full Stack Developer and Software Architect with 12 years experience"
        }
    },
    {
        id: 6,
        title: "Responsive Web Design",
        description: "Create mobile-first responsive websites with Bootstrap and Tailwind CSS. Master modern CSS frameworks, responsive design principles, and build beautiful UIs that work on any device.",
        level: "Intermediate",
        duration: "5 weeks",
        lessons: 38,
        image: img6,
        language: "English",
        lastUpdated: "December 2025",
        objectives: [
            "Master Bootstrap framework components",
            "Build with Tailwind CSS utility classes",
            "Create mobile-first responsive designs",
            "Implement modern UI/UX patterns"
        ],
        modules: [
            "Responsive Design Principles",
            "Bootstrap Grid & Components",
            "Tailwind CSS Fundamentals",
            "Mobile-First Development",
            "Real-World Projects"
        ],
        instructor: {
            name: "Karim Nabil",
            bio: "Frontend Developer specializing in responsive design and CSS frameworks"
        }
    }
]



 const id = localStorage.getItem('courseId'); 

    const navigate = useNavigate(); 
    const resultid = coursesData.find((course) => course.id === parseInt(id))
      const pathnameId = window.location.pathname.split("/")[2]

    if (resultid.id !== parseInt(pathnameId)) {
        return (
            <div className='bg-[#070708] min-h-screen flex items-center justify-center flex-col gap-4'>
                <p className='text-white text-2xl'>Course not found</p>
                <button 
                    onClick={() => navigate('/courses')}
                    className='bg-black text-white px-6 py-3 rounded-lg'>
                    Back to Courses
                </button>
            </div>
        );
    }

return (
        <>
            <nav className='bg-[#070708] w-full h-25 text-white flex items-center justify-between px-10'>
                <a href="" className='font-bold text-2xl'>ONcourse</a>
                <div className="menu flex items-center justify-around" id="menu">
                    <ul className="gap-5 flex pr-8">
                        <li className="text-1xl"><a href="/" className="menu-link">Home</a></li>
                        <li className="text-1xl"><a href="/courses" className="menu-link">Courses</a></li>
                        <li className="text-1xl"><a href="/about" className="menu-link">About</a></li>
                        <li className="text-1xl"><a href="/contact" className="menu-link">Contact</a></li>
                    </ul>
                    <button type="button" className="rounded-3xl font-medium bg-white p-3 px-4">
                        <a href="/courses" className="text-black">Explore Courses</a>
                    </button>
                </div>
            </nav>
            <section className='bg-[#070708] w-full pt-24 pb-12 px-10'>
                <div className='max-w-7xl mx-auto flex gap-10'>
                    <div className='w-[55%]'>
                        <img
                        src={ resultid.image}
                            alt={resultid.title}
                            className='w-full h-96 object-cover rounded-2xl'
                        />
                    </div>
{/* limn */}
        <div className='w-[40%]'>
            <div className='text-white'>
                {/* <span className='bg-purple-600 px-3 py-1 rounded text-sm'>
                                {resultid.level}
                </span> */}

                <h1 className='text-4xl font-bold mt-4 mb-4'>
                                {resultid.title}
                </h1>

                <p className='text-gray-400 mb-6'>
                                {resultid.description}
                </p>

                <div className='space-y-2 text-gray-300 mb-2'>
                    <p className='flex items-center gap-2 font-bold'> Duration: {resultid.duration}</p>
                    <p className='font-bold'> Lessons: {resultid.lessons}</p>
                    <p className='font-bold'> Language: {resultid.language}</p>
                    <p className='font-bold'> Last Updated: {resultid.lastUpdated}</p>
                </div>

                <button className='w-full bg-gray-500 text-white font-semibold py-3 rounded-lg cursor-not-allowed'>
                                Enroll Now
                </button>
                </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#070708] px-10 pb-8'>
                <div className='max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8'>
                    <h2 className='text-3xl font-bold text-white mb-6'>What You'll Learn</h2>
                    <ul className='space-y-3'>
                        {resultid.objectives.map((obj, index) => (
                      <li key={index} className='text-gray-300 flex gap-2'>
                    <span className='text-green-500'><FcApproval className='text-2xl'/>
                    </span>
                    <p>{obj}</p>
                     </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className='bg-[#070708] px-10 pb-8'>
                <div className='max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8'>
                    <h2 className='text-3xl font-bold text-white mb-6'>Course Content</h2>
                    <ul className='space-y-3'>
                        {resultid.modules.map((module, index) => (
                            <li key={index} className='text-gray-300 bg-white/5 p-4 rounded-lg'><p>{module}</p> 
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className='bg-[#070708] px-10 pb-20'>
                <div className='max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8'>
                    <h2 className='text-3xl font-bold text-white mb-6'>Instructor</h2>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full'></div>
                        <div>
                            <h3 className='text-xl font-bold text-white'>{resultid.instructor.name}</h3>
                            <p className='text-gray-400'>{resultid.instructor.bio}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Course_Details
