import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { checkAuthenticated } from "../apis/auth";
import setCurrentUser from "../actions/setCurrentUser";

function useLoginStatus(redirect = true) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!user.username) {
      checkAuthenticated()
        .then((res) => {
          if (res.status === 200) {
            dispatch(setCurrentUser(res.data.user));
          } else if (redirect) {
            history.push("/login");
          }
        })
        .catch(/* Do not log any error */);
    }
  });
}

export default useLoginStatus;
