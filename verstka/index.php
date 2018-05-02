<?require_once('php/blocks/header.php');?>
<div class="line no-mt">
    <div class="menu">
        <a href="/">
            <i class="icon-gunsvvv"></i>
        </a><?
        ?><a class="menu__toggle-list" data-list="fav_menu">
            <i class="icon-align-justify"></i>
        </a><?
        ?><ul id="fav_menu">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>

            <li><a href="#">Доставка и оплата</a></li>
            <li class="auth"><?
                ?><a id="auth_in" href="#">Вход</a><?
                ?><?
                ?><span>/</span><?
                ?><a id="auth_reg" href="#">Регистрация</a></li>
        </ul>
    </div><?
    ?><div class="slider" id="slider">
        <div data-action="slides"><?
            $arSlides = [
                ['img' => 'include_files/images/slider/1.jpg', 'title' => 'Наш каталог', 'link'  => '#' ],
                ['img' => 'include_files/images/slider/2.jpg', 'title' => 'Ты у цели', 'link'  => '#' ],
                ['img' => 'include_files/images/slider/3.jpg', 'title' => 'Наш партнер - "Военно-спортивные игры', 'link'  => '#' ],
                ['img' => 'include_files/images/slider/4.jpg', 'title' => 'Добро пожаловать!', 'link'  => '#' ],
            ];
            $first = true;
            foreach ($arSlides as $iSlide => $slide) {
                ?><div data-action="slide" class="slide-<?= $iSlide ?><?= $first ? ' current' : ''?>" data-index="<?= $iSlide ?>">
                <a href="<?= $slide['link'] ?>">
                    <img src="<?= $slide['img'] ?>" alt="">
                    <p><?= $slide['title'] ?></p>
                </a>
                </div><?
                $first = $first ? false : $first;
            }
            ?><a class="js-nav nav-prev" href="#">prev</a>
            <a class="js-nav nav-next" href="#">next</a>
        </div>
        <div data-action="navs"><?
            for ($i = 0; $i < count($arSlides); $i++) {
                ?><a class="nav-<?= $i ?><?= $i == 0 ? ' current' : ''?>" href="#"></a><?
            }
        ?></div>
    </div>
</div>
<div class="menu-slides">
    <ul class="menu-slides">
        <li>
            <a href="#">
                <img src="include_files/images/list_menus/1.png" alt="Видео">
                <div><p>GunsVVV <br/>Видео</p></div>
            </a>
        </li><?
        ?><li>
            <a href="#">
                <img src="include_files/images/list_menus/2.png" alt="Новости">
                <div><p>GunsVVV <br/>Новости</p></div>
            </a>
        </li><?
        ?><li>
            <a href="#">
                <img src="include_files/images/list_menus/3.png" alt="Каталог">
                <div><p>GunsVVV <br/>Каталог</p></div>
            </a>
        </li><?
        ?><li>
            <a href="#">
                <img src="include_files/images/list_menus/4.png" alt="Информационный портал">
                <div><p>GunsVVV <br/>Информационный <br>портал</p></div>
            </a>
        </li>
    </ul>
</div>
<?require_once('php/blocks/footer.php');?>
