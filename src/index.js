const { books } = require('../data/library');

// // Requisito 1
const fantasyOrScienceFiction = (book) => book.filter((elemento) => elemento.genre === 'Fantasia'
|| elemento.genre === 'Ficção Científica');
// console.log(fantasyOrScienceFiction(books));
// Requisito 2
const oldBooksOrdered = (year) => books.filter((elemento) => elemento.releaseYear < year)
  .sort((elementA, elementB) => elementA - elementB);
// console.log(oldBooksOrdered(1963));
// Requisito 3
const booksByAuthorBirthYear = (birthYear) => books.filter((elemento) => elemento.author
  .birthYear === birthYear).map((objeto) => objeto.name);
// console.log(booksByAuthorBirthYear(1947));
// Requisito 4
const fantasyOrScienceFictionAuthors = (booka) => booka
  .filter((objeto) => objeto.genre === 'Fantasia' || objeto.genre === 'Ficção Científica')
  .map((obje) => obje.name).sort();
// console.log(fantasyOrScienceFiction(books));
// Requisito 5
const oldBooks = (year) => books.filter((elemento) => elemento.releaseYear < year)
  .map((ob) => ob.name).sort();
// console.log(oldBooks(1963));

// Requisito 6
const authorWith3DotsOnName = (ter) => books.find((objj) => objj.author.name
  .toLowerCase().includes(ter.toLowerCase())).name;
// console.log(authorWith3DotsOnName('j. r. r'));
module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
