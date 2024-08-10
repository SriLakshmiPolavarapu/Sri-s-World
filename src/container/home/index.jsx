import React, { useEffect } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
  useEffect(() => {
    console.log("Home component mounted");
  }, []);

  const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <div className="page-container">
      <section id="home" className="home">
        <div className="home-text-wrapper">
          <h1>
            Hello! 
            <br />
            I'm Sri Lakshmi Polavarapu
            <br />
            Student at Portland State University
          </h1>
        </div>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateX(500px)' }}
          end={{ transform: 'translateX(-10px)' }}
        >
          <div className="home-contact-me">
            <button onClick={handleNavigateToContactMePage}> Contact Info</button>   
          </div>
        </Animate>
      </section>
      <div className="fixed-bottom">
        <i className='copyrite'>&copy; 2024 Sri Lakshmi Polavarapu</i>
      </div>
    </div>
  );
};

export default Home;
