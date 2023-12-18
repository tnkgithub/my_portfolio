// import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    const menuList = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Works", href: "#works" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <Header list={menuList} />
            <Home />
        </>
    );
}

export default App;
