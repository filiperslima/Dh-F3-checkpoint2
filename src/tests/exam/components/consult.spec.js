import { render, screen, fireEvent } from '@testing-library/react';
import ScheduleForm from '../../../Components/ScheduleForm';
import axios from 'axios';
import { renderContext } from '../../test-utils';

jest.mock('axios');

describe('ScheduleForm', () => {
  test('agendamento de consulta bem-sucedido', async () => {
    const mockResponse = {
      status: 200
    };

    axios.post.mockResolvedValue(mockResponse);

    renderContext(<ScheduleForm />);

    // Preencha o formulário
    fireEvent.change(screen.getByLabelText('Dentist'), { target: { value: 'dentistID' } });
    fireEvent.change(screen.getByLabelText('Patient'), { target: { value: 'patientID' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-06-29T10:00' } });

    fireEvent.click(screen.getByLabelText('Schedule'));

    // Aguarde a resposta da chamada axios.post (ou simulação)
    await screen.findByText('Consulta agendada com sucesso');

    // Verifique se o alerta "Consulta agendada com sucesso" foi exibido
    expect(window.alert).toHaveBeenCalledWith('Consulta agendada com sucesso');
  });
});