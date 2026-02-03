let currentStep = 1;
let selectedRoute = null;

function showRoutes() {
  // Display the available routes section
  document.getElementById('availableRoutes').style.display = 'block';
  // Show AI panel when Next is clicked on route step
  document.querySelector('.ai-panel').style.display = 'block';
  // Scroll to the routes section
  document.getElementById('availableRoutes').scrollIntoView({ behavior: 'smooth' });
}

function selectRoute(routeType) {
  // Remove selection from all cards
  document.querySelectorAll('.route-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // Add selection to clicked card
  event.currentTarget.classList.add('selected');
  
  // Store selected route
  selectedRoute = routeType;
}

function confirmRoute() {
  if (!selectedRoute) {
    alert('Please select a route first!');
    return;
  }
  
  // Move to next step (Review)
  nextStep();
}

function nextStep() {
  if (currentStep < 4) {
    // Hide current step
    document.getElementById(`step${currentStep}`).style.display = 'none';
    
    // Update step indicator
    document.querySelectorAll('.step')[currentStep - 1].classList.remove('active');
    
    // Move to next step
    currentStep++;
    
    // Show next step
    const nextStepElement = document.getElementById(`step${currentStep}`);
    if (nextStepElement) {
      nextStepElement.style.display = 'block';
    }
    
    // Calculate total price if moving to step 2
    if (currentStep === 2) {
      const unitPrice = parseFloat(document.getElementById('unitPrice').value) || 0;
      const moq = parseFloat(document.getElementById('moq').value) || 0;
      const totalPrice = unitPrice * moq;
      document.getElementById('totalPrice').value = totalPrice.toFixed(2);
    }
    
    // Populate review if moving to step 4
    if (currentStep === 4) {
      populateReview();
      // Hide AI panel on review step
      document.querySelector('.ai-panel').style.display = 'none';
    }
    
    // Update step indicator
    document.querySelectorAll('.step')[currentStep - 1].classList.add('active');
  }
}

function prevStep() {
  if (currentStep > 1) {
    // Hide current step
    document.getElementById(`step${currentStep}`).style.display = 'none';
    
    // Update step indicator
    document.querySelectorAll('.step')[currentStep - 1].classList.remove('active');
    
    // Move to previous step
    currentStep--;
    
    // Show previous step
    document.getElementById(`step${currentStep}`).style.display = 'block';
    
    // Update step indicator
    document.querySelectorAll('.step')[currentStep - 1].classList.add('active');
    
    // Hide available routes and AI panel when going back from route step
    if (currentStep < 3) {
      document.getElementById('availableRoutes').style.display = 'none';
      document.querySelector('.ai-panel').style.display = 'none';
    }
  }
}

// Initialize AI panel visibility on page load
document.addEventListener('DOMContentLoaded', function() {
  updateAIPanel();
});

function populateReview() {
  // Supplier details
  const supplier = document.getElementById('supplier').value;
  document.getElementById('reviewSupplier').innerHTML = `
    <strong>Supplier:</strong> ${supplier}
  `;
  
  // Product details
  const productName = document.getElementById('productName').value;
  const hsCode = document.getElementById('hsCode').value;
  const unitPrice = document.getElementById('unitPrice').value;
  const moq = document.getElementById('moq').value;
  const totalPrice = document.getElementById('totalPrice').value;
  
  document.getElementById('reviewProduct').innerHTML = `
    <strong>Product:</strong> ${productName}<br>
    <strong>HS Code:</strong> ${hsCode}<br>
    <strong>Unit Price:</strong> €${unitPrice}<br>
    <strong>MOQ:</strong> ${moq} units<br>
    <strong>Total Price:</strong> €${totalPrice}
  `;
  
  // Route details
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const shippingMode = document.getElementById('shippingMode').value;
  const priority = document.getElementById('priority').value;
  
  let routeInfo = '';
  if (selectedRoute === 'sea-standard') {
    routeInfo = '<strong>Selected Route:</strong> Sea Freight - Standard (21 days, €3,200)<br>';
  } else if (selectedRoute === 'sea-express') {
    routeInfo = '<strong>Selected Route:</strong> Sea Freight - Express (18 days, €4,100)<br>';
  } else if (selectedRoute === 'air-freight') {
    routeInfo = '<strong>Selected Route:</strong> Air Freight (5 days, €8,500)<br>';
  }
  
  document.getElementById('reviewRoute').innerHTML = `
    <strong>Origin:</strong> ${origin}<br>
    <strong>Destination:</strong> ${destination}<br>
    <strong>Shipping Mode:</strong> ${shippingMode}<br>
    <strong>Priority:</strong> ${priority}<br>
    ${routeInfo}
  `;
}

function submitTrade() {
  alert('Trade setup submitted successfully!');
  // You can add logic to send data to backend here
}
// Initialize AI panel as hidden on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.ai-panel').style.display = 'none';
});