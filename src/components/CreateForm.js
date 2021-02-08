import createElement from '../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const el = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>Question:
    <input name="question" placeholder="Your question">
    </label>
    <label>Answer:
    <input name="answer" placeholder="Your answer">
    </label>
    <button>Create Question</button>`,
  })
  return el
}
