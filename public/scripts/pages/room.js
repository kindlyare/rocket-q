export default function RoomPage () {
  const questionInput = document.getElementById('question')
  const sendQuestionButton = document.getElementById('send-question')

  const handleSendButton = e => {
    const questionHasValue = questionInput.value
    if (!questionHasValue) {
      sendQuestionButton.disabled = true
    } else {
      sendQuestionButton.disabled = false
    }
  }


  sendQuestionButton.disabled = false

  questionInput.addEventListener('keyup', handleSendButton)

  
  handleSendButton()
}

