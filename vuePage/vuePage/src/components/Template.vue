<template>

<!--Template new production-->
<div id="theProduction" class="container-fluid px-4 mt-3 show-info">
  <div class="row gx-5 align-items-center position-relative">
    <div class="col-md-3 gy-4">
      <figure class="figure">
          <img v-bind:src="source" v-bind:alt="altText" class="figure-img img-fluid rounded shadow" id="prodPoster">
      </figure>
    </div>
    <div class="col-sm gy-3">
      <p class="show-info-name" id="prodName">{{message}}</p>
      <p class="show-info-role" id="prodRole"><strong>{{role}}</strong> | {{venue}}<br>{{producer}}</p>
      <p class="show-info-creatives" id="prodCreatives">{{director}}<br>{{sounddesigner}}</p>
      <p class="show-info-readmore">
        <a data-bs-toggle="collapse" href="#productionDesc" role="button" aria-expanded="false" aria-controls="productionDesc" class="stretched-link">
          Read more...
        </a>
      </p>
    </div>
    <div class="col-sm-2">
      <p class="show-info-date" id="prodDate">{{date}}</p>
    </div>
  </div>
  <div class="collapse" id="productionDesc" data-bs-parent="#all-projects">
    <div class="row justify-content-center pt-3">
      <div class="col-md-3"></div>
      <div class="col-md-6 mb-2 show-info-desc" id="prodDescRest">
        <p class="show-info-creatives" id="prodWriters" style="white-space: pre;">{{credits}}</p>
        <p class="lead" id="prodDescLead">{{description}}</p>
        <p v-for="line in paragraphs"> {{line.text}}</p>
      </div>
      <div class="col-md-3 mb-2 show-info-sidebar" id="stickies">
        <div class="ratio ratio-16x9" id="prodVideo" v-html="iframe"></div>
        <sticky
          v-for="item in quotes"
          :quote="item"
          :source="item.source"
          :key="item.id"
          :acw="item.acw"
          :class="{ 'sticky-a': item.acw, 'sticky-b': item.cw }"
        ></sticky>
      </div>
    </div>
  </div>
</div>

</template>

<script>

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
      { id: 1, text: "Second quote", source: "Source 2", acw: false, cw: true }
    ]
  }
})

</script>
