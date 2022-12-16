const firstName = document.querySelector(".inputFullname");
const email = document.querySelector(".inputEmail");
const ourComment = document.querySelector(".inputComment");
const sendComment = document.querySelector(".send-btn");




save.addEventListener("click", async () => {
    const data = {
        "id": Math.floor((Math.random() * 100) + 1),
        "firstname": name.value,
        "surname": surname.value,
        "gender": gender,
        "title": title.value,
        "story": story.value
    }

    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    cardWrapper.innerHTML = "";
    getUsers();
});