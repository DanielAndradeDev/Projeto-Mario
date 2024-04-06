const marioc2 = document.querySelector('.marioc2');
// minha variavel classe Mario
const pipe = document.querySelector('.pipe');

const pula= ()=>{
    marioc2.classList.add('pula');
    setTimeout(()=>{
        marioc2.classList.remove('pula');
    
    
        
    },500);


    
}
//  O loop ele deixara nosso mario pulando em infinito 
const loop = setInterval(()=>{
    // const ela nao deixa vc mudar a variavel ela server pra definar esses lementos no computador 

    const pipePosition =pipe.offsetLeft;
    const marioc2Position = +window.getComputedStyle(marioc2).bottom.replace('px','');
    
if(pipePosition <=120 && pipePosition > 0 && marioc2Position <111){
// SE && FOR IGUAL A 120 E A POSITION FOR MAIOR QUE 0 E FOR CHEGAR A 120 ELE VAI EXECUTAR AS FUNÇOES DO CANO

    pipe.style.animation = 'none';
    pipe.style.left=`${pipePosition}px`;
    // para fazer interpulaçao usamos o ${}
    marioc2.style.bottom=`${marioc2Position}px`;
    // O SRC= DEFINE O NOSSO ENDEREÇO 
    marioc2.src='IMG/game-over.png';
    marioc2.style.width = '65px';
    marioc2.style.marginLeft= '70px';
    clearInterval(loop);
    
    
}
})

document.addEventListener('keydown',pula);