export namespace HomeIndex {
  export interface Props {
    navigation: any;
    tourTaken: boolean;
    categoriesData: Array<ObjectKeysStringsAndValuesAny>;
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

// Super Generic object
export interface ObjectKeysStringsAndValuesAny {
  [key:string]: any;
}

export interface NavigationProps {
  navigation: any;
}