import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { GenderSearchForm } from './GenderSearchForm';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

			<main className='App-main'>
				<GenderSearchForm />
			</main>

			<footer className='App-footer'>
				<div className='container'>
					<div className='footer-body'>
						<div className='footer-copyright'>
							&copy; 2022
						</div>
						<div className='footer-social_links'>
							<a className='social_link' href='https://github.com/Dauhaliavets'>Github</a>
						</div>
					</div>
				</div>
			</footer>
			
    </div>
  )
}

export default App
