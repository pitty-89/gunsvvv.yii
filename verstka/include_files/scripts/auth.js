var objAuth = function() {
    var self = this;

    this.init = function() {
        document.addEventListener('DOMContentLoaded', function() {

            self.auth();
            self.reg();
        });
    };
    /**
     * Авторизация
     */
    this.auth = function() {
        var authIn = document.getElementById('auth_in');
        if (authIn !== null) {
            authIn.onclick = function(e) {
                e.preventDefault();
                if (typeof Popup != 'undefined') {
                    Popup.show();
                    Popup.title.innerText = 'Авторизация';
                    var form = document.createElement('form');
                    form.className = 'form-auth';
                    form.innerHTML = '<label for="i_auth_login">' +
                        '<span>Логин:</span>' +
                        '<input type="text" id="i_auth_login" name="login" placeholder="login..."/>' +
                        '</label>' +
                        '<label for="i_auth_pass">' +
                        '<span>Пароль:</span>' +
                        '<input type="password" id="i_auth_pass" name="password" placeholder="password..."/>' +
                        '</label>' +
                        '<a href="#">Забыли пароль?</a>';
                    Popup.body.appendChild(form);
                    var send = document.createElement('button');
                    send.className = 'btn success';
                    send.innerText = 'Отправить';
                    send.style.cssFloat = 'right';
                    Popup.footer.appendChild(send);
                }
            };
        }
    };
    /**
     * Регистрация
     */
    this.reg = function() {
        var authReg = document.getElementById('auth_reg');
        if (authReg !== null) {
            authReg.onclick = function(e) {
                e.preventDefault();
                if (typeof Popup != 'undefined') {
                    Popup.show();
                    Popup.title.innerText = 'Регистрация';
                    var form = document.createElement('form');
                    form.className = 'form-auth';
                    form.innerHTML = '<label for="i_reg_login">' +
                                            '<span>Логин:</span>' +
                                            '<input type="text" id="i_reg_login" name="login" placeholder="login..."/>' +
                                        '</label>' +
                                        '<label for="i_reg_email">' +
                                            '<span>Email:</span>' +
                                            '<input type="text" id="i_reg_email" name="email" placeholder="password..."/>' +
                                        '</label>' +
                                        '<label for="i_reg_pass">' +
                                            '<span>Пароль:</span>' +
                                            '<input type="password" id="i_reg_pass" name="password" placeholder="password..."/>' +
                                        '</label>' +
                                        '<label for="i_reg_repass">' +
                                            '<span>Повторите пароль:</span>' +
                                            '<input type="password" id="i_reg_repass" name="re_password" placeholder="password..."/>' +
                                        '</label>';
                    Popup.body.appendChild(form);
                    var send = document.createElement('button');
                    send.className = 'btn success';
                    send.innerText = 'Отправить';
                    send.style.cssFloat = 'right';
                    Popup.footer.appendChild(send);
                }
            };
        }
    };

};
var Auth = new objAuth();
Auth.init();