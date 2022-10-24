<template>
  <div>
    <b-input-group :prepend="commentWriter" class="mt-3">
      <b-form-input
        id="textarea"
        v-model="context"
        placeholder="댓글을 입력해주세요"
        rows="0"
        max-rows="0"
        class="context-area"
      ></b-form-input>
      <b-input-group-append>
        <b-button @click="insertComment">댓글작성</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import board from "@/Data/data.js";
export default {
  name: "CommentInsert",
  props: {
    contentId: Number,
    updateComment: Function, //댓글을 화면에 바로 업데이트 하기위해 가져온 함수
  },
  data() {
    return {
      commentWriter: "아스날레쓰고",
      context: "",
    };
  },
  methods: {
    insertComment() {
      board.Comment.push({
        comment_id: board.Comment[board.Comment.length - 1].comment_id + 1, //comment배열에 가장 마지막에 있는 객체에 +1을 해서 최신 댓글로 올림
        user_id: 1,
        content_id: this.contentId, //게시물의 propsId를받아옴
        context: this.context,
        create_at: "2022-10-26 18:19:42",
        update_at: null,
      });
      this.updateComment();
      this.context = "";
    },
  },
};
</script>

<style>
.context-area {
  height: 38px;
}
</style>
