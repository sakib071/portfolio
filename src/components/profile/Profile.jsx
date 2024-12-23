import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";
import Education from "../education/Education";
import Skills from "../skills/Skills";


const Profile = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="profile h-[calc(100vh-100px)]">
            <div className={`px-5 lg:p-0 lg:pt-20 relative ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'} font-semibold mx-auto`}>
                {/* <div className="flex items-center gap-5">
                    <img className="h-24 w-24 rounded-full object-cover" src="/Sakib.jpg" alt="" />
                    <div>
                        <h2 className="text-xl space-grotesk-600">Mohammad Sakib Chowdhury</h2>
                        <p className={`text-lg ${theme === 'dark' ? 'text-teal-400' : ' text-zinc-500'} space-grotesk-400`}>Front-End Developer</p>
                    </div>
                </div> */}
                <p className="text-base text-justify space-grotesk-400">As a front-end developer with a passion for building intuitive and dynamic web applications, I specialize in modern frameworks like <span className="text-teal-400 space-grotesk-500-italic">React</span> and <span className="text-teal-400 space-grotesk-500-italic">Tailwind CSS</span> to craft seamless, user-friendly experiences. With a deep understanding of design tools like <span className="text-teal-400 space-grotesk-500-italic">Figma</span> and <span className="text-teal-400 space-grotesk-500-italic">Adobe XD</span>, alongside development technologies such as <span className="text-teal-400 space-grotesk-500-italic">Vite, JavaScript, and Git,</span> I’m committed to optimizing workflows and delivering visually compelling, responsive solutions. <br /> <br /> My skills in problem-solving, attention to detail, and project planning help me deliver efficient, high-quality results in collaborative environments.</p>
                <div className="mt-10 space-y-3">
                    <div className="flex gap-2 text-base space-grotesk-400 items-center">
                        <IoMdMail className="text-teal-400" />
                        <p className="hover:underline">mdsakibchy071@gmail.com</p>
                    </div>
                    <div className="flex gap-2 text-base space-grotesk-400 items-center">
                        <FaGithub className="text-teal-400" />
                        <a className="hover:underline" href="https://github.com/sakib071" target="_blank" rel="noreferrer">sakib071</a>

                    </div>
                    <div className="flex gap-2 text-base space-grotesk-400 items-center">
                        <FaLinkedin className="text-teal-400" />
                        <a className="hover:underline" href="https://www.linkedin.com/in/mohammad-sakib-chowdhury-540984163/" target="_blank" rel="noreferrer">mohammad-sakib-chowdhury</a>
                    </div>
                    <div className="flex gap-2 text-base space-grotesk-400 items-center">
                        <FaSquareFacebook className="text-teal-400" />
                        <a className="hover:underline" href="https://www.facebook.com/sakibchy071?mibextid=ZbWKwL" target="_blank" rel="noreferrer">Mohammad Sakib Chowdhury</a>
                    </div>
                </div>
            </div>

            <Education></Education>
            <Skills></Skills>
        </div>
    );
};


export default Profile;