import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';


function Courses_list() {
    const coursesData = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            description: "Learn HTML, CSS, JavaScript and React from scratch to build modern websites",
            level: "Beginner",
            duration: "12 weeks",
            lessons: 85,
            image: "src/imags/prt1.jpg"
        },
        {
            id: 2,
            title: "Advanced React & Redux",
            description: "Master React Hooks, Context API, Redux and build scalable applications",
            level: "Advanced",
            duration: "8 weeks",
            lessons: 62,
            image: "src/imags/par2.jpg"
        },
        {
            id: 3,
            title: "Modern CSS & SASS",
            description: "Create beautiful, responsive designs with CSS Grid, Flexbox and SASS",
            level: "Intermediate",
            duration: "6 weeks",
            lessons: 48,
            image: "src/imags/par3.png"
        },
        {
            id: 4,
            title: "JavaScript Fundamentals",
            description: "Master JavaScript ES6+ features and build interactive web applications",
            level: "Beginner",
            duration: "10 weeks",
            lessons: 72,
            image: "src/imags/par4.jpeg"
        },
        {
            id: 5,
            title: "Full Stack Development",
            description: "Build complete web applications with Node.js, Express and MongoDB",
            level: "Advanced",
            duration: "16 weeks",
            lessons: 120,
            image: "src/imags/par5.png"
        },
        {
            id: 6,
            title: "Responsive Web Design",
            description: "Create mobile-first responsive websites with Bootstrap and Tailwind",
            level: "Intermediate",
            duration: "5 weeks",
            lessons: 38,
            image: "src/imags/par6.png"
        }
    ]

      const navigate = useNavigate();

    return (
        <>
        {/* <section>
            <Dashboard/>
        </section> */}
 <main className='bg-[#070708] min-h-screen'>
    <section className='pt-24 pb-12 px-10'>
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold text-white mb-4'>
                Explore Our Courses
            </h1>
            <p className='text-xl text-gray-400'>
                Choose from our collection of professional web development courses
            </p>
        </div>
    </section>

    <section className='px-10 pb-20'>
        <div className='max-w-7xl mx-auto flex flex-wrap gap-8'>
            {coursesData.map(course => (
                <div className='bg-white/5 border border-white/10 rounded-2xl overflow-hidden w-[30%]'>
                    
                    <div className='h-56 bg-gradient-to-br from-purple-600 to-pink-600'>
                        <img src={course.image} alt={course.title} className='w-full h-full object-cover'/>
                    </div>

                    <div className='p-6'>
                        <h3 className='text-2xl font-bold text-white mb-3'>
                            {course.title}
                        </h3>
                        <p className='text-gray-400 mb-4'>
                            {course.description}
                        </p>
                        
                        <div className='flex gap-4 text-sm text-gray-500 mb-4'>
                            <span>{course.duration}</span>
                            <span>{course.lessons} lessons</span>
                        </div>

                        <button 
                        onClick={()=>{
                            localStorage.setItem("courseId",course.id)
                            navigate(`/courses/${course.id}`)                       
                        }}
                        
                        className='w-full bg-black text-white font-semibold py-3 rounded-lg cursor-pointer'>
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
</main>

        </>
    )
}

export default Courses_list
