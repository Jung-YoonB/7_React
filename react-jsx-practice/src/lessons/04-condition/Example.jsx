// 조건에 따라 표시

// - JSX 안의 중괄호에는 if 문을 사용할 수 없음
//   대신에 "삼항 연산자"와 "&&" 사용

function Example() {
    const isLoggined = true
    const count = 3
    const stock = 10

    return (
        <>
        {/* 삼항연산자 (조건식 ? 참일때 : 거짓일때) */}
        {/* 
            isLoggined 값이 ture 면 "로그인 상태" 표시 
                            false 면 "로그인 필요" 표시
        */}
        
        <p>
            {isLoggined ? '로그인 상태' : '로그인 필요'}
        </p>

        {/* 조건식 && 표시할내용 => 조건이 참일 때만 표시 */}
        {count > 0 && <p>count 값 : {count}</p>}
        
        {/* 
            삼항 연산자를 사용하여 조건을 만족할 때는 변수에 저장 된 값을 표시,
            만족하지 않을 때는 텍스트를 표시
        */}
        <p>재고 : {stock > 0 ? `${stock}개`: '품절'}</p>
        <p>재고 상태 : {stock && '재고 있음'}</p>
        <p>{stock > 0 && '재고 있음'}</p>

        <hr />

        <UserRole role="admin" />
        <UserRole role="member" />
        <UserRole role="" />
        </>
    )
}

function UserRole({role}) {
    if (role === '') {
        return null         // null을 리턴하면 화면에 아무것도 표시하지 않음
    }
    if (role === 'admin') {
        return <p>관리자</p>
    }
    return <p>일반 회원</p>
}

export default Example