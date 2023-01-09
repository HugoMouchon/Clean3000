import React, { useState } from 'react'
import '../../sass/App.scss';
import './avisdepassage.scss'
import '../Home/home.scss';
import logo from '../../img/logo-clean3000.png';
import { Link } from 'react-router-dom';
import { Button, Form, Input, InputNumber } from 'antd';


// const Avisdepassage = () => {
//   return (
//     <html>
//       <header className='header'>
//         <Link to="/">
//           <img className='logo' src={logo} alt="loggo de l'entreprise Clean 3000" />
//         </Link>
//       </header>
//       <body className='container'>
//         <section className='avisdepassage'>

//             <Form.Item className='form'
//               label="Nom entreprise/ou client"
//               name={['entreprise', 'nom']}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Notre technicien est intervenu pour l'entretien de la vitrerie le"
//               name={['date', 'date']}
//             >
//               <InputNumber />
//             </Form.Item>

//             <div className='sous-titre'>
//               <h2>observations</h2>
//               <span>Merci de votre confiance</span>
//             </div>

//             <div className='signatures'>
//               <span>Signature du technicien</span>
//               <span>Signature du client/Cachet de l'entreprise</span>
//             </div>

//             <div className='btnSubmit'>
//               <Button type="primary" htmlType="submit">
//                 Enregistrer
//               </Button>
//             </div>

//         </section>
//       </body>
//     </html>
//   )
// }

// export default Avisdepassage

const Avisdepassage = () => {
  // Créer un état pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    entreprise: '',
    date: Date.now()
  })

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
  }

  return (
    <html>
//       <header className='header'>
//         <Link to="/">
//           <img className='logo' src={logo} alt="loggo de l'entreprise Clean 3000" />
//         </Link>
//       </header>
      <body className='container'>
        <section className='avisdepassage'>

          {/* Formulaire */}
          <form onSubmit={handleSubmit}>
            <Form.Item
              label="Nom entreprise/ou client"
              name='entreprise'
            >
              <Input onChange={handleChange} />
            </Form.Item>

            {/* Bouton de soumission */}
            <div className='btnSubmit'>
              <Button type="primary" htmlType="submit">
                Enregistrer
              </Button>
            </div>
          </form>

          {/* Affichage des données soumises */}
          <div>
            <p>Nom entreprise/client: {formData.entreprise}</p>
            <p>Date: {formData.date}</p>
          </div>
        </section>
      </body>
    </html>
  )
}

export default Avisdepassage

