function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "Digite sua pesquisa";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = ""
    let titulo = ""
    let descricao = ""


    // Itera sobre cada terapia no array `terapias`
    for (let terapia of terapias) {
        titulo = terapia.titulo.toLowerCase()
        descricao = terapia.descricao.toLowerCase()
        tags = terapia.tags.toLowerCase()

        // Verifica se o título da terapia contém o texto pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Verifica se o título da terapia contém o texto pesquisado
            // Cria uma nova div para cada terapia
            resultados += `
<div class="item-resultado">
    <h2>
        <a href="#" target="_blank">${terapia.titulo}</a>
    </h2>
    <p class="descricao-meta">${terapia.descricao}</p>
    <a href="${terapia.link}" target="_blank">Agendar ${terapia.titulo}</a>
</div>
`;
        }
    }

    if (!resultados) {
        resultados = "Nenhum resultado encontrado. Digite uma terapia.";
    }

    // Limpa o conteúdo anterior da seção"

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}