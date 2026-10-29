import { useEffect } from "react"
import { fetchPosts } from "../api/postApi"

function PostListPage() {
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <p>PostListPage</p>
        </>
    )
}

export default PostListPage