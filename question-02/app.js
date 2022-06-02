// document.addEventListener('DOMContentLoaded', function() {

//     alert('hi there')
//     const scriptTag = document.createElement('script');
//     scriptTag.setAttribute("type", "text/javascript")
//     scriptTag.setAttribute("src", "question-02/app.js")

//     document.body.appendChild(scriptTag);
// })

import {alert} from './alert.js'

var js = document.createElement("script");
js.type = "text/javascript";
js.src = alert;

// js.onload = function() {
//     alert("hello")
// };

document.body.appendChild(js);