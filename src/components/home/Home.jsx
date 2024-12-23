import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import Articles from '../articles/Articles';
import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import Works from '../works/works';
import './Home.css'

function Home() {

    const { theme } = useContext(ThemeContext);


    return (
        <div className={`lg:max-w-5xl h-screen overflow-scroll lg:relative lg:left-1/3 bg-white ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
            <section id='profile'>
                <Profile></Profile>

            </section>
            <section id='projects'>
                <Projects></Projects>
            </section>
            <section id='work experience'>
                <Works></Works>
            </section>
            <section id='articles'>
                <Articles></Articles>
            </section>
        </div>
    )
}



export default Home;