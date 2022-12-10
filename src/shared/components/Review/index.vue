<script setup lang="ts">
import { ref } from 'vue';
import { Rate } from '..';
import { Comment, Avatar, FormItem, Textarea, Button, List, ListItem } from 'ant-design-vue';

const TYPE_ACTION = {
  DESCRIPTION: 'description',
  REVIEW: 'review',
};

type Comment = Record<string, string>;

const typeActive = ref<string>(TYPE_ACTION.DESCRIPTION);
const submitting = ref<boolean>(false);
const listComment = ref<Comment[]>([]);
const comment = ref<string>('');

const changeType = (type: string) => {
  if (typeActive.value != type) {
    typeActive.value = type;
  }
};

const handleAddComment = () => {
  if (!comment.value) return;

  submitting.value = true;

  setTimeout(() => {
    submitting.value = false;
  }, 500);
};
</script>

<template>
  <div class="review flex flex-row justify-center items-center gap-x-7">
    <div
      class="text-2xl font-semibold text-[#999999] py-5 px-5 border-0 border-b-2 border-solid border-[#F65D4E] cursor-pointer"
      @click="changeType(TYPE_ACTION.DESCRIPTION)"
    >
      Description
    </div>
    <div
      class="text-2xl font-semibold text-[#999999] py-5 px-5 border-0 border-b-2 border-solid border-[#F65D4E] cursor-pointer"
      @click="changeType(TYPE_ACTION.REVIEW)"
    >
      Review
    </div>
  </div>

  <div>
    <template v-if="typeActive === TYPE_ACTION.DESCRIPTION">
      <div>Description</div>
    </template>
    <template v-if="typeActive === TYPE_ACTION.REVIEW">
      <div>
        <List
          v-if="listComment.length"
          :data-source="listComment"
          :header="`${listComment.length > 1 ? 'replies' : 'reply'}`"
          item-layout="horizontal"
        >
          <ListItem>
            <template #renderItem="{ item }">
              <Comment
                :author="item.author"
                :avatar="item.avatar"
                :content="item.content"
                :datetime="item.datetime"
              />
            </template>
          </ListItem>
        </List>
        <Comment>
          <template #avatar>
            <Avatar src="src/assets/images/avatar.jpg" alt="" />
          </template>
          <template #content>
            <FormItem>
              <Textarea v-model:value="comment" :rows="4" />
            </FormItem>
            <Button html-type="submit" type="primary" class="rounded" :loading="submitting" @click="handleAddComment"
              >Add Comment</Button
            >
          </template>
        </Comment>
      </div>
    </template>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&display=swap');
.review {
  font-family: 'Sora', sans-serif;
}
</style>
