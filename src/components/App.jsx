import React from "react";
// import Header from "./Header";
// import Footer  from "./Footer";
// import Note from "./note"
import Card from "./Card";
import Avatar from "./avatar";

function App() {
    return(
        <div>
            {/* <Header /> */}
            {/* <Note /> */}
            <h1 className="heading">My contact</h1>
            <Avatar img={require('../image/pic4.jpg')}/>
            <Card name="War Time" img={require('../image/pic1.jpg')} tell="0923001212" email="Pak@abc.com" />
            <Card name="Warior's" img={require('../image/pic2.jpg')} tell="0923001212" email="Pak@abc.com" />
            <Card name="Historic" img={require('../image/pic3.jpg')} tell="0923001212" email="Pak@abc.com" />
            {/* <Footer /> */}
        </div>
    )
}

export default App