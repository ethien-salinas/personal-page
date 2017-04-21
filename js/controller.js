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

let navbarCtrl = new Vue({
  el: '#mainNav',
  data: {
    menuItems: [],
    classArray: [
      'navbar',
      'navbar-default',
      'navbar-fixed-top',
      'navbar-custom'
    ]
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


Vue.component('portfolio-section', {
  template:
  `<div class="container">

    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Portfolio</h2>
        <hr class="star-primary">
      </div>
    </div>

    <button v-on:click="sortAscPortfolioItems" class="btn btn-success">
      <i class="fa fa-sort-asc fa-fw" aria-hidden="true"></i>
    </button>
    <button v-on:click="sortDescPortfolioItems" class="btn btn-success">
      <i class="fa fa-sort-desc fa-fw" aria-hidden="true"></i>
    </button>

    <div class="row">
      <div class="col-sm-4 portfolio-item" v-for="portfolioItem in portfolioItems">
        <a v-bind:href="'#'+portfolioItem.link" class="portfolio-link" data-toggle="modal">
          <div class="caption">
            <div class="caption-content">
              <i class="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img v-bind:src="'img/portfolio/'+portfolioItem.img" class="img-responsive" alt="image">
        </a>
      </div>
    </div>

  </div>`,
  data: function () {
    return {
      portfolioItems: []
    }
  },
  methods: {
    sortAscPortfolioItems: function (event) {
      this.portfolioItems.sort((a, b) => {
        return a.id - b.id;
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
})

let portfolioCtrl = new Vue({
  el: '#portfolio'
});


Vue.component('portfolio-detail-section', {
  props: ['portfolioDetailsArray'],
  template:
  `<div><div v-for="portfolioDetail in portfolioDetailsArray" v-bind:id="portfolioDetail.details.id" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">

    <div class="modal-content">

      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="modal-body">
              <h2>Data integration project</h2>
              <hr class="star-primary">
              <img v-bind:src="'img/portfolio/'+portfolioDetail.details.img" class="img-responsive img-centered" alt="">
              <p>{{portfolioDetail.details.description}}</p>
              <ul class="list-inline item-details">
                <li>Client:
                  <strong><a v-bind:href="portfolioDetail.details.project_link">{{portfolioDetail.details.client}}</a>
                  </strong>
                </li>
                <li>Date:
                  <strong><a v-bind:href="portfolioDetail.details.project_link">{{portfolioDetail.details.date}}</a>
                  </strong>
                </li>
                <li>Service:
                  <strong><a v-bind:href="portfolioDetail.details.project_link">{{portfolioDetail.details.service}}</a>
                  </strong>
                </li>
              </ul>
              <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div></div>`
})

let portfolioDetailCtrl = new Vue({
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
  template:
  `<div class="container">
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

Vue.component('contact-section', {
  props: ['contactDetails'],
  template:
  `<div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Contact me</h2>
        <hr class="star-primary">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <form name="sentMessage" id="contactForm">
          <div class="row control-group" v-for="contactDetail in contactDetails">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label v-bind:for="contactDetail.id">{{contactDetail.label}}</label>
              <input
                class="form-control"
                type="text"
                v-bind:placeholder="contactDetail.label"
                v-bind:id="contactDetail.id"
                v-bind:v-model="'contactForm.'+contactDetail.id">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div v-if="showSuccess" class="alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Success!</strong> Your message has been sent.
          </div>
          <div v-if="showError" class="alert alert-danger alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Sorry</strong>, it seems that my mail server is not responding. Please try again later.
          </div>
          <div class="row">
            <div class="form-group col-xs-12">
              <button
                type="submit"
                class="btn btn-success btn-lg"
                v-on:click.prevent="onSubmit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>`,
  data: function () {
    return {
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      showSuccess: false,
      showError: false
    }
  },
  methods: {
    onSubmit: function (event) {
      var xhr = new XMLHttpRequest();
      var args = `name=${contactForm.name.value}&email=${contactForm.email.value}&phone=${contactForm.phone.value}&message=${contactForm.message.value}`
      var self = this;

      xhr.open('POST', 'http://localhost:4000/mail', true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      xhr.onready = function (aEvt) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          self.populateByAjax = JSON.parse(xhr.responseText);
          console.log(self.populateByAjax);
        }
      }
      xhr.send(args);
      this.showSuccess = true
    }
  }
})

let contactCtrl = new Vue({
  el: '#contact',
  data: {
    contactInfo: []
  },
  beforeCreate() {
    let self = this
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
      self.contactInfo = JSON.parse(xhr.responseText).contactForm
    }
    xhr.open('GET', PORTFOLIO_URL)
    xhr.send()
  }
})