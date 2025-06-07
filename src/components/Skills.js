import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import backendIcon from "../assets/img/skills-icons/backend-icon.png";
import cloudIcon from "../assets/img/skills-icons/cloud-icon.png";
import frontendIcon from "../assets/img/skills-icons/frontend-icon.png";
import dataIcon from "../assets/img/skills-icons/data-icon.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Skills</h2>
                    <p>Full Stack Software Engineer with expertise in backend development, cloud services, and modern web technologies.<br></br> Experienced in building scalable, secure systems and RESTful APIs.</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={backendIcon} alt="Backend Development" className="skill-icon" />
                            <h5>Backend Development</h5>
                            <p>Python, Flask, Go, REST APIs, PostgreSQL</p>
                        </div>
                        <div className="item">
                            <img src={cloudIcon} alt="Cloud & DevOps" className="skill-icon" />
                            <h5>Cloud & DevOps</h5>
                            <p>AWS, Docker, Terraform, CI/CD</p>
                        </div>
                        <div className="item">
                            <img src={frontendIcon} alt="Frontend Development" className="skill-icon" />
                            <h5>Frontend Development</h5>
                            <p>React, JavaScript, TypeScript, HTML/CSS</p>
                        </div>
                        <div className="item">
                            <img src={dataIcon} alt="Data & Analytics" className="skill-icon" />
                            <h5>Data & Analytics</h5>
                            <p>Pandas, NumPy, Matplotlib, Data Visualization</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
