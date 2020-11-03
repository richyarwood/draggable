import React, { useState } from 'react';
import initialData from './initialData';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const App = () => {
  const [ data, setData ] = useState(initialData);
  const onDragEnd =() => {

  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  );
}

export default App;
