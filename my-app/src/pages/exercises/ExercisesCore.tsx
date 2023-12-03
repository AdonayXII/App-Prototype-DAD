import Header from "../../components/header/Header"
import "./Exercises.css"

const ExercisesCore = () => {
    return (
        <>
            <Header></Header>
            <div className="content">
                <h1>EXERCISES FOR CORE</h1>
                <div className="exercisesCore">
                    <h2>KNEE CRUNCHS</h2>
                    <img src="./img/absknee.jpg" ></img>
                    <p>short video tutorial</p>
                    <h2>DEGREE LOW BACK HYPEREXTENSION</h2>
                    <img src="./img/degreelowback.webp"></img>
                    <p>short video tutorial</p>
                </div>
            </div>
        </>
    )
}

export default ExercisesCore