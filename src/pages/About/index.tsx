import React from "react";
import Container from "../../components/Container";

const About: React.FC = () => {
  return (
    <Container>
      <br/>
      <div className="container mx-auto flex flex-col items-center md:w-9/12">
        <h1 className="text-2xl text-teal-600 mb-2">Mohsen Khodadadi</h1>
        <p className="text-sm">Unit 9, 21 Eric Road, Artarmon, 2064 NSW</p>
        <p className="text-sm">
          Mobile: <a href="call:0421575231">0421575231</a> Email:
          <a href="mailto:khodadadi.mohsen@hotmail.com">
            khodadadi.mohsen@hotmail.com
          </a>
        </p>

        <br />

        <h4 className="w-full text-lg text-teal-500">Professional Summary</h4>
        <p>
          A full stack web developer who is excellent team player and a leader
          with great attitude including areas of expertise of PHP, Laravel and
          JavaScript. He is with more than five years of experience in back­end,
          front­end and DevOps and continuously updating himself by new
          technologies. He likes to focus on front­end part, dig into it and use
          the latest technologies.
        </p>

        <br />
        <h4 className="w-full text-lg text-teal-500">Skills</h4>
        <div className="w-4/5 flex">
          <span className="w-1/3 flex flex-col pr-16 text-gray-700 text-sm border-b-2 border-teal-500 mr-10">
            Backend
          </span>
          <span className="w-1/3 flex flex-col pr-16 text-gray-700 text-sm border-b-2 border-teal-500 mr-10">
            Frontend
          </span>
          <span className="w-1/3 flex flex-col pr-16 text-gray-700 text-sm border-b-2 border-teal-500 mr-10">
            DevOps
          </span>
        </div>
        <div className="w-4/5 flex">
          <div className="w-1/3 flex">
            <ul className="flex flex-col w-1/2">
              <li>PHP</li>
              <li>Laravel</li>
              <li>Java</li>
            </ul>
            <ul className="flex flex-col w-1/2">
              <li>Postgre</li>
              <li>MySql</li>
            </ul>
          </div>
          <div className="w-1/3 flex">
            <ul className="flex flex-col w-1/2">
              <li>JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Vue.js</li>
              <li>Vuex</li>
              <li>Alpine.js</li>
              <li>Jquery</li>
            </ul>
            <ul className="flex flex-col w-1/2">
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Semantic UI</li>
            </ul>
          </div>
          <div className="w-1/3 flex">
            <ul className="flex flex-col w-1/2">
              <li>AWS</li>
              <li>Git</li>
              <li>Vapor</li>
            </ul>
            <ul className="flex flex-col w-1/2">
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>

        <br />

        <h4 className="w-full text-lg text-teal-500">Experiences</h4>

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">11/2017 to Present</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Lead Developer</span>
              Leafcutter/Marlin Communications
            </b>
            – Redfern, Sydney, Australia
          </p>
          <ul className="list-disc pl-5">
            <li>
              Provide software designs and build scalable applications depend on
              the requirement.
            </li>
            <li>
              Build hybrid and web applications using React.js, Vue.js for
              front-end and Laravel for back-end.
            </li>
            <li>
              Design, program and build databases such as MySql and PostgreSQL.
            </li>
            <li>
              Automate deployments to servers using CI/CD technique with
              pipeline, Git and Docker.
            </li>
            <li>Utilise third party APIs in existing and new applications.</li>
            <li>
              Attend meetings with clients to better understanding of project’s
              requirements and consultant them with their needs.
            </li>
            <li>
              Lead a team of developers to get the projects done by the
              deadlines.
            </li>
            <li>
              Review pull requests, comment the issues and discuss the code with
              the developers to enhance code quality.
            </li>
            <li>
              Making standards such as git flow for the team and get them into
              one direction to have better consistency and code quality.
            </li>
            <li>
              Create and update end user documentation and providing financial
              evaluation and costing for the projects.
            </li>
            <li>
              Integrate tools such as Jira, Bitbucket, Bugherd, Freshdesk,
              Sentry and Slack.
            </li>
          </ul>
        </div>

        <br />
        <br />

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">05/2017 to 11/2017</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Software Engineer</span>
              Gaventure Studio
            </b>
            – Damansara Perdana, Malaysia
          </p>
          <ul className="list-disc pl-5">
            <li>Design and build projects from scratch.</li>
            <li>
              Integrate React.js and React Native to build a hybrid application
              for gamers.
            </li>
            <li>
              Train and lead the team to enhance their knowledge with Javascript
              and React.js.
            </li>
            <li>
              Implement Agile Software Development and attend to meetings and
              stand­ups.
            </li>
          </ul>
        </div>

        <br />

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">12/2016 to 04/2017</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Software Developer</span>
              Kern Technology
            </b>
            – Damansara, Malaysia
          </p>
          <ul className="list-disc pl-5">
            <li>
              Design and build projects from scratch by a team using Laravel MVC
              such as EMS web application by having ability of sending scheduled
              emails, survey, etc and CMS panel for the existed systems.
            </li>
            <li>
              Build single page web applications using ReactJs and Vue.js.
            </li>
            <li>
              Utilise common third­party APIs such as Facebook, Google,
              Instagram and Linkedin.
            </li>
            <li>
              Attend to meetings and come up with ideas to solve problems as
              problem solver.
            </li>
          </ul>
        </div>

        <br />

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">03/2015 to 10/2016</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Web Developer</span>
              4Thirteen Media
            </b>
            – Puchong, Malaysia
          </p>
          <ul className="list-disc pl-5">
            <li>
              Design and build new projects as individual or working by a team
              using Laravel MVC.
            </li>
            <li>
              Write, design and edit web pages using Jquery, HTML, CSS, SASS and
              plugins if needed.
            </li>
            <li>
              Assigned to responsibilities of troubleshooting problems with PHP
              and other web technologies.
            </li>
            <li>
              Get Back up files from web sites and databases for instant
              recovery in case of problems.
            </li>
            <li>
              Identify problems uncovered by testing or customer feedback, and
              correct problems or refer problems to appropriate personnel for
              correction.
            </li>
            <li>Develop databases by Mysql.</li>
          </ul>
        </div>

        <br />

        <h4 className="w-full text-lg text-teal-500">Educations</h4>

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">03/2016</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">PhD</span>
              Computer Science
            </b>
          </p>
          <p className="font-thin text-gray-700">
            University Technology Malaysia ­- Kuala Lumpur, Selangor, Malaysia
          </p>
          <p>Withdrawn</p>
          <b className="italic font-bold text-gray-700">Research area:</b>
          <p>
            Implementing AI algorithms in Cloud Computing and Big Data to reduce
            Carbon emissions.
          </p>
        </div>

        <br />

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">03/2014</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Master of Science</span>
              Computer Science
            </b>
          </p>
          <p className="font-thin text-gray-700">
            University Putra Malaysia ­- Serdang, Selangor, Malaysia
          </p>
          <p>GPA 3.32</p>
          <b className="italic font-bold text-gray-700">Final Project:</b>
          <p>
            Implementing of XML and Intelligent Algorithm for Improving Web
            Query Processing in Heterogeneous Databases Access using Java, XML
            and MySql
          </p>
        </div>

        <br />

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">02/2011</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Bachelor of Science</span>
              Engineering of Computer Science
            </b>
          </p>
          <p className="font-thin text-gray-700">
            Azad University Mobarakeh Branch ­- Mobarakeh, Isfahan, Iran
          </p>
          <p>GPA 3.0</p>
          <b className="italic font-bold text-gray-700">Final Project:</b>
          <p>
            Accounting and Registration Windows Application for Gymnasium using
            C# and SQL­ Server
          </p>
        </div>

        <br />

        <div className="container mx-auto flex flex-col items-start pl-8">
          <p className="font-hairline text-gray-600">07/2007</p>
          <p className="font-thin text-gray-700">
            <b className="italic font-bold">
              <span className="text-teal-600">Associate of Science</span>
              Computer Science
            </b>
          </p>
          <p className="font-thin text-gray-700">
            Islamic Azad University Majlesi Branch ­- Majlesi, Isfahan, Iran
          </p>
          <p>GPA 3.0</p>
          <b className="italic font-bold text-gray-700">Final Project:</b>
          <p>
            Windows Application Accounting Software using Delphi and SQLServer
          </p>
        </div>

        <br />

        <h4 className="w-full text-lg text-teal-500">Links</h4>
        <div className="container mx-auto flex flex-col items-start pl-8">
          <a href="https://github.com/mossen" className="text-blue-400">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mohsen-khodadadi/"
            className="text-blue-400"
          >
            Linkedin
          </a>
        </div>
        <br />
        <h4 className="w-full text-lg text-teal-500">Articles</h4>
        <div className="container mx-auto flex flex-col items-start pl-8">
          <a
            href="https://www.researchgate.net/publication/310393449_A_Study_of_Ten_Popular_Android_Mobile_Cloud_Storage_Applications"
            className="text-blue-400"
          >
            A Study of Ten Popular Android Mobile Cloud Storage Applications
          </a>
          <a
            href="http://www.arpnjournals.org/jeas/research_papers/rp_2016/jeas_0316_3817.pdf"
            className="text-blue-400"
          >
            Improved Battery Life For Context Awareness Application in
            Smart­Phones
          </a>
        </div>
      </div>
      <br/>
    </Container>
  );
};

export default About;
