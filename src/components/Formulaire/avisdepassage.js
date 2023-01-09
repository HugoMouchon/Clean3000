import React, { useState } from 'react'
import '../../sass/App.scss';
import './avisdepassage.scss'
import '../Home/home.scss';
import logo from '../../img/logo-clean3000-transparent.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Avisdepassage = () => {

  // Créer un état pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    entreprise: '',
    observation: '',
    date: Date.now()
  })

  // Créer un état pour stocker les entrées soumises
  const [listpassages, setListpassages] = useState([]);

  // Fonction pour mettre à jour l'état lorsque le formulaire est modifié
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // Fonction pour soumettre le formulaire
  const handleSubmit = (event) => {
    event.preventDefault()

    // Controle dans la console que les informations se stocks bien dans le tableau
    console.log(formData)

    // Le setState de la liste des avis de passage
    setListpassages([...listpassages, formData]);

    // Réinitialisation de l'état du formulaire
    setFormData({
      entreprise: '',
      observation: '',
      date: ''
    })
  }

  return (
    <html>
      <header className='header'>
        <Link to="/">
          <img className='logo' src={logo} alt="loggo de l'entreprise Clean 3000" />
        </Link>
      </header>
      <body className='container'>

        <section className='avisdepassage'>

          <div>
            <h2>Formulaire à remplir</h2>

            {/* Formulaire */}
            <form onSubmit={handleSubmit}>
              <div >
                <label className='form'>
                  Nom de l'entreprise ou du client
                  <input
                    type="text"
                    name="entreprise"
                    onChange={handleChange}
                    className='input' />
                </label>
              </div>

              <div className='observation'>
                <label className='form'>
                  Observations
                  <input
                    type="text"
                    name="observation"
                    onChange={handleChange}
                    className='input' />
                </label>
                <span>Merci de votre confiance</span>
              </div>

              <div className='signatures'>
                  <span>Signature du technicien</span>
                  <span>Signature du client</span>
              </div>

              {/* Bouton de soumission */}
              <div className='btnSubmit'>
                <Button
                  type="primary"
                  htmlType="submit"
                  className='btn'>
                  Enregistrer
                </Button>
              </div>
            </form>
          </div>

          {/* Affichage des données soumises */}
          <div className='listentreprises'>
            <h2>Listes des avis de passage</h2>
            {listpassages.map((passage, index) => (
              <div key={index} className='entreprise'>
                <p>Nom entreprise/client: {passage.entreprise}</p>
                <p>observations: {passage.observation}</p>
                <p>Date: {passage.date}</p>
              </div>
            ))}
          </div>
        </section>
      </body>
    </html>
  )
}

export default Avisdepassage

