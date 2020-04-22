import React from "react"

const Post = ({match}) => (
    <div>
        <p>Post {match.params.id}</p>
    </div>
);

export default Post;