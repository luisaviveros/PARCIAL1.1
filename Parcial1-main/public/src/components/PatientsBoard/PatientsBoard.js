
import './PatientsBoard/PatientsBoard.js'

class PatientsBoard extends HTMLElement { constructor() {
  super();
 this.attachShadow({ mode: 'open' });
 }
    
   connectedCallback() {
    this.render();
 this.addPatientHandler();
     }
    
     render() {
     this.shadowRoot.innerHTML = `
     <div class="board">
   <div class="header">Gestión de Pacientes</div>
 <form id="patientForm">
     <label for="name">Nombre del paciente: </label>
    <input type="text" id="name" name="name" required>
    <label for="issue">Síntomas: </label>
  <input type="text" id="issue" name="issue" required>
    <button type="submit">Añadir Paciente</button>
    </form>
    <div class="patient-list" id="pendingPatients">
 </div>
</div>
    `;
 }
    
 addPatientHandler() {
 const form = this.shadowRoot.querySelector('#patientForm');
 const pendingPatients = this.shadowRoot.querySelector('#pendingPatients');
    
  form.addEventListener('submit', (event) => {
   event.preventDefault();
  const name = form.name.value;
 const issue = form.issue.value;
    
  
    const patientCard = document.createElement('div');
    patientCard.innerHTML = `<strong>Nombre:</strong> ${name} <br> <strong>Síntomas:</strong> ${issue}`;
    

   pendingPatients.appendChild(patientCard);
    

 form.reset();
 });
 }
    }

    customElements.define('patients-board', PatientsBoard);
    