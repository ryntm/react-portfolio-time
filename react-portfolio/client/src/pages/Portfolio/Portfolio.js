import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import ProjectArea from '../../components/ProjectArea/ProjectArea';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectImageDiv from '../../components/ProjectImageDiv/ProjectImageDiv';
import ProjectDetailsDiv from '../../components/ProjectDetailsDiv/ProjectDetailsDiv';
import PortfolioItemDiv from '../../components/PortfolioItemDiv/PortfolioItemDiv';
import PortfolioItemInfoDiv from '../../components/PortfolioItemInfoDiv/PortfolioItemInfoDiv';
import './Portfolio.css';


function Portfolio() {
    return (
        <div>
            <Nav /> 

            <Main>
                <div className="resume-area">
                    <span>Click Here for my resume!</span>
                    <br />
                    <button className="button-primary resume-button">
                        RESUME
                    </button>
                </div>
                <hr />
                <ProjectArea>

                    <ProjectCard>
                                    <ProjectImageDiv>
                                        https://github.com/ryntm/react-portfolio-time/blob/master/react-portfolio/client/assets/images/boothunter.png?raw=true
                                    </ProjectImageDiv>

                                    <ProjectDetailsDiv>
                                        <span className="project-title">BookHunter</span><br/>
                                        <span>Deployed Link: N/A</span><br/>
                                        <span>Github Repo: <a href="https://github.com/AnnaliisaS/project1">HERE</a></span><br/>
                                    </ProjectDetailsDiv>
                    </ProjectCard>

                    <ProjectCard>
                                    <ProjectImageDiv>
                                    https://github.com/ryntm/react-portfolio-time/blob/master/react-portfolio/client/assets/images/pokequiz.jpg?raw=true
                                    </ProjectImageDiv>

                                    <ProjectDetailsDiv>
                                        <span className="project-title">Poke Quiz</span><br/>
                                        <span>Deployed Link: <a href="http://radiant-inlet-24995.herokuapp.com/">HERE</a></span><br/>
                                        <span>Github Repo: <a href="https://github.com/setocourtney/quiz-masters">HERE</a></span><br/>
                                    </ProjectDetailsDiv>
                    </ProjectCard>

                    <ProjectCard>
                                    <ProjectImageDiv>
                                        https://github.com/ryntm/react-portfolio-time/blob/master/react-portfolio/client/assets/images/boothunter.png?raw=true
                                    </ProjectImageDiv>

                                    <ProjectDetailsDiv>
                                        <span className="project-title">Share-ish</span><br/>
                                        <span>Deployed Link: N/A</span><br/>
                                        <span>Github Repo: <a href="https://github.com/Brigmu/Sharemasters">HERE</a></span><br/>
                                    </ProjectDetailsDiv>
                    </ProjectCard>
                    

                </ProjectArea>
            </Main>

            <Footer />
        </div>
    )
}

export default Portfolio