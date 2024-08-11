import React from 'react';
import './styles.scss'; 
import MyPicture from './pic.jpeg';

const About = () => {
  return (
    <div className='about-section'>
    <div className="image-section">
      <img
        src={MyPicture}
        alt="My picture"
        className="image"
      />
      <div className="info">
        <p><b>Hello! I'm Sri Lakshmi Polavarapu, Computer Science student at Portland State University. </b></p>
<br></br>
<br></br>
          <p>With a solid background in Computer Science and a year of internship experience as a Unity Programmer. 
          I've honed my skills in Python, Java, HTML, CSS, Javascript, React, SQL.
          I've also honed my skills in AI, ML (Data Science) concepts.
          I'm eager to explore new technologies and improve my skills. </p>

<br></br>
          <p>It all started in my 8th grade at St. Joseph's Public School were I had to choose between Computer Science, Commerce and Fashion Designing.
          Being a technology enthusiastic, I choose Computer Science which sparked my interest in Software field. 
          During my Undergrad at Vellore Institute of Technology, I studied about various fields including Software Engineering, Data Science (ML/ AI), Frontend Web Development, about Databases, Testing.
          This exploration led me to specilize in Data Sceince, Frontend, and Software Engineering during my Master's at Portland State University. </p>

<br></br>
          <p>Beyond this productive stuff, you can find me drawing, hiking and experimenting with new food recipes.</p>

<br></br>
          <p>I'm currently exploring possible paths in Software Engineering, Frontend Web Development and Data Science. I'm working on different projects to further develop my skills. </p>

<br></br>
          <p className='link-color'>Feel free to connect with me out on <a href="https://www.linkedin.com/in/sri-lakshmi-polavarapu/" target="_blank">LinkedIn</a> or <a href="https://github.com/SriLakshmiPolavarapu" target="_blank">GitHub</a> to view my projects.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
