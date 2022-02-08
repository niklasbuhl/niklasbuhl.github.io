import React from "react"
import StyledLinkIcon from "./StyledLinkIcon"

const content = {
  experience: {
    h2: "Work Experience",
    items: {
      ibm: {
        title: "Associate Full-stack Software Engineer",
        years: "2021 - Present",
        institution: (
          <a
            href="https://www.ibm.com/employment/ciceurope/dk-da"
            target="_blank"
          >
            IBM Client Innovation Center
            <StyledLinkIcon />
          </a>
        ),
        description: (
          <>
            <p className="description">
              The IBM Client Innovation Centre is an entrepreneurial start-up
              with the support of the world's largest IT and consulting services
              company: IBM. The centre has been established to deliver a wide
              range of the latest technical services to our clients.
            </p>
            <p className="description">Project... (TODO)</p>
          </>
        ),
      },
      intermission: {
        title: "Intermission",
        years: "2019 - 2021",
        institution: "Vorupør, Caribbean & COVID",
        description: (
          <>
            <p className="description">
              Life After my studies I moved in Vorupør, tried to; launch a
              business, finding a remote job and worked on starting a digital
              fabrication laboratory in the co-work space called Silicon VØ and
              finally travel the south americans and Caribbean. COVID really
              made everything not go as planned - I guess for everyone in the
              world…
            </p>
            <h4>Fablab VØ</h4>
            <p className="description">
              A digital fabrication laboratory and art space in the office
              community Silicon VØ. Links, images.
            </p>
            <h4>Caribbean</h4>
            <p className="description">
              Travelled the Caribbean with the sailboat Queen Bee (pictures?)
              during the winter, and where expecting to be away for the majority
              of 2020.
            </p>
          </>
        ),
      },
      idemolab: {
        title: (
          <>
            {" "}
            IoT and Product Prototyper{" "}
            <span style={{ color: "var(--gray)" }}>
              - Internship then student job
            </span>
          </>
        ),
        years: "2018 - 2019",
        institution: (
          <a href="http://idemolab.com/" target="_blank">
            IdemoLab at FORCE Technology
            <StyledLinkIcon />
          </a>
        ),
        description: (
          <>
            <p>
              <a
                href="https://web.archive.org/web/20190729222451/https://idemolab.madebydelta.com/"
                target="_blank"
              >
                WebArchive from when I worked there
              </a>
            </p>
            <p>
              IdemoLab bridges the gap between technology and design. We focus
              on the important early stages of the design process and strive to
              create meaningful experiences for users and customers. IdemoLab
              specialises in validating the ideas of customers, through holistic
              user oriented product development, prototyping and testing in
              real-life situations, to close the gap between people and
              technology, and have a viable business plan.
            </p>
            <p>
              At IdemoLab I designed and developed of various prototypes within
              the field of digitalisation, internet of intelligent things and
              software applications. Some of the POCs I worked on include: A
              system in a supermarket manipulating lights in the ceiling to
              direct users to unknown positions of a product (LINK). A
              interfaces to collect and show the bus times at the nearby
              bus-stop (LINK) or weather information through a light
              installation (LINK). A tracking device to put inside the box of
              delicate wares before shipping, in order to track position,
              climate and vibrations (NDA).{" "}
            </p>
            <h4>Activities</h4>
            <ul>
              <li>
                Mechanical design and CAD for 3D printing and laser cutting
                Design
              </li>
              <li>
                development and construction of prototypes and test in real-life
                situations
              </li>
              <li>
                Evaluation of products and user specifications IT Development
              </li>
              <li>software design and programming Embedded design</li>
              <li>
                microelectronics and programming General product evaluation for
                redesign
              </li>
            </ul>
            <h4>Mentionable Projects</h4>
            <ul>
              <li>IBIZ Rainbow</li>
              <li>Bus Watch</li>
            </ul>
            <h4>Keywords</h4>
            <p>
              microelectronics, prototyping, python, raspberry pi, phillips hue,
              inventor, prototyper, maker, design, designThinking
            </p>
          </>
        ),
      },
      dsl: {
        title: (
          <>
            IoT <span style={{ color: "var(--gray)" }}> - Student Worker</span>
          </>
        ),
        years: "2016 - 2018",
        institution: (
          <a
            href="https://www.bibliotek.dtu.dk/english/servicemenu/visit/smart-library"
            target="_blank"
          >
            DTU Smart Library
            <StyledLinkIcon />
          </a>
        ),
        description: (
          <>
            <p>
              DSL is a ‘Living Lab’ in development - For new library services
              and a platform for various student or Ph.D research projects like
              within the topics of internet of things, indoor climate or
              preventing fire hazards.
            </p>
            <h4>Activities</h4>
            <ul>
              <li>
                Researching, selecting, distributing, developing and
                implementation new sensory and cloud systems to the DSL
                collection.
              </li>
              <li>
                Continued my idea of starting a DTU Hack Lab, a community where
                people can work with, share and learn new technologies.
              </li>
              <li>
                Implementation of almost 100 ModCams in the library for projects
                and a lot of other sensory systems.
              </li>
            </ul>
          </>
        ),
      },
      lego: {
        title: "Core Crew, IT-Specialist",
        years: "2016",
        institution: "LEGO First League",
        description: (
          <>
            <h4>Activities</h4>
            <p>
              Planning, preparing and executing an event with over a thousand
              kids. Teaching LEGO Evo Mindstorm at workshops.
            </p>
          </>
        ),
      },
      dtuisc: {
        title: "Student Assistant",
        years: "2015 - 2017",
        institution: "DTU Innovation Support Center",
        description: (
          <>
            <h4>Activities</h4>
            <p>
              Activities The tasks here were quite versatile. Layout,
              programming, illustration, graphic design, planning and execution
              of events and general office work.
            </p>
          </>
        ),
      },
    },
  },
  education: {
    h2: "Education",
    items: {
      dtuite: {
        title: "B.Eng IT-Electronics",
        years: "2015 - 2019",
        institution: "Technical University of Denmark",
        description: (
          <>
            <p>
              A broad study in the cross-field between IT and electronics, to
              develop intelligent functions in a variety of applications and
              hardware/software embedded-systems. I studied hardware-near
              programming, microprocessors and electronics, general computer
              science, the mathematics behind and embedded systems engineering
              to develop new intelligent functionality.
            </p>
            <p>
              In projects have done extensive C/C++ programming for example in
              OpenFrameworks, where I made a visualisation and control
              application of an intelligent drone, with onboard camera for
              computer vision. We have also been introduced to Assembly code and
              FPGA programming.
            </p>
            <h4>Projects</h4>
            <ul>
              <li>
                ITS Green, my graduation project in collaboration with IdemoLab
              </li>
              <li>Metal Detector</li>
              <li>Drone Space</li>
            </ul>
            <h4>Exchange at Tohoku University in Japan, fall 2017</h4>
            <p>
              Going abroad really increased my independence, cultural
              understanding, a great opportunity to study robotics and work with
              UX and a project with a projector robot for augmented spatial
              interfaces using Unity in the RIEC Interactive Content Design Lab.
            </p>
            <h4>Keywords</h4>
            <p>
              Hardware-Near Programming, Software Engineering, Distributed
              Systems, Electronics, Robotics, Interaction Content Design,
              Human-Machine Interaction, Microprocessors, Microelectronics,
              Integrated Circuits, Sensors, Actuators, Signal Processing,
              Computer Vision, C, C/C++, Python, Java, Wiring C
            </p>
          </>
        ),
      },
      aaucphsus: {
        title: "⅔ B.Sc Sustainable Design",
        years: "2013 - 2015",
        institution: "Aalborg University in Copenhagen",
        description: (
          <>
            <p>
              Before studying at DTU I studied B.Sc. Sustainable Design for two
              years, because I think it is extremely important the designers of
              tomorrow will make up for what the previous generation, of course
              unknowingly, messed up and push the tech industry into more
              sustainable and ethical solutions. Not just technology, but also
              the approach to technology.
            </p>
            <p>
              During this study I learned a lot about project management,
              industrial design, holistic design thinking, co-creation, user
              involvement, the soft aspects of prototyping, classic engineering
              disciplines and how to create value in a fusion of trifold
              sustainability. I worked on various projects to ease climate
              impact and improve social welfare.
            </p>
            <p>
              I completed four out of six semesters before finally decided to
              pursue my passion for tech, I wanted the hard competencies build
              the concepts.
            </p>
            <h4>Projects</h4>
            <ul>
              <li>...</li>
            </ul>
            <h4>Keywords</h4>
            <p>
              Classic Engineering, Thermodynamics, LCA, Holistic Design
              Thinking, Co-creation, User-Involvement, Product Design,
              Product-Service System, Business Model Canvas, Object Oriented
              Programming, Industrial Design, Product Design,
            </p>
          </>
        ),
      },
      rih: {
        title: "Innovation Manager, Media Production and Entrepreneurship",
        years: "2012",
        institution: "Ryslinge Innovation Folk-highschool",
        description: (
          <>
            <h4>Keywords</h4>
            <p>
              Media Production, Entrepreneurship, Business Developing, Graphic
              Facilitation, Ideation, Visual Communication, Project Management,
              Innovationcamps, Storytelling
            </p>
          </>
        ),
      },
      htx: {
        title: "Technical Gymnasium Student",
        years: "2008 - 2011",
        institution: "HTX Silkeborg",
        description: "Australia",
      },
    },
  },
  competencies: {
    h2: "Competencies",
    items: {
      general: {
        title: "General",
        items: (
          <p>
            Spatial, Abstract and Visual Intelligence Project Management,
            Backcasting, Structured, Systematic Problem and Solving Alternative
            and Radical, Rebel, not afraid to disagree and push Problem-finding
            oriented before solving, Divide and Conquer Intra- and
            Entrepreneurial systematically creative approach to problem solving,
            Goal-oriented
          </p>
        ),
      },
      dev: {
        title: "Developing IT & Embedded Systems Engineering",
        items: (
          <p>
            Code is magic Full Stack - Code a browser (client) - Code a server -
            Code a database Code embedded systems Code mobile applications Code
            desktop programs Frontend, User Interfaces Backend, Databases
            Digitalisation and Internet of Intelligent Things Distributed
            Systems System Architecture Cyber Physical Systems Objective
            Oriented Programming Software Development Web, Mobile and Desktop
            Application Development Automation and Mechatronics Digital
            Electronics Embedded Systems, Microcontrollers, Sensors, Actuators,
            Integrated Circuits Computer Science Technology Stack C, C/C++,
            OpenFrameworks, Wiring, Arduino API, Particle API, openCV Python,
            Flask Ruby, SketchUp API HTML5, CSS3, SASS, Bootstrap JavaScript,
            TypeScript, jQuery, React, Gatsby, NodeJS, Express, RESTful MongoDB,
            GraphQL Processing Swift, iOS API C#, Unity LC3 Assembler
            Machinecode USB, SPI, I2C, PWM Not so experienced Java, php, VHDL,
            NodeRed, MySQL, SqLite Single Board Computers, Micro Controlling
            Units Arduino Series, Raspberry Pi, Particle Smoothie-board, TI
            SensorTag, ModCam, Robotic Systems ARDrone v2, MIR, UR5, NAO, Tipron
            Git, K8S, Docker, GitHub Actions Azure (Badge) Atom, Xcode, Qt,
            Microsoft Visual Studio Code, Netbeans, Eclipse Wireshark Fritzing
            Postman, Insomnia, UNIX-based systems, Windows, MacOS, General
            Computer Science
          </p>
        ),
      },
      design: {
        title: "Prototyping & Design Engineering",
        items: (
          <p>
            The act of making shit real with reflected and meaningful decisions
            based on people, engineering and science. Empathic Design
            Understanding of many perspectives to a given situation Design for
            empathy, meaningfulness, sustainability, ethics, diversity,
            accessibility, privacy, equity Holistic UX, User Experience Design,
            Human Centred Design Design Processes Tangible UI, Userinterface
            General Sciences and Engineering Disciplines Crafting in Workshop
            High- and Low-Fidelity Prototyping, Mockup, Testing, “Proof of
            Concept” 3D Printing, Lasercutting … Industrial Design CAD, Digital
            Sketching SketchUp, SolidWorks Sustainable Design Aesthetics
            systematically creative approach to problem solving,
          </p>
        ),
      },
      art: {
        title: "New Media Art Production",
        items: (
          <p>
            Photography Videography, Video Editing Drawing, Illustrations
            Storytelling, Visual Identity Digital Illustration, Layout,
            Infographics, Creative Code Projection Virtual, Augmented and Mixed
            Reality Light Art Projection Mapping Tools Adobe Creative Suite -
            Illustrator, InDesign, Premiere Pro, Photoshop, XD
          </p>
        ),
      },
      wizard: {
        title: "General IT Wizardry",
        items: (
          <p>
            MatLAB, Maple, GeoGebra Microsoft Office Markdown, LaTeX Social
            Media, Slack, And so fourth… PDFs and Printers
          </p>
        ),
      },
    },
  },
  collectives: {
    h2: "Collectives",
    items: {
      kintsugi: {
        title: "IT Developer and Technology Literacy Advocate",
        years: "2019 - Present",
        institution: (
          <a
            href="https://kintsugi-design.com/team-member/niklasbuhl/"
            target="_blank"
          >
            Kintsugi Design
            <StyledLinkIcon />
          </a>
        ),
        description: (
          <p>
            | IT Developer and Technology Literacy Advocate This is a creative
            technology and design studio specialising in strategy and future
            proofing. My task is to join "Designer in Residence" in various
            companies.
          </p>
        ),
      },
      cybernauterne: {
        title: "Satelite, Founder, Educator and Creative Coder",
        years: "2015 - Present",
        institution: (
          <a href="https://cybernauterne.dk" target="_blank">
            Cybernauterne
            <StyledLinkIcon />
          </a>
        ),
        description: (
          <p>
            This is an initiative and community where we explorer our digital
            reality and fight for technological literacy. By educating people in
            tech-skills, online etiquette, and politics. A couple of years ago
            Cybernauterne emerged as a professional platform for some of the
            most dedicated members to pursue the mission in the public and
            industry. See projects.
          </p>
        ),
      },
    },
  },
  volunteer: {
    h2: "Volunteer Experience",
    items: {
      model: {
        title: "model",
        years: "2017 - Present",
        institution: (
          <a href="https://www.instagram.com/model.niklasbuhl/" target="_blank">
            Instagram Profile
            <StyledLinkIcon />
          </a>
        ),
      },
      edensdoor: {
        title: "WWOOFER",
        years: "2020",
        institution: "Edens Door",
        description: "Gardening, various practical outdoor work, Jennifer …",
      },
      vo: {
        title: "Core Crew & Media Production",
        years: "2014 - 2019",
        institution: "VØ Surfkollektiv",
        description: (
          <p>
            Core Crew, Media Production at the yearly surf festival (VØ
            Surffestival), where I did photography, videography, graphics, PR
            runner, and general event-crew for bunker parties, techno raves,
            surfing, outdoor activities. Surf all day and party all night
            <a href="https://www.norrevegas.com/" target="_blank">
              Nørre Vegas
            </a>
          </p>
        ),
      },
      egmontSusCommitee: {
        title: "Miljø på Egmont",
        years: "2015 - 2017",
        institution: "Egmont Sustainability Committee",
        description: (
          <p>
            Working towards making a 500-person dormitory located in Copenhagen
            more sustainable through planning and executing various initiatives
            for saving water, recycling, implementing a green roof, established
            a community urban garden, educational and inspirational events.
          </p>
        ),
      },
      egmontFestival: {
        title: "Core Crew, Media Production",
        years: "2014 - 2017",
        institution: "Egmont Festival",
        description: (
          <p>
            Media production, PR, photo and video for a festival of 1.500 people
            with known danish artists like TV2, Sivas, Den Sorte Skole.
          </p>
        ),
      },
      detSkraaTeater: {
        title: "Media Production",
        years: "2012 - 2014",
        institution: "Det Skrå Teater",
        description: (
          <p>
            For a couple of years I helped my friend Jeppe Sand with his theatre
            production, his workshops and personal projects by producing a
            number of video stories and a music video.
          </p>
        ),
      },
      ibizze: {
        title: "Intern",
        years: "2012 - 2013",
        institution: "Ryslinge Innovation Folk Highschool",
        description: (
          <p>
            After my stay I became an intern to continue concept developing this
            school focusing on entrepreneurship and visual storytelling and to
            start a hackerspace.
          </p>
        ),
      },
      pwa: {
        title: "Guard, Runner, Judge Assistant",
        years: "2010, 2014, 2016",
        institution: "PWA Cold Hawaii - Windsurfing World Cup in Klitmøller",
      },
      kyrgyzstan: {
        title: "Core Crew",
        years: "2008 - 2009",
        institution: "Project Kyrgyzstan at Rønde Boardingschool",
        description: (
          <p>
            A project to raise money to an orphanage in Kyrgyzstan, where we
            also went, met people living in poverty and built a playground in a
            rural village.
          </p>
        ),
      },
    },
  },
  miscellaneous: {
    h2: "Miscellaneous",
    items: {
      awards: {
        title: "Awards and Nominations",
        items: (
          <ul>
            <li>2016 Best Project in 3rd semester IT-Electronics</li>
          </ul>
        ),
      },
      achievements: {
        title: "Achievements",
        items: (
          <ul>
            <li>
              2017 International Exchange Tohoku University, Japan with JASSO
              Scholarship
            </li>
            <li>2017 Community Gardening Project Grant</li>
            <li>
              2013 Accepted at Egmont Kollegiet (1000 applications, for 50 spots
              per year)
            </li>
            <li>
              2015 20.000 DKK to the Share Chair Project at Roskilde Festival
              from ???
            </li>
            <li>2011 International Exchange Hervey Bay, Australia</li>
          </ul>
        ),
      },
      certificate: {
        title: "Certificates",
        items: (
          <ul>
            <li>
              See <a href="">Cradle</a>
            </li>
            <li>IBM Design Thinking</li>
            <li>Microsoft Azure Fundamentals AZ-900</li>
          </ul>
        ),
      },
      other: {
        title: "Other",
        items: (
          <>
            <ul>
              <li>Danish mother tongue</li>
              <li style={{ lineHeight: "1.2" }}>
                English fluently and professional proficiency both spoken and
                written, <br />
                TOEFL 104 (2017)
              </li>
              <li>
                Drivers License Type B, experience in EU, US, AU, JP and the
                Caribbean
              </li>
            </ul>
            <h3>Travelling and Living Abroad</h3>
            <ul>
              <li>Sailed the Caribbean</li>
              <li>Studied half a year in Japan</li>
              <li>Solo trips to Sri Lanka and Indonesia</li>
              <li>Studied half a year in Australia</li>
              <li>Ventured to Iran and Kyrgyzstan</li>
            </ul>
          </>
        ),
      },
      references: {
        title: "References",
        items: (
          <>
            <ul>
              <li>Egil Rød Larsen at IBM Client Innovation Center</li>
              <li>Vanessa Carpenter at Kintsugi Design</li>
              <li>Mikkel Leth Olsen at IdemoLab</li>
              <li style={{ lineHeight: "1.2" }}>
                Jacob Lawaetz at DTU graduation project superviser,
                <br />5 axis laser cutter project and friend
              </li>
              <li>Maia Lorentzen at Cybernauterne</li>
              <li>Lars Binau at DTU Smart Library</li>
              <li>Rasmus ... at DTU Innovation Support</li>
              <li>Edward Tridaous at DTU IT-Electronics (See letter)</li>
            </ul>
          </>
        ),
      },
    },
  },
}

export default content
