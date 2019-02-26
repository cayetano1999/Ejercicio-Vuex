const store = new Vuex.Store({

state:{

    numero: 5,
    perfil: {

        nombre:'',
        telefono:'',
        email: '',
       
        
    }
},

mutations:{ //las funciones que esten en mutatios deben recibir un state para poder acceder a la propiedad del state de la tienda

    sumar(state){
        state.numero++;
    },
    multiplicar(state){
        state.numero*=2;
    },
    GetPerfil(state, PerfilAction){
        state.perfil.nombre = PerfilAction.results['0'].name.title + ' '+PerfilAction.results['0'].name.first;
        state.perfil.telefono = PerfilAction.results['0'].cell;
        state.perfil.email = PerfilAction.results['0'].email;
       
        
    
    }

    //para acceder a estas mutaciones es necesario acceder por medio de un commit ($store.commit('mutacion'))

},

actions:{
    /*Las acciones son similares a las mutaciones, las diferencias son que:

En lugar de mutar el estado, las acciones cometen mutaciones.
Las acciones pueden contener operaciones asíncronas arbitrarias.*/
ObtenerPerfil : async function({commit}){
    const data = await fetch('https://randomuser.me/api/'); //la constante data sera igual a la espera de la promesa del fetch
    const perfil = await data.json();
    commit('GetPerfil', perfil)
    console.log(perfil.results);
    
    
}


}

});






const app = new Vue({

el:'#app',
store: store


}); 