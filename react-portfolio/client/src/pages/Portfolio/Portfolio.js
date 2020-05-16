import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import PortfolioItemDiv from '../../components/PortfolioItemDiv/PortfolioItemDiv'
import PortfolioImageDiv from '../../components/PortfolioImageDiv/PortfolioImageDiv'
import PortfolioItemInfoDiv from '../../components/PortfolioItemInfoDiv/PortfolioItemInfoDiv'


function Portfolio() {
    return (
        <div>
            <Nav /> 

            <Main>
                <PortfolioItemDiv>
                    <PortfolioImageDiv>
                        https://github.com/ryntm/react-portfolio-time/blob/master/react-portfolio/client/assets/images/portfolio.jpg?raw=true
                    </PortfolioImageDiv>
                    <PortfolioItemInfoDiv>

                    </PortfolioItemInfoDiv>
                </PortfolioItemDiv>

            </Main>

            <Footer />
        </div>
    )
}

export default Portfolio