import {StackActions} from 'react-navigation';
import {CommonActions} from '@react-navigation/routers';

class NavigationAction {
  constructor() {
    this.navigation = {};
  }

  set = navigation => {
    this.navigation = navigation;
  };

  get = () => this.navigation;

  navigate = (routeName, params) => this.navigation.navigate(routeName, params);

  pop = () => this.navigation.pop();

  push = (routeName, params) => this.navigation.push(routeName, params);

  resetTo = (routeName, index = 0, params = {}) => {
    const resetAction = CommonActions.reset({
      index,
      routes: [{name: routeName, params: params}],
    });
    this.navigation.dispatch(resetAction);
  };

  popToTop = () => this.navigation.dispatch(StackActions.popToTop());

  setParams = params => this.navigation.setParams({...params});

  replace = routeName => this.navigation.replace(routeName);

  openDrawer = () => this.navigation.openDrawer();

  closeDrawer = () => this.navigation.closeDrawer();

  goBack = key => this.navigation.goBack(key);
}

export default new NavigationAction();
