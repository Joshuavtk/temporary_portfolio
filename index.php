<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="sass/main.css" type="text/css">
    <title>Portfolio | Joshua van 't Kruis</title>
</head>
<body>

<header class="header">
    <h1 class="header__title title--size-big">Joshua van 't Kruis</h1>
    <h3 class="header__title title--size-medium">Media developer</h3>
</header>
<main>
    <div class="main__introduction">
        <h1 class="main__title">About</h1>
        <p>Hallo ik ben Lorem ipsum</p>
    </div>

    <h1 class="main__title">Projects</h1>
    <div class="wrapper">
        <article class="article" id="article_fanstille">
            <h2 class="article__title title--size-big">Fanstille</h2>
            <h4 class="article__title title--size-medium">Project MyBand</h4>
            <img src="images/Fanstille-small.PNG"
                 class="article__image image--from-fanstille" alt="Fanstille logo">
            <a href="https://github.com/RickHinfelaar/TheWallMaanRoosVis"
               class="article__link link--selected-none">Github link</a>
        </article>
        <div id="content_fanstille" class="popup">
            <p>Test</p>
        </div>
        <article class="article">
            <h2 class="article__title title--size-big">MaanRoosVis</h2>
            <h4 class="article__title title--size-medium">Project The Wall</h4>
            <img src="images/MaanRoosVis-small.PNG"
                 class="article__image image--from-maanroosvis" alt="MaanRoosVis logo">
            <a href="https://github.com/RickHinfelaar/TheWallMaanRoosVis"
               class="article__link link--selected-none">Github link</a>
        </article>
        <article class="article">
            <h2 class="article__title title--size-big">Foto Gallerij</h2>
            <h4 class="article__title title--size-medium">Front-end opdracht 9</h4>
            <img src="images/FotoGallerij-small.PNG"
                 class="article__image image--from-maanroosvis" alt="Blizzard logo">
            <a href="https://github.com/RickHinfelaar/TheWallMaanRoosVis"
               class="article__link link--selected-none">Github link</a>
        </article>
        <article class="article">
            <h2 class="article__title title--size-big">MaanRoosVis</h2>
            <h4 class="article__title title--size-medium">Project The Wall</h4>
            <img src="images/MaanRoosVis-small.PNG"
                 class="article__image image--from-maanroosvis" alt="MaanRoosVis logo">
            <a href="https://github.com/RickHinfelaar/TheWallMaanRoosVis"
               class="article__link link--selected-none">Github link</a>
        </article>
    </div>
<script src="scripts/modaalvenster.js"></script>
</main>
<footer>
    <p>Copyright © 2017 Joshua van 't Kruis All Rights Reserved. </p>
    <a href="https://www.linkedin.com/in/joshua-van-t-kruis-b58ba2150/"><img src="images/linkedin-logo.png" alt="LinkedIn image" class="footer__image"></a>
</footer>
</body>
</html>