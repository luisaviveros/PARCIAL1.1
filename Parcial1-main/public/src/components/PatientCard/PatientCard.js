class PatientCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    setPatientData(patient) {
      this.patient = patient;
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos encapsulados */
        </style>
        <div class="card">
          <h4>${this.patient.name} - ${this.patient.species}</h4>
          <p>Raza: ${this.patient.breed}</p>
          <p>Fecha de Ingreso: ${this.patient.date}</p>
          <p>Síntomas: ${this.patient.symptoms}</p>
          <label>
            <input type="checkbox" ${this.patient.attended ? 'checked' : ''} />
            ${this.patient.attended ? 'Atendido' : 'Pendiente'}
          </label>
        </div>
      `;
  
      if (!this.patient.attended) {
        this.shadowRoot.querySelector('input[type="checkbox"]').addEventListener('change', () => {
          const event = new CustomEvent('changeStatus', { detail: this.getAttribute('data-index') });
          this.dispatchEvent(event);
        });
      }
    }
  }
  
  customElements.define('patient-card', PatientCard);
  