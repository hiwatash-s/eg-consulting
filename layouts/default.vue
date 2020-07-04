<template>
  <div>
    <header class="page-header">
        <h1><router-link to="/">EG Consulting 性格診断でエロゲをおすすめ</router-link></h1>
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
    padding: 8px 0 14px 60px;
    line-height: 0;
    background-color: black;
}
.page-header a {
    font-size: 1rem;
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

/* スマホ対応 */
@media screen and (max-width:480px) {
.page-header {
    text-align: center;
    padding-left: 0px;
    background-color: black;
}
}

</style>
