/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react"
import { FaLinkedin } from "react-icons/fa"
import SubPageTitle from "./common/SubPageTitle"

const Volunteers = () => {
  // dummy data
  const data = [
    {
      name: "Engramar Bollas JP",
      title: "Director",
      description:
        "Engramar's raison d'etre is to serve. A believer of servant leadership. He is passionate in providing service excellence to customers and ensuring people, culture, processes and technology support the same initiative. Engramar has worked in the IT industry for over 25 years. Having worked in Asia, the Middle East and Australia, Engramar has deep expertise in all aspects of software development lifecycle including business requirements analysis, systems design and development, product testing, release management, end-user training, pre-sales and post-implementation support. Engramar is working for GBG as a Senior Professional Services Consultant. Outside of work, Engramar is the current Director of Code.Sydney, a volunteering organisation that supports beginner developers transition to gain paid employment while helping non-profit and charity organisations with their app needs. He is also an incumbent Justice of the Peace in the State of New South Wales. Engramar has obtained a degree in Mathematics major in Computer Science from the Pontifical and Royal University of Santo Tomas in Manila.",
      linkdinLink: "https://www.linkedin.com/in/engramarbollas/",
      booksession: "https://koalendar.com/e/ask-engramar",
      avatar: "Mentor_Engramar.png",
    },
    {
      name: "Tony Johnson",
      title: "Mentor",
      description:
        "Despite having a Degree in Prehistory and Archaeology, Tony has survived 30 years in various IT careers; from hardware sales and service, support desk, linux systems administration, management, consultancy, and software development. He began coding commercially 8 years ago in Java for Structural Geology project, and moved on to full-stack web development. He has completed the Free Code Camp front-end and back-end curriculum for JavaScript, React/Redux, Node/Express, MongoDB and GraphQL. Tony is an active participant in Free Code Camp Sydney meetups. Currently, he is contracted as Project Manager for McLowd Financial Services Marketplace, a cloud-based software company.",
      linkdinLink: "https://www.linkedin.com/in/tony-johnson-53995413/",
      avatar: "Mentor_Tony.png",
    },
    {
      name: "Promie Yutasane",
      title: "Mentor",
      description:
        "Promie is currently working as a Software Engineer at Hireup, a tech company with an online platform that connects people with disability with support workers. He has a very strong focus on full stack development and currently using NodeJS, Express, TypeScript, MongoDB, and React. He is a part-time student at UNSW studying Masters of IT focusing on Software Engineering and E-Commerce Systems. Promie spends his spare time mentoring new programmers at Code.Sydney. As one of the pioneer mentors, Promie has introduced standardised processes around GitHub code submission among developers.",
      linkdinLink:
        "https://www.linkedin.com/in/%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-promie-yutasane-635a741b8/",
      avatar: "Mentor_Promie.png",
    },
    {
      name: "Kevin Foong",
      title: "Mentor",
      description:
        "Kevin has over 20 years of working experience in a variety of IT related areas including software development, web design and information management. The latter in the area of library and information science. He is currently working as a System Administrator for NSW Health where he mainly utilises SQL for report generation. He recently started learning Python, at first because he wanted to get into data science, but then found Flask along the way. He now considers himself a Python and Flask enthusiast and is interested in sharing his knowledge and learning from others.",
      linkdinLink: "https://www.linkedin.com/in/kevin-foong-044794/",
      avatar: "Mentor_Kevin.png",
    },
    {
      name: "Surya Setiyaputra",
      title: "Mentor",
      description:
        "Surya is a full-stack software developer with more than three-year professional experience with a previous life as a research scientist in Biophysics. He is a self-described ‘generalist’ with practical experience in setting up small businesses, personal finance, design, community building and tech startup in both Australia and Indonesia. Since mid-2019, Surya has been an active contributor to Free Code Camp Sydney meetups. As a self-taught developer, he is particularly interested in helping new coders who are interested in landing their entry role as a Junior Developer after going through the FreeCodeCamp full-stack curriculum. His current favourite web development stacks are Kotlin/Spring Boot, Ruby on Rails, Node, ReactJS and VueJS. In the near future, he aims to learn more SQL and functional programming. When he is not coding, Surya likes to read books about economics, anthropology, history and politics.",
      linkdinLink: "https://www.linkedin.com/in/suryast/?originalSubdomain=au",
      avatar: "Mentor_Surya.png",
    },
    {
      name: "Qj Stout-Spykers",
      title: "Mentor",
      description:
        "Qj is a computer science graduate and achieved high distinctions in microprocessor systems, systems and database design, discrete mathematics and programming principles. His primary software development experience is in embedded systems, deep-learning and back-end engineering. Currently, he is constraining his focus to mastering full-stack web development, after which, he has his eye on studying project management. As a Code.Sydney volunteer, Qj has acted as a technical team lead and principal back-end engineer on the CodeSydney website rework and internal 'Strataly’ project respectively. Qj can usually be found deep in some obscure documentation or sharing his knowledge on the Code.Sydney Discord server. In his past life, Qj was a professional musician and guitar tutor.",
      linkdinLink:
        "https://www.linkedin.com/in/qj-stout-spykers-704b221a1/?originalSubdomain=au",
      avatar: "Mentor_Qj.png",
    },
    {
      name: "Stephen Corral",
      title: "Mentor",
      description:
        "Stephen is a graduate of computer science in 2013 and currently taking a graduate certificate course at UTS on a part time basis. He completed the Free Code Camp web design certification and has exposure to React, Redux and Context API in volunteer projects and proof of concept initiatives in Code.Sydney. He is also familiar with C#/SQL Server and is interested in Linux. Stephen was the technical team lead of a successfully completed project for Dr. Lukas Carey's personal advocacy around convict criminology.",
      linkdinLink:
        "https://www.linkedin.com/in/stephen-melben-corral-73468b6b/?originalSubdomain=au",
      avatar: "Mentor_Stephen.png",
    },
    {
      name: "Lillian Luzinsky",
      title: "Mentor",
      description:
        "Lillian is a versatile Designer and Creative Technologist, with a keen eye for clean and elegant design throughout all her projects. She possesses a wide range of skills, including UX/UI Design, Motion Graphics and Software Engineering. Lillian absolutely loves CSS and making things look great and user-friendly. Before transitioning into Front End Development, Lillian spent time as a Graphic Designer for property marketing and later shifted into freelancing, where she has been building her own business for 13 years providing high quality design services. Due to her diverse abilities, she is highly proficient in collaborating and communicating with cross-functional teams, and loves learning and refining her programming skills.",
      linkdinLink:
        "https://www.linkedin.com/in/lillian-luzinsky/?originalSubdomain=au",
      avatar: "Mentor_Lillian.png",
    },
    {
      name: "Praveen Sequeira",
      title: "Mentor",
      description:
        "Seasoned, forward-looking Software Engineer with 15+ years' background in creating and executing innovative software solutions to enhance business productivity. Highly experienced in designing, developing, testing, and implementing REST APIs between Openedge based systems and external applications.",
      linkdinLink:
        "https://www.linkedin.com/in/praveenat/?originalSubdomain=au",
      avatar: "Mentor_Praveen.png",
    },
    {
      name: "Paolo Garde",
      title: "Mentor",
      description:
        "Paolo is a long-time startup veteran, having started at Uber in 2014, then moving on to Operations leadership roles at Australian startups FoodByUs and :Different. He recently decided to make a career change to the world of software engineering, ultimately transitioning into a software engineer role in December 2021. After joining Code.Sydney as a volunteer front-end developer for Project Migram, Paolo is currently leading a project to standardise and document our best practices on our very own Code.Sydney Playbook.",
      linkdinLink:
        "https://www.linkedin.com/in/paologarde/?originalSubdomain=au",
      avatar: "Mentor_Paolo.png",
    },
    {
      name: "Bao Hoang",
      title: "Mentor",
      description:
        "Bao has recently graduated with a Bachelor of Science in IT and just started his career in software development. He prides himself on being a self-taught developer, dabbling in all things tech including web development, embedded systems, database design, and IoT. Bao initially joined Code.Sydney to meet other technically-minded people to talk to, but now as a volunteer, he particularly loves to also share his knowledge and be a part of the group's learning journey. Besides programming, Bao currently loves engaging in customising mechanical keyboards and building Gundam models in an unhealthy manner.",
      linkdinLink: "https://www.linkedin.com/in/debubz/",
      avatar: "Mentor_Bao.png",
    },
    {
      name: "David Taing",
      title: "Mentor",
      description:
        "Due to the recent COVID lockdown kicking off an unhealthy obsession with all things software, David made the decision to change careers from Property Management in Real Estate. Jokingly, he'll say the reason is that you can't Google everything in Real Estate.         Not afraid to wear different hats and take on new challenges, you can find him working in the frontend, backend and occasionally in UI Design: primarily bringing a skillset focusing on full stack TypeScript with Next.js, Mongo, Express, React and Node. Looking to add tRPC, Tailwind CSS, Prisma and SQL. David aims to become a versatile and pragmatic engineer. He is currently working on repport.com.au, a Routine Inspections App for Self-Managed Landlords after identifying a pain point from his previous career. And he recently has stepped up as the temporary Frontend Lead for Migram.com.au, an Airtasker-like marketplace for migrants of refugee background in the Illawarra area to post or find work. When he isn't programming 24/7, you can find him playing competitive shooters, drinking craft beers, and thinking about mechanical keyboards.",
      linkdinLink: "https://au.linkedin.com/in/teeang",
      avatar: "Mentor_David.png",
    },
    {
      name: "Gabriel Djan",
      title: "Mentor",
      description:
        "Gabriel started her design career in a fire safety company as Information Designer, in charge of emergency evacuation diagram design and production for clients like Only About Children, AMF Bowling Group, MECCA to name a few. She then left the Information Designer role for UX UI designer role to work for a company specialising in applications software design, programming, system configuration, engineering, installation, commissioning of Building Automation, Management Systems & Access Control Systems. She designed user interfaces, user experience, and data analytics for real live data IoT and SaaS applications for clients like Citigroup, Bennelong, Crown Group, WeWork, Sans Clinic, and Dematic. Her unique combination of experiences complementing the UX UI Designer role includes a Computer Science (Bachelor Degree - Distinction) degree, digital design, and digital photography. She is a Tridium Niagara 4 Technical Certification Program (TCP) trained. In her free time, she likes exploring investment vehicles/products.",
      linkdinLink: "https://www.linkedin.com/in/gabrieltwd/",
      avatar: "Mentor_Gabriel.png",
    },
    {
      name: "Jacin Yan",
      title: "Mentor",
      description:
        "Jacin is an enthusiastic web developer who is seeking a new challenging career after many years of being in Civil/Structural Engineering. He found his greater passion in coding and programming on an occasion when he brushed on up his programming skills utilizing the APIs of Finite Element software and therefore he gained an IT diploma following this. Soon after the most recent graduation, he joined the CRM and website projects of PAACT, being the technical team lead with an emphasis on frontend development. His tech stack includes React.js, Redux, React-Query, react testing library, where he fully embraces the idea of functional programming that aligns with his analytical skills. On top of that, what makes him unique is he can also be found passionate about UI/UX design with his keen eye on aesthetics because of years of immersion in structural design and dealings with architects.",
      linkdinLink:
        "https://www.linkedin.com/in/jacin-ji-yan/?originalSubdomain=au",
      avatar: "Mentor_Jacin.png",
    },
    {
      name: "Sadruddin (Sunny) Junejo",
      title: "Mentor",
      description:
        "Sunny is currently a software engineer at Pragmateam, a consultancy based in Sydney. He has over seven years of professional experience in a variety of industries, including finance, oil & gas, pharmaceuticals and media. In the past, Sunny has functioned as a QA tester, mobile engineer, frontend engineer, backend engineer, cloud architect and even a Scrum Master, making him very much a jack-of-all-trades. After moving to Sydney from the UK in January 2022, Sunny realised the value of career advice from more experienced developers. As a result, he sought out Code.Sydney as a means to to give back to the community, especially to help budding software engineers land their first role. To that end, Sunny is always available for questions and advice, both technical and non-technical, on the Code.Sydney Slack and in the regular Sunday meetups.",
      linkdinLink: "https://www.linkedin.com/in/sadruddinjunejo/",
      avatar: "Adviser_Sunny.png",
    },
    {
      name: "Henry He",
      title: "Web Developer",
      description:
        "Henry is front-end developer with background in electrical and electronics engineering. To become more creative and to explore the ability to turn people's wonderful ideas into reality, Henry decided to move into software engineering which he believes is an industry with a lifetime of exciting challenges. After few years working in the IT industry, Henry is proud to say that he is able to adapt to rapidly changing environment and tech stacks, and more importantly, he is always passionate about picking up new skills and exploring deeper on what he has learnt. Henry's current main tech stacks includes Vue, CSS (SCSS) - Vanilla CSS lover but comfortable with element UI, tailwind, and bootstrap, JavaScript/TypeScript, Cypress/Jest, and other skills like Ruby on Rails, Express, Node, React, Figma, etc.",
      linkdinLink:
        "https://www.linkedin.com/in/chenhe-henry/?originalSubdomain=au",
      avatar: "WD_Henry.png",
    },
    {
      name: "Luke Zhao",
      title: "Web Developer",
      description:
        "Luke has always been fascinated with computers since childhood. Despite having a degree in Commerce, Luke has explored the world of computing on his free time. He has been a superb self-directed learner with excellent computer and web development skills. He is highly poised and dedicated with strong education and training in design principles and programming languages. Luke is also adept at all aspects of modern web development techniques from front-end to back-end including HTML, CSS/Sass, JavaScript, React/Redux, Vue/Vuex, Tailwindcss, MongoDB, Node/Express, GraphQL, Firebase and AWS.",
      linkdinLink:
        "https://www.linkedin.com/in/luke-zhao-398886214/?originalSubdomain=au",
      avatar: "WD_Luke.png",
    },
    {
      name: "Ella Ferreira",
      title: "Web Developer",
      description:
        "Ella has graduated with a degree in Chemical Engineering. After migrating to Australia, she decided to switch career and enter web development. She currently works as a junior full stack developer at a digital advisory agency in Brisbane, where she has lived for almost five years. She discovered her passion for coding after taking a long-term course in the area. Ella has always been curious in exploring new technologies and is very passionate in delivering solutions that meet user expectations.",
      linkdinLink:
        "https://www.linkedin.com/in/ella-ferreira-3959aa82/?originalSubdomain=au",
      avatar: "WD_Ella.png",
    },
  ]

  const [volunteers, setVolunteers] = useState([])
  const [sortedVolunteers, setSortedVolunteers] = useState([])
  const [filterType, setFilterType] = useState("name")

  const filterRef = useRef(null)

  useEffect(() => {
    // get api data here later
    setVolunteers(data)
    setSortedVolunteers(data)

    // filter input focus after page initial render
    filterRef.current.focus()
  }, [])

  const handleFilter = (text) => {
    let newSortedValunteers = volunteers.filter((volunteer) => {
      return volunteer[`${filterType}`]
        .toLowerCase()
        .includes(text.toLowerCase())
    })
    setSortedVolunteers(newSortedValunteers)
  }

  return (
    <>
      <div className="volunteers-page">
        <SubPageTitle title="Volunteers" />

        <div className="filter input-group my-group">
          <input
            type="text"
            className="filter-input"
            name="snpid"
            placeholder="Find out volunteers..."
            onChange={(e) => handleFilter(e.target.value)}
            ref={filterRef}
          />
          <select
            className="filter-select"
            aria-label="Default select example"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option defaultValue="name">Name</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            {/* <option value="skills">Skills</option> */}
          </select>
        </div>

        <div className="d-none d-md-block d-lg-block d-xl-block">
          <div className="volunteerpage-layout-lg">
            {sortedVolunteers.map((volunteer, i) => {
              return (
                <div className="volunteer-card-lg" key={i}>
                  <img
                    src={`/assets/images/volunteers/${volunteer.avatar}`}
                    alt={volunteer.name}
                    className="rounded-circle avatar avatar-lg"
                  />
                  <div className="volunteer-title-name-lg">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                  <div className="volunteer-description-lg section-title">
                    {volunteer.description}
                  </div>
                  <a
                    href={volunteer.linkdinLink}
                    className="social-share social-style--2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className="d-md-none volunteerpage-layout-sm">
          {sortedVolunteers.map((volunteer, i) => {
            return (
              <div className="volunteer-card-sm" key={i}>
                <div className="volunteer-info-sm">
                  <img
                    src={`/assets/images/volunteers/${volunteer.avatar}`}
                    alt={volunteer.name}
                    className="rounded-circle avatar"
                  />
                  <div className="volunteer-title-name-sm">
                    <span>{volunteer.name}</span>
                    <span>{volunteer.title}</span>
                  </div>
                  <a href={volunteer.linkdinLink}>
                    <FaLinkedin />
                  </a>
                  <a href={volunteer.booksession}>Book a session</a>
                </div>
                <div className="volunteer-description-sm section-title">
                  <p>{volunteer.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Volunteers
