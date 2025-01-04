import ServiceCard from "./serviceCard";

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-header-section">
                <div className="services-title-div">
                    <p className="services-title">Services</p>
                </div>
                <div className="services-description-div">
                    <h1 className="services-description-text">Development that solves problems, one product at a time.</h1>
                </div>
            </div>

            <div className="all-cards-div">
                <ServiceCard icon={"🌐"} title={"What I can do for you"} description="Faster, better products that your users love. Here's all the services I provide:" li1="Pixel perfect UI"
                li2="Perform well in a team"
                li3="Uniquely tailored solutions"
                />
                <ServiceCard icon={"⚛️"} title={"What i'm fluent in"} description="Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual." 
                li1="Javascript"
                li2="Typescript"
                li3="React" />
                <ServiceCard icon={"🎯"} title={"What you can expect"}
                description="I develop products that are more than functional, I make them unnavoidable."
                li1="Profressional expertise"
                li2="Users interest in mind"
                li3="industry best practice" />
            </div>
        </section>
    );
}



export default Services;