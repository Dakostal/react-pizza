import React, { useState } from "react"

const categories = [
    {id: 1, name: 'Все', active: false},
    {name: 'Мясные', active: false},
    {name: 'Вегетарианская', active: false},
    {name: 'Гриль', active: false},
    {name: 'Острые', active: false},
    {name: 'Закрытые', active: false}
]

export const Categories =()=> {

    const[isActive, setIsActive] = useState(false)

    const onClickCategories = () => {
        setIsActive(isActive === false)
    }
    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((cat, i) => (
                        <li
                            onClick={onClickCategories}
                            className={isActive ?  'active' : cat.active}
                            key={i}
                        >{cat.name}</li>
                    ))}
                </ul>    
            </div>
        </>
    )
}