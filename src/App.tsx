import { useSelector } from 'react-redux';
import TaskContainer from './components/TaskContainer';
import { RootState } from './store';

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const completed = useSelector((state: RootState) => state.tasks.completed);
  const declined = useSelector((state: RootState) => state.tasks.declined);

  const totalCompleted = completed.length;
  const quota = 5;
  const progressPercentage = (totalCompleted / quota) * 100;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
        <TaskContainer title="Tasks" tasks={tasks} taskStatus="tasks" />
        <TaskContainer title="Completed" tasks={completed} taskStatus="completed" />
        <TaskContainer title="Declined" tasks={declined} taskStatus="declined" />
      </div>

      <div style={{ width: '30%', marginTop: '20px' }}>
        <h3>{totalCompleted >= quota ? "Your daily task quota is complete" : `Completed: ${totalCompleted} / ${quota}`}</h3>
        <div
          style={{
            height: '20px',
            width: '100%',
            backgroundColor: '#e0e0e0',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progressPercentage}%`,
              backgroundColor: progressPercentage >= 100 ? 'green' : 'orange',
              transition: 'width 0.5s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
