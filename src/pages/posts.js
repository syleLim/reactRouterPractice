import React  from "react"
import Post from "./post"
import {Link, Route } from "react-router-dom"

const Posts = ({match}) => {
    return (
        <div>
            <h3>Post List</h3>
            <ul>
                <li><Link to={`${match.url}/1`}>Post1</Link></li>
                <li><Link to={`${match.url}/2`}>Post2</Link></li>
                <li><Link to={`${match.url}/3`}>Post3</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<p>choose post</p>)} />
            <Route exact path={`${match.url}/:id`} component={Post} />
        </div>
    );
}

export default Posts;