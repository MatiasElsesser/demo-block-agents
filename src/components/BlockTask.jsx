import { Handle, Position } from 'reactflow'
import './BlockTask.css'

export const BlockTask = ({ data, isConnectable }) => {
  const { taskName, taskContext } = data
  return (
    <div className='block-task'>
      <h1 className='task-name'>{taskName}</h1>
      <p className='task-context'>{taskContext}</p>
      <div className='handles'>
        <Handle position={Position.Right} type='source' />
        <Handle position={Position.Left} type='target' />
      </div>
    </div>
  )
}
