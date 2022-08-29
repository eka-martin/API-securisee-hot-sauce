//const { SimplePlaceholderMapper } = require('@angular/compiler/src/i18n/serializers/serializer');
const Sauce = require('../models/Sauce');
const fs = require('fs');

//logique de création de sauce
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    delete sauceObject._userId;
    const sauce = new Sauce({
        ...sauceObject,
        userId: req.auth.userId,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
        .then(() => { res.status(201).json({ message: 'Sauce enregistrée!' }) })
        .catch(error => { res.status(400).json({ error }) })
};

exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ? {
        ...JSON.parce(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    delete sauceObject._userId;
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            if (sauce.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-authorisé' });
            } else {
                Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet modifié!' }))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            if (sauce.userId != req.auth.userId) {
                res.status(401).json({ message: 'Non-authorisé' });
            } else {
                const filename = sauce.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Sauce.deleteOne({ _id: req.params.id })
                        .then(() => res.status(200).json({ message: 'Objet modifié!' }))
                        .catch(error => res.status(401).json({ error }));
                });
            }

        })
        .catch((error) => {
            res.status(500).json({ error })
        })
};

exports.searchOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(
            (sauce) => {
                res.status(200).json(sauce);
            }
        ).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        );
};

exports.searchAllSauces = (req, res, next) => {
    Sauce.find()
        .then(
            (sauces) => {
                res.status(200).json(sauces);
            }
        ).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        );
};