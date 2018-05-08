const countries = [

    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },

    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },

    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },

    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }

];
window.onload = function(){
    let all = document.getElementsByClassName("flex-container justify")[0];

    for (let i = 0; i < countries.length; i++) {
        let div1 = document.createElement("div");
        div1.className = "item";

        let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode(countries[i].name));

        let p = document.createElement("p");
        p.appendChild(document.createTextNode(countries[i].continent));

        let div2 = document.createElement("div");
        div2.className = "inner-box";
        let h3_1 = document.createElement("h3");
        h3_1.appendChild(document.createTextNode("Cities"));
        div2.appendChild(h3_1);
        let ul = document.createElement("ul");
        div2.appendChild(ul);
        for (let j = 0; j < countries[i].cities.length; j++) {
            let li = document.createElement("li");
            li.innerText = countries[i].cities[j];
            ul.appendChild(li);
        }

        const div3 = document.createElement("div");
        div3.className = "inner-box";
        let h3_2 = document.createElement("h3");
        h3_2.appendChild(document.createTextNode("Popular photos"));
        div3.appendChild(h3_2);
        for (let j = 0; j < countries[i].photos.length; j++) {
            let img = document.createElement("img");
            img.className = "photo";
            img.src ="images/"+ countries[i].photos[j];
            div3.appendChild(img);
        }

        let button = document.createElement("button");
        button.innerText = "Visit";
        div1.appendChild(h2);
        div1.appendChild(p);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(button);

        all.appendChild(div1);
    }
}
