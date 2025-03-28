
                (function(){
                    var cl = window.CL = window.cl = window.cl || window.CL || {};
                    cl.sandbox = "";
                })();
                try {
                    var p = document.createElement("p");
                    if (
                        !/\/\/.+\.craigslist\.org\/about\//.test(window.location.href) &&
                        window.location.pathname.length > 1 &&
                        (!window.addEventListener || JSON.parse(JSON.stringify('x')) !== 'x' || (p.style.flex!=='' && p.style['-webkit-flex'] !== ''))
                    ) {
                        throw "unsupported browser";
                    }
                } catch (e) {
                    function cleanup() {
                        document.body.innerHTML = '<div id="cl-unsupported-browser" style="margin:1em;font-size:150%;text-align:center;">We have detected you are using a browser that is missing critical features.<br><br>Please visit craigslist from a modern browser.</div>';
                        document.body.style = "display:block";
                    }

                    try {
                        document.body.style = "display:none";
                    } catch (e) {
                    }
                    window.onload = cleanup;
                    window.clUnsupportedBrowser = true;
                }