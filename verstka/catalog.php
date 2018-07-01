<?require_once('php/blocks/header.php');
$htmlAncors = '';
ob_start();
?><div class="ancors"><?
$htmlAncors .= ob_get_clean();
foreach ($arTopMenu['catalog']['dropdown'] as $iItem => $arItem) {
  ob_start();
  ?><a href="#item-<?= $iItem ?>"><span><?= $arItem['title'] ?></span></a><?
  $htmlAncors .= ob_get_clean();
  ?><div class="container container__catalog-item"><?
      ?><a class="<?= $arItem['code'] ?>" href="<?= $arItem['link'] ?>" name="item-<?= $iItem ?>"><?
        ?><span><?= $arItem['title']; ?></span><?
        ?><img src="<?= $arItem['image'] ?>" /><?
      ?></a><?
      ?><div><?
        ?><img src="<?= $arItem['image'] ?>" /><?
        if (!empty($arItem['dropdown'])) {
          ?><ul><?
          foreach ($arItem['dropdown'] as $arSubItem) {
            ?><li><?
              ?><a href="<?= $arSubItem['link'] ?>"><?
                ?><span><?= $arSubItem['title'] ?></span><?
              ?></a><?
            ?></li><?
          }
          ?></ul><?
        }
        if (isset($arItem['desc']) && $arItem['desc'] != '') {
          ?><p><?= $arItem['desc'] ?></p><?
        }
      ?></div><?
  ?></div><?
}
ob_start();
?></div><?
$htmlAncors .= ob_get_clean();
echo $htmlAncors;

require_once('php/blocks/footer.php');

?>
