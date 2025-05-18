import React, { useState } from "react"

const categories = [
    {name: 'Все'},
    {name: 'Мясные'},
    {name: 'Вегетарианская'},
    {name: 'Гриль'},
    {name: 'Острые'},
    {name: 'Закрытые'}
]

export const Categories =()=> {

    const[isActive, setIsActive] = useState(0)

    const onClickCategories = (index) => {
        setIsActive(index)
        console.log(setIsActive);
    }
    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((cat, i) => (
                        <li
                            onClick={()=>onClickCategories(i)}
                            className={isActive === i ? 'active' : ''}
                            key={i}
                        >{cat.name}</li>
                    ))}
                </ul>    
            </div>
        </>
    )
}