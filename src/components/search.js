import React from "react"
import { Helmet } from "react-helmet"

const search = () => {
  return (
    <div>
      <Helmet>
        <script
          async
          src="https://cse.google.com/cse.js?cx=003624295726000675291:iawj2kriyxg"
        ></script>
      </Helmet>

      <div className="gcse-search"></div>
    </div>
  )
}


export default search