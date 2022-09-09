// per creare l'oggetto observable ci serve la classe vue, quindi prima dobbiamo importarla
import Vue from 'vue';

// creiamo l'observable => state in generale è quel punto dell'applicativo dove ci salviamo tutte le variabili condivise da tutto l'applicativo.
const state = Vue.observable({
    input: '',
});

// esportiamo state per poterla importare negli altri componenti
export default state;