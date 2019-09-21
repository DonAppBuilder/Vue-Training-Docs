var app1 = Vue.component("message", {
  props: ["title", "body"],

  data() {
    return {
      isVisible: true
    };
  },
  template: `
  <article class="message" v-show="isVisible">
     <div class="message-header">
     {{ title }} 
     <button type="button" @click="isVisible = false">x</button>

     
     </div>

      <div class="message-body">
      {{ body }}
      </div>
    </article>
  `

  // methods: {
  //   hideModal() {
  //     this.isVisible = false;
  //   }
  // }
});
var app1 = new Vue({
  el: "#app1"
});
var app2 = Vue.component("modal", {
  template: `
  <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
            
            </div>        
  `
});
var app2 = new Vue({
  el: "#app2",

  data: {
    showModal: false
  }
});
