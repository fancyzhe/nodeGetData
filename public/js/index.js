function init() {
    axios.get("/data").then(res => {
        if (res.data) {
            let data = res.data;
            var para = document.createElement("p");
            var node = document.createTextNode("这是新段落。");
            para.appendChild(node);
            var element = document.getElementById("root");
            element.appendChild(para);
        }
    })
}


window.onload = function () {
    init(root)
};