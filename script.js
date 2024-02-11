//Quotes list
const QuotesList = [
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "text": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
      "text": "Be the chief but never the lord.",
      "author": "Lao Tzu"
    },
    {
      "text": "Nothing happens unless first we dream.",
      "author": "Carl Sandburg"
    },
    {
      "text": "Well begun is half done.",
      "author": "Aristotle"
    },
    {
      "text": "Life is a learning experience, only if you learn.",
      "author": "Yogi Berra"
    },
    {
      "text": "Self-complacency is fatal to progress.",
      "author": "Margaret Sangster"
    },
    {
      "text": "Peace comes from within. Do not seek it without.",
      "author": "Buddha"
    },
    {
      "text": "What you give is what you get.",
      "author": "Byron Pulsifer"
    },
    {
      "text": "We can only learn to love by loving.",
      "author": "Iris Murdoch"
    },
    {
      "text": "Life is change. Growth is optional. Choose wisely.",
      "author": "Karen Clark"
    },
    {
      "text": "You'll see it when you believe it.",
      "author": "Wayne Dyer"
    },
    {
      "text": "Today is the tomorrow we worried about yesterday.",
      "author":  "Someone"
    }
  ];
// drop animation setup
const container = document.querySelector(".container");

function dropped(){

    const drop = document.createElement("span");
    drop.classList.add("drop");

    drop.style.top = Math.random() * innerHeight + "px";
    drop.style.left = Math.random() * innerWidth + "px";

    setTimeout(()=>{
        drop.remove();
    },6500);

    container.appendChild(drop)


}

setInterval(dropped,500);


// select quote 
const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",()=>{
    let quoteIndex = Math.floor(Math.random()*QuotesList.length);
    document.getElementById("quote-text").textContent = QuotesList[quoteIndex].text;
    document.getElementById("quote-author").textContent = QuotesList[quoteIndex].author;
})