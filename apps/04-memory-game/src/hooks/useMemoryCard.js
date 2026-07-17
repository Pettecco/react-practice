import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';

export const useMemoryCard = (images) => {
  const [cards, setCards] = useState(() => {
    const duplicate = [...images, ...images];
    return shuffle(duplicate).map((img, idx) => ({
      id: idx,
      image: img,
      isFlipped: false,
      isMatched: false,
    }));
  });

  const [flippedCards, setFlippedCards] = useState([]);

  const flipCard = (id) => {
    if (flippedCards.length >= 2) return;

    const card = cards.find((card) => card.id === id);
    if (card.isFlipped || card.isMatched) return;

    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, isFlipped: true } : card))
    );
    setFlippedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    const [first, second] = flippedCards;
    if (first.image === second.image) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === first.id || card.id === second.id
            ? { ...card, isMatched: true }
            : card
        )
      );
      setFlippedCards([]);
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.id === first.id || card.id === second.id
              ? { ...card, isFlipped: false }
              : card
          )
        );
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  const resetGame = () => {
    const duplicate = [...images, ...images];
    const shuffled = shuffle(duplicate).map((img, idx) => ({
      id: idx,
      image: img,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(shuffled);
    setFlippedCards([]);
  };

  return { cards, flipCard, resetGame };
};
