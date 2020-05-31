import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer';
import Photo from '../../components/Photo/Photo';


function Home() {
    return (
        <div>
            <Nav />
            <Main>
                <Photo />       
                <h1>Hi, my name is Ryan!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque aut iusto pariatur non quos hic dolore praesentium, laborum facere voluptatem? Dolore deserunt aspernatur quos unde ullam nihil vel magni?</p>
            
            </Main>
            <Footer />
        </div>
    )
}

export default Home