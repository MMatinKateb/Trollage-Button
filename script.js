window.onload = function () {
    var trollbtn = document.getElementById("button");
    trollbtn.onmouseover = function () {
        trollbtn.style.left = (Math.random() * 101) + "%";
        trollbtn.style.bottom = (Math.random() * 101) + "%";
    }
    trollbtn.onclick = function () {
        var clicked = new Image();
        var node = document.createElement("div");
        node.innerHTML = "Clicked";
        node.style.background = "#000"; node.style.borderRadius = "25px";
        clicked.src = "https://cheatforum.gg/data/avatars/o/22/22221.jpg?1628727592";
        document.getElementsByTagName("body")[0].appendChild(node)
                                                .appendChild(clicked);
    }
}