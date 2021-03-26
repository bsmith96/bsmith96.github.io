// USER DEFINED VARIABLES

/*var prodName = "In The Willows";
var prodMonth = "02";
var prodYear = "2019";
var prodDateString = "Feb - Jun 2019"
var myRole = "Sound No. 1";
var prodPoster = "1902inthewillows.jpeg";
var prodVenue = "UK Tour";
var prodProducer = "Metta Theatre";
var prodDirector = "P Burton-Morgan";
var prodSoundDesigner = "Andy Graham";
var prodWritingCredits = "Book and Lyrics by P Burton Morgan<br>Music by Pippa Cleary<br>Music and Lyrics by Keiran Merrick";
var prodDescription = "Description goes here";
var prodVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mRpWtyWktzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
var prodQuotes = ["Quote 1", "Quote 2"];
var prodSources = ["Source 1", "Source 2"];

// CALCULATED VARIABLES

var sectionComment = "<!--" + prodName + " - " + prodYear + "-->";
console.log(sectionComment);
var sectionId = yearTo2(prodYear) + prodMonth + removeSpaceAndLowercase(prodName);
console.log(sectionId);
var posterAltText = prodName + " show poster";
console.log(posterAltText);
var directorCredit = "Directed by " + prodDirector;
console.log(directorCredit);
var soundDesignerCredit = "Sound Design by " + prodSoundDesigner;
console.log(soundDesignerCredit);
var collapseId = removeSpaceVarCase(prodName) + "Desc";
console.log(collapseId);
var descriptionArray = prodDescription.split("\n");
console.log(descriptionArray);
var restOfDescriptionArray = descriptionArray.shift();
console.log(restOfDescriptionArray);
var videoIframeSplit = prodVideo.split(">");
console.log(videoIframeSplit);
var videoIframe = videoIframeSplit[0] + " class=\"embedded-video\">" + videoIframeSplit[1] + ">";
console.log(videoIframe);
var quoteBlocks = getQuotes(prodQuotes, prodSources);
console.log(quoteBlocks);

// GENERATED HTML BLOCK

var htmlBlock = sectionComment;
htmlBlock = htmlBlock + "<div id=\"" + sectionId + "\" class=\"container-fluid px-4 mt-3 show-info\">\n<div class=\"row gx-5 align-items-center position-relative\">\n<div class=\"col-md-3 gy-4\">\n<figure class=\"figure\">\n<img src=\"./images/show-posters/" + prodPoster + " class=\"figure-img img-fluid rounded shadow\" alt=\"" + posterAltText + "\">\n</figure>\n</div>\n<div class=\"col-sm gy-3\">\n<p class=\"show-info-name\">" + prodName + "</p>\n<p class=\"show-info-role\"><strong>" + myRole + "</strong> | " + prodVenue + "</p>\n<p class=\"show-info-creatives\">" + directorCredit + "<br>" + soundDesignerCredit + "</p>\n<p class=\"show-info-readmore\">\n<a data-bs-toggle=\"collapse\" href=\"#" + collapseId + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"" + collapseId + "\" class=\"stretched-link\">\nRead more...\n</a>\n</p>\n</div>\n<div class=\"col-sm-2\">\n<p class=\"show-info-date\">" + prodDateString + "</p>\n</div>\n</div>\n<div class=\"collapse\" id=\"" + collapseId + "\" data-bs-parent=\"#all-projects\">\n<div class=\"row justify-content-center pt-3\">\n<div class=\"col-md-3\"></div>\n<div class=\"col-md-6 mb-2 show-info-desc\">\n<p class=\"show-info-creatives\">" + prodWritingCredits + "</p>\n<p class=\"lead\">" + descriptionArray[0] + "</p>\n<p>" + restOfDescriptionArray + "</p>\n</div>\n<div class=\"col-md-3 mb-2 show-info-sidebar\">";

//document.getElementById("test").innerHTML = htmlBlock;

if (prodVideo != "") {
  htmlBlock = htmlBlock + "\n<div class=\"ratio ratio-16x9 mt-5 mb-2\">\n" + videoIframe + "\n</div>"
}

if (prodQuotes != []) {
  htmlBlock = htmlBlock + quoteBlocks + "\n</div>\n</div>\n</div>\n</div>";
}

document.getElementById("test").innerHTML = htmlBlock;*/

