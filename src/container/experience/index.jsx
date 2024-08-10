import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const Experience = () => {
    return (
        <section id='experience' className='experience'> 
            <PageHeaderContent headerText="Experience" />
            <div className='experience-info'>
                <h2 className='experience-role'>Software Engineering Intern - Unity Programmer</h2>
                <h2 className='experience-company-name'>Quero India Pvt Ltd</h2>
                <i className='experience-date'>August 2022 - May 2023</i>
                <ul>
                    <p className='experience-responsibility'>
                        <li>Designed and Developed games, including Predators Clash, Find Letters Game, Ping Pong Game, and Arkanoid Game.</li>
                        <li>Implemented advanced features like Physics, Animations, Audio Effects, Particle systems, and Augmented Reality.</li>
                        <li>Primarily used Java, C#, and Unity3D platform for game development.</li>
                        <li>Created web portals using HTML, CSS, and JavaScript to display game scores and enhance user engagement.</li>
                        <li>Collaborated with a team to implement and work on gameplay mechanics and user interfaces.</li>
                    </p>
                </ul>
                <h2 className='unity-projects-heading'>Links to the projects</h2>
                <p className='unity-projects'>
                    <div>Finding Letters Game: <a href="https://github.com/SriLakshmiPolavarapu/Finding-Letters-Game---Unity" target="_blank">https://github.com/SriLakshmiPolavarapu/Finding-Letters-Game---Unity</a></div>
                    <div>Ping Pong Game: <a href="https://github.com/SriLakshmiPolavarapu/Ping-Pong-Game---Unity" target='_blank'>https://github.com/SriLakshmiPolavarapu/Ping-Pong-Game---Unity</a></div>
                    <div>Angry Bird Game: <a href="https://github.com/SriLakshmiPolavarapu/Angry-Bird-Game---Unity" target='_blank'>https://github.com/SriLakshmiPolavarapu/Angry-Bird-Game---Unity</a></div>
                    <div>Predator Clash Game: <a href="https://github.com/SriLakshmiPolavarapu/Predator-Clash-Game---Unity" target='_blank'>https://github.com/SriLakshmiPolavarapu/Predator-Clash-Game---Unity</a></div>
                </p>
            </div>
            <br />

            <div className='extra-activities'>
                <PageHeaderContent headerText="Activities" />
                <ul className='extracurricular-list'>
                    <div>
                        <h2 className='experience-role'>1. Campus Student Ambassador @ PSU</h2>
                        <i className='experience-date'>August 2024</i></div>
                        <div><br></br><br></br>
                        <h2 className='experience-role'>2. Student Operations Team Member @ PSU</h2>
                        <i className='experience-date'>October 2023 - Present</i>
                        </div><br></br><br></br>
                        <h2 className='experience-role'>3. Joint Secretary of Rotaract Club @ VIT</h2>
                        <i className='experience-date'>July 2019 - May 2020</i>
                </ul>
            </div>
        </section>
    )
}

export default Experience;
