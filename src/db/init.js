const Database = require('./config')

const initDb = {
  async init() {
    // await e async sempre ficam juntos = gemeos siameses
    const db = await Database() // await = ele espera o resultado do DataBase

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      password TEXT
    
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`)

    await db.close()
  }
}

initDb.init()

// comando SQL MAIUSCULO não SQL minusculo
