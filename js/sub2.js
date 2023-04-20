const centerItem2n = document.querySelectorAll('.centerItem > a > img');

for(let i=0; i<centerItem2n.length; i++){
    if(i%2==0){
        centerItem2n[i+1].classList.add('mt50');
    }
    
}

const centerItem = document.querySelectorAll('.centerItem');
const more = document.querySelectorAll('.more');

