import React from 'react';
import cx from 'classnames';
import callOrValue from '../util/callOrValue';

export default ({
  className,
  data,
  x = 0,
  y = 0,
  width,
  height,
  rx,
  ry,
  fill = 'steelblue',
  fillOpacity,
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeLinecap,
  strokeLinejoin,
  strokeMiterlimit,
  strokeOpacity,
  ...restProps,
}) => {
  return (
    <rect
      className={cx('vx-bar', className)}
      x={x}
      y={y}
      width={width}
      height={height}
      rx={rx}
      ry={ry}
      fill={fill}
      fillOpacity={fillOpacity}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeMiterlimit={strokeMiterlimit}
      strokeOpacity={strokeOpacity}
      {...Object.keys(restProps).reduce((ret, cur) => {
        ret[cur] = callOrValue(restProps[cur], data);
        return ret;
      }, {})}
    />
  );
}
