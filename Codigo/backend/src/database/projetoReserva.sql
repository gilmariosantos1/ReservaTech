describe reserva;

-- insert into reserva (dataReserva, dataEntrega, horarioInicio, horarioFim, motivo, status, colaborador_idcolaborador, equipamento_idequipamento) values (date '2026-02-10', date '2026-02-11', '08:00:00', '09:00:00', 'Dar aula', 'Emprestado', 1, 1);

-- select * from reserva;
insert into colaboradores (nome, email, telefone, cpf, data_nascimento, matricula) values ('John Doe', 'john.doe@example.com', '(11) 99999-9999', '123.456.789-00', '1980-01-01', 'MAT001');
select * from colaboradores;