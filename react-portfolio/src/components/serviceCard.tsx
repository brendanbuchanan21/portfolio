

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    li1: string;
    li2: string;
    li3: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
    return (
        
        <div className="card-div">
             <div className="icon-container">
                <span role="img" aria-label="handshake" className="card-icon">{props.icon}</span>
             </div>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
            <ul className="ul-services">
                <li className="li">{props.li1}</li>
                <li className="li">{props.li2}</li>
                <li className="li">{props.li3}</li>
            </ul>
        </div>
        
    )
}

export default ServiceCard;