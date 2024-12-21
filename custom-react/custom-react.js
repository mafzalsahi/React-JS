function customRender(reactElement,mainContainer){
    /*
    const domElement=document.createElement(re.type)
    domElement.innerHTML=domElement.childen
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
    */
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.childen
    for (const prop in reactElement.props) {
        if (prop === 'childen') {continue; }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
  mainContainer.appendChild(domElement) 

}

const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    childen:'Click me to visit website'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)