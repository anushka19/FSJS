import React from 'react'
import PortfolioCards from './PortfolioCards';
import image_new1 from './../assets/img/portfolio/cabin.png'
import image_new2 from './../assets/img/portfolio/cake.png'
import image_new3 from './../assets/img/portfolio/circus.png'
import image_new4 from './../assets/img/portfolio/game.png'
import image_new5 from './../assets/img/portfolio/safe.png'
import image_new6 from './../assets/img/portfolio/submarine.png'


const Portfolio = () => {
    return(
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
               
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                
                </div>
                <div className="row justify-content-center">
                <PortfolioCards img1={image_new1}/>
                <PortfolioCards img1={image_new2}/>
                <PortfolioCards img1={image_new3}/>
                <PortfolioCards img1={image_new4}/>
                <PortfolioCards img1={image_new5}/>
                <PortfolioCards img1={image_new6}/>
                </div>
            </div>
                
        </section>
                
    )
}

export default Portfolio ;
