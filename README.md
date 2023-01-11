Une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular. l'API de cette application est construite selon des pratiques de code sécurisées (bcrypt, helmet, jsonwebtoken)

<b>Compétences</b> 
Mettre en œuvre des opérations CRUD et stocker des données de manière sécurisée
Implémenter un modèle logique de données conformément à la réglementation

Les #ROUTES pour tester chez Postman

-------------------------------------------
##La route POST pour créer un compte
-------------------------------------------
http://localhost:3000/api/auth/signup
Body-->Raw (JSON)

{
"email" : "xxxxxxxx", 
"password" : "xxxxxxxx" (mot de passe fort)
}

-------------------------------------------
##La route POST pour se logger
-------------------------------------------
http://localhost:3000/api/auth/login

{
"email" : "xxxxxxxx", 
"password" : "xxxxxxxx" 
}

-------------------------------------------
##La route POST pour créer une sauce
-------------------------------------------
http://localhost:3000/api/sauces/

Params-->KEY: userId VALUE: _id de l'user
Authorization: Bearer Token TOKEN: xxxxxxxx
Body-->form-data-->
KEY: sauce
VALUE:
{
    userId: "xxxxxx",
    name: "xxxxxx",
    manufacturer: "xxxxxx",
    description: "xxxxxx",
    mainPepper: "xxxxxx",
    heat: "xxxxxx",
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
}
KEY: image
file et selectionner l'image

-------------------------------------------
##La route GET pour afficher tous les sauces d'un user
-------------------------------------------
http://localhost:3000/api/sauces/
Authorization: Bearer Token TOKEN: xxxxxxxx
Body-->raw
{
"userId" : "xxxxxxx"
}

-------------------------------------------
##La route GET pour afficher une sauce
-------------------------------------------
http://localhost:3000/api/sauces/:id
Params-->KEY: userId VALUE: _id de l'user
Authorization: Bearer Token TOKEN: xxxxxxxx
Body-->none

-------------------------------------------
##La route PUT pour modifier une sauce qui était selectionner par son _id
-------------------------------------------
http://localhost:3000/api/sauces/:id
Params-->KEY: userId VALUE: _id de l'user
Authorization: Bearer Token TOKEN: xxxxxxxx
Body-->form-data-->
KEY: sauce
VALUE:
{
    userId: "xxxxxx",
    name: "xxxxxx",
    manufacturer: "xxxxxx",
    description: "xxxxxx",
    mainPepper: "xxxxxx",
    heat: "xxxxxx",
    }
KEY: image
file et selectionner l'image

-------------------------------------------
##La route DELETE pour modifier une sauce qui était selectionner par son _id
-------------------------------------------
http://localhost:3000/api/sauces/:id
Params-->KEY: userId VALUE: _id de l'user
