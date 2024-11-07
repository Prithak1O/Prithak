import React from 'react';
import './Project.css';
import mywork_data from '../../assets/mywork_data.js';

const Project = () => {
  return (
    <div id='project' className='project'>
      <div className="project-title">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="project-item">
            <img src={work.w_img} alt={work.w_name} className="project-image" />
            <div className="view-button-container">
              <a href={work.w_url} target="_blank" rel="noopener noreferrer" className="view-button">View</a>
            </div>
          </div>
        ))}
      </div>
      <div className="project-showmore">
        <p>Show More</p>
      </div>
    </div>
  );
};

export default Project;
