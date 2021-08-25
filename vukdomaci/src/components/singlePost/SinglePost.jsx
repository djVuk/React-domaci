import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://autoblog.rs/gallery/108/213298-audi%20a6%2011.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Autor: <b>Vuk</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam cupiditate! Quasi, totam eius quisquam molestias dolores ut quod consequuntur alias eos tempore eligendi et perspiciatis distinctio voluptatibus quidem voluptatem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam cupiditate! Quasi, totam eius quisquam molestias dolores ut quod consequuntur alias eos tempore eligendi et perspiciatis distinctio voluptatibus quidem voluptatem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam cupiditate! Quasi, totam eius quisquam molestias dolores ut quod consequuntur alias eos tempore eligendi et perspiciatis distinctio voluptatibus quidem voluptatem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam cupiditate! Quasi, totam eius quisquam molestias dolores ut quod consequuntur alias eos tempore eligendi et perspiciatis distinctio voluptatibus quidem voluptatem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam cupiditate! Quasi, totam eius quisquam molestias dolores ut quod consequuntur alias eos tempore eligendi et perspiciatis distinctio voluptatibus quidem voluptatem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam cupiditate! Quasi, totam eius quisquam molestias dolores ut quod consequuntur alias eos tempore eligendi et perspiciatis distinctio voluptatibus quidem voluptatem?
                </p>
            </div>
        </div>
    )
}
