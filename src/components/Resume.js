// If you're not using ResumeImg, either remove this line or fix and use it
// import ResumeImg from '../Assets/resume.jpg'; // Uncomment this if you're using local asset

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1nf39dC0c_fC6xn2i6qjFO7aCTUPY_tnL/view?usp=sharing' // Replace with your actual resume PDF
    };

    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-10'>
            {/* Image Section */}
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img 
                    className='w-[300px] rounded-lg shadow-lg' 
                    src="https://res.cloudinary.com/dfujam4jz/image/upload/v1747472854/resume_qy2hmi.jpg" 
                    alt="Resume preview"
                />
            </div>

            {/* Text Section */}
            <div className='md:w-1/2 flex justify-center items-center'>
                <div className='text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='pb-5'>
                        You can view or download my resume here:
                    </p>
                    <a 
                        className='bg-white text-primary font-semibold px-5 py-2 rounded hover:bg-primary hover:text-black transition duration-300 inline-block'
                        href={config.link} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
