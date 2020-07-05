<template>
    <div id="home" class="big-bg">
        <div class="home-content wrapper">
            <h2 class="page-title">EG Consulting</h2>
            <p>あなただけにオススメの美少女ゲーム(エロゲ)を手配いたします</p>
            <br>
            <br>
            <router-link to='/question' class="button">診断する</router-link>
            <div class="description-container">
                <h2>Why</h2>
                <p>
                    刻一刻と時間というリソースが失われ続けています。<br>
                    自分の趣味嗜好と合わない美少女ゲームをプレイしてしまうと、あなたの貴重な時間は無為に帰してしまいます。<br>
                    どんな名作と呼ばれる作品でも必ず人を選びます。<br>
                    世界的文学やベストセラー小説が人を選ぶようにエロゲが人を選ぶのです。
                </p>
                <p>
                    本性格診断を受診することで、あなたに合わない美少女ゲーム(エロゲ)をプレイするリスクを限りなく減らすことができます。<br>
                    自覚的に自己の性格にマッチする作品を選択することができます。<br>
                    あなたの貴重な時間を有意義に過ごすために受診をオススメいたします。
                </p>
                <h2>How</h2>
                <p>
                    あなたの趣味嗜好を問う12の質問をさせて頂きます。<br>
                    独自の質問アルゴリズムを利用し、質の高い性格診断を実現します。<br>
                    深く考えず、自己を飾らず、直感で回答を選んでください。<br>
                    たった5分で自分自身の本質とオススメエロゲを見つけることができます。
                </p>
                <h2>Out of box</h2>
                <p>
                    診断結果として「Out of box」枠を用意しています。<br>
                    これはあなたの趣味嗜好を広げるための作品達です。あなたの現在の趣向と完全一致はしていないけれど、新しい価値観を取得できる可能性を秘めています。<br>
                    挑戦が人生を豊かにします。<br>
                    是非「Out of box」枠を参考にして、箱の外へ出ることを検討してみてください。
                </p>
            </div>


            <!-- <router-link to='/question' class="button">診断する</router-link> -->
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
    min-height: 180vh;
}
#home .page-title {
    text-transform: none;
}

/* HOME -------- */
.home-content {
    text-align: center;
    padding-top: 10%;
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

/* サイト説明 */
.description-container {
    text-align: left;
    max-width: 800px;
    margin: 100px auto 0px;
    padding: 2% 4%;
    /* color: white; */
    background: rgba(255,255,255,0.8); 
    border-radius: 10px;
}


/* スマホ対応 */
@media screen and (max-width:480px) {
#home {
    background-image: url(/mobile.jpg);
    min-height: 200vh;
}

.page-title {
    font-size: 3rem;
    font-family: 'Philosopher', serif;
    text-transform: uppercase;
    font-weight: normal;
}

.home-content {
    text-align: center;
    padding-top: 20%;
}

.home-content p {
    font-size: 1.125rem;
    margin-top: 12%;
    margin-bottom: 14%;
}

}

</style>
