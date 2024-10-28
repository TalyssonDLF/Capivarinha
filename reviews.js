function onClick(event) {
    event.preventDefault();

    const tag = document.querySelector('#review').getAttribute('data-tag');
    const estrelas = document.querySelector('#review input[name="estrelas"]:checked').value;
    const comentario = document.querySelector('#review #comentario').value;
    
    let reviews = JSON.parse(localStorage.getItem(tag)) || [];

    const review = {
        estrelas: estrelas,
        comentario: comentario
    };

    reviews.push(review);

    localStorage.setItem(tag, JSON.stringify(reviews));
}

function main() {
    const button = document.querySelector('#review button');

    button.addEventListener('click', e => onClick(e));
}

main();
