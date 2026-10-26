/*
    useCallback : 함수 자체를 메모이제이션하는 훅

    const 함수 = useCallback(() => {...}, 의존성배열)

    특징
    - 함수 "자체"를 기억하고, 의존성이 바뀔때마다 함수를 새로 만듦
    - React.memo 자식에게 함수를 props 로 넘길 때 함께 사용
    - 의존성을 생략하면, 이전 값을 사용
*/

import { memo, useCallback, useState } from "react"

const LogButton = memo(function LogButton({label, onClick}) {
    console.log(`${label} 버튼 렌더링`)
    return <button onClick={onClick}>{label}</button>
})

function Step1() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const plainIncrease = () => {setCount((prev) => prev + 1)}
    const memoIncrease = useCallback(() => {setCount((prev) => prev + 1)}, [])

    return (
        <div className="card">
            <h3>STEP 1. 일반 함수 vs useCallback</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>count : {count}</p>
            <div className="btn-row">
                <LogButton label="일반 함수" onClick={plainIncrease} />
                <LogButton label="useCallback" onClick={memoIncrease} />
            </div>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>Use Callback</h1>
            <Step1 />
        </>
    )
}

export default Example