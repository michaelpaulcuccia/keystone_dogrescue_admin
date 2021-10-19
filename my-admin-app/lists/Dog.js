const dotenv = require('dotenv').config();
const { Text, Integer, Checkbox, File, Uuid } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const fileAdapter = new CloudinaryAdapter({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'my-keystone-app',
  });

const dogFields = {
    fields: {
        name: {
            type: Text,
            isRequired: true
        },
        breed: {
            type: Text,
            isRequired: true
        },
        ageMonths: {
            type: Integer,
            isRequired: true
        }, 
        weightPounds: {
            type: Integer,
            isRequired: true
        },
        sex: {
            type: Text,
            isRequired: true  
        },
        image: {
            type: CloudinaryImage, 
            adapter: fileAdapter
        },
        disability: {
            type: Text,
            isMultiline: true
        },
        rescue: {
            type: Checkbox
        },
        kidFriendly: {
            type: Checkbox
        }, 
        catFriendly: {
            type: Checkbox
        }, 
        onlyDog: {
            type: Checkbox
        },
        houseTrained: {
            type: Checkbox
        },
        leashTrained: {
            type: Checkbox
        },
        inFoster: {
            type: Checkbox
        },
        featureDog: {
            type: Checkbox
        },
        successDog: {
            type: Checkbox
        },
        note: {
            type: Text,
            isMultiline: true
        }
    }
};

module.exports = dogFields