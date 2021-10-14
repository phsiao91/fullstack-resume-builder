import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope, faPhoneSquare ,faLink} from '@fortawesome/free-solid-svg-icons'


function Resume() {

    // const [resumes, setResumes] = useState([])
    const [summary, setSummary] = useState([])
    const [bios, setBios] = useState([])
    const [workHistories, setWorkHistories] = useState([])
    const [skills, setSkills] = useState([])
    const [educations, setEducations] = useState([])
    const [tasks, setTasks] = useState([])

    const getSummary = () => {
        fetch("/myintro")
        .then(res => res.json())
        .then(fetchedIntro => {console.log(fetchedIntro)

        setSummary(fetchedIntro)

    })
    }
    useEffect(getSummary, [])

    const getBio = () => {
        fetch("/mybio")
        .then(res => res.json())
        .then(fetchedBio => {console.log(fetchedBio.image)

        setBios(fetchedBio)

    })
    }
    useEffect(getBio, [])

    const getWorkHistory = () => {
        fetch("/mywork")
        .then(res => res.json())
        .then(fetchedWorkHistory => {console.log(fetchedWorkHistory)

        setWorkHistories(fetchedWorkHistory)

    })
    }
    useEffect(getWorkHistory, [])

    const getSkill = () => {
        fetch("/myskill")
        .then(res => res.json())
        .then(fetchedSkill => {console.log(fetchedSkill)

        setSkills(fetchedSkill)

    })
    }
    useEffect(getSkill, [])


    const getEducation = () => {
        fetch("/myeducation")
        .then(res => res.json())
        .then(fetchedEducation => {console.log(fetchedEducation)

        setEducations(fetchedEducation)

    })
    }
    useEffect(getEducation, [])



    const getTask = () => {
        fetch("/mytask")
        .then(res => res.json())
        .then(fetchedTask => {console.log(fetchedTask)

        setTasks(fetchedTask)

    })
    }
    useEffect(getTask, [])

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
                console.log(eachTask.details)
                return (<li>{eachTask.details}</li>)
            })
            console.log(mappedTasks[0])
            return mappedTasks
            
        }


        const mapSkills = () => {
            let mappedSkills = skills.map(eachSkill =>{
                console.log(eachSkill)
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
                    console.log(mappedSkills)
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
                                        <p>{bios.address}</p>
                                    </div>
                            </li>
                            <li>
                            <FontAwesomeIcon class="icon" icon={faPhoneSquare} />
                                    <div class="data">
                                        <p>{bios.phone}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faEnvelope} />
                                    <div class="data">
                                        <p>{bios.email}</p>
                                    </div>
                            </li>
                            <li>
                            <FontAwesomeIcon class="icon" icon={faLink} />
                                    <div class="data">
                                    <a href ={bios.linkedin}>linkedin </a>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    <div class="resume_item resume_skills">
                        <div class="title">
                            <h3 class="bold">Skill's</h3>
                        </div>
                            <ul>
                                {mapSkills()}
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
                            {/* <li> */}
                                <div class="date">from: {educations.start_date} to: {educations.end_date}</div>
                            {/* </li> */}
                                <div class="info">
                                    <li>
                                        <h4 class="semi-bold">school</h4>
                                    </li>
                                    {/* <ol> */}
                                        <p>{educations.school}</p>
                                    {/* </ol> */}
                                    <li>
                                        <h4 class="semi-bold">degree</h4>
                                    </li>
                                    {/* <ol> */}
                                        <p>{educations.degree}</p>
                                    {/* </ol> */}
                                </div>
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Resume