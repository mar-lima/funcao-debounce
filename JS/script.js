const doc =(el) => document.querySelector(el);
const docAll =(el) => document.querySelectorAll(el);

let body = doc('body')
let target = docAll('.banner')

function anime() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add('animar')
        } else {
            element.classList.remove('animar')
        }
    })
}

if(target.length) {
window.addEventListener('scroll', debounce(function(){
    anime()
    console.log('contador')
}, 150));
}

function debounce(fn, delay) {
    let timer = null
    return function() {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}