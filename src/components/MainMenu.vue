<template>
  <div class="MainMenu">
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconProjects"
      :class="{'active': (currentRoute === 'PageProjects') ||
                         (currentRoute === 'PageProjectsAdd') ||
                         (currentRoute === 'PageProject')
                         }"
      :to="{name: 'PageProjects'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#projects"
                href="/img/sprite.svg#projects"></use>
        </svg>
        Проекты
    </router-link>
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconSearch"
      :class="{'active': currentRoute === 'PageSearch'}"
      :to="{name: 'PageSearch'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#search"
                href="/img/sprite.svg#search"></use>
        </svg>
        Поиск
    </router-link>
    <!-- <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconPlans"
      :class="{'active': currentRoute === 'PagePlan'}"
      :to="{name: 'PagePlan'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#plans"
                href="/img/sprite.svg#plans"></use>
        </svg>
        Планы
    </router-link> -->
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconTasks"
      :class="{'active': currentRoute === 'PageTasks'}"
      :to="{name: 'PageTasks'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#tasks"
                href="/img/sprite.svg#tasks"></use>
        </svg>
        Задачи
    </router-link>
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconActs"
      :class="{'active': currentRoute === 'PageAkts'}"
      :to="{name: 'PageAktsSigning'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#acts"
                href="/img/sprite.svg#acts"></use>
        </svg>
        Акты
    </router-link>
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconPayment"
      :class="{'active': currentRoute === 'PagePayments'}"
      :to="{name: 'PagePayments'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#payment"
                href="/img/sprite.svg#payment"></use>
        </svg>
        Оплаты
    </router-link>
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconDebtors"
      :class="{'active': currentRoute === 'PageDebit'}"
      :to="{name: 'PageDebit'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#debtors"
                href="/img/sprite.svg#debtors"></use>
        </svg>
        Должники
    </router-link>
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconCounterparties"
      :class="{'active': (currentRoute === 'PageClients') ||
                         (currentRoute === 'PageClientsAdd') || 
                         (currentRoute === 'PageClientChange') ||
                         (currentRoute === 'PageClient')
                         }"
      :to="{name: 'PageClients'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#counterparties"
                href="/img/sprite.svg#counterparties"></use>
        </svg>
        Клиенты
    </router-link>
    <!-- <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconSalary"
      :class="{'active': currentRoute === 'PageSalary'}"
      :to="{name: 'PageSalary'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#salaries"
                href="/img/sprite.svg#salaries"></use>
        </svg>
        Зарплаты
    </router-link> -->
    <router-link
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconEmployees"
      :class="{'active': (currentRoute === 'PageWorkers') || 
                         (currentRoute === 'PageWorkersAdd') || 
                         (currentRoute === 'PageWorkerChange') || 
                         (currentRoute === 'PageWorkerSalary') || 
                         (currentRoute === 'PageWorker') 
                         }"
      :to="{name: 'PageWorkers'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#employees"
                href="/img/sprite.svg#employees"></use>
        </svg>
        Исполнители
    </router-link>
    <router-link 
      class="MainMenu-Item MainMenu-Item_Icon MainMenu-Item_IconSetting"
      :class="{'active': currentRoute === 'PageSettings'}"
      :to="{name: 'PageSettingsUsers'}" 
    >
        <svg class="Icon">
            <use
                xlink:href="/img/sprite.svg#setting"
                href="/img/sprite.svg#setting"></use>
        </svg>
        Настройки
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            profile: 'user/getProfile'
        }),
        currentRoute() {
            return this.$route.matched[0].name
        }
    }
}
</script>

<style>

</style>
