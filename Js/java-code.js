function showCountry(country) {
  const container = document.getElementById('country-recommendation');
  container.innerHTML = ''; // Clear previous

  if (country === 'Japan') {
    container.innerHTML = `
      <h3>Japan Recommendations</h3>
      <img src="assets/japan.jpg" alt="Mount Fuji" />
      <p>Explore Mount Fuji, Kyoto temples, and Tokyo city life!</p>
    `;
  } else if (country === 'Italy') {
    container.innerHTML = `
      <h3>Italy Recommendations</h3>
      <img src="assets/italy.jpg" alt="Colosseum" />
      <p>Visit the Colosseum, Venice canals, and Tuscany vineyards!</p>
    `;
  }
}