window.onload = function() {
  document.getElementById("prodForm").onsubmit = function() {
    var prodName = document.getElementById("prodName").value;
    var prodMonth = document.getElementById("prodMonth").value;
    var prodYear = document.getElementById("prodYear").value;
    var prodDateString = document.getElementById("prodDateString").value;
    var myRole = document.getElementById("myRole").value;
    var prodVenue = document.getElementById("prodVenue").value;
    var prodPoster = document.getElementById("prodPoster").value;
    var prodProducer = document.getElementById("prodProducer").value;
    var prodDirector = document.getElementById("prodDirector").value;
    var prodSoundDesigner = document.getElementById("prodSoundDesigner").value;
    var prodWritingCredits = document.getElementById("prodWritingCredits").value;
    var prodDescription = document.getElementById("prodDescription").value;
    var prodVideo = document.getElementById("prodVideo").value;
    var prodQuote1 = document.getElementById("prodQuote1").value;
    var prodSource1 = document.getElementById("prodSource1").value;
    var prodQuoteTilt1 = document.getElementById("sticky-rotation-1").value;
    var prodQuote2 = document.getElementById("prodQuote2").value;
    var prodSource2 = document.getElementById("prodSource2").value;
    var prodQuoteTilt2 = document.getElementById("sticky-rotation-2").value;


    // CALCULATED VARIABLES

    var sectionComment = "<!--" + prodName + " - " + prodYear + "-->";
    console.log(sectionComment);
    var sectionId = yearTo2(prodYear) + prodMonth + removeSpaceAndLowercase(prodName);
    console.log(sectionId);
    var posterAltText = prodName + " show poster";
    console.log(posterAltText);
    if (prodProducer != "") {
      var prodProducer = "<br>" + prodProducer;
    }
    var directorCredit = "Directed by " + prodDirector;
    console.log(directorCredit);
    var soundDesignerCredit = "Sound Design by " + prodSoundDesigner;
    console.log(soundDesignerCredit);
    var collapseId = removeSpaceVarCase(prodName) + "Desc";
    console.log(collapseId);
    var writingArray = prodWritingCredits.split("\n");
    console.log(writingArray);
    var writingCreditsFormatted = writingArray.join("<br>");
    console.log(writingCreditsFormatted);
    var descriptionArray = prodDescription.split("\n");
    console.log(descriptionArray);
    var firstDescription = descriptionArray[0];
    console.log(firstDescription);
    descriptionArray.shift();
    console.log(descriptionArray);
    var videoIframeSplit = prodVideo.split(">");
    console.log(videoIframeSplit);
    var videoIframe = videoIframeSplit[0] + " class=\"embedded-video\">" + videoIframeSplit[1] + ">";
    console.log(videoIframe);
    var prodQuotes = [];
    prodQuotes.push(prodQuote1);
    prodQuotes.push(prodQuote2);
    var prodSources = [];
    prodSources.push(prodSource1);
    prodSources.push(prodSource2);
    var prodQuoteTilts = [];
    prodQuoteTilts.push(prodQuoteTilt1);
    prodQuoteTilts.push(prodQuoteTilt2);
    console.log(prodQuoteTilts);
    var quoteBlocks = getQuotes(prodQuotes, prodSources, prodQuoteTilts);
    console.log(quoteBlocks);

    // GENERATED HTML BLOCK

    var htmlBlock = sectionComment;
    htmlBlock = htmlBlock + "\n    <div id=\"" + sectionId + "\" class=\"container-fluid px-4 mt-3 show-info\">\n      <div class=\"row gx-5 align-items-center position-relative\">\n        <div class=\"col-md-3 gy-4\">\n          <figure class=\"figure\">\n            <img src=\"./images/show-posters/" + prodPoster + "\" class=\"figure-img img-fluid rounded shadow\" alt=\"" + posterAltText + "\">\n          </figure>\n        </div>\n        <div class=\"col-sm gy-3\">\n          <p class=\"show-info-name\">" + prodName + "</p>\n          <p class=\"show-info-role\"><strong>" + myRole + "</strong> | " + prodVenue + prodProducer + "</p>\n          <p class=\"show-info-creatives\">" + directorCredit + "<br>" + soundDesignerCredit + "</p>\n          <p class=\"show-info-readmore\">\n            <a data-bs-toggle=\"collapse\" href=\"#" + collapseId + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"" + collapseId + "\" class=\"stretched-link\">\n              Read more...\n            </a>\n          </p>\n        </div>\n        <div class=\"col-sm-2\">\n          <p class=\"show-info-date\">" + prodDateString + "</p>\n        </div>\n      </div>\n      <div class=\"collapse\" id=\"" + collapseId + "\" data-bs-parent=\"#all-projects\">\n        <div class=\"row justify-content-center pt-3\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6 mb-2 show-info-desc\">\n            <p class=\"show-info-creatives\">" + writingCreditsFormatted + "</p>\n            <p class=\"lead\">" + firstDescription + "</p>\n            <p>" + descriptionArray.join("</p>\n            <p>") + "</p>\n          </div>\n          <div class=\"col-md-3 mb-2 show-info-sidebar\">";

    //document.getElementById("test").innerHTML = htmlBlock;

    if (prodVideo != "") {
      htmlBlock = htmlBlock + "\n            <div class=\"ratio ratio-16x9 mt-5 mb-2\">\n            " + videoIframe + "\n          </div>"
    }

    if (prodQuotes != [""]) {
      htmlBlock = htmlBlock + "\n            " + quoteBlocks;
    }

    htmlBlock = htmlBlock + "\n          </div>\n        </div>\n      </div>\n    </div>";

    document.getElementById("output").value = htmlBlock;
    document.getElementById("outputVisual").innerHTML = htmlBlock;
    event.preventDefault();
  };
};

