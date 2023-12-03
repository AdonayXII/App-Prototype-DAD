import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import RoutineDays from './pages/routinedays/RoutineDays';
import ExercisesPush from './pages/exercises/ExercisesPush';
import ExercisesPull from './pages/exercises/ExercisesPull';
import ExercisesLegs from './pages/exercises/ExercisesLegs';
import ExercisesCore from './pages/exercises/ExercisesCore';
import Protein from './pages/supplementation/Protein';
import Creatine from './pages/supplementation/Creatine';
import Bcaa from './pages/supplementation/Bcaa';
import Glutamine from './pages/supplementation/Glutamine';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/'></Route>
        <Route path='/routinedays/:id' element={<RoutineDays />}></Route>
        <Route path='/exercisePush' element={<ExercisesPush />}></Route>
        <Route path='/exercisesPull' element={<ExercisesPull />}></Route>
        <Route path='/exercisesLegs' element={<ExercisesLegs />}></Route>
        <Route path='/exercisesCore' element={<ExercisesCore />}></Route>
        <Route path='/protein' element={<Protein />}></Route>
        <Route path='/creatine' element={<Creatine />}></Route>
        <Route path='/bcaa' element={<Bcaa />}></Route>
        <Route path='/glutamine' element={<Glutamine />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
