const Database = require('../db/config')

module.exports = {
  async index(req, res) {
    const db = await Database()
    const roomId = req.params.room
    const questionId = req.params.question
    const actions = req.params.actions
    const password = req.body.password

    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
    if (verifyRoom.password == password) {
      if (actions == 'delete') {
        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
      } else if (actions == 'check') {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
      }


      res.redirect(`/room/${roomId}`)
    } else {
      res.render('passwordincorrect', { roomId: roomId })
    }
  },

  async create(req, res) {
    const db = await Database()
    const question = req.body.question
    const roomId = req.params.room

    if (question){
      await db.run(`INSERT INTO questions(
        title,
        room,
        read
      )VALUES (
        "${question}",
        ${roomId},
        0
      )`)
    }
    

    res.redirect(`/room/${roomId}`)
  }
}
