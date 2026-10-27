import { Link } from "react-router-dom"
import { Card, EmptyText, PageTitle } from "../styles/common"

function NotFoundPage() {
    return (
        <>
            <PageTitle>404</PageTitle>  
            <Card>
                <EmptyText>페이지를 찾을 수 없습니다.</EmptyText>
                <Link to="/">⬅️ 대시보드로 돌아가기</Link>
            </Card>
        </>
    )
}

export default NotFoundPage