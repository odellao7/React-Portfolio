import HeroImg from '../Assets/hero.png';
import { AiOutlineLinkedin} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { AiOutlineInstagram} from "react-icons/ai";
export default function Hero(){
    const config ={
        subtitle:'Im a Full-stack developer',
        social:{
            linkedin:'https://linkedin.com',
            leetcode:'https://leetcode.com/u/tyy098iMCy/',
            Hackerrank:'https://www.hackerrank.com/profile/hindujabalakris1',
            instagram:'https://www.instagram.com/code_script07/?utm_source=qr&igsh=dm9kYXdmcTZudzMy#'

        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
        <h1 className='md:w-1/2 text-white text-6xl font-hero-font'>Hi,<br/> Im Hinduja
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.leetcode} className='pr-5 hover:text-white'><SiLeetcode size={40}/></a>
            <a href={config.social.Hackerrank} className='pr-5 hover:text-white'><FaHackerrank size={40}/></a>
            <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
        </div>
       
    </div>
    <img className='md:w-1/3' src="https://res.cloudinary.com/dfujam4jz/image/upload/v1747472854/hero_gal3na.png" alt="Hero image" />

    </section>
}