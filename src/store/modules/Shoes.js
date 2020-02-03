// import axios from 'axios'

let state = {
    shoes: [],
    perPage: null,
    currentPage: 1,
    lastPage: null,
    totalRows: null,
    list: [],
    loading: false,
}

let getters = {
        findShoe(state){
            return function(id){
                let shoe = state.shoes.find(shoe => shoe.id == id)
                return shoe;
            }
        },
}

let actions = {
    // ?page=
    // + params.page + '&search=' + params.target + '&orderBy=' + params.orderBy + '&desc=' + params.desc
    getShoes(){
        // context
        // , params
        console.log('hola')
        // context.state.loading = true
        // axios.get('https://appsoho.herokuapp.com/api/shoes' 
        //     )
        //     .then(response => {
        //         console.log('llego por aca')
        //         console.log(response)
        //         context.commit('getShoes', {data: response.data})
        //         context.state.loading = false
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         // Vue.toasted.show(error.message, {icon: 'exclamation-triangle', type: 'error'})
        //     })
    },

    // storeColor(context, payload){
    //     context.state.loading = true
    //     axios.post('/shoe', payload)
    //         .then(response => {
    //             if (response.data.status == 0) {
    //                 for (var i = response.data.message.length - 1; i >= 0; i--) {
    //                     Vue.toasted.show(response.data.message[i], {icon: 'exclamation-triangle', type: 'error'})
    //                 }

    //           }else{
    //             if (payload.draft.image != '') {
    //               payload.draft.image= '/images/colors/'+payload.draft.image
    //             }
    //               let newColor = {
    //                   id: response.data.id,
    //                   name: payload.draft.name,
    //                   image: payload.draft.image,
    //                   csscode: payload.draft.csscode,
    //                   category_id: payload.draft.category_id,
    //                   status: payload.draft.status,
    //               }
    //               context.commit('storeColor', newColor)
    //               Vue.toasted.show(response.data.message, {icon: 'plus', type: 'success'})
    //           }
    //             context.state.loading = false
    //         })
    //         .catch(error => {
    //             Vue.toasted.show(error.message, {icon: 'exclamation-triangle', type: 'error'})
    //             context.state.loading = false
    //         })
    // },

    // updateColor(context, payload){
    //     context.state.loading = true
    //     axios.put('/admin/color/' + payload.id, payload)
    //         .then(response => {
    //           if (response.data.status == 0) {
    //             for (var i = response.data.message.length - 1; i >= 0; i--) {
    //                 Vue.toasted.show(response.data.message[i], {icon: 'exclamation-triangle', type: 'error'})
    //             }

    //           }else{
    //             if (payload.draft.image != '') {
    //               payload.draft.image= '/images/colors/'+payload.draft.image
    //             }
    //             Vue.toasted.show(response.data.message, {icon: 'pencil', type: 'info'})
    //             context.commit('updateColor', payload)
    //           }
    //             context.state.loading = false

    //         })
    //         .catch(error => {
    //             Vue.toasted.show(error.message, {icon: 'exclamation-triangle', type: 'error'})
    //             context.state.loading = false
    //         })
    // },

    // removeColor(context, id){
    //     context.state.loading = true
    //     axios.delete('/admin/color/' + id)
    //         .then(response => {
    //             context.commit('removeColor', id)
    //             Vue.toasted.show(response.data.message, {icon: 'trash-o', type: 'error'})
    //             context.state.loading = false
    //         })
    //         .catch(error => {
    //             context.state.loading = false
    //             Vue.toasted.show(error.message, {icon: 'exclamation-triangle', type: 'error'})
    //         })

    // },

    // listColors(context){
    //     axios.get('/admin/colorList')
    //         .then(response => {
    //             context.commit('listColors', {data: response.data})
    //         })
    //         .catch(error => {
    //             Vue.toasted.show(error.message, {icon: 'exclamation-triangle', type: 'error'})
    //         })
    // },
}

let mutations = {
    getColors(state, {data}){
        state.currentPage = data.current_page
        state.lastPage = data.last_page
        state.totalRows = data.total
        state.perPage = data.per_page
        state.colors = data.data;
    },

    storeColor(state, newColor){
        state.colors.unshift(newColor);
    },

    updateColor(state, {id, draft}){
        let index = state.colors.findIndex(color => color.id == id);
        state.colors.splice(index, 1, draft);
    },

    removeColor(state, id)    {
        let index = state.colors.findIndex(color => color.id == id);
        state.colors.splice(index, 1);
    },

    listColors(state, data){
        state.list = data.data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}