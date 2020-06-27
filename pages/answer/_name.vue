<template>
    <div>
        <div id="answer" class="big-bg" v-if="answer">
            <div class="answer-title">
                <h2 class="page-title">診断結果</h2>
                <h3>あなたは</h3>
                <h2 class="page-title">{{ answer.description }}</h2>
                <h3>と診断されました</h3>
            </div>

            <div class="wrapper">
                <p>あなたには以下至極のゲームをオススメします</p>
                <br>
                <h2>商用作品</h2>
                <div class="grid">
                    <div class="item" v-for="shoyo in answer.shoyo_list" :key="shoyo.name">
                        <a :href="shoyo.link" target=”_blank”><img class="item_image" :src="shoyo.picture" alt=""></a>
                        <p>{{ shoyo.name }}</p>
                    </div>
                </div><!-- ./grid -->

                <h2>同人作品</h2>
                <div class="grid">
                    <div class="item" v-for="dojin in answer.dojin_list" :key="dojin.name">
                        <a :href="dojin.link" target=”_blank”><img class="item_image" :src="dojin.picture" alt=""></a>
                        <p>{{ dojin.name }}</p>
                    </div>
                </div><!-- ./grid -->

                <h2>見識を広げるために</h2>
                <p>以下のゲームもオススメします</p>
                <div class="grid">
                    <div class="item" v-for="out in answer.out_list" :key="out.name">
                        <a :href="out.link" target=”_blank”><img class="item_image" :src="out.picture" alt=""></a>
                        <p>{{ out.name }}</p>
                    </div>
                </div><!-- ./grid -->


            <div class="twitter-button-container">
                <a :href="tweet_url" class="twitter-button"><span class="fa fa-twitter"></span>診断結果をシェア</a>
            </div>

                <div class="Advertisement">
                    <ins class="widget-banner"></ins><script class="widget-banner-script" src="https://widget-view.dmm.com/js/banner_placement.js?affiliate_id=justy123-001&banner_id=56_728_90"></script>
                </div>
            </div>
        </div>
        <footer class="page-footer">
            <router-link to="/"><h1>Topへ</h1></router-link>
        </footer>
    </div>
</template>



<script>
export default {
    head () {
        return {
            script: [
                { src: 'https://platform.twitter.com/widgets.js'},
                { src: 'https://www.dlsite.com/js/blogparts.js'}
            ]
        }
    },
    created: function() {
        this.$store.dispatch('answers/init')
    },
    computed: {
        answer() {
            // return this.$store.state.answers.answers
            return this.$store.getters['answers/getAnswerByName'](this.$route.params.name)
        },
        tweet_url() {
            return "http://twitter.com/intent/tweet?url=https://www.eg-consulting.info/answer/" + this.answer.name + "&text=" + "私はコンサルタントに「" + this.answer.description + "」と判定されました" + "&hashtags=EGConsulting"
        }
    }
}
</script>



<style>
#answer {
    background-image: url(/answer.jpg);
    min-height: 150vh;
}

.answer-title {
    text-align: center;
    padding-top: 6%;
    padding-bottom: 8%;
}

.grid {
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 2%;
    margin-bottom: 8%;
}

.item_image {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.sns_icon {
    width: 40px;
    height: 40px;
}

.Advertisement {
    margin-top: 6%;
    text-align: center;
}

.page-footer {
    text-align: center;
    background-color: black;
}

.page-footer a {
    font-size: 0.5rem;
    color: white;
}

.twitter-button-container {
    text-align: center;
    margin: 100px 0 20px;
}

.twitter-button {
    background-color: #55acee;
    color: #fff;
    border-radius: 5px;
    padding: 10px 90px;
}

.fa {
    margin-right: 10px;
}

/* スマホ対応 */
@media screen and (max-width:480px) {
.page-title {
    font-size: 1.8rem;
    font-family: 'Philosopher', serif;
    text-transform: uppercase;
    font-weight: normal;
}
.answer-title {
    text-align: center;
    padding-top: 10%;
    padding-bottom: 16%;
}
.answer-title h3 {
    margin: 4% 0 4%;
}
.grid {
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr 1fr;
    margin-top: 2%;
    margin-bottom: 8%;
}
.item_image {
    width: 100%;
    height: 100px;
    object-fit: cover;
}
.share {
    padding-top: 8%;
}
}

</style>