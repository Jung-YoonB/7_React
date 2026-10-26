/*
    useMemo : 함수 결과 (계산 결과)를 메모이제이션하는 훅

    const 결과 = useMemo(() => {계산식}, 의존성배열)

    특징
    - 계산 : "결과"를 기억하고, 의존성이 바뀔 때만 다시 계산함
    - 무거운 계산을 관계없는 state 변경으로부터 보호함
    - 객체, 배열의 참조를 유지하면서 memo 자식의 리렌더링을 막아줌
*/

import { useMemo, useState } from "react"

function slowDouble(n) {
    const end = Date.now() + 500

    while(Date.now() < end) {}      // 시간 보내기 (0.5초)
    
    return n * 2
}

function Step1() {
    const [number, setNumber] = useState(1)
    const [text, setText] = useState('')

    const result1 = slowDouble(number)
    const result2 = useMemo(() => slowDouble(number), [number])

    return (
        <div className="card">
            <h3>STEP 1. 느린 계산 비교</h3>
            <p>{number} x 2 = {result1} (useMemo X) / {result2} (useMemo O)</p>
            <button onClick={() => {setNumber(number + 1)}}>
                number + 1
            </button>

            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>Use Memo</h1>
            <Step1 />
        </>
    )
}

export default Example