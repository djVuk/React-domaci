import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Azuriraj svoj nalog</span>
                    <span className="settingsDeleteTitle">Obrisi nalog</span>
                </div>
                <form className="settingsForm">
                    <label>Profilna slika</label>
                    <div className="settingsPP">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50PAJhgujPKk4EbIEREGx9uiPu2UOoiruJg&usqp=CAU" alt="" className="settingsPP" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-users"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Korisnicko ime</label>
                    <input type="text" placeholder="Safak" />
                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com" />
                    <label>Sifra</label>
                    <input type="password" placeholder="Safak" />
                    <button className="settingsSubmit">Azuriraj</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
