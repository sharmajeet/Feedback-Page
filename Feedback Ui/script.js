const ratingEls = document.querySelectorAll(".rating")
let selectedRating = " ";
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innerText|| event.target.parentNode.innerText;

        console.log(event.target.innerText || event.target.parentNode.innerText);
        // first event is div for text and second one parent node is div for image both are now in event
        event.target.classList.add(".active");
        event.target.parentNode.classList.add(".active");
    });
    
});


btnEl.addEventListener("click",()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br><br>
        <strong>Feedback :<mark>${selectedRating}</mark></strong>
        <br><br>
        <p>We'll use your feedback to improve our customer support.</p>`;
        
    }
});
function removeActive(){
    ratingEls.forEach(ratingEls=>{
        ratingEls.classList.remove("active");
    });
}
