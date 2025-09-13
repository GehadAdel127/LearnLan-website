
const ProfileDetails = ({ name, details, title, image, color }) => {
    return (
        <div className="card" style={{
            backgroundColor: color, width: "100%", borderRadius: "10px", display: "flex",
            justifyContent: "center", alignItems: "center", gap: "20px", transition: "all 0.5s ease"
        }}>
            <img src={image} alt="computer" style={{ width: "150px" }} />
            <div className="content">
                <h3>{name}</h3>
                <p>{details}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ProfileDetails