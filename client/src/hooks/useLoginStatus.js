import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { checkAuthenticated } from "../apis/auth";
import setCurrentUser from "../actions/setCurrentUser";

function useLoginStatus() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!user.username) {
      checkAuthenticated().then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(setCurrentUser(res.data.user));
        } else {
          history.push("/login");
        }
      });
    }
  });
}

export default useLoginStatus;
