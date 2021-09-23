export default function LoadingSvg(){
    return (
<svg 
style={{
    margin:'auto',
    background:'rgb(255, 255, 255)',
    display:'block',
    shapeRendering:'auto',
    width:'200px',
    height:'200px',
    preserveAspectRatio:'xMidYMid'

}}>
    <rect x="20" y="34.5" width="10" height="31" fill="#e15b64">
  <animate attributeName="y" repeatCount="indefinite" dur="1.8181818181818181s" calcMode="spline" keyTimes="0;0.5;1" values="25.2;34.5;34.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.36363636363636365s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.8181818181818181s" calcMode="spline" keyTimes="0;0.5;1" values="49.6;31;31" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.36363636363636365s"></animate>
</rect>
<rect x="45" y="34.5" width="10" height="31" fill="#f8b26a">
  <animate attributeName="y" repeatCount="indefinite" dur="1.8181818181818181s" calcMode="spline" keyTimes="0;0.5;1" values="27.525;34.5;34.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.18181818181818182s"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.8181818181818181s" calcMode="spline" keyTimes="0;0.5;1" values="44.95;31;31" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.18181818181818182s"></animate>
</rect>
<rect x="70" y="34.5" width="10" height="31" fill="#abbd81">
  <animate attributeName="y" repeatCount="indefinite" dur="1.8181818181818181s" calcMode="spline" keyTimes="0;0.5;1" values="27.525;34.5;34.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
  <animate attributeName="height" repeatCount="indefinite" dur="1.8181818181818181s" calcMode="spline" keyTimes="0;0.5;1" values="44.95;31;31" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
</rect>
</svg>
    )
}