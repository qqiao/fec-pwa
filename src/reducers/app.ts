import { Actions, ActionTypes } from '../actions/app';

export interface State {
  page?: string;
}

const DEFAULT_STATE: State = {
  page: 'intro',
};

const app = (state: State = DEFAULT_STATE, action: Actions): State => {
  switch (action.type) {
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
