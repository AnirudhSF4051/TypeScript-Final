"use strict";
exports.__esModule = true;
var image = document.getElementById("image");
var content = document.getElementById("content");
var Image = /** @class */ (function () {
    function Image(Url, Caption) {
        this.caption = Caption;
        this.url = Url;
    }
    return Image;
}());
var image1 = new Image('image1.jpg', 'Waterfalls');
var image2 = new Image('image2.jpg', 'Autumn');
var image3 = new Image('image3.jpg', 'Cat');
var image4 = new Image('image4.jpg', 'Bali');
var image5 = new Image('image5.jpg', 'Rhino');
var image6 = new Image('image6.jpg', 'River');
var image7 = new Image('image7.jpg', 'Agriculture');
var imageArray = [];
imageArray[0] = image1;
imageArray[1] = image2;
imageArray[2] = image3;
imageArray[3] = image4;
imageArray[4] = image5;
imageArray[5] = image6;
imageArray[6] = image7;
var start = 0;
function next() {
    start++;
    if (start > imageArray.length - 1) {
        start = 0;
    }
    image.src = imageArray[start].url;
    content.innerHTML = imageArray[start].caption;
}
function previous() {
    start--;
    if (start < 0) {
        start = imageArray.length - 1;
    }
    image.src = imageArray[start].url;
    content.innerHTML = imageArray[start].caption;
}
