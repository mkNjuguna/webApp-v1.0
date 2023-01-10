import React from "react"
import '../src/style.css'
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card"
import exportedCardData from "./data";

export default function App() {

    const cards = exportedCardData.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                // img={item.coverImg}
                // iconImg={item.iconImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // ellipse={item.ellipseImg}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            {/*<Hero/>*/}
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}