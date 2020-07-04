<template>
    <div id="question" class="big-bg">
        <div class="question-content wrapper"> 
            <div class="question-container" v-if="question_number != 999">
                <h2 class="question-title">
                    あなたの趣味趣向から判定させて頂きます
                    <br>
                    以下の質問にご回答ください
                </h2>
                <p>
                    1: 当てはまらない
                    <br>
                    2: あまり当てはまらない
                    <br>
                    3: どちらとも言えない
                    <br>
                    4: 少し当てはまる
                    <br>
                    5: 当てはまる
                </p>
            </div>
        </div>
        
        <div class="question-content wrapper" v-if="question"> 
            <div class="question-container">
            <p class="question-title">質問群 {{ question_alphabet }}</p>
            <p style="font-weight: bold">
                {{ question.description }}
            </p>
                <ul class="selectradio selectradio-inline">
                    <li class="selectradio-item">
                        <input type="radio" v-model="picked" id="select1" value="1">
                        <label for="select1" class="selectradio-label">1</label>
                    </li>
                    <li class="selectradio-item">
                        <input type="radio" v-model="picked" id="select2" value="2">
                        <label for="select2" class="selectradio-label">2</label>
                    </li>
                    <li class="selectradio-item">
                        <input type="radio" v-model="picked" id="select3" value="3">
                        <label for="select3" class="selectradio-label">3</label>
                    </li>
                    <li class="selectradio-item">
                        <input type="radio" v-model="picked" id="select4" value="4">
                        <label for="select4" class="selectradio-label">4</label>
                    </li>
                    <li class="selectradio-item">
                        <input type="radio" v-model="picked" id="select5" value="5">
                        <label for="select5" class="selectradio-label">5</label>
                    </li>
                </ul>
            </div><!-- ./question-container -->
        </div><!-- ./question-content -->

        <div class="answer-button-container wrapper">
            <button v-if="question_number < 8" @click="nextInFirst" class="answer-button">次へ</button>
            <button v-else-if="question_number == 8" @click="decideFirst" class="answer-button">次へ</button>
            <router-link v-else-if="question_number == 999" :to="{ name: 'answer-name', params: { name: final_answer } }"> <button class="answer-button final-button">診断結果へ</button></router-link>
            <button v-else-if="question_number % 100 == 4" @click="decideSecond" class="answer-button">次へ</button>
            <button v-else @click="nextInSecond" class="answer-button">次へ</button>
        </div>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            question_number: 1,
            question_alphabet : "A",
            picked: 3,
            // story, ero, game, iyashi
            first_point_list : [0, 0, 0, 0] ,
            // naki, gimmick | normal, abnormal | rpg, slg | moe, gyagu
            second_point_list : [0, 0],
            final_answer: ''
        }
    },
    created: function() {
        this.$store.dispatch('questions/init')
    },
    methods: {
        // 得点を計算して次の質問へ(first=最初の8問)
        nextInFirst: function() {
            if ( this.question.type == "story" ) {
                this.first_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "ero" ) {
                this.first_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "game" ) {
                this.first_point_list[2] += Number(this.picked)
            } else if ( this.question.type == "iyashi" ) {
                this.first_point_list[3] += Number(this.picked)
            } 
            this.question_number += 1
            this.picked = 3
        },
        // firstでの得点結果に基づいて、second(4問)の質問を決定する
        decideFirst: function() {
            // まず８回目の計算実施
            if ( this.question.type == "story" ) {
                this.first_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "ero" ) {
                this.first_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "game" ) {
                this.first_point_list[2] += Number(this.picked)
            } else if ( this.question.type == "iyashi" ) {
                this.first_point_list[3] += Number(this.picked)
            } 
            // 4属性の中から最も得点の高いtypeを探して次の質問番号を決定。詳細(second)質問へ
            var calculated_index = this.first_point_list.indexOf(Math.max(...this.first_point_list))
            console.log(calculated_index)
            if ( calculated_index == 0 ) {
                this.question_number = 101
                this.question_alphabet = "B"
            } else if ( calculated_index == 1 ) {
                this.question_number = 201
                this.question_alphabet = "C"
            } else if ( calculated_index == 2 ) {
                this.question_number = 301
                this.question_alphabet = "D"
            } else if ( calculated_index == 3 ) {
                this.question_number = 401
                this.question_alphabet = "E"
            }
            this.picked = 3
        },
        // 得点を計算して次の質問へ(second=最後の4問)
        nextInSecond: function() {
            // naki, gimmick | normal, abnormal | rpg, slg | moe, gyagu
            if ( this.question.type == "naki" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "gimmick" ) {
                this.second_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "normal" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "abnormal" ) {
                this.second_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "rpg" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "slg" ) {
                this.second_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "moe" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "gyagu" ) {
                this.second_point_list[1] += Number(this.picked)
            } 
            this.question_number += 1
            this.picked = 3
        },
        // second(最後の4問)での得点結果に基づいて、最終的なルーティングパスを決定する
        decideSecond: function() {
            // まず12回目の計算実施
            if ( this.question.type == "naki" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "gimmick" ) {
                this.second_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "normal" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "abnormal" ) {
                this.second_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "rpg" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "slg" ) {
                this.second_point_list[1] += Number(this.picked)
            } else if ( this.question.type == "moe" ) {
                this.second_point_list[0] += Number(this.picked)
            } else if ( this.question.type == "gyagu" ) {
                this.second_point_list[1] += Number(this.picked)
            } 
            // 得点の高い添字 と 質問番号帯 でルーティングパス決定
            var calculated_second_index = this.second_point_list.indexOf(Math.max(...this.second_point_list))
            // naki, gimmick | normal, abnormal | rpg, slg | moe, gyagu
            if ( calculated_second_index == 0 ) {
                if ( this.question_number > 400 ) {
                    this.final_answer = 'moe'
                } else if ( this.question_number > 300 ) {
                    this.final_answer = 'rpg'
                } else if ( this.question_number > 200 ) {
                    this.final_answer = 'normal'
                } else if ( this.question_number > 100 ) {
                    this.final_answer = 'naki'
                }
            } else if ( calculated_second_index == 1 ) {
                if ( this.question_number > 400 ) {
                    this.final_answer = 'gyagu'
                } else if ( this.question_number > 300 ) {
                    this.final_answer = 'slg'
                } else if ( this.question_number > 200 ) {
                    this.final_answer = 'abnormal'
                } else if ( this.question_number > 100 ) {
                    this.final_answer = 'gimmick'
                }
            } 
            this.question_number = 999
        }
    },
    computed: {
        // 質問番号に応じて、質問文とタイプを取得
        question() {
            return this.$store.getters['questions/getQuestionByNumber'](this.question_number)
        }
    }
}
</script>

