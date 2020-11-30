var app = new Vue({
  el: "#app",
  data: {
    titolo: "Generatore email casuali",
    listaMail: []
  },

  // FUNZIONE MOUNTED
  // mounted: function () {
  //   for (var i = 0; i < 10; i++) {
  //     axios
  //     .get('https://flynn.boolean.careers/exercises/api/random/mail')
  //     .then(risposta => {
  //       console.log(risposta.data.response);
  //       this.listaMail.push(risposta.data.response)
  //     })
  //   }
  // }

  // FUNZIONE CON METHOD E BUTTON

  methods: {
    genera: function () {
      for (var i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(risposta => {
          console.log(risposta.data.response);
          this.listaMail.push(risposta.data.response)
        })
      }
    }
  }


})
