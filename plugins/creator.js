let handler = function (m) {
  // this.sendContact(m.chat, '6285865829368', 'David', m)
  this.sendContact(m.chat, '0', 'Mark', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
