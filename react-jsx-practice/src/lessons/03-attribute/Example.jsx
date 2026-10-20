// HTML 속성 (class, style, href, ...) 을 거의 그대로 사용하지만
//      일부 이름이 달라지는 항목들이 있음
//          - class -> className
//          - for   -> htmlFor
//          - css 스타일 속성명 : kebab-case -> camelCase

function Example() {

    const boxStyle = {
        backgroundColor: 'light yellow',
        padding: 12,                    // 크기는 기본 단위가 px
        borderRadius: 8
    }

    return(
        <>
            <p className="highlight">클래스를 지정할 땐 className을 사용</p>

            {/* 바깥쪽 중괄호   : JavaScript 작성을 위해 표현 */}
            {/* 안쪽 중괄호     : 스타일 정보를 담을 객체를 표현 */}
            <p style={{color: 'indianred', fontSize: 20}}>
                style은 객체 형태로 입력! 스타일 속성명은 camelCase 사용
            </p>

            <p style={boxStyle}>
                스타일 객체를 변수로 따로 저장하여 사용 가능
            </p>

            {/* for 속성 대신 htmlFor 를 사용해야 함 */}
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" placeholder="여기에 닉네임을 입력하세요..." />

            <br />

            {/* true/false 속성은 이름만 작성해도 true로 동작 됨 */}
            <button disabled>
                비활성화 버튼
            </button>
        </>
    )
}

export default Example