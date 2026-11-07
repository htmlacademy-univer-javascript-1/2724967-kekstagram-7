import { DESCRIPTIONS, NAMES, MESSAGES } from './data.js';

// ---------- Вспомогательные функции ----------
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

// ---------- Счётчик для уникальных id комментариев ----------
let commentId = 1;

// ---------- Создание одного комментария ----------
const createComment = () => {
  const sentencesCount = getRandomInt(1, 2); // 1 или 2 предложения
  const used = new Set();
  const parts = [];

  while (parts.length < sentencesCount) {
    const index = getRandomInt(0, MESSAGES.length - 1);
    if (!used.has(index)) {
      used.add(index);
      parts.push(MESSAGES[index]);
    }
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: parts.join(' '),
    name: getRandomElement(NAMES),
  };
};

// ---------- Создание массива комментариев ----------
const createComments = () => {
  const count = getRandomInt(0, 30);
  return Array.from({ length: count }, createComment);
};

// ---------- Создание одной фотографии ----------
const createPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: createComments(),
});

export { getRandomInt, getRandomElement, createComment, createComments, createPhoto };
