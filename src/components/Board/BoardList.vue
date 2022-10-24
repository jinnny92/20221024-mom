<template>
  <div>
    <Mom_Header />
    <div class="boardBar">
      <div class="boardList">BOARD > LIST</div>
    </div>
    <div class="overflow-auto container">
      <h3>게시글 목록</h3>
      <b-table
        striped
        hove
        id="my-table"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClick"
        small
      ></b-table>
      <div class="btn-area">
        <button class="btn-write" @click="goWrite">글쓰기</button>
      </div>
      <div class="pagination">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="customPagination"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import board from "@/Data/data.js";
import Mom_Header from "../Mom_Header.vue";

export default {
  data() {
    let items = board.Contents.sort((a, b) => {
      return b.content_id - a.content_id; //게시글을 역순으로 가져오기 위해 사용한 sort함수
    });

    items = items.map((contentItem) => {
      return {
        ...contentItem,
        user_name: board.User.filter(
          (userItem) => userItem.user_id === contentItem.user_id
        )[0].name,
      };
    }); //Contents에 user_id User에 있는 user_id를 연결한다. 두 테이블을  외래키 연결하는 느낌...
    return {
      perPage: 15, //한 페이지에 글을 몇 개씩 보여줄건지
      currentPage: 1,
      items: items,
      fields: [
        {
          key: "content_id",
          label: "글번호",
        },
        {
          key: "title",
          label: "제목",
        },
        {
          key: "user_name",
          label: "글쓴이",
        },
        {
          key: "create_at",
          label: "등록일",
        },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length; //현재 게시글의 수를 항상 계산해줌
    },
  },
  components: { Mom_Header },
  methods: {
    goWrite() {
      this.$router.push({ path: "/board/insert" });
    },
    rowClick(items) {
      //게시글을 클릭했을때 해당 게시글로 이동
      this.$router.push({ path: `/board/read/${items.content_id}` });
    },
  },
};
</script>

<style scoped>
h3 {
  padding-top: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}

.pagination {
  display: flex;
  justify-content: center;
}

.btn-write {
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 6px;
  background: gray;
  margin: 0;
  color: white;
}

.btn-area {
  display: flex;
  justify-content: right;
}

.boardBar {
  background: url("@/assets/weekly/throphy3.jpg") 3% no-repeat;
  background-size: cover;
  height: 250px;
  margin-top: 100px;
}

.boardList {
  text-align: center;
  color: rgb(226, 185, 108);
  font-size: 3rem;
  font-weight: bold;
  line-height: 250px;
}

#my-table {
  cursor: pointer;
}
</style>
