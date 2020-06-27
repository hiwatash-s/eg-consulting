<template>
  <div>
    <header class="page-header">
        <router-link to="/"><h1>EG Consulting -性格診断でエロゲをおすすめ-</h1></router-link>
    </header>

    <nuxt />

  </div>
</template>

<style>
html {
    font-size: 100%;
}
body {
    font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", sans-serif;
    line-height: 1.7;
    color: #432;
}
a {
    text-decoration: none;
}
img {
    max-width: 100%;
}
.wrapper {
    max-width: 1100px;
    margin: auto;
    padding: 0 4%;
}
/* HEADER ------- */
.page-header {
    text-align: left;
    padding-left: 60px;
    background-color: black;
}
.page-header a {
    font-size: 0.5rem;
    color: #fff;
}

/* 背景 */
.big-bg {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
}

/* 見出し */
.page-title {
    font-size: 5rem;
    font-family: 'Philosopher', serif;
    text-transform: uppercase;
    font-weight: normal;
}


</style>
