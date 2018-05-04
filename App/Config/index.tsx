//  AWS configuration endpoints.
const recipesDataPath = 'https://s3-us-west-2.amazonaws.com/holus-book/holus_Complete_Data.json'

const categoriesPath = [
  { key: 'Soups', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Soups.jpg' },
  { key: 'Appetizers', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Appetizers.jpg' },
  { key: 'Dinner', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Dinner.jpg' },
  { key: 'Salads', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Salads.jpg' },
  { key: 'Desserts', uri: 'https://s3-us-west-2.amazonaws.com/holus-book/category_images/Desserts.jpg' },
];

export { recipesDataPath, categoriesPath };
