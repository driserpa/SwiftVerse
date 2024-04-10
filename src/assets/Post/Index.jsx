import { Route, Routes, useParams } from "react-router-dom"
import styles from './Posts.module.css'
import posts from "/public/json/posts.json"
import PostModelo from "../PostModelo/Index"
import './Post.css'
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "../NaoEncontrada"
import PaginaPadrao from "../PaginaPadrao"
import PostCard from "../PostCard"



function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    //se o post for undefined
    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >

                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>

                        </div>

                        <h2 className={styles.tituloOutrosPosts}>Outros posts que voce pode gostar</h2>

                        <ul className={styles.postsRecomendado}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>
                    </PostModelo>}
                    

                />
            </Route>
        </Routes>
    )
}

export default Post