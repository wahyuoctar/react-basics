import TourCard from "../TourCard/TourCard"

const TourSection = () =>{
    return (
        <section id="tour" class="tour-dates-section">
        <div class="tour-dates-wrapper container py-5">
          <h2>TOUR DATES</h2>
          <em class="text-muted mt-3">Jangan lupa saksikan kami live</em>
          <div class="tour-cards-container mt-3">
            <TourCard/>
            <TourCard/>
            <TourCard/>
            </div>
          </div>
      </section>
    )
}

export default TourSection