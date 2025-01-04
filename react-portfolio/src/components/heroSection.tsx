
import myImage from '../images/BRENDAN.jpg';


const Hero = () => {
    return (
        <section className="hero-section">
        <div className="hero-section-big-div-1">
            <div className="hero-intro-text-div">
            <h1 className="hero-intro-text"><span className="highlight">I create solutions</span> for businesses driven by excellence</h1>
            </div>
            <div className="hero-main-description-div">
                <p className="hero-main-description">Hey! I'm Brendan, a front end web developer seeking employment so I can feed my dog, Chef.</p>
            </div>
            <div className="hero-section-btns-div">
            <button className="hero-btn" id="contact-btn"><a href="mailto:brendanbuchanan21@gmail.com">Contact me</a></button>
                <button className="hero-btn" id="resume-btn"><a 
        href="/public/Brendan Resume.docx.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none', color: 'inherit' }}
    >Resume</a></button>
                <button id="hidden-btn" className="hero-btn"></button>
            </div>
        </div>

        <div className="hero-section-big-div-2">
            <div className="hero-img-div">
                <img src={myImage} className='hero-img'></img>
            </div>
        </div>

        
        </section>
    
    )
}
export default Hero;