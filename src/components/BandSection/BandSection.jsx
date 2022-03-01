import BandMember from "../BandMember/BandMember"
import BandPhotos from "../BandPhotos/BandPhotos"
import TheBand from "../TheBand/TheBand"

const BandSection = () =>{
    return (
        <>
 <section id="band" className="container py-5">
  <TheBand/>
  <BandPhotos/>
</section>       
        </>
    )
}

export default BandSection