let handler =  m => m.reply(`
╭─「 Donasi 」
│ • DANA [085601517617]
│ • Shopeepay [085601517617]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
