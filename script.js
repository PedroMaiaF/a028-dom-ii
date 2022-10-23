function adicionaItem(event){
    const paragrafo = document.createElement('article')
    const novoTexto = document.createTextNode('novo texto')
    
    paragrafo.appendChild(novoTexto)
    
    paragrafo.setAttribute('onClick','removeItem(event)')
    
    const referencia = document.getElementById('container')
    referencia.insertAdjacentElement('beforeend', paragrafo)
    // const estilizacaoItem = document.querySelector('.item')
    paragrafo.classList.add('item')
    
    
    }
    function removeItem(event){
        
        const itemRemovido = event.target
        itemRemovido.parentNode.removeChild(itemRemovido)
     
    }