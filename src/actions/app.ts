import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../store';

export enum ActionTypes {
  UPDATE_DRAWER_OPENED = '[app] Update Drawer Opened',
  UPDATE_PAGE = '[app] Update Page',
}

interface ActionUpdateDrawerOpened
  extends Action<ActionTypes.UPDATE_DRAWER_OPENED> {
  type: typeof ActionTypes.UPDATE_DRAWER_OPENED;
  drawerOpened?: boolean;
}
interface ActionUpdatePage extends Action<ActionTypes.UPDATE_PAGE> {
  type: typeof ActionTypes.UPDATE_PAGE;
  page?: string;
}

export type Actions = ActionUpdateDrawerOpened | ActionUpdatePage;

type ThunkResult = ThunkAction<void, RootState, undefined, Actions>;

export const navigate: ActionCreator<ThunkResult> = (
  path: string
) => dispatch => {
  const parts = path.slice(1).split('/');
  const page = parts[0] || 'history';

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  return Promise.all([
    dispatch(loadPage(page)),
    dispatch(updateDrawerOpened(false)),
  ]);
};

export const updateDrawerOpened: ActionCreator<ActionUpdateDrawerOpened> = (
  drawerOpened?: boolean
) => {
  return { type: ActionTypes.UPDATE_DRAWER_OPENED, drawerOpened };
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
    case 'upcoming':
      import('../components/pwa-upcoming');
      break;
    case 'upcoming-badging':
      import('../components/pwa-upcoming-badging');
      break;
    case 'upcoming-shortcuts':
      import('../components/pwa-upcoming-shortcuts');
      break;
    case 'summary':
      import('../components/pwa-summary');
      break;
  }
  return dispatch(updatePage(page));
};

const updatePage: ActionCreator<ActionUpdatePage> = (page: string) => {
  return {
    type: ActionTypes.UPDATE_PAGE,
    page,
  };
};
