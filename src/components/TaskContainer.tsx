import { useDispatch } from 'react-redux';
import { completeTask, declineTask } from '../taskSlice';

interface TaskContainerProps {
  title: string;
  tasks: { id: number; name: string }[];
  taskStatus: 'tasks' | 'completed' | 'declined';
}

const TaskContainer: React.FC<TaskContainerProps> = ({ title, tasks, taskStatus }) => {
  const dispatch = useDispatch();

  const handleComplete = (id: number) => {
    dispatch(completeTask(id));
  };

  const handleDecline = (id: number) => {
    dispatch(declineTask(id));
  };

  return (
    <div style={{ width: '30%', border: '1px solid black', padding: '10px' }}>
      <h3>{title}</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {task.name}
            {taskStatus === 'tasks' && (
            <div>
              <button onClick={() => handleComplete(task.id)} style={{ color: 'green' }}>
                ✅
              </button>
              <button onClick={() => handleDecline(task.id)} style={{ color: 'red' }}>
                ❌
              </button>
            </div>
        )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskContainer;
