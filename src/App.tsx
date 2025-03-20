import { useSelector } from 'react-redux';
import TaskContainer from './components/TaskContainer';
import { RootState } from './store';
import './App.css'

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const completed = useSelector((state: RootState) => state.tasks.completed);
  const declined = useSelector((state: RootState) => state.tasks.declined);

  const totalCompleted = completed.length;
  const quota = 5;
  const progressPercentage = (totalCompleted / quota) * 100;

  return (
    <div className='container-style'>
      <div className='cells-style'>
        <TaskContainer title="Tasks" tasks={tasks} taskStatus="tasks" />
        <TaskContainer title="Completed" tasks={completed} taskStatus="completed" />
        <TaskContainer title="Declined" tasks={declined} taskStatus="declined" />
      </div>

      <div className='status-style'>
        <h3>{totalCompleted >= quota ? "Your daily task quota is complete" : `Completed: ${totalCompleted} / ${quota}`}</h3>
        <div
          className='status-positioning'
          style={{
            height: '100%',
            width: `${progressPercentage}%`,
            backgroundColor: progressPercentage >= 100 ? 'green' : 'orange',
            transition: 'width 0.5s ease',
          }}
        ><div/>
        </div>
      </div>
    </div>
  );
};

export default App;
