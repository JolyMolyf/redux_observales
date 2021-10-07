import { combineEpics } from "redux-observable";
import {attempGetEmployeesEpic, saveEmployees, attempDeleteEmployeesEpic, attempUpdateEmployeeEpic} from './epics/employesEpic'


export const rootEpic = combineEpics(
  attempGetEmployeesEpic, saveEmployees, attempDeleteEmployeesEpic, attempUpdateEmployeeEpic
);