import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: white;
`;

const Task = ({task}) => (
  <Draggable
    draggableId={task.id}
    index={task.index}
  >
    {(provided) => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {task.content}
      </Container>
    )}
  </Draggable>
);

export default Task;
