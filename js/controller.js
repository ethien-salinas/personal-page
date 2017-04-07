const BASE_URL = 'http://localhost:4000'
let menuCtrl = new Vue({
  el: '#collapse-menu',
  data: {
    menuItems: []
  },
  beforeCreate() {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', `${BASE_URL}/portfolio`)
      xhr.onload = function () {
        self.menuItems = JSON.parse(xhr.responseText).menuItemsArray
      }
      xhr.send()
  }
});

let portfolioCtrl = new Vue({
  el: '#portfolio',
  data:{
    portfolioItems:[]
  },
  beforeCreate() {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', `${BASE_URL}/portfolio`)
      xhr.onload = function () {
        self.portfolioItems = JSON.parse(xhr.responseText).portfolioArray
      }
      xhr.send()
  }
});

let portfolioDetail = new Vue({
  el: '#portfolioDetailSection',
  data: {
    portfolioDetails:[]
  },
  beforeCreate() {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', `${BASE_URL}/portfolio`)
      xhr.onload = function () {
        self.portfolioDetails = JSON.parse(xhr.responseText).portfolioDetailsArray
      }
      xhr.send()
  }
})
