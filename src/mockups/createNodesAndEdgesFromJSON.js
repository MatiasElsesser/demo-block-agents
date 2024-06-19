export const createNodesAndEdgesFromJSON = (json) => {
  const initialNodes = []
  const initialEdges = []

  // Crear nodos
  json.Blocks.forEach((block, index) => {
    const nodeId = (index + 1).toString()
    initialNodes.push({
      id: nodeId,
      data: { label: block.Name },
      position: { x: 250, y: index * 150 }
    })

    // Crear bordes
    if (block.Results) {
      block.Results.forEach((result) => {
        if (result.CallTask) {
          const targetIndex = json.Blocks.findIndex(b => b.Name === result.CallTask)
          if (targetIndex !== -1) {
            const targetNodeId = (targetIndex + 1).toString()
            initialEdges.push({
              id: `e${nodeId}-${targetNodeId}`,
              source: nodeId,
              target: targetNodeId,
              label: result.Result
            })
          }
        }
      })
    }
  })

  return { initialNodes, initialEdges }
}
