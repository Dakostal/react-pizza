import './App.css'
import './scss/app.scss'
import { Header } from './components/header/Header'
import { Categories } from './components/categories/Categories'
import { Sort } from './components/sort/Sort'
import { PizaaBlock } from './components/pizzaBlock/PizzaBlock'

function App() {

  return (
    <>
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
          <Categories />  
          <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
          <PizaaBlock title="Мексиканская" price={345}/>
          <PizaaBlock title="Сырная" price={320}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
