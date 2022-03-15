let content = document.querySelector(".js-generated.content");

//Create h1
let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

//Create dogContent div
let dogContent = document.createElement("div");
dogContent.setAttribute("class", "dog-content");

//Create image
let dogImage = document.createElement("img");
dogImage.setAttribute("class", "dog-image");
dogImage.setAttribute("src", "./assets/rizzo.jpg");

//Create dogDetails div
let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");

//Create h3
let description = document.createElement("h3");
description.append("Description:");

//Create paragraph
let descriptionP = document.createElement("p");
descriptionP.append(
  "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
);

//Feeding time stuff
let feedHeader = document.createElement("h3");
feedHeader.append("Feeding times:");

let feedList = document.createElement("ul");

let feed1 = document.createElement("li");
feed1.append("9:00 am");

let feed2 = document.createElement("li");
feed2.append("12:00 pm");

let feed3 = document.createElement("li");
feed3.append("5:00 pm");

feedList.append(feed1, feed2, feed3);

//Format dogdetails
dogDetails.append(description, descriptionP, feedHeader, feedList);

//Format content
dogContent.append(dogImage, dogDetails);

content.append(header, dogContent);
