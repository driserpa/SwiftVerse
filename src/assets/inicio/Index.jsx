import PostCard from "../PostCard"
import './Inicio.modules.css'
import posts from '/public/json/posts.json'

function Inicio() {
    return (
        <>
            <ul className='posts'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Inicio