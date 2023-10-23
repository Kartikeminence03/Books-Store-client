const getAuthorConfig = () => {
    const user = JSON.parse(localStorage.getItem("user")) || "";
    const token = user?.token;
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    return config;
};

export default getAuthorConfig