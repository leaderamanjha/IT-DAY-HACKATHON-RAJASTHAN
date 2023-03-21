const btn = document.querySelector('.talk')
const content = document.getElementById('cont')

const greeting = ['For understanding the question just say... tell me about question and its number.']
const Q1 = [
  'Dasharatha is the King of Ayodhya and has three wives and four sons, Rama, Lakshmana, Bharata and Shatrughana. '
]
const Q2 = [
  'When the princes had grown up some, the sage Vishwamitra arrived at Dasharaths court and asked that Rama and Lakshman be lent to him to help him rid his hermitage of the demons that were plaguing the ashram dwellers by defiling their sacrifices with blood and bones. While returning from there they hear of the swayamvar of Sita.'
]
const Q3 = [
  'Sita, was also known as daughter of the Earth.'
]
const Q4 = [
  'Sita, is also the name of an Indian musical instrument.'
]
const Q5 = [
  'Dasharatha now wanted to crown Rama as the prince. However, Bharatas mother is Kaikeyi, who resents Rama being the crown prince and sends him to the forests for vanvaas for fourteen years. '
]
const Q6 = [
  'Rama walked over Sita’s Swayamvar, picked up the bow, strung it, and plucked the bowstring with such a twang that two things happened simultaneously: the twang was heard for miles around, and the force of it broke the bow into two with so great a sound that the king and his courtiers came running from their chambers to see what the commotion was about. And Sita chooses Rama as her var.'
]
const Q7 = [
  'Dasharatha now wanted to crown Rama as the prince. However, Bharatas mother is Kaikeyi, who resents Rama being the crown prince and sends him to the forests for vanvaas for fourteen years.'
]
const Q8 = [
  'One day Rama and Lakshmana wounded a rakshasas (demon) princess who tried to seduce Rama. But they refused and as she went on to kill Sita in anguish, Lakshmana cut her nose. She flew to Lanka to her brother Ravana for revenge from Rama and Lakshmana.'
]
const Q9 = [
  'Ravana sent his uncle Mareecha in the form of a golden deer to attract Sita.'
]
const Q10 = [
  'Lakshmana drew a protection border for Sita for her protection from any negative energy/ entity.'
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
 
  if (message.includes('tell me about question two') || message.includes('question two') || message.includes('tell me about question 2') || message.includes('question 2') || message.includes('tell me about question to')) {
    const finalText = Q2[Math.floor(Math.random() * Q2.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question three') || message.includes('question three') || message.includes('tell me about question 3') || message.includes('question 3')) {
    const finalText = Q3[Math.floor(Math.random() * Q3.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question four') || message.includes('question four') || message.includes('tell me about question 4') || message.includes('question 4')) {
    const finalText = Q4[Math.floor(Math.random() * Q4.length)]
    speech.text = finalText
  }
  speech.volume = 1
  speech.rate = 1
  
  if (message.includes('tell me about question five') || message.includes('question five') || message.includes('tell me about question 5') || message.includes('question 5')) {
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
