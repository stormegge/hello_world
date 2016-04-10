console.log("hello world");
var element=document.getElementById("images");
var url='https://api.spotify.com/v1/search?q=pomle&type=album';
var xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.addEventListener("load", responseHandler);
xhr.send();

function responseHandler() {
	var result=JSON.parse(xhr.responseText);
	console.log(result);
	displayResult(result);
}

function displayResult(result){
	var items=result.albums.items;
	items.forEach(itemIterator);
};

function itemIterator(item) {
//	console.log(item);
	var image=item.images[0];
	console.log(image);
	var imageElement=document.createElement("img");
	imageElement.src=image.url;
	element.appendChild(imageElement);
}