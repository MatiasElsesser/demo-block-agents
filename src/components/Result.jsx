import { Handle, Position } from 'reactflow'
import './Result.css'

export const Result = ({ data, isConnectable }) => {
  const { result, functions, callTask } = data
  return (
    <div className='result'>
      <h3>{result}</h3>
      {functions && functions.map((fun) => <p key={fun.NextFunction}>{fun.NextFunction}</p>)}
      <p>{callTask}</p>
      <div className='handles'>
        <Handle position={Position.Right} type='source' />
        <Handle position={Position.Left} type='target' />
      </div>
    </div>
  )
}
