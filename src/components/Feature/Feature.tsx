import './Feature.scss'

interface FeatureProps {
    image : string;
    title : string;
    description : string;
    buttontext : string
}

function Feature({image,title,description,buttontext} : FeatureProps) {
    return(
        <div className="feature-content">
            <div className="feature-left">
                <img src={image} />
            </div>

            <div className="feature-right">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>{buttontext}</button>
            </div>

        </div>
    );
}

export default Feature;