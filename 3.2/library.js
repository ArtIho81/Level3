class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.img = `./books-page_files/${this.id}.jpg`;
    this.viewsCounter = 0
  }
}

const booksLibrary = [
  new Book(22, "СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА", "Андрей Богуславский"),
  new Book(23, "Программирование на языке Go!", "Марк Саммерфильд"),
  new Book(
    25,
    "Толковый словарь сетевых терминов и аббревиатур",
    "М., Вильямс"
  ),
  new Book(26, "Python for Data Analysis", "Уэс Маккинни"),
  new Book(27, "Thinking in Java (4th Edition)", "Брюс Эккель"),
  new Book(
    29,
    "Introduction to Algorithms",
    "Томас Кормен, Чарльз Лейзерсон, Рональд Ривест, Клиффорд Штайн"
  ),
  new Book(31, "JavaScript Pocket Reference", "Дэвид Флэнаган"),
  new Book(
    32,
    "Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles",
    "Гэри Маклин Холл"
  ),
  new Book(33, "SQL: The Complete Referenc", "Джеймс Р. Грофф"),
  new Book(34, "PHP and MySQL Web Development", "Люк Веллинг"),
  new Book(
    35,
    "Статистический анализ и визуализация данных с помощью R",
    "Сергей Мастицкий"
  ),
  new Book(36, "Computer Coding for Kid", "Джон Вудкок"),
  new Book(
    37,
    "Exploring Arduino: Tools and Techniques for Engineering Wizardry",
    "Джереми Блум"
  ),
];

module.exports = booksLibrary