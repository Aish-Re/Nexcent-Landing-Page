import './Blogs.scss';
import Container from "../Container/Container";
import './BlogCard';
import BlogCard1 from '../../assets/Blog1.png';
import BlogCard2 from '../../assets/Blog2.png';
import BlogCard3 from '../../assets/Blog3.png';

const blog = [
    {
        image : BlogCard1,
        title : "Creating Streamlined Safeguarding Processes with OneRen"
    },

    {
        image : BlogCard2,
        title : "What are your safeguarding responsibilities and how can you manage them?"
    },

    {
        image : BlogCard3,
        title : "Revamping the Membership Model with Triathlon Australia"
    }
]

function Blogs() {
    return(
        <section className="blogs">
            <Container>
                <h2>Caring is the new marketing</h2>
                <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </Container>
        </section>
    );
}

export default Blogs;