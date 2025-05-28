const ganadores = [
    { id: 1, nombre: "Usuario1", codigo: "ABC123", estado: "Premio entregado" },
    { id: 2, nombre: "Usuario2", codigo: "XYZ456", estado: "Pendiente de entrega" },
    { id: 3, nombre: "Usuario3", codigo: "LMN789", estado: "Verificación en proceso" }
];

const listaGanadores = document.getElementById("listaGanadores");

ganadores.forEach((g) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${g.id}</td>
        <td>${g.nombre}</td>
        <td>${g.codigo}</td>
        <td>${g.estado}</td>
    `;
    listaGanadores.appendChild(fila);
});
