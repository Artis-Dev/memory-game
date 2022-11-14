const levels = {
  easy: {
    1: {
      cards: 4,
      required: 4,
    },
    2: {
      cards: 8,
      required: 12,
    },
    3: {
      cards: 12,
      required: 24,
    },
  },
  normal: {
    1: {
      cards: 6,
      required: 6,
    },
    2: {
      cards: 12,
      required: 18,
    },
    3: {
      cards: 18,
      required: 36,
    },
  },
  hard: {
    1: {
      cards: 8,
      required: 8,
    },
    2: {
      cards: 16,
      required: 24,
    },
    3: {
      cards: 24,
      required: 48,
    },
  },
};

export default levels;
