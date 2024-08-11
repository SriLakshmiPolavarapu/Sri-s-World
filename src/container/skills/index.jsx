import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const skillsData = {
  "Programming Languages": ["Python", "Java", "R", "MATLAB", "JavaScript", "C#", "PHP"],
  "Web Development": ["HTML", "CSS", "jQuery", "React", "Node.js"],
  "Cloud Platforms": ["AWS", "Google Cloud Platform", "Microsoft Azure", "Heroku"],
  "Database Management": ["MySQL", "PostgreSQL", "Hive", "MongoDB"],
  "Machine Learning & Data Science": ["PyTorch", "TensorFlow", "Keras", "NumPy", "Pandas"],
  "DevOps": ["Jenkins", "Kubernetes", "Docker", "Git Version Control"],
  "Tools": ["ChromeDev Tools", "Wireshark", "Tableau", "Unity3D"],
  "Agile Methodologies & Testing": ["Agile methodologies", "Unit Testing"],
  "Networking": ["Networking Protocols", "TCP/IP", "UDP", "DNS"],
  "Operating Systems" : ["Windows", "MacOS"]
};

const Skills = () => {
  return (
    <section id='skills' className='skills'> 
    <PageHeaderContent headerText = "My Skills"/>
    <section id='skills-content' className='skills-content'>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className='skills-category'>
          <h3>{category}</h3>
          <ul>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </section>
  );
};

export default Skills;
