'use strict'

document.addEventListener('DOMContentLoaded',() =>{
    const imag = document.getElementById('image1');
    const imag2 = document.getElementById('image2');
    const imag3 = document.getElementById('image3');

    // URL de la imagen original
    const originalImage = imag.src;
    const originalImage2 = imag2.src;
    const originalImage3 = imag3.src
    // URL de la imagen temporal
    const hoverImage = 'https://www.revistaautocrash.com/wp-content/uploads/2017/07/EDICION-43/Motos/Motos-43.jpg';
    const hoverImage2 = 'https://http2.mlstatic.com/D_NQ_NP_715686-MLU72988022118_112023-O.webp';
    const hoverImage3 = 'https://http2.mlstatic.com/D_NQ_NP_670273-MLM54130331255_032023-O.webp';
    // Evento cuando el cursor pasa sobre la imagen
    imag.addEventListener('mouseover', function() {
      imag.src = hoverImage; // Cambiar a la imagen temporal
      imag.style.width = '350px'; // Hacer la imagen más pequeña
      imag.style.height = '180px'; // Ajustar la altura también
    });

    imag2.addEventListener('mouseover', function() {
        imag2.src = hoverImage2; // Cambiar a la imagen temporal
        imag2.style.width = '350px'; // Hacer la imagen más pequeña
        imag2.style.height = '180px'; // Ajustar la altura también
      });
      
      imag3.addEventListener('mouseover', function() {
        imag3.src = hoverImage3; // Cambiar a la imagen temporal
        imag3.style.width = '350px'; // Hacer la imagen más pequeña
        imag3.style.height = '180px'; // Ajustar la altura también
      });
    // Evento cuando el cursor sale de la imagen
    imag.addEventListener('mouseout', function() {
      imag.src = originalImage; // Volver a la imagen original
      imag.style.width = '320px'; // Volver al tamaño original
      imag.style.height = '200px'; // Volver al tamaño original
    });
    imag2.addEventListener('mouseout', function() {
        imag2.src = originalImage2; // Volver a la imagen original
        imag2.style.width = '320px'; // Volver al tamaño original
        imag2.style.height = '200px'; // Volver al tamaño original
      });
      imag3.addEventListener('mouseout', function() {
        imag3.src = originalImage3; // Volver a la imagen original
        imag3.style.width = '320px'; // Volver al tamaño original
        imag3.style.height = '200px'; // Volver al tamaño original
      });

})