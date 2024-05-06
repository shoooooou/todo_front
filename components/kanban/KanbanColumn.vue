<template>
  <draggable
      class="kanban-column"
      :list="tasks"
      @update:list="$emit('update:tasks', $event)"
      group="tasks"
      :item-key="itemKey"
  >
      <template #header>
        <h2>{{ title }}</h2>
      </template>
      <template #item="{ element }">
        <div class="kanban-item" :key="element.sequenceNo">
          {{ element.taskName }}
        </div>
      </template>
  </draggable>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import draggable from "vuedraggable";
import type { Task } from "../../types/code";

const props = defineProps({
  title: String,
  tasks: Array as () => Task[],
  itemKey: String,
});

const emit = defineEmits(['update:tasks']);
</script>

<style scoped lang="scss">
.kanban-column {
  background-color: #2c3e60; /* 濃いブルーのカラム背景色 */
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 濃い影を追加 */
  border-radius: 8px;
  padding: 16px;
}

.kanban-item {
  background-color: #4a69bd; /* 明るいブルー */
  border: 1pxolid #5d6d7e; /* 輪郭線をグレー系に */
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
