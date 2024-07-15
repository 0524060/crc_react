// import React from "react"
import "./assets/css/main.css"

const Middle = () => {
  return (
    <div id="middle">
      <div className="navbar">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#project">Recent Work</a>
          <a href="#contact">Get In Touch</a>
        </div>
      </div>
      <section id="about">
        <h1>About me</h1>
        <p>
          As a Computer Science student at UNSW with two years of tech and
          customer service experience, I am eager to apply my cloud management
          and problem-solving skills in a cloud technology role. My background
          equips me to enhance your team’s capabilities in developing secure,
          innovative solutions.
        </p>
        <h1>Technical skills</h1>
        <p>
          * Cloud Computing: AWS (preferred), Azure
          <br />
          * System Operations: Linux (Ubuntu), Windows, VMware
          <br />
          * Programming/Scripting Languages: Python, Bash, Zsh, PowerShell,
          JavaScript, TypeScript
          <br />
          * Full stack: HTML5, CSS3, React.js, Vite, webpack, Node.js, Django
          <br />
          * Infrastructure as Code (IAC): Terraform (preferred), CloudFormation,
          CDK
          <br />
          * CI/CD: GitHub Actions, Git, Docker, Kubernetes
          <br />
          * AWS Services: EC2, S3, RDS (Aurora MySQL), DynamoDB, Lambda, ECS,
          CloudFormation, VPC, Route 53, CloudFront, CloudWatch, CloudTrail,
          RedShift, Kinesis, WAF, Shield Advanced
          <br />
          * Database Management: RDS SQL, Document databases (Aurora MySQL,
          DynamoDB)
          <br />
          * Networking/OS Core Concepts: Deep understanding of networking and OS
          fundamentals
          <br />* Others: Agile and Scrum experience, strong English and chinese
          communication skills, Wireshark
        </p>
        <h1>Education</h1>
        <p>
          * Professional Year Mar &nbsp;&nbsp;&nbsp;&nbsp;2024 - Current
          <br />
          &nbsp;&nbsp;&nbsp;Performance Education, Sydney
          <br />
          * Master of Information Technology &nbsp;&nbsp;&nbsp;&nbsp;Feb 2022 -
          Feb 2024
          <br />
          &nbsp;&nbsp;&nbsp;University of New South Wales, Sydney
          <br />
          &nbsp;&nbsp;&nbsp;Special interest in: Cloud Computing
          <br />
          * Bachelor of Information Management &nbsp;&nbsp;&nbsp;&nbsp;Sep 2016
          – Jun 2020
          <br />
          &nbsp;&nbsp;&nbsp;National Kaohsiung University of Science and
          Technology, Taiwan
          <br />
          &nbsp;&nbsp;&nbsp;Key learning areas included: System Administration
          <br />
        </p>
        <ul className="actions">
          <li>
            <a href="https://linkedin.com/in/lihungkuo" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </section>

      <section id="project">
        <h1>Recent Work</h1>
        <div className="row">
          <article className="col-6 col-12-xsmall work-item">
            <a href="images/fulls/01.jpg" className="image fit thumb">
              <img src="./src/images/thumbs/01.jpg" alt="Project 1" />
            </a>
            <h3>Magna sed consequat tempus</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article className="col-6 col-12-xsmall work-item">
            <a href="images/fulls/02.jpg" className="image fit thumb">
              <img src="./src/images/thumbs/02.jpg" alt="Project 2" />
            </a>
            <h3>Ultricies lacinia interdum</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
        </div>
        <ul className="actions">
          <li>
            {/* <a href="https://github.com/0524060" className="button">
              Full Portfolio
            </a> */}
          </li>
        </ul>
      </section>

      <section id="contact">
        <h1>Get In Touch</h1>
        <div className="row">
          <div className="col-4 col-12-small">
            <ul className="labeled-icons">
              {/* <li>
                <h3 className="icon solid fa-home">
                  <span className="label">Address</span>
                </h3>
                Unit59 8-18 Mclntyre St.
                <br />
                Gordon, NSW 2072
                <br />
                Australia
              </li> */}
              <li>
                <h3 className="icon solid fa-mobile-alt">
                  <span className="label">Phone</span>
                </h3>
                0415898567
              </li>
              <li>
                <h3 className="icon solid fa-envelope">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:andykuo417@gmail.com">andykuo417@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Middle
