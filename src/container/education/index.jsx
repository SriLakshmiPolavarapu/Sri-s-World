import React from 'react';
import './styles.scss'; 
import PageHeaderContent from '../../components/pageHeaderContent';

const educationData = [
  {
    institution: "Portland State University, Portland, OR, USA",
    degree: "Master's in Computer Science",
    startDate: "September 2023",
    endDate: "June 2025",
    percentage: "3.8 / 4",
    coursework: "Machine Learning, Artificial Intelligence, Computer Vision, Code Large Language Models, Internetworking Protocols, Data Engineering, Database Management System, Code Reading and Review, Algorithm Design and Analysis, Software Engineering, Operating Systems, Intro to Web Development, Frontend Web Development, Voice Assistance",  
  },
  {
    institution: "Vellore Institute of Technology, Chennai, India",
    degree: "Master of Technology, Software Engineering",
    startDate: "June 2018",
    endDate: "May 2023",
    percentage: "8.6 / 10",
    coursework: "Software Engineering, Programming in Java, Web Technologies, Game Programming, Artificial Intelligence, Machine Learning, Data Mining, Data Analytics, Big Data Technologies, Operating Systems, Computer Networks, Cloud Computing, Information and System Security, Software Testing, Software Design and Development Project, Human-Computer Interaction, Data Structures and Algorithms, Theory of Computation, Database Management Systems, Foundations of Electrical and Electronics Engineering."
  },
  {
    institution: "Narayana Educational Institute, Hyderabad, India",
    degree: "Intermediate - M.P.C",
    startDate: "June 2016",
    endDate: "May 2018",
    percentage: "9.5 / 10"
  },
  {
    institution: "St. Joseph Public School (ICSE), Hyderabad, India",
  }
];

const certifications = [
  "Agentic AI for Developers: Concepts and Application for Enterprises - LinkedIn",
  "Microsoft Azure AI Essentials Professional Certificate - Microsoft and LinkedIn",
  "GenerativeAI - LinkedIn",
  "Docker Foundations Professional Certificate - LinkedIn",
  "Java Programming - Spoken Tutorial at IIT Bombay",
  "Artificial Intelligence on Microsoft Azure - Coursera",
  "MySQL certification - Spoken Tutorial at IIT Bombay"
];

const Timeline = () => {
  return (
    <section id='education' className='education'>
      <PageHeaderContent headerText="Education & Certifications" />
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-content">
              <h2 className='institute'>{item.institution}</h2>
              <h3 className='degree'>{item.degree}</h3>
              <i className="date">{item.startDate} - {item.endDate}</i>
              <p className='percentage'>{item.percentage}</p>
              {item.coursework && (
                <>
                  <br /><br />
                  <p className='coursework'>Coursework: {item.coursework}</p>
                </>
              )}
              <span className="circle" />
            </div>
          </div>
        ))}
      </div>

      <PageHeaderContent headerText="Certifications" />
      <div className="certifications-list">
        <br></br>
        <ul>
          {certifications.map((cert, index) => {
            const [certificate, issuer] = cert.split(', ');
            return (
              <li key={`cert-${index}`} className="certification-item">
                <div className="certification-content">
                  <h3 className='certificate-name'>{certificate}</h3>
                  <p className='issuer'>{issuer}</p>
                  <br></br>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;