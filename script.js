
let questions = [
    { text: "What’s the capital of France?", correct: "Paris", options: ["Paris", "Berlin", "Madrid"] },
    { text: "What color is the sky on a clear day?", correct: "Blue", options: ["Green", "Blue", "Red"] },
    { text: "Which animal barks?", correct: "Dog", options: ["Cat", "Dog", "Fish"] }
]

let current = 0

let question = document.getElementById("question")
let result = document.getElementById("result")
let buttons = document.querySelectorAll(".choice")

function showQuestion() {
    let q = questions[current]

    question.innerText = q.text

    buttons.forEach((btn, i) => {
        btn.innerText = q.options[i]
    })

    result.innerText = ""
}
//

buttons.forEach(btn => {
    btn.onclick = () => {

        if (btn.innerText == questions[current].correct) {
            result.innerText = "Correct!"

            current++

            if (current < questions.length) {
                setTimeout(showQuestion, 800)
            } else {
                question.innerText = "You finished the quiz!"

                buttons.forEach(b => b.style.display = "none")

                result.innerText = ""
            }
        } else {
            result.innerText = "Try Again!"
        }
    }
})

showQuestion()