import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()
    
    if (window.innerWidth < app.lg) {
        UIkit.slider('.s4__slider', {
            center: true
        })
        UIkit.slider('.s8__slider', {
            center: true
        })
    }
    document.querySelectorAll(`.s10__nav-btn`).forEach((el, idx, parent) => {
        el.addEventListener('click', (ev) => {
            ev.preventDefault()
            const localIdx = app.getIndexOfElements(ev.currentTarget, parent)
            app.changeActivitySet(parent, localIdx)
            switch (localIdx) {
                case 0:
                    document.querySelector(`.s10__map-adress`).innerHTML = `Саратов<br> ул. Панфилова 53`
                    document.querySelector(`.s10__map-tel`).innerText = `+7 (927) 225-33-87`
                    document.querySelector(`.s10__map-tel`).setAttribute('href',"tel:79272253387")
                    break;
                case 1:
                    document.querySelector(`.s10__map-adress`).innerHTML = `Энгельс<br> ул. Банный остров 7`
                    document.querySelector(`.s10__map-tel`).innerText = `+7 (967) 077-76-62`
                    document.querySelector(`.s10__map-tel`).setAttribute('href',"tel:79670777662")
                    break;
                case 2:
                    document.querySelector(`.s10__map-adress`).innerHTML = `Саратов<br> Вольский тракт 2А/2`
                    document.querySelector(`.s10__map-tel`).innerText = `+7 (967) 077-76-62`
                    document.querySelector(`.s10__map-tel`).setAttribute('href',"tel:79670777662")
                    break;
            
                default:
                    break;
            }
        })
    })
    //VIDEO
    UIkit.scrollspy(`#video`)
    document.querySelector(`#video`).addEventListener(`inview`, (event) => {
        document.querySelector(`#video .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/0I7rYotTip4" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })
})
