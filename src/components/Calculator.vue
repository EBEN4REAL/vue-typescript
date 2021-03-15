<template>
  <div>
    <div id="calWrap">
      <div class="top">
        <div class="output">{{total}}</div>
      </div>
      <div id="keys">
          <button class="digit-0" @click="key(0)">0</button>
          <button class="digit-1"  @click="key(1)">1</button>
          <button class="digit-2" @click="key(2)">2</button>
          <button class="digit-3" @click="key(3)">3</button>
          <button class="digit-4"  @click="key(4)">4</button>
          <button class="digit-5" @click="key(5)">5</button>
          <button class="digit-6"  @click="key(6)">6</button>
          <button class="digit-7"  @click="key(7)">7</button>
          <button class="digit-8"  @click="key(8)">8</button>
          <button class="digit-9"  @click="key(9)">9</button>
          <button class="op-add" @click="key('+')">+</button>
          <button class="op-sub" @click="key('-')">-</button>
          <button class="op-mul" @click="key('*')">*</button>
          <button class="op-div"  @click="key('/')">/</button>
          <button class="eq"  @click="equal">=</button>
          <button class="clear" @click="clear">C</button>
      </div>
  </div>  
  </div> 
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    // msg: String
  }
})
export default class Calculator extends Vue {
    total: any  = ''

    key (num: string | number) {
        if(this.total.charAt(this.total.length - 1) == '-' && num == '-') {
            return
        } 
        this.total = this.total + num
    }
    clear() {
        this.total = '';
    }
    equal() {
        let output = this.total;
        output = eval(output.replace(/\b0(\d+)\b/g, '$1'));
        if(output == Infinity || output == -Infinity ) {
            this.total = ''
            return
        }
        this.total = parseFloat(output).toFixed(2) ;
    } 
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
body {
  font-family: 'Open Sans', sans-serif;
  background: #4894D6  !important;
}
body #calWrap {
  background-color: #77889a;
  border-radius: 23px;
  padding: 2em 1em 1em 1em;
  margin: auto;
  width: 292px;
  clear: both;
  display: table;
  margin-top: 100px;
}
body .top input {
  height: 36px;
  width: 90%;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  margin: 0 0 14px 0;
  border: 0;
  padding: 0 1em;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
}
.output {
    width: 90%;
    height: 50px;
    padding-left: 20px;
    padding-top: 20px;
    background: white;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
}
body #keys button {
  cursor: pointer;
  width: 66px;
  height: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 2em;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
  margin: 0 7px 21px 0;
  float: left;
  transition: all 0.2s ease;
}
body #keys button:hover {
  background-color: #D6D6D6;
}
body #keys .zero {
  width: 138px !important;
}
body #keys .clear {
  background-color: #ffd900 !important;
}

</style>
