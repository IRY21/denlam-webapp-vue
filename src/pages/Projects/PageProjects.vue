<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <div class="Flex Flex_align_center">
        <h1 class="Heading_lvl1">Проекты</h1>
        <router-link
          class="Btn Btn_theme_green Btn_type_add"
          :to="{name: 'PageProjectsAdd'}"
        >Добавить проект</router-link>
      </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noBottomPadding">
      <div class="Filter">
        <p class="Filter-Title">Фильтр</p>
        <div class="Filter-Column">
          <label class="Select Select_theme_arrow Select_sort">
            <span class="Label">По сотруднику</span>
            <select name="city" 
                    class="Select-Control"
                    @change="searchHandler"
                    v-model="searchParams.worker_id">
              <option 
                value=""
              >
                Все сотрудники
              </option>
              <option 
                v-for="worker of workers"
                :key="worker.id"
                :value="worker.id"
              >
                {{ computedParam_name('worker', worker) }}
              </option>
            </select>
          </label>
        </div>
        <div class="Filter-Column">
          <label class="Select Select_theme_arrow Select_sort">
            <span class="Label">По филиалам</span>
            <select name="city" 
                    class="Select-Control"
                    @change="searchHandler"
                    v-model="searchParams.filial_id">
              <option 
                value=""
              >
                Все филиалы
              </option>
              <option 
                v-for="filial of filials"
                :key="filial.id"
                :value="filial.id"
              >
                {{ filial.title }}
              </option>
            </select>
          </label>
        </div>
        <div class="Filter-Column">
          <label class="Select Select_theme_arrow Select_sort">
            <span class="Label">По услугам</span>
            <select name="city" 
                    class="Select-Control"
                    @change="searchHandler"
                    v-model="searchParams.product_id">
              <option 
                value
              >
                Выберите услугу
              </option>
              <option 
                v-for="product of products"
                :key="product.id"
                :value="product.id"
              >
                {{ product.title }}
              </option>
            </select>
          </label>
        </div>
        <div class="Filter-Column">
          <div class="Label">&nbsp;</div>
          <div class="Btn Btn_theme_grey Btn_theme_excell saveExcellbut">
            <svg class="Icon">
              <use xlink:href="/img/sprite.svg#excel" href="/img/sprite.svg#excel"></use>
            </svg>
            Выгрузить в Excell
          </div>
        </div>
      </div>
    </div>
    <div class="MainSection-Row">
      <div class="Filter">
        <p class="Filter-Title hidden">Фильтр</p>
        <div class="Filter-Column">
          <OkoInput
            type="text"
            v-model="searchParams.search"
            placeholder="Поиск"
            @keyup.enter="debouncedSearch"
            @input="debouncedSearch"
          />
        </div>
        <div class="Filter-Column">
        </div>
        <div class="Filter-Column">
        </div>
        <div class="Filter-Column">
        </div>
      </div>
    </div>
    <div class="MainSection-Row">
      <div class="Flex Flex_justify_space-between">
        <div class="Project-Column">
          <div class="Project-TypeTitle Project-TypeTitle_theme_new-contract">
            Новый договор
            <span>{{ totalProjectsSum(newProjects) }} руб.</span>
          </div>
        </div>
        <div class="Project-Column">
          <div class="Project-TypeTitle Project-TypeTitle_theme_in-work">
            В работе
            <span>{{ totalProjectsSum(inProgressProjects) }} руб.</span>
          </div>
        </div>
        <div class="Project-Column">
          <div class="Project-TypeTitle Project-TypeTitle_theme_submitted">
            Отчет сдан
            <span>{{ totalProjectsSum(doneProjects) }} руб.</span>
          </div>
        </div>
        <div class="Project-Column">
          <div class="Project-TypeTitle Project-TypeTitle_theme_signed">
            Акт подписан
            <span>{{ totalProjectsSum(signedProjects) }} руб.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="MainSection-Row">
      <div class="Flex Flex_justify_space-between">
        <div class="Project-Column">

          <article 
            v-for="project of newProjects"
            :key="project.id"
            class="ProjectCard Project-ProjectCard"
            :class="projectClass(project)"
          >
            <router-link
              class="ProjectCard-Link"
              :to="{name: 'PageProjectAbout', params: {id: project.id}}"
            >
              <p
                class="ProjectCard-Title"
                title="Транснефть-Сибирь Транснефть-Сибирь"
              >{{ project.title }}</p>
              <p class="ProjectCard-Cost">{{ projectSum(project.project_budget) }} руб.</p>
              <p class="ProjectCard-DateUntil">срок до {{ project.plandate_end | moment }}</p>
              <div class="Flex Flex_justify_end Flex_align_center">
                <p 
                    class="ProjectCard-WorkType"
                >
                    <span
                    v-for="product of project.projects_products"
                    :key="product.id">{{ product.title }}</span> 
                </p>
              </div>
            </router-link>
            <div class="ProjectCard-BtnChangeColor"></div>
          </article>

        </div>
        <div class="Project-Column">

          <article 
            v-for="project of inProgressProjects"
            :key="project.id"
            class="ProjectCard Project-ProjectCard"
            :class="projectClass(project)"
          >
            <router-link
              class="ProjectCard-Link"
              :to="{name: 'PageProjectAbout', params: {id: project.id}}"
            >
              <p
                class="ProjectCard-Title"
                title="Транснефть-Сибирь Транснефть-Сибирь"
              >{{ project.title }}</p>
              <p class="ProjectCard-Cost">{{ projectSum(project.project_budget) }} руб.</p>
              <p class="ProjectCard-DateUntil">срок до {{ project.plandate_end | moment }}</p>
              <div class="Flex Flex_justify_end Flex_align_center">
                <p 
                    class="ProjectCard-WorkType"
                >
                    <span
                    v-for="product of project.projects_products"
                    :key="product.id">{{ product.title }}</span> 
                </p>
              </div>
            </router-link>
            <div class="ProjectCard-BtnChangeColor"></div>
          </article>

        </div>
        <div class="Project-Column">

          <article 
            v-for="project of doneProjects"
            :key="project.id"
            class="ProjectCard Project-ProjectCard"
            :class="projectClass(project)"
          >
            <router-link
              class="ProjectCard-Link"
              :to="{name: 'PageProjectAbout', params: {id: project.id}}"
            >
              <p
                class="ProjectCard-Title"
                title="Транснефть-Сибирь Транснефть-Сибирь"
              >{{ project.title }}</p>
              <p class="ProjectCard-Cost">{{ projectSum(project.project_budget) }} руб.</p>
              <p class="ProjectCard-DateUntil">срок до {{ project.plandate_end | moment }}</p>
              <div class="Flex Flex_justify_end Flex_align_center">
                <p 
                    class="ProjectCard-WorkType"
                >
                    <span
                    v-for="product of project.projects_products"
                    :key="product.id">{{ product.title }}</span> 
                </p>
              </div>
            </router-link>
            <div class="ProjectCard-BtnChangeColor"></div>
          </article>

        </div>
        <div class="Project-Column">

          <article 
            v-for="project of signedProjects"
            :key="project.id"
            class="ProjectCard Project-ProjectCard"
            :class="projectClass(project)"
          >
            <router-link
              class="ProjectCard-Link"
              :to="{name: 'PageProjectAbout', params: {id: project.id}}"
            >
              <p
                class="ProjectCard-Title"
                title="Транснефть-Сибирь Транснефть-Сибирь"
              >{{ project.title }}</p>
              <p class="ProjectCard-Cost">{{ projectSum(project.project_budget) }} руб.</p>
              <p class="ProjectCard-DateUntil">срок до {{ project.plandate_end | moment }}</p>
              <div class="Flex Flex_justify_end Flex_align_center">
                <p 
                    class="ProjectCard-WorkType"
                >
                    <span
                    v-for="product of project.projects_products"
                    :key="product.id">{{ product.title }}</span> 
                </p>
              </div>
            </router-link>
            <div 
              class="ProjectCard-BtnChangeColor"
            ></div>
          </article>

        </div>
      </div>
      <infinite-loading spinner="bubbles" @infinite="debounceInfiniteHandler" ref="infiniteLoading">
        <div class="Infinite-End" slot="no-more"></div>
        <div class="Infinite-End" slot="no-results"></div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions } from "vuex";
