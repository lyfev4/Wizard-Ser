let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example:\n${usedPrefix + command} @918075168486`
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
