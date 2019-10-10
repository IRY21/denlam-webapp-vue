<template>
  <div>
    <OkoTitle :title="`${ computedParam_name('worker', worker) } || Редактирование`"/>

    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <router-link
        class="Link Link_back"
        :to="{ name: 'PageWorkerAbout', params: {id: computedParam_currentRouteId}}"
      >Вернуться назад</router-link>
      <h1 class="Heading_lvl1">{{ computedParam_name('worker', worker) }}</h1>
    </div>
    <form class="Form" v-if="pageLoader_isDataLoaded">
      <div class="MainSection-Row MainSection-Row_size_add">
        <h2 class="Heading_lvl2">Тип исполнителя</h2>
        <div class="Form-Row Flex Flex_justify_start">
          <div class="Form-Column Form-Column_auto" style="margin-right: 40px;">
            <OkoRadio v-model="worker.worker_type_id" name="options" :value="'1'">Физ. лицо</OkoRadio>
          </div>
          <div class="Form-Column Form-Column_auto">
            <OkoRadio v-model="worker.worker_type_id" name="options" value="2">Юр. лицо</OkoRadio>
          </div>
        </div>
      </div>
      <div class="MainSection-Row MainSection-Row_size_add">
        <div class="Form-Row">
          <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
              <OkoFileImage
                v-model="worker.photo_link"
                :size="'default'"
                :label="'Фото'"
                :btnText="'Прикрепить файл'"
                :img="worker.photo_link"
              />
            </div>
          </div>
        </div>
        <div class="Form-Row">
          <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
              <OkoInput
                type="text"
                :label="'Логин'"
                v-model="worker.worker_login"
                @blur="vuelidateCheck_input($event, 'worker_login', 'worker')"
              />
            </div>
          </div>
        </div>
        <div class="Form-Row">
          <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
              <OkoInput
                type="password"
                :label="'Пароль'"
                v-model="worker.worker_password"
                @blur="vuelidateCheck_input($event, 'worker_password', 'worker')"
              />
            </div>
          </div>
        </div>
        <div v-show="worker.worker_type_id === '1'" class="Form-Row">
          <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
              <OkoInput
                type="text"
                v-model="worker.fizlico_firstname"
                :label="'Фамилия'"
                @blur="vuelidateCheck_input($event, 'fizlico_firstname', 'worker')"
              />
            </div>
          </div>
          <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
              <OkoInput
                type="text"
                v-model="worker.fizlico_name"
                :label="'Имя'"
                @blur="vuelidateCheck_input($event, 'fizlico_name', 'worker')"
              />
            </div>
          </div>
          <div class="Form-Row Form-Row_col2">
            <div class="Form-Column">
              <OkoInput
                type="text"
                v-model="worker.fizlico_lastname"
                :label="'Отчество'"
                @blur="vuelidateCheck_input($event, 'fizlico_lastname', 'worker')"
              />
            </div>
          </div>
        </div>
        <div v-show="worker.worker_type_id === '2'" class="Form-Row Form-Row_col2">
          <div class="Form-Column">
            <OkoInput
              type="text"
              v-model="worker.yurlico_name"
              :label="'Наименование организации'"
              @blur="vuelidateCheck_input($event, 'yurlico_name', 'worker')"
            />
          </div>
        </div>
        <div class="Form-Row">
          <div class="Form-Column">
            <OkoInput
              type="text"
              v-model="worker.worker_inn"
              @keypress="checkInputType_isNumber()"
              :label="'ИНН'"
              @blur="vuelidateCheck_input($event, 'worker_inn', 'worker')"
            />
          </div>
        </div>
        <div class="Form-Row">
          <div class="Form-Column">
            <span class="Label">Должность</span>
            <multiselect
              v-model="worker.worker_position_id"
              :options="workerPositions"
              track-by="name"
              :value="worker.worker_position_id"
              :custom-label="customPostionsLabel"
              :searchable="false"
              :show-labels="false"
              :allow-empty="false"
              placeholder
            />
          </div>
        </div>
        <!-- <div 
                v-if="worker.worker_type_id === '2'"
                class="Form-Row"
            >
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="worker.yurlico_ogrn"
                        @keypress="checkInputType_isNumber()"
                        :label="'ОГРН'"
                    />
                </div>
            </div>
            <div 
                v-if="worker.worker_type_id === '2'"
                class="Form-Row"
            >
                <div class="Form-Column">
                    <OkoInput 
                        type="text"
                        v-model="worker.yurlico_kpp"
                        @keypress="checkInputType_isNumber()"
                        :label="'КПП'"
                    />
                </div>
        </div>-->
        <div class="Form-Row">
          <p class="Label">Телефоны</p>
          <div class="Form-Row" v-for="(phone, index) in worker.phoneFields" :key="index">
            <div class="Flex Flex_justify_flex-start Flex_align_center">
              <div class="Form-Column">
                <OkoInputPhone
                  type="text"
                  v-model="phone.value1"
                  placeholder="8 (999) 999-99-99"
                  @blur="vuelidateCheck_input($event, 'phoneFields', 'worker')"
                />
              </div>
              <div class="Form-Column Form-Column_auto">
                <OkoInput
                  :class="'Input_num_add'"
                  type="text"
                  v-model="phone.value2"
                  @keypress="checkInputType_isNumber()"
                  placeholder="доб. 11"
                />
              </div>
              <svg
                class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel"
                @click="textinfoMixin_deleteTextinfoField(worker, 'phone', index)"
              >
                <use xlink:href="/img/sprite.svg#cancel" href="/img/sprite.svg#cancel"></use>
              </svg>
            </div>
          </div>
          <div class="Form-Row">
            <div
              class="Link Link_dashed Link_line_add"
              @click="textinfoMixin_addTextinfoField(worker, 'phone', $event)"
            >+ добавить</div>
          </div>
        </div>
        <div class="Form-Row">
          <p class="Label">Email</p>
          <div class="Form-Row" v-for="(email, index) in worker.emailFields" :key="index">
            <div class="Flex Flex_justify_flex-start Flex_align_center">
              <div class="Form-Column">
                <OkoInput
                  type="text"
                  v-model="email.value1"
                  placeholder="ivanov@mail.ru"
                  @blur="vuelidateCheck_input($event, 'emailFields', 'worker')"
                />
              </div>
              <svg
                class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel"
                @click="textinfoMixin_deleteTextinfoField(worker, 'email', index)"
              >
                <use xlink:href="/img/sprite.svg#cancel" href="/img/sprite.svg#cancel"></use>
              </svg>
            </div>
          </div>
          <div class="Form-Row">
            <div
              class="Link Link_dashed Link_line_add"
              @click="textinfoMixin_addTextinfoField(worker, 'email', $event)"
            >+ добавить</div>
          </div>
        </div>
      </div>
      <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div 
          class="Btn Btn_theme_green Btn_size_m"
          @click="updateWorkerHandler"
        >
          Сохранить
        </div>
      </div>
      <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div 
          class="Btn Btn_theme_red Btn_size_m"
          @click="deleteWorkerHandler"
        >
          Удалить
        </div>
      </div>
    </form>
    <div v-else>
      <AppSpinner/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      worker: {
        id: "",
        worker_type_id: "1",
        photo_link: null,
        worker_login: "",
        worker_password: "",
        worker_inn: "",
        worker_position_id: "",
        fizlico_firstname: "",
        fizlico_name: "",
        fizlico_lastname: "",
        yurlico_name: "",
        yurlico_ogrn: "",
        yurlico_kpp: "",
        phoneFields: [
          {
            textinfo_type_id: "1",
            value1: "",
            value2: ""
          }
        ],
        emailFields: [
          {
            textinfo_type_id: "2",
            value1: "",
            value2: ""
          }
        ]
      },
      workerPositions: [],

      loading: false
    };
  },
  validations() {
    if (this.worker.worker_type_id === "1") {
      return {
        worker: {
          worker_login: {
            required
          },
          worker_password: {
            required
          },
          worker_inn: {
            required
          },
          fizlico_firstname: {
            required
          },
          fizlico_name: {
            required
          },
          fizlico_lastname: {
            required
          },
          phoneFields: {
            $each: {
              value1: {
                minLength: minLength(11)
              }
            }
          },
          emailFields: {
            $each: {
              value1: {
                email
              }
            }
          }
        }
      };
    } else if (this.worker.worker_type_id === "2") {
      return {
        worker: {
          worker_login: {
            required
          },
          worker_password: {
            required
          },
          worker_inn: {
            required
          },
          yurlico_name: {
            required
          },
          phoneFields: {
            $each: {
              value1: {
                minLength: minLength(11)
              }
            }
          },
          emailFields: {
            $each: {
              value1: {
                email
              }
            }
          }
        }
      };
    }
  },
  computed: {
    ...mapGetters({
      clientData: "clients/getClient"
    })
  },
  created() {
    Promise.all([this.fetchWorker(this.computedParam_currentRouteId), this.fetchWorkerPosition()]).then(res => {
      const resWorker = res[0];
      const resPositions = res[1];
      const textInfoFields = resWorker.worker_textinfo || [];
      const self = this;

      this.workerPositions = resPositions;

      function textinfoSplit(fieldToFill, textinfo) {
        textinfo.forEach(function(item) {
          switch (item.textinfo_type_id) {
            case "1": {
              fieldToFill.phoneFields.push({
                textinfo_type_id: "1",
                value1: item.value1,
                value2: item.value2
              });
              break;
            }
            case "2": {
              fieldToFill.emailFields.push({
                textinfo_type_id: "2",
                value1: item.value1
              });
              break;
            }
          }
        });
      }
      
      this.worker = {
        id: resWorker.id,
        worker_type_id: resWorker.worker_type_id,
        worker_inn: resWorker.worker_inn,
        photo_link: resWorker.photo_link,
        worker_login: resWorker.worker_login,
        worker_password: resWorker.worker_password,
        worker_position_id: resPositions.find(item => item.id === resWorker.worker_position_id),
        fizlico_firstname: resWorker.fizlico_firstname,
        fizlico_name: resWorker.fizlico_name,
        fizlico_lastname: resWorker.fizlico_lastname,
        yurlico_name: resWorker.yurlico_name,
        yurlico_ogrn: resWorker.yurlico_ogrn,
        yurlico_kpp: resWorker.yurlico_kpp,
        phoneFields: [],
        emailFields: []
      };
      textinfoSplit(self.worker, textInfoFields);

      this.pageLoader_resolveData();
    });
  },
  methods: {
    ...mapActions("workers", ["fetchWorker", "fetchWorkerPosition", "addWorkerPhoto", "updateWorker", "deleteWorker"]),
    customPostionsLabel(option) {
      return `${option.name}`;
    },
    updateWorkerHandler() {
      this.loading = true;
      const addEntity = this.worker;

      const textinfoFields = this.textinfoMixin_checkTextinfoField([
        ...addEntity.phoneFields,
        ...addEntity.emailFields
      ]);
      
      const newClient = {
        id: addEntity.id,
        worker_type_id: addEntity.worker_type_id,
        worker_login: addEntity.worker_login,
        worker_password: addEntity.worker_password,
        worker_inn: addEntity.worker_inn,
        worker_position_id: addEntity.worker_position_id.id,
        fizlico_firstname: addEntity.fizlico_firstname,
        fizlico_name: addEntity.fizlico_name,
        fizlico_lastname: addEntity.fizlico_lastname,
        yurlico_name: addEntity.yurlico_name,
        yurlico_ogrn: addEntity.yurlico_ogrn,
        yurlico_kpp: addEntity.yurlico_kpp,
        worker_textinfo: textinfoFields
      };

      this.updateWorker(newClient)
        .then(res => {
          if (addEntity.photo_link) {
            const workerId = res.id;

            this.addWorkerPhoto({
              worker_id: workerId,
              photo: addEntity.photo_link
            })
              .then(() => {
              })
              .catch(err => {
                this.okoModal_response({ type: "error", message: err });
              });
          }
          
          this.loading = false;
          this.okoModal_response({
            type: "success",
            message: "Исполнитель успешно отредактирован"
          });
        })
        .catch(err => {
          this.loading = false;
          this.okoModal_response({ type: "error", message: err });
        });
    },
    deleteWorkerHandler() {
      this.okoModal_confirm()
        .then(() => {
          this.deleteWorker({ id: this.computedParam_currentRouteId })
            .then(() => {
              this.okoModal_response({
                type: "success",
                message: "Исполнитель успешно удален"
              });

              this.$router.push({ name: "PageWorkers" });
            })
            .catch(err => {
              this.okoModal_response({ type: "error", message: err });
            });
        })
    }
  }
};
</script>

<style scoped>
.Form_workers {
  max-width: 650px;
}
.MainSection-Row_size_add {
  max-width: 650px;
}

.Form-Row .Form-Row {
  margin-bottom: 5px;
}
.Form-Row .Form-Row:last-of-type {
  margin-bottom: 0;
}

.Input_num_add {
  width: 69px;
}

.Link_line_add {
  margin: 5px 0 20px;
  color: #008acc;
}

.File_theme_link {
  display: inline-block;
}

.Form-Column {
  margin-right: 10px;
}
.Label {
  display: block;
  margin-bottom: 3px;
}
</style>
