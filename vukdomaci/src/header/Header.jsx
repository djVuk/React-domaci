import "./header.css"

export default function Header() {
    return (
        <div className= "header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://wallpaperaccess.com/full/814840.jpg" alt="" />
        </div>
    )
}
