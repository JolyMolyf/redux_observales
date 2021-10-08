import { combineEpics } from "redux-observable";
import { getCommentsEpic, saveCommentsEpic } from "./epics/commentsEpic";
import {attempGetEmployeesEpic, saveEmployees, attempDeleteEmployeesEpic, attempUpdateEmployeeEpic} from './epics/employesEpic'
import { getPostsEpic, savePostsEpic } from "./epics/postsEpic";
import { getUsersEpic, saveUsersEpic } from "./epics/usersEpic";

export const rootEpic = combineEpics(
  attempGetEmployeesEpic, saveEmployees, attempDeleteEmployeesEpic, attempUpdateEmployeeEpic, getUsersEpic, saveUsersEpic, getPostsEpic, savePostsEpic, getCommentsEpic, saveCommentsEpic
);