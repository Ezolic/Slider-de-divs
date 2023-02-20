const botoes = document.querySelectorAll('button')
const div = document.getElementById('planetas')
size = div.offsetHeight

botoes.forEach(item => {
    item.addEventListener('click', marginToPlanet)
})

function marginToPlanet(event) {
    const element = event.target
    const id = element.getAttribute('id')

    botoes.forEach((element) => {
        element.classList.remove('selecionado');
    });
    
    element.classList.add('selecionado')

    /*
    const planet = document.querySelector('#planeta-'+id)

    */

    if(id == "terra") {
        div.style.marginLeft = -0+'px'

    }

    else if(id == "marte") {

        const div2 = document.getElementById('planeta-marte')
    
        size = div2.offsetWidth

        div.style.marginLeft = -size +'px'

    } else if(id == "jupiter") {

        const div2 = document.getElementById('planeta-jupiter')
        
        size = div2.offsetWidth

        div.style.marginLeft = -size*2+'px'

    }
}



