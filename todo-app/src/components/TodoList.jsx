import { Card, EmptyText } from "../styles/common"

import styled from "styled-components"
import Todoitem from "./Todoitem"

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

// todos 배열을 props로 전달받아 표시
function TodoList({ todos }) {
    if (todos.length === 0) {
        return (
            <Card>
                <EmptyText>할 일이 없습니다.</EmptyText>
            </Card>
        )
    }

    return (
        <>
            <Card>
                <List>
                    {
                        // todo => {id: xx, title:xx, ...}
                        todos.map((todo) => {
                            return (
                                <Todoitem key={todo.id} todo={todo}/>
                            )
                        })
                    }
                </List>
            </Card>
        </>
    )
}

export default TodoList