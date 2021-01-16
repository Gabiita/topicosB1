APLICACIÓN DE CHAT EN TIEMPO REAL CON FIREBASE Y IONIC REACT 

1. La aplicación parte con un archivo App.tsx, que está envuelto en un contexto Auth, 
en este contexto se encuentran las variables y funciones correspondientes al inicio y cierre de sesión.
La función de login importa la función de autenticación especificada en Firebase.tsx 

2. En el archivo App.tsx también se encuentra el sistema de ruteo, que tiene una ruta principal Home y la ruta para el Chat
3. Dentro de Home, usamos el componente ExploreContainer, este componente contiene el formulario de login y las funciones para renderizar cierto contenido en base al usuarioAutenticado.
4. Si el usuario no está autenticado renderiza el formulario de login, si sí lo está renderiza el componente Chat. 
4. Dentro de la página Chat, importamos el componente ChatVentana, en este componente se aloja la principal funcionalidad de nuestra app. 
5. Con useEffect cargamos los mensajes que ya estén en Base de datos y esto lo asignamos al estado mensajes. 
6. Una vez lleno nuestro State de mensajes, renderizamos por cada mensaje un elemento Card con la información del Usuario y el mensaje que envió 
7. Debajo del Chat, tenemos una caja de texto, que se encarga de cambiar el estado de la variable "texto"
8. Con el botón llamamos a la función enviarMensaje,  que recoge los datos necesarios (usuario y texto), enviamos el usuario autehticado y el valor de la variable texto, es decir el mensaje. 
9. Debajo de la caja de texto, tenemos el elemento para subir imagenes, este elemento llama a la función subir. 
10. En la función subir obtenemos el archivo enviado,apuntamos hacia nuestro Storage y guardamos la imagen. 
