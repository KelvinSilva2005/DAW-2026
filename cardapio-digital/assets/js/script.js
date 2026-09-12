const categoryLinks = document.querySelectorAll('nav a');

console.log('Category Links:');
console.log(categoryLinks);

/*function defineComportamento( Link ) {
    // Bloco de código
    link.text = 'Olá Mundo';
    link.cor = 'red';
    link.barulho = 'click';
}*/

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        // Desativa a tentativa de navegação do link
        event.preventDefault();

        // Pega o nome da categoria clicada
        const categoryName = link.textContent;

        // Atualiza o texto da categoria selecionada
        selectedCategory.textContent = categoryName;

        alert('Categoria clicada:', categoryName);

        // Remover a claas "active"
        categoryLinks.forEach(function(CategoryLink) {
            CategoryLink.classList.remove('active');
        });

        // Adicionar a classe "active" ao link clicado
        link.classList.add('active');
        
    });
});