const rating = document.querySelectorAll("ul > li");
const valueRating = document.querySelectorAll("ul > li > p");
const button = document.querySelector("button");
const mainContent = document.querySelector("main");

let Star;
for(let i=0; i<rating.length; i++){
    rating[i].addEventListener("click", function(){
        for(var j=0; j<rating.length; j++){
            if(rating[j].classList.contains("clicked") && valueRating[j].classList.contains("fontClicked")){
                rating[j].classList.remove("clicked");
                valueRating[j].classList.remove("fontClicked");
            }
        }
        rating[i].classList.add("clicked");
        valueRating[i].classList.add("fontClicked");
        Star = i;
    })
}

button.addEventListener("click", function(){
    if(Star === undefined){
        button.disabled = false;
    }
    else{
        mainContent.innerHTML = `
        <div class="say-thanks">
            <img src="images/illustration-thank-you.svg" alt="thx">
            <div class="notif">
                <p>You selected ${Star + 1} out of 5</p>
            </div>
            <h1>Thank You!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!
            </p>
        </div>
        `
    }
})
