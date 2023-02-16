
import * as React from "react";

import * as request from './api';
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import TextArea from "./components/textArea";
import { useNavigate } from 'react-router-dom';
import AlertMessage from "./components/alert";
import NavBar from "./nav";


function RoadMap() {
  const navigate = useNavigate();
  const [name, setname] = React.useState('');
  const [arrival_date, setarrival_date] = React.useState('');
  const [leavedate, setleavedate] = React.useState('');
  const [comment, setcomment] = React.useState('');
  const [errors, setErrors] = React.useState({
    name: false,
    arrival_date: false,
    leavedate: false,
    comment: false,
  });
  const [editingMember, setEditingMember] = React.useState(null);
  const [teamMembers, setTeamMembers] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      var res = await request.fetchteams();
      console.log(res)
      setTeamMembers(res)
    }
    fetchData();
  }, []);




  return (


    <div className="">
      <NavBar />


      <div className="login-page container  d-flex flex-column  align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-5"></div>

          <span className="text-center "><h1>Roadmap</h1></span>


        </div>
        <div className="mb-5"></div>
        <div className="container">

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Feature Name</th>
                <th scope="col" className="testtt">Date</th>
                <th scope="col" className="testtt">Date</th>
                <th scope="col" className="testtt">Date</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
              <td><input type="text" className="square" /></td>
              <td><input type="text" className="square" /></td>
              <td><input type="text" className="square" /></td>
              <td><input type="text" className="square" /></td>
              <td><input type="text" className="square" /></td>
              <td><input type="text" className="square" /></td>
              </tr>

            </tbody>
          </table>




          <hr className="hr_line" />



        </div>

        <button type="button" class="btn btn-primary">Save</button>
        <div className="mb-3"></div>
        <div className="container d-flex">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1" >
              Step 1 : Add features that need to be developed in the “Features” tab.
            </option>
            <option value="1">
              Step 2 : Add team members who could work on features in the “Team” tab.
            </option>
            <option value="1">
              Step 3 : On this page, fill the central grid. Each input represents the number of team members that works on a given feature during a given week.
            </option>
            <option value="1">
              Step 4 : Verify that, for each feature, you assigned enough team members so that it can be completed. On the two left columns of this page, Cynthia displays the number of worked days needed to complete the features (based on estimate “Features” tab estimates) versus the number of team members you assigned on the roadmap.
            </option>
            <option value="1" className="text-wrap">
              Step 5 : Verify that you are not exceeding the number of available team members.<br /> On the two lowest rows of the roadmap, Cynthia displays the number of available team members (based on “Team” tab) versus the number of team members you assigned each week.</option>

          </select>
        </div>


      </div>



    </div>


  )
}

export default RoadMap;