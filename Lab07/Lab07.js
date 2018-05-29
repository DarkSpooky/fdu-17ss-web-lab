let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let c = document.getElementById("c");
let thNum;
let t = document.getElementById("t");
let t0;
let s2 = document.getElementById("s2");
let td;
let s1 = document.getElementById("s1");

function createTable() {
    let d1_i1 = document.createElement("input");
    d1_i1.type = "text";
    d1_i1.placeholder = "Table Name";
    d1_i1.style.display = "inline";
    d1.appendChild(d1_i1);

    let d1_i2 = document.createElement("input");
    d1_i2.type = "number";
    d1_i2.placeholder = "Columns Number";
    d1_i2.style.display = "inline";
    d1.appendChild(d1_i2);
    function getThNum() {
        thNum = d1_i2.value;
        for (let i = 0;i < thNum;i++){
            let d2_i = document.createElement("input");
            d2_i.type = "text";
            d2_i.placeholder = "Attribute";
            d2_i.style.display = "inline";
            d2.appendChild(d2_i);
        }
    }
    d1_i2.addEventListener("change",getThNum,false);

    c.addEventListener("click",commitTable,false);

    function commitTable() {
        let option = document.createElement("option");
        option.innerHTML= d1.children[0].value;
        option.selected = true;
        s2.appendChild(option);

        for (let i = 0; i < thNum;i++) {
            let th = document.createElement("th");
            th.innerHTML = d2.children[i].value;
            t.appendChild(th);
        }
    }
}
function addRow() {
    d1.innerHTML = "";
    d2.innerHTML = "";

    for (let i = 0;i < thNum;i++){
        let row_i = document.createElement("input");
        row_i.type = "text";
        row_i.placeholder = "Attr"+ i;
        d1.appendChild(row_i);
    }

    c.addEventListener("click",commitRow,false);

    function commitRow() {
        let tr = document.createElement("tr");
        for (let i = 0;i < thNum;i++){
            let td = document.createElement("td");
            td.innerHTML = d1.children[i].value;
            tr.appendChild(td);
        }
        t.appendChild(tr);
    }
}
function deleteRow() {
    d1.innerHTML = "";
    d2.innerHTML = "";

    for (let i = 0;i < thNum;i++){
        let row_i = document.createElement("input");
        row_i.type = "text";
        row_i.placeholder = "Attr"+ i;
        d1.appendChild(row_i);
    }

    c.addEventListener("click",commitDelete,false);

    let commit = false;
    let row;
    function commitDelete() {
        for(let j = 0;j < t.children.length;j++) {
            for (let i = 0;i < d1.children.length;i++) {
                if (d1.children[i] !== t.children[j].children[i])commit = false&&commit;
            }
            if(commit === true){
                row = j;
            }
        }
        if(commit)t.removeChild(t.children[row]);
    }
}

function deleteTable() {
    alert("WARNING: You cannot undo this action!");
    d1.innerHTML = "";
    d2.innerHTML = "";
    delete s2.innerText;
}
function listenS1() {
    if (s1.options[1].selected){
        createTable()
    }else if(s1.options[2].selected){
        addRow()
    }else if(s1.options[3].selected){
        deleteRow()
    }else if(s1.options[4].selected){
        deleteTable()
    }
}
s1.addEventListener("change" ,listenS1,false);