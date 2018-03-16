<template>
<!--顶部bar-->
<mu-appbar class="HeaderBar">
<img class="logo" src="../assets/sxhl_logo.png">
<!--发布帖子 ===未完成-->
<mu-icon-button  icon="send" to="/publish"   slot="right"/>
</mu-appbar>
</template>

<style scoped>
.HeaderBar{
  position:fixed;
  top: 0;
  height: 4rem;
}
.appbar-search-field {
  color: #FFF;
  margin-bottom: 0;
}
.appbar-search-field.focus-state {
  color: #FFF;
}
.appbar-search-field .mu-text-field-hint {
  color: rgba(255, 255, 255, 0.54);
}
.appbar-search-field .mu-text-field-input {
  color: #FFF;
}
.logo{
  width:9rem;
  height:2.8rem;
  position:absolute;
  left:0.5rem;
  top:1rem;
}
</style>
