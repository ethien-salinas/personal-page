const BASE_URL = 'http://localhost:4000'

let menuCtrl = new Vue({
  el: '#collapse-menu',
  data: {
    menuItems: []
  },
  beforeCreate() {
      let self = this
      let xhr = new XMLHttpRequest()
      xhr.onload = function () {
        self.menuItems = JSON.parse(xhr.responseText).menuItemsArray
      }
      xhr.open('GET', `${BASE_URL}/portfolio`)
      xhr.send()
  }
});

let portfolioCtrl = new Vue({
  el: '#portfolio',
  data:{
    portfolioItems:[]
  },
  beforeCreate() {
      let self = this
      let xhr = new XMLHttpRequest()
      xhr.onload = function () {
        self.portfolioItems = JSON.parse(xhr.responseText).portfolioArray
      }
      xhr.open('GET', `${BASE_URL}/portfolio`)
      xhr.send()
  }
});

let portfolioDetail = new Vue({
  el: '#portfolioDetailSection',
  data: {
    portfolioDetails:[]
  },
  beforeCreate() {
      let self = this
      let xhr = new XMLHttpRequest()
      xhr.onload = function () {
        self.portfolioDetails = JSON.parse(xhr.responseText).portfolioDetailsArray
      }
      xhr.open('GET', `${BASE_URL}/portfolio`)
      xhr.send()
  }
})
