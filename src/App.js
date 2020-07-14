import React from 'react';

function Food({ name, picture, rating }) {
    return ( < div >
        <h2> I like { name } </h2>
        <h4> { rating }/5.0 </h4>
        <img src = { picture } alt = { name }/>
        </div>);
    }

    const foodILike = [{
            id: 1,
            name: "Kimchi",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiXWgh16oNDLdhSZwvLtcJCIEmFZ5utG0hzw&usqp=CAU",
            rating: 4.8
        },
        {
            id: 2,
            name: "samgyopsal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSygiK7oKoRxwNssUNIsV-HeK48MsOi7A6VLg&usqp=CAU",
            rating: 5.0
        },
        {
            id: 3,
            name: "Bibimbap",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg",
            rating: 3.4
        }
    ]

    Food.proptTypes = {

    }

    function renderFood(dish) {
        console.log(dish);
        return <Food key = { dish.id }
        name = { dish.name }
        picture = { dish.image }
        rating = { dish.rating }
        />;
    }

    function App() {
        return ( <
            div > { foodILike.map(renderFood) } <
            /div> 
        );
    }

    export default App;