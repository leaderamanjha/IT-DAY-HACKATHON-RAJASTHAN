const btn = document.querySelector('.talk')
const content = document.getElementById('cont')

const greeting = ['For understanding the question just say... tell me about question and its number.']
const Q1 = [
  'The uttara kanda conjectures Rama reign of Ayodhya, the birth of Lava and Kusha, the Ashvamedha yajna and last days of Rama. At the expiration of his term of exile, Rama returns to Ayodhya with Sita, Lakshmana, and Hanuman, where the coronation is performed.'
]
const Q2 = [
  'On being asked to prove his devotion to Rama, Hanuman tears his chest open and to everyones surprise, there is an image of Rama and Sita inside his chest. Rama rules Ayodhya and the reign is called Ram-Rajya (a place where the common folk is happy, fulfilled, and satisfied).'
]
const Q3 = [
  'As time passes in the reign of Rama, spies start getting rumours that people are questioning Sita purity as she stayed in the home of another man for almost a year without her husband. The common folk start gossiping about Sita and question Ramas decision to make her Queen.'
]
const Q4 = [
  'Rama is extremely distraught on hearing the news, but finally tells Lakshmana that the purity of the Queen of Ayodhya has to be above any gossip and rumour. Ram instructs him to take Sita to a forest outside Ayodhya and leave her there with a heavy heart. Lakshmana reluctantly drops Sita in a forest for another exile.'
]
const Q5 = [
  'Sita finds refuge in Sage Valmikis ashram, where she gives birth to twin boys, Lava and Kusha. Meanwhile, Rama conducts an Ashwamedha yajna (A holy declaration of the authority of the king) and in absence of Sita places a golden statue of Sita.'
]
const Q6 = [
  'Lava and Kusha capture the horse (sign of the yajna) and defeat the whole army of Ayodhya which come to protect the horse. Later on, both the brothers defeat Lakshmana, Bharata, Shatrughan and other warriors and take Hanuman as prisoner.'
]
const Q7 = [
  'Finally Rama himself arrives and defeats the two mighty brothers. Valmiki updates Sita about this development and advises both the brothers to go to Ayodhya and tell the story of Sitas sacrifice to the common folk. Both brothers arrive at Ayodhya but face many difficulties while convincing the people.'
]
const Q8 = [
  'Then the most awaited moment arrives and Ram happily meets sita.'
]
const Q9 = [
  'On meeting Sita, Rama agrees to Sita request to undergo an Agni Pariksha (test of fire) to prove her chastity, as he wants to get rid of the rumors surrounding her purity.'
]
const Q10 = [
  'When Sita plunges into the sacrificial fire, Agni, lord of fire raises Sita, unharmed, to the throne, attesting to her innocence.'
]
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.onstart = () => {
  console.log(' voice is activated ')
}
recognition.onresult = (event) => {
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript
  content.innerHTML = transcript
  readOutLoud(transcript)
}
btn.addEventListener('click', () => {
  recognition.start()

})



function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = 'I was unable to hear properly!! '

  console.log(message)

  if (message.includes('Hey') || message.includes('give me some hint') || message.includes('summary of question') || message.includes('hay')) {
    const finalText = greeting[Math.floor(Math.random() * greeting.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1

  if (message.includes('tell me about question one') || message.includes('question one') || message.includes('tell me about question 1') || message.includes('question 1')){
    const finalText = Q1[Math.floor(Math.random() * Q1.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
 
  if (message.includes('tell me about question two') || message.includes('question two')) {
    const finalText = Q2[Math.floor(Math.random() * Q2.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question three') || message.includes('question three')) {
    const finalText = Q3[Math.floor(Math.random() * Q3.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question four') || message.includes('question four')) {
    const finalText = Q4[Math.floor(Math.random() * Q4.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question five') || message.includes('question five')) {
    const finalText = Q5[Math.floor(Math.random() * Q5.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question six') || message.includes('question six')) {
    const finalText = Q6[Math.floor(Math.random() * Q6.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question seven') || message.includes('question seven')) {
    const finalText = Q7[Math.floor(Math.random() * Q7.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question eight') || message.includes('question eight')) {
    const finalText = Q8[Math.floor(Math.random() * Q8.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question nine') || message.includes('question nine')) {
    const finalText = Q9[Math.floor(Math.random() * Q9.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question ten') || message.includes('question ten')) {
    const finalText = Q10[Math.floor(Math.random() * Q10.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  


  window.speechSynthesis.speak(speech)

}
