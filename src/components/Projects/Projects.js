import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              // isBlog={false}
              title="Basic web page"
              description="How to center the div by using flex,grid,and position."
              ghLink="https://github.com/CharanVuchi/HTML-1"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              // isBlog={false}
              title="WEB PAGE"
              description="Developed a static Web Page using HTML and BootStrap"
              ghLink="https://github.com/CharanVuchi/HTML-and-CSS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              // isBlog={false}
              title="Forms"
              description="Developed a form using HTML,CSS, and JavaScript and also done the Validation."
              ghLink="https://github.com/CharanVuchi/JavaScript"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              // isBlog={false}
              title="Image Slider"
              description="Developed a image slider by using LightBox ."
              ghLink="https://github.com/CharanVuchi/JavaScript-2"
              // demoLink="file:///C:/Users/Charan/OneDrive/Desktop/Coderz%20intern%20sprint/task/task1.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              // isBlog={false}
              title="TO-DO-List"
              description="Developed a TO-DO-LIST using JavaScript."
              ghLink="https://github.com/CharanVuchi/javaScript-3"
              // demoLink="file:///C:/Users/Charan/OneDrive/Desktop/Coderz%20intern%20sprint/sprint2/bootstrap1.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              // isBlog={false}
              title="webPage using Jquery"
              description="Using Jquery developed Accordion,ImageSlider,NavigationBar and Table"
              ghLink="https://github.com/CharanVuchi/JQuery"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
