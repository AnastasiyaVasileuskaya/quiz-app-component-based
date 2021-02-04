import Header from './components/Header'
import Card from './components/Card'

const header = Header('Quiz App', 'May the best win!')

document.body.append(header)

const card = Card('Frage', 'Antwort')

document.body.append(card)
