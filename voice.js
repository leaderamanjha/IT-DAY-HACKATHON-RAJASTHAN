const voice_speech = (text_data)=>{
    const x = text_data.innerText
    let utterance = new SpeechSynthesisUtterance(x)
    speechSynthesis.speak(utterance)
}