$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nombre y Apellidos ",
              key: "name"
          },
          {
              text: "Edad",
              key: "age"
          },
          {
              text: "Padrino",
              key: "padrino"
          },
          {
              text: "Barrio",
              key: "barrio"
          },        
        ],
 
        //carga de datos
        data: [{
              name: 'José Perez',
              age: 10,
              padrino: 'Si',
              barrio: 'Bosa'    
          },
          {
              name: 'María Diaz',
              age: 14,
              padrino: 'No',
              barrio: 'Kenedy'
          },
         
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" />',
            cancelButton: '<input type="button" value="Cancelar" />',
            deleteButton: '<input type="button" value="Borrar" />',
            editButton: '<input type="button" value="Editar" />',
            saveButton: '<input type="button" value="Guardar" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "padrino") {
              return '<select class="form-control"><option value="Si">Si</option><option value="No">No</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    