var app = new Vue({
  el: "#app",
  data: {
    titolo: "Generatore email casuali",
    mail: '',
    listaMail: []
  },

  mounted: function () {
    for (var i = 0; i < 10; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(risposta => {
        console.log(risposta.data.response);
        this.listaMail.push(risposta.data.response);
        console.log(listaMail);
      })
    }
  }
})
