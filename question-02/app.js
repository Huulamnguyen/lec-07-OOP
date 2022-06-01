// document.addEventListener('DOMContentLoaded', function() {

//     alert('hi there')
//     const scriptTag = document.createElement('script');
//     scriptTag.setAttribute("type", "text/javascript")
//     scriptTag.setAttribute("src", "question-02/app.js")

//     document.body.appendChild(scriptTag);
// })

var js = document.createElement("script");
js.type = "text/javascript";
js.src = "app.js";

js.onload = function() {
    console.log("hello")
};

document.body.appendChild(js);