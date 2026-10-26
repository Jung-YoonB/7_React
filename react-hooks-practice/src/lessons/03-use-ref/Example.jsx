import { useRef, useState } from "react"

/*
    useRef : DOM 조작, 렌더링과 상관없는 상태(값) 관리 훅

    const ref = useRef(초기값)      // {current: ...}
        => ref.current 로 읽고 쓰기

    특징
    - current 를 바꿔도 리렌더링이 되지 않음
    - 리렌더링 되어도 값이 유지 됨
*/
function Step1() {
    const inputRef = useRef(null)

    return (
        <div className="card">
            <h3>STEP 1. DOM 접근</h3>
            <input type="text" ref={inputRef} />
            <div className="btn-row">
                <button onClick={() => {inputRef.current.focus()}}>
                    포커스 주기
                </button>
                <button onClick={() => {inputRef.current.value = ''; inputRef.current.focus()}}>
                    비우고 포커스
                </button>
                <button onClick={() => {console.log(inputRef.current.value)}}>
                    입력값 출력(콘솔)
                </button>
            </div>
        </div>
    )
}

function Step2() {
    const [stateCount, setStateCount] = useState(0)
    const [, setTick] = useState(0)
    const refCount = useRef(0)

    return (
        <div className="card">
            <h3>STEP 2. useState vs useRef</h3>
            <p>state : {stateCount}</p>
            <p>ref : {refCount.current}</p>
            <div className="btn-row">
                <button onClick={() => {setStateCount(stateCount +1)}}>
                    state + 1
                </button>
                <button onClick={() => {refCount.current += 1; console.log("ref=", refCount.current)}}>
                    ref + 1
                </button>
                <button onClick={() => {setTick((t) => t + 1)}}>
                    리렌더링(화면 다시 그리기)
                </button>
            </div>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>Use Ref</h1>
            <Step1 />
            <Step2 />
        </>
    )
}

export default Example