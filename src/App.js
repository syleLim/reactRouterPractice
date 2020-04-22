import React from 'react'
import { Home, About, Post, Posts } from "./pages"
import { Menu } from "./components"
import { Route } from 'react-router-dom'

class App extends React.Component {
    render () {
        return (
            <div>
                Router Maker
                <Menu />
                <Route exact path="/" component={Home} />
                <Route path="/about/:name?" component={About} />
                <Route path="/posts" component={Posts} />
            </div>
        )
    };
}

export default App;

