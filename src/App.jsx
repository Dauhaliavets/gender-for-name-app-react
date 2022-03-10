import './App.css'
import { GenderSearchForm } from './components/SearchForm/GenderSearchForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
			<Header />
			<main className='App-main'>
				<GenderSearchForm />
			</main>
			<Footer />
    </div>
  )
}

export default App
