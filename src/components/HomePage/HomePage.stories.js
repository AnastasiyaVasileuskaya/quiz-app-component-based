import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage', // um Kategorie zu machen
  component: HomePage,
}

export const base = () =>
  HomePage([
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
    {
      question: 'This could be your question',
      answer: 'This could be your answer',
    },
  ]).el
// damit in storybook Karten sichtbar werden
