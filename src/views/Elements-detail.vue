<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">{{ title }}</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ element.name }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">id</label>
              <label class="input" name="id" readonly>{{ element.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="Name">name</label>
              <input class="input" name="Name" v-model="element.name" />
            </div>
            <div class="field">
              <label class="label" for="description">description</label>
              <input
                class="input"
                name="description"
                v-model="element.description"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="link card-footer-item cancel-button"
            @click="cancelElement()"
          >
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
          <button class="link card-footer-item" @click="saveElement()">
            <i class="fas fa-save"></i>
            <span>Save</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ElementDetail',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      element: {},
    };
  },
  created() {
    if (this.isAddMode) {
      this.element = {
        id: undefined,
        name: '',
        description: '',
      };
    } else {
      this.element = { ...this.getelementById(this.id) };
    }
  },
  computed: {
    ...mapGetters(['getElementById']),
    isAddMode() {
      return !this.id;
    },
    title() {
      return `${this.isAddMode ? 'Add' : 'Edit'} Element`;
    },
  },
  methods: {
    ...mapActions(['updateElementAction', 'addElementAction']),
    cancelElement() {
      this.$router.push({ name: 'Elements' });
    },
    async saveElement() {
      this.element.id
        ? await this.updateElementAction(this.element)
        : await this.addElementAction(this.element);
      this.$router.push({ name: 'Elements' });
    },
  },
};
</script>
