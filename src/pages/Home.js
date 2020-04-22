import React from "react"

const Home = ({history}) => {
    return (
        <div>
            <h2>Home</h2>
            <p>Home Page</p>
            <button onClick={() => {history.push("/about/javascript")}}>About</button>
        </div>
    )
}

export default Home;