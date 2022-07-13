#  React Ecommerce
![foto](https://i.imgur.com/qpWG5wc.gif)
## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados

* Agradecimientos

* Autores

## Sobre el proyecto

Se presenta un proyecto Fullstack MERN de una red social con frontend desarrollado en React y con un backend desarrollado en MongoDb con Mongoose, utilizando Express y NodeJs.  En esta red social, los usuarios podrán registrarse, loguearse y hacer publicaciones (pudiendo darles like), además podrán seguir a otros usuarios y podrán utilizar un buscador para encontrar publicaciones. 

### 💫 Instalación y despliegue

Para descargarte el repositorio, abre una terminal y ejecuta el comando siguiente:

Frontend de la red social 
```
$ git clone https://github.com/franpd8/Red-Social-MERN
```
Backend de la red social
```
$ git clone https://github.com/franpd8/red-social-backend
```

 Seguidamente tendrás que descargar los módulos externos. Para ello, realiza el siguiente comando.

```
$ npm i
```

Después podrás adaptar ambos servidores con tu proyecto. Después, levanta el frontend de React así como el backend de Mongoose a través de:

```
$ npm start
```

Ahora podrás navegar a través del frontend cargando todos los usuarios y publicaciones del backend :) 

### 💻 Tecnologías usadas

* HTML
* CSS
* Sass
* Javascript
* NodeJS
* Express
* React
* React-Router
* Redux
* MongoDB
* Mongoose
* NodeJS 
* Axios 
* Ant-Design 

### Origen

Este proyecto está pensado como ejercicio final en The Bridge que nos permita poner en práctica los nuevos conocimientos adquiridos sobre MongoDB, Express, React y NodeJS, generando así un proyecto Fullstack MERN.  Vienen de la mano el familizarnos con crear diversos componentes en React y poder acceder de forma global al contenido de ciertas funciones que nos han ayudado a desarrollar el proyecto.  De la misma manera aprovechamos un proyecto anterior de Backend con Mongoose,que necesariamente habrá de sufrir modicaciones para adaptarse al nuevo proyecto. 

### ⚔️ Objetivos

Crear una API REST que sea capaz de lo siguiente:
* Registro de usuarios.
* Login de usuarios.
* Que se pueda ver las publicaciones y crear nuevas.
* Que se puedan editar y eliminar las publicaciones que hace el usuario logeado
* Dar/quitar Like a post.
* Buscador de perfiles de posts
* Que en tu perfil puedas ver tus datos y tus posts


#### ⚔️ Componentes mínimos:
* Register
* Login
* Home
* Posts
* AddPosts
* PostDetail
* Product
* Perfil. Vista perfil con los datos del usuario logeado y sus publicaciones
* Header
* Footer

#### ⚔️ Desafío:
* Los componentes no podrán sobrepasar las 400 líneas de código.
* Las funciones no deberán sobrepasar las 75 líneas de código.

### ⚔️ Funciones

En esta red social, el usuario puede acceder a diferentes páginas para ver las publicaciones de distintos usuarios. 

<br>

Para este sencillo ejercicio hemos creado cuatro vistas: home, people, profile, y además el buscador de post.
<br>
> <b>Home</b> <br/>
En la home encontramos diferentes creatividades que sirven como enlace a las distintas secciones de la aplicación. En home se pueden todas las publicaciones de los diferentes usuarios. En dichas publicaciones se muestra la imagen, el contador de likes y la descripción de la publicación.  <br> —— Al hacer click en la imagen nos llevará a la publicación en detalle con información extra.  <br> —— Al hacer click en el corazón, sumará un like al contador. 

<br>

><b>Perfil</b>
<br> En la página de perfil mostramos la información del usuario conectado en ese momento. Se puede ver nombre, biografía, enlace externo así como editar estos campos. Dentro del perfil tenemos además las publicaciones realizadas por el mismo, los usuarios a quien sigue, y los usuarios que le siguen.
<br> —— Mostramos además las estadísticas del usuario: número de post, seguidores y seguidos.
<br> —— Mostramos foto de perfil y foto de cabecera.
<br> —— Editamos el propio perfil.
<br> —— Las publicaciones mostradas en el perfil enlazan con la publicación en detalle.
<br> —— Al hacer click en los usuarios seguidos o en los seguidores podemos ir a sus respectivo perfil.

<br>

><b>Personas</b><br> Mostramos los usuarios registrados en la plataforma, indicando sus estadísticas, si los seguimos o si nos siguen ellos. 
<br> —— Al hacer click en sus tarjetas podremos acceder a su perfil.

