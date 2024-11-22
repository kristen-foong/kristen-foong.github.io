import React, { Component } from 'react'

export default class RedSunsetFilter extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg">
                <filter id="red-sunset-with-purple" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feColorMatrix type="matrix" values="1 0 0 0 0
1 0 0 0 0
1 0 0 0 0
0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
	<feComponentTransfer in="colormatrix" result="componentTransfer">
    		<feFuncR type="table" tableValues="0.52 0.86 0.97"/>
		<feFuncG type="table" tableValues="0 0.08 0.81"/>
		<feFuncB type="table" tableValues="0.51 0.24 0.05"/>
		<feFuncA type="table" tableValues="0 1"/>
  	</feComponentTransfer>
	<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>
            </svg>
        )
    }
}