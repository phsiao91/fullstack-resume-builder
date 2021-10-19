import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapSigns, faEnvelope, faMobileAlt, faFutbol, faGamepad, faMusic, faHiking, faGem } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faHtml5, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'


function Dark() {

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
                return (<p>{eachTask.details}</p>)
            })
            // console.log(mappedTasks)
            return mappedTasks
            
        }


        const mapSkills = () => {
            let mappedSkills = skills.map(eachSkill =>{
                // console.log(eachSkill)
                    return (
                            // <li>
                            //     <p>{eachSkill.epertise}</p>
                            // </li>
                            <li>
                                <div class="skill_name">
                                    <p>{eachSkill.expertise}</p>
                                </div>
                                <div class="skill_progress">
                                    <span style={{width: `${eachSkill.rating}%`}}></span>
                                </div>
                                <div class="skill_per">{`${eachSkill.rating}%`}</div>
                            </li>
                            )
            })
                    console.log(mappedSkills)
                    return mappedSkills
        
    }

    const facebook = () => {
        return <a href={socials.facebook}/>
    }
    console.log(facebook)
    

    return (
        <div className="wrapper">
            <div className="resume_dark">
                <div className="left">
                    <div className="img_holder">
                        <img src={bios.image} alt="profile_pic"></img>
                    </div>
                    <div className="contact_wrap pb">
                        <div className="title_dark">
                            Contact
                        </div>
                        <div className="contact">
                            <ul>
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMapSigns}/>
                                        </div>
                                        <div className="text">{bios.address}</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMobileAlt}/>
                                        </div>
                                        <div className="text">{bios.phone}</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </div>
                                        <div className="text">{bios.email}</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </div>
                                        <a className="text" href ={bios.github}>github</a>
                                    </div>
                                {/* </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="skills_wrap pb">
                        <div className="title_dark">
                            skills
                        </div>
                        <div className="skills_dark">
                            <ul>
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faHtml5}/>
                                        </div>
                                        <div className="text">HTML</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faReact}/>
                                        </div>
                                        <div className="text">React.js</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faJsSquare}/>
                                        </div>
                                        <div className="text">Javascript</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGem}/>
                                        </div>
                                        <div className="text">Ruby</div>
                                    </div>
                                {/* </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="hobbies_wrap pb">
                        <div className="title_dark">
                            hobbies
                        </div>
                        <div className="hobbies_dark">
                            <ul>
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faFutbol}/>
                                        </div>
                                        <div className="text">soccer</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faGamepad}/>
                                        </div>
                                        <div className="text">gaming</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faMusic}/>
                                        </div>
                                        <div className="text">music</div>
                                    </div>
                                {/* </li> */}
                                {/* <li> */}
                                    <div className="li_wrap">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faHiking}/>
                                        </div>
                                        <div className="text">hiking</div>
                                    </div>
                                {/* </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="header_dark">
                        <div className="name_role">
                            <div className="name_dark">
                                {bios.name}
                            </div>
                            <div className="role">
                                Software Engineer
                            </div>
                        </div>
                        <div className="about">
                            {summary.summary}
                        </div>
                    </div>
                    <div className="right_inner">
                        <div className="exp">
                            <div className="title_dark">
                                Experience
                            </div>
                            <div className="exp_wrap">
                                <ul>
                                    <div className="li_wrap">
                                        <div className="date">{workHistories.start_date} - {workHistories.end_date}</div>
                                        <div className="info_dark">
                                            <p className="info_title">{workHistories.title}</p>
                                            <p className="info_com">{workHistories.company}</p>
                                            <p className="info_cont">{mapTasks()}</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="exp_wrap">
                                <ul>
                                    <div className="li_wrap">
                                        <div className="date">{workHistories.start_date} - {workHistories.end_date}</div>
                                        <div className="info_dark">
                                            <p className="info_title">{workHistories.title}</p>
                                            <p className="info_com">{workHistories.company}</p>
                                            <p className="info_cont">{mapTasks()}</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="exp">
                            <div className="title_dark">
                                Education
                            </div>
                            <div className="education_wrap">
                                <ul>
                                    <div className="li_wrap">
                                        <div className="date">{educations.start_date} - {educations.end_date}</div>
                                        <div className="info_dark">
                                            <p className="info_title">{educations.degree}</p>
                                            <p className="info_com">{educations.school}</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="education_wrap">
                                <ul>
                                    <div className="li_wrap">
                                        <div className="date">{educations.start_date} - {educations.end_date}</div>
                                        <div className="info_dark">
                                            <p className="info_title">{educations.degree}</p>
                                            <p className="info_com">{educations.school}</p>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="social">                       
                            <div class="title_dark" >Social</div>
                            <div className= "li_wrap">
                                <ul>
                                    <p>
                                        {/* <Link to={socials.facebook}> */}
                                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                                        <a className="text" href ={socials.facebook} target="_blank">facebook</a>
                                        {/* </Link> */}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                                        <a className="text" href ={socials.instagram}>instagram</a>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                                        <a className="text" href ={socials.twitter}>twitter</a>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                                        <a className="text" href ={socials.linkedin}>linkedin</a>
                                    </p>
                                </ul>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <Link to="resumes">
                <button>Light Mode</button>
            </Link>
        </div>
    )
}

export default Dark