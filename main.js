$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();  //  estilo de deslizar para baixo
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();  // estilo de deslizar para cima
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImg = $('#img-new').val();
        const newiten = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(newiten);
        $(`
        <div class="img-link">
            <a href="${enderecoNovaImg}" target="_blank" title="ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(newiten);
        $(newiten).appendTo('ul');
        $(newiten).fadeIn(1000);
        $('#img-new').val('')
    })
})