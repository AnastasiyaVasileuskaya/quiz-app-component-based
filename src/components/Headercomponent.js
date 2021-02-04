import './Headercomponent.css'

export default function Headercomponent() {
  const el = document.createElement('header')
  el.className = 'Headercomponent'
  el.innerHTML = `
    <h1 class="Headercomponent__title">
    Quiz App
    <span class="Headercomponent__subtitle">May the best win!</span>
  </h1>
    `
  return el
}
