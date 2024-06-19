import { Handle, Position } from 'reactflow'
import './Agent.css'

export const Agent = ({ data, isConnectable }) => {
  const { name, context } = data
  return (
    <div className='agent-card'>
      <div className='card-content'>
        <h1 className='agent-name'>{name}</h1>
        <p className='agent-context'>{context}</p>
      </div>
      <div className='handles'>
        <Handle position={Position.Right} type='source' />
        <Handle position={Position.Left} type='target' />
      </div>
    </div>
  )
}
