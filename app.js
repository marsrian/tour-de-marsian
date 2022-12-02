// Pahar Vilash Button
const paharVilashBtn = document.getElementById("pahar");
paharVilashBtn.addEventListener('click', function(){
    const allSection = document.getElementById("all");
    allSection.style.display = "none";

    const paharDetails = document.getElementById("pahar-vilash");
    paharDetails.style.display = "block";
})

// Back btn
const backBtn = document.getElementById("back");
backBtn.addEventListener("click", function(){
    const paharDetails = document.getElementById("pahar-vilash");
    paharDetails.style.display = "none";

    const allSection = document.getElementById("all");
    allSection.style.display = "block";
})

//Mayabi Event handler 
const mayabiBtn = document.getElementById("mayabi");
mayabiBtn.addEventListener('click', function(){
    const allSection = document.getElementById("all");
    allSection.style.display = "none";

    const mayabiDetails = document.getElementById("mayabi-details");
    mayabiDetails.style.display = "block";
})

// Back btn
const backNowBtn = document.getElementById("backNow");
backNowBtn.addEventListener("click", function(){
    const mayabiDetails = document.getElementById("mayabi-details");
    mayabiDetails.style.display = "none";

    const allSection = document.getElementById("all");
    allSection.style.display = "block";
})
