<!doctype html>
<html lang="ru">
<head>
    <?
    $fFavoritePage = in_array($_SERVER['REQUEST_URI'], ['/', '/verstka/']);
    ?>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GunsVVV</title>
    <link rel="shortcut icon" href="/ico/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="57x57" href="/ico/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/ico/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/ico/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/ico/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/ico/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/ico/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/ico/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/ico/apple-touch-icon-152x152.png">
    <link rel="stylesheet" href="include_files/css/<?= $fFavoritePage ? 'favorite' : 'other' ?>.css?<?= rand(100, 1000) ?>">
    <link rel="stylesheet" href="include_files/css/popup.css?<?= rand(100, 1000) ?>" />
    <link rel="stylesheet" href="include_files/css/auth.css?<?= rand(100, 1000) ?>" />
    <script type="text/javascript" src="include_files/scripts/popup.js?<?= rand(100, 1000) ?>"></script>
    <script type="text/javascript" src="include_files/scripts/auth.js?<?= rand(100, 1000) ?>"></script>
    <?if ($fFavoritePage) {
        ?><script type="text/javascript" src="include_files/scripts/slider.js?<?= rand(100, 1000) ?>"></script><?
        ?><script type="text/javascript" src="include_files/scripts/menu.js?<?= rand(100, 1000) ?>"></script><?
    } else {
        ?><script type="text/javascript" src="include_files/scripts/functions.js?<?= rand(100, 1000) ?>"></script><?
        ?><script type="text/javascript" src="include_files/scripts/menu-top.js?<?= rand(100, 1000) ?>"></script><?
    }
    if (stristr($_SERVER['REQUEST_URI'], 'portal')) {
        ?><link rel="stylesheet" href="include_files/css/portal.css?<?= rand(100, 1000) ?>" /><?
    } elseif (stristr($_SERVER['REQUEST_URI'], 'catalog')) {
        ?><link rel="stylesheet" href="include_files/css/catalog.css?<?= rand(100, 1000) ?>" /><?
    }
    ?>
    <script type="text/javascript" src="include_files/scripts/script.js?<?= rand(100, 1000) ?>"></script>
</head>
<body>

<?
if (in_array($_SERVER['REQUEST_URI'], ['/', '/verstka/']) == false) {
    require_once ('php/options/top_menu.php');?>
    <div class="header">
        <a href="/verstka/">
            <i class="icon-gunsvvv"></i>
        </a><?
        ?><div>
            <div class="header__search">
                <form action="/search/" method="get">
                    <input type="text" value="" placeholder="найти..." name="q"><?
                    ?><button class="btn" type="button"><i class="icon-search"></i></button>
                </form>
            </div><?
            ?><div class="header__menu-toggle"><i class="icon-align-justify"></i></div><?
            ?><div class="header__menu"><?
                foreach ($arTopMenu as $iMenu => $arMenu) {
                    $useSubItem = isset($arMenu['dropdown']) && !empty($arMenu['dropdown']);
                    ?><div class="header__menu__item<?= $useSubItem ? ' with-sub' : '' ?>"><?
                        ?><a href="<?= $arMenu['link'] ?>"><?
                            echo $arMenu['title'];
                        ?></a><?
                    if ($useSubItem) {
                        ?><div class="header__menu__item-sublist"><?
                            foreach ($arMenu['dropdown'] as $iSubItem => $arSubItem) {
                                $useSubItem = isset($arSubItem['dropdown']) && !empty($arSubItem['dropdown']);
                                ?><div<?= $useSubItem ? ' class="with-sub"' : '' ?>><?
                                    ?><a href="<?= $arSubItem['link'] ?>"><?
                                        echo $arSubItem['title'];
                                    ?></a><?
                                    if ($useSubItem) {
                                        ?><div class="header__menu__item-sublist"><?
                                        foreach ($arSubItem['dropdown'] as $arLastSubItem) {
                                            ?><a href="<?= $arLastSubItem['link'] ?>"><?
                                            echo $arLastSubItem['title'];
                                            ?></a><?
                                        }
                                        ?></div><?
                                    }
                                ?></div><?
                            }
                        ?></div><?
                    }
                    ?></div><?
                }
                ?><div class="header__menu__item reg"><?
                    ?><a id="auth_reg" href="#">Регистрация</a><?
                ?></div><?
                ?><div class="header__menu__item auth"><?
                    ?><a id="auth_in" href="#">Вход</a><?
                ?></div><?
            ?></div><?
        ?></div><?
    ?></div><?
}?>
