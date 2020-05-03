import React from "react";
import { ReactComponent as LoadingSvg } from "../../assets/loading.svg";

type Props = {
  className?: string;
  width?: string;
  height?: string;
  show?: boolean;
};

const Loading: React.FC<Props> = (props) => {
  const { className, height, width, show } = props;

  return (
    <>
      {show && (
        <div data-testid="loading" className={className}>
          <LoadingSvg height={height} width={width} />
        </div>
      )}
    </>
  );
};

Loading.defaultProps = {
  className: "",
  width: "2rem",
  height: "2rem",
  show: true
};

export default Loading;
