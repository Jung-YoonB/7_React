/*
    useState    : 상태 관리 훅

    const [상태변수, 상태변경함수] = useState(초기값)

    특징
    - 값이 바뀌면 컴포넌트가 다시 실행(리렌더링)되어 화면이 갱신 됨
    - 이전 값 기준으로 바꿀 땐 함수형 업데이트
            setXX(prev => ...)
    - 객체, 배열은 직접 수정하지 않고, "새로 만들어서" 넘겨줘야 함
*/
import { useState } from 'react'

// 일반 변수 vs state
function Step1() {
    let plain = 0
    const [count, setCount] = useState(0)

    return(
        <div className='card'>
            <h3>STEP 1. 일반 변수 vs state</h3>
            <p>일반 변수 : {plain} / state : {count}</p>

            <div className='btn-row'>
                <button onClick={() => {plain += 1; console.log('plain=', plain)}}>
                    일반변수 + 1
                </button>

                <button onClick={() => {setCount(count + 1)}}>
                    state + 1
                </button>

            </div>
        </div>
    )
}

function Step2() {
    const [count, setCount] = useState(0)

    return (
        <div className='card'>
            <h3>STEP 2. 함수형 업데이트</h3>
            <p>count : {count}</p>

            <div className='btn-row'>
                <button onClick={() => {setCount(count + 1); setCount(count + 1); setCount(count + 1)}}>
                    count + 1 (x3)
                </button>
                <button onClick={() => {setCount((p) => p + 1); setCount((p) => p + 1); setCount((p) => p + 1);}}>
                    count + 1 (x3)
                </button>
            </div>

        </div>
    )
}

function Step3() {
    const [user, setUser] = useState({name: '햄버그', age: 20})
    const [todos, setTodos] = useState(['구워지기'])
    return (
        <div className='card'>
            <h3>STEP 3. 객체, 배열 state</h3>
            <p>{user.name} / {user.age} 살</p>
            <p>할 일: {todos.join(', ')}</p>
            <div className='btn-row'>
                <button onClick={() => {setUser({...user, age: user.age + 1})}}>
                    나이 + 1
                </button>
                <button onClick={() => {setTodos([...todos, `할 일 ${todos.length + 1}`])}}>
                   할 일 추가 
                </button>
            </div>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>Use State</h1>
            <Step1 />
            <Step2 />
            <Step3 />
            
        </>
    )
}

export default Example