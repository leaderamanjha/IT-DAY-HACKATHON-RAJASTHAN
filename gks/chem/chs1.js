
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
                    question: "In all the three states of water, (i.e. ice, liquid and vapour) chemical composition of water",
                    answers: {a: 'remains same', b: 'is very different', c: 'sometimes same and sometimes different', d: 'none of the above'},
                    correctAnswer: 'a'
                },
                {
                    question: "Which of the following statements is incorrect about the state of matter?",
                    answers: {a: 'The force of attraction between the gas particles is very less.', b: 'Bose-Einstein condensate is formed by heating gas of extremely low density.', c: 'The plasma glows with a special colour depending on the nature of the gas.', d: 'Plasma consists of super energetic and super excited particles.'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which of the following is not a homogeneous mixture?",
                    answers: {a: 'Air', b: 'Tincture of iodine', c: 'Sugar solution', d: 'Milk'},
                    correctAnswer: 'd'
                },
                {
                    question: "The boiling point of water at sea level is _________",
                    answers: {a: '0℃', b: '273 K', c: '273℃', d: '373 Ki'},
                    correctAnswer: 'd'
                },
                {
                    question: "The solid which undergoes sublimation is_________",
                    answers: {a: 'naphthalene', b: 'ice cube', c: 'potassium chloride', d: 'sodium chloride'},
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
