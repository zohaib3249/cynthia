
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


function Features() {
  const navigate = useNavigate();
  const [name, setname] = React.useState('');
  const [status, setstatus] = React.useState('');
  const [estimateWd, setestimateWd] = React.useState('');
  const [comment, setcomment] = React.useState('');
  const [errors, setErrors] = React.useState({
    name: false,
    status: false,
    estimateWd: false,
    comment: false,
  });
  const [editingFeature, seteditingFeature] = React.useState(null);
  const [features, setfeatures] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {

      var res = await request.fetchfeatures();
      console.log(res)
      setfeatures(res)
    }
    fetchData();
  }, []);
  const propsData = {
    name: {
      error: errors.name,
      type: "text",
      placeholder: "  Enter Name",
      onchange_fun: setname
    },
    status: {
      error: errors.status,
      type: "text",
      placeholder: "",
      onchange_fun: setstatus
    },
    estimateWd: {
      error: errors.estimateWd,
      type: "number",
      placeholder: "",
      onchange_fun: setestimateWd
    },
    comment: {
      error: errors.comment,
      placeholder: "Enter any comment",
      onchange_fun: setcomment
    },
    buttonLarge: {
      type: "submit",
      newFeature: "Add",
    },
    buttonLarge2: {
      link: "/reset",
      newFeature: "Close",
    },
  };
  const handleEditClick = (member) => {
    seteditingFeature(member);
    setname(member.name);
    setstatus(member.state);
    setestimateWd(member.estimate_wd);
    setcomment(member.comment);
  };
  const validate = () => {
    const newErrors = {
      // name: name === '',
      status: status === '',
      estimateWd: estimateWd === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };
  const handleAddMember = async () => {

    const newMember = {
      "name": name,
      "state": status,
      "estimate_wd": estimateWd,
      "comment": comment,
    };
    try {
      // debugger;
      console.log(newMember)
      const response = await request.addFeature(newMember);
      console.log(response)
     
      if (response.status === 201) {
        setfeatures([...features, response.data]);
        setname('');
        setstatus('');
        setestimateWd('');
        setcomment('');
      }
    } catch (error) {
      console.log('error')
      console.log(response)
      console.error(error);
    }

  };
  const handleEditMember = async () => {
    if (!validate()) {
      return;
    }
    const editedMember = {
     
      "name":name,
      "state":status,
      "estimate_wd":estimateWd,
      "comment":comment,
    };
    try {
      const response = await request.editFeature(editingFeature.feature_id, editedMember);
      if (response.status === 200) {
        const index = features.findIndex(feature => feature.feature_id === editingFeature.feature_id);
        const updatedMembers = [...features];
        updatedMembers[index] = response.data;
        setfeatures(updatedMembers);
        seteditingFeature(null);
        setname('');
        setstatus('');
        setestimateWd('');
        setcomment('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (member_id)=>{
    console.log('member_id', member_id)
    const response = await request.deleteFeature(member_id);
    if (response.status === 200) {
      console.log('deleted')
    }

  }



  return (


    <div className="">
      <NavBar />
      <div className="container">
        <div className="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <form onSubmit={handleAddMember}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Add feature</h5>
                  <button type="button" className="close btn btn-light" data-dismiss="modal" aria-label="Close">
                    X
                  </button>
                </div>
                <div className="modal-body">

                  <div className="container">
                    <div className="form-group ">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Name Field">Name</label>
                      <ImputText className="input_field form-control " {...propsData.name} value={name} />
                    </div>

                    <div className="mb-2"></div>
                    <div className="form-group" >
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Arival Date">Status</label>
                      <ImputText className="input_field form-control " {...propsData.status} value={status} />
                    </div>
                    <div className="mb-2"></div>
                    <div className="form-group">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Leave Date">Estimate Wd</label>
                      <ImputText className="input_field form-control " {...propsData.estimateWd} value={estimateWd} />
                    </div>
                    <div className="mb-2"></div>
                    <div className="form-group">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Comment">Comment</label>
                      <TextArea className="input_field form-control " {...propsData.comment} value={comment} />
                    </div>


                  </div>

                </div>
                <div className="modal-footer d-flex justify-content-between ">

                  <button type="button" className="button-large-2" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <form onSubmit={handleAddMember}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Add New Member</h5>
                  <button type="button" className="close btn btn-light" data-dismiss="modal" aria-label="Close">
                    X
                  </button>
                </div>
                <div className="modal-body">

                  <div className="container">
                    <div className="form-group ">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Name Field">Name</label>
                      <ImputText className="input_field form-control " {...propsData.name} />

                    </div>

                    <div className="mb-2"></div>
                    <div className="form-group" >
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Arival Date">Arival Date</label>
                      <ImputText className="input_field form-control " {...propsData.estimateWd} />
                    </div>
                    <div className="mb-2"></div>
                    <div className="form-group">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Leave Date">Leave Date</label>
                      <ImputText className="input_field form-control " {...propsData.status} />
                    </div>
                    <div className="mb-2"></div>
                    <div className="form-group">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Comment">Comment</label>
                      <TextArea {...propsData.comment} />

                    </div>


                  </div>

                </div>
                <div className="modal-footer d-flex justify-content-between ">

                  <button type="button" className="button-large-2" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {editingFeature && (<div className="modal" id="editexampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <form onSubmit={handleEditMember}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Edit Member</h5>
                  <button type="button" className="close btn btn-light" data-dismiss="modal" aria-label="Close">
                    X
                  </button>
                </div>
                <div className="modal-body">

                  <div className="container">
                    <div className="form-group ">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Name Field">Name</label>
                      <ImputText className="input_field form-control " {...propsData.name} value={name} />

                    </div>

                    <div className="mb-2"></div>
                    <div className="form-group" >
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Arival Date">Status</label>
                      <ImputText className="input_field form-control " {...propsData.status} value={status} />

                    </div>
                    <div className="mb-2"></div>
                    <div className="form-group">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Leave Date">Estimated Wd</label>
                      <ImputText className="input_field form-control " {...propsData.estimateWd} value={estimateWd} />
                    </div>
                    <div className="mb-2"></div>
                    <div className="form-group">
                      <label className="required" for="exampleFormControlTextarea1" data-toggle="tooltip" data-placement="top" title="Comment">Comment</label>
                      <TextArea className="input_field form-control " {...propsData.comment} value={comment} />
                    </div>


                  </div>

                </div>
                <div className="modal-footer d-flex justify-content-between ">

                  <button type="button" className="button-large-2" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>)}
        <div className="main_page flex-column d-flex justify-content-center">

          <div className="row ">
            <div className="col-md-3"></div>
            <div className="col-md-6 flex-column d-flex justify-content-center">
              <h1>
                Features List
              </h1>
            </div>

            <div className="col-md-3 flex-column d-flex justify-content-center align-items-center align-items-center">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                + New Feature
              </button>

            </div>


          </div>


          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Estimate Wd</th>
                <th scope="col">Action</th>
              </tr>
              <tr class="border-bottom"></tr>
            </thead>
            <tbody>
              {features.map(feature => (
                <tr key={feature.feature_id}>
                  <td>{feature.name}</td>
                  <td>{feature.state}</td>
                  <td>{feature.estimate_wd}</td>
                  <td >
                    <a href="" class="" data-toggle="modal" data-target="#editexampleModalCenter" onClick={() => handleEditClick(feature)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </a>
                    <a href="" class="" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onClick={() => handleDelete(feature.feature_id)}>
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                    </a>
                  </td>
                  <tr class="border-bottom"></tr>
                </tr>
              ))}
              <tr class="border-bottom"> </tr>

            </tbody>
          </table>

        </div>
      </div>

    </div>


  )
}

export default Features;