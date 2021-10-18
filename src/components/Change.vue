<template>
  <div class="col-md-12">
    <button class="btn btn-primary btn-block" @click="changeImages">Change Image</button>
    <table-lite
      :has-checkbox="true"
      :is-loading="isLoading"
      :is-re-search="isReSearch"
      :columns="columns"
      :rows="rows"
      :total="totalRecordCount"
      :sortable="sortable"
      :messages="messages"
      @do-search="doSearch"
      @is-finished="tableLoadingFinish"
      @return-checked-rows="updateCheckedRows"
    ></table-lite>
  </div>
</template>

<script>
import ChangeService from "../services/change.service"
import TableLite from "vue3-table-lite"

export default {
  name: "Change",
  computed: {
    currentUser() {
      return localStorage.getItem("user")
    },
  },
  data() {
    return {
      data:[],
      isLoading: false,
      isReSearch: true,
      columns: [
        {
          label: "ID",
          field: "id",
          sortable: true,
          isKey: true,
        },
        {
          label: "Image",
          field: "name",
          width: "50%",
          sortable: true,
          display: function (row) {
            return '<img src="' + row.source + '" width=200 heigh=200>';
          },
        },
      ],
      rows: [],
      totalRecordCount: 10,
      updateCheckedRows: updateCheckedRows,
      sortable: {
        order: "id",
        sort: "asc",
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:5",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data",
      },
    };
  },
  mounted() {
    ChangeService.getImages(localStorage.getItem("accessToken")).then(
      (response) => {
        for (const raw of response.data.data) {
          this.rows.push(raw);
        }
      },
      (error) => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
      }
    );
  },
  methods: {
    changeImages() {
      ChangeService.saveImages(localStorage.getItem("accessToken")).then(
        (response) => {
          console.log(response)
        },
        (error) => {
          this.content =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        }
      );
    },
  },
  components: { TableLite },
};

const updateCheckedRows = (rowsKey) => {
  this.data = rowsKey;
  console.log(this.data)
};
</script>
