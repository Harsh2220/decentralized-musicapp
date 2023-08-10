import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Play = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.759 67.3282V32.6205L67.0872 49.9744L39.759 67.3282ZM50 0C22.4308 0 0 22.4308 0 50C0 77.5692 22.4308 100 50 100C77.5692 100 100 77.5692 100 50C100 22.4308 77.5692 0 50 0Z"
      fill={props.color}
    />
  </Svg>
);
export default Play;
