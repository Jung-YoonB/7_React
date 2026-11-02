import { useNavigate, useParams } from "react-router-dom"
import { getPost } from "../api/postAPI"
import { useEffect, useState } from "react"
import usePostStore from "../store/usePostStore"

function EditPostPage() {
    const navigate = useNavigate()

    const { id } = useParams()
    
    const [post, setPost] = useState(null)
    
    const editPost = usePostStore((s) => s.editPost)
    const deletePost = usePostStore((state) => state.removePost)


    useEffect(() => {
        getPost(id).then((data) => {
            console.log(data)
            setPost(data)
        })
    }, [])

    const handleClick = async () => {
        try {
            await editPost(id, post)
            navigate('/posts')
        } catch (e) {
            alert(`수정 실패 : ${e.message}`)
        }
    }

    const handleDelete = async () => {
        try {
            await deletePost(id)
        } catch (e) {
            alert(`삭제 실패 : ${e.message}`)
        }
    }

    return (
        <>
            <p>EditPostPage</p>
            
            <input type="text" 
                   placeholder="닉네임 입력" 
                   value={post?.userId} onChange={(e) => setPost((s) => ({...s, userId: e.target.value}))} />
            
            <br />
            
            <input type="text" 
                   placeholder="제목 입력" 
                   value={post?.title} onChange={(e) => setPost((s) => ({...s, title: e.target.value}))} />

            <br />

            <input type="text" 
                   placeholder="내용 입력" 
                   value={post?.body} onChange={(e) => setPost((s) => ({...s, body: e.target.value}))} />

            <br />

            <button onClick={handleClick}>수정</button>
            <button onClick={handleDelete}>삭제</button>
        </>
    )
}

export default EditPostPage