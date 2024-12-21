import React from "react";
import link from "../assets/icons/link.png";
import video from "../assets/icons/video.png";

const Project = [
    {
        type: "Team Project",
        title: "Attendance Management System",
        image: "Attendance.png",
        description: "Designed the whole system from scratch according to the College requirements specifically to mark and maintain record of attendance of over 1000+ Students daily.(Login with EID:123456789 ,Password:1234567890 for both roles)",
        skills: "ReactJs,Django,PostgreSQL",
        github: "https://github.com/kshitiz11101/Attendance-management",
        web: "https://att-frontend-pi.vercel.app/",
        style: true
    },
    {
        type: "Team Project",
        title: "Hridya-AI",
        image: "Hridya.png",
        description: "Hridya-AI aimed at predicting the readmission of heart-failure patients within 30 days of discharge.By leveraging machine learning, we hope to identify at-risk patients, enabling targeted interventions to reduce morbidity, mortality, and financial burdens on healthcare systems",
        skills: "Pandas, NumPy, Scikit-learn, Flask, ReactJS",
        github: "https://github.com/ShivanshAr97/HridyaAI",
        web: "https://hridya-ai.vercel.app/",
        style: true
    },

    {
        type: "Personal Project",
        title: "Talent Track",
        image: "Talent.png",
        description: "Developed a comprehensive Job Application System where job seekers can easily browse and apply for job postings.Enabled companies to post job and internship opportunities with detailed requirements and descriptions.(For job seekers: Email: kshitiz@gmail.com, Password: 12345678, For Companies: Email: google@gmail.com , Password: 12345678.)",
        skills: "MERN, JWT,Tailwind CSS,Cloudinary",
        github: "https://github.com/kshitiz11101/Talent-Track",
        web: "https://talent-track-one.vercel.app/",
        style: true
    },
    {
        type: "Personal Project",
        title: "CodeHub",
        image: "Codehub.png",
        description: "CodeHub is a fully functional Code Editor using judge0 rapid-api. It compiles the code of more than 40 programming languages and has the ability to execute a program for a different test case using custom input.",
        skills: "React.js, Rapid-Api",
        github: "https://github.com/kshitiz11101/Code-Hub",
        web: "https://codehub-sand.vercel.app/",
        style: true
    },
    {
        type: "Hackathon Project",
        title: "Blood Chain",
        image: "Bloodchain.png",
        description: "Blood-Chain is a full stack blood bank ecosystem designed to minimize blood waste and facilitate an efficient blood donation process.",
        skills: "React.js,Node.js,Express.js,MongoDb,jwt",
        github: "https://github.com/kshitiz11101/blood-chain",
        web: "https://blood-chain-74yi.vercel.app/login",
        video: 'https://www.youtube.com/watch?v=KRTDnOg7nLw',
        style: false
    },
    {
        type: "Personal Project",
        title: "Spotify Clone",
        image: "Spotify.png",
        description: "Developed a Spotify Clone web application using some front-end technologies, including html,css and javascript. Implemented a user-friendly and responsive user interface that closely resembles the Spotify music streaming platform, providing an immersive music listening experience.",
        skills: "Html,Css,Javascript",
        github: "https://github.com/kshitiz11101/Spotify-Clone",
        web: "https://kshitiz11101.github.io/Spotify-Clone/",
        style: true
    },
   
    {
        type: "Personal Project",
        title: "Weather App",
        image: "Weather.png",
        description: "It is a fully functional Weather App using modern web technologies, including Reactjs and Semantic UI. Integrated the OpenWeatherMap API to fetch real-time weather data and display it to users, providing accurate weather information.",
        skills: "React.js, Semantic UI,OpenWeatherMap API",
        github: "https://github.com/kshitiz11101/Weather-App",
        web: "https://weather-app-drab-seven.vercel.app/",
        style: false
    },
    {
        type: "Assignment Project",
        title: "Quiz App",
        image: "Quiz.png",
        description: "This is a quiz application made using react.js and tailwind css. This quiz consists of 10 questions based on programming fundamentals.",
        skills: "React.js, Tailwind Css",
        github: "https://github.com/kshitiz11101/smarthire-quiz-assignment",
        web: "https://smarthire-quiz-assignment.vercel.app/",
        style: false
    }
];

const Projects = () => {
    return (
        <>
            <section className="mt-20" id="projects">
                <div className="flex flex-col gap-2 items-center" data-aos="zoom-in-down" data-aos-duration="800">
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
                        MY PROJECTS
                    </p>
                </div>

                <div className="flex flex-col gap-32 md:gap-20 items-center xl:gap-20 mt-20">
                    {Project.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? "xl:flex-row-reverse md:flex-row-reverse" : "xl:flex-row md:flex-row"} justify-evenly gap-14 md:gap-5 md:mx-5 xl:gap-20 items-center`}>
                            <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500" className="flex flex-col gap-3 rounded-lg bg-grey dark:bg-gray-300 shadow-xl shadow-gray-300 dark:shadow-black p-5 px-5">
                                <p className="font-bold text-cinder-light text-lg font-pjs">{project.type}</p>
                                <p className="text-2xl xl:text-3xl -mt-2 font-extrabold text-cinder-dark-mode font-pjsk">{project.title}</p>
                                <p className="font-semibold text-sm -mt-2 xl:text-md text-cinder-dark font-inter w-72 xl:w-96">
                                    {project.description}
                                </p>
                                <div className="flex gap-3 text-cinder-light font-medium font-inter">
                                    {project.skills.split(",").map((skill, index) => (
                                        <p key={index} className="border-cinder-light rounded-md text-sm xl:text-md hover:border-cyan-700 border-2 p-1 cursor-pointer hover:text-cyan-600 ">{skill}</p>
                                    ))}
                                </div>
                                <div className="flex gap-5 items-center">
                                    <a href={project.github} target="_blank" rel="noreferrer"><i className="fa-brands text-gray-900 fa-github fa-xl"></i></a>
                                    <a href={project.web} target="_blank" rel="noreferrer"><img className="w-5" src={link} alt="website" /></a>
                                    {project.video && <a href={project.video} target="_blank" rel="noreferrer"><img className="w-5" src={video} alt="video" /></a>}
                                </div>
                            </div>
                            <div data-aos="flip-left" data-aos-duration="800" data-aos-delay="500" className="w-80 xl:w-full md:w-96" >
                                <img className="border bg-grey dark:border-gray-700 xl:h-72 md:h-64 rounded-lg" src={`/images/${project.image}`} alt="project-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
