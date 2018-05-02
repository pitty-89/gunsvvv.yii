/**
 * Created by pavel on 04.02.18.
 * открытие / скрытие блока меню по клику на элемент с классом clsBtn и аттрибутом list
 */
var toggleMenu = function() {
    var self = this;
    this.cb = 'menu__toggle-list';
    this.cs = 'menu__toggle-open';
    this.da = 'list';

    this.init = function() {
        var a = document.getElementsByClassName(self.cb),
            f = false;
        for (var i in a) {
            var b = a[i];
            if (typeof b == 'object' && typeof b.dataset[self.da] != 'undefined') {
                var l = document.getElementById(b.dataset[self.da]);
                b.onclick = function(e) {
                    e.preventDefault();
                    // блок меню открыт
                    if (l.className.indexOf(self.cs) !== -1) self.removeClass(l, self.cs);
                    // блок меню скрыт
                    else self.addClass(l, self.cs);
                };
                f = f === false ? true : f;
            }
        }
        if (a.length > 0 && f) self.closeOuterMenu();
    };
    /**
     * Закрывает открытые блоки с меню при клике вне их области
     */
    this.closeOuterMenu = function() {
        document.onclick = function(e) {
            var en = e.target.nodeName,
                ec = e.target.className,
                a = document.getElementsByClassName(self.cb);
            for (var i in a) {
                if (typeof a[i] === 'object') {
                    var l = document.getElementById(a[i].dataset[self.da]);
                    if (l.className.indexOf(self.cs) !== -1) {
                        if (self.is(a[i], en, ec) === false && self.has(a[i], en, ec) === false &&
                            self.is(l, en, ec) === false && self.has(l,en, ec) === false) {
                            self.removeClass(l, self.cs);
                        }
                    }
                }
            }
        };
    };
    /**
     * Проверяет имеет ли элемент b класс c и тег t
     * @param b - проверяемый элемент
     * @param t - тег наличие у элемента которого проверяем
     * @param c - класс (строка с классами) наличие которых проверяем у элемента
     * @returns {boolean}
     */
    this.is = function(b,t,c) {
        if (b.nodeName == t) {
            var a = c.split(' '),
                n = b.className;
            if (a.length === 0) return true;
            else {
                for (var i in a) {
                    if (n.indexOf(a[i]) === -1) return false;
                }
                return true;
            }
        } else return false;
    };
    /**
     * Проверяет наличие в блоке b элемента с классом c и тегом t
     * @param b - блок в котором производится поиск
     * @param t - тег искомого блока
     * @param c - класс по которому производится поиск
     * @returns {boolean}
     */
    this.has = function(b,t,c) {
        if (c !== '') {
            var a = b.getElementsByClassName(c);
            if (a.length > 0) {
                for (var i in a) {
                    if (a[i].nodeName == t) return true;
                }
            }
        } else {
            var a = b.getElementsByTagName(t);
            if (a.length > 0) return true;
        }
        return false;
    };
    /**
     * Добавляет класс к элементу
     * @param b - элемент у которого необходимо добавить класс
     * @param c - класс который добавляют
     */
    this.addClass = function(b,c) {
        b.className = (b.className == '' ? '' : ' ') + c;
    };
    /**
     * Удаляет класс у элемента
     * @param b - элемент у которого необходимо удалить класс
     * @param c - класс который необходимо удалить
     */
    this.removeClass = function(b,c) {
        b.className = (b.className.replace(c) == '' ? '' : ' ') + b.className.replace(c);
    };

    self.init();
};