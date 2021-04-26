<template>
  <div>
    <el-upload
      ref="uploadMutiple"
      :auto-upload="false"
      action="Fake Action"
      :on-change="handleChange"
      :file-list="fileList"
      multiple
      >选取文件</el-upload
    >

    <el-button type="primary" size="small" @click="submitUpload"
      >上传</el-button
    >
  </div>
</template>

<script>
import {upload} from "@/api"
export default {
  props: {},
  data() {
    return {
      fileList:[],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList;
    },
    submitUpload() {
      // this.$refs.uploadMutiple.submit();

      // let formData = new FormData();
      // this.fileList.forEach((item) => {
      //   formData.append("files", item.raw.url);
      // });
      console.log(this.fileList[0].raw)
      upload(formData)
    },
  },
  components: {},
};
</script>

<style scoped lang="less"></style>