<style>
#question {
    background-image: url(/question.jpg);
    min-height: 110vh;
}

.question-content {
    text-align: center;
    padding-top: 3%;
}
.question-content p {
    font-size: 1.25rem;
    text-align: left;
    margin: 10px 0 24px;
}
.question-container {
    max-width: 700px;
    margin: auto;
    padding: 2% 4%;
    background-color: #fff;
    border-radius: 10px;
}


.selectradio {
    list-style: none;
    margin: 0;
    padding: 0; }
    .selectradio .selectradio-item {
        margin: 5px 0;
        padding: 0; }
    .selectradio input[type="radio"] {
        display: none; }
    .selectradio input[type="radio"]:checked + label {
        background: #C0E8FF;
        color: #333333;
        border: 2px solid #28A7E1; }
    .selectradio .selectradio-label {
        display: block;
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 45px;
        padding: 0 5px;
        cursor: pointer;
        color: #333333;
        border: 2px solid rgba(0, 0, 0, 0);
        border-radius: 5px;
        background: #e6f0f0;
        transition: 0.5s;
        border-radius: 4px; }
    .selectradio.selectradio-inline .selectradio-item {
        display: inline-block; }
    .selectradio.selectradio-inline .selectradio-label {
        display: inline-block;
        width: 100px; }

.answer-button {
    font-size: 1.375rem;
    background: #5b5c76;
    color: #fff;
    border-radius: 5px;
    padding: 18px 100px;
}
.answer-button:hover {
    background: #414253;

}

.answer-button-container {
    text-align: center;
    margin-top: 4%;
}

.final-button {
    margin: 20% auto;
    font-size: 2.5rem;
}


/* スマホ対応 */
@media screen and (max-width:480px) {
.question-title {
    font-size: 1rem;
    font-weight: normal;
}
.question-content p {
    font-size: 1rem;
    text-align: left;
    margin: 10px 0 24px;
}
.final-button {
    margin: 70% auto;
    font-size: 1.5rem;
}
.selectradio.selectradio-inline .selectradio-label {
    display: inline-block;
    width: 50px; }
}


</style>