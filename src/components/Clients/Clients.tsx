import Container from "../Container/Container";
import './Clients.scss';
import { clientLogos } from "./ClientLogos";

function Clients() {
    return(
        <section className="clients">
            <Container className="clients-content">
                    <h2 className="client-header">Our Clients</h2>
                    <p className="client-description">We have been working with some Fortune 500+ clients</p>

                <div className="client-logos">
                    {clientLogos.map((clientLogo) => (
                        <img 
                            key={clientLogo.id}
                            src={clientLogo.image}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Clients;