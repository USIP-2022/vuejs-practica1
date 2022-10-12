Vue.component(
    'contador', 
    {
        template:"<div><button v-on:click='iniciocontador++'>+</button><div>{{iniciocontador}}</div><button v-on:click='iniciocontador--'>-</button></div>",
        data: function(){
            return {
                contador: 1
            }
        },
        props:[ "iniciocontador"],
        mounted: function(){
            console.log("contador iniciado");
        }
    }
);