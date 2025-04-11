const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const doubtForm = document.getElementById('doubtForm');
const successMessage = document.getElementById('successMessage');

// Image preview
imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    imagePreview.style.display = 'block';

    reader.addEventListener('load', function () {
      imagePreview.setAttribute('src', this.result);
    });

    reader.readAsDataURL(file);
  }
});

// Submit
doubtForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Here you'd send the image and doubt text to a server via fetch/AJAX
  successMessage.classList.remove('hidden');
  doubtForm.reset();
  imagePreview.style.display = 'none';
});

let solutionUploaded = false; // default

// This line is just to set the image path manually for testing.
// Remove or set via backend when you implement real upload logic
const solutionImagePath = 'https://via.placeholder.com/400x200.png?text=Uploaded+Solution';

document.getElementById('seeSolutionBtn').addEventListener('click', function () {
  const img = document.getElementById('solutionImage');
  const msg = document.getElementById('noSolutionMsg');

  if (solutionUploaded) {
    img.src = solutionImagePath;
    img.classList.remove('hidden');
    msg.classList.add('hidden');
  } else {
    msg.classList.remove('hidden');
    img.classList.add('hidden');
  }
});

// If you want to enable the image manually for now
// Uncomment this line to simulate solution upload
// solutionUploaded = true;
