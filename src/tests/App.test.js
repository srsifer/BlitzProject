import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

test('testa se ao inserir uma nova tarefa é renderizado uma nova li', () => {
  render(<Home />);
  const inputSubmit = screen.getByTestId(/subimit-task/i)
  const inputTask = screen.getByTestId(/new-task/i);
  //const ulTask = screen.getByTestId(/ul-task/i);
  
  expect(inputTask).toBeInTheDocument();
  userEvent.type(inputTask, 'alimentar o gato');
  userEvent.click(inputSubmit)
  const liTask = screen.getByText(/alimentar o gato/i);
  expect(liTask).toBeInTheDocument();
});
