<!-- feature configuration-->
<template>
  <div class="hello">
    <h1>Prime Factorization</h1>
    <input type = "number" min = "1" v-model="myNum"/>
    <h1 v-html="exponent"></h1>
    <h4>
      Your final result:{{myNum}} <code ref="h">{{ primes }}</code>
    </h4> 
  </div>
</template>


<!-- Prime Factor-->
<script>
export default {
  name: 'Prime',
  data () {
    return {
      myNum: 1
    }
  },


  computed: {   //<!--  TODO : build exponent , factorization , power-->
    exponent () {
      var r = this.power
      var html = this.myNum + '=' + r.map((l) => {
        return l[0] + '<sup>' + l[1] + '</sup>'
      }).join('')
      return html
    },
    factorize () {
      return this.getprime(this.myNum)
    },
    power () {  // calculate power 
      function getPower(t, i) {
        var power = 0
        while (i % t == 0) {
          i /= t
          power++
        }
        return power
      }
      var power = this.factorize
      var list = power.map((o) => {
        return [
          o,
          getPower(o, this.myNum)
        ]
      })
      return list
    },
    primes () { // return prime
      return this.range(this.myNum).filter((o) => {
        return this.isPrime(o)
      })
    }
  },
  methods: {
    factors (object) {   // factor command 
      var ms = this.range(object)
      return ms.filter((m) => {
        return object % m == 0
      })
    },
    range(p) {
      p = parseInt(p)
      var list = []    //push element on range 
      for (var i = 1; i < p + 1; i++) {
        list.push(i)
      }
      return list
    },
    isPrime(s) {  //calculate prime
      return this.factors(s).length == 2
    },
    selectText(element) {
      var range;
      if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);  //print result
      }
    },
    getprime (n) {
      var nums = this.range(n)
      return nums.filter((m) => {
        return n % m == 0 && this.isPrime(m)
      })
    }
  }
}
</script>



<style scoped>
input {
  font-size: 22px;
}
code {
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #ddd;
  padding: .2em;
}
</style>