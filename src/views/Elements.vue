<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Elements</h2>
          <button class="button refresh-button" @click="loadElements()">
            <i class="fas fa-sync"></i>
          </button>
          <router-link
            tag="button"
            class="button add-button"
            :to="{ name: 'Elements-detail', params: { id: 0 } }"
          >
            <i class="fas fa-plus"></i>
          </router-link>
          <ul>
            <li v-for="element in Elements" :key="element.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="element.name" class="name">
                      {{ element.name }} 
                    </div>
                    <div class="description">{{ element.description }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <router-link
                    tag="button"
                    class="link card-footer-item"
                    :to="{ name: 'element-detail', params: { id: element.id } }"
                  >
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </router-link>
                </footer>
              </div>
            </li>
          </ul>
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
    <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal"
     
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';

export default {
  name: 'Elements',
  data() {
    return {
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    await this.loadElements();
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    async loadElements() {
      this.message = 'getting the Elements, please be patient';
      await this.getElementsAction();
      this.message = '';
    },
  },

};
</script>
