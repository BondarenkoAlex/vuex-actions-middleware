/* eslint-disable import/prefer-default-export,prefer-rest-params */

export function actionsMiddleware(actions) {
  return function (mapActions) {
    return function () {
      const mapActionsOrigin = mapActions(...arguments);
      const args = Array.prototype.slice.call(arguments).pop();

      const objActions = {};
      args.forEach((key) => {
        const originAction = mapActionsOrigin[key];
        objActions[key] = async function (payload) {
          const results = [];
          Object.keys(actions).forEach(async (keyMiddleware) => {
            const action = actions[keyMiddleware];
            const promise = action.call(this, payload);
            results.push(promise);
          });
          await Promise.all(results);
          return originAction.call(this, payload);
        };
      });
      return objActions;
    };
  };
}
