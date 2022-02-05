const quotes = [
  {
    quote: "The Spartans do not ask how many enemies but where they are.",
    author: "Agis II of Sparta",
  },
  {
    quote: "Come home with this shield, or upon it.",
    author: "A Spartan mother equips her son",
  },
  {
    quote: "To brave men, the prizes that war offers are liberty and fame",
    author: "Lycurgus of Sparta",
  },
  {
    quote:
      "It is the noblest and safest thing for a great army to be visibly animated by one spirit",
    author: "Archidamus of Sparta",
  },
  {
    quote: "In war important events result from trivial causes",
    author: "Gaius Julius Caesar",
  },
  {
    quote: "A dead enemy always smells good.",
    author: "Aulus Vitellius",
  },
  {
    quote: "He conquers who endures.",
    author: "Persius",
  },
  {
    quote: "In the moment of action remember the value of silence and order.",
    author: "Phormio of Athens",
  },
  {
    quote: "If a man does not strike first, he will be first struck.",
    author: "Athenogoras of Syracuse",
  },
  {
    quote: "Learn to obey before you command.",
    author: "Solon of Athens",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
