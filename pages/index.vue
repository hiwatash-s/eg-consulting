<template>
  <div id="home" class="big-bg">
        <div class="home-content wrapper">
            <h2 class="page-title">EG Consulting</h2>
            <p>あなたにオススメの美少女ゲーム(エロゲ)を手配いたします</p>
            <br>
            <router-link to='/question' class="button">診断する</router-link>
        </div><!-- /.home-content -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
/* 背景 */
#home {
    background-image: url(/index.jpg);
    min-height: 100vh;
}
#home .page-title {
    text-transform: none;
}

/* HOME -------- */
.home-content {
    text-align: center;
    padding-top: 12%;
}
.home-content p {
    font-size: 1.125rem;
    margin: 10px 0 42px;
}

/* ボタン */
.button {
    font-size: 1.375rem;
    background: #5b5c76;
    color: #fff;
    border-radius: 5px;
    padding: 18px 32px;
}
.button:hover {
    background: #414253;

}


/* スマホ対応 */
@media screen and (max-width:480px) {
.page-title {
    font-size: 3rem;
    font-family: 'Philosopher', serif;
    text-transform: uppercase;
    font-weight: normal;
}

.home-content {
    text-align: center;
    padding-top: 36%;
}

.home-content p {
    font-size: 1.125rem;
    margin-top: 12%;
    margin-bottom: 14%;
}

}

</style>
