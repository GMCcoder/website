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
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur de chargement : " + response.status);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById(contentId).innerHTML = html;
    })
    .catch(err => {
      document.getElementById(contentId).innerHTML =
        "<p style='color:red;'>Impossible de charger la page.</p>";
      console.error(err);
    });
}