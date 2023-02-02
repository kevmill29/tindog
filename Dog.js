// Create the Dog class here




class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHTML(){
        const {name, age, avatar, bio} = this
        return `
        <div class="dog-info">
                        <h1 >${name}, ${age}</h1>
                        <div class="bio">
                            <p>${bio}</p>
                        </div>
                    </div>
                        <div class="dog-img-div">
                            <img class="dog-img" src="${avatar}"/>
                        </div>`
    }
    
}


export default Dog