export default function About(){
    const config={
        line1:"Hi, I am HindujaBalakrishnan. I am proficient in front-end development, including HTML, CSS, JavaScript, Angular and React",
        line2:"I also have knowledge of back-end development, including Java, Spring Boot and Python",
        line3:"I have a Basic knowledge of technologies such as Machine Learning, AWS, Linux, and SQL with Oracle Database."

    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>       
            <img src="https://res.cloudinary.com/dfujam4jz/image/upload/v1747472855/about_bsje7s.png" alt="About HindujaBalakrishnan" />

        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p> 
            <p className='pb-5'>{config.line3}</p>   
        </div>
        </div>
    </section>
}