Vue.component('container',{

    template://html
    `
    
        <div>
    
            <textbox :numero="numero"></textbox>
            <button @click="multiplicar">+</button>
            <button @click="ObtenerPerfil">Obtener Perfil</button>
            <br>
            <h1>{{perfil.nombre}}</h1>
            <h1>{{perfil.telefono}}</h1>
            <h1>{{perfil.email}}</h1>
            

            
            <table style="border: 2px solid">
            
                <thead>

                    <tr>
                    
                       <th>Id</th>
                       
                       <th>Nombre</th>
                       
                       <th>Apellido</th>
                       
                       <th>Estado</th>
                    
                    </tr>
                </thead>    
                  
                <tbody>

                        <tr v-for="item of perfil">

                            <td>{{item.id}}<td>
                            
                            <td>{{item.nombre}}<td>
                            
                            <td>{{item.apellido}}<td>
                            
                            <td>{{item.estado}}<td>



                        </tr>
                </tbody>

            </table>
            
            
    
        </div>
    
    `,

    computed:{

        /*number: function(){
            return store.state.numero;
        }*/

        /*Esta es una forma de poder utilizar la propiedad sin tener que usar 
            store.state.pripiedad. 
        */

        ...Vuex.mapState(['numero', 'perfil']) //se coloca las propiedades a usar que esten en el state de la tienda
        //los tres puntos significan destructurar
       

        
        

    },

    methods:{

        ...Vuex.mapMutations(['sumar','multiplicar']), //se colocan las mutaciones que estan en la tienda.
        //como las mutaciones hacen referencia a metodos, estos deben de ser trabajados en methods del componente

        ...Vuex.mapActions(['ObtenerPerfil'])

    }
    
    });
    
    
    Vue.component('textbox', {
    
    
    template: //html
    
    `
        <div>
        
        <h1>Numero Actual {{numero}}</h1>
        
        </div>
    `,

    props:['numero']
    
    
    });
    
