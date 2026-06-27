import Button from "../Button/Button";
import Container from '../Container/Container';
import './Hero.scss'
import HeroImage from '../../assets/hero-image.png';

function Hero() {
    return(
        <section className="hero">
            <Container>
                <div className="hero-left">
                    <h1>Lessons and insights <br /><span className="hero-header">from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>

                    <Button text="Register" />
                </div>

                <div className="hero-right">
                    <img src={HeroImage} alt="Hero-Image" />
                </div>
        </Container>
        </section>
    );
}

export default Hero;