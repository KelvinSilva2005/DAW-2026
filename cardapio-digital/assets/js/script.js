const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        //pega o nome da categoria clicada
        const categoryName = link.textContent;

        //atualiza o texto do span com o nome da categoria
        selectedCategory.textContent = categoryName;

        //remover a class active
        categoryLinks.forEach(function(categoryLink) {  
        categoryLink.classList.remove('active');
        });


        //adiciona a class active
        link.classList.add('active');

        

    
});
});