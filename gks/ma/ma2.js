
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
                    question: "What is the sum of 2/3 and 4/9?",
                    answers: {a: '6/3', b: '6/9', c: '10/9', d: '10/3'},
                    correctAnswer: 'c'
                },
                {
                    question: "What is the product of 2/9 and 3/4?",
                    answers: {a: '1/6', b: '2/3', c: '1/9', d: '10/9'},
                    correctAnswer: 'a'
                },
                {
                    question: "What is the reciprocal of 1/9?",
                    answers: {a: '1', b: '0', c: '9', d: '1/9'},
                    correctAnswer: 'c'
                },
                {
                    question: "What is the value of 100 divided by 0?",
                    answers: {a: '0', b: '1', c: '100', d: 'Undefined'},
                    correctAnswer: 'd'
                },
                {
                    question: "Find the additive inverse of 11/7?",
                    answers: {a: '7/11', b: '7/11', c: '11/7', d: '-11/7'},
                    correctAnswer: 'a'
                },

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
