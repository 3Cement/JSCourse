let correctAnswer;


document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});

// loads a new question from an API
loadQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=1';
    fetch(url)
    .then(data => data.json())
    .then(result => displayQuestion(result.results));
}

// displays the question HTML from API

displayQuestion = questions => {

    // create the HTML Question
    const questionHTML = document.createElement('div');
    questionHTML.classList.add('col-12');

    questions.forEach(question => {
        console.log(question);

        // read the correct answer
        correctAnswer = question.correct_answer;

        // inject the correct answer in the possible answers
        let possibleAnswers = question.incorrect_answers;
        possibleAnswers.splice( Math.floor( Math.random() * 3 ), 0, correctAnswer );

        // add the HTML for the Current Question
        questionHTML.innerHTML = `
        <div class="row justify-content-between heading">
            <p class="category">Category: ${question.category}</p>
            <h2 class="text-center">${question.question}</h2>
        `;

        // generate the HTML for possible answers
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('questions', 'row', 'justify-content-around', 'mt-4')
        possibleAnswers.forEach(answer => {
            const answerHTML = document.createElement('li');
            answerHTML.classList.add('col-12', 'col-md-5');
            answerHTML.textContent = answer;
            // attach an event click the answer is clicked
            answerHTML.onclick = selectAnswer;
            answerDiv.appendChild(answerHTML);
        });
        questionHTML.appendChild(answerDiv);

        // render in the HTML
        document.querySelector('#app').appendChild(questionHTML);
    });
}

// when the answer is selected
selectAnswer = (e) => {

    // removes the previous active class for the answer
    if(document.querySelector('.active')){
        const activeAnswer = document.querySelector('.active');
        activeAnswer.classList.remove('active');
    }
    // adds the current answer
    e.target.classList.add('active');
}