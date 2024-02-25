import { useReducer } from "react"
import IssueReducer from "./IssueReducer"
import { axiosBackendClient } from "../../settings/axiosSettings";
import { ADD_ISSUE, GET_ISSUES, GET_NOTDONE_ISSUES } from "../../type";
import IssueContext from "./IssueContext";

const IssueState = ({ children }) => {
  const initialState = {
    allIssues: [],
    notDoneIssues: []
  }

  const [state, dispatch] = useReducer(IssueReducer, initialState);

  const addIssue = async (issue) => {
    let errors = false;
    try {
      const response = await axiosBackendClient.post('/issues', issue);
      if(response.status === 200){
        dispatch({
          type: ADD_ISSUE,
          payload: issue
        })
        console.log(response.data.message);
        return errors;
      }
    } catch (error) {
      console.log(error);
      return errors = true;
    }
  }

  const bringIssues = async () => {
    try {
      const response = await axiosBackendClient.get('/issues/all');
      if(response.status === 200){
        dispatch({
          type: GET_ISSUES,
          payload: response.data
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const notDoneIssuesFilter = () => {
    const issues = state.allIssues.concat([]);
    const notDone = issues.filter(item => item.status === 'not-done');
    dispatch({
      type: GET_NOTDONE_ISSUES,
      payload: notDone 
    })
  }

  return (
    <IssueContext.Provider
      value={{
        allIssues: state.allIssues,
        notDoneIssues: state.notDoneIssues,
        addIssue,
        bringIssues,
        notDoneIssuesFilter
      }}
    >
      { children }
    </IssueContext.Provider>
  )
}

export default IssueState;