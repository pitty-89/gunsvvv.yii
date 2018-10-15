var PFunctions = function(selector, context) {
    var self = this;

    /**
     * Возвращает обеъект по селектору
     * @param selector
     * @returns {*}
     */
    function getElementBySelector(selector) {
        if (typeof selector === 'object') {
            return selector;
        } else if (typeof selector === 'string') {
            var rObject = document.getAnonymousElementByAttribute(selector);
            console.log(rObject);

        } else return 'undefined';
    }
    /**
     * Проверка на тип функции
     * @param selector
     * @returns {boolean}
     */
    function isFunction(selector) {
        return typeof selector === "function" && typeof selector.nodeType !== "number";
    }
    function init() {
        document.onclick = function(e) {
            if (e.target.className.indexOf('disabled') !== -1) {
                e.preventDefault();
            }
        };
    }

    /**
     * Включает тень на странице
     * @param add - включить тень на всю страницу или нет
    */
    this.bodyShadow = function(add) {
      self.toggleClass('body', 'shadow', true);
    }

    /**
     * Возвращает ближайшего родителя с классом cls
     * @param el - элемент от которого необходимо начать поиск
     * @param cls - класс по которому производится выборка
     * @returns {*}
     */
    this.closest = function(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    };
    /**
     * Запуск события стартующего при окончании загрузки страницы
     * @param callback {function} - событие которое запускается
     */
    this.ready = function(callback) {
        document.addEventListener('DOMContentLoaded', function() {
            if (isFunction(callback)) callback();
        }, false);
    };
    /**
     * Переключение класса у объекта
     * @param selector {object} - объект у которого осуществляется смена класса
     * @param cls {text} - класс который нужно добавить или удалить
     * @param param {boolean} - параметр определяющий добавить либо удалить класс
     */
    this.toggleClass = function(selector, cls, param) {
        var cCls = selector.className;
        param = typeof param != 'undefined' ? param : cCls.indexOf(cls) === -1;
        selector.className = param ? ((cCls == '' ? '' : cCls + ' ') + cls) : (cCls.indexOf(cls) === -1 ?
                cCls : (cCls.replace(cls, '') == '' ? '' : cCls.replace(' ' + cls, '')));
    };
    /**
     * Функция выполняемая при наведении на элемент
     * @param selector {object} - объект на который произведено наведение
     * @param event {function} - событие которое выполняется при наведении
     */
    this.hover = function(selector, event) {
        var obj = self.getElemensBySelector(selector);
        if (obj != 'undefined') {
            obj.mouseenter = function() {
                event();
            }
        }
    };
    /**
     * Удаление класса у объекта
     * @param obj {object} - объект у которого удаляется класс
     * @param rClass {string} - класс который должен быть удален
     */
    this.removeClass = function(obj, rClass) {
        if (obj.className.indexOf(rClass) !== -1) obj.classList.remove(rClass);
    };
    /**
     * Добавление класса объекту
     * @param obj {object} - объект которому добавляется класс
     * @param aClass {string} - класс который должен быть добавлен
     */
    this.addClass = function(obj, aClass) {
        if (obj.className.indexOf(aClass) === -1) obj.classList.add(aClass);
    };
    init();
};
var p = new PFunctions();
