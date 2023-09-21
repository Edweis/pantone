const colors = require('./colors-source.json');
const fs = require('fs')

const toHex = (color) => {
  const match = /\((\d+), *(\d+), *(\d+)\)/.exec(color);
  if (match == null) throw Error('Unmatched color ' + color)
  const [, r, g, b] = match;
  const rh = Number(r).toString(16).padStart(2, '0')
  const gh = Number(g).toString(16).padStart(2, '0')
  const bh = Number(b).toString(16).padStart(2, '0')
  return rh + gh + bh;
}

const nextColors = Object.fromEntries(
  Object.entries(colors).map(([key, value]) => {
    if (value.startsWith('(')) return [key, toHex(value)]
    else return [key, value]
  })
)

fs.writeFileSync('colors-formated.json', JSON.stringify(nextColors))