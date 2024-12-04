import {
  createNavigationContainerRef,
  CommonActions,
  StackActions,
} from '@react-navigation/native';

type RootStackParamList = {
  TabNavigator:undefined;
  Home: undefined;
  Login: undefined;
  Profile: undefined;
  Search: undefined;
  Favourites: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function push(routeName: string, params?: Record<string, any>): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}

function reset(routeName: string): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
}

function getCurrentRoute(): string | undefined {
  return navigationRef.getCurrentRoute()?.name;
}

const getRouteName = (): string => {
  return navigationRef.getCurrentRoute()?.name ?? '';
};

const NavigationService = {
  navigate,
  push,
  goBack,
  reset,
  getCurrentRoute,
  getRouteName,
};

export default NavigationService;
