import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: white;
  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

const Task = ({task, index}) => (
  <Draggable
    draggableId={task.id}
    index={index}
  >
    {(provided) => (
      <Container
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <Handle
          {...provided.dragHandleProps}
        />
        {task.content}
      </Container>
    )}
  </Draggable>
);

export default Task;
