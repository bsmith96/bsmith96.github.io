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

<script></script>
<style></style>