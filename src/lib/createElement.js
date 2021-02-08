export default function createElement(type, props, ...children) {
  // Sachen gesamelt
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children) // Sachen verteilt
  return el
}
