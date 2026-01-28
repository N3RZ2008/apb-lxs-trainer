import { useState } from "react"

const avaliableCases = ["Case 1", "Case 2", "Case 3", "Case 4"]

function randomNumber(max) {
    return Math.floor(Math.random() * (max))
}

function Home() {
    const [currentCase, setCurrentCase] = useState("none")

    function changeCase() {
        setCurrentCase(avaliableCases[randomNumber(4)])
    }

    return <>
        <h1>LXS Trainer</h1>
        <p>{currentCase}</p>
        <button onClick={changeCase}>change case</button>
    </>
}

export default Home