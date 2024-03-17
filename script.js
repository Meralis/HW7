const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, ...props) => array.filter(number => !props.includes(number));

const filteredArray = removeElement(array, 5);
console.log(filteredArray);



