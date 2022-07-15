

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

    let newh1 = document.getElementById(`divH1`);
    newh1[`innerHTML`] = `aha, it no says what it said before`

    let newer = document.getElementById(`divH1`);
    newer[`outerHTML`] = `<h1>Woah, what happened?<h1>` + newer[`outerHTML`];

    let newest = document.getElementById(`divH1`);
    newest[`outerHTML`] = newest[`outerHTML`] + `<h1>HERE WE ARE<h1>`;

    let classtags = document.querySelectorAll(`.dawn`);
    for (let i = 0; i < classtags.length; i++) {
        classtags[i][`innerText`] = `hacked`;
        }

        let unique = document.getElementById(`hmm`);
        unique[`style`][`fontSize`]= `40px`;
        unique[`style`][`fontFamily`]= `cursive`;
       unique[`style`][`border-style`]= `solid`;

       let wow = document.getElementById(`pic`);
       wow.setAttribute(`src`, `https://images.unsplash.com/photo-1657415802296-2e4bdb80bf45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60`)