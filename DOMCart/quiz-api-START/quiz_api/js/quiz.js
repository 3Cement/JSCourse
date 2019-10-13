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

        // read the correct answer
        correctAnswer = question.correct_answer;

        // inject the correct answer in the possible answers
        let possibleAnswers = question.incorrect_answers;
        possibleAnswers.splice( Math.floor( Math.random() * 3 ), 0, correctAnswer );

        console.log(possibleAnswers);
        console.log(question);
    });
}