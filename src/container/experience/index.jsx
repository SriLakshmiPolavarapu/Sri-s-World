import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const Experience = () =>
{
    return(
        <section id='experience' className='experience'> 
        <PageHeaderContent
        headerText = "Experience"
        />
        <div className='experience-info'>
            <h2 className='experience-role'>Software Engineering Intern - Unity Programmer </h2>
            <h2 className='experience-company-name'>Quero India Pvt Ltd</h2>
            <i className='experience-date'>August 2022 - May 2023</i>
            <ul>
            <p className='experience-responsibility'>
                <li>Designed and Developed games, including Predators Clash, Find Letters Game, Ping Pong Game, and Arkanoid Game. <br></br> </li>
                <li>Implemented advanced features like Physics, Animations, Audio Effects, Particle systems and Augmented Reality. <br></br></li>
                <li>Primarily used Java, C# and Unity3D platform for game development. <br></br></li>
                <li>Created web portals using HTML, CSS, and JavaScript to display game scores and enhance user engagement. <br></br></li>
                <li>Collaborated with a team to implement and work on game play mechanics and user interfaces.</li>
            </p>
            </ul>
        </div>

        </section>
    )
}

export default Experience;
