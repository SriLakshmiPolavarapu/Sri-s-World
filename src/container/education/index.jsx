import React from 'react';
import './styles.scss'; 
import PageHeaderContent from '../../components/pageHeaderContent';

const educationData = [
  {
    institution: "Portland State University, Portland, OR, USA",
    degree: "Master's in Computer Science",
    startDate: "September 2023",
    endDate: "June 2025",
    percentage: "3.7 / 4"
  },
  {
    institution: "Vellore Institute of Technology, Chennai, India",
    degree: "M.Tech Integrated Software Engineering",
    startDate: "June 2018",
    endDate: "May 2023",
    percentage: "3.9 / 4"
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

const Timeline = () => {
  return (
    <section id='education' className='education'>
    <PageHeaderContent headerText="Education" />
    <div className="timeline">
      {educationData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-item-content">
            <h2 className='institute'>{item.institution}</h2>
            <h3 className='degree'>{item.degree}</h3>
            <i className="date">{item.startDate} - {item.endDate}</i>
            <p className='percentage'>{item.percentage}</p>
            <span className="circle" />
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Timeline;

