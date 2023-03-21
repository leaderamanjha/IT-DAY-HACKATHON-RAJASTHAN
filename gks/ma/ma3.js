
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
                    question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
                    answers: {a: 'Narmada', b: 'Mahanadi', c: 'Son', d: 'Netravati'},
                    correctAnswer: 'a'
                },
                {
                    question: "The Central Rice Research Station is situated in?",
                    answers: {a: 'Chennai', b: 'Cuttack', c: 'Bangalore', d: 'Quilon'},
                    correctAnswer: 'b'
                },
                {
                    question: "Who among the following wrote Sanskrit grammar?",
                    answers: {a: 'Kalidasa', b: 'Charak', c: 'Panini', d: 'Aryabhatt'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which among the following headstreams meets the Ganges in last?",
                    answers: {a: 'Alaknanda', b: 'Pindar', c: 'Mandakini', d: 'Bhagirathi'},
                    correctAnswer: 'd'
                },
                {
                    question: "Tsunamis are not caused by",
                    answers: {a: 'Hurricanes', b: 'Earthquakes', c: 'Undersea landslides', d: 'Volcanic eruptions'},
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
