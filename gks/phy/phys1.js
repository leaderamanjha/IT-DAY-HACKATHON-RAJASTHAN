
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
                    img: "gk.png",
                    question: "Earlier mode of transport on water was ?",
                    answers: {a: 'Aeroplane', b: 'Hovercart', c: 'Bullockcart', d: 'Logs tied together',},
                    correctAnswer: 'd'
                },
                {
                    img: " ",
                    question: "Who is the father of physics ?",
                    answers: {a: 'Galileo Galilei', b: 'Albert Einstein ', c: 'Newton', d: 'Neils Bohr',},
                    correctAnswer: 'a'
                },
                {
                    img: " ",
                    question: " 1 km is equal to ?",
                    answers: {a: '1000m', b: '100m', c: '10000m', d: '10m',},
                    correctAnswer: 'a'
                },
                {
                    img: " ",
                    question: " An electric cell has how many terminals ?",
                    answers: {a: '1', b: '2', c: '3', d: '4',},
                    correctAnswer: 'b'
                },
                {
                    img: " ",
                    question: "  Poles of magnet always repel each other.",
                    answers: {a: 'True', b: 'False',},
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