import { debounce } from "@/_helpers";

export default {
  data() {
    return {
      searchParams: {
        qlimit: 15,
        qskipstep: 0,
        search: "",
        worker_id: "",
        product_id: "",
        filial_id: ""
      },

    };
  },
  filters: {
    moment: function (date) {
        return moment(date).locale("ru").format('Do MMM YYYY');
    }
  },
  computed: {
    ...mapGetters({
      newProjects: "projects/getNewProjects",
      inProgressProjects: "projects/getInProgressProjects",
      doneProjects: "projects/getDoneProjects",
      signedProjects: "projects/getSignedProjects",
      filials: "filials/getFilials",
      products: "products/getProducts",
      workers: "workers/getWorkers"
    }),
    debouncedSearch() {
      let DELAY = 300;
      return debounce(this.searchHandler, DELAY);
    },
    debounceInfiniteHandler() {
      let DELAY = 300;
      return debounce(this.infiniteHandler, DELAY);
    }
  },
  created() {
    Promise.all([this.fetchProjects({ ...this.searchParams, status_id: 1 }),
                 this.fetchProjects({ ...this.searchParams, status_id: 2 }),
                 this.fetchProjects({ ...this.searchParams, status_id: 3 }),
                 this.fetchProjects({ ...this.searchParams, status_id: 4 }),
                 this.fetchProducts(),
                 this.fetchWorkers(),
                 this.fetchFilials()]).then(res => {
      this.searchParams.qskipstep = res[0].length;
      this.pageLoader_resolveData();
    });
  },
  methods: {
    ...mapActions("projects", ["fetchProjects", "searchProjects"]),
    ...mapActions("products", ["fetchProducts"]),
    ...mapActions("filials", ["fetchFilials"]),
    ...mapActions("workers", ["fetchWorkers"]),
    infiniteHandler($state) {
        Promise.all([this.fetchProjects({ ...this.searchParams, status_id: 1 }),
                    this.fetchProjects({ ...this.searchParams, status_id: 2 }),
                    this.fetchProjects({ ...this.searchParams, status_id: 3 }),
                    this.fetchProjects({ ...this.searchParams, status_id: 4 }),
                    ])
                    .then(res => {
                        let notEmpty = (res[0].length > 0 ||
                            res[1].length > 0 ||
                            res[2].length > 0 ||
                            res[3].length > 0) ? true : false;
                        let resLength = res.reduce((a, b) => a.length > b.length ? a : b, '').length;
                        if (notEmpty) {
                            this.searchParams.qskipstep += resLength;
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    });
      /* this.fetchProjects(this.searchParams).then(res => {
        
        if (res.length > 0) {
          this.searchParams.qskipstep += res.length;
          $state.loaded();
        } else {
          $state.complete();
        }
      }); */
    },
    searchHandler() {
        // emit $state.reset like in infiniteHandler
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');

        this.searchParams.qskipstep = 0;
        
        Promise.all([this.searchProjects({ ...this.searchParams, status_id: 1 }),
                    this.searchProjects({ ...this.searchParams, status_id: 2 }),
                    this.searchProjects({ ...this.searchParams, status_id: 3 }),
                    this.searchProjects({ ...this.searchParams, status_id: 4 }),
                    ])
            .then(res => {
                this.searchParams.qskipstep = res[0].length;
            });
    },
    projectSum(projectBudget) {
      return projectBudget.reduce(function(acc, item) {
        
        let num = parseFloat(item.sum);
        acc += num;
        return acc;
      }, 0).toFixed(2);
    },
    totalProjectsSum(projects) {
      return projects.reduce((acc, item) => {
        
        let num = parseFloat(this.projectSum(item.project_budget));
        return acc += num;
      }, 0).toFixed(2);
    },
    projectClass(project) {
      let arr = [];
      const now = new Date();
      const plandate_end = new Date(project.plandate_end);
      const factdate_end = new Date(project.factdate_end);
      
      if (plandate_end < factdate_end) {
        arr.push('ProjectCard_theme_prosrocheno');
      }
      
      if (now > plandate_end) {
        arr.push('ProjectCard_theme_out-of-date');
      }

      arr.push(`ProjectCard_theme_${project.color}`);

      return arr;
    }
  }
};
</script>

<style scoped>
.hidden {
  visibility: hidden;
}
.MainSection-Row_title .Btn_type_add {
  margin-left: 30px;
}

.Project-Column {
  width: calc(25% - 10px * 3 / 4);
}

.Project-TypeTitle {
  height: 39px;
  font-size: 16px;
  border-bottom: 2px solid #26a9e0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.Project-TypeTitle span {
  margin-left: 10px;
  font-size: 12px;
  color: #777;
}
.Project-TypeTitle_theme_new-contract {
  border-color: #26a9e0;
}
.Project-TypeTitle_theme_in-work {
  border-color: #e08b26;
}
.Project-TypeTitle_theme_submitted {
  border-color: #236870;
}
.Project-TypeTitle_theme_signed {
  border-color: #d9e026;
}

.Project-ProjectCard {
  margin-bottom: 15px;
}
.Project-ProjectCard:last-of-type {
  margin-bottom: 0;
}

.ProjectCard {
  position: relative;
  -webkit-transition: all ease-in-out 0.25s;
  -o-transition: all ease-in-out 0.25s;
  transition: all ease-in-out 0.25s;
}
.ProjectCard.gu-transit {
  opacity: 0.4;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
  filter: alpha(opacity=40);
}
.ProjectCard-Link {
  padding: 10px 13px;
  background: #fbfbfb;
  border: solid 1px rgba(218, 218, 218, 0.5);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 1px 0 0 rgba(2, 6, 7, 0.19);
  box-shadow: 0px 1px 0 0 rgba(2, 6, 7, 0.19);
  display: block;
}
.ProjectCard-Link:hover {
  border-color: #c2c2c2;
}
.ProjectCard-Link:focus {
  background: #fbfbfb;
}
.ProjectCard-Title {
  margin-bottom: 10px;
  font-weight: 500;
  color: #236870;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.ProjectCard-Cost {
  margin-bottom: 13px;
  font-weight: 300;
}
.ProjectCard-DateUntil {
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 300;
  color: #898989;
}
.ProjectCard-BtnChangeColor {
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border: 4px solid #e7e7e7;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  left: 13px;
  bottom: 10px;
}
.ProjectCard-WorkType {
  width: calc(100% - 16px);
  font-size: 12px;
  font-weight: 300;
  color: #26a9e0;
  text-align: right;
}
.ProjectCard-WorkType span::after {
    content: ',';
    padding-right: 5px;
}
.ProjectCard-WorkType span:last-of-type::after {
    content: '';
    padding-right: 0;
}

.ProjectCard_theme_green .ProjectCard-Link {
  border-color: #cfdf9c;
  -webkit-box-shadow: 0 1px #d6d9cd;
  box-shadow: 0 1px #d6d9cd;
}
.ProjectCard_theme_green .ProjectCard-Link:hover {
  background: #f9fbf4;
}
.ProjectCard_theme_green .ProjectCard-Link:focus {
  background: #f5f8ec;
}

.ProjectCard_theme_green .ProjectCard-BtnChangeColor {
  border-color: #cfe198;
}

.ProjectCard_theme_orange .ProjectCard-Link {
  border-color: #eabf8d;
  -webkit-box-shadow: 0 1px #e7dbcc;
  box-shadow: 0 1px #e7dbcc;
}
.ProjectCard_theme_orange .ProjectCard-Link:hover {
  background: #faf6f2;
}
.ProjectCard_theme_orange .ProjectCard-Link:focus {
  background: #f8f1e9;
}

.ProjectCard_theme_orange .ProjectCard-BtnChangeColor {
  border-color: #edc08c;
}

.ProjectCard_theme_light-blue .ProjectCard-Link {
  border-color: #8baeb2;
  -webkit-box-shadow: 0 1px #cad2d3;
  box-shadow: 0 1px #cad2d3;
}
.ProjectCard_theme_light-blue .ProjectCard-Link:hover {
  background: #eef7f8;
}
.ProjectCard_theme_light-blue .ProjectCard-Link:focus {
  background: #e7f4f5;
}

.ProjectCard_theme_light-blue .ProjectCard-BtnChangeColor {
  border-color: #88afb4;
}

.ProjectCard_theme_purple .ProjectCard-Link {
  border-color: #8c8bb2;
  -webkit-box-shadow: 0 1px #cacad3;
  box-shadow: 0 1px #cacad3;
}
.ProjectCard_theme_purple .ProjectCard-Link:hover {
  background: #f5f5fb;
}
.ProjectCard_theme_purple .ProjectCard-Link:focus {
  background: #efeff8;
}

.ProjectCard_theme_purple .ProjectCard-BtnChangeColor {
  border-color: #8d8cb5;
}

.ProjectCard_theme_dull-purple .ProjectCard-Link {
  border-color: #b28b99;
  -webkit-box-shadow: 0 1px #d3cacd;
  box-shadow: 0 1px #d3cacd;
}
.ProjectCard_theme_dull-purple .ProjectCard-Link:hover {
  background: #faf5f7;
}
.ProjectCard_theme_dull-purple .ProjectCard-Link:focus {
  background: #f9eff3;
}

.ProjectCard_theme_dull-purple .ProjectCard-BtnChangeColor {
  border-color: #b58c9a;
}

.ProjectCard_theme_light-red .ProjectCard-Link {
  border-color: #fa9393;
  -webkit-box-shadow: 0 1px #e6cccc;
  box-shadow: 0 1px #e6cccc;
}
.ProjectCard_theme_light-red .ProjectCard-Link:hover {
  background: #fdf6f6;
}
.ProjectCard_theme_light-red .ProjectCard-Link:focus {
  background: #fdefef;
}

.ProjectCard_theme_light-red .ProjectCard-BtnChangeColor {
  border-color: #fe9494;
}

.ProjectCard_theme_light-gold .ProjectCard-Link {
  border-color: #fae593;
  -webkit-box-shadow: 0 1px #ede7ce;
  box-shadow: 0 1px #ede7ce;
}
.ProjectCard_theme_light-gold .ProjectCard-Link:hover {
  background: #fcfbf6;
}
.ProjectCard_theme_light-gold .ProjectCard-Link:focus {
  background: #f9f7ed;
}

.ProjectCard_theme_light-gold .ProjectCard-BtnChangeColor {
  border-color: #fee894;
}
.ProjectCard_theme_prosrocheno .ProjectCard-Link {
  border-color: #ff0000;
  -webkit-box-shadow: 0 1px #ede7ce;
  box-shadow: 0 1px #ede7ce;
}
.ProjectCard_theme_out-of-date .ProjectCard-DateUntil {
  padding-left: 22px;
  color: #ff0000;
  position: relative;
}
.ProjectCard_theme_out-of-date .ProjectCard-DateUntil:before {
  content: "!";
  width: 16px;
  height: 16px;
  background: #ff0000;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  position: absolute;
  top: -2px;
  left: 0;
}

</style>
