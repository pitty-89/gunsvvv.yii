var objPopup = function() {
    var self = this;
    this.contain = false;
    this.header = false;
    this.title = false;
    this.body = false;
    this.footer = false;
    this.hdclose = false;
    this.ftclose = false;
    this.flag = false;
    this.cls = {
        'body'  : 'shadow',
    };

    this.init = function() {
        document.onclick = function(e) {
            if (e.target.className.indexOf(self.cls.body) !== -1) self.hide();
        }
    };
    /**
     * удаление окна popup
     * @returns {boolean}
     */
    this.hide = function() {
        if (self.flag === false) return false;
        self.flag = false;
        self.removeShadow();
        self.contain.remove();
        if (typeof topMenu != 'undefined') topMenu.resetMenu();
    };
    /**
     * удаление тени для popup
     */
    this.removeShadow = function() {
        var bc = document.getElementsByTagName('body')[0].className;
        if (bc.indexOf(self.cls.body) !== -1) {
            var newClass = bc.replace(self.cls.body, '').trim();
            document.getElementsByTagName('body')[0].className = newClass;
        }
    };
    /**
     * установка тени для popup
     */
    this.setShadow = function() {
        var bc = document.getElementsByTagName('body')[0].className;
        if (bc.indexOf(self.cls.body) === -1) {
            var newClass = (bc == '' ? '' : ' ') + self.cls.body;
            document.getElementsByTagName('body')[0].onclick = function(e) {
                if (e.target.className.indexOf(self.cls.body) !== -1) self.hide();
            };
            document.getElementsByTagName('body')[0].className = newClass;
        }
    };
    /**
     * активация окна popup
     * @returns {boolean}
     */
    this.show = function() {
        if (self.flag) return false;
        if (typeof topMenu != 'undefined') topMenu.resetMenu();
        self.flag = true;
        self.setShadow();
        self.contain = document.createElement('div');
        self.contain.className = 'popup';
        self.header = document.createElement('div');
        self.header.className = 'popup__header';
        self.contain.appendChild(self.header);
        self.body = document.createElement('div');
        self.body.className = 'popup__body';
        self.contain.appendChild(self.body);
        self.footer = document.createElement('div');
        self.footer.className = 'popup__footer';
        self.contain.appendChild(self.footer);
        self.hdclose = document.createElement('i');
        self.hdclose.className = 'icon-close';
        self.header.appendChild(self.hdclose);
        self.hdclose.onclick = function() {
            self.hide();
        };
        self.title = document.createElement('span');
        self.header.appendChild(self.title);
        self.ftclose = document.createElement('button');
        self.ftclose.className = 'btn danger';
        self.ftclose.innerText = 'Закрыть';
        self.footer.appendChild(self.ftclose);
        self.ftclose.onclick = function () {
            self.hide();
        };
        document.getElementsByTagName('body')[0].appendChild(self.contain);
    };

};
var Popup = new objPopup();
