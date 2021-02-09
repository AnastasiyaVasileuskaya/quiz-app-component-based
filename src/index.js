import Header from './components/Header'
import Card from './components/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'
import CreateForm from './components/CreateForm'

const cards = [] // Benutzen onSubmit  Entsteht array
// Homepage bekommt array

const { el: headerEl } = Header('Quiz App') // Object

const navigation = Navigation(onNavigate) // dependency injection

const form = CreateForm(onSubmit)

const homePage = createElement('main', { className: 'HomePage', hidden: false })

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  renderCards()
}

function renderCards() {
  const cardElements = cards.map(({ question, answer }) =>
    Card(question, answer)
  )
  homePage.innerHTML = ''
  homePage.append(...cardElements)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
  }

  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
  }
}
