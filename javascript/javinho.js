
const divCards = document.querySelector(".cards")
const btn = document.querySelector("#btn")

btn.addEventListener("click", carregarMais)

let pagina = 1
let maxPage = null

function carregarMais(){
    if(pagina == maxPage){
        btn.setAttribute("hidden" ,"")
    }
        
    pagina++

    apresentaPersonagem()
}

async function apresentaPersonagem() {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina} `)
    const data = await response.json()

    
    maxPage = data.info.pages
    
    data.results.forEach((personagem) => { /* esta listando todos os personagens */
        /* console.log(personagem.name) esta especificando que esta pegando o nome do personagem */
        console.log(personagem)

        const divCard = document.createElement("div") /* criou um <div> no html */

        divCard.classList.add("card")/* adicionou card na div criada como nome da div */

        divCard.innerHTML = ` <header>
                        <img src="${personagem.image}" alt="">
                        <p>${personagem.name} </p>
                    </header>
                    <div class="content">
                        <div class="status">
                            <img src="./images/status.svg" alt="">
                            <p>${personagem.status} </p>
                        </div>
                        <div class="status">
                            <img src="./images/status2.svg" alt="">
                            <p>${personagem.species} </p>

                        </div>
                        <div class="status">
                            <img src="./images/status3.svg" alt="">
                            <p>${personagem.origin.name} </p>
                        </div>`

        divCards.appendChild(divCard)
    });


}

apresentaPersonagem()