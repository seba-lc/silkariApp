import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const IssuesList = ({ roomIssues }) => {

  let navigate = useNavigate();

  return (
    <Table striped bordered>
        <thead>
          <tr>
            <th className='text-center'>Issue</th>
            <th className='text-center'>Log Date</th>
            <th className='text-center'>Sign</th>
            <th className='text-center'></th>
          </tr>
        </thead>
        <tbody>
          {
            roomIssues?.map((issue, index) => (
              <tr key={index}>
                <td>{issue.description}</td>
                <td>{issue.entryDate}</td>
                <td>{issue.sign}</td>
                <td className='pointer fixIssue-style' onClick={() => navigate('/issue', { state: issue })}><FontAwesomeIcon icon={faWrench} /></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
  );
};

export default IssuesList;