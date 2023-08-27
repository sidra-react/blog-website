

const ProfilePicUpload = ({ onChange }) => {


  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newProfilePic = URL.createObjectURL(file);
      onChange(newProfilePic);
    }
  };

  return (
    <div>
        <br/>
        <br/>
        <br/>
    <div className="file btn btn-lg btn-primary">
      Change Photo
      <input type="file" name="file" onChange={handleInputChange} />
    </div>
    </div>
  );
};

export default ProfilePicUpload;
