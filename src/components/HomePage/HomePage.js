import createElement from '../../lib/createElement'
import Card from '../Card'
import './HomePage.css'

export default function HomePage(cards) {
  // initial Karten reinreichen
  const el = createElement('main', { calssName: 'HomePage' })

  cards && setCards(cards) // wenn cards gibt dann ruf diese Funktion auf

  function setCards(cards) {
    const cardElements = cards.map((
      { question, answer } // holen q una a raus
    ) => Card(question, answer))
    el.innerHTML = ''
    el.append(...cardElements)
  }

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    setCards,
    show,
    hide, // damit App entscheidet ob HomePage hidden
  }
}
