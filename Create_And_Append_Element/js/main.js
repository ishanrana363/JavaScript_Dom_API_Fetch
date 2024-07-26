const bodyTag = document.getElementById("body");

// let divTag = document.createElement("div");





// let h1Tag = document.createElement("h1");
// h1Tag.innerHTML = "This is heading 1 tag";

// let pTag = document.createElement("p");
// pTag.innerHTML = "This is paragraph tag";

// let ulTag = document.createElement("ul");

// let liTag = document.createElement("li");
// let liTag1 = document.createElement("li");
// let liTag2 = document.createElement("li");
// let liTag3 = document.createElement("li");

// liTag.innerHTML = "link1";
// liTag1.innerHTML = "link2";
// liTag2.innerHTML = "link3"
// liTag3.innerHTML = "link4";





// divTag.appendChild(h1Tag);
// divTag.appendChild(pTag);
// divTag.appendChild(ulTag);
// ulTag.appendChild(liTag);
// ulTag.appendChild(liTag1);
// ulTag.appendChild(liTag2);
// ulTag.appendChild(liTag3);

let divTag = document.createElement("div");
divTag.style.backgroundColor = "gray";
divTag.style.padding = "50px";
divTag.style.borderRadius = "50%";
divTag.style.width = "700px";
divTag.style.height = "700px";
divTag.style.textAlign = "center";


divTag.innerHTML = `
    <h1>Programmer</h1>
    <p>lorem span </p>
    <ul style = " background-color : red " >
        <li style = " list-style-type : none " >link1</li>
        <li style = " list-style-type : none " >link2</li>
        <li style = " list-style-type : none " >link3</li>
        <li style = " list-style-type : none " >link4</li>
    </ul>
`



bodyTag.appendChild(divTag);