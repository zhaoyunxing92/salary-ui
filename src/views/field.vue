<template>
  <a-table :columns="columns" :dataSource="fields">
    <template #bodyCell="{ column, text, record }">
      <template v-if="['exps'].includes(column.dataIndex)">
        <div>
          <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0"/>
          <template v-else>
            {{text}}
          </template>
        </div>
      </template>
      <template v-if="column.dataIndex === 'type'">
        {{$filters.formatType(text)}}
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)">保存</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)">编辑</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import type { UnwrapRef } from 'vue';
import { onMounted, reactive } from 'vue';
import { useFieldService } from '../service'
import { Field } from '../models';

const fieldService = useFieldService();
const fields = reactive<Field[]>([]);

const editableData: UnwrapRef<Record<string, Field>> = reactive({});

onMounted(() => {
  fieldService.List().then(res => {
    fields.push(...res)
  });
})

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    width: '25%',
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: '15%',
  },
  {
    title: '表达式',
    dataIndex: 'exps',
    width: '40%',
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
];

// 编辑
const edit = (key: string) => {
  editableData[key] = fields.filter(item => key === item.key)[0];
};

// 保存
const save = (key: string) => {
  Object.assign(fields.filter(item => key === item.key)[0], editableData[key]);
  delete editableData[key];
};

// 取消
const cancel = (key: string) => {
  delete editableData[key];
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
