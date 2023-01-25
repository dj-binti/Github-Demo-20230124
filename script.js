let para = document.querySelector(".para");
console.log(para);
let i = 0;
para.onclick = () => {
    i++;
    para.innerHTML = "the count is " + i;
};