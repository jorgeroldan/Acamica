-- a. Listá toda la información de la tabla, mostrando todas las columnas. 

SELECT * FROM producto;
-- b. Mostrá el nombre de producto y el precio de todos los productos. 

SELECT nombre, precio FROM producto;
-- c. Mostrá el nombre de producto y el precio de todos los productos que cuesten menos de 100 dólares. 

SELECT nombre, precio FROM producto WHERE precio < 100;
-- d. Mostrá el nombre de producto y su categoría para todos los productos de categoría “indumentaria”. 

SELECT nombre, categoria FROM producto WHERE categoria = "indumentaria";
-- e. Mostrá el nombre y precio de todos los productos de la categoría “tecnología” que cuestan menos de 300 dólares. 

SELECT nombre, precio FROM producto WHERE categoria = "indumentaria" AND precio < 300;
-- f. Mostrá el nombre, precio y país de venta de todos los productos que pueden comprarse en Estados Unidos por menos de 300 dólares.


SELECT nombre, precio, pais_venta FROM producto WHERE pais_venta = "Estados Unidos" AND precio < 300;
-- g. Mostrá el nombre, categoría y país de los productos de “hogar” que pueden comprarse en Colombia. 

SELECT nombre, precio, pais_venta FROM producto WHERE categoria = "Hogar" AND pais_venta = "Colombia";
-- h. Mostrá toda la información de los productos de Hogar que pueden comprarse en Argentina por menos de 5 dólares. 

SELECT nombre, precio, pais_venta FROM producto WHERE pais_venta = "Argentina" AND precio < 5;
-- i. Mostrá toda la información de los productos de indumentaria que pueden comprarse en Estados Unidos por menos de 50 dólares.
SELECT * FROM producto WHERE categoria = "Indumentaria" AND pais_venta = "Estados Unidos" AND precio < 50;





-- 6a) Mostrá el contenido de la tabla, mostrando todas las columnas que hay en ella.
SELECT * FROM usuario;

-- Utilizamos la consulta SELECT. Utilizamos "*" para mostrar todas las columnas de la tabla
-- Indicamos en el "FROM" de la consulta, la tabla de la cuál vamos a sacar la información,
-- en este caso, de la tabla usuario.

-- 6b) Mostrá sólo el username de todos los usuarios que hay en la tabla.
SELECT username FROM usuario;

-- Utilizamos la consulta SELECT. Luego indicamos el nombre de la columna que queremos ver,
-- en este caso "username".

-- 6c) Mostrá sólo el nombre de todos los usuarios que hay en la tabla.
SELECT nombre_completo FROM usuario;

-- Utilizamos la consulta SELECT. Luego indicamos el nombre de la columna que queremos ver,
-- en este caso "nombre_completo".

-- 6d) Mostrá el username, seguido de la cantidad de tweets de cada usuario.
SELECT username, cantidad_de_tweets FROM usuario;

-- Indicamos las columnas que queremos visualizar separadas por coma. En este caso
-- "username, cantidad_de_tweets"

-- 6e) Mostrá el username, el nombre completo y la cantidad de tweets de cada usuario.
SELECT username, nombre_completo, cantidad_de_tweets FROM usuario;

-- Indicamos las columnas que queremos visualizar separadas por coma. En este caso
-- "username, nombre_completo, cantidad_de_tweets"
