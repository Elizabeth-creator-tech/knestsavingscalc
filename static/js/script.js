document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const p = parseFloat(document.getElementById('monthlyContribution').value);
    const n = parseInt(document.getElementById('months').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);

    // Calculation logic
    const monthlyRate = annualRate / 100 / 12;
    
    let totalSavings;
    if (monthlyRate === 0) {
        totalSavings = p * n;
    } else {
        // Formula: total = P * ((1 + r)^n - 1) / r
        totalSavings = p * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate);
    }

    const totalContributions = p * n;
    const interestEarned = totalSavings - totalContributions;

    // Format numbers
    const formatter = new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
        minimumFractionDigits: 2
    });

    // Update UI
    document.getElementById('resTotalContrib').textContent = formatter.format(totalContributions);
    document.getElementById('resInterest').textContent = formatter.format(interestEarned);
    document.getElementById('resTotalSavings').textContent = formatter.format(totalSavings);

    // Show results
    document.getElementById('results').classList.add('active');
    
    // Scroll results into view if needed
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
