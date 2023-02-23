//array with more objects so we have a property and value
const questions = [{
        'que': 'Which of the following is as markup language?',
        'a': 'HTML',
        'b': 'css',
        'c': 'javaScript',
        'd': 'Php',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands  for?',
        'a': 'Hyper text markup language',
        'b': 'Cascading style sheet',
        'c': 'jason object notation',
        'd': 'none of the above',
        'correct': 'b'
    }
]


let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById('quesBox')
const optionInputs = document.querySelectorAll('.options') //it wil select all the input that are called options

const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1})${data.que}`; //index+1 will print only 2+1 (example)
    optionInputs[0].nextElementSibling.innerText = data.a; //take the first element after input [0] that are the label and tranform the label text in data.a 
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}
//forEach will take all the input from optionInput and forEach need a callback
const getAnswer = () =>{
    let answer;
    optionInputs.forEach((input) =>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
}

const reset = () =>{
    optionInputs.forEach((input) =>{
        input.checked = false;
    })

}
const endQuiz = () =>{
    document.getElementById('box').innerHTML = `<h3>Thank you for playing the quiz</h3>
    <h2>${right} / ${total} are correct</h2>`
}

loadQuestion();











