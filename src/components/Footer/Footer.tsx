import Container from "../Container/Container";
import './Footer.scss';
import LogoWhite from '../../assets/Logo-white.png';

function Footer() {
    return(
        <footer>
            <Container className="footer-content">
                <div className="footer-info">
                    <img src={LogoWhite} />
                    <p>Copyright &copy; 2020 Landify UI Kit.<br/>All rights reserved</p>

                </div>

                <div className="footer-company">
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </div>

                <div className="footer-support">
                    <h4>Support</h4>
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>

                <div className="footer-contact">
                    <h4>Stay up to date</h4>
                    <input className="contact-email"
                        placeholder="Your email address"
                    />
                </div>

            </Container>
        </footer>
    );
}

export default Footer;