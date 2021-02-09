import createElement from '../../lib/createElement'
import homeSvg from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSvg from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSvg from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSvg from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'
import './Navigation.css'

const buttonsConfig = [
  { text: 'Home', svgPath: homeSvg },
  { text: 'Bookmarks', svgPath: bookmarkSvg },
  { text: 'Create', svgPath: createSvg },
  { text: 'Settings', svgPath: settingsSvg },
]

export default function Navigation(onNavigate) {
  // destructuring assignment
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    // Array mit 4 HTML-Elementen erstellen
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    ) // HTML-Element erzeugen props in Button Bild und text
    button.addEventListener('click', () => onNavigate(text)) // nach dreaußen geschickt nur bei navigieren
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
