// import axios from 'axios'
import {
  ACTION_FIRST,
  ACTION_SECOND,
  MUTATIONS_END_ACTION_SECOND_FAILURE,
  MUTATIONS_START_ACTION_SECOND,
  MUTATIONS_END_ACTION_SECOND_SUCCESS,
  MUTATIONS_END_ACTION_FIRST_FAILURE,
  MUTATIONS_END_ACTION_FIRST_SUCCESS,
  MUTATIONS_START_ACTION_FIRST,
} from './constants';
import { randomBool } from '../utils';

// get test data
// const PROJECTS_DATA = 'https://jsonplaceholder.typicode.com/todos';

export default {
  state: {},
  mutations: {
    [MUTATIONS_START_ACTION_FIRST]: () => {
      console.log(MUTATIONS_START_ACTION_FIRST);
    },
    [MUTATIONS_END_ACTION_FIRST_SUCCESS]: () => {
      console.log(MUTATIONS_END_ACTION_FIRST_SUCCESS);
    },
    [MUTATIONS_END_ACTION_FIRST_FAILURE]: () => {
      console.log(MUTATIONS_END_ACTION_FIRST_FAILURE);
    },
    [MUTATIONS_START_ACTION_SECOND]: () => {
      console.log(MUTATIONS_START_ACTION_SECOND);
    },
    [MUTATIONS_END_ACTION_SECOND_SUCCESS]: () => {
      console.log(MUTATIONS_END_ACTION_SECOND_SUCCESS);
    },
    [MUTATIONS_END_ACTION_SECOND_FAILURE]: () => {
      console.log(MUTATIONS_END_ACTION_SECOND_FAILURE);
    },
  },
  // getters: {
  //   completedProjects: state => {
  //     return state.projects.filter(project => project.completed).length
  //   },
  //   projectCount: state => {
  //     return state.projects.length
  //   }
  // },
  actions: {
    [ACTION_FIRST]({ commit }) {
      console.group();
      commit(MUTATIONS_START_ACTION_FIRST);
      return new Promise((resolve) => {
        setTimeout(function () {
          if (randomBool()) {
            commit(MUTATIONS_END_ACTION_FIRST_SUCCESS);
            resolve();
          } else {
            commit(MUTATIONS_END_ACTION_FIRST_FAILURE);
            resolve();
          }
          console.groupEnd();
        }, 2000);
      });

    },
    [ACTION_SECOND]({ commit }) {
      console.group();
      commit(MUTATIONS_START_ACTION_SECOND);
      return new Promise((resolve) => {
        setTimeout(function () {
          if (randomBool()) {
            commit(MUTATIONS_END_ACTION_SECOND_SUCCESS);
          } else {
            commit(MUTATIONS_END_ACTION_SECOND_FAILURE);
          }
          console.groupEnd();
        }, 2000);
      });
    }
  }
};
