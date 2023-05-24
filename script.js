


    function tempoNaTela() {
        let dataEL = document.querySelector("#data-cont")

        const dataAtual = new Date();

        // Formatação da hora
        let horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();
        const ampm = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12 || 12;

        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() + 1;
        const ano = dataAtual.getFullYear();


        const horaFormatada = `${horas}:${minutos < 10 ? '0' : ''}${minutos} ${ampm} </br> ${mes}/${dia}/${ano}`;

        dataEL.innerHTML = horaFormatada
    }


    
      

window.addEventListener("contextmenu", function(event) {
  event.preventDefault(); 

});

    tempoNaTela()

    setInterval(tempoNaTela,1000)