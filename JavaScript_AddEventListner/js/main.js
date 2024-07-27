const showText = document.getElementById("show-text");
showText.addEventListener("click",()=>{
    const inputText = document.getElementById("input-text");
    const heading1 = document.getElementById("heading1");
    let showInputText = inputText.value
    heading1.innerText = showInputText;
    document.getElementById("input-text").value = "";
});

const changeColor = document.getElementById("change-color");
changeColor.addEventListener("click",()=>{
    document.body.style.backgroundColor = "blue";
});


    const alertText = document.getElementById("alert-text");

    alertText.addEventListener("click",()=>{
        alert("hello world");
    });