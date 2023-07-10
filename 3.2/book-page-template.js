let { sectionFooter, sectionHeader, body } = require("./books-page-template");

const bookHead = `<!DOCTYPE html>
<html lang="ru">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>shpp-library</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="library Sh++">

    <link rel="stylesheet" href="./book-page_files/libs.min.css">
    <link rel="stylesheet" href="./book-page_files/style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" crossorigin="anonymous"/>

    <link rel="shortcut icon" href="http://localhost:3000/book/favicon.ico">
</head>
%body%
</html>`;

const bookPageSection_main = `<section id="main" class="main-wrapper">
        <div class="container">
            <div id="content" class="book_block col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div id="id" book-id="%book-id%">
                    <div id="bookImg" class="col-xs-12 col-sm-3 col-md-3 item" style="margin:;">
                    <img src=".././books-page_files/%book-id%.jpg" alt="Responsive image" class="img-responsive">    
                        <hr>
                    </div>
                    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 info">
                        <div class="bookInfo col-md-12">
                            <div id="title" class="titleBook">%book-title%</div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="bookLastInfo">
                                <div class="bookRow"><span class="properties">автор:</span><span id="author">%book-author%</span></div>
                                <div class="bookRow"><span class="properties">год:</span><span id="year">%book-year%</span></div>
                                <div class="bookRow"><span class="properties">страниц:</span><span id="pages">%book-pages%</span></div>
                                <div class="bookRow"><span class="properties">isbn:</span><span id="isbn"></span></div>
                            </div>
                        </div>
                        <div class="btnBlock col-xs-12 col-sm-12 col-md-12">
                            <button type="button" class="btnBookID btn-lg btn btn-success">Хочу читать!</button>
                        </div>
                        <div class="bookDescription col-xs-12 col-sm-12 col-md-12 hidden-xs hidden-sm">
                            <h4>О книге</h4>
                            <hr>
                            <p id="description">Лекции и практикум по программированию на Си++</p>
                        </div>
                    </div>
                    <div class="bookDescription col-xs-12 col-sm-12 col-md-12 hidden-md hidden-lg">
                        <h4>О книге</h4>
                        <hr>
                        <p class="description">Лекции и практикум по программированию на Си++</p>
                    </div>
                </div>
                <script src="./book-page_files/book.js" defer=""></script>
            </div>
        </div>
    </section>
`;
const templateBookPage = bookHead.replace(
  "%body%",
  body.replace("%header%", sectionHeader).replace("%footer%", sectionFooter)
);
module.exports = { templateBookPage, bookPageSection_main };
