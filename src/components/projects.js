export default function Projects() {
    const config = {
        projects: [
            {
                image: "https://res.cloudinary.com/dfujam4jz/image/upload/v1747477197/Screenshot_705_zdpkrk.png",
                description: "Pizza Website: Delicious, handcrafted pizzas made fresh with quality ingredients. Order online for fast delivery and enjoy the perfect slice every time!",
                link: "https://pizza-website-zuiw.vercel.app/"
            },
            {
                image: "https://res.cloudinary.com/dfujam4jz/image/upload/v1747477467/Screenshot_706_ek3xul.png",
                description: "Camping Website: Explore the beauty of nature with our comprehensive camping website. We provide expert advice, gear recommendations, and trip planning tips to help outdoor enthusiasts of all levels enjoy unforgettable camping experiences",
                link: "https://camping-website-git-main-odellao7s-projects.vercel.app/"
            },
            {
                image: "https://res.cloudinary.com/dfujam4jz/image/upload/v1747478827/WhatsApp_Image_2025-05-17_at_16.16.00_2cd32887_adafrg.jpg",
                description: "Student Management System: A web-based application built with Spring Boot that enables admins to manage student records efficiently. The system supports CRUD operations on students, courses, and grades. It uses Spring MVC for handling requests, Spring Data JPA for seamless database interaction, and MySQL as the backend. Designed with a layered architecture for easy maintenance and scalability.",
                link: "https://github.com/odellao7/student-management-system"
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built them using HTML, CSS, JavaScript, Java, Spring Boot, and MySQL. Check them out below.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row flex-wrap gap-5 px-10 justify-center'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative bg-secondary rounded-lg shadow-md overflow-hidden w-full max-w-md md:w-[500px]'>
                            <img
                                className='w-full h-[200px] object-cover'
                                src={project.image}
                                alt={`Project screenshot ${index + 1}`}
                            />
                            <div className='p-4'>
                                <p className='text-center mb-3'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a
                                        className='btn bg-white text-primary font-bold py-2 px-4 rounded'
                                        target='_blank'
                                        rel='noreferrer'
                                        href={project.link}
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
