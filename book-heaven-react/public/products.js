// Simple product list for demo
const PRODUCTS = [
  {id:'b1', title:'The Midnight Library', author:'Matt Haig', price:299, category:'fiction', img:'https://picsum.photos/seed/book1/600/800', desc:'A story about choices, regrets and second chances.'},
  {id:'b2', title:'The Alchemist', author:'Paulo Coelho', price:199, category:'fiction', img:'https://picsum.photos/seed/book2/600/800', desc:'A fable about following your dreams.'},
  {id:'b3', title:'Elements of Style', author:'William Strunk', price:349, category:'reference', img:'https://picsum.photos/seed/book3/600/800', desc:'Classic writing guide.'},
  {id:'b4', title:'Leaves of Grass', author:'Walt Whitman', price:249, category:'poetry', img:'https://picsum.photos/seed/book4/600/800', desc:'A landmark collection of American poetry.'},
  {id:'b5', title:'Sapiens', author:'Yuval Noah Harari', price:499, category:'nonfiction', img:'https://picsum.photos/seed/book5/600/800', desc:'A brief history of humankind.'},
  { id:'b6', title: "Becoming", author: "Michelle Obama", price: 699, category: "Biography", img: "https://picsum.photos/seed/book6/600/800", desc: "The deeply personal memoir of former First Lady Michelle Obama." },
  { id: '7', title: "Dune", author: "Frank Herbert", price: 549, category: "Sci-Fi", img: "https://picsum.photos/seed/book7/600/800", desc: "A science fiction epic set in a desert world of political intrigue, ecology, and destiny." },
  { id: '8', title: "To Kill a Mockingbird", author: "Harper Lee", price: 349, category: "Fiction", img: "https://picsum.photos/seed/book8/600/800", desc: "A story of racial injustice and childhood innocence set in the American South." },
  { id: '9', title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: 499, category: "Self-Help", img: "https://picsum.photos/seed/book9/600/800", desc: "A counterintuitive approach to living a good life by focusing on what truly matters." },
  { id: '10', title: "1984", author: "George Orwell", price: 299, category: "Fiction", img: "https://picsum.photos/seed/book10/600/800", desc: "A dystopian classic depicting a totalitarian society ruled by Big Brother." },
  { id: '11', title: "The Midnight Library", author: "Matt Haig", price: 459, category: "Fiction", img: "https://picsum.photos/seed/book11/600/800", desc: "A touching novel about regret, possibility, and the choices that make life meaningful." },
  { id: '12', title: "The Power of Now", author: "Eckhart Tolle", price: 399, category: "Spirituality", img: "https://picsum.photos/seed/book12/600/800", desc: "A guide to spiritual enlightenment and living fully in the present moment." },
  { id: '13', title: "The Hobbit", author: "J.R.R. Tolkien", price: 499, category: "Fantasy", img: "https://picsum.photos/seed/book13/600/800", desc: "A fantasy adventure that leads Bilbo Baggins from his quiet home to a dragonâ€™s lair." },
  { id: '14', title: "It Ends With Us", author: "Colleen Hoover", price: 399, category: "Romance", img: "https://picsum.photos/seed/book14/600/800", desc: "A moving story about love, resilience, and breaking cycles of abuse." },
  { id: '15', title: "Educated", author: "Tara Westover", price: 429, category: "Biography", img: "https://picsum.photos/seed/book15/600/800", desc: "A memoir of a woman who escapes her strict survivalist family to pursue education." },
  { id: '16', title: "Inferno", author: "Dan Brown", price: 499, category: "Thriller", img: "https://picsum.photos/seed/book16/600/800", desc: "A symbologist races to prevent a global catastrophe hidden within Danteâ€™s Inferno." },
  { id: '17', title: "The Fault in Our Stars", author: "John Green", price: 349, category: "Romance", img: "https://picsum.photos/seed/book17/600/800", desc: "A heart-wrenching story of young love and loss." },
  { id: '18', title: "The Martian", author: "Andy Weir", price: 499, category: "Sci-Fi", img: "https://picsum.photos/seed/book18/600/800", desc: "A gripping tale of survival on Mars with humor and science." },
  { id: '19', title: "The Girl on the Train", author: "Paula Hawkins", price: 379, category: "Mystery", img: "https://picsum.photos/seed/book19/600/800", desc: "A psychological thriller full of twists and unreliable narration." },
  { id: '20', title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", price: 399, category: "Finance", img: "https://picsum.photos/seed/book20/600/800", desc: "A bestselling book that challenges conventional ideas about money and wealth." },
  { id: '21', title: "The Catcher in the Rye", author: "J.D. Salinger", price: 299, category: "Fiction", img: "https://picsum.photos/seed/book21/600/800", desc: "A classic coming-of-age story capturing teenage rebellion and alienation." },
  { id: '22', title: "The Shining", author: "Stephen King", price: 449, category: "Horror", img: "https://picsum.photos/seed/book22/600/800", desc: "A terrifying tale of isolation and madness in a haunted hotel." },
  { id: '23', title: "The Art of War", author: "Sun Tzu", price: 299, category: "Philosophy", img: "https://picsum.photos/seed/book23/600/800", desc: "An ancient Chinese military treatise offering timeless strategies for conflict and competition." },
  { id: '24', title: "Gone Girl", author: "Gillian Flynn", price: 499, category: "Thriller", img: "https://picsum.photos/seed/book24/600/800", desc: "A gripping psychological thriller about marriage, deceit, and media manipulation." },
  { id: '25', title: "The Little Prince", author: "Antoine de Saint-Exupéry", price: 259, category: "Children", img: "https://picsum.photos/seed/book25/600/800", desc: "A poetic tale exploring love, loss, and human nature through the eyes of a young prince." }
];

  
