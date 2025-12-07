<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Hehe-web2</title>
    <link rel="stylesheet" href="static/stylesheets/styles.css">
    <link rel="stylesheet" href="static/stylesheets/header.css">
    <link rel="stylesheet" href="static/stylesheets/footer.css">
    <link rel="stylesheet" href="static/stylesheets/form.css">
    <link rel="stylesheet" href="static/stylesheets/table.css">
    <link rel="icon" href="static/imgs/favicon.ico" type="image/x-icon">
</head>
<body>
<header class="page-header">
    <div class="header-content">
        <h1>Колодей Елизавета Владимировна</h1>
        <p>Группа: P3207</p>
        <p>Вариант: 757493</p>
    </div>
</header>
<section class="main_content" style="display: flex; justify-content: center; flex-direction: column;">

    <jsp:include page="resultTable.jsp"/>
        <a href=<%=request.getContextPath()%> >
            <button class="back">Назад к форме</button>
        </a>
</section>
<script type="text/javascript" src="static/js/index.js"></script>
<footer>
    <a href="https://github.com/FinwithnoJake/web_proga2">
        <img src="static/imgs/forfooter.png">
    </a>
</footer>
</body>
</html>