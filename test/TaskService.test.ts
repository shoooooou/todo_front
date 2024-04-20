import * as Target from "../server/TaskService";
import axios, { type AxiosResponse } from "axios";
import type { Task } from "../types/code";

jest.mock("axios");

describe("getTaskList", () => {
  test("タスクリストが取得できる", async () => {
    const uid = "00000000000000000001";
    const expected: Task[] = [
      { taskName: "todo1", statusCd: "1" },
      { taskName: "todo2", statusCd: "2" },
      { taskName: "todo3", statusCd: "3" },
    ];
    (axios.get as any).mockResolvedValue({ data: expected });
    const taskList: Task[] = await Target.getTaskList(uid);
    expect(taskList).toEqual(expected);
  });
});
