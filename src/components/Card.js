import React from "react"


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>} {/*If spot is zero, the SOLD OUT badge will display, if the spot is not zero e.g. 5, the SOLD OUT badge will not display*/}
            <img className="card--image" alt="" src={props.coverImg}/>
            <div className="card--stats">
                <img className="card--star" alt="" src={props.iconImg}/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}