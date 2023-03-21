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
                    img: " ",
                    question: " Which one of the following is a reliable measure?",
                    answers: {a: 'Hotness', b: 'Coldness', c: 'Temperature', d: 'None of these',},
                    correctAnswer: 'c'
                },
                {
                    img: " ",
                    question: " Which of the following is a good conductor of heat?",
                    answers: {a: 'Iron', b: 'Steel', c: 'Aluminium', d: 'All of these',},
                    correctAnswer: 'd'
                },
                {
                    img: " ",
                    question: " A bus travels 54 km in 90 minutes. The speed of the bus is",
                    answers: {a: '0.6 m/s', b: '10 m/s', c: '5.4 m/s', d: '3.6 m/s',},
                    correctAnswer: 'b'
                },
                {
                    img: " ",
                    question: " The formula for distance is",
                    answers: {a: 'distance = time/speed', b: 'distance = speed/time', c: ' distance = 1/speed x time', d: 'distance = speed × time',},
                    correctAnswer: 'd'
                },
                {
                    img: " ",
                    question: " Image formed by a plane mirror is",
                    answers: {a: 'virtual and erect', b: 'real and erect', c: 'virtual and inverted', d: 'real and inverted',},
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
