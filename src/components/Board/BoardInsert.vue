<template>
  <div>
    <Mom_Header />
    <div class="container">
      <h2 class="container4">게시글 작성</h2>

      <b-form v-if="show">
        <b-form-input
          id="input-1"
          v-model="title"
          placeholder="제목을 입력해주세요"
          type="text"
          required
        ></b-form-input>

        <b-form-group
          id="input-group-2"
          label-for="input-2"
          class="content-area"
        >
          <vue-editor
            v-model="context"
            id="input-2"
            required
            class="content"
          ></vue-editor>
        </b-form-group>

        <div class="btn-area">
          <b-button @click="updateMode ? updateContent() : uploadContent()"
            >작성 완료</b-button
          >
          <!-- 버튼을 눌렀을때 업데이트면(주소뒤에 글번호가 있으면) 글 수정 함수 호출 아니면 일반 글작성 함수 호출-->
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import board from "@/Data/data.js";
import Mom_Header from "../Mom_Header.vue";

export default {
  name: "boardInsert",
  components: { VueEditor, Mom_Header },
  data() {
    return {
      title: "",
      context: "",
      user_id: 1,
      create_at: "2022-10-23",
      update_at: null,
      updateObject: null,
      show: true,
      updateMode: this.$route.params.contentId > 0 ? true : false, //주소 뒤에 게시글 번호가 있으면 수정 없으면 일반 등록
    };
  },
  //만약 컴포넌트가 만들어졌을때(created함수씀), 주소에 게시글 숫자가 있으면 데이터의 컨텐트 배열에서 컨텐트 아이디로 가지고 있는 객체를 가져와서 제목과 내용을 보여주기
  created() {
    if (this.$route.params.contentId > 0) {
      //주소뒤에 게시글 번호가 있으면 수정모드, 0이면 그냥 글쓰기
      const contentId = Number(this.$route.params.contentId);
      this.updateObject = board.Contents.filter(
        //board.js파일의 contents배열에 필터를 이용해서 객체 중에 컨텐츠 id가 주소의 id가 일치하는 것을 가져와서 그 배열의 첫번쨰 요소를 빼온것이 바로 업데이트할 객체
        (item) => item.content_id === contentId
      )[0];
      this.title = this.updateObject.title;
      this.context = this.updateObject.context;
    }
  },
  methods: {
    uploadContent() {
      //저장버튼을 누르면 데이터에 있는 contents에 push
      let items = board.Contents.sort((a, b) => {
        return b.content_id - a.content_id;
      });

      const content_id = items[0].content_id + 1;
      board.Contents.push({
        content_id: content_id, //글번호는 자동으로 증가시키기 위해, js파일에서 contents 배열을 가져와서 최신순으로 정렬한 뒤 items라는 변수에 저장, 그 다음에 가장 최신의 content_id를 가져오기 위해 가장 위에(가장 최근에 등록된 객체)있는 객체 +1을 해준다
        user_id: this.user_id,
        title: this.title,
        context: this.context,
        create_at: this.create_at,
        update_at: null,
      });
      this.$router.push({
        path: "/board/list",
      });
    },
    updateContent() {
      this.updateObject.title = this.title; //버튼을 눌렀을때 수정한 제목으로 변경
      this.updateObject.context = this.context; //수정한 내용으로 변경
      this.$router.push({
        path: "/board/list",
      });
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
  font-family: "Noto Sans KR";
}

.container {
  margin-top: 150px;
}
.content {
  height: 500px;
}
.content-area {
  margin-top: 10px;
}
.btn-area {
  display: flex;
  justify-content: right;
  margin-top: 80px;
}
#input-1 {
  height: 80px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
}

#input-1::placeholder {
  font-size: 1.5rem;
}
.form-control:focus {
  border-color: inherit !important;
  box-shadow: inherit !important;
}

.container4 {
  margin-top: 3%;
}
</style>
