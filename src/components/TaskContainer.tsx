import { useDispatch } from 'react-redux';
import { completeTask, declineTask, undoTaskFromCompleted } from '../store/taskSlice';
import './taskstyles.css'

interface TaskContainerProps {
  title: string;
  tasks: { id: number; name: string }[];
  taskStatus: 'tasks' | 'completed' | 'declined';
}

function TaskContainer({ title, tasks, taskStatus }: TaskContainerProps) {
  const dispatch = useDispatch();

  const handleComplete = (id: number) => {
    dispatch(completeTask(id));
  };

  const handleDecline = (id: number) => {
    dispatch(declineTask(id));
  };

  const handleUndoTaskFromCompleted = (id: number) => {
    dispatch(undoTaskFromCompleted(id))
  }
  console.log(tasks);

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
            {taskStatus === 'completed' && (
              <div>
                <button className='undo' onClick={() => handleUndoTaskFromCompleted(task.id,)}>
                  ✅
                </button>
              </div>
            )}
             {taskStatus === 'declined' && (
              <div>
                <button className='undo' onClick={() => handleUndoTaskFromCompleted(task.id,)}>
                  ✅
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
