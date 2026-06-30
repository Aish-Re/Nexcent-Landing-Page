import Container from "../Container/Container";
import Feature from "./Feature";
import FeatureImage from '../../assets/Feature2-image.png'

function Feature2() {
    return(
        <section className="feature2-content">
            <Container>
                <Feature 
                    image = {FeatureImage}
                    title = "How to design your site footer like we did"
                    description = "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
                    buttontext = "Learn More"
                />
            </Container>
        </section>
    );
}

export default Feature2;