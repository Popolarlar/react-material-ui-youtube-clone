import React, { useState } from "react";

export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <div>{loadingMessage}</div>}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }

  return HOC;
};

export default IsLoadingHOC;
