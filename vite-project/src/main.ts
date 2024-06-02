import './style.css'
import typescriptLogo from './typescript.svg'
import sharkLogo from './shark.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
  <h1>Shark Game</h1>

    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${sharkLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
   
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click the Shark to get points
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
