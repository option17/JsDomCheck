

let firstId = document.querySelector(`#first`);
firstId[`innerText`] = `The first ID TAG!`;

let classTags = document.querySelectorAll(`.shambala`);
for (let i = 0; i < classTags.length; i++) {
classTags[i][`innerText`] = `grabbed by my class`;
}

let moreIdTags = document.getElementById(`here`);
moreIdTags[`innerText`] = `Another ID TAG CRAZY`;

let moreClassTags = document.getElementsByClassName(`lol`);
for (let i = 0; i < moreClassTags.length; i++) {
    moreClassTags[i][`innerText`] = `grabbed by my class, differently`;
    }