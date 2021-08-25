import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src="data:image/png;base64,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" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">KATEGORIJE</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Mercedes</li>
                    <li className="sidebarListItem">Bmw</li>
                    <li className="sidebarListItem">Audi</li>
                    <li className="sidebarListItem">Volkswagen</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">PRATITE NAS</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    );
}
