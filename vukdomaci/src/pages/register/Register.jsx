import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Registruj se</span>
            <form className="registerForm">
                <label>Korisnicko ime</label>
                <input type="text" classname="registerInput" placeholder="Unesite svoje korisnicko ime"/>
                <label>Email</label>
                <input type="text" classname="registerInput" placeholder="Unesite svoj email"/>
                <label>Sifra</label>
                <input type="password" classname="registerInput" placeholder="Unesite svoju sifru"/>
                <button className="registerButton">Registruj se</button>
            </form>
            <button className="registerLoginButton">Uloguj se</button>
        </div>
    )
}
