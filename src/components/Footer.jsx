import React from "react";

const currentYear = new Date().getFullYear()

function Footer(){
    return (
        <footer>
            <p>Copyright © 2022 {currentYear}</p>
        </footer>
    )
}

export default Footer