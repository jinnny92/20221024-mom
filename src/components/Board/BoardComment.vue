<template>
  <div>
    <div :key="index" v-for="(item, index) in comments">
      <!-- board.js의 comment 배열에서 해당 글에 맞는 댓글만 가져오기 위해  -->
      <CommentList :comment="item" :updateComment="updateComment" />
      <!-- props로 comment객체를 넘겨준다 -->
    </div>
    <CommentInsert :contentId="contentId" :updateComment="updateComment" />
  </div>
</template>

<script>
import board from "@/Data/data.js";
import CommentInsert from "./CommentInsert.vue";
import CommentList from "./CommentList.vue";
export default {
  name: "BoardComment",
  props: {
    contentId: Number, //게시글 읽기에서 프롭스를 받아 글번호가 몇 번인지 받아왔음
  },
  data() {
    return {
      comments: board.Comment.filter(
        (item) => item.content_id === this.contentId
      ),
    };
  },
  components: { CommentList, CommentInsert },
  methods: {
    updateComment() {
      this.comments = board.Comment.filter(
        (item) => item.content_id === this.contentId
      ); //작성된 댓글을 곧바로 '화면에' 업데이트 하기 위한 메소드, 이 함수를 다시 props로 넘겨줌
    },
  },
};
</script>

<style></style>
