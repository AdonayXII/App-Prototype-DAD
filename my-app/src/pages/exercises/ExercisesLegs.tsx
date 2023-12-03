import Header from "../../components/header/Header"
import "./Exercises.css"

const ExercisesLegs = () => {
    return(
        <>
            <Header></Header>
            <div className="content">
                <h1>EXERCISES FOR LEGS</h1>
                <div className="exercisesLegs">
                    <h2>SQUAT</h2>
                    <img src="./img/squat.png" ></img>
                    <p>short video tutorial</p>
                    <h2>ROMANIAN DEADLIFT</h2>
                    <img src="./img/shoulderpress.jpg"></img>
                    <p>short video tutorial</p>
                </div>
            </div>
        </>
    )
}

export default ExercisesLegs