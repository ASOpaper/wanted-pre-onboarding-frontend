import { Link } from "react-router-dom";

function Home() {
    return (
    <main>
        <h1>홈입니다</h1>
        <nav className="home_nav">
            <ul>
                <li><Link to='/todo'>투두리스트</Link></li>
                <li><Link to='/signin'>로그인</Link></li>
                <li><Link to='/signup'>회원가입</Link></li>
            </ul>
        </nav>
    </main>
    );
}

export default Home;