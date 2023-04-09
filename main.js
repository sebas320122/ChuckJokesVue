//Componente y plantilla
Vue.component('chuck-card', {
  props: ['icon_url', 'value'],
  template:
    `
    <div class="col">

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" v-bind:src="icon_url" v-bind:alt="value">
      <div class="card-body">
        <p class="card-text">{{ value }}</p>
      </div>
    </div>

    </div>
    `
})  


//Vue y datos
var app = new Vue({
    el: '#app',
    data: {
      chuck: [ 
            { 
                "icon_url": "https://web.archive.org/web/20201112020127if_/https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "Chuck Norris can skydive into outer space." 
            }, 
            { 
                "icon_url": "https://web.archive.org/web/20201112020127if_/https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "The chief export of Chuck Norris is pain." 
            }, 
            { 
                "icon_url": "https://web.archive.org/web/20201112020127if_/https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." 
            }, 
            { 
                "icon_url": "https://web.archive.org/web/20201112020127if_/https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "Time waits for no man. Unless that man is Chuck Norris." 
            }, 
            { 
                "icon_url": "https://web.archive.org/web/20201112020127if_/https://assets.chucknorris.host/img/avatar/chuck-norris.png", 
                "value": "If you spell Chuck Norris in Scrabble, you win. Forever." 
            }, 
        ], 
    }
  })