interface BlogCardProps {
    image : string;
    title : string
}

function BlogCard ({image,title} : BlogCardProps){
    return(
        <div className="blog-card">
            <img src={image} />
            
            <div className="blog-content">
                <p>{title}</p>
                <p>Read More</p>
            </div>
        </div>
    );
}

export default BlogCard;