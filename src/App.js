import { useRef, useState } from "react"
import './App.css'

function App() {

    let h1ele = useRef(null);


    let x = useRef(10);

    const [y, setY] = useState(100);

    let z = 1000;

    return (
        <>
            <h1 ref={h1ele} className="active" >This is heading tag</h1>

            <button onClick={() => {
                console.log(h1ele)

                console.dir(h1ele.current)

                h1ele.current.classList.toggle('active')


            }} > click</button>


            <h1>x value:{x.current}</h1>
            <h1>z value:{z}</h1>


            <button onClick={() => {


                x.current = x.current + 10;

                console.log(x.current);

                z = z + 1000

                setY(y + 100)

            }}  >increment</button>


        </>
    )
}








export default App