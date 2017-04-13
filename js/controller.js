const PORTFOLIO_URL = `http://localhost:4000/portfolio`

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

let aboutDetails = {
  title: 'About',
  paragraph1: 'Jowl short loin beef, ball tip alcatra beef ribs short ribs meatloaf pork loin burgdoggen jerky filet mignon turkey. Meatloaf cow bacon, jerky boudin rump ground round. Doner beef salami t-bone shoulder cupim. Pancetta fatback ribeye shankle kevin, venison meatball strip steak sausage brisket rump kielbasa picanha. Jerky tail fatback leberkas. Kevin corned beef beef drumstick bresaola brisket prosciutto pig alcatra. Drumstick ground round beef prosciutto venison capicola tail brisket alcatra pig turkey tongue ball tip.',
  paragraph2: 'Turkey pork chop porchetta, picanha spare ribs prosciutto boudin. Swine tri-tip shank pancetta, landjaeger ham drumstick porchetta. Beef ribs biltong jerky tri-tip pork belly pork loin. Tongue frankfurter capicola pork chop, pancetta chuck cupim landjaeger. Picanha ball tip beef ribs meatball cupim, tongue sirloin pancetta pastrami. Ham hock corned beef prosciutto, fatback drumstick tenderloin swine kevin'
}

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
    aboutInfo: aboutDetails
  }
})