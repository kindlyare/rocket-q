function enterRoomPage () {
  const roomInput = document.getElementById('room-number')
  const roomInputMessage = document.getElementById('message')
  const enterRoomButton = document.getElementById('enter-room')

  roomInput.addEventListener('keyup', e => {
    const roomId = roomInput.value
    const validIdLength = roomId.length === 6

    if (validIdLength) {
      roomInputMessage.innerHTML = ""
      enterRoomButton.disabled = false
    } else {
      roomInputMessage.innerHTML = "Cada código tem apenas 6 números"
      enterRoomButton.disabled = true
    }
  })

  enterRoomButton.disabled = true
}

export default enterRoomPage()