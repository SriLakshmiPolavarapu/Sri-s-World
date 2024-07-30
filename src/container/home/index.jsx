import React from 'react';
import './styles.scss';
import {useNavigate} from 'react-router-dom';
import {Animate} from 'react-simple-animate';

const Home = () =>
{
    const navigate = useNavigate();
    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    };

    return(
        <section id="home" className='home'>
            <div className='home-text-wrapper'>
                <h1> Hello! 
                <br />
                I'm Sri Lakshmi Polavarapu
                <br />
                Student at Portland State University
                </h1>
            </div>

            <Animate
            play
            duration = {1.5}
            delay = {1}
            start = {{
                transform : 'translateX(200px)'
            }}
            end = {{
                transform : 'translateX(100px)'
            }}>
            <div className="home-contact-me">
             <button onClick={handleNavigateToContactMePage}> Contact Info</button>   
            </div>
            </Animate>

        </section>
    );
};

export default Home;
