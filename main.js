let btnFirst1 = document.querySelector(".btn1")
let btnFirst2 = document.querySelector(".btn2")
let btnFirst3 = document.querySelector(".btn3")

btnFirst1.addEventListener("click", function(){
    alert("HTML")
    console.log(prompt("a tegining majburiy atributini kiriting"));
    console.log(prompt("matnlar bilan ishlash tegi qaysi"));
    console.log(prompt("b tegining vazifasi nima"));
    console.log(prompt("html qanday til"));
    console.log(prompt("Sarlavha berish uchun qaysi tegdan foydalaniladi"));
})

btnFirst2.addEventListener("click", function(){
    alert("CSS")
    console.log(prompt("matnga rang berish uchun qaysi kalit so'zdan foydalaniladi"));
    console.log(prompt("margin tegining vazifasi nima"));
    console.log(prompt("background-image ning majburiy atributini ko'rsating"));
    console.log(prompt("css htmlning qaysi qismiga ulanadi"));
    console.log(prompt("id chaqirish uchun qaysi belgidan foydalaniladi"));
})

btnFirst3.addEventListener("click", function(){
    alert("Java Script")
    console.log(prompt("O'zgaruvchilar nechta"));
    console.log(prompt("Java Script qanday til"));
    console.log(prompt("console.log(); qanday funksiya"));
    console.log(prompt("O'zgaruvchiga qiymat berish nima deb ataladi"));
    console.log(prompt("Ecman Script bu-"));
})