
var voiceList = "Rishi (en-IN)";
let synth = speechSynthesis,
    isSpeaking = true;

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utterance.voice = voice;
        }
    }
    utterance.rate = 0.8;
    synth.speak(utterance);
}



const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 5,
            questions: [
                {
                    img: "../question-img/gkquiz2.gif",
                    question: "Which is the planet nearest to the sun? ",
                    answers: {a: 'Earth', b: 'Mars', c: 'Mercury', d: 'Saturn'},
                    correctAnswer: 'c'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: "Which is the planet farthest from the sun?",
                    answers: {a: 'Uranus', b: 'Jupiter', c: 'Mercury', d: 'Neptune'},
                    correctAnswer: 'd'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: " ______ is the hottest planet in our solar system.",
                    answers: {a: 'Mercury', b: 'Venus', c: 'Jupiter', d: 'Earth'},
                    correctAnswer: 'b'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: " ______ is called the “Red Planet” in our solar system.",
                    answers: {a: 'Mercury', b: 'Venus', c: 'Earth', d: 'Mars'},
                    correctAnswer: 'd'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: "The planet with the highest number of moons is",
                    answers: {a: 'Saturn', b: 'Jupiter', c: 'Neptune', d: 'Uranus'},
                    correctAnswer: 'a'
                }
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value;
   
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
            {
                textToSpeech("Right answer")
                this.correctAnswer++
                if(this.correctAnswer)
                    myCor.play()++
            }
            else{
                textToSpeech("Wrong answer")
                this.wrongAnswer++
                if(this.wrongAnswer)
                    myTrack.play()++
            }
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
            cong.play()
        },
        resetQuiz() {``
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }


    }
})

app.mount('#app')