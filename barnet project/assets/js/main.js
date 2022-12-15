const ul = document.querySelector(".navigation");

fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => {
        json.map(elem => {
            const li = document.createElement("li");
            li.innerText = elem;
            li.style.fontWeight = "600";
            li.style.textTransform = "uppercase"
            ul.appendChild(li);
        })
    })