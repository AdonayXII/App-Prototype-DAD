import './Home.css'
import { DownOutlined } from '@ant-design/icons'
import { useState } from 'react'

const Home = () => {
    const [routinesMenu, setRoutinesMenu] = useState(false)
    const [exercisesMenu, setExercisesMenu] = useState(false)
    const [supplementationMenu, setSupplementationMenu] = useState(false)

    const toggleRoutinesMenu = () => {
        setRoutinesMenu(!routinesMenu)
    }

    const toggleExercisesMenu = () => {
        setExercisesMenu(!exercisesMenu)
    }

    const toggleSupplementationMenu = () => {
        setSupplementationMenu(!supplementationMenu)
    }

    return (
        <>
            <div className="container">
                <div>
                    <div className='Routines'>
                        <p>ROUTINES</p>
                        <DownOutlined onClick={toggleRoutinesMenu} className='routinesButton' />
                    </div>
                    <nav className={`Routines-nav ${routinesMenu ? 'isActive' : ''}`}>
                        <ul className="Routines-ul">
                            <li className="Routines-li"><a href="/3 DAYS" className="Routines-a">3 DAYS</a></li>
                            <li className="Routines-li"><a href="/4 DAYS" className="Routines-a">4 DAYS</a></li>
                            <li className="Routines-li"><a href="/5 DAYS" className="Routines-a">5 DAYS</a></li>
                            <li className="Routines-li"><a href="/6 DAYS" className="Routines-a">6 DAYS</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className='Exercises'>
                        <p>EXERCISES</p>
                        <DownOutlined onClick={toggleExercisesMenu} className='exercisesButton' />
                    </div>
                    <nav className={`Exercises-nav ${exercisesMenu ? 'isActive' : ''}`}>
                        <div>

                            <div className='ExercisesPushMuscleGroup'>
                                <ul className="ExercisesPush-ul">
                                    <li className="ExercisesPush-li">PUSH</li>
                                    <div className='exercisesPushMuscles'>
                                        <li className="ExercisesPush-li"><a href="/Back" className="ExercisesPush-a">CHEST</a></li>
                                        <li className="ExercisesPush-li"><a href="/Legs" className="ExercisesPush-a">SHOULDERS</a></li>
                                        <li className="ExercisesPush-li"><a href="/Arms" className="ExercisesPush-a">TRICEPS</a></li>
                                    </div>
                                </ul>
                            </div>

                            <div className='ExercisesPullMuscleGroup'>
                                <ul className="ExercisesPull-ul">
                                    <li className="ExercisesPull-li">PULL</li>
                                    <div className='exercisesPullMuscles'>
                                        <div className='exercisesPullMusclesLeft'>
                                            <li className="ExercisesPull-li"><a href="/Back" className="ExercisesPull-a">BACK</a></li>
                                        </div>
                                        <div className='exercisesPullMusclesRight'>
                                            <li className="ExercisesPull-li"><a href="/Legs" className="ExercisesPull-a">BICEPS</a></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                            <div className='ExercisesLegMuscleGroup'>
                                <ul className="ExercisesLeg-ul">
                                    <li className="ExercisesLeg-li"><a href="/Chest" className="ExercisesLeg-a">LEGS</a></li>
                                    <div className='exercisesLegMuscles'>
                                        <div className='exercisesLegMusclesLeft'>
                                            <li className="ExercisesLeg-li"><a href="/Back" className="ExercisesLeg-a">CUADRICEPS</a></li>
                                            <li className="ExercisesLeg-li"><a href="/Legs" className="ExercisesLeg-a">ADDUCTOR</a></li>
                                        </div>
                                        <div className='exercisesLegMusclesRight'>
                                            <li className="ExercisesLeg-li"><a href="/Legs" className="ExercisesLeg-a">HAMSTRINGS</a></li>
                                            <li className="ExercisesLeg-li"><a href="/Legs" className="ExercisesLeg-a">ABDUCTOR</a></li>
                                        </div>
                                        <div className='exercisesLegMusclesBottom'>
                                            <li className="ExercisesLeg-li"><a href="/Arms" className="ExercisesLeg-a">CALVES</a></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className='ExercisesCoreMuscleGroup'>
                                <ul className="ExercisesCore-ul">
                                    <li className="ExercisesCore-li"><a href="/Chest" className="ExercisesCore-a">CORE</a></li>
                                    <div className='exercisesCoreMuscles'>
                                        <div className='exercisesCoreMusclesLeft'>
                                            <li className="ExercisesCore-li"><a href="/Legs" className="ExercisesCore-a">LUMBAR</a></li>
                                        </div>
                                        <div className='exercisesCoreMusclesRight'>
                                            <li className="ExercisesCore-li"><a href="/Back" className="ExercisesCore-a">ABS</a></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className='Supplementation'>
                    <p>SUPPLEMENTATION</p>
                    <DownOutlined onClick={toggleSupplementationMenu} className='supplementationButton' />
                </div>
                <div>
                    <nav className={`Supplementation-nav ${supplementationMenu ? 'isActive' : ''}`}>
                        <div className='supplementationGroup'>
                            <ul className="Supplementation-ul">
                                <div className='supplementationLeft'>
                                    <li className="Supplementation-li"><a href="/3 DAYS" className="Supplementation-a">PROTEIN</a></li>
                                    <li className="Supplementation-li"><a href="/5 DAYS" className="Supplementation-a">CREATINE</a></li>
                                </div>
                                <div className='supplementationRight'>
                                    <li className="Supplementation-li"><a href="/4 DAYS" className="Supplementation-a">BCAA</a></li>
                                    <li className="Supplementation-li"><a href="/6 DAYS" className="Supplementation-a">GLUTAMINE</a></li>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Home
