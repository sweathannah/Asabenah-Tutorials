const paragraph = document.querySelector('p')
console.log(paragraph.innerHTML);

console.log(document.getElementById('firstp').innerText);
console.log(document.getElementById('secondp').innerText);
console.log(document.getElementById('thirdp').innerText);
console.log(document.getElementById('fourthp').innerText);

const allPs = document.querySelectorAll('p');
console.log("Using document.querySelectorAll():", allPs);

const allPsByTagName = document.getElementsByTagName('p');
console.log("By tag name:", allPsByTagName);
console.log(allPsByTagName.length);
for (let i = 0; i < allPsByTagName.length; i++) {
    console.log(allPsByTagName[i].innerText);
}

































































































































































