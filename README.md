# reactRouterPractice

react-Router is one of page routing using path<br>
It is usful for SPA(single page application)<br><br>

### SPA (SINGLE PAGE APPLICATION)
Single Page Application is paradiam for making page<br>
It work one time renderting, so it is fast, but if app is bigger, file is bigger too.<br><br>

### PROJECT
```
    Root
      |--- src
            |--- index.js
            |--- App.js
            |--- Root.js
            |--- components
            |--- pages
            |--- styles
            |--- index.html
      |--- webpack.config.js
      |--- package.json
```

### exact
If you set Parmaeter use path
```html
<Router path="/:name" component={}/>
```
It work twice in one router, so you have to write like this.
```html
<Router exact path="/:name" component={}/>
```
or like this
```html
<Router path="/:name?" component={}/>
```

### Link
#### Link
For link path, not use `a` herf.<br>
`a` is redirection, but `<Link>` is not.<br><br>

#### NavLink
It can be applied style.<br><br>

### Router params
`{match, location, history}`

#### match
```
    { path, url, isExact, parmas }
    path    : page path
    url     : page url
    params  : url parameter
```

#### loaction
```
    { pathname, search, hash, key }
    pathname    : Path string, it is changed when anything change in path like query, params, etc...
    search      : Query string, parse with query-string module.
```
#### history
```
    {action, block, go, push, replace ...}
    action  : page state
        / POP       : first visit
        / PUSH      : push routing
        / REPLACE   : replace routing
    block   : func for out of page
    go      : func for redirection before, or next page
    push    : link path with history
    replace : link path without history
```

