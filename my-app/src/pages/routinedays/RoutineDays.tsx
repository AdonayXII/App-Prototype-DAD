import { Link, useParams } from 'react-router-dom';
import data from '../../helpers/data';
import { useState } from 'react'
import Header from '../../components/header/Header';
import { DownOutlined } from '@ant-design/icons';
import "./RoutineDays.css"

const RoutineDays = () => {
    const { id } = useParams();
    const routine = data.find(routine => routine.id === id);

    const [contentMenu, setContentMenu] = useState(false)

    const toggleRoutinesMenu = () => {
        setContentMenu(!contentMenu)
    }

    return (
        <>
            <div className='containerRoutine'>
                <div className='returnHome'>
                    <Header />
                </div>
                <div className='title'>
                    <h1>{routine?.title} ROUTINES</h1>
                </div>
                <div className='content'>

                    {routine?.routines.map((routine, index) => (
                        <div key={index}>
                            <div className='routineNameContent'>
                                <h2 className='routineName'>
                                    {routine.name}
                                    <DownOutlined onClick={toggleRoutinesMenu} className='routinesButton' />
                                </h2>
                            </div>
                            <nav className={`content-nav ${contentMenu ? 'isActive' : ''}`}>
                                {routine.days.map((day, index) => (
                                    <div key={index}>
                                        {Object.values(day).map((dayDetail, index) => (
                                            <div key={index}>
                                                <h3>{dayDetail.day}</h3>
                                                {dayDetail.exercises.map((exercise, index) => (
                                                    <ul key={index}>
                                                        {Object.values(exercise).map((step, index) => (
                                                            <li key={index}>{step}</li>
                                                        ))}
                                                    </ul>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

};

export default RoutineDays;
