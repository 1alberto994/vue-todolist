const { createApp } = Vue;

createApp({

    data() {

        return {
            newTodo: '',
            myClass:"text-decoration",
            todos: [
                'Buttare la spazzatura',
                "Fare il regalo allo zio d'America",
                'Andare in  palestra',
                "Vincere un golden globe",
                "Diventare un full stack web developer"
            ],
            done:[
                false,
                false,
                false,
                false,
                false
            ]
        };

    },

    methods: {

        // L'OBBIETTIVO DI QUESTA FUNZIONE è AGGIUNGERE UN ELEMENTO O PIù NEL MIO HTML
        // CREO LA FUNZIONE ,ALL 'INTERNO DELLA FUNZIONE HO UNA CONDIZIONE SE THIS.NEWTODO è DIVERSO DAL VALORE CHE HO INSERITO NEL MIO DATA
        // ALL'INTERNO DEL MIO ARRAY,SEMPRE INSERITO NEL MIO DATA ,AGGIUNGO IL MIO THIS.NEWTODO
        // ALTRIMENTI RESTA TUTTO COSì COME è.
        addTodo: function () {

            if(this.newTodo != '') {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }

        },

        // L OBBIETTIVO DI QUESTA FUNZIONE è RIMUOVERE L ELEMENTO TRAMITE IL CLICK SULL ICONA
        // IINSERISCO UN ARGOMENTO NELLA MIA FUNZIONE DOPO DI CIO UTILIZZO THIS.TODOS.SPLICE
        // IL .SPLICE SERVE A RIMUOVERE L ELEMENTO ASSOCIATO ALL ICONA CHE HO CLICCATO
        
        removeTodo: function (index) {

            
            this.todos.splice(index, 1);

        },

    }

}).mount('#app');




