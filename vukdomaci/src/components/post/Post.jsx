import "./post.css"
import { Link } from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://www.magazinauto.com/wp-content/uploads/2020/06/IMG_4003-680x365.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                <Link className="link" to="/post/:postId">Lorem ipsum.</Link>
                    
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate pariatur autem temporibus, debitis sed placeat fuga iste maxime officia quaerat culpa quisquam recusandae reprehenderit nisi iusto! Natus, reiciendis. Incidunt.
            Dolorum eum ipsam ipsa, rem aperiam nulla temporibus voluptas nihil ad cumque aliquid corrupti minima dignissimos molestiae vel inventore suscipit pariatur sunt! Distinctio, sit quaerat! Sed praesentium placeat rerum modi?
            Est eligendi aspernatur ducimus esse, repudiandae, reprehenderit voluptates aut, illo quisquam ratione facilis laudantium architecto voluptate facere! Explicabo, ipsa incidunt ex atque quas enim dignissimos alias asperiores, laudantium laboriosam eaque?</p>
        </div>
    )
}
