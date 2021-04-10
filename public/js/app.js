// var urlUsers = 'https://jsonplaceholder.typicode.com/users';
new Vue({
    el: '#crud',
    created: function() {
        this.getKeeps();
    },
    data: {
        keeps: []
    },
    methods: {
        getKeeps: function() {
            var urlKeeps = 'tasks';

            axios.get(urlKeeps).then((response) => {
                this.keeps = response.data;
            }).catch((err) => {
                alert('Algo ocurrio al listar' + err);
            });
        },
        deleteKeep: function(keep) {
            alert(keep.id)
            var url = 'tasks/' + keep.id;

            axios.delete(url).then((response) => {
                this.getKeeps();
                toastr.success('Eliminado correctamente');
            }).catch((err) => {
                alert('Algo ocurrio al eliminar' + err);
            });
        }
    }
});