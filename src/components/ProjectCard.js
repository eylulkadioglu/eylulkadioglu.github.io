import React from "react";
import { Col } from "react-bootstrap";
import githubIcon from "../assets/img/skills-icons/github-icon.png";

export const ProjectCard = ({ title, description }) => {
  const hasGithubLink = description.includes("GitHub:");
  const githubLink = hasGithubLink ? description.split("GitHub:")[1].trim() : null;
  const descriptionText = hasGithubLink ? description.split("GitHub:")[0].trim() : description;

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card">
        <div className="proj-content">
          <h4>{title}</h4>
          <div className="proj-description">
            <p>{descriptionText}</p>
            {hasGithubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                <img src={githubIcon} alt="GitHub" className="github-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
