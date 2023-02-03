// Remember to import the data and Dog class!

import Dog from './dog.js' 
import dogs from './data.js'

const rex = new Dog(dogs.Rex)

document.getElementById('like').addEventListener('click', function(){
    console.log('button clicked')
    setTimeout(()=>document.querySelector('.like').classList.remove('hidden'),400
    )
    setTimeout(()=>document.querySelector('.like').classList.add('hidden'),1000
    )
    
})



function render(){
    document.getElementById('main').innerHTML = rex.getDogHTML()
    }

render()

