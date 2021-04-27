<template>
  <div class="questions-container">
    <div class="content">
      <p class="top-title">
        <i class="iconfont iconfaq"></i> <span>提问</span>
        <router-link to="/home/serviceinformation/servicesupport"
          >我的反馈 <i class="iconfont iconright"></i
        ></router-link>
      </p>
      <el-input
        class="problem-title"
        placeholder="提示:服务器异常或连接服务器错误"
      ></el-input>
      <div class="tips-container" v-if="isShowTips">
        例: token已失效:屏幕除了设置其它触摸无反应
        <div class="close" @click="isShowTips = false">x</div>
      </div>
      <p class="select-type">
        选择相应的标签可快速获得解答
      </p>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>

      <span class="add-tag" ref="container">
        <el-button
          class="button-new-tag"
          :class="{ isSelect: isAddTag }"
          size="small"
          @click="isAddTag = true"
          >+ 添加标签</el-button
        >
        <div class="new-tag" v-show="isAddTag">
          <el-tag
            v-for="(tag, index) in tagList"
            :key="index"
            @click="addTag(tag)"
            >{{ tag }}</el-tag
          >
        </div>
      </span>

      <div class="bottom-describe">
        <el-input
          v-model="form.describe"
          type="textarea"
          class="textarea"
          placeholder="服务器异常或连接服务器错误"
        >
        </el-input>
        <el-upload
          action="http://localhost.vr186.com/public/ueditor/php/controller.php?action=uploadfile"
          list-type="picture-card"
          name="upfile"
          :on-preview="handlePictureCardPreview"
        >
          <i class="iconshangchuantupian iconfont"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
        <video
          class="upVideo"
          v-for="videoItem in videoList"
          :src="videoItem.url"
          :key="videoItem.uid"
          controls="controls"
        ></video>
        <el-upload
          action="http://localhost.vr186.com/public/ueditor/php/controller.php?action=uploadfile"
          list-type="picture-card"
          :file-list="videoList"
          :on-change="changeVideo"
          :show-file-list="false"
          name="upfile"
          :on-preview="handlePictureCardPreview"
        >
          <i class="iconvideo iconfont"></i>
        </el-upload>
        <p>上传附件<i class="iconfont iconfujian"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      tagList: ["v1", "v2", "v3"],
      isShowTips: true,
      form: {
        describe: "",
      },
      isAddTag: false,
      dialogImageUrl: "",
      dialogVisible: false,
      videoList: [],
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    addTag(tag) {
      let isExistence = this.dynamicTags.indexOf(tag);
      if (isExistence === -1) {
        this.dynamicTags.push(tag);
      } else {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    },
    otherClose(e) {
      if (!this.$refs.container.contains(e.target)) this.isAddTag = false;
      // console.log(this.$refs.container)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    changeVideo(file, fileList) {
      this.videoList = fileList;
    },
  },
  mounted() {
    window.addEventListener("click", this.otherClose);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.otherClose);
  },
};
</script>

<style scoped lang="less">
@logo: #0268fc;
@shadow: 5px 5px 10px #eee;
.questions-container {
  min-height: 800px;
  background-color: white;
  box-shadow: @shadow;
  .content {
    margin: 0 auto;
    padding-top: 50px;
    width: 750px;
    .top-title {
      .iconfaq {
        color: #999;
      }
      span {
        font-weight: bold;
        font-size: 16px;
      }
      a {
        float: right;
        i {
          font-weight: bold;
          color: @logo;
        }
      }
    }
    .problem-title {
      margin-top: 20px;
    }
    .tips-container {
      padding: 20px;
      margin-top: 10px;
      background-color: #f5f5f5;
      color: #666;
      position: relative;
      border-radius: 2px;
      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 15px;
      }
      .close:hover {
        background-color: #aaa;
        color: white;
      }
    }
    .select-type {
      margin: 16px 0;
    }
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .isSelect {
    background-color: #ecf5ff;
    color: #409eff;
    box-shadow: 0 0 8px #999;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .el-button:hover {
    background-color: #ecf5ff !important;
  }
  .add-tag {
    position: relative;
    .new-tag {
      position: absolute;
      left: 10px;
      top: 30px;
      z-index: 99;
      border-radius: 4px;
      box-shadow: @shadow;
      width: 300px;
      padding: 15px;
      background-color: white;
      border: 1px solid #dcdfe6;
      .el-tag {
        cursor: pointer;
      }
      .el-tag:hover {
        background-color: #dae5f0;
      }
    }
  }
  .bottom-describe {
    min-height: 350px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-top: 15px;
    padding: 15px;
    div {
      display: inline-block;
      vertical-align: top;
      margin-left: 10px;
    }
    /deep/.textarea {
      .el-textarea__inner {
        height: 180px;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #dcdfe6;
        resize: none;
        margin-bottom: 20px;
      }
      .el-textarea__inner,
      .el-input__inner {
        @placeholder: #999;
        &::placeholder {
          color: @placeholder;
        }
        &::-webkit-input-placeholder {
          /* WebKit browsers 适配谷歌 */
          color: @placeholder;
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 适配火狐 */
          color: @placeholder;
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ 适配火狐 */
          color: @placeholder;
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+  适配ie*/
          color: @placeholder;
        }
      }
    }
  }
  /deep/.el-upload--picture-card {
    width: 100px;
    height: 100px;
    line-height: 100px;
    display: inline-block;
  }
  /deep/.el-upload-list--picture-card .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
  .upVideo {
    width: 100px;
    height: 100px;
    object-fit: fill;
    box-sizing: border-box;
    margin-left: 10px;
    border-radius:6px;
    border: 1px dashed #c0ccda;
  }
}
</style>
