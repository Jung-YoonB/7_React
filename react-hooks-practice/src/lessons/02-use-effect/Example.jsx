/*
    useEffect : 생명주기 관리 / 부수 작업 관리 훅

    useEffect(() => {실행 할 코드; return () => {정리 할 내용}}, [의존성])

    특징
    - 화면이 그려진 다음에 실행 (API 호출, 타이머, 이벤트 등록 등)
    - 의존성 배열이 실행 시점 결정 (생략, [], [state/props])
    - return문은 정리 함수(cleanup)를 등록 (타이머 제거, 연결 종료 등)
*/

import { useEffect, useState } from "react"

function Step1() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    useEffect(() => {
        console.log("[useEffect 1]")
        console.log("매번 렌더링 될 때")
    })

    useEffect(() => {
        console.log("[useEffect 2]")
        console.log("처음 한 번만 (최초 렌더링 시)")
    }, [])

    useEffect(() => {
        console.log("[useEffect 3]")
        console.log("처음 + a 변경 될 때만")
    }, [a])

    return (
        <div className="card">
            <h3>STEP 1. 의존성 배열</h3>
            <p>a : {a} / b : {b}</p>

            <div className="btn-row">
                <button onClick={() => {setA(a + 1)}}>
                    a + 1
                </button>
                <button onClick={() => {setB(b + 1)}}>
                    b + 1
                </button>
            </div>
        </div>
    )
}

function Step2() {
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if (!running) return

        const id = setInterval(() => {setSeconds((prev) => prev + 1)}, 1000)

        return () => {clearInterval(id)}
    }, [running])

    return (
        <div className="card">
            <h3>STEP 2. 스톱워치</h3>
            <p>{seconds} 초</p>
            <div className="btn-row">
                <button onClick={() => {setRunning(!running)}}>
                    {running ? '정지' : '시작'}
                </button>
                <button onClick={() => {setSeconds(0)}}>
                    리셋
                </button>
            </div>
        </div>
    )
}

function Step3() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function load() {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
            
                if (!res.ok) throw new Error(`서버 오류 (${res.status})`)
                
                setUsers(await res.json())
                
            } catch (err) {
                setError(err.message)
            }

            setLoading(false)
        }

        load()      // useEffect 콜백 함수에 async 사용 불가 
                    // -> 함수를 별도로 정의하여 호출
    }, [])

    return (
        <div className="card">
            <h3>STEP 3. 데이터 가져오기</h3>
            {loading && <p>불러오는 중...</p>}
            {error && <p>{error}</p>}
            <ul>
                {
                    users.map((u) => <li key={u.id}>{u.name}</li>)
                }
            </ul>
        </div>
    )
}

function Example() {
    return (
        <>
            <h1>Use Effect</h1>
            {/* <Step1 /> */}
            {/* <Step2 /> */}
            <Step3 />
        </>
    )
}

export default Example