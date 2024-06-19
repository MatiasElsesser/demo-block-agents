import { Handle, Position } from 'reactflow'
import { capitalizeFirstLetter } from '../mockups/utils'
import './BlockFunction.css'

export const BlockFunction = ({ data, isConnectable }) => {
  const { name, variables } = data
  return (
    <div className='block-function'>
      <h1 className='function-name'>{capitalizeFirstLetter(name)}</h1>
      <p className='function-variables'><b>Variables:</b> {variables}</p>
      <div className='handles'>
        <Handle position={Position.Right} type='source' />
        <Handle position={Position.Left} type='target' />
      </div>
    </div>
  )
}
