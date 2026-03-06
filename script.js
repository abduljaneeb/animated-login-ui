document.addEventListener('DOMContentLoaded', () => {
    const lampToggle = document.getElementById('lampToggle');
    const bulb = document.getElementById('bulb');
    const glow = document.getElementById('glow');
    const loginForm = document.getElementById('loginForm');
    const instructionText = document.getElementById('instructionText');
    const lightRay = document.getElementById('lightRay');
    
    let isLampOn = false;

    lampToggle.addEventListener('click', () => {
        isLampOn = !isLampOn;
        
        // Toggle UI elements
        bulb.classList.toggle('on');
        glow.classList.toggle('active');
        loginForm.classList.toggle('active');
        lampToggle.classList.toggle('active');
        lightRay.classList.toggle('on');
        
        // Handle instruction text visibility
        if (isLampOn) {
            instructionText.classList.add('hidden');
        } else {
            instructionText.classList.remove('hidden');
        }
    });

    // Handle form submission with visual feedback
    const form = document.querySelector('.glass-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.querySelector('.btn-signin');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Signing In...';
        btn.style.opacity = '0.8';
        btn.disabled = true;

        // Simulate network request
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 2000);
    });
});
