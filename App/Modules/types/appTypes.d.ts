export namespace HomeIndex {
  export interface Props {
    navigation: any;
    tourTaken: boolean;
    categoriesData: Array<RecipeData>;
    set_app_name: () => any;
    fetchData: () => any;
  }

  export interface State {
    Mounted: boolean;
    isRefreshing: boolean;
  }
}


export namespace Tour {
  export interface Props {
    navigation: any;
    handleTourState: () => any;
  }
}

export namespace FavoritesView {
  export interface Props {
    navigation: any;
  }
}


export namespace ListRecipesView {
  export interface Props {
    navigation: any;
    soups: Array<RecipeData>;
    appetizers: Array<RecipeData>;
    dinner: Array<RecipeData>;
    salads: Array<RecipeData>;
    desserts: Array<RecipeData>;
  }
}


// Super Generic object
export interface ObjectKeysStringsAndValuesAny {
  [key:string]: any;
}

export interface NavigationProps {
  navigation: any;
}

export interface RecipeData {
  key: string;
  title: string;
  time: string;
  portions: number;
  category: string;
  ingredients: Array<string>;
  media: Array<string>;
  directions: Array<string>;
}