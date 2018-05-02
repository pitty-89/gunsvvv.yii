var TopMenu = function() {
    self = this;
    this.mobile = 1024;
    this.cls = {
        'isub'  : 'header__menu__item',
        'wsub'  : 'with-sub',
        'open'  : 'open',
        'toggle': 'header__menu-toggle',
        'menu'  : 'header__menu',
        'shadow': 'shadow'
    };
    /**
     * События относящиеся к странице
     */
    this.actions = function() {
        window.onresize = function() {
            self.toggleItems();
            self.resetMenu();
        };
        document.onclick = function(e) {
          if (e.target.className.indexOf(self.cls.shadow) !== -1) {
            if (typeof Popup != 'undefined' && Popup.flag) Popup.hide();
            else self.resetMenu();
          }
        }
    };
    /**
     * Скрытие всех открытых блоков меню
     */
    this.closeItems = function() {
        var arItems = document.getElementsByClassName(self.cls.wsub);
        for (var i in arItems) if (typeof arItems[i] == 'object') p.removeClass(arItems[i], self.cls.open);
    };
    this.init = function() {
        p.ready(function() {
            self.toggleItems();
            self.actions();
            self.toggleMenu();
        });
    };
    /**
     * Переключение пунктов меню
     */
    this.toggleItems = function() {
        var c = self.cls,
            arISub = document.getElementsByClassName(c.isub),
            arWSub = document.getElementsByClassName(c.wsub);
        if (window.innerWidth > self.mobile) {
            for (var i in arWSub) {
                if (typeof arWSub[i] == 'object') {
                    var item = arWSub[i];
                    item.onmouseover = function(e) {
                        if (e.target.parentNode.className.indexOf(c.wsub) !== -1)
                            p.addClass(e.target.parentNode, c.open);
                    };
                    item.onmouseleave = function(e) {
                        p.removeClass(e.target, c.open);
                    };
                }
            }
        } else {
            for (var s in arISub) {
                if (typeof arISub[s] == 'object') {
                    var item = arISub[s];
                    item.onclick = function(e) {
                        e.preventDefault();
                        var show = e.target.parentNode.className.indexOf(c.open) === -1;
                        if (show) {
                            // закроем все остальные открытые пункты меню
                            self.closeItems();
                            var blkClosest = p.closest(e.target.parentNode, c.wsub);
                            if (blkClosest !== null)
                                p.addClass(p.closest(e.target.parentNode, c.wsub), c.open);
                            p.addClass(e.target.parentNode, c.open);
                        }
                        else p.removeClass(e.target.parentNode, c.open);
                    };
                }
            }
        }
    };
    /**
    * Показ / скрытие блока меню
    */
    this.toggleMenu = function() {
        var c = self.cls,
            arBtnToggle = document.getElementsByClassName(c.toggle);
        for (var i in arBtnToggle) {
          if (typeof arBtnToggle[i] == 'object') {
            var btn = arBtnToggle[i];
            btn.onclick = function(e) {
              e.preventDefault();
              if (typeof Popup != 'undefined' && Popup.flag) Popup.hide();
              var blkToggleMenu = e.target.tagName == 'I' ? e.target.parentNode : e.target,
                  blkParent = blkToggleMenu.parentNode,
                  blkMenu = blkParent.getElementsByClassName(c.menu)[0],
                  fShow = blkToggleMenu.className.indexOf(c.open) !== -1 ? false : true;
              if (fShow) {
                p.addClass(blkMenu, c.open);
                p.addClass(blkToggleMenu, c.open);
                p.addClass(document.body, c.shadow);
              } else {
                p.removeClass(blkMenu, c.open);
                p.removeClass(blkToggleMenu, c.open);
                p.removeClass(document.body, c.shadow);
              }
            };
          }
        }
    };
    /**
     * Закрытие пунктов меню (запускается при изменении размеров окна)
     */
    this.resetMenu = function() {
      var c = self.cls,
          arBtnToggle = document.getElementsByClassName(c.toggle),
          arMenuToggle = document.getElementsByClassName(c.menu);
      for (var i in arBtnToggle) {
        if (typeof arBtnToggle[i] == 'object') {
          p.removeClass(arBtnToggle[i], c.open);
        }
      }
      for (var i in arMenuToggle) {
        if (typeof arMenuToggle[i] == 'object') {
          p.removeClass(arMenuToggle[i], c.open);
        }
      }
      p.removeClass(document.body, c.shadow);
    };

    self.init();
};
var topMenu = new TopMenu();
