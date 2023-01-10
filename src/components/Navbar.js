import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" alt="airbnb-logo" src="/images/airbnb-logo.png"></img> {/*add folder name & image name, React will resolve the path since it's in "public" folder*/}
        </nav>
    )
}