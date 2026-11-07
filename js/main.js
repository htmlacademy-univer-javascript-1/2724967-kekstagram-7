import { createPhoto } from './util.js';

// ---------- Итоговый массив из 25 фотографий ----------
const photos = Array.from({ length: 25 }, (_, index) => createPhoto(index));

// Для проверки в консоли:
console.log(photos);
