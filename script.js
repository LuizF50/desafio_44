// Tabela de correspondência

const tabelaCorrespondencia = {
    'Alho': 'Salsa',
    'Tomate': 'Jazz',
    'Manjericão': 'Rock',
    'Queijo': 'Clássico',
    'Macarrão': 'Pop',
    'Pimenta': 'Reggae'
};

// Função para adicionar ingredientes à lista
function adicionarIngrediente() {
    const ingredienteInput = document.getElementById('ingrediente');
    const ingrediente = ingredienteInput.value.trim();
    
    if (ingrediente) {
        const listaIngredientes = document.getElementById('ingredientes');
        const item = document.createElement('li');
        item.textContent = ingrediente;
        listaIngredientes.appendChild(item);
        ingredienteInput.value = ''; // Limpa o campo de input
    }
}

// Função para gerar a playlist
function gerarPlaylist() {
    const listaIngredientes = document.getElementById('ingredientes');
    const ingredientes = Array.from(listaIngredientes.children).map(item => item.textContent);
    const playlist = [];
    
    ingredientes.forEach(ingrediente => {
        const genero = tabelaCorrespondencia[ingrediente];
        if (genero) {
            playlist.push(genero);
        } else {
            playlist.push(`Gênero não encontrado para ${ingrediente}`);
        }
    });
    
    const listaPlaylist = document.getElementById('playlist');
    listaPlaylist.innerHTML = ''; // Limpa a lista anterior
    
    playlist.forEach(genero => {
        const item = document.createElement('li');
        item.textContent = genero;
        listaPlaylist.appendChild(item);
    });
}
