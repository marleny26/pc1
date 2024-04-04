document.addEventListener('DOMContentLoaded', function() {
    // Arreglo de personas y oficios
    const personas = [
        { nombre: "Juan", oficio: "Programador" },
        { nombre: "María", oficio: "Diseñador" },
        { nombre: "Carlos", oficio: "Ingeniero" }
        // Puedes agregar más personas y oficios aquí
    ];

    // Función para mostrar las personas y sus oficios en la tabla
    function mostrarPersonas() {
        const personasBody = document.getElementById('personas-body');

        personas.forEach(persona => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${persona.nombre}</td>
                <td>${persona.oficio}</td>
            `;
            personasBody.appendChild(fila);

            // Agregar evento click a la fila para seleccionar la persona
            fila.addEventListener('click', function() {
                contratarPersona(persona);
            });
        });
    }

    // Mostrar las personas al cargar la página
    mostrarPersonas();

    // Función para manejar el evento de contratar
    function contratarPersona(persona) {
        console.log(`¡Has contratado a ${persona.nombre}!`);
    }
});
