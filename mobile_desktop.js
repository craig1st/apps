function C(k){return(document.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2]}
    var pagetype, pagemode;
    (function(){
        var h = document.documentElement;
        h.className = h.className.replace('no-js', 'js');
        var b = document.body;
        var bodyClassList = b.className.split(/\s+/);
        pagetype = bodyClassList[0]; // dangerous assumption
        var fmt = C('cl_fmt');
        if ( fmt === 'regular' || fmt === 'mobile' ) {
            pagemode = fmt;
        } else if (screen.width <= 480) {
            pagemode = 'mobile';
        } else {
            pagemode = 'regular';
        }
        pagemode = pagemode === 'mobile' ? 'mobile' : 'desktop';
        if (window.cl && pagemode === 'mobile') {
            cl.hasMobileLayout = true;
        }
        bodyClassList.push(pagemode);
        if (C('hidesearch') === '1' && pagemode !== 'mobile') {
            bodyClassList.push('hide-search');
        }
        var width = window.innerWidth || document.documentElement.clientWidth;
        if (width > 1000) { bodyClassList.push('w1024'); }
        if (typeof window.sectionBase !== 'undefined') {
            var mode = (decodeURIComponent(C('cl_tocmode') || '').match(new RegExp(window.sectionBase + ':([^,]+)', 'i')) || {})[1] || window.defaultView;
            if (mode) {
                bodyClassList.push(mode);
            }
        }
        b.className = bodyClassList.join(' ');
    }());