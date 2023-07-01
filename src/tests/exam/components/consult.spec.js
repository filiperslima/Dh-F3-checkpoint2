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


    //obtém o botão de schedule
    const scheduleBtn = screen.queryByText('modal');

    //envia o agendamento
    setTimeout(() => {
      fireEvent.click(scheduleBtn);
    }, 2000);

  });
});
