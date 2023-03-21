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
                    question: "Which of the following is the SI units of force?",
                    answers: {a: 'Kgm/s2', b: 'Newton', c: 'meter', d: 'KG'},
                    correctAnswer: 'b'
                },
                {
                    question: " If the mass of the body is doubled and its velocity becomes half, then the linear momentum of the body will",
                    answers: {a: 'become double', b: 'remain the same', c: 'become half', d: 'become four times'},
                    correctAnswer: 'b'
                },
                {
                    question: "The inertia of an object causes the object to",
                    answers: {a: 'decrease its speed', b: 'Increase its speed', c: 'resist any change in the state of its motion', d: 'decelerate due to friction'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which of the following is true about force?",
                    answers: {a: 'Force is invisible', b: 'Force can move a body', c: 'It can deform a body', d: 'All of the above'},
                    correctAnswer: 'd'
                },
                {
                    question: "A passenger in a moving train tosses a coin that falls behind him. It means that the motion of the train is",
                    answers: {a: 'uniform', b: 'accelerated', c: 'retarded', d: 'along circular tracks'},
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
