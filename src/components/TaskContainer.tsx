import { useDispatch } from 'react-redux';
import { completeTask, declineTask } from '../store/taskSlice';
import './taskstyles.css'

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
    <div className='task-styles'>
      <h3>{title}</h3>
      <ul>
        {tasks.map(task => (
          <li className='list-styles' key={task.id}>
            {task.name}
            {taskStatus === 'tasks' && (
            <div>
              <button className='approve' onClick={() => handleComplete(task.id)}>
                ✅
              </button>
              <button className='decline' onClick={() => handleDecline(task.id)}>
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
