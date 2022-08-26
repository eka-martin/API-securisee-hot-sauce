//const { SimplePlaceholderMapper } = require('@angular/compiler/src/i18n/serializers/serializer');
const Sauce = require('../models/Sauce');

//logique de création de sauce
exports.createSauce = (req, res, next) => {
    const sauce = new Sauce({
        userId: req.body.title,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        mainPepper: req.body.mainPepper,
        imageUrl: req.body.imageUrl,
        heat: req.body.heat,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        //userLiked: { type: ["String <userId>"], required: true },
        //userDisliked: { type: ["String <userId>"], required: true },
    });
    sauce.save().then(() => {
        res.status(201).json({
            message: 'Sauce saved successfully!'
        });
    }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.modifySauce = (req, res, next) => {
    const sauce = new Sauce({
        userId: req.body.title,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        mainPepper: req.body.mainPepper,
        imageUrl: req.body.imageUrl,
        heat: req.body.heat,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        //userLiked: { type: ["String <userId>"], required: true },
        //userDisliked: { type: ["String <userId>"], required: true },
    });
    Sauce.updateOne({ _id: req.params.id }, sauce)
        .then(() => {
            res.status(201).json({
                message: 'Sauce updated successfully!'
            });
        }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
};

exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
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