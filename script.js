function nextView(viewNumber) {
  // Hide all views
  const views = document.querySelectorAll('.view');
  views.forEach(view => {
    view.classList.remove('active');
  });

  // Show target view
  const targetView = document.getElementById(`view-${viewNumber}`);
  if(targetView) {
    targetView.classList.add('active');
    
    // reset scroll to top of view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// "No" button magic
const noBtn = document.getElementById('no-btn');
const toast = document.getElementById('toast');

// Make the "No" button run away on hover
noBtn.addEventListener('mouseover', function() {
  // Only apply move logic on non-mobile screens to avoid weird jumping on touch
  if(window.innerWidth > 768) {
    const x = Math.floor(Math.random() * 200) - 100; // -100 to 100px
    const y = Math.floor(Math.random() * 200) - 100;
    
    // limit bounds 
    this.style.transition = 'transform 0.2s ease-in-out';
    this.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Show "Invalid Option" toast when clicked
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
});

// Letter Opening Magic
function openLetter() {
  const envelope = document.getElementById('envelope-cover');
  const letter = document.getElementById('letter-content');
  
  // Fade out envelope
  envelope.classList.add('fade-out');
  
  // Show letter after envelope fades
  setTimeout(() => {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');
    letter.classList.add('fade-in');
  }, 800);
}
