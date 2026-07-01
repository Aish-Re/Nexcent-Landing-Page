import './Blogs.scss';
import Container from "../Container/Container";
import BlogCard1 from '../../assets/Blog1.png';
import BlogCard2 from '../../assets/Blog2.png';
import BlogCard3 from '../../assets/Blog3.png';
import BlogCard from "./BlogCard";

const blogs = [
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
            <Container className="blogs-content">
                <h2 className="blogs-header">Caring is the new marketing</h2>
                <p className="blogs-description">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            
                <div className="blog-cards">
                    {blogs.map((blog,index) => (
                        <BlogCard 
                            key={index}
                            image = {blog.image}
                            title= {blog.title}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}

export default Blogs;