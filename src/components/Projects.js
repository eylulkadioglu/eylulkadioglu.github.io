import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Heart Of New York",
      description: "Scalable QR-code system built with Flask, PostgreSQL, and AWS for NY State tourism content delivery. GitHub: https://github.com/eylulkadioglu/HeartOfNY"
    },
    {
      title: "RxRefund",
      description: "Inventory system for minimizing medical waste and managing expiry-driven returns. Built analytics dashboards and backend services."
    },
    {
      title: "Music DB",
      description: "Backend API for managing artist records, with JWT auth, email alerts, and secure password handling. GitHub: https://github.com/eylulkadioglu/Music"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A selection of backend and full-stack systems I've built — from data-driven platforms to robust APIs.</p>
                <Row>
                  {projects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    )
                  })}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
