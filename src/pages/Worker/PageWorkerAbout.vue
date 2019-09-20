<template>
  <div>
    <OkoTitle 
      :title="`${ clientName } || Данные о исполнителе`" />

    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Avatar">
            <img 
              :src="workerAvatarLink(worker)" 
              alt="" 
              class="Avatar-Img">
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <router-link
          class="Link Color_blue"
          :to="{name: 'PageWorkerSalary', params: { id: '1'}}"
        >
          Расчет зарплаты и авансирование
        </router-link>
    </div>
    <div class="MainSection-Row MainSection-Row_size_add">
        <form action="" class="Form Form_workers">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                  <div class="Input">
                      <p class="Label">ИНН</p>
                      <div class="Input-Text">{{ worker.worker_inn || '' }}</div>
                  </div>
                </div>
                <div class="Form-Column">
                  <div class="Input">
                      <p class="Label">Должность</p>
                      <div class="Input-Text">{{ worker.worker_position || '' }}</div>
                  </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Телефоны</p>
                        <div>
                            <p 
                                class="Input-Text"
                                v-for="(phone, index) of chooseByTypeOfField('Телефон')"
                                :key="index"
                            >
                                {{ phone.value1 | formatPhone }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Email</p>
                        <div>
                            <p 
                                class="Input-Text"
                                v-for="(email, index) of chooseByTypeOfField('Email')"
                                :key="index"
                            >
                                {{ email.value1 }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        clientName: {
            required: true,
            type: String
        }
    },
    computed: {
        ...mapState({
            worker: state => state.workers.item
        }),
    },
    methods: {
        workerAvatarLink(worker) {
            let link = '/img/workers/avatar/no.jpg';
            
            if (worker.photo_link) {
                link = worker.photo_link
            }

            return link;
        },
        chooseByTypeOfField(type) {
            if (this.worker.worker_textinfo) {
                
                return this.worker.worker_textinfo.filter(item => {
                    return item.textinfo_type === type;
                });
            }
            return '';
        }
    }
}
</script>

<style scoped>
.MainSection-Row_title {
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px; }

.MainSection-Row_size_add {
  max-width: 650px; }

.Form-Row .Form-Row {
  margin-bottom: 5px; }
  .Form-Row .Form-Row:last-of-type {
    margin-bottom: 0; }
.Input-Text {
    padding-top: 0;}
.Input-Text:first-child {
  padding-top: 8px; }

.Heading_lvl2.Color_black {
  color: #000000; }

.MainSection-Row_size_add {
  max-width: 650px; }

.Form_workers .Form-Row .Form-Row {
  margin-bottom: 5px; }
  .Form_workers .Form-Row .Form-Row:last-of-type {
    margin-bottom: 0; } 

</style>
