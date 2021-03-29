// VUE DEMO

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// VUE TEMPLATES

var prodPoster = new Vue ({
  el: "#prodPoster",
  data: {
    source: "../images/show-posters/21-03-babe.jpeg",
    altText: "Babe show poster"
  }
})

var prodName = new Vue ({
  el: "#prodName",
  data: {
    message: "Babe The Sheep Pig"
  }
})

var prodRole = new Vue ({
  el: "#prodRole",
  data: {
    role: "Sound No. 1",
    venue: "Bellairs Theatre",
    producer: "Guildford School of Acting"
  }
})

var prodCreatives = new Vue ({
  el: "#prodCreatives",
  data: {
    director: "Directed by Chloe France",
    sounddesigner: "Sound Design by Jon Higson"
  }
})

var prodDate = new Vue ({
  el: "#prodDate",
  data: {
    date: "March 2021"
  }
})

var prodWriters = new Vue ({
  el: "#prodWriters",
  data: {
    credits: "Written by David Wood\nAdapted from the book by Dick King-Smith\nMusical Direction by Ed Zanders"
  }
})

var prodDescLead = new Vue ({
  el: "#prodDescLead",
  data: {
    description: "Based on the best-selling children's book and the internationally successful film."
  }
})

var prodDescRest = new Vue ({
  el: "#prodDescRest",
  data: {
    paragraphs: [
      { text: "This stage adaptation of Babe, The Sheep Pig is a delight for all the family." },
      { text: "Character, movement and music interweave to create a timeless tale with themes of honesty, trust and acceptance."}
    ]
  }
})

var prodVideo = new Vue ({
  el: "#prodVideo",
  data: {
    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mRpWtyWktzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embedded-video"></iframe>'
  }
})

Vue.component("sticky", {
  props: ['quote', 'source', 'acw', 'cw'],
  template: '<figure class="sticky"><blockquote class="blockquote">{{quote.text}}</blockquote><figcaption class="blockquote-footer text-end">{{quote.source}}</figcaption></figure>'
})

Vue.component("sticky-b", {
  props: ['quote', 'source', 'acw', 'cw'],
  template: '<figure class="sticky sticky-b"><blockquote class="blockquote">{{quote.text}}</blockquote><figcaption class="blockquote-footer text-end">{{quote.source}}</figcaption></figure>'
})

var stickies = new Vue ({
  el: "#stickies",
  data: {
    quotes: [
      { id: 0, text: "Quote goes here", source: "The Source", acw: true, cw: false },
      { id: 1, text: "Second quote", source: "Source 2", acw: false, cw: true },
      { id: 2, text: "\"OMG a third quote?!\"", source: "Bristol24", acw: true}
    ]
  }
})

// Import whole block
Vue.component("production", {
  props: ['prodPoster', 'altText', 'prodName', 'prodRole', 'prodVenue', 'prodProducer', 'prodDirector', 'prodSoundDesigner', 'prodDate', 'prodWriters', 'prodDescLead', 'prodDescRest', 'prodVideo', 'prodQuotes'],
  template: `<div id="Hello" class="container-fluid px-4 mt-3 show-info">
  <div class="row gx-5 align-items-center position-relative">
    <div class="col-md-3 gy-4">
      <figure class="figure">
          <img v-bind:src="prodPoster" v-bind:alt="altText" class="figure-img img-fluid rounded shadow" id="prodPoster">
      </figure>
    </div>
    <div class="col-sm gy-3">
      <p class="show-info-name" id="prodName">{{prodName}}</p>
      <p class="show-info-role" id="prodRole"><strong>{{prodRole}}</strong> | {{prodVenue}}<br>{{prodProducer}}</p>
      <p class="show-info-creatives" id="prodCreatives">Directed by {{prodDirector}}<br>Sound Design by {{prodSoundDesigner}}</p>
      <p class="show-info-readmore">
        <a data-bs-toggle="collapse" href="#desc-show" role="button" aria-expanded="false" aria-controls="desc-show" class="stretched-link">
          Read more...
        </a>
      </p>
    </div>
    <div class="col-sm-2">
      <p class="show-info-date" id="prodDate">{{prodDate}}</p>
    </div>
  </div>
  <div class="collapse show" id="desc-">
    <div class="row justify-content-center pt-3">
      <div class="col-md-3"></div>
      <div class="col-md-6 mb-2 show-info-desc" id="prodDescRest">
        <p class="show-info-creatives" id="prodWriters" style="white-space: pre;">{{prodWriters}}</p>
        <p class="lead" id="prodDescLead">{{prodDescLead}}</p>
        <p v-for="line in prodDescRest"> {{line.text}}</p>
      </div>
      <div class="col-md-3 mb-2 show-info-sidebar" id="stickies">
        <div class="ratio ratio-16x9" id="prodVideo" v-html="prodVideo"></div>
        <sticky
          v-for="item in prodQuotes"
          :quote="item"
          :source="item.source"
          :key="item.id"
          :acw="item.acw"
          :class="{ 'sticky-a': item.acw, 'sticky-b': item.cw }"
        ></sticky>
      </div>
    </div>
  </div>
</div>`
})

