const btn = document.querySelector('.talk')
const content = document.getElementById('cont')

const greeting = ['For understanding the question just say... tell me about question and its number.']
const Q1 = [
  'Ravana came in the form of a sage and forcefully kidnapped Sita and flew away to Lanka.'
]
const Q2 = [
  'Mid-way, Jatayu, a humble bird, tried to save Sita but Ravana cut his wings with his sword and the injured Jatayu fell on the ground.'
]
const Q3 = [
  'When Rama and Lakshman reached the hut and found that Sita wasn’t there, they went in the search of her. During their wanderings, the princes came upon a group of monkeys who showed them some ornaments of Sitas: the monkeys had seen a beautiful lady crying and dropping her ornaments from a chariot in the sky that was being driven southwards by a demon.'
]
const Q4 = [
  'Among the monkeys was Hanuman, who ultimately located Sitas whereabouts to be in Ravanas kingdom in Lanka.'
]
const Q5 = [
  'Rama gave Hanuman his ring, to give to Sita. Monkeys and bears decided that since Hanuman was the son of the wind god and he was good at jumping and flying he must leap to Lanka to look for Sita. Hanuman prayed to his father and flew to Lanka, leaping over the ocean and escaping from several devouring demons that he met on the way'
]
const Q6 = [
  'As the demons captured Hanuman, they decided to burn His tail. As they wrapped cloth on his tail, he grew it longer and longer and made it a big hassle for the demons to set it on fire.'
]
const Q7 = [
  'Before returning to the mainland, Hanuman sets fire to the whole city of Lanka.'
]
const Q8 = [
  'Once free Hanuman dipped his tail into the sea, and leapt back to Rama, Lakshman, and the bears and tells Rama where Sita is. '
]
const Q9 = [
  'Hanuman on return told Rama about Sita’s condition and Rama decided to go to Lanka to save her. Rama, Lakshmana and the vanar army build a causeway from the tip of India to Lanka.         Pumice stones are said to be used in the Ram-Setu which float on water.'
]
const Q10 = [
  'The Vanar Sena, along with many animals, squirrels, and even insects contributed to the Ram-Setu bridge by arranging the stones which stretched over 30 miles.'
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
 
  if (message.includes('tell me about question two') || message.includes('question to') || message.includes('tell me about question 2') || message.includes('question 2')) {
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
