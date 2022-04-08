let button = document.querySelectorAll('button')
let imgPerfil = document.querySelector('#imgPerfil')
let contentExperience = document.querySelector('#contentExperience')

window.addEventListener('beforeprint', (event) => {
    button.forEach((e)=>{
        e.style.display = 'none'
    })
})

document.addEventListener('mouseover', (e) => {
    button.forEach((e)=>{
        e.style.display = 'block'
    })            
})

function ChangePhoto(e){
    let file = e.files[0]
    let RF = new FileReader()
    RF.onload = function(e) {
        imgPerfil.src = e.target.result
    }
    RF.readAsDataURL(file)
}

function addExperience(){
    contentExperience.insertAdjacentHTML("beforeend", `
        <div>
            <h3>New Title</h3>
            <br>
            <p>Job company name | Year</p>
            <ul>
                <li>Job</li>
            </ul>
        </div>            
    `)
}

function addEducation(){
    let contentEducation = document.querySelector('#contentEducation')
    contentEducation.insertAdjacentHTML("beforeend", `
    <br>
    <div>
        <h3>Computer engineer</h3>
        <br>
        <p>Universidad privada en Santo Domingo | 2017 - 2022</p>
        </div>            
    `)
}
