function init() {
    axios.get("/data").then(res => {
        if (res.data) {
            let data = res.data;
            var para = document.createElement("div");
            
            data.map((item,key)=>{
                const node = document.createTextNode((key+1)+":"+item+"\n");
                para.appendChild(node);
            })
            var element = document.getElementById("root");
            element.appendChild(para);
        }
    })
}


window.onload = function () {
    init(root)
};