// import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

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
            <About />
            <Skills />
        </>
    );
}

export default App;
