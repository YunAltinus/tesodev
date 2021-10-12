<script>
import { mapState } from "vuex";
import listItem from "./list-item.vue";
import orderBy from "../components/order-by.vue";
import Pagination from "v-pagination-3";

export default {
  components: {
    listItem,
    Pagination,
    orderBy,
  },

  props: ["isHomePage"],

  data() {
    return {
      page: 1,
      recordsOfPage: [],
      length: 6,
      result: [],
      searchedRecords: []
    };
  },

  computed: {
    ...mapState(["records", "searchRecords"]),

    recordsPage() {
      return this.recordsOfPage;
    },
  },

  methods: {
    getRecordsOfPage(numberOfPage = 1) {
      !(this.result = []) ? this.result : (this.result = this.records);

      this.recordsOfPage = this.result?.slice(
        (numberOfPage - 1) * this.length,
        numberOfPage * this.length
      );
    },

    getRecordsOfPageFromSearch(numberOfPage = 1) {
      this.recordsOfPage = this.searchedRecords?.slice(
        (numberOfPage - 1) * this.length,
        numberOfPage * this.length
      );
    },

    getSelectedValue(selectedValue) {
      if (selectedValue == "Name ascending") {
        this.result = this.records.sort(this.compeleForName);
      }
      if (selectedValue == "Name descending") {
        this.result = this.records.sort(this.compeleForName).reverse();
      }
      if (selectedValue == "Year ascending") {
        this.result = this.records.sort(this.compeleForDate).reverse();
      }
      if (selectedValue == "Year descending") {
        this.result = this.records.sort(this.compeleForDate);
      }
      this.page = 1;
      this.getRecordsOfPage();
    },

    compeleForName(firstValue, secondValue) {
      if (firstValue.NameSurname < secondValue.NameSurname) return -1;
      if (firstValue.NameSurname > secondValue.NameSurname) return 1;
      return 0;
    },

    compeleForDate(firstValue, secondValue) {
      let firstDate = firstValue.Date.split("/").reverse().join();
      let secondDate = secondValue.Date.split("/").reverse().join();

      if (firstDate < secondDate) return -1;
      if (firstDate > secondDate) return 1;
      return 0;
    },
  },

  watch: {
    searchRecords(searchRecord) {
      this.searchedRecords = this.records.filter((record) => {
        return record.NameSurname.toLowerCase().includes(
          searchRecord.toLowerCase()
        );
      });
      this.getRecordsOfPageFromSearch();
    },
  },

  created() {
    this.getRecordsOfPage();
  },
};
</script>

<template lang="pug">
.list__container
  orderBy.order-by(v-if="!isHomePage", :getSelectedValue="getSelectedValue")

  ul.list__container__content
    listItem(
      v-if="isHomePage",
      v-for="record in records.slice(0, 3)",
      :record="record"
    )

    listItem(v-else, v-for="record in recordsPage", :record="record")

  .list__container__show-more(v-if="isHomePage")
    router-link.list__container__show-more__show-link(:to="{ path: '/list' }") Show more...

  .pagination(v-else)
    pagination(
      v-model="page",
      :records="records.length",
      :per-page="length",
      @paginate="getRecordsOfPage"
    )
</template>

<style lang="scss">
@import "../assets/_varaibles.scss";
@import "../assets/_mixin.scss";

.list {
  .order-by {
    position: absolute;
    top: 6rem;
    right: 0;
    margin : {
      bottom: 1rem;
    }
  }
  &__container {
    padding: 0.5rem 1.5rem;
    color: $text-color;
    margin-top: 1rem;
    border-radius: 0.25rem !important;

    &__content {
      min-width: 40vw;
      li {
        @include display-flex;
        justify-content: space-between !important;
        border-bottom: 1px solid #585858;
        transform: matrix(1, 0, 0, 1, 0, 0);
        padding: 1rem 1.5rem;
      }
    }

    &__show-more {
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
      text-align: center;
      &__show-link {
        color: #000;

        &:hover {
          cursor: pointer;
          border-bottom: 1px solid #000;
        }
      }
    }

    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>