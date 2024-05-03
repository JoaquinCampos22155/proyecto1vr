Descripción
Este proyecto es una aplicación web que permite realizar operaciones sobre un blog conectada a una base de datos. La aplicación consta de diferentes componentes de manera que crea una aplicacion para el administrdor y otra para las visitas, estas pueden ingresar a ver el blog, pero no lo pueden editar, de la misma manera.

Funcionalidades
Agregar Publicación: El botón "Agregar" en SidebarA permite agregar una nueva publicación. Al hacer clic en este botón, se solicitará al usuario que ingrese el título, la descripción y la ruta de la imagen de la nueva publicación. Una vez ingresados los datos, se realiza una solicitud POST al servidor para agregar la publicación a la base de datos.
Eliminar Publicación: El botón "Eliminar" en SidebarA permite eliminar una publicación existente. Al hacer clic en este botón, se realiza una solicitud al servidor para eliminar la publicación seleccionada de la base de datos.
Editar Publicación: El botón "Editar" en SidebarA permite editar una publicación existente. Al hacer clic en este botón, se realiza una solicitud al servidor para editar la publicación seleccionada en la base de datos.
Estructura del Proyecto
frontend/: Contiene los archivos relacionados con el frontend de la aplicación, incluyendo componentes React y estilos CSS.
backend/: Contiene los archivos relacionados con el backend de la aplicación, incluyendo el servidor Node.js y la API RESTful.
README.md: Este archivo README que proporciona información sobre el proyecto.w