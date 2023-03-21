
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
            questions: [{
                img: "../question-img/gkquiz1.png",
                question: "The Design and manufacturing process for the national flag is related by : ",
                answers: {a: 'Khadi Gram Udhyog, India', b: 'Bureau of Indian Standards', c: 'Flag Foundation of India', d: 'Parliament of India'},
                correctAnswer: 'b'
            },
            {
                img: "../question-img/gkquiz1.png",
                question: "What is size ( width to length) ratio of Indian National FLag?",
                answers: {a: '3:6', b: '2:3', c: '2:2', d: '2:4'},
                correctAnswer: 'b'
            },
            {
                img: "../question-img/gkquiz1.png",
                question: "What is the Preferred fabric for Weaving the Indian Tricolor Flag",
                answers: {a: 'Jute', b: 'Cotton', c: 'Polyester', d: 'Khadi'},
                correctAnswer: 'd'
            },
            {
                img: "../question-img/gkquiz1.png",
                question: "When was the flag for free Indian adopted ? ",
                answers: {a: '22 July 1947', b: '26 January 1950', c: '15 August 1947', d: '30 January 1950'},
                correctAnswer: 'a'
            },
            {
                img: "../question-img/gkquiz1.png",
                question: "Who designed the indian national flag",
                answers: {a: 'Mahatma Gandhi', b: 'Lal Bahadur Shastri', c: 'Pingali Venkayya', d: 'Jawahar Lal Nehru'},
                correctAnswer: 'c'
            }]
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
