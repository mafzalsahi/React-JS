
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
/*const ReactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    childen:'Click me to visit website'
}*/

/*const AnotherElement=(
    <a href="http://google.com" target='_blank'>Visit Google</a>
)*/

const anotherUsername="afzal"
const reactElement=React.createElement(
    'a',
    {href:'http://google.com',target:'_blank'},'Click me to visit google',anotherUsername
)

createRoot(document.getElementById('root')).render(  
    <App/>
)
