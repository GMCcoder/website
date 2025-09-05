const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
// Form validation
const btnValidForm = document.querySelector('#btnValidForm');
const form = document.querySelector('form');
btnValidForm.addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const fileInput = document.getElementById('fichier');
  const file = fileInput.files[0];
  const allowedTypes = ['application/pdf', 'video/mp4', 'image/jpeg', 'image/png'];
  if (!email || !message || !file) {
    alert('Veuillez remplir tous les champs et sélectionner un fichier.');
    e.preventDefault();
    return;
  }
  if (!allowedTypes.includes(file.type)) {
    alert('Type de fichier non autorisé. Veuillez sélectionner un PDF, une vidéo MP4, une image JPG ou PNG.');
    e.preventDefault();
  }
});

// Function to load a page into the content div
function loadPage(page, contentId) {
  const contentEl = document.getElementById(contentId);

  // Vérifie si le contenu actuel correspond déjà à la page demandée
  if (contentEl.getAttribute('data-current-page') === page) {
    console.log("Vous êtes déjà sur cette page !");
    return; // on ne recharge rien
  }

  // Sinon, on charge le nouveau contenu
  fetch(page)
    .then(response => {
      if (!response.ok) throw new Error("Erreur de chargement : " + response.status);
      return response.text();
    })
    .then(html => {
      contentEl.innerHTML = html;
      // Met à jour l'attribut pour se souvenir de la page actuelle
      contentEl.setAttribute('data-current-page', page);
    })
    .catch(err => {
      contentEl.innerHTML = "<p style='color:red;'>Impossible de charger la page.</p>";
      console.error(err);
    });
}
