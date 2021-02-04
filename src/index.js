import Headercomponent from './components/Headercomponent'
import Button from './components/Button'

const headercomponent = Headercomponent()

document.body.append(headercomponent)

const button1 = Button('Click me!')
const button2 = Button('Hold me!')
document.body.append(button1)
document.body.append(button2)
