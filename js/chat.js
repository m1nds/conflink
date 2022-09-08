function chatClick() {

    const currentDiv = document.getElementById("chat");
    currentInput = document.getElementById("input").value;
    
    const newA = document.createElement("a");
    newA.style.backgroundColor = "green";
    newA.style.borderRadius = "5px"; 
    newA.innerHTML = currentInput;

    currentDiv.append(newA);
}
