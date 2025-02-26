<h1 style="color:green; font-weight:800"> Node + Test + SOLID</h1>

<p>Este projeto é uma aplicação Node.js que utiliza o framework Vitest para testes unitários.</p>
<br>


<h3>Entidades</h3>
<h4>Appointment</h4>
<p>Representa um compromisso com propriedades como cliente, data de início e data de término. Possui validações para garantir que a data de início não seja no passado e que a data de término seja após a data de início.</p>
<br>
<hr>
<h3>Repositório</h3>
<h4>AppointmentRepository</h4>
<p>Interface que define os métodos para criar um compromisso e encontrar compromissos sobrepostos.</p>
<br>
<h4>InMemoryAppointmentRepository</h4>
<p>Implementação em memória do `AppointmentRepository`, usada para armazenar compromissos e verificar sobreposições. Assim conseguimos testar a funcionalidade sem a conexão com o banco.</p>
<br>
<hr>
<h3>Casos de Uso</h3>
<h4>CreateAppointment</h4>
<p>Caso de uso para criar um novo compromisso, garantindo que não haja sobreposição de datas.</p>
<br>
