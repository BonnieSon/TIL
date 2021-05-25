(function(){
  const quotes = [
    {
      quote:
      "The price of anything is the amount of life you exchange for it.",
      author:
      "David Thoreau"
    },
    {
      quote:
      "God save me from my friends. I can protect myself from my enemies.",
      author:
      "Claude Louis Hector De Villars"
    },
    {
      quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author:
      "Life"
    },
    {
      quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author:
      "Tyne Daly"
    }
  ];

  const button = document.querySelector("button");
  const quote = document.querySelector("#quote");
  const author = document.querySelector(".author");

  button.onclick = function(){
    
      let index = Math.floor(Math.random()*quotes.length)
      quote.textContent = quotes[index].quote;
      author.textContent = quotes[index].author;
  }
})();