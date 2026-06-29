import './Feature.scss'

interface FeatureProps {
    image : string;
    title : string;
    description : string;
    buttontext : string
}

function Feature({image,title,description,buttontext} : FeatureProps) {
    return(
        <div className="feature-card">
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{buttontext}</button>
        </div>
    );
}

export default Feature;