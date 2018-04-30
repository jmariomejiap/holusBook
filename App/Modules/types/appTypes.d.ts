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
    favorites: Array<RecipeData>;
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

export namespace RecipeDetailsView {
  export interface Props {
    navigation: any;
    isFavoriteSelected: boolean;
    favorites: Array<RecipeData>;
    addFavorite: (RecipeData: RecipeData) => any;
    removeFavorite: (RecipeData: RecipeData) => any;
    handleFavoriteOn: () => any;
    handleResetFavorite: () => any;
  }
}


export namespace RecipeHeader {
  interface Props {
    navigation: any;
    buttonState: boolean;
    onSelection: () => any;
  }
}


export namespace ListDetailGen {
  interface Props {
    name: string;
    data: Array<string>;
    bigger?: boolean;
  }
}


export namespace SearchView {
  interface Props {
    searchInput: string;
    allData: Array<RecipeData>;
    handleSearchInput: (text: string ) => any;
    navigation: any;
  }
}


export interface NavigationProps {
  navigation: any;
}

export interface RecipeData {
  key: string;
  title: string;
  time: string;
  portions: number;
  calories: number;
  category: string;
  ingredients: Array<string>;
  media: Array<string>;
  directions: Array<string>;
}