// Remember to import the data and Dog class!

import Dog from './dog.js' 
import dogs from './data.js'

const rex = new Dog(dogs.Rex)

function render(){
    document.getElementById('main').innerHTML = rex.getDogHTML()
    }
render()

