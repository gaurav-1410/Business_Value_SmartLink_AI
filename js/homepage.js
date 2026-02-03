// Modal functions
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
  document.getElementById('modalOverlay').style.display = 'block';
  document.getElementById('signupModal').style.display = 'none';
}

function openSignupModal() {
  alert('🚀 Sign Up feature is under development. Please try Login to explore the application.');
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

function closeSignupModal() {
  document.getElementById('signupModal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

function closeAllModals() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('signupModal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

function switchToSignup() {
  closeLoginModal();
  openSignupModal();
}

function switchToLogin() {
  closeSignupModal();
  openLoginModal();
}

function handleLogin() {
  // Redirect to dashboard after login
  window.location.href = 'homepage.html';
}

function handleSignup() {
  alert('🚀 Sign Up feature is under development. Please try Login instead.');
}

function scrollToFeatures() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Close modal when clicking outside
window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  
  if (event.target === loginModal) {
    closeLoginModal();
  }
  if (event.target === signupModal) {
    closeSignupModal();
  }
}
