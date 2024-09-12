// Lista de nomes
const names = [
    "Atividade Somativa DevOps PUCPR2024_05"
];

function addNameToBody(name) {
    const element = document.createElement("div");
    element.innerText = name;
    document.body.appendChild(element);
}

function displayNames() {
    names.forEach((name, index) => {
        setTimeout(() => {
            addNameToBody(name);

            if (index === names.length - 1) {
                setTimeout(() => {
                    funnyButton();
                }, 1000); // Delay to give time for the last name to appear
            }
        }, (index + 1) * 1000);
    });
}

function funnyButton() {
    const container = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'Clique aqui 👀';
    
    container.appendChild(button);
    document.body.appendChild(container);

    button.addEventListener('click', function() {
        // Remove the button and display the image and message
        button.remove();
        
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        img.src = 'https://i.imgflip.com/4jdmha.jpg';
        img.alt = 'Imagem engraçada';
        imgContainer.appendChild(img);
        document.body.appendChild(imgContainer);

        const message = document.createElement('h2');
        message.innerText = 'Deus abençoe tua semana, Jesus te ama! :)';
        document.body.appendChild(message);
    });
}

// Call the displayNames function when the page loads
document.addEventListener('DOMContentLoaded', displayNames);
