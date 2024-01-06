export default function (imgData) {

    const imageData= imgData.imgData
    console.log(imageData)
return(
    <div>
    {
        imgData.imgData.map(image=>{
          return(
            <div key={image.id} className="column">
              <img src={image.img} alt=""></img>
            </div>
          )
        })
      }
      </div>
)
}