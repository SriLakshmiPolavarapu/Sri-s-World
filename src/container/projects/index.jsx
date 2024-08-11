import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const projects = [
  {
    title: 'Recipe Generator', 
    description: 'A Web Application created using Flask and Generative Pre-trained Transformer-2 (GPT-2), allowing users to input the data (ingredients) and receive recipes. \nUtilized the Hugging Face pipeline API to generate contextually relevant recipes based on user input. \nIntegrated Edamam API for displaying the recipes and GPT-2 for generating additional recipes. Also provided detailed recipes when given a specific dish name. \nEmployed the GPT-2 Tokenizer to preprocess the input data and convert it into a format suitable for the model. \nSuccessfully combined external API and NLP techniques into an application.',
    link: 'https://github.com/SriLakshmiPolavarapu/generate-recipe',
    skills: ['Python (Flask)','Natural Language Processing','Large Language Model','Frontend Web Development','Reactjs', 'HTML', 'CSS' , 'Javascript','API']
  },
  {
    title: 'Dictionary Application',
    description: 'Formulated a personalized dictionary utilizing  Trie data structure, \nincorporating functions for inserting words, retrieving meanings of those words, deleting, enhancing functionality with capabilities for efficiently adding over 10,000 words.    ',
    link: 'https://github.com/SriLakshmiPolavarapu/Trie-Dictionary-App',
    skills: ['Java', 'OOPS', 'Data Structures and Algorithms']
  },
  { 
    title: 'Goal Getter Dashboard', 
    description: 'A Frontend Web Development project using Reactjs with Vite as development environment. Utilized Axios for API interactions of weather, location and quotes. \nThis dashboard generates random quotes to inspire users and provides a 7-day weather forecast. Displays air quality information and UV Index. \nFeatures a map to calculate distance and travel time between locations. \nIt also has a feature to select the exercise mode (walk/run/jog/cycle).',
    link: 'https://github.com/SriLakshmiPolavarapu/GoalGetter_Dashboard',
    skills: ['Frontend Web Development','Reactjs', 'HTML', 'CSS' , 'Javascript', 'API']
  },
  {
    title: 'Snakes and Ladder Game',
    description: 'A Snake and Ladder game implemented using principles of Object-Oriented Programming and Data Structures in Java. \n Utilized Java Swing and Java applets for GUI elements. \nCreated backend data for users to play the game using the command line. Employed OOP concepts to organize code and enhance maintainability of code.',
    link: 'https://github.com/SriLakshmiPolavarapu/Snake-and-Ladder',
    skills: ['Java', 'OOPS', 'Java Applets', 'Data Structures and Algorithms']
  },
  { 
    title: 'Color Transfer Between Images', 
    description: 'A Computer Vision project for developing precise color correction by transferring color characteristics between images. Utilized OpenCV for image loading and saving, showcasing proficiency in image processing. \nImplemented BGR to RGB, RGB to LAB, and LAB to CIECAM97 conversions using OpenCV. \nAchieved RMSE score < 0.3; validated on various source and target images.',
    link: 'https://github.com/SriLakshmiPolavarapu/CV_Color-Transfer',
    skills: ['Computer Vision', 'Python', 'Colab']
  },
  { 
    title: 'Image Captioning using CNN and LSTM', 
    description: 'A Artificial Intelligence and Deep Learning project built using CNN and LSTM architectures for generating captions.\n Implemented using VGG16 pre-trained model for extraction. \nUsed TensorFlow, Keras for building Neural Networks. \nGained BLEU score of 0.64, which is used to evaluate the quality of generated captions and CIDEr score of 3, which focuses on measuring the consensus between the generated caption and human annotations.',
    link: 'https://github.com/SriLakshmiPolavarapu/Image-Captioning',
    skills: ['Artificial Intelligence', 'Python', 'Colab']
  },
  { 
    title: 'Internet Chat Application', 
    description: 'A networking server-client project built using python, which provides data exchange between clients and servers. \n This application includes features such as private chat rooms, data encryption and user authentication. \nPython’s socket programming is used for network connection and data transmission and handling.',
    link: 'https://github.com/SriLakshmiPolavarapu/Internet-Relay-Chat',
    skills: ['Networking', 'Python']
  },
  {
    title: 'Analysis of Indian Premier League  data',	  	         
    description: 'A Machine Learning project built using various Machine Learning algorithms (K-means, Random Forest, Logistic Regression, Naive Bayes and Decision Tree Classifier). \nUtilized Rpubs and Tableau tool for visualizing the patterns. \nGained an accuracy of 95% for Random Forest, 92% for K-means, 92.05% for Logistic Regression, 90% for Decision Tree, 87% for Naive Bayes Classifier.',
    link: 'https://github.com/SriLakshmiPolavarapu/Analysis-of-Indian-Premier-League-Data',
    skills: ['Machine Learning', 'Data Analytics', 'Data Mining', 'Python', 'Colab', 'Rstudio']
  },
  {
    title: 'Hotel Management System',
    description: 'A web application developed using front-end and back-end development. \nHTML, CSS, JavaScript were used for user interface while PHP was used for server-side scripting and interaction with XAMPP database for data storage. \nDeployed the project on cloud platforms including AWS and Heroku for accessibility.',
    link: 'https://github.com/SriLakshmiPolavarapu/Hotel_Management_System',
    skills: ['Web Development', 'HTML', 'CSS', 'Javascript', 'PHP', 'AWS', 'Heroku']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <PageHeaderContent headerText="My Projects" />
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2>{index + 1}. {project.title}</h2>
            <p><strong className='subheading'>Description:</strong> {project.description.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            <p><strong className='subheading'>Github Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            <p><strong className='subheading'>Skills Used:</strong> {project.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;