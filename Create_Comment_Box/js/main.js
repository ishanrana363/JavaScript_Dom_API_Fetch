const btn1 = document.getElementById("add-comment");

btn1.addEventListener("click", () => {
  const divTag = document.getElementById("getDiv");
  const textArea = document.getElementById("text-area").value;

  // Create a new list item element
  const paraTag = document.createElement("li");

  // Set the text content of the list item
  paraTag.textContent = textArea;

  // Append the list item to the div
  divTag.appendChild(paraTag);
document.getElementById("text-area").value = ""

});