import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const titleEl = createElement('h1', {
    className: 'Header__title',
    innerText: title,
  })
  const subtitleEl = createElement('span', {
    className: 'Header__subtitle',
    innerText: subtitle,
  })

  const el = createElement(
    'header',
    { className: 'Header' },
    titleEl,
    subtitleEl
  )

  return el
}
