export type Task = {
  sequenceNo?: number;
  taskName: string;
  statusCd: '0'|'1'|'2';
};

export type LoginUser = {
  uid: string;
  password: string;
};

const task:Task = {
  taskName: 'todo1',
  
}