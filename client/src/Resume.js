import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope, faPhoneSquare, faFutbol, faGamepad, faMusic, faHiking } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

function Resume() {

    // const [resumes, setResumes] = useState([])
    const [summary, setSummary] = useState([])
    const [bios, setBios] = useState([])
    const [workHistories, setWorkHistories] = useState([])
    const [skills, setSkills] = useState([])
    const [educations, setEducations] = useState([])
    const [tasks, setTasks] = useState([])
    const [socials, setSocials] = useState([])
    const [hobby, setHobbies] = useState([])

    const getSummary = () => {
        fetch("/myintro")
        .then(res => res.json())
        .then(fetchedIntro => setSummary(fetchedIntro)
    )
    }
    useEffect(getSummary, [])

    const getBio = () => {
        fetch("/mybio")
        .then(res => res.json())
        .then(fetchedBio => setBios(fetchedBio)
    )
    }
    useEffect(getBio, [])

    const getWorkHistory = () => {
        fetch("/mywork")
        .then(res => res.json())
        .then(fetchedWorkHistory => setWorkHistories(fetchedWorkHistory)
    )
    }
    useEffect(getWorkHistory, [])

    const getSkill = () => {
        fetch("/mylanguages")
        .then(res => res.json())
        .then(fetchedSkill => setSkills(fetchedSkill)
    )}
    useEffect(getSkill, [])


    const getEducation = () => {
        fetch("/myeducation")
        .then(res => res.json())
        .then(fetchedEducation => setEducations(fetchedEducation)
    )}
    useEffect(getEducation, [])



    const getTask = () => {
        fetch("/mytask")
        .then(res => res.json())
        .then(fetchedTask => setTasks(fetchedTask)
    )
    }
    useEffect(getTask, [])

    const getHobby = () => {
        fetch("/myhobbies")
        .then(res => res.json())
        .then(fetchedHobby => setHobbies(fetchedHobby)
    )
    }
    useEffect(getHobby, [])

    const getSocial = () => {
        fetch("/mysocials")
        .then(res => res.json())
        .then(fetchedSocial => setSocials(fetchedSocial)
    )
    }
    useEffect(getSocial, [])

    // function mapTasks() {
    //     let mappedTasks = () => { tasks.map( eachTask => {
    //         console.log(eachTask)
    //         return eachTask.details
    //     })
    //         return mappedTasks
    //     }
    // }

        const mapTasks = () => {
            let mappedTasks = tasks.map(eachTask =>{
                // console.log(eachTask.details)
                return (<li>{eachTask.details}</li>)
            })
            // console.log(mappedTasks[0])
            return mappedTasks
            
        }


        const mapSkills = () => {
            let mappedSkills = skills.map(eachSkill =>{
                // console.log(eachSkill)
                    return (<li>
                                <div class="skill_name">
                                    <p>{eachSkill.expertise}</p>
                                </div>
                                <div class="skill_progress">
                                    <span style={{width: `${eachSkill.rating}%`}}></span>
                                </div>
                                <div class="skill_per">{`${eachSkill.rating}%`}</div>
                            </li>)
            })
                    // console.log(mappedSkills)
                    return mappedSkills
        
    }
    



    return(
    <div>
        <h1>Resume</h1>
        <div className="resume">
            <div className="resume_left">
                <div class="resume_profile">
                    <img src={bios.image} alt="profile_pic"></img>
                </div>
                <div className="resume_content">
                    <div className="resume_item resume_bio">
                        <div class="title">
                            <h2 class="bold">{bios.name}</h2>
                        </div>
                        <ul>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faMapMarkerAlt} />
                                    <div class="data">
                                        <p className="semi_bold">{bios.address}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faPhoneSquare} />
                                    <div class="data">
                                        <p className="semi_bold">{bios.phone}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faEnvelope} />
                                    <div class="data">
                                        <p className="semi_bold">{bios.email}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faGithub} />
                                    <div class="data">
                                        <a className="semi_bold" href ={bios.github}>github</a>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    <div class="resume_item resume_skills">
                        <div class="title">
                            <h3 class="bold">Skills</h3>
                        </div>
                            <ul>
                                {mapSkills()}
                            </ul>
                    </div>
                    <div class="resume_item resume_social">
                        <div class="title">
                            <h3 class="bold">Social</h3>
                        </div>
                        <ul>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                                <div class="data">
                                    <p class="semi_bold">
                                        Facebook
                                    </p>
                                    <p>ray@facebook</p>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                                <div class="data">
                                    <p class="semi_bold">
                                        Instagram
                                    </p>
                                    <p>ray@facebook</p>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                                <div class="data">
                                    <p class="semi_bold">
                                        Twitter
                                    </p>
                                    <p>ray@facebook</p>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                                <div class="data">
                                    <p class="semi_bold">
                                        Linkedin
                                    </p>
                                    <p>ray@facebook</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div class="resume_right">
                    <div className="resume_item resume_about">
                        <div class="title">
                            <h2 class="bold">Professional Summary</h2>
                        </div>
                        <p>{summary.summary}</p>
                    </div>
                    <div className="resume_item resume_work">
                        <div class="title">
                            <h2 class="bold">Work History</h2>
                        </div>
                        <ul>
                            {/* <li> */}
                                <div class="date">from: {workHistories.start_date} to: {workHistories.end_date}</div>
                                <div class="info">
                                    <li>
                                        <h4 class="semi-bold">title</h4>
                                    </li>
                                    {/* <ol> */}
                                        <p>{workHistories.title}</p>
                                    {/* </ol> */}
                                    <li>
                                        <h4 class="semi-bold">company</h4>
                                    </li>
                                    {/* <ol> */}
                                        <p>{workHistories.company}</p>
                                    {/* </ol> */}
                                </div>
                            {/* </li> */}
                        </ul>
                    </div>
                    <div className="resume_item resume_task">
                        <div class="title">
                            <h3 class="bold">tasks</h3>
                        </div>
                        <div>
                            <ul>
                                {/* <ol> */}
                                    {mapTasks()}
                                {/* </ol> */}
                            </ul>
                        </div>
                    </div>
                    <div className="resume_item resume_education">
                        <div class="title">
                            <h2 class="bold">Education</h2>
                        </div>
                        <ul>
                            <div class="date">from: {educations.start_date} to: {educations.end_date}</div>
                            <div class="info">
                                <li>
                                    <h4 class="semi-bold">school</h4>
                                </li>
                                    <p>{educations.school}</p>
                                <li>
                                    <h4 class="semi-bold">degree</h4>
                                </li>
                                    <p>{educations.degree}</p>
                            </div>
                        </ul>
                    </div>
                    <div className="resume_item resume_hobby">
                        <div class="title">
                            <h2 class="bold">Hobby</h2>
                        </div>
                        <ul>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faFutbol} />
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faGamepad} />
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faMusic} />
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faHiking} />
                            </p>
                        </ul>
                    </div>
                </div>
        </div>
        <Link to="dark">
            <button>Dark Mode</button>
        </Link>
    </div>
    )
}

export default Resume