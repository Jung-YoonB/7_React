import { useEffect } from "react"
import usePostStore from "../store/usePostStore"
import { useNavigate } from "react-router-dom"


function PostListPage() {
    const navigate = useNavigate()

    const posts = usePostStore((state) => state.posts)
    const fetchPosts = usePostStore((state) => state.fetchPosts)
    const error = usePostStore((state) => state.error)

    useEffect(() => {
        fetchPosts()
    }, [])

    if (error) return <p>오류 : {error}</p>

    return (
        <>
            <ul>
                {
                    posts.map((data) => (
                        <li key={data.id}>
                            {data?.title}
                            {/* 수정 버튼 클릭 시 해당 게시글의 상세 페이지 (EditPostPage) */}
                            <button onClick={() => {navigate(`/posts/${data.id}/edit`)}}>수정</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default PostListPage