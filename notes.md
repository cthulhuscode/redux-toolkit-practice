### Redux

Es el patrón en el cual se basa en crear _reducers_, éstos crean nuevos estados y son producto de las acciones recibidas en los _reducers_.

### React Redux

Es/era la forma tradicional de trabajar con Redux en aplicaciones de React. Tiene distintas acciones, formas de manejar el state, de manejar el store, etc.

El inconveniente es que tiene mucho código boilerplate.

**useSelector**: cuando ocupamos seleccionar algo del state, o sea algo del store.

**useDispatch**: usada para despachar acciones.

### Redux Toolkit

Es una serie de herramientas que permiten implementar el patrón Redux de forma bastante sencilla.

#

_**Store**_: la única fuente de verdad.

No necesariamente todo debe de estar en el Store. Algunos componetes necesitan un state local.

**Slice**: es una función que recibe un objeto. El objeto contiene name, initialState, reducers.

**@@INIT**: indica que ese es el punto de inicialización del store.

**Thunks**: una acción asíncrona que dispara otra acción cuando se resuelve la petición asíncrona.
