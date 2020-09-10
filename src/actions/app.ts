import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../store';

export enum ActionTypes {
  UPDATE_PAGE = '[app] Update Page',
}

interface ActionUpdatePage extends Action<ActionTypes.UPDATE_PAGE> {
  type: typeof ActionTypes.UPDATE_PAGE;
  page?: string;
}

export type Actions = ActionUpdatePage;

type ThunkResult = ThunkAction<void, RootState, undefined, Actions>;

export const navigate: ActionCreator<ThunkResult> = (
  path: string
) => dispatch => {
  const parts = path.slice(1).split('/');
  const page = parts[0] || 'history';

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));
};

const loadPage: ActionCreator<ThunkResult> = (page: string) => dispatch => {
  switch (page) {
    case 'history':
      import('../components/pwa-history');
      break;
    case 'intro':
      import('../components/pwa-intro');
      break;
    case 'installable':
      import('../components/pwa-installable');
      break;
  }
  dispatch(updatePage(page));
};

const updatePage: ActionCreator<ActionUpdatePage> = (page: string) => {
  return {
    type: ActionTypes.UPDATE_PAGE,
    page,
  };
};
