
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
                    question: "An integer can be:",
                    answers: {a: 'Only Positive', b: 'Only Negative', c: 'Both positive and negative', d: 'None of the above'},
                    correctAnswer: 'c'
                },
                {
                    question: " The value of (5/4) – (8/3) is:",
                    answers: {a: '17/12', b: '-17/12', c: '12/17', d: '-12/17'},
                    correctAnswer: 'b'
                },
                {
                    question: "A rational number can be represented in the form of:",
                    answers: {a: 'p/q', b: 'pq', c: 'p+q', d: 'p-q'},
                    correctAnswer: 'a'
                },
                {
                    question: "The associative property is applicable to:",
                    answers: {a: 'Multiplication and division', b: 'Addition and subtraction', c: 'Subtraction and Division', d: 'Addition and Multiplication'},
                    correctAnswer: 'd'
                },
                {
                    question: "The additive identity of rational numbers is:",
                    answers: {a: '0', b: '1', c: ' 2', d: '-1s'},
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
