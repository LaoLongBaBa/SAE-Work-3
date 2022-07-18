import "./BlogPost.css"

function BlogPost({ title, author, content, id, deletePost }) {
    return (
        <div className="blogpost">
            <h1 >{title}</h1>
            <span>{author}</span>
            <p>{content}</p>

            <button onClick={()=>{
                deletePost(id)
            }}>Clike</button>
        </div>
    )
}

export default BlogPost