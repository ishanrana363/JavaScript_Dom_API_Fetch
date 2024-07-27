const ulTag = document.getElementById("ul-tag");

let liTag = document.createElement("li");
liTag.innerHTML = `First`;

ulTag.insertBefore(liTag, ulTag.firstChild );