//your JS code here. If required.
const dropDown = document.getElementById("colorSelect")
const button = document.getElementById("button");
button.addEventListener("click", () => {
    const selectedOption = dropDown.options[dropDown.selectedIndex]
    dropDown.removeChild(selectedOption);
})