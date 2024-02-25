import { ADD_ISSUE, GET_ISSUES, GET_NOTDONE_ISSUES } from "../../type";

export default (state, action) => {
  switch(action.type){
    case ADD_ISSUE:
      const newAllIssues = state.allIssues.concat([action.payload]);
      const newNotDoneIssues = state.notDoneIssues.concat([action.payload]);
      return {
        ...state,
        allIssues: newAllIssues,
        notDoneIssues: newNotDoneIssues
      }

    case GET_ISSUES:
      return {
        ...state,
        allIssues: action.payload
      }

    case GET_NOTDONE_ISSUES:
      return {
        ...state,
        notDoneIssues: action.payload
      }
  }
}