const card = document.querySelectorAll('.payment__box')

for(let i = 0; i < card.length; i++){

    card[i].addEventListener('click',()=>{
        if( i === 0){
            card[i].classList.add('menu__process--disabled')
            card[i].classList.remove('menu__process--active')
        }
        if( i === 1){
            card[i].classList.add('payment__box--active')
            card[i].classList.remove('payment__box--disabled')
        }
        if( i === 2){
            card[i].classList.add('payment__box--active')
        }
    })

    

}

