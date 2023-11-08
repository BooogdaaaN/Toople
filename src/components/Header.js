import "../stylesheets/Header.scss";
function Header() {
    const token = false;
    return (
        <header>
            <div className="logo">Toople</div>
            <nav>
                <ul>
                    <li>Курсы Moodle</li>
                    <li>О сайте</li>
                    {token && <li>Избранное</li>}
                </ul>
            </nav>
            <div className="Profile">{!token && <button>Войти</button>}</div>
        </header>
    );
}

export default Header;
