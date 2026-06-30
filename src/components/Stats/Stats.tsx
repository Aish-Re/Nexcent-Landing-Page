import Container from "../Container/Container";
import './Stats.scss'
import StatsCard from "./StatsCard";
import MembersIcon from '../../assets/MembersIcon.png'
import ClubIcon from '../../assets/ClubIcon.png'
import EventBookingIcon from '../../assets/EventBookingIcon.png'
import PaymentIcon from '../../assets/PaymentIcon.png'

const stats = [
    {
        id : 1,
        icon : MembersIcon,
        number : "2,245,341",
        about : "Members"
    },

    {
        id : 2,
        icon : ClubIcon,
        number : "46,328",
        about : "Clubs"
    },

    {
        id : 3,
        icon : EventBookingIcon,
        number : "828,867",
        about : "Event Bookings"
    },

    {
        id : 4,
        icon : PaymentIcon,
        number : "1,926,436",
        about : "Payments"
    }
]

function Stats() {
    return(
        <section className="stats">
            <Container className="stats-content">
                <div className="stats-left">
                    <h2>Helping a local <br/> <span>business reinvent itself</span></h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>

                <div className="stats-right">
                    {stats.map((stat) => (
                        <StatsCard 
                            key={stat.id}
                            icon = {stat.icon}
                            number = {stat.number}
                            about = {stat.about}
                        
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Stats;