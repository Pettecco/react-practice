import { useMemoryCard } from '../hooks/useMemoryCard';

export const MemoryGame = ({ images }) => {
  const { cards, flipCard, resetGame } = useMemoryCard(images);
  const isAllCardsMatched = cards.every((card) => card.isMatched);

  return (
    <div className="memory-game">
      <h1 className="game-title">Memory Game</h1>

      {isAllCardsMatched && (
        <>
          <div className="victory-message"> Parabéns! Você venceu!</div>

          <button className="reset-button" onClick={resetGame}>
            Reiniciar Jogo
          </button>
        </>
      )}

      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
            onClick={() => flipCard(card.id)}
          >
            <div className="card-face">
              <div className="card-front">?</div>
              <div className="card-back">
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
