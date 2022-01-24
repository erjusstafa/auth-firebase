import React, { ReactElement } from 'react';
import "./style.scss"
function Loading():ReactElement {
  return(
      <div className="loader">
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

          </ul>
      </div>
  )
}

export default Loading;
