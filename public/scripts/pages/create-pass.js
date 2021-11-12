function CreateRoomPage () {
  const passButton = document.getElementById('passButton')
  const room_pass = document.getElementById('room-pass')

  room_pass.addEventListener('keyup', e => {
    const passRoom = room_pass.value
    const validIdLength = passRoom.length >= 1

    if (validIdLength) {
      passButton.disabled = false
    } else {
      passButton.disabled = true
    }
  })

  passButton.disabled = true
}

export default CreateRoomPage()

