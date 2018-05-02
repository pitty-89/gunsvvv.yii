<?require_once('php/blocks/header.php');
?><div class="container container__sections-three "><?
    foreach ($arTopMenu['portal']['dropdown'] as $iMenu => $arPortal) {
        if ($arPortal['parent'] != 'line__3') continue;
        $arFile = pathinfo($arPortal['image']);
        $srcOrig = $arPortal['image'];
        $srcHover = file_exists($arFile['dirname'] . '/hv_' . $arFile['basename']) ?
                        $arFile['dirname'] . '/hv_' . $arFile['basename'] : '';
        ?><div class="container__sections__item" style="background-image: url(<?= $arPortal['background'] ?>)"><?
            ?><p><?= $arPortal['title']; ?></p><?
            ?><a href="<?= $arPortal['link'] ?>"><?
                ?><div class="img"><?
                    ?><img src="<?= $srcOrig ?>" alt="<?= $arPortal['title'] ?>"><?
                    if ($srcHover != '') {
                        ?><img src="<?= $srcHover ?>" alt="<?= $arPortal['title'] ?>"><?
                    }
                ?></div><?
            ?></a><?
            ?><ul><?
                foreach ($arPortal['dropdown'] as $iSubItem => $arSubItem) {
                    ?><li><a href="<?= $arSubItem['link'] ?>"><span><?= $arSubItem['title'] ?></span></a></li><?
                }
            ?></ul><?
            ?><p><?= $arPortal['desc'] ?></p><?
        ?></div><?
    }
?></div><?
?><div class="container container__sections-half"><?
    foreach ($arTopMenu['portal']['dropdown'] as $iMenu => $arPortal) {
        if ($arPortal['parent'] != 'line__2') continue;
        $arFile = pathinfo($arPortal['image']);
        $srcOrig = $arPortal['image'];
        $srcHover = file_exists($arFile['dirname'] . '/hv_' . $arFile['basename']) ?
            $arFile['dirname'] . '/hv_' . $arFile['basename'] : '';
        ?><div class="container__sections__item" style="background-image: url(<?= $arPortal['background'] ?>)"><?
            ?><p><?= $arPortal['title']; ?></p><?
            ?><a href="<?= $arPortal['link'] ?>"><?
                ?><div class="img"><?
                    ?><img src="<?= $srcOrig ?>" alt="<?= $arPortal['title'] ?>"><?
                    if ($srcHover != '') {
                        ?><img src="<?= $srcHover ?>" alt="<?= $arPortal['title'] ?>"><?
                    }
                ?></div><?
            ?></a><?
            ?><ul><?
            foreach ($arPortal['dropdown'] as $iSubItem => $arSubItem) {
                ?><li><a href="<?= $arSubItem['link'] ?>"><span><?= $arSubItem['title'] ?></span></a></li><?
            }
            ?></ul><?
            ?><p><?= $arPortal['desc'] ?></p><?
        ?></div><?
    }
?></div><?

require_once('php/blocks/footer.php');
?>
