
let adminPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        th, td {
            border: 1px;
            border-color: black;
            border-style: solid;
        }
    </style>
    <title>Library Admin</title>
</head>
<body>
    <h1>Библиотека</h1>
        <table style="border: 1px; border-color: black; border-style: solid;">
      <thead>
        <tr>
          <th>Название книги</th>
          <th>Авторы</th>
          <th>Год издания</th>
          <th>Просмотры</th>
        </tr>
      </thead>
      <tbody>
    %tr%
      </tbody>
    </table><br>

    <button id="add">Добавить книгу в библиотеку</button><br>
    <form action="" method="post" style="border:2px;
    border-radius: 10px; border-color:blue; border-style: dashed; width: 600px; padding: 10px; display:none">
    <h2>Добавить книгу в библиотеку</h2>
    <input type="text" name="title" placeholder="Название книги" required><br><br>
    <input type="text" name="author1" placeholder="Автор" required>
    <input type="text" name="author2" placeholder="Автор">
    <input type="text" name="author3" placeholder="Автор"><br><br>
    <input type="image" name="cover"><br><br>
    <textarea name="description" style="width: 75%; height: 100px;"></textarea>
    <button type="submit" style="margin-left: 35px;">Добавить</button>
    </form>
    <script>
        document.querySelector('#add').addEventListener('click',() => {
            document.querySelector('form').style.display = 'block'
            document.querySelector('#add').style.display = "none"})
    
    </script>
    </body>
</html>`;

// const tr = `<tr>
//           <td>%title%</td>
//           <td>%author%</td>
//           <td>%year%</td>
//           <td>%views%</td>
//         </tr>`;
// let table = "";
// booksLibrary.forEach((book) => {
//   table += tr
//     .replace("%img%", book.img)
//     .replace("%title%", book.title)
//       .replace("%author%", book.author)
//       .replace("%views%", viewsCounter[book.id]);
// });
// adminPage = adminPage.replace("%tr%",table)
module.exports= adminPage