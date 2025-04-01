import React from 'react'

const Loading = (props) => {
    const { color } = props
    return (
        <div style={{ position: "relative", height: "100vh", zIndex: 7, background: "#00000023", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill={color || "#000000"} stroke={color || "#000000"} stroke-width="17" r="10" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill={color || "#000000"} stroke={color || "#000000"} stroke-width="17" r="10" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill={color || "#000000"} stroke={color || "#000000"} stroke-width="17" r="10" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </div>
    )
}

export default Loading
