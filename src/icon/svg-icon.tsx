import React, { FC } from 'react'

interface IProps {
  color?: string
  width?: number | string
  height?: number | string
}

export const ViewIcon: FC<IProps> = ({ color, width, height }) => {
  width = width || 16
  height = height || 16
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
    >
      <path d="M512 646.186667c-74.026667 0-134.186667-60.16-134.186667-134.186667s60.16-134.186667 134.186667-134.186667 134.186667 60.16 134.186667 134.186667-60.16 134.186667-134.186667 134.186667z m0-225.706667c-50.56 0-91.52 41.173333-91.52 91.52s41.173333 91.52 91.52 91.52 91.52-41.173333 91.52-91.52-40.96-91.52-91.52-91.52z" fill={color}></path>
      <path d="M512 759.253333c-158.72 0-259.84-64.64-316.8-118.826666-61.866667-59.093333-85.973333-117.973333-87.04-120.533334-1.92-5.12-1.92-10.666667 0-15.786666 1.066667-2.346667 99.2-239.36 403.84-239.36 158.72 0 259.84 64.64 316.8 118.826666 61.866667 59.093333 85.973333 117.973333 87.04 120.533334 1.92 5.12 1.92 10.666667 0 15.786666-1.066667 2.346667-99.2 239.36-403.84 239.36zM151.466667 512c18.986667 39.253333 113.066667 204.373333 360.533333 204.373333 245.333333 0 341.546667-166.186667 360.533333-204.586666-18.986667-39.253333-113.28-204.373333-360.533333-204.373334-245.333333 0-341.546667 166.4-360.533333 204.586667z" fill={color}></path>
    </svg>
  )
}

export const CalendarIcon: FC<IProps> = ({ width, height }) => {
  width = width || 16
  height = height || 16
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
    >
      <path d="M351.085714 309.289796c-13.061224 0-23.510204-10.44898-23.510204-23.510204V187.559184c0-13.061224 10.44898-23.510204 23.510204-23.510204s23.510204 10.44898 23.510204 23.510204v98.220408c0 13.061224-10.44898 23.510204-23.510204 23.510204zM672.914286 309.289796c-13.061224 0-23.510204-10.44898-23.510204-23.510204V187.559184c0-13.061224 10.44898-23.510204 23.510204-23.510204s23.510204 10.44898 23.510204 23.510204v98.220408c0 13.061224-10.44898 23.510204-23.510204 23.510204z" fill="#0B9682"></path>
      <path d="M847.934694 272.718367H176.065306c-33.959184 0-61.126531 27.167347-61.12653 61.126531V799.346939c0 33.959184 27.167347 61.126531 61.12653 61.12653h671.869388c33.959184 0 61.126531-27.167347 61.12653-61.12653V333.844898c0-33.959184-27.167347-61.126531-61.12653-61.126531z" fill="#16C4AF"></path>
      <path d="M833.828571 815.542857H190.171429c-15.673469 0-28.212245-12.538776-28.212245-28.212245V469.681633h700.081632v318.171428c0 15.15102-12.538776 27.689796-28.212245 27.689796z" fill="#E6FFFB"></path>
      <path d="M424.75102 604.473469H277.420408c-13.061224 0-23.510204-10.44898-23.510204-23.510204s10.44898-23.510204 23.510204-23.510204h147.330612c13.061224 0 23.510204 10.44898 23.510204 23.510204s-10.44898 23.510204-23.510204 23.510204zM424.75102 727.771429H277.420408c-13.061224 0-23.510204-10.44898-23.510204-23.510205s10.44898-23.510204 23.510204-23.510204h147.330612c13.061224 0 23.510204 10.44898 23.510204 23.510204s-10.44898 23.510204-23.510204 23.510205z" fill="#0B9682"></path>
      <path d="M746.579592 604.473469h-147.330612c-13.061224 0-23.510204-10.44898-23.510204-23.510204s10.44898-23.510204 23.510204-23.510204H747.102041c13.061224 0 23.510204 10.44898 23.510204 23.510204s-10.971429 23.510204-24.032653 23.510204zM746.579592 727.771429h-147.330612c-13.061224 0-23.510204-10.44898-23.510204-23.510205s10.44898-23.510204 23.510204-23.510204H747.102041c13.061224 0 23.510204 10.44898 23.510204 23.510204s-10.971429 23.510204-24.032653 23.510205z" fill="#0B9682"></path>
    </svg>
  )
}

export const TagIcon: FC<IProps> = ({ width, height }) => {
  width = width || 16
  height = height || 16
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
    >
      <path d="M463.6416 161.28a44.7552 44.7552 0 0 1 40.4032 12.2752l393.7216 393.7152a44.8 44.8 0 0 1 0 63.36l-262.4832 262.4768a44.8 44.8 0 0 1-63.36 0L178.2208 499.3856a44.7232 44.7232 0 0 1-12.8-37.0944V212.4864a51.2 51.2 0 0 1 51.2-51.2h247.0272zM381.856 359.104c24.9984-24.9984 24.9984-65.5232 0-90.5152-24.992-24.992-65.5168-24.992-90.5088 0-24.992 24.992-24.992 65.5168 0 90.5088 24.992 24.992 65.5168 24.992 90.5088 0z" fill="#8e8e8e"></path>
    </svg>
  )
}
