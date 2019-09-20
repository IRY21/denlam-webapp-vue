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
      <div class="Form-Row Form-Row_btnWrap">
        <div class="Table-ControlRow">
          <div class="Btn Btn_theme_green Btn_size_m">Сохранить</div>
        </div>
        <div class="Table-ControlRow">
          <div class="Btn Btn_theme_red Btn_size_m">Удалить</div>
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
        worker_type_id: "1",
        photo_link: null,
        worker_login: "",
        worker_password: "",
        worker_inn: "",
        worker_position_id: "1",
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
    Promise.all([this.fetchWorker(this.computedParam_currentRouteId)]).then(res => {
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

      const resClient = res[0];
      const textInfoFields = resClient.worker_textinfo || [];
      const self = this;
      this.worker = {
        id: resClient.id,
        worker_type_id: resClient.worker_type_id,
        worker_inn: resClient.inn,
        photo_link: resClient.photo_link,
        worker_login: resClient.worker_login,
        worker_password: resClient.worker_password,
        worker_position_id: resClient.worker_position_id,
        fizlico_firstname: resClient.fizlico_firstname,
        fizlico_name: resClient.fizlico_name,
        fizlico_lastname: resClient.fizlico_lastname,
        yurlico_name: resClient.yurlico_name,
        yurlico_ogrn: resClient.yurlico_ogrn,
        yurlico_kpp: resClient.yurlico_kpp,
        phoneFields: [],
        emailFields: []
      };
      textinfoSplit(self.worker, textInfoFields);

      this.pageLoader_resolveData();
    });
  },
  methods: {
    ...mapActions("workers", ["fetchWorker", "updateWorker", "deleteWorker"]),
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
