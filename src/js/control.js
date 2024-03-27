export function increaseValue(Counter) {
   let originalValue = Number(Counter.textContent);
   return ++originalValue;
}

export function decreaseValue(Counter) {
   let originalValue = Number(Counter.textContent);

   if (originalValue === 0) {
      return 0;
   } else {
      return --originalValue;
   }
}