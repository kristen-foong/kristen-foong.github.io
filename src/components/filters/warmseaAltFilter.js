import React, { Component } from 'react'

export default class WarmSeaAltFilter extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg">

                <filter id="warm-sea-alt" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feColorMatrix type="matrix" values="1 0 0 0 0
1 0 0 0 0
1 0 0 0 0
0 0 0 1 0" in="SourceGraphic" result="colormatrix" />
                    <feComponentTransfer in="colormatrix" result="componentTransfer">
                        <feFuncR type="table" tableValues="0.29 0.01 0.97" />
                        <feFuncG type="table" tableValues="0.12 0.52 0.94" />
                        <feFuncB type="table" tableValues="0.37 0.59 0.47" />
                        <feFuncA type="table" tableValues="0 1" />
                    </feComponentTransfer>
                    <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend" />
                </filter>
            </svg>
        )
    }
}