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
  const [entries, setEntries] = useState([]);

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
    // Traitement des données soumises ici
    console.log(formData)

    // Ajouter l'entrée soumise au tableau d'entrées
    setEntries([...entries, formData]);

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

          {/* Affichage des données soumises */}
          <div className='listentreprises'>
            {entries.map((entry, index) => (
              <div key={index}>
                <p>Nom entreprise/client: {entry.entreprise}</p>
                <p>observations: {entry.observation}</p>
                <p>Date: {entry.date}</p>
              </div>
            ))}
          </div>
        </section>
      </body>
    </html>
  )
}

export default Avisdepassage

