import { useCallback, useEffect, useState } from 'react';
import { shuffle } from 'lodash';

const createDeck = (images) =>
  shuffle([...images, ...images]).map((image, id) => ({
    id,
    image,
    isFlipped: false,
    isMatched: false,
  }));

const checkMatch = (cards, [first, second]) =>
  cards.map((card) =>
    card.id === first.id || card.id === second.id
      ? { ...card, isMatched: true }
      : card
  );

const hideCards = (cards, [first, second]) =>
  cards.map((card) =>
    card.id === first.id || card.id === second.id
      ? { ...card, isFlipped: false }
      : card
  );

export const useMemoryCard = (images) => {
  const [cards, setCards] = useState(() => createDeck(images));
  const [flippedIds, setFlippedIds] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const flipCard = useCallback(
    (id) => {
      if (isLocked) return;

      const card = cards.find((c) => c.id === id);
      if (!card || card.isFlipped || card.isMatched) return;

      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
      );
      setFlippedIds((prev) => [...prev, id]);
    },
    [cards, isLocked]
  );

  useEffect(() => {
    if (flippedIds.length !== 2) return;

    setIsLocked(true);

    const [firstId, secondId] = flippedIds;
    const first = cards.find((c) => c.id === firstId);
    const second = cards.find((c) => c.id === secondId);

    if (first.image === second.image) {
      setCards((prev) => checkMatch(prev, [first, second]));
      setFlippedIds([]);
      setIsLocked(false);
      return;
    }

    const timer = setTimeout(() => {
      setCards((prev) => hideCards(prev, [first, second]));
      setFlippedIds([]);
      setIsLocked(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [flippedIds, cards]);

  const resetGame = useCallback(() => {
    setCards(createDeck(images));
    setFlippedIds([]);
    setIsLocked(false);
  }, [images]);

  return { cards, flipCard, resetGame };
};