const prods = [
  { id: 0,
    prodPoster: "../images/show-posters/20-02-piratequeen.jpeg",
    altText: "Pirate Queen show poster",
    prodName: "The Pirate Queen",
    prodRole: "Sound No. 1",
    prodVenue: "The London Coliseum",
    prodProducer: "",
    prodDirector: "Drew Baker",
    prodSoundDesigner: "Olly Steel",
    prodDate: "February 2020",
    prodWriters: "Music by Claude-Michel Schonberg\nLyrics by Alain Boublil & Richard Maltby Jr.\nBook by Claude-Michel Schonberg & Alain Boublil",
    prodDescLead: "Based on the story of Grace O’Malley, the personification of Ireland, The Pirate Queen is an epic tale of love, honour, and piracy in Renaissance Ireland.",
    prodDescRest: [ 
      { text: "In a time when women were expected to learn skills to make a good wife in the homestead, Grace defies her father and earns the title ‘The Pirate Queen’, inspiring men and women alike to follow her. When the English begin to attack and subjugate Ireland, only Grace has the strength and intelligence to negotiate peace with the powerful Queen Elizabeth I." },
      { text: "With a score by Claude-Michel Schönberg and Alain Boublil, steeped in Irish traditions and powerful ballads, The Pirate Queen is both timeless history and epic romance for the stage." },
      { text: "Starring Rachel Tucker (Olivier Nominee, Elphaba in Wicked – Broadway & West End, Come From Away), Jai McDowall (Britain’s Got Talent winner) & Matt Pagan (Collabro)." },
      { text: "A charity concert production with proceeds to Leukaemia UK." } ],
    prodVideo: "",
    prodQuotes: [
      { text: "This is the quote text 1",
      source: "Source 1", acw: true },
      { text: "This is quote 2", 
      source: "Source 2", cw: true },
    ]
  },
  { id: 1,
    prodPoster: "../images/show-posters/20-01-jpgffs.jpeg",
    altText: "Fashion Freak Show show poster",
    prodName: "Jean Paul Gaultier's Fashion Freak Show",
    prodRole: "Sound No. 2",
    prodVenue: "International Tour",
    prodProducer: "",
    prodDirector: "Jean Paul Gaultier",
    prodSoundDesigner: "",
    prodDate: "Jan - Feb 2020",
    prodWriters: "",
    prodDescLead: "Based on the story of Grace O’Malley, the personification of Ireland, The Pirate Queen is an epic tale of love, honour, and piracy in Renaissance Ireland.",
    prodDescRest: [ 
      { text: "In a time when women were expected to learn skills to make a good wife in the homestead, Grace defies her father and earns the title ‘The Pirate Queen’, inspiring men and women alike to follow her. When the English begin to attack and subjugate Ireland, only Grace has the strength and intelligence to negotiate peace with the powerful Queen Elizabeth I." },
      { text: "With a score by Claude-Michel Schönberg and Alain Boublil, steeped in Irish traditions and powerful ballads, The Pirate Queen is both timeless history and epic romance for the stage." },
      { text: "Starring Rachel Tucker (Olivier Nominee, Elphaba in Wicked – Broadway & West End, Come From Away), Jai McDowall (Britain’s Got Talent winner) & Matt Pagan (Collabro)." },
      { text: "A charity concert production with proceeds to Leukaemia UK." } ],
    prodVideo: "",
    prodQuotes: [
      { text: "This is the quote text 3",
      source: "Source 3", acw: true },
      { text: "This is quote 4", 
      source: "Source 4", cw: true },
    ]
  }
]

var production = new Vue ({
  el: "#allshows",
  data: {
    shows: prods
  },
  methods: {
    getProductionByIndex({ prods = [], index=0 }) {
      return prods[index] || {}
    }
  },
  computed: {
    thisId: function() {
      return this.shows.filter(function() {
        return show.id === 0
      })
    }
  }
})

Vue.component("test", {
  props: [],
  template: '<a href="#"><slot></slot></a>'
})

var test = new Vue ({
  el: "test"
})

$(function(){
  window.onload, function(){
      var id = 1;
      var qty = $(this).val();
      $(this).parent().siblings(":last").find('production').attr('v-for', function(){
          return "show in shows.slice("+id+","+(id+1)+")";
      });
  };
});