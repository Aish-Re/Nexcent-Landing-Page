interface BlogCardProps {
    image : string;
    title : string
}

function BlogCard ({image,title} : BlogCardProps){
    return(
        <div className="blog-card">
            <img src={image} />
            
            <div className="blog-content">
                <h5 className="blog-title">{title}</h5>
                <p className="blog-read-more">Read More</p>
            </div>
        </div>
    );
}

export default BlogCard;