const path = require('path');


module.exports.tmp = (name) => {
    name = path.basename(name);
    name = name.replace(/\.vue$/, '');

    return `<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>



<script>
export default {
  name: '${name}',
  data() {
    return {
      msg: 'Is a "${name}" component'
    };
  }
};
</script>


<style lang="scss">
</style>
`;
};
