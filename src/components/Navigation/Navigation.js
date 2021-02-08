import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' }, // Pfad zu svg
  { svgPath: bookmarkSVG, text: 'Bookmarks' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  // destructuring assignment
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    // Array mit 4 HTML-Elementen erstellen
    const button = createElement('img', { src: svgPath, alt: text }) // HTML-Element erzeugen props in Button Bild und text
    button.addEventListener('click', () => onNavigate(text)) // nach dreaußen geschickt nur bei navigieren
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
