import Header from "../../components/header/Header"
import "./Exercises.css"

const ExercisesPush = () => {
    return (
        <>
            <Header></Header>
            <div className="content">
                <h1>EXERCISES FOR PUSH</h1>
                <div className="exercisesPush">
                    <h2>BENCH PRESS</h2>
                    <img src="./img/benchpress.jpg" ></img>
                    <p>short video tutorial</p>
                    <h2>SHOULDER PRESS</h2>
                    <img src="./img/shoulderpress.jpg"></img>
                    <p>short video tutorial</p>
                    <h2>CABLE PUSHDOWN</h2>
                    <img src="./img/cablepushdown.jpg"></img>
                    <p>short video tutorial</p>
                </div>
            </div>
        </>
    )
}

export default ExercisesPush