// const ulTag = document.getElementById("ul-tag");

// let liTag = document.createElement("li");
// liTag.innerHTML = `First`;

// ulTag.insertBefore(liTag, ulTag.firstChild );


const menuList = document.getElementById("menu-list");
const list = ['Home',"About","Terms","Profile","link"]

const makeData = list.map((item)=>{
    const liTag = document.createElement("li");
    liTag.textContent = item;
    return liTag;
});

menuList.append(...makeData);