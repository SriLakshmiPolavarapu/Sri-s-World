import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const Education = () =>
{
    return(
        <section id='education' className='education'> 
        <PageHeaderContent
        headerText = "Education"
        />

        <div className='education-info'>
            <h2 className='education-field'>Master's in Computer Science</h2>
            <h2 className='education-college'>Portland State University</h2>
            <i className='education-date'>September 2023 - June 2025</i>
            <h3 className='education-percentage'>GPA: 3.7 / 4</h3>
        </div>
        </section>
    )
}

export default Education;
