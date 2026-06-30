import './StatsCard.scss'

interface StatsCardProps{
    icon : string;
    number : string;
    about : string
}

function StatsCard({icon,number,about} : StatsCardProps){
    return(
        <div className="stats-card">
            <img src={icon} />

            <div className="stats-details">
                <h3>{number}</h3>
                <p>{about}</p>
                            </div>
        </div>

    );
}

export default StatsCard;