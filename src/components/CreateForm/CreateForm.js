import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>Question:
    <input name="question" placeholder="Your question">
    </label>
    <label>Answer:
    <input name="answer" placeholder="Your answer">
    </label>
    `,
  })
  form.append(Button('Create!'))
  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value
    onSubmit(question, answer)
  })
  return form
}
