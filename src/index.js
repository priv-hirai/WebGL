import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import './assets/scss/style.scss'
import { App } from './compenents/App'
import { Header } from './compenents/header'

function Overlay() {
  return (
    // pointer-events-none
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-[40px] left-[50%] translate-x-[-50%] font-bold text-4xl md:text-6xl">
        My gallery
      </div>
    </div>
  )
}

ReactDOM.render(
  <>
    <Header />
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>,
  document.getElementById('root')
)
