import createElement from '../../lib/createElement'
import CreateForm from '../CreateForm'
import './CreatePage.css'

export default function CreatePage(onSubmit, hidden) {
  // enmalig bei Erzeugung der Page reingereichte hidden
  const form = CreateForm(onSubmit)
  const el = createElement('main', { className: 'CreatePage', hidden }, form)

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
