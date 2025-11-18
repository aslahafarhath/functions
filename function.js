function changeme(){
    let a = document.getElementById('p1')
    if (a.innerHTML=='hello'){
        a.innerHTML='bye'
    }
    else{
        a.innerHTML='hello'
    }
}

function changestyle(){
    let b = document.getElementById('main')
    if (b.style.display == 'block')
    {
        b.style.display='none'
        b.style.backgroundColor = 'blue'
    }
    else{
        b.style.style = 'none'
        b.style.backgroundColor = 'yellow'
    }
    
}
