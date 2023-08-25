import Head from 'next/head';
import { useState } from 'react';
import Container from 'components/Container/Container'

export default function Home() {

  const [state, setState] = useState(false)

  const newWord = () => {
    fetch('/api/vocapi')
    .then(response => response.json())
    .then(data => setState(data))
  }

  return ( 
    <>
     <Container/>
     <div>
      <Head>
        <title>Titre de la page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Description de la page" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <div className="">Mot au hasard
      <button onClick={newWord} className='btn btn-primary d-block m-auto'></button>
      </div>
    </div>
   
  </>
  )
}


