import { useParams } from "react-router-dom"
import { useTodoStore } from "../store/useTodoStore"
import { Card, EmptyText, PageTitle } from "../styles/common"
import { CATEGORIES } from "../constants"
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"

function CategoryPage() {
    // store에서 todos 상태를 선택하여 가져옴
    const todos = useTodoStore((state) => state.todos)
    const { category } = useParams()    // "/category/:category"

    if (!CATEGORIES[category]) {     // 정의되지 않은 카테고리 주소로 들어 온 경우
        return (
            <>
                <PageTitle>없는 카데고리입니다.</PageTitle>
                <Card>
                    <EmptyText>{category} 카테고리는 존재하지 않습니다.</EmptyText>
                </Card>
            </>
        )
    }

    const { label } = CATEGORIES[category]
    const filterd = todos.filter((todo) => todo.category === category)

    return (
        <>
            <PageTitle>
                {label} ({filterd.length})
            </PageTitle>
            <TodoForm key={category} defaultCategory={category} />
            <TodoList todos={filterd} />
        </>
    )
}

export default CategoryPage