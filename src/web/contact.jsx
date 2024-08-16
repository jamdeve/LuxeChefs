import { Toaster, toast } from 'sonner';
import { useEffect } from 'react';
import './contact.css';

function ContactForm() {
  useEffect(() => {
    const form = document.getElementById('form');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {
        name: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        message: formData.get('mensaje'),
      };

      console.log(data);

      const loadingId = toast.loading('Enviando Formulario...');

      try {
        const response = await fetch(
          'https://server-crimson-fog-7342.fly.dev/send-email',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );

        toast.dismiss(loadingId);

        if (response.ok) {
            
          toast.success('Gracias, responderemos lo antes posible 👨🏻‍🍳');
        } else {
          toast.error('Error al enviar el email');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error al enviar el email');
      }
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup function to remove the event listener when the component unmounts or re-renders
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <section className="contacto">
      <div className="view" id="contacto"></div>
      <div className="wrapper contacto-wrapper">
        <div className="contacto-content">
          <h2 className="contacto-tittle">CONTACTO</h2>
          <div className="redes">
            <div className="redes-item redes-telefono">
              <span className="strong">Teléfono:</span>
              <a className="redes-link" href="https://wa.me/34674245070">
                (+34) 674 245 070
              </a>
            </div>
            <div className="redes-item redes-email">
              <span className="strong">Email:</span>
              <a className="redes-link" href="mailto:luxechefs@gmail.com">
                luxechefs@gmail.com
              </a>
            </div>
            <div className="redes-item redes-instagram">
              <span className="strong">Instagram:</span>
              <a className="redes-link" target="_blank" href="https://www.instagram.com/luxechefs.es/">
                @luxechefs.es
              </a>
            </div>
          </div>
          <h2 className="contacto-subtittle">-PEDIR PRESUPUESTO-</h2>

          <form method="POST" name="formDatosPersonales" id="form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Marcos Serrano Torres" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@gmail.com" required />

            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" name="telefono" id="telefono" placeholder="+34 276 728 929" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" placeholder="Buenas Luxe Chefs..." maxLength="300"></textarea>

            <input type="submit" name="enviar" value="enviar mensaje" />
          </form>
        </div>
      </div>
      <Toaster  richColors />
    </section>
  );
}

export default ContactForm;