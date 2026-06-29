interface CommunityCardsProps {
    icon : string;
    title : string;
    description : string;
}

function CommunityCard({icon, title, description} : CommunityCardsProps){
    return(
        <div className="community-card">
            <img src={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default CommunityCard;