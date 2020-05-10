import React from "react";

import { useStateValue } from "../store";

export default function Root() {
  const [state, dispatch] = useStateValue();
  console.log(state);

  return <h1>Hello</h1>;
}
