// 컴포넌트 : 화면 조각을 반환하는 함수
//      이름은 반드시 "대문자"로 시작해야 함
//      example(X) -> Example (O)
function Example() {
    // return 뒤의 괄호 () 안에 작성한 HTML 부분이 JSX 영역
    return (
        <>
            {/* 바깥을 감싸는 부모는 하나여야 함 */}
            <h2>Hello, React!</h2>
            <p>JSX는 HTML과 거의 유사하지만,
                JavaScript 내에서 사용하는 문법
            </p>
            <ul>
                <li>반드시 하나의 요소로 감싸야 함</li>
                <li>닫는 태그가 없어도 꼭 닫아 줘야함 (br, hr, ...)</li>
                <li>일부 속성의 이름이 다르게 표현 됨(class, for, ...)</li>
            </ul>
        </>
    )
}

export default Example