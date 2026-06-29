import Container from "../Container/Container"
import './Community.scss'
import CommunityCard from "./CommunityCard";
import MembershipIcon from '../../assets/MembershipIcon.png'
import AssociationIcon from '../../assets/AssociationIcon.png'
import ClubIcon from '../../assets/ClubIcon.png'

const Communities = [
    {
        id : 1,
        icon : MembershipIcon,
        title : "Membership Organisations",
        description : "Our membership management software provides full automation of membership renewals and payments"
    },

    {
        id : 2,
        icon : AssociationIcon,
        title : "National Associations",
        description : "Our membership management software provides full automation of membership renewals and payments"
    },

    {
        id : 3,
        icon : ClubIcon,
        title : "Clubs And Groups",
        description : "Our membership management software provides full automation of membership renewals and payments"
    }
]

function Community() {
    return(
        <section className="community">
            <Container>
                <h2 className="community-header">Manage your entire community <br/> in a single system</h2>
                <p className="commuity-description">Who is Nextcent suitable for?</p>

                <div className="community-cards">
                    {Communities.map((community) => (
                        <CommunityCard 
                            key={community.id}
                            icon={community.icon}
                            title={community.title}
                            description={community.description}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}

export default Community;