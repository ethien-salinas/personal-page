//import {portfolio} from 'models.js'

let menuCtrl = new Vue({
  el: '#collapse-menu',
  data: {
    menuItems: [{
      "class": "hidden",
      "link": "page-top",
      "label": ""
    },
    {
      "class": "page-scroll",
      "link": "portfolio",
      "label": "Portfolio"
    },
    {
      "class": "page-scroll",
      "link": "about",
      "label": "About"
    },
    {
      "class": "page-scroll",
      "link": "contact",
      "label": "Contact"
    }]
  }
});


let portfolioCtrl = new Vue({
  el: '#portfolio',
  data: {
    portfolioItems: [{
      "link": "portfolioModal1",
      "img": "cabin.png"
    },
    {
      "link": "portfolioModal2",
      "img": "cake.png"
    },
    {
      "link": "portfolioModal3",
      "img": "circus.png"
    },
    {
      "link": "portfolioModal4",
      "img": "game.png"
    },
    {
      "link": "portfolioModal5",
      "img": "safe.png"
    },
    {
      "link": "portfolioModal6",
      "img": "submarine.png"
    }]
  }
});



