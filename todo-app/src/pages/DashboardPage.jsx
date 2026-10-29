import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Card, PageTitle } from '../styles/common'
import { useTodoStore } from '../store/useTodoStore'
import { CATEGORIES, CATEGORIES_KEYS } from '../constants'
import TodoList from '../components/TodoList'

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4f6ef7;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 12px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

const CategoryCard = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
  }
`

function DashboardPage() {
    const todos = useTodoStore((state) => state.todos)

    // 전체 개수
    const totalCount = todos.length

    // 완료 개수
    const doneCount = todos.filter((todo) => todo.done).length

    // 남은 일 개수
    const remainCount = totalCount - doneCount

    // createdAt 최신 순 정렬 최근 할 일
    // ※ 주의 : sort 는 원본 배열 변경 -> [...todos] 로 copy 후 정렬
    const recentTodos = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    return (
        <>
            <PageTitle>대시보드</PageTitle>

            <Stats>
                <Card>
                    <div>전체</div>
                    <StatNumber>{totalCount}</StatNumber>
                </Card>
                <Card>
                    <div>완료</div>
                    <StatNumber>{doneCount}</StatNumber>
                </Card>
                <Card>
                    <div>남은 일</div>
                    <StatNumber>{remainCount}</StatNumber>
                </Card>                
            </Stats>

            <SectionTitle>카테고리별</SectionTitle>
            <CategoryGrid>
                {CATEGORIES_KEYS.map((key) => {
                  const count = todos.filter((todo) => todo.category === key).length

                  return (
                    <CategoryCard key={key} to={`/category/${key}`}>
                        <div>{CATEGORIES[key].label}</div>
                        <StatNumber>{count}</StatNumber>
                    </CategoryCard>
                  )
                })}
            </CategoryGrid>

            <SectionTitle>최근 할 일</SectionTitle>
            <TodoList todos={recentTodos} />
        </>
    )
}

export default DashboardPage