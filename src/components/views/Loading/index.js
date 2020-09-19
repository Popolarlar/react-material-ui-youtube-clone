import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
// import ReactDelayRender from "react-delay-render";

const Loading = () => {
  return <CircularProgress size={100} thickness={10} />;
};

// export default ReactDelayRender({ delay: 300 })(Loading);
export default Loading;
