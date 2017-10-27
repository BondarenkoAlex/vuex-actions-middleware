/* eslint-disable import/prefer-default-export */
import { createNamespacedHelpers } from 'vuex';
import { actionsMiddleware } from '../../src/actionsMiddleware';
import { ACTIONS } from '../../src/store/auth/constants';

const { mapActions } = createNamespacedHelpers('auth');
const actionsWithAuth = mapActions([ACTIONS.TEST]);
const mapActionsWithAuth = actionsMiddleware(actionsWithAuth);
export { mapActionsWithAuth };

