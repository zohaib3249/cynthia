
import * as React from "react";

import * as request from './api';
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import { useNavigate } from 'react-router-dom';
import AlertMessage from "./components/alert";
import NavBar from "./nav";


function Teams() {
    const navigate = useNavigate();
    const [name, setname] = React.useState('');
    const [arrival_date, setarrival_date] = React.useState('');
    const [leavedate, setleavedate] = React.useState('');
    
    const [errors, setErrors] = React.useState({
        name: false,
        arrival_date: false,
        leavedate: false,
      });
    const propsData = {
        name: {
            error:errors.email,
            type:"text",
            placeholder: "  Enter Name",
            onchange_fun : setname
        },
        arrival_date: {
            error:errors.arrival_date,
            type:"date",
            placeholder: "",
            onchange_fun : setarrival_date
        },
        leavedate: {
            error:errors.arrival_date,
            type:"date",
            placeholder: "",
            onchange_fun : setarrival_date
        },
        buttonLarge: {
            type:"submit",
            newFeature: "Add",
        },
        buttonLarge2: {
            link : "/reset",
            newFeature: "Close",
        },
       
    };
    const validate = () => {
        
        const newErrors = {
          name: name === '',
          arrival_date: arrival_date === '',
          leavedate: leavedate === '',
         
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
      };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
       
      };
    return (
      
        
        <div className="container">
            <NavBar/>
      <div class="container">
        <div class="main_page flex-column d-flex justify-content-center">
                <div class="row ">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 flex-column d-flex justify-content-center">
                        <h1>
                            Team member list
                        </h1>
                    </div>
                    
                    <div class="col-md-3 flex-column d-flex justify-content-center align-items-center align-items-center">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        + New Member
                      </button>
                      
                    </div>
                    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add New Memeber</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="container">
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Name</label>
                                <ImputText className="input_field form-control " {...propsData.name} />

                              </div>
                              <div class="mb-2"></div>
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Leave Date</label>
                                <ImputText className="input_field form-control " {...propsData.arrival_date} />
                              </div>
                              <div class="mb-2"></div>
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Arival Date</label>
                                <ImputText className="input_field form-control " {...propsData.leavedate} />
                              </div>
                              <div class="mb-2"></div>
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Comment</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              </div>
                         

                            </div>
                          </div>
                          <div class="modal-footer d-flex justify-content-between ">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
              

                <table class="table table-borderless">
                    <thead>
                      <tr>
                    
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Arrival Date</th>
                        <th scope="col">Leave Date</th>
                        <th scope="col">Action</th>
                      </tr>
                      <tr class="border-bottom"></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <tr class="border-bottom">
                        <th scope="row">1</th>
                       
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                     
                        <td >
                       
                            <a href="" class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                            </a>
                          <a href="" class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>
                          </a>
                        </td>
                      </tr>
                      </tr>
                      
                    </tbody>
                  </table>

        </div>
      </div>

        </div>
        

    )
}

export default Teams;