const countNum = document.querySelector(".countNumber");
const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")


increase.addEventListener("click", increaseFunc)
decrease.addEventListener("click", decreaseFunc)

let count = 0;
function increaseFunc() {
    count++;
    countNum.innerText = count;

}
function decreaseFunc() {
    if (count < 1) {
        count = 0;
    }
    else {
        count--;
        countNum.innerText = count;
    }
}

