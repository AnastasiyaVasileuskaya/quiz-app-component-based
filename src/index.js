import Headercomponent from './components/Headercomponent'
import Button from './components/Button'

const headercomponent = Headercomponent()

document.body.append(headercomponent)

const button = Button('Click me!')

document.body.append(button)
