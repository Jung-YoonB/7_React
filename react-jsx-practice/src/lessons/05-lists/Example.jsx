// 리스트(배열)의 각 항목을 화면 조각(컴포넌트)로 바꿀 때
// "map" 을 사용함

const snacks = ["포카칩", "미쯔", "새우깡"]

const todos = [
    {id: 1, title: '점심 메뉴 고르기', done: true},
    {id: 2, title: '집에 가기', done: false},
    {id: 3, title: '눕기', done: false},
    {id: 4, title: '밥 먹기', done: false},
]

function Example() {
    return (
        <>
            <h3>문자열 목록</h3>
            <ul>
                {/* 
                    map을 사용하여 동일한 컴포넌트를 표시할 때는
                    최상위 요소에 'key' 속성을 지정해줘야 함
                */}
                {   
                    // 화살표 함수는 중괄호 사용 시 return 생략 불가
                    snacks.map((snack) => {return <li>{snack}</li>})
                }
            </ul>

            <h3>객체 목록</h3>
            <ul>
                {
                    todos.map((todo) => {return (
                        <li key={todo.id}>{todo.done ? '✅' : '⬜'}{todo.title}</li>
                    )})
                }
            </ul>

            <h4>남은 할 일</h4>
            <p>filter로 먼저 거르고 map으로 표시</p>
            <ul>
                {
                    todos.filter((todo) => !todo.done)
                        .map((todo) => <li key={todo.id}>{todo.title}</li>)
                }
            </ul>
        </>
    )
}

export default Example