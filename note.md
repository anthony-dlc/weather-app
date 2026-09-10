# 1 - DEFINIR EL PROBLEMA EN UNA FRASE:
1.	Que hace el sistema?
2.	Para quien?
3.	Que problema resuelve?


# 2 - IDENTIFICAR LAS ENTIDADES (LOS "SUSTANTIVOS"):
1.	Lista los objetos del mundo real que el sistema maneja.


# 3 - DEFINIR ATRIBUTOS DE CADA ENTIDAD:
1.	Para cada entidad: 
  a.	Que datos tiene?
  i.	Ex: Nombre, Fecha, Estado, Cantidad, Relación con otras entidades.

# 4 - DEFINIR COMPORTAMIENTO (LOS "VERBOS"):
1.	Que acciones puede hacer o recibir cada entidad?

# 5 - MAPEAR RELACIONES ENTRE ENTIDADES:
1.	Una entidad tiene muchas de otra (uno o muchos)? 
2.	Hay herencia real ( Comparten comportamiento -> clase base) o es mejor composición?
3.	Que entidad depende de cual?

# 6 - DEFINIR EL FLUJO DE DATOS:
1.	Como entra la información (Formulario, import, api)?
2.	Como se persite(localStorage, base de datos, archivo)?
3.	Cuando se guarda: cada acción, o al final de una secion?


# 7 - ESCRIBIR LOS CASOS DE USO PRINCIPALES:
1.	“Usuario hace x” -> que pasa paso a paso, que clase/métodos se llaman en que orden. 3-5 casos de uso bien definidos cubren la mayoría de la lógica real.

# 8 - IDENTIFICAR CASOS LIMITE:
1.	Que pasa si se repite una acción? Si se borra algo que tiene dependencias? Si un dato falta o es invalido?

# 9 - ESCRIBIR CODIGO:

Con 1-8 resueltos en papel o markdown, ya tienes el mapa completo. Aquí es donde tiene sentido delegar en una ia la implementación de piezas especificas – porque ya sabes exactamente que  necesitas y puedes verificar si el resultado es correcto.

Nota de uso:
Este framework funciona mejor cuando cada paso se resuelve antes de avanzar al siguiente.