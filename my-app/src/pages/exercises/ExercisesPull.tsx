import Header from "../../components/header/Header"
import "./Exercises.css"

const ExercisesPull = () => {
    return(
        <>
            <Header></Header>
            <div className="content">
                <h1>EXERCISES FOR PUSH</h1>
                <div className="exercisesPull">
                    <h2>LAT PULLDOWNS</h2>
                    <img src="./img/latpulldowns.jpg" ></img>
                    <p>short video tutorial</p>
                    <h2>HAMMER CURLS</h2>
                    <img src="./img/hammercurls.jpg"></img>
                    <p>short video tutorial</p>
                </div>
            </div>
        </>
    )
}

export default ExercisesPull