// Copy HTML
document.getElementById("copyhtml").onclick = function(){
  document.getElementById("output").select();
  document.execCommand('copy');
}


/*
          <figure class=\"sticky sticky-a\">
            <blockquote class=\"blockquote\">\"Quote One\"</blockquote>
            <figcaption class=\"blockquote-footer text-end\">
              <cite title=\"The Source\">The Source</cite>
            </figcaption>
          </figure>
          <figure class=\"sticky sticky-b\">
            <blockquote class=\"blockquote\">\"Quote Two\"</blockquote>
            <figcaption class=\"blockquote-footer text-end\">
              <cite title=\"Another Source\">Another Source</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>"*/

//// FUNCTIONS

function yearTo2(year) {
  var lastChar = year.slice(-2);
  var lastDigit = +(lastChar);
  return lastDigit;
}

function removeSpaceAndLowercase(string) {
  string = string.split(" ").join("");
  string = string.toLowerCase();
  return string;
}

function removeSpaceVarCase(string) {
  string = string.split(" ").join("");
  string = string.substring(0, 1).toLowerCase() + string.substring(1);
  return string;
}

function getMonthName(month) {
  const monthInt = parseInt(month, 10);
  const date = new Date(2009, monthInt, 10);
  const monthLong = date.toLocaleString('default', {
    month: 'long'
  });
  return monthLong;
}

function getQuotes(quotes, sources, tilts) {
  var quoteBlocksArray = [];
  for (var i in quotes) {
    var quote = quotes[i];
    var source = sources[i];
    var tilt = tilts[i];

    if(tilt == "ACW") {
      tilt = "sticky-a";
    } else if(tilt == "CW") {
      tilt = "sticky-b";
    }

    if(quote != "" && source != "") {
      var quoteBlock = "<figure class=\"sticky " + tilt + "\">\n              <blockquote class=\"blockquote\">" + quote + "</blockquote>\n              <figcaption class=\"blockquote-footer text-end\">\n                <cite title=\"" + source + "\">" + source + "</cite>\n              </figcaption>\n            </figure>";
    } else if(quote != "" && source == "") {
      var quoteBlock = "<figure class=\"sticky " + tilt + "\">\n              <blockquote class=\"blockquote\">" + quote + "</blockquote>\n              </figure>";
    } else if(quote == "") {
      var quoteBlock = "";
    }
    quoteBlocksArray.push(quoteBlock);
    
  }
  quoteBlocks = quoteBlocksArray.join("");
  return quoteBlocks;
}

function formSubmitTest() {
  var testVar = document.getElementById("prodName").value;
  console.log("TestVar: " + testVar);
}

function formSubmit() {
  var prodName = document.getElementById("prodName")[0].value;
  var prodMonth = document.getElementById("prodMonth")[0].value;
  var prodYear = "2019";
  var prodDateString = "Feb - Jun 2019"
  var myRole = "Sound No. 1";
  var prodPoster = "1902inthewillows.jpeg";
  var prodVenue = "UK Tour";
  var prodProducer = "Metta Theatre";
  var prodDirector = "P Burton-Morgan";
  var prodSoundDesigner = "Andy Graham";
  var prodWritingCredits = "Book and Lyrics by P Burton Morgan<br>Music by Pippa Cleary<br>Music and Lyrics by Keiran Merrick";
  var prodDescription = "Description goes here";
  var prodVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mRpWtyWktzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  var prodQuotes = ["Quote 1", "Quote 2"];
  var prodSources = ["Source 1", "Source 2"];
}

