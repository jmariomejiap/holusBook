// helper function used in HomeAction.

interface RecipeContent {
  [key: string]: any;
}

const filterCategory = (data: Array<any>, name: string) => {
  return data.filter((objRecipe: RecipeContent) => {
    if (objRecipe.category === name) {
      return objRecipe;
    }
  });
}

export default filterCategory;
