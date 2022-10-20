import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './assets/scss/style.scss'
import { App } from './compenents/App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 40, left: '50%'}} className="title font-bold text-4xl md:text-6xl">
        My gallery
      </div>
      {/* <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>10/17/2021</div> */}
    </div>
  )
}

ReactDOM.render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>,
  document.getElementById('root')
)
