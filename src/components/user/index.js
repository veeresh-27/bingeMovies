import React, { useEffect, useState } from "react";

function User({ response }) {
    
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(response);
  }, []);
  return { user };
}

export default User;
