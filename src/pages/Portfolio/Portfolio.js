import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import ProjectArea from '../../components/ProjectArea/ProjectArea';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectImageDiv from '../../components/ProjectImageDiv/ProjectImageDiv';
import ProjectDetailsDiv from '../../components/ProjectDetailsDiv/ProjectDetailsDiv';
import ProjectMiniCard from '../../components/ProjectMiniCard/ProjectMiniCard';
import './Portfolio.css';


function Portfolio() {
    return (
        <div>
            <Nav /> 

            <Main>
                <div className="resume-area">
                    <span>Click Here for my resume!</span>
                    <br />
                    <a href="https://github.com/ryntm/react-portfolio-time/blob/master/assets/Resume.docx?raw=true">
                        <button className="button-primary resume-button">
                            RESUME
                        </button>
                    </a>
                </div>
                <hr />
                    <h1>Collaborative Projects</h1>
                <ProjectArea>
                    <ProjectCard>
                        <ProjectImageDiv>
                        https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/boothunter.png?raw=true
                        </ProjectImageDiv>

                        <ProjectDetailsDiv>
                            <span className="project-title">#1 BookHunter</span><br/>
                            <span>Deployed Link: N/A</span><br/>
                            <span>Github Repo: <a href="https://github.com/AnnaliisaS/project1">HERE</a></span><br/>
                        </ProjectDetailsDiv>
                    </ProjectCard>


                    <ProjectCard>
                        <ProjectImageDiv>
                        https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/pokequiz.jpg?raw=true
                        </ProjectImageDiv>

                        <ProjectDetailsDiv>
                            <span className="project-title">#2 Poke Quiz</span><br/>
                            <span>Deployed Link: <a href="http://radiant-inlet-24995.herokuapp.com/">HERE</a></span><br/>
                            <span>Github Repo: <a href="https://github.com/setocourtney/quiz-masters">HERE</a></span><br/>
                        </ProjectDetailsDiv>
                    </ProjectCard>


                    <ProjectCard>
                        <ProjectImageDiv>
                        https://github.com/ryntm/react-portfolio-time/blob/master/assets/images/shareish.png?raw=true
                        </ProjectImageDiv>

                        <ProjectDetailsDiv>
                            <span className="project-title">#3 Share-ish</span><br/>
                            <span>Deployed Link: N/A</span><br/>
                            <span>Github Repo: <a href="https://github.com/Brigmu/Sharemasters">HERE</a></span><br/>
                        </ProjectDetailsDiv>
                    </ProjectCard>
                    

                </ProjectArea>
                <hr/>
                <ProjectArea>
                    <h1>Other Projects</h1>
                    <ProjectMiniCard>
                        <span className="project-title">Ryan's Burger!</span>
                        <ul>
                            <li>
                                     Deployed Link: <a href="https://github.com/ryntm/ryans-burgers">HERE</a>
                            </li>
                            <li>
                                Github Repo: <a href="https://boiling-shore-26987.herokuapp.com/">HERE</a>
                            </li>
                        </ul>
                    </ProjectMiniCard>
                    <hr className="mini-projects"/>
                    
                    <ProjectMiniCard>
                        <span className="project-title">Fitness Tracker</span>
                        <ul>
                            <li>
                                Deployed Link: <a href="https://github.com/ryntm/fitness-tracker">HERE</a>
                            </li>
                            <li>
                                Github Repo: <a href="https://floating-brook-46863.herokuapp.com/">HERE</a>
                            </li>
                        </ul>
                    </ProjectMiniCard>
                    <hr className="mini-projects" />

                    <ProjectMiniCard>
                        <span className="project-title">The Office Quiz</span>
                        <ul>
                            <li>
                                Deployed Link: N/A
                            </li>
                            <li>
                                Github Repo: <a href="https://boiling-shore-26987.herokuapp.com/">HERE</a>
                            </li>
                        </ul>
                    </ProjectMiniCard>
                    <hr className="mini-projects" />

                    <ProjectMiniCard>
                        <span className="project-title">Note Taker</span>
                        <ul>
                            <li>
                                Deployed Link: <a href="https://github.com/ryntm/note-taker-time">HERE</a>
                            </li>
                            <li>
                                Github Repo: <a href="https://rocky-escarpment-79412.herokuapp.com/">HERE</a>
                            </li>
                        </ul>
                    </ProjectMiniCard>
                    <hr className="mini-projects" />

                    <ProjectMiniCard>
                        <span className="project-title">PWA Budget Tracker</span>
                        <ul>
                            <li>
                                Deployed Link: <a href="https://github.com/ryntm/pwa-budget-tracker">HERE</a>
                            </li>
                            <li>
                                Github Repo: <a href="https://calm-bayou-69361.herokuapp.com/">HERE</a>
                            </li>
                        </ul>
                    </ProjectMiniCard>

                </ProjectArea>
            </Main>

            <Footer />
        </div>
    )
}

export default Portfolio