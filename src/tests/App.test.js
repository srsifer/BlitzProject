import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

describe('testes de renderização e adição das tarefas', () => {
  it('testa se ao inserir uma nova tarefa é renderizado uma nova li', () => {
    render(<Home />);
    const inputSubmit = screen.getByTestId(/subimit-task/i)
    const inputTask = screen.getByTestId(/new-task/i);
    expect(inputTask).toBeInTheDocument();
    userEvent.type(inputTask, 'alimentar o gato');
    userEvent.click(inputSubmit)
    const liTask = screen.getByText(/alimentar o gato/i);
    expect(liTask).toBeInTheDocument();

    userEvent.type(inputTask, 'correr no parque');
    userEvent.click(inputSubmit)
    const liTask2 = screen.getByText(/correr no parque/i);
    expect(liTask2).toBeInTheDocument();
  });

  it('será testado que é possivel excluir uma tarefa', () => {
    render(<Home/>);
    const inputSubmit = screen.getByTestId(/subimit-task/i)
    const inputTask = screen.getByTestId(/new-task/i)
    userEvent.type(inputTask, 'alimentar o gato');
    userEvent.click(inputSubmit)
    const liTask = screen.getByText(/alimentar o gato/i);
    expect(liTask).toBeInTheDocument()
    const removeTask = screen.getByText(/excluir/i)
    userEvent.click(removeTask)
    expect(liTask).not.toBeInTheDocument();
  })

})

