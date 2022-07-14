

let firstId = document.querySelector(`#first`);
firstId[`innerText`] = `The first ID TAG!`;

let classTags = document.querySelectorAll(`.shambala`);
for (let i = 0; i < classTags.length; i++) {
classTags[i][`innerText`] = `grabbed by my class`;
}