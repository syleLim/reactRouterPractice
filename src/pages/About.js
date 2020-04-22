import React from "react"
import queryString from "query-string"

const About = ({match, location}) => {
    const { color } = queryString.parse(location.search);
    
    return (
        <div>
            <h2>Aboue</h2>
            <p>About Page for {match.params.name}</p>
            <p>query is {color}</p>
        </div>
    )
}

export default About;