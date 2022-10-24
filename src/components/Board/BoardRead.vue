<template>
  <div>
    <Mom_Header />
    <div class="readArea">
      <b-card>
        <div class="content-detail-content-info">
          <div class="content-detail-content-info-left">
            <div class="topArea">
              <div class="content-detail-content-info-left-number">
                NO. {{ contentId }}
              </div>
              <div class="content-detail-content-info-left-subject">
                {{ title }}
              </div>
              <div class="content-detail-content-info-right">
                <div class="content-detail-content-info-right-user">
                  글쓴이: {{ writer }}
                </div>
                <div class="content-detail-content-info-right-created">
                  등록일: {{ created_at }}
                </div>
              </div>
            </div>
          </div>
          <div class="delete-update-button">
            <b-button @click="updateBoard" class="updateBoard">수정</b-button>
            <b-button @click="deleteBoard" class="deleteBoard">삭제</b-button>
            <b-button @click="goList" variant="outline-dark">글목록</b-button>
          </div>
        </div>
        <div class="content-detail-content">
          {{ context }}
        </div>

        <div class="content-detail-comment">
          <BoardComment :contentId="contentId" />
          <!-- <button class="replyButton">등록</button> -->
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import board from "@/Data/data.js";
import Mom_Header from "../Mom_Header.vue";
import BoardComment from "./BoardComment.vue";

export default {
  components: { Mom_Header, BoardComment },
  name: "boardRead",
  data() {
    const contentId = Number(this.$route.params.contentId);
    const contentData = board.Contents.filter(
      (item) => item.content_id === contentId
    )[0];
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      writer: board.User.filter(
        (item) => item.user_id === contentData.user_id
      )[0].name,
      created_at: contentData.create_at,
    };
  },
  methods: {
    goList() {
      this.$router.push({ path: "/board/list" });
    },
    deleteBoard() {
      //컨텐트ID를 통해 인덱스 구하기 findIndex함수 사용(조건 함수를 인자로 받아서 이 조건을 만족하는 요소를 반환해준다)
      const content_index = board.Contents.findIndex(
        //board에 있는 컨텐츠 배열을 가져와서 아이템의 컨텐트 아이디와 지금 가지고 있는 컨텐트 아이디가 같은지 확인
        (item) => item.content_id === this.contentId
      );
      board.Contents.splice(content_index, 1);
      //그 다음 splice함수를 이용해서 인덱스와 숫자 1을 넣어 삭제 구현한 후에 글 목록으로 이동
      this.$router.push({ path: "/board/list" });
    },
    updateBoard() {
      this.$router.push({ path: `/board/insert/${this.contentId}` });
    },
  },
};
</script>

<style>
.readArea {
  margin: 120px 280px 40px 280px;
}
.content-detail-content-info {
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: gray;
  padding-top: 10px;
}
.content-detail-content {
  margin-top: 1rem;
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 1rem;
  min-height: 720px;
}
.content-detail-button {
  padding-top: 10px;
  padding-bottom: 30px;
  display: flex;
  justify-content: right;
  margin-right: 280px;
}
.delete-update-button {
  padding-top: 100px;
  padding-bottom: 30px;
  display: flex;
  justify-content: right;
}

.deleteBoard,
.updateBoard {
  width: 70px;
  height: 40px;
  padding: 30px;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}

.content-detail-content-info-left-subject {
  font-size: 2rem;
}
.content-detail-content-info-left-number {
  color: gray;
}
.content-detail-content-info-right-user {
  margin-right: 10px;
}

/* .replyButton {
  background: gray;
  width: 50px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  float: right;
  color: white;
} */
.btn-secondary {
  margin-right: 2px;
}
</style>
