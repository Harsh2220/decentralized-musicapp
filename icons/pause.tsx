import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Pause = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 50C0 22.3858 22.3858 0 50 0C77.6144 0 100 22.3858 100 50C100 77.6144 77.6144 100 50 100C22.3858 100 0 77.6144 0 50ZM44.186 31.3953C44.186 29.4688 42.6242 27.907 40.6977 27.907C38.7711 27.907 37.2093 29.4688 37.2093 31.3953V68.6046C37.2093 70.5312 38.7711 72.093 40.6977 72.093C42.6242 72.093 44.186 70.5312 44.186 68.6046V31.3953ZM62.7907 31.3953C62.7907 29.4688 61.2288 27.907 59.3023 27.907C57.3758 27.907 55.814 29.4688 55.814 31.3953V68.6046C55.814 70.5312 57.3758 72.093 59.3023 72.093C61.2288 72.093 62.7907 70.5312 62.7907 68.6046V31.3953Z"
      fill={props.color}
    />
  </Svg>
);

export default Pause;