import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';


const Projects = () =>
{
    return(
        <section id='projects' className='projects'> 
        <PageHeaderContent
        headerText = "My Projects"
        />

        <div className='project-info'>
        <ol type='1'>
            <h1>Goal Getter Dashboard</h1>
            <li>
                A Frontend Web Development project using Reactjs with Vite as development environment. 
                Utilized Axios for API interactions of weather, location and quotes.
                This dashboard generates random quotes to inspire users and provides a 7-day weather forecast.
                Displays air quality information and UV Index.
                Features a map to calculate distance and travel time between locations. 
                It also has a feature to select the exercise mode.
            </li>
        </ol>
        </div>
        </section>

    );
};

export default Projects;
