import Container from "../Container/Container";
import './Customers.scss'
import Customer from '../../assets/Customer.png'
import { clientLogos } from "../Clients/ClientLogos";

function Customers() {
    return(
        <section className="customers">
            <Container className="customer-content">
                <img src={Customer} />

                <div className="customer-details">
                    <p className="customer-comment">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <p className="customer-name">Tim Smith</p>
                    <p className="customer-company">British Dragon Boat Racing Association</p>
                    
                    <div className="client-logos">
                        {clientLogos.map((clientLogo) => (
                            <img 
                                key={clientLogo.id}
                                src={clientLogo.image}
                            />
                        ))}

                        <p className="cta">Meet all customers</p>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Customers;