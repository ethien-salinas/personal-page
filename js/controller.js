
let menuCtrl = new Vue({
  el: '#collapse-menu',
  data: {
    menuItems: menuItemsArray
  }
});

let portfolioCtrl = new Vue({
  el: '#portfolio',
  data: {
    portfolioItems: portfolioArray
  }
});

let portfolioDetail = new Vue({
  el: '#portfolioDetailSection',
  data: {
    portfolioDetails:portfolioDetailsArray
  }
})
