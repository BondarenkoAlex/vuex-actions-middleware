<template>
  <div>
    <div>Hello my friend</div>
    <button
      class="button is-primary"
      @click="onMethosSecond"
    >
      Button
    </button>
  </div>
</template>
<script>
  import {
    ACTION_FIRST,
    ACTION_SECOND
  } from './store/constants';
  import { actionsMiddleware } from '../../../src';

  import { mapActions } from 'vuex';

  const actionsWithFirstAction = mapActions([ACTION_FIRST]);
  const mapActionsWithFirstAction = actionsMiddleware(actionsWithFirstAction);
  const mapActionsWithFirstActionMiddleware = mapActionsWithFirstAction(mapActions);

  export default {
    props: {},
    methods: {
      ...mapActionsWithFirstActionMiddleware([ACTION_SECOND]),
      onMethosSecond() {
        console.log("------------------------------------------------");
        console.log("Send action: ACTION_SECOND");
        this[ACTION_SECOND]();
      }
    }
  };
</script>
<style
  lang="scss"
  module
>

</style>

