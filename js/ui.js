export class UI {
  static renderCard(card) {
    const cardContainer = document.getElementById('card-container');
    
    if (!card) {
      cardContainer.innerHTML = `<p>Brak dostępnych kart!</p>`;
      return;
    }

    const forbiddenItems = card.forbidden
      .map(word => `<li>${word}</li>`)
      .join('');

    cardContainer.innerHTML = `
      <div class="card">
        <h2 class="card-title">${card.word}</h2>
        <ul class="forbidden-list">
          ${forbiddenItems}
        </ul>
      </div>
    `;
  }

  static updateScore(score) {
    const scoreElement = document.getElementById('score-value');
    if (scoreElement) {
      scoreElement.textContent = score;
    }
  }
}