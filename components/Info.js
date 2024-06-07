import React from "react"

export default function Info() {
    return (
        <div className="component">
            <img className="info--image" src="../images/photo.jpg" />
            <h1 className="info--name">Chris Stylianou</h1>
            <p className="info--title">Aspiring Tech Founder</p>
            <a className="info--website" href="https://github.com/BiggestChris"><p>github.com/BiggestChris</p></a>
            <button className="info--button"><i class="fa fa-envelope"></i><span className="info--email">Email</span></button>
        </div>
    )
}