<br>


><b>Perfil de usuarios</b><br>
Muestra toda la información del usuarios que estamos visitando, su descripción, sus estadísticas y publicaciones.  <br> —— Aparece la opción de seguir al usuario en caso de no hacerlo. 
<br> —— Podemos ver qué usuarios le siguen a quienes siguen. 

<br>

><b>Búsqueda de publicaciones</b>
<br> En la barra superior de la plataforma podemos hacer una búsqueda de publicaciones por nombre. Las publicaciones que coincidan se mostrarán y podremos acceder a ellas. 
<br>—— Al hacer click en la imagen nos llevará a la publicación en detalle con información extra.

![foto](https://i.imgur.com/4i86nMj.png)
—— Filtrar por categorías——<br>en todas las secciones contamos además con un filtro que limite los resultados según la categoría de prendas mostradas. Camisetas/T-shirts, Pantalones/Trousers, Sudaderas/Hoodies y Accesorios/Accesories. 
![foto](https://i.imgur.com/feQChyO.png)
—— Carrito de compra——<br>
 Hemos implementado un carrito que permita introducir productos en él. Si no hay productos en él mostrará el enlace a la vista de productos. Conforme se vayan añadiendo aparecerá una notificación temporal en pantalla para informar al usuario de esta acción. Dentro del carrito se mostrarán los productos añadidos y podrá realizar el pedido. En el caso de no estar logueado, redigirá a la pantalla de login, donde podrá ingresar y retomar el pedido. 
![foto](https://i.imgur.com/2etidth.png)
![foto](https://i.imgur.com/HKPywMP.png)
—— Login——<br>
La pantalla de login resulta sencilla y permite acceder al usuario introduciendo sus campos. De no ser un usuario registrado puede acceder a la pantalla de registro desde el login directamente. Mostramos notificación para informar al usuario de su proceso exitoso.

![foto](https://i.imgur.com/Q7wSncF.png)

—— Registro——<br>
Similar a la pantalla de login nos permite crear nuevos usuarios e ingresarlos en la base de datos para posteriormente hacer login. Mostramos notificación para informar al usuario de su proceso exitoso. Al registrarnos se nos redirigirá a la pantalla de login. 
![foto](https://i.imgur.com/VVlzRV7.png)
—— Perfil de usuario——<br>
En el perfil de usuario podemos acceder a la información persona, al historial de pedidos y el logout. La información personal podemos modificarla en caso de querer actualizar alguno de los campos.  El historial de pedidos se muestra con más recientes primero, indicando los productos que hay en cada uno de ellos. 
![foto](https://i.imgur.com/NjspMGw.png)
![foto](https://i.imgur.com/b8HQOFH.png)
## 🔜 Retos presentados

—— Adaptar backend ——<br>
Tomando como partida un backend anterior hecho con Sequelize realizamos cambios en las tablas y los controladores. Creamos desde cero los modelos para almacenar productos y categorias. Y rellenamos con nuevos Seed para ampliar el catálogo de la tienda.  Además, varios endpoint del backend necesitaron ser adaptados e incorporados, ya que la estructura base no encajaba del todo. 

—— Incorporar imágenes ——<br>
Añadimos imágenes para todos los productos directamente en la base de datos, de esta forma se pueden mostrar en el frontend directamente. 


—— Filtrar Productos ——<br>
Crear una función para mostrar solo los productos que coincidan con una única categoría, pudiendo ser esta los tipos de prenda. Además de ordenar los productos según su precio de mayor a menor o viceversa. 


## 🔜 Futuras Implementaciones

* Diseño responsive. 
* Corregir bugs 
* Añadir imágenes de forma local
* Permitir a los usuarios <i>guardar productos en favoritos.</i>
* Añadir <i>Valoraciones</i> a los productos.
* Añadir <i> Vista de Administrador</i> y CRUD de productos. 
* Añadir Breadcrums a la pagina de productos. 


##  ♥️ Agradecimientos

A todos los compis([Mike](https://github.com/MrSetOne),[Gabry](https://github.com/Gabo-Tech), [Xavi](https://github.com/xavi-mat) y [Vane](https://github.com/vaneebg/)) y profes en general: ([Sofía](https://github.com/SofiaPinilla), [Geer](https://github.com/GeerDev) e [Iván](https://github.com/ivanpuebla10)]).


## Autor

### 🐈‍⬛[Fran](https://github.com/franpd8)🐈‍⬛