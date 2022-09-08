function qcmClick(currentId) {

    if (currentId == "correct-answer") 
    {
        document.getElementById("correct-text").style.display = "block";
        document.getElementById("incorrect-text").style.display = "none";
    } else 
    {
        
        document.getElementById("correct-text").style.display = "none";
        document.getElementById("incorrect-text").style.display = "block";
    }

}
