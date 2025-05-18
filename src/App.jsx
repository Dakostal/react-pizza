import './App.css'
import './scss/app.scss'
import { Header } from './components/header/Header'
import { Categories } from './components/categories/Categories'
import { Sort } from './components/sort/Sort'
import { PizzaBlock } from './components/pizzaBlock/PizzaBlock'
import pizzas from './assets/pizza.json'

function App() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzas.map((obj) => (
                                <PizzaBlock
                                    key={obj.id}
                                    title={obj.title}
                                    price={obj.price}
                                    image={obj.imageUrl}
                                    sizes={obj.sizes}
                                    types={obj.types}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
