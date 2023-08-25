import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'components/Container/Container';
import React, { useRef,useEffect,useState } from 'react';



export default function index() { 
  return (
    <>
    <Container>
      <div className="container px-4">
			<h1 className="text-center">Page Contact</h1>
			<p className="text-center">Voici les articles</p>
		</div>
    </Container>

    <div className='container p-4'>
      <form>
        <label htmlFor="" className="form-label"></label>
      </form>
    </div>
  
   
    </>
   
  );
}

