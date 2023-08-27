import React, { useState, useEffect } from 'react';
import ProfilePicUpload from './ProfilePicUpload';
import './Profi.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const location = useLocation();
   let userEmail = 'no user';
 

  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedPhone, setEditedPhone] = useState('');
  const [editedProfession, setEditedProfession] = useState('');

  let username = '.';

  const searchEmail = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getByEmail?username=' + username);
      setEmail(response.data.email);

      if (response.data.profession !== null) {
        setProfession(response.data.profession);
      }
      if (response.data.phone !== null) {
        setPhone(response.data.phone);
      } else {
        setPhone('Your phone number here');
      }

      console.log("hey, I am called");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (location.state && location.state.id !== null) {
      username = location.state.id;
      searchEmail();
    }
  }, [location.state]);
  const [profilePic, setProfilePic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog');
 
  const handleProfilePicChange = (newPic) => {
    setProfilePic(newPic);
  };
  let usernamee=username;
  return (
    <div>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={profilePic} alt="Profile" />
                <ProfilePicUpload onChange={handleProfilePicChange} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                {location.state && location.state.id !== null ? (
                  <h5>{location.state.id}</h5>
                ) : (
                  <h5>No user</h5>
                )}
                {profession != null ? (
                  <h6>{profession}</h6>
                ) : (
                  <h6>Your profession here</h6>
                )}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
            <button
  className="profile-edit-btn"
  onClick={async () => {
    if (editMode) {
      try {
       await axios.post('http://localhost:8000/prof'
        , {
          username: location.state.id,
          editedPhone: editedPhone,
          editedProfession: editedProfession,
        });
        console.log("Hey, I am called1");

       
        setEditMode(false);
        searchEmail();
      } catch (error) {
        console.error(error);
      }
    } else {
     
      setEditedPhone(phone || '');
      setEditedProfession(profession || '');
    }
    setEditMode(!editMode);
  }}
>
  {editMode ? 'Save Changes' : 'Edit Profile'}
</button>

            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>SKILLS</p>
                <a href="">Web Designer</a><br />
                <a href="">Web Developer</a><br />
                <a href="">WordPress</a><br />
                <a href="">WooCommerce</a><br />
                <a href="">PHP, .Net</a><br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      {location.state && location.state.id !== null ? (
                        <p>{location.state.id}</p>
                      ) : (
                        <p>No user</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      {location.state && location.state.id !== null ? (
                        <p>{email}</p>
                      ) : (
                        <p>your@gmail.com</p>
                      )}
                    </div>
                  </div>
                  {editMode ? (
                    <>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            value={editedPhone}
                            onChange={(e) => setEditedPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            value={editedProfession}
                            onChange={(e) => setEditedProfession(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          {phone != null ? (
                            <p>{phone}</p>
                          ) : (
                            <p>Your phone here</p>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          {profession != null ? (
                            <p>{profession}</p>
                          ) : (
                            <p>Your profession here</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
