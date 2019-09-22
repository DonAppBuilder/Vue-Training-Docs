Vue.component("tabs", {
  template: `
  <div>
    <div class="tabs">
        <ul>
            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
        </ul>
    </div>

    <div class="tabs-details">
        <slot></slot>
    </div>
    </div>
    
    `,

  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
});

Vue.component("tab", {
  template: `
        <div v-show="isActive"><slot></slot></div>
    `,

  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
});
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

Vue.component("message", {
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
});

Vue.component("modal", {
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

new Vue({
  el: "#resources",
  data: {
    message:
      "You can change this Message in the input or press the button to reverse it!",
    seen: true,
    showModal: false,
    todos: [
      { text: "Set up my Tabs" },
      { text: "Learn Vue" },
      { text: "Add what I leard to the Tabs" }
    ],
    tasks: [
      { description: "Keep Practicing", completed: true },
      { description: "Add to Page", completed: true },
      { description: "Practice", completed: false },
      { description: "Add to Page", completed: false },
      { description: "Just making things up here", completed: false },
      { description: "And another one", completed: true },
      { description: "Added to my Laptop", completed: true }
    ],
    componentTasks: [
      { id: 0, text: "test" },
      { id: 1, text: "test2" },
      { id: 2, text: "test3" }
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  },

  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  }
});
