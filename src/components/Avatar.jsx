import React from 'react'
import "./Avatar.css"

const Avatar=({className,src,alt,...props})=> {
  return (
    <div>
      {src ? (
      <img {...props} className={`defaultClass ${className}`} src={src} alt={alt}/>):(<img {...props}className={`defaultClass ${className}`}src={"https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"} alt={alt}/>)}
    </div>
  )
}

export default Avatar
