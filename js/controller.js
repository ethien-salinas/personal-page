const PORTFOLIO_URL = `http://localhost:4000/portfolio`

Vue.component('navigation-bar', {
  props: ['menuItemsArray'],
  template:
  `<div class="container">

		<!-- Brand and toggle -->
		<div class="navbar-header page-scroll">
			<button class="navbar-toggle" data-toggle="collapse" data-target="#collapse-menu">
				<span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>.
			</button>
			<a class="navbar-brand" href="#page-top">Ethien Salinas</a>
		</div>

		<!-- nav links -->
		<div id="collapse-menu" class="collapse navbar-collapse">
			<ul class="nav navbar-nav navbar-right">
				<li v-for="menuItem in menuItemsArray" v-bind:class="menuItem.class">
					<a v-bind:href="'#'+menuItem.link">{{menuItem.label}}</a>
				</li>
			</ul>
		</div>

	</div>`
})


let menuCtrl = new Vue({
  el: '#mainNav',
  data: {
    menuItems: []
  },
  beforeCreate() {
    let self = this
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
      self.menuItems = JSON.parse(xhr.responseText).menuItemsArray
    }
    xhr.open('GET', PORTFOLIO_URL)
    xhr.send()
  }
});

let portfolioCtrl = new Vue({
  el: '#portfolio',
  data: {
    portfolioItems: []
  },
  methods: {
    sortAscPortfolioItems: function (event) {
      this.portfolioItems.map((e) => {
        console.log(`1 - ${e.id}`);
      });
      this.portfolioItems.sort((a, b) => {
        return a.id - b.id;
      });
      this.portfolioItems.map((e) => {
        console.log(`2 - ${e.id}`);
      });
    },
    sortDescPortfolioItems: function (event) {
      this.portfolioItems.sort((a, b) => {
        return b.id - a.id;
      });
    }
  },
  beforeCreate() {
    let self = this
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
      self.portfolioItems = JSON.parse(xhr.responseText).portfolioArray
    }
    xhr.open('GET', PORTFOLIO_URL)
    xhr.send()
  }
});

let portfolioDetail = new Vue({
  el: '#portfolioDetailSection',
  data: {
    portfolioDetails: []
  },
  beforeCreate() {
    let self = this
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
      self.portfolioDetails = JSON.parse(xhr.responseText).portfolioArray
    }
    xhr.open('GET', PORTFOLIO_URL)
    xhr.send()
  }
})

Vue.component('about-section', {
  props: ['about'],
  template: `<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h2>{{about.title}}</h2>
				<hr class="star-light">
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-lg-offset-2">
        <p>{{about.paragraph1}}</p>
			</div>
			<div class="col-lg-4">
				<p>{{about.paragraph2}}</p>
			</div>
		</div>
	</div>`
})

let aboutCtrl = new Vue({
  el: '#about',
  data: {
    aboutInfo: {}
  },
  beforeCreate() {
    let self = this
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
      self.aboutInfo = JSON.parse(xhr.responseText).aboutInfo
    }
    xhr.open('GET', PORTFOLIO_URL)
    xhr.send()
  }
})