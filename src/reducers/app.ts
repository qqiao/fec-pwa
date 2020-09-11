import { Actions, ActionTypes } from '../actions/app';

export interface State {
  drawerOpened?: boolean;
  page?: string;
}

const DEFAULT_STATE: State = {
  page: 'intro',
};

const app = (state: State = DEFAULT_STATE, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.UPDATE_DRAWER_OPENED:
      return {
        ...state,
        drawerOpened: action.drawerOpened,
      };
    case ActionTypes.UPDATE_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default app;
