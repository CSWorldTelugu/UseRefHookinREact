import { useRef } from "react"
import './App.css'

function App() {

    let arr = new Array(10).fill(null)


    let headings = useRef([])


    function changeh1stye(e) {
        for (let ele of headings.current) {
            ele.classList.remove('primary')
        }
        e.target.classList.add('primary')
    }



    return (

        <>

            {
                arr.map(
                    (ele, i) => {
                        return (
                            <h1 ref={(el) => headings.current[i] = el} onClick={(eve) => {

                                changeh1stye(eve)
                            }}>
                                This is heading {i + 1}</h1>
                        )

                    }
                )
            }

        </>
    )




}








export default App