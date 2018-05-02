/**
 * Created by pavel on 07.01.18.
 */
var slider = function() {
    var self = this;

    this.$slider = document.getElementById('slider');
    this.arAarrows = self.$slider.getElementsByClassName('js-nav');
    this.finit = false;
    this.ftoggle = false;
    this.$cSlides = false;
    this.$cNavs = false;
    this.countSlides = 0;
    this.animate = 300;
    this.timeout = 5000;
    this.autoChange = false;
    this.interval = false;

    this.init = function() {
        if (self.finit === false) {
            for (var iBlock in self.$slider.getElementsByTagName('div')) {
                var $div = self.$slider.getElementsByTagName('div')[iBlock];
                if (typeof $div.dataset !== 'undefined' && typeof $div.dataset.action !== 'undefined') {
                    if ($div.dataset.action == 'slides') self.$cSlides = $div;
                    else if ($div.dataset.action == 'navs') self.$cNavs = $div;
                    else if ($div.dataset.action == 'slide') self.countSlides++;
                }
                if (iBlock + 1 == self.$slider.getElementsByTagName('div').length) self.finit = true;
            }
            var int = setInterval(function() {
                if (self.init) {
                    clearInterval(int);
                    self.actions();
                    self.auto();
                }
            }, 10);
        }
    };
    this.actions = function() {
        var arNavs = self.$cNavs.getElementsByTagName('a');
        for (var iNav in arNavs) {
            var $nav = arNavs[iNav];
            $nav.onmouseover = function() {
                if (this.getElementsByTagName('img').length === 0 && this.className.indexOf('current') === -1) {
                    var curIndex = +this.className.replace(' current', '').replace('nav-', ''),
                        srcFocusImage = self.$cSlides.getElementsByClassName('slide-' + curIndex)[0].getElementsByTagName('img')[0].getAttribute('src'),
                        $bImage = document.createElement('div');
                    $bImage.className = 'fimage';
                    $bImage.innerHTML = '<img src="' + srcFocusImage + '" />';
                    this.appendChild($bImage);
                }
            };
            $nav.onmouseout = function() {
                if (this.getElementsByTagName('img').length !== 0) this.innerHTML = '';
            };
            $nav.onclick = function(e) {
                e.preventDefault();
                if (this.getElementsByTagName('img').length !== 0) this.innerHTML = '';
                if (this.className.indexOf('current') === -1 && self.ftoggle === false) {
                    self.ftoggle = true;
                    var nIndex = +this.className.replace('nav-', ''),
                        $curNav = self.$cNavs.getElementsByClassName('current')[0],
                        cIndex = +$curNav.className.replace(' current', '').replace('nav-', '');
                    self.newSlide(cIndex, nIndex, cIndex < nIndex ? 'next' : 'prev');
                }
            };
        }
        for (var iArrow in self.arAarrows) {
            var $arrow = self.arAarrows[iArrow];
            $arrow.onclick = function(e) {
                e.preventDefault();
                if (self.ftoggle === false) {
                    self.ftoggle = true;
                    var tClName = this.className,
                        $cSlide = self.$cSlides.getElementsByClassName('current')[0],
                        cIndex = +$cSlide.dataset.index,
                        direction = tClName.indexOf('prev') !== -1 ? 'prev' : 'next',
                        nIndex = direction == 'next' ? (cIndex === (self.countSlides - 1) ? 0 : cIndex + 1) : (cIndex == 0 ? (self.countSlides - 1) : (cIndex - 1));
                    self.newSlide(cIndex, nIndex, direction);
                }
            };
        }
    };
    this.auto = function() {
        if (self.autoChange) {
            self.interval = setInterval(function() {
                self.$slider.getElementsByClassName('nav-next')[0].click();
            }, self.timeout);
            self.$slider.onmouseover = function () {
                clearInterval(self.interval);
            };
            self.$slider.onmouseout = function () {
                self.auto();
            }
        }
    };
    this.newSlide = function(cIndex, nIndex, direction) {
        var $cSlide = self.$cSlides.getElementsByClassName('slide-' + cIndex)[0],
            $nSlide = self.$cSlides.getElementsByClassName('slide-' + nIndex)[0],
            $cNav = self.$cNavs.getElementsByClassName('nav-' + cIndex)[0],
            $nNav = self.$cNavs.getElementsByClassName('nav-' + nIndex)[0],
            tempClass = direction == 'next' ? 'bnext' : 'bprev';
        $cNav.classList.remove('current');
        $nNav.classList.add('current');
        $nSlide.classList.add('current');
        $nSlide.classList.add(tempClass);
        setTimeout(function() {
            $nSlide.classList.remove(tempClass);
            $cSlide.classList.remove('current');
            self.ftoggle = false;
        }, self.animate);
    };
    this.init();
};