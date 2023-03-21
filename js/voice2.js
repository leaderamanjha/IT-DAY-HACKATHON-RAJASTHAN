const btn = document.querySelector('.talk')
const content = document.getElementById('cont')

const greeting = ['For understanding the question just say... tell me about question and its number.']
const Q1 = [
  'The Yuddha kanda (also referred to as Lanka kanda) is one of the main episodes in the great epic Ramayana. The Yuddha Kandam narrates the Ramayana War between the army of Rama and the army of Ravana. Having received Hanumans report on Sita, Rama and Lakshmana proceed with their allies towards the shore of the southern sea. There they are joined by Ravanas renegade brother Vibhishana. But they encounter an obstacle on their path. There is a sea they have to cross to reach their destination that is Sri Lanka'
]
const Q2 = [
  'Jambavan asks the monkeys Nala and Nila to start work on constructing the bridge over the sea. The apes named Nala and Nila construct a floating bridge (known as Rama Setu) across the sea, using stones that floated on water because they had Ramas name written on them.'
]
const Q3 = [
  'The princes and their army cross over to Lanka. A lengthy war ensues. During a battle, Ravanas son Indrajit hurls a powerful fire weapon at Lakshmana, who is badly wounded.'
]
const Q4 = [
  'So Hanuman assumes a gigantic form and flies from Lanka to the Himalayas for taking required medicinal herb for Laxman.'
]
const Q5 = [
  'Upon reaching Mount Sumeru, Hanuman was unable to identify the herb that could cure Lakshmana and so decided to bring the entire mountain back to Lanka.'
]
const Q6 = [
  'Ravana was having 10 heads depicting his every expression and feeling on each head, Shree Ram tried to kill Ravana ten times by cutting his heads using arrows but nothing use to happen then Rama devotee Vibishan said him to attack on Ravana navel because Ravana navel was full of Amrit which use to help Ravana for surviving and thats why Shree Rama attacked Ravanas navel using Brahmastra and killed Ravana'
]
const Q7 = [
  'Eventually, the war ends when Rama kills Ravana. '
]
const Q8 = [
  'Then the most awaited moment arrives and Ram happily meets sita.'
]
const Q9 = [
  'On meeting Sita, Rama agrees to Sitas request to undergo an Agni Pariksha (test of fire) to prove her chastity, as he wants to get rid of the rumors surrounding her purity.'
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
