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
                    document.querySelector(`.s10__map-script iframe`).setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.681137224115!2d45.91315441602808!3d51.592407112304684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c599cd81712b%3A0x2ebcd457d28444b3!2z0YPQuy4g0J_QsNC90YTQuNC70L7QstCwLCA1Mywg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8sIDQxMDAzMw!5e0!3m2!1sru!2sru!4v1618227745566!5m2!1sru!2sru')
                    break;
                case 1:
                    document.querySelector(`.s10__map-adress`).innerHTML = `Энгельс<br> ул. Банный остров 7`
                    document.querySelector(`.s10__map-tel`).innerText = `+7 (967) 077-76-62`
                    document.querySelector(`.s10__map-tel`).setAttribute('href',"tel:79670777662")
                    document.querySelector(`.s10__map-script iframe`).setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7756097992956!2d46.09790571602568!3d51.49898511913895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114b9be0bcd0ba3%3A0x9bdf99f7a0cf8429!2z0JLRgdC1INC40Lcg0JTQtdGA0LXQstCw!5e0!3m2!1sru!2sru!4v1618227859567!5m2!1sru!2sru')
                    break;
                case 2:
                    document.querySelector(`.s10__map-adress`).innerHTML = `Саратов<br> Вольский тракт 2А/2`
                    document.querySelector(`.s10__map-tel`).innerText = `+7 (967) 077-76-62`
                    document.querySelector(`.s10__map-tel`).setAttribute('href',"tel:79670777662")
                    document.querySelector(`.s10__map-script iframe`).setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.2459737047243!2d45.96897621602888!3d51.618703210379536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114cf0d897828f9%3A0x69d3e661724b304d!2z0JLQvtC70YzRgdC60LjQuSDRgtGA0LDQutGCLCAy0JAsINCh0LDRgNCw0YLQvtCyLCDQodCw0YDQsNGC0L7QstGB0LrQsNGPINC-0LHQuy4sIDQxMDA2OQ!5e0!3m2!1sru!2sru!4v1618227948724!5m2!1sru!2sru')
                    break;
            
                default:
                    break;
            }
        })
    })
    UIkit.scrollspy(`.s3__list`)
    document.querySelector(`.s3__list`).addEventListener(`inview`, (event) => {
        document.querySelector(`.action-btn`).classList.add('visible')
    })
    //VIDEO
    const setOfYTVideoIDs = [
        'fmT2FFVuWDA',
        'q_GlJi-F0ZM',
        'SJAwaRU0BEw',
        'ADAVVE7vxKk',
        'J0y6KeYsprg',
        'l4uX6SMFwp4',
        'GVBiC5dEvf8',
    ]
    for (let i = 0; i < 7; i++) {
        const videoId = `#video${i || ''}`
        UIkit.scrollspy(videoId)
        document.querySelector(videoId).addEventListener(`inview`, (event) => {
            document.querySelector(`${videoId} .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/${setOfYTVideoIDs[i]}" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
        })
    }
    // MAP SECTION
    UIkit.scrollspy(`.s10__map--1`)
    document.querySelector(`.s10__map--1`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s10__map--1 .s10__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.681137224115!2d45.91315441602808!3d51.592407112304684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c599cd81712b%3A0x2ebcd457d28444b3!2z0YPQuy4g0J_QsNC90YTQuNC70L7QstCwLCA1Mywg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8sIDQxMDAzMw!5e0!3m2!1sru!2sru!4v1618227745566!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })
    UIkit.scrollspy(`.s10__map--2`)
    document.querySelector(`.s10__map--2`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s10__map--2 .s10__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7756097992956!2d46.09790571602568!3d51.49898511913895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114b9be0bcd0ba3%3A0x9bdf99f7a0cf8429!2z0JLRgdC1INC40Lcg0JTQtdGA0LXQstCw!5e0!3m2!1sru!2sru!4v1618227859567!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })
    UIkit.scrollspy(`.s10__map--3`)
    document.querySelector(`.s10__map--3`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s10__map--3 .s10__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.2459737047243!2d45.96897621602888!3d51.618703210379536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114cf0d897828f9%3A0x69d3e661724b304d!2z0JLQvtC70YzRgdC60LjQuSDRgtGA0LDQutGCLCAy0JAsINCh0LDRgNCw0YLQvtCyLCDQodCw0YDQsNGC0L7QstGB0LrQsNGPINC-0LHQuy4sIDQxMDA2OQ!5e0!3m2!1sru!2sru!4v1618227948724!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    })


    const slidegal = (popup) => {
        document.querySelectorAll(`${popup} .slidegal-item`).forEach((el, unused, parent) => {
            el.addEventListener(`click`, (event) => {
                UIkit.slider(`${popup} .banya__slider`).show(app.getIndexOfElements(event.currentTarget, parent))
            })
        })
        app.sliderSpy(`${popup} .banya__slider`, index => {
            app.changeActivitySet(document.querySelectorAll(`${popup} .slidegal-item`), index)
        })
    }
    
    slidegal('#bani-item1')
    slidegal('#bani-item2')
    slidegal('#bani-item3')
    slidegal('#bani-item4')
    slidegal('#bani-item5')

})
