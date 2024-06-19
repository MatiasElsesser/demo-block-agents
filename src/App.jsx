import React, { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow'
import FloatingEdge from './edges/floatingEdge/FloatingEdge'
import 'reactflow/dist/style.css'
import { Agent } from './components/Agent'
import { BlockTask } from './components/BlockTask'
import { BlockFunction } from './components/BlockFunction'
import { Result } from './components/Result'

const nodeTypes = {
  agentNode: Agent,
  blockTask: BlockTask,
  blockFunction: BlockFunction,
  resultNode: Result
}

const edgeTypes = {
  floatingEdge: FloatingEdge
}
const initialNodes = [

  {
    id: '1',
    type: 'agentNode',
    position: { x: 163, y: 620 },
    data: { name: 'SellProduct', context: 'You are an agent that will sell a product. You will behave as a professional sales person.' }
  },
  {
    id: '2',
    type: 'blockTask',
    position: { x: 176, y: 110 },
    data: {
      taskName: 'Ask for name and email',
      taskContext: 'You will ask for the name and email of the user. If the user isn’t sure about this, you will tell them that you need this information to continue and that it’s safe to share it.'
    }
  },
  {
    id: '3',
    type: 'resultNode',
    position: { x: 682, y: 56 },
    data: {
      result: 'User provided the information',
      functions: [
        { NextFunction: 'isClient' },
        { NextFunction: 'traducePuntos' }
      ],
      callTask: 'continue_with_sale'
    }
  },
  {
    id: '4',
    type: 'resultNode',
    position: { x: 770, y: 290 },
    data: {
      result: 'User refused to provide the information after you explained to them that it was important',
      callTask: 'say_goodbye_to_user'
    }
  },
  {
    id: '5',
    type: 'blockTask',
    position: { x: 492, y: 930 },
    data: {
      taskName: 'continue_with_sale',
      taskContext: 'You will use $$products.xls$$ to offer the products and you will behave as a polite salesperson.'
    }
  },
  {
    id: '6',
    type: 'resultNode',
    position: { x: 670, y: 1274 },
    data: {
      result: 'User showed interest in the products',
      callTask: 'close_sale'
    }
  },
  {
    id: '7',
    type: 'resultNode',
    position: { x: 924, y: 1090 },
    data: {
      result: 'User did not show interest in the products',
      callTask: 'offer_other_products'
    }
  },
  {
    id: '8',
    type: 'resultNode',
    position: { x: 1388, y: 854 },
    data: {
      result: 'User requested more information about the products',
      callTask: 'provide_product_details'
    }
  },
  {
    id: '9',
    type: 'blockTask',
    position: { x: 594, y: 536 },
    data: {
      taskName: 'close_sale',
      taskContext: 'You will close the sale. Now that you have the products of interest, make sure that you close the sale.'
    }
  },
  {
    id: '10',
    type: 'resultNode',
    position: { x: 636, y: 773 },
    data: {
      result: 'User made a purchase',
      callTask: 'thank_and_farewell'
    }
  },
  {
    id: '11',
    type: 'resultNode',
    position: { x: 1096, y: 674 },
    data: {
      result: 'User left without buying',
      callTask: 'conduct_satisfaction_survey'
    }
  },
  {
    id: '12',
    type: 'resultNode',
    position: { x: 1338, y: 450 },
    data: {
      result: 'User said they would return later to complete the purchase',
      callTask: 'schedule_follow_up'
    }
  },
  {
    id: '13',
    type: 'blockFunction',
    position: { x: 204, y: 1181 },
    data: {
      name: 'obtiene4puntos',
      variables: 'puntosImportantes4'
    }
  }
]
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'floatingEdge' },
  { id: 'e2-3', source: '2', target: '3', type: 'floatingEdge' },
  { id: 'e2-4', source: '2', target: '4', type: 'floatingEdge' },
  { id: 'e1-5', source: '1', target: '5', type: 'floatingEdge' },
  { id: 'e5-6', source: '5', target: '6', type: 'floatingEdge' },
  { id: 'e5-7', source: '5', target: '7', type: 'floatingEdge' },
  { id: 'e5-8', source: '5', target: '8', type: 'floatingEdge' },
  { id: 'e1-9', source: '1', target: '9', type: 'floatingEdge' },
  { id: 'e9-10', source: '9', target: '10', type: 'floatingEdge' },
  { id: 'e9-11', source: '9', target: '11', type: 'floatingEdge' },
  { id: 'e9-12', source: '9', target: '12', type: 'floatingEdge' },
  { id: 'e1-13', source: '1', target: '13', type: 'floatingEdge' }
]

export default function App () {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  console.log(nodes)
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}
