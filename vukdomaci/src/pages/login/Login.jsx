import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" classname="loginInput" placeholder="Unesite svoj email"/>
                <label>Sifra</label>
                <input type="password" classname="loginInput" placeholder="Unesite svoju sifru"/>
                <button className="loginButton">Uloguj se</button>
            </form>
            <button className="loginRegisterButton">Registruj se</button>
        </div>
    )
}
