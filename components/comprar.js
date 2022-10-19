Vue.component(
    'comprar', 
    {
        template:"<div><button class='btn btn-primary' v-on:click='greet'> Comprar </button></div>",
        //<button type="button" class="btn btn-primary" @click=example2.greet()>Comprar</button>
        data: function(){
            return {
                name_id: 'Dron LU3 MAX GPS 8K HD',
                cantidad: 1,
                color: ["red"]
            }
        },
        props:[ "greet"],
        mounted: function(){
            console.log("comprar iniciado");
        },
        methods: {
            greet(event) {
            // `this` inside methods points to the current active instance
            alert('Pedido: ID: ' + this.name_id + ',       Cantidad: ' + this.cantidad + ',      Color: ' + this.color + '. ')
            // `event` is the native DOM event
            //if (event) {
            //    alert(event.target.tagName)
            //}
            }
        }
    }
);
