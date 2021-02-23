//Exercise with simple callback

function createElement(data) {
    para = document.createElement("p");
    para.innerHTML = data;
    document.body.appendChild(para);
};

function queryWikipedia(callback) {
    let query = new XMLHttpRequest();
    query.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    query.responseType = "json";
    query.onload = function() {
        res = query.response;
        callback(res.query.pages[21721040].extract);
    };
    query.send();
};

queryWikipedia(createElement);