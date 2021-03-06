import React, { Component } from "react"
import Image from "../general/image"
import "../../styles/tours/tour-cities.scss"
import InfoTabs from "../general/info-tabs"

class TourCities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }


  render() {
    const cities = [
      {
        name: 'Μπαλι',
        tabInfo: [{"title":"Γενικα","content":[{"title":"","text":"Το Παρίσι (γαλλικά: Paris, ΔΦΑ [paˈʁi]), γνωστό και ως η Πόλη του φωτός (Ville lumière), από τότε που εφοδιάστηκαν οι κύριες λεωφόροι του με φανούς γκαζιού το 1828, είναι η πρωτεύουσα της Γαλλίας και της περιφέρειας Ιλ ντε Φρανς (Île-de-France) και μία από τις ιστορικότερες πόλεις της Ευρώπης. Το Παρίσι περιλαμβάνει την πόλη του Παρισιού και τα περίχωρα και βρίσκεται σε ένα λεκανοπέδιο.","name":"Γενικα"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]},{"title":"Φαγητο","content":[{"name":"οαερκοεα","text":"ροεακορεακ"}]},{"title":"Πολιτισμος","content":[{"name":"εοακρο","text":"εραοκροαεκ"}]}],
        fileName: 'bali-waterfall.jpg'
      },
      {
        name: 'Ουμπουντ',
        tabInfo: [{"title":"Γενικα","content":[{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."},,{"title":"","text":"Το Παρίσι (γαλλικά: Paris, ΔΦΑ [paˈʁi]), γνωστό και ως η Πόλη του φωτός (Ville lumière), από τότε που εφοδιάστηκαν οι κύριες λεωφόροι του με φανούς γκαζιού το 1828, είναι η πρωτεύουσα της Γαλλίας και της περιφέρειας Ιλ ντε Φρανς (Île-de-France) και μία από τις ιστορικότερες πόλεις της Ευρώπης. Το Παρίσι περιλαμβάνει την πόλη του Παρισιού και τα περίχωρα και βρίσκεται σε ένα λεκανοπέδιο.","name":"Γενικα"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]},{"title":"Φαγητο","content":[{"name":"οαερκοεα","text":"ροεακορεακ"}]},{"title":"Πολιτισμος","content":[{"name":"εοακρο","text":"εραοκροαεκ"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]}],
        fileName: 'indonesia-ubud-forrest.jpg'
      },
      {
        name: 'Τζακαρτα',
        tabInfo: [{"title":"Γενικα","content":[{"title":"","text":"Το Παρίσι (γαλλικά: Paris, ΔΦΑ [paˈʁi]), γνωστό και ως η Πόλη του φωτός (Ville lumière), από τότε που εφοδιάστηκαν οι κύριες λεωφόροι του με φανούς γκαζιού το 1828, είναι η πρωτεύουσα της Γαλλίας και της περιφέρειας Ιλ ντε Φρανς (Île-de-France) και μία από τις ιστορικότερες πόλεις της Ευρώπης. Το Παρίσι περιλαμβάνει την πόλη του Παρισιού και τα περίχωρα και βρίσκεται σε ένα λεκανοπέδιο.","name":"Γενικα"},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."},{"name":"Πληθησμος","text":"Το Παρίσι είναι κτισμένο στο κέντρο του λεκανοπεδίου του Παρισιού, κατά μέσο όρο 65 μέτρα πάνω από τη στάθμη της θάλασσας. Η πόλη του Παρισιού περιβάλλεται από μεγάλα δάση, τα οποία προσφέρουν ανάσα δροσιάς και ανάπαυσης στους Παριζιάνους. Η έκταση της πόλης φτάνει τα 105,4 τετραγωνικά χιλιόμετρα, ενώ ολόκληρη η μητροπολιτική περιοχή ξεπερνά τα 14.518 τετραγωνικά χιλιόμετρα."}]},{"title":"Φαγητο","content":[{"name":"οαερκοεα","text":"ροεακορεακ"}]},{"title":"Πολιτισμος","content":[{"name":"εοακρο","text":"εραοκροαεκ"}]}],
        fileName: 'indonesia-jakarta-center-2.jpg'
      }
    ]


    return (
      <div className="col-12 row p-0 m-0">
        <div className='d-flex flex-wrap col-12 col-lg-8 offset-lg-2 my-5 p-0 tour-cities-wrap'>
          <h2 className='display-5 d-block m-0 p-0'>Επισκεψη στις πολεις</h2>
          <h5 className='col-12 m-0 p-0 display-7 mb-5'>Παρτε μια γευση</h5>
          {
            cities.map((city,i)=>{
              return (
                <div className="d-flex flex-wrap tour-cities col-12 p-0 mb-5">
                  <div className="col-12 col-lg-6 p-0 text-left tour-cities-image">
                    <div className="tour-cities-caption position-absolute">
                      {`Πόλη ${i + 1}`}
                    </div>
                    <Image className='tour-cities-img p-0 m-0' fileName={city.fileName} alt={''} />

                  </div>
                  <div className="col-12 col-lg-6 tour-cities tour-cities-info">
                    <h4 className='display-5 m-0 mb-3 tour-city-title w-100'>{city.name}</h4>
                    <InfoTabs limitSections={3} className='tour-cities-tabs' tabInfo={city.tabInfo}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default TourCities