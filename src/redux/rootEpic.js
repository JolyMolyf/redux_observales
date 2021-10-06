import { combineEpics } from "redux-observable";
import {attempGetEmployeesEpic, saveEmployees} from './epics/employesEpic'


export const rootEpic = combineEpics(
  attempGetEmployeesEpic, saveEmployees